#!/usr/bin/env python3
"""
Converte database_domande.json → aws-dojo/js/data/quiz_bank.js
Lanciare dalla root del repo: python3 aws-dojo/scripts/convert_quiz.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

db_path = os.path.join(ROOT, 'database_domande.json')
with open(db_path, encoding='utf-8') as f:
    db = json.load(f)

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

def convert(q):
    keys = list(q['opzioni'].keys())
    opts = [f"{k}: {v}" for k, v in q['opzioni'].items()]
    corr = [r.strip() for r in q['risposta_corretta'].split(',')]
    a = keys.index(corr[0])
    multi = len(corr) > 1
    correct_indices = [keys.index(r) for r in corr]
    return {
        'q': q['domanda'].replace('\n', ' ').strip(),
        'opts': opts,
        'a': a,
        'correct': correct_indices,
        'multi': multi,
        'tags': get_tags(q),
    }

out = [convert(q) for q in db]

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
print(f'✅ Convertite {len(out)} domande → {out_path}')
print('Distribuzione per tag:')
for tag, n in sorted(by_tag.items(), key=lambda x: -x[1]):
    print(f'  {tag}: {n}')
