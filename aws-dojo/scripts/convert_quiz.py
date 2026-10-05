#!/usr/bin/env python3
"""
Converte database_domande.json → aws-dojo/js/data/quiz_bank.js
Lanciare dalla root del repo: python3 aws-dojo/scripts/convert_quiz.py
"""
import hashlib, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

db_path = os.path.join(ROOT, 'database_domande.json')
with open(db_path, encoding='utf-8') as f:
    db = json.load(f)

# Domande aggiuntive scritte per coprire gli argomenti mancanti della guida CLF-C02
extra_path = os.path.join(ROOT, 'domande_extra.json')
extra = []
if os.path.exists(extra_path):
    with open(extra_path, encoding='utf-8') as f:
        extra = json.load(f)

# Spiegazioni in italiano, indicizzate come in app.py (md5 della domanda, 12 caratteri)
spieg_path = os.path.join(ROOT, 'spiegazioni.json')
spiegazioni = {}
if os.path.exists(spieg_path):
    with open(spieg_path, encoding='utf-8') as f:
        spiegazioni = json.load(f)

# Traduzioni italiane di domanda e opzioni, indicizzate per id della domanda.
# Tag, ordine delle opzioni e id restano calcolati sul testo inglese,
# così i progressi salvati nel browser non si perdono.
trad_path = os.path.join(ROOT, 'traduzioni_it.json')
traduzioni = {}
if os.path.exists(trad_path):
    with open(trad_path, encoding='utf-8') as f:
        traduzioni = json.load(f)

SERVIZI_AWS = {
    'EC2':               ['ec2', 'elastic compute cloud', 'instance type', ' ami ', 'auto scaling', 'load balancer', 'elb', ' alb', ' nlb', 'elastic load'],
    'S3':                [' s3 ', ' s3,', ' s3.', 's3)', 'simple storage service', 'bucket', 'object storage'],
    'IAM':               ['iam', 'identity and access', ' role ', 'policy', 'permission', 'principal', 'least privilege'],
    'RDS':               ['rds', 'relational database service', 'mysql', 'postgresql', 'aurora', 'mariadb'],
    'Lambda':            ['lambda', 'serverless', 'function as a service'],
    'VPC':               ['vpc', 'virtual private cloud', 'subnet', 'security group', 'nacl', 'network acl', 'internet gateway', 'nat gateway'],
    'CloudFront':        ['cloudfront', 'content delivery', ' cdn', 'edge location', 'distribution'],
    'Route 53':          ['route 53', 'route53', 'hosted zone', ' dns '],
    'DynamoDB':          ['dynamodb', 'nosql', 'key-value', 'document database'],
    'CloudWatch':        ['cloudwatch', 'metric', 'alarm', 'log group', 'monitoring'],
    'SNS':               ['sns', 'simple notification service', 'pub/sub', 'topic'],
    'SQS':               ['sqs', 'simple queue service', 'message queue', 'dead letter'],
    'ECS / Fargate':     ['ecs', 'elastic container service', 'fargate', 'container', 'docker'],
    'EKS':               ['eks', 'elastic kubernetes', 'kubernetes'],
    'CloudFormation':    ['cloudformation', 'infrastructure as code', ' iac', ' stack', 'cfn'],
    'Billing & Cost':    ['billing', 'cost explorer', 'pricing', 'free tier', 'reserved instance',
                          'on-demand', 'spot instance', 'savings plan', 'aws budgets'],
    'Security':          ['kms', 'key management', 'ssl', 'tls', 'waf', 'shield', 'cognito',
                          'macie', 'guardduty', 'inspector', 'encryption'],
    'Storage':           ['ebs', 'elastic block store', 'efs', 'elastic file system',
                          'glacier', 'storage gateway', 'snowball', 'snowmobile'],
    'Analytics':         ['athena', 'redshift', 'aws glue', 'kinesis', 'emr', 'quicksight', 'data lake'],
    'AI / ML':           ['sagemaker', 'rekognition', 'comprehend', 'polly', 'transcribe', 'lex', 'bedrock'],
    'Networking':        ['direct connect', 'site-to-site vpn', 'transit gateway', 'vpc peering', 'global accelerator'],
    'Support':           ['support plan', 'trusted advisor', 'personal health', 'aws iq', 'concierge'],
    'Well-Architected':  ['well-architected', 'reliability pillar', 'operational excellence',
                          'performance efficiency', 'cost optimization', 'sustainability pillar'],
    'Shared Responsibility': ['shared responsibility', 'customer responsibility', 'aws responsibility'],
}

def get_tags(q):
    testo = (q['domanda'] + ' ' + ' '.join(q['opzioni'].values())).lower()
    trovati = [srv for srv, kws in SERVIZI_AWS.items() if any(kw in testo for kw in kws)]
    return trovati if trovati else ['Altro']

def q_hash(domanda):
    return hashlib.md5(domanda.encode()).hexdigest()[:12]

def norm(t):
    return re.sub(r'[^a-z0-9]', '', t.lower())

# Opzioni che citano altre opzioni ("all of the above", "both A and B"):
# l'app non le mescola
POSIZIONALI = re.compile(r'\b(all|none|both) of the above\b|\b[A-F] and [A-F]\b', re.I)

def convert(q):
    keys = list(q['opzioni'].keys())
    opts = [v.strip() for v in q['opzioni'].values()]
    corr = [r.strip() for r in q['risposta_corretta'].split(',')]
    correct_indices = [keys.index(r) for r in corr]
    item = {
        'q': q['domanda'].replace('\n', ' ').strip(),
        'opts': opts,
        'a': correct_indices[0],
        'correct': correct_indices,
        'multi': len(corr) > 1,
        'tags': q.get('tags') or get_tags(q),
    }
    if any(POSIZIONALI.search(o) for o in opts):
        item['keepOrder'] = True
    if q.get('spiegazione'):
        item['explain'] = q['spiegazione']
    if q.get('dominio'):
        item['domain'] = q['dominio']
    return item

# Domande duplicate: stessa domanda e stesse opzioni (a meno di punteggiatura)
out, seen, varianti = [], set(), {}
for q in db + extra:
    h = q_hash(q['domanda'])
    firma = (h, frozenset(norm(v) for v in q['opzioni'].values()))
    if firma in seen:
        continue
    seen.add(firma)
    varianti[h] = varianti.get(h, 0) + 1
    item = convert(q)
    item['id'] = h if varianti[h] == 1 else f'{h}-{varianti[h]}'
    tr = traduzioni.get(item['id'])
    if tr and len(tr['opts']) == len(item['opts']):
        item['q'], item['opts'] = tr['q'], tr['opts']
    out.append((h, item))

# La spiegazione si aggancia solo se la domanda non ha varianti con opzioni diverse
for h, item in out:
    if 'explain' not in item and varianti[h] == 1 and h in spiegazioni:
        item['explain'] = spiegazioni[h]
out = [item for _, item in out]

out_path = os.path.join(ROOT, 'aws-dojo', 'js', 'data', 'quiz_bank.js')
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('/* Generato automaticamente da convert_quiz.py — non modificare a mano */\n')
    f.write('const QUIZ_BANK = ')
    json.dump(out, f, indent=2, ensure_ascii=False)
    f.write(';\n')

by_tag = {}
for item in out:
    for t in item['tags']:
        by_tag[t] = by_tag.get(t, 0) + 1
print(f'✅ Convertite {len(out)} domande uniche (su {len(db)} + {len(extra)} aggiuntive) → {out_path}')
print(f'   con spiegazione: {sum(1 for i in out if "explain" in i)}')
print('Distribuzione per tag:')
for tag, n in sorted(by_tag.items(), key=lambda x: -x[1]):
    print(f'  {tag}: {n}')
