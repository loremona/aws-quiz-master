from flask import Flask, jsonify, request, render_template, session, redirect, url_for
import json
import os
import random
import hashlib
import re
import logging
import time as _time
from datetime import datetime, date, timedelta

logging.basicConfig(level=logging.INFO, format='%(levelname)s %(message)s')

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'aws-quiz-local-dev')

CARTELLA   = os.path.dirname(os.path.abspath(__file__))
FILE_JSON  = os.path.join(CARTELLA, 'database_domande.json')
FILE_ERRORI= os.path.join(CARTELLA, 'errori.json')
FILE_STORIA= os.path.join(CARTELLA, 'storia.json')
FILE_SR    = os.path.join(CARTELLA, 'sr_data.json')
FILE_SPIEG = os.path.join(CARTELLA, 'spiegazioni.json')
FILE_NOTE  = os.path.join(CARTELLA, 'note_aws_complete.json')

APP_PASSWORD = os.environ.get('APP_PASSWORD', '')

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

PIANO_STUDIO = [
    dict(id="iam",       fase="Fase 1 — Fondamenta",       titolo="IAM & Shared Responsibility", sett="Sett. 1–2",   tags=["IAM","Shared Responsibility"], obiettivo=80, desc="Il modello di sicurezza AWS e la gestione delle identità."),
    dict(id="compute",   fase=None,                         titolo="EC2 & Compute",               sett="Sett. 3–4",   tags=["EC2"],                          obiettivo=75, desc="Istanze, tipi, Auto Scaling, Load Balancer."),
    dict(id="storage",   fase=None,                         titolo="S3 & Storage",                sett="Sett. 5–6",   tags=["S3","Storage"],                  obiettivo=75, desc="Bucket, classi di storage, EBS, EFS, Glacier."),
    dict(id="networking",fase=None,                         titolo="VPC & Networking",            sett="Sett. 7–8",   tags=["VPC","Networking"],              obiettivo=75, desc="VPC, subnet, security group, NACL."),
    dict(id="database",  fase="Fase 2 — Servizi Core",     titolo="Database",                    sett="Sett. 9–10",  tags=["RDS","DynamoDB"],                obiettivo=75, desc="RDS, Aurora, DynamoDB, ElastiCache."),
    dict(id="billing",   fase=None,                         titolo="Billing & Pricing",           sett="Sett. 11–12", tags=["Billing & Cost"],                obiettivo=75, desc="Pricing, Reserved/Spot/On-Demand, Support plans."),
    dict(id="arch",      fase=None,                         titolo="Well-Architected & IaC",      sett="Sett. 13–14", tags=["Well-Architected","CloudFormation"], obiettivo=70, desc="I 6 pilastri e CloudFormation."),
    dict(id="serverless",fase=None,                         titolo="Serverless & Containers",     sett="Sett. 15–16", tags=["Lambda","ECS / Fargate"],        obiettivo=70, desc="Lambda, ECS, Fargate, EKS."),
    dict(id="messaging", fase="Fase 3 — Specializzazione", titolo="Messaging & Integration",     sett="Sett. 17–18", tags=["SNS","SQS"],                     obiettivo=70, desc="SQS, SNS, EventBridge."),
    dict(id="security",  fase=None,                         titolo="Security Avanzata",           sett="Sett. 19–20", tags=["Security"],                      obiettivo=70, desc="KMS, WAF, Shield, GuardDuty, Cognito."),
    dict(id="analytics", fase=None,                         titolo="Analytics & AI/ML",           sett="Sett. 21–22", tags=["Analytics","AI / ML"],           obiettivo=65, desc="Athena, Redshift, Kinesis, SageMaker."),
    dict(id="monitoring",fase=None,                         titolo="Monitoring & Management",     sett="Sett. 23–24", tags=["CloudWatch","Support"],          obiettivo=65, desc="CloudWatch, CloudTrail, Config."),
]

# ── I/O atomico ───────────────────────────────────────────────────────────────
def load_json(path, default):
    if not os.path.exists(path):
        return default
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        logging.error('load_json %s: %s', path, e)
        return default

def save_json(path, data):
    tmp = path + '.tmp'
    try:
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        os.replace(tmp, path)
    except Exception as e:
        logging.error('save_json %s: %s', path, e)

# ── Cache in memoria ─────────────────────────────────────────────────────────
_cache = {}

def get_db():
    if 'db' not in _cache:
        _cache['db'] = load_json(FILE_JSON, [])
    return _cache['db']

def get_errori():
    if 'errori' not in _cache:
        _cache['errori'] = set(load_json(FILE_ERRORI, []))
    return _cache['errori']

def get_storia():
    if 'storia' not in _cache:
        _cache['storia'] = load_json(FILE_STORIA, [])
    return _cache['storia']

def get_sr_data():
    if 'sr_data' not in _cache:
        _cache['sr_data'] = load_json(FILE_SR, {})
    return _cache['sr_data']

def get_spiegazioni():
    if 'spiegazioni' not in _cache:
        _cache['spiegazioni'] = load_json(FILE_SPIEG, {})
    return _cache['spiegazioni']

def get_sezioni():
    if 'sezioni' not in _cache:
        sezioni = []
        if os.path.exists(FILE_NOTE):
            for s in load_json(FILE_NOTE, []):
                if s.get('parole', 0) >= 20:
                    sezioni.append((s['titolo'], s['contenuto']))
        _cache['sezioni'] = sezioni
    return _cache['sezioni']

def get_tags():
    if 'tags' not in _cache:
        _cache['tags'] = _calcola_tags(get_db())
    return _cache['tags']

def get_dom_to_tags():
    if 'dom_to_tags' not in _cache:
        _cache['dom_to_tags'] = {q['domanda']: t for q, t in zip(get_db(), get_tags())}
    return _cache['dom_to_tags']

def get_hash_to_q():
    if 'hash_to_q' not in _cache:
        _cache['hash_to_q'] = {_sr_key(q['domanda']): q for q in get_db()}
    return _cache['hash_to_q']

# ── Logica quiz ───────────────────────────────────────────────────────────────
def _sr_key(domanda):
    return hashlib.md5(domanda.encode()).hexdigest()[:12]

def _calcola_tags(db):
    tags = []
    for q in db:
        testo   = (q['domanda'] + ' ' + ' '.join(q['opzioni'].values())).lower()
        trovati = [srv for srv, kws in SERVIZI_AWS.items() if any(kw in testo for kw in kws)]
        tags.append(trovati if trovati else ['Altro'])
    return tags

def _sr_stats():
    sr   = get_sr_data()
    oggi = date.today().isoformat()
    return {
        'tot':      len(sr),
        'scadute':  sum(1 for e in sr.values() if e.get('prossima') and e['prossima'] <= oggi),
        'imparate': sum(1 for e in sr.values() if e.get('ripetizioni', 0) >= 3),
    }

def _get_domande_sr(db):
    sr   = get_sr_data()
    oggi = date.today().isoformat()
    nuove, scadute = [], []
    for q in db:
        k = _sr_key(q['domanda'])
        if k not in sr:
            nuove.append(q)
        elif sr[k].get('prossima') and sr[k]['prossima'] <= oggi:
            scadute.append((sr[k]['prossima'], q))
    scadute.sort(key=lambda x: x[0])
    return [q for _, q in scadute] + nuove

def _aggiorna_sr(domanda, corretta):
    sr = get_sr_data()
    k  = _sr_key(domanda)
    e  = sr.get(k, {'intervallo': 1, 'facilita': 2.5, 'ripetizioni': 0, 'prossima': None})
    if corretta:
        e['ripetizioni'] += 1
        if   e['ripetizioni'] == 1: e['intervallo'] = 1
        elif e['ripetizioni'] == 2: e['intervallo'] = 6
        else:                       e['intervallo'] = round(e['intervallo'] * e['facilita'])
        e['facilita'] = round(min(3.0, e['facilita'] + 0.1), 2)
    else:
        e['ripetizioni'] = 0
        e['intervallo']  = 1
        e['facilita']    = round(max(1.3, e['facilita'] - 0.2), 2)
    e['prossima'] = (date.today() + timedelta(days=e['intervallo'])).isoformat()
    sr[k] = e
    save_json(FILE_SR, sr)
    _cache.pop('sr_data', None)

def _trova_spiegazione(domanda, opzioni, dettagliato=False):
    sezioni = get_sezioni()
    if not sezioni:
        return None, None
    STOP = {'the','a','an','is','are','was','were','be','have','has','do','does',
            'will','to','of','in','for','on','with','at','by','from','that','this',
            'and','or','but','not','use','using','used','user','users','company',
            'companies','customer','need','provide','ensure','allows','require'}
    testo_q  = domanda + ' ' + ' '.join(opzioni.values())
    parole   = re.findall(r'\b\w{3,}\b', testo_q.lower())
    keywords = set(w for w in parole if w not in STOP)
    scored   = sorted(
        ((sum(1 for kw in keywords if kw in (t+c).lower()), t, c) for t, c in sezioni),
        reverse=True
    )
    if not scored or scored[0][0] == 0:
        return None, None
    _, titolo, contenuto = scored[0]
    frasi = re.split(r'(?<=[.!?])\s+', contenuto)
    if dettagliato:
        risultato = ''
        for f in frasi:
            if len(risultato) + len(f) < 900:
                risultato += f + ' '
            else:
                break
        return titolo, risultato.strip()
    prima_frase = frasi[0] if frasi else ''
    if len(prima_frase) > 200:
        prima_frase = prima_frase[:200].rsplit(' ', 1)[0] + '...'
    return titolo, f'**{titolo}**\n\n{prima_frase}'

def _piano_progress(step):
    db = get_db(); dom_to_tags = get_dom_to_tags()
    errori = get_errori(); sr_data = get_sr_data()
    qs       = [q for q in db if any(t in dom_to_tags.get(q['domanda'], []) for t in step['tags'])]
    total    = len(qs)
    attempted= [q for q in qs if _sr_key(q['domanda']) in sr_data]
    wrong    = [q for q in attempted if q['domanda'] in errori]
    correct  = len(attempted) - len(wrong)
    score    = round(correct / total * 100, 1) if total else 0
    accuracy = round(correct / len(attempted) * 100) if attempted else 0
    return dict(total=total, attempted=len(attempted), correct=correct,
                score=score, accuracy=accuracy, superato=score >= step['obiettivo'])

# ── Stato quiz in memoria (app single-user locale) ────────────────────────────
quiz = {
    'domande': [], 'risposte': {}, 'modalita': 'practice',
    'attivo': False, 'salvato': False,
    'start_time': None, 'durata_sec': None,
}

# ── Auth ──────────────────────────────────────────────────────────────────────
@app.before_request
def check_auth():
    if not APP_PASSWORD:
        return
    if request.endpoint in ('login', 'static'):
        return
    if not session.get('ok'):
        if request.is_json or request.path.startswith('/api/'):
            return jsonify({'error': 'auth'}), 401
        return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        if request.get_json(silent=True, force=True).get('pw') == APP_PASSWORD:
            session['ok'] = True
            return jsonify({'ok': True})
        return jsonify({'error': 'wrong'}), 401
    return render_template('index.html')

# ── Pagine ────────────────────────────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html')

# ── API: stato iniziale ───────────────────────────────────────────────────────
@app.route('/api/init')
def api_init():
    db      = get_db()
    storia  = get_storia()
    avg     = round(sum(s['percentuale'] for s in storia) / len(storia), 1) if storia else 0
    tags    = sorted({t for ts in get_tags() for t in ts})
    sr_pool = len(_get_domande_sr(db))
    return jsonify({
        'db_size':          len(db),
        'errori_count':     len(get_errori()),
        'storia_count':     len(storia),
        'media':            avg,
        'sr':               _sr_stats(),
        'sr_pool':          sr_pool,
        'tags':             tags,
        'quiz_attivo':      quiz['attivo'],
        'password_required': bool(APP_PASSWORD),
    })

# ── API: quiz ─────────────────────────────────────────────────────────────────
@app.route('/api/quiz/start', methods=['POST'])
def api_quiz_start():
    data          = request.get_json()
    modalita      = data.get('modalita', 'practice')
    num_q         = int(data.get('num_q', 20))
    argomenti_sel = data.get('argomenti_sel', [])

    db          = get_db()
    errori      = get_errori()
    dom_to_tags = get_dom_to_tags()

    if modalita == 'errori' and errori:
        pool = [q for q in db if q['domanda'] in errori] or list(db)
    elif modalita == 'sr':
        pool = _get_domande_sr(db)
    else:
        pool = list(db)

    if argomenti_sel:
        pool = [q for q in pool if any(a in dom_to_tags.get(q['domanda'], []) for a in argomenti_sel)]

    if not pool:
        return jsonify({'error': 'Nessuna domanda corrisponde ai filtri'}), 400

    n       = min(num_q, len(pool))
    domande = pool[:n] if modalita == 'sr' else random.sample(pool, n)

    quiz.update({
        'domande':    domande,
        'risposte':   {},
        'modalita':   modalita,
        'attivo':     True,
        'salvato':    False,
        'start_time': _time.time() if modalita == 'exam' else None,
        'durata_sec': (90 * 60 * n // 65) if modalita == 'exam' else None,
    })

    sr_data = get_sr_data()
    questions_out = []
    for i, q in enumerate(domande):
        corr_list = [r.strip() for r in q['risposta_corretta'].split(',')]
        k = _sr_key(q['domanda'])
        questions_out.append({
            'idx':         i,
            'domanda':     q['domanda'],
            'opzioni':     q['opzioni'],
            'is_multi':    len(corr_list) > 1,
            'num_correct': len(corr_list),
            'q_hash':      k,
            'sr':          sr_data.get(k),
        })

    return jsonify({
        'questions':  questions_out,
        'modalita':   modalita,
        'durata_sec': quiz['durata_sec'],
        'total':      n,
    })

@app.route('/api/quiz/answer', methods=['POST'])
def api_quiz_answer():
    data      = request.get_json()
    idx       = int(data.get('idx', 0))
    selezione = data.get('selezione', [])

    if idx >= len(quiz['domande']):
        return jsonify({'error': 'Indice fuori range'}), 400

    q         = quiz['domande'][idx]
    corr_list = [r.strip() for r in q['risposta_corretta'].split(',')]

    # Confronto come insiemi (ordine e spazi irrilevanti)
    corretta = sorted(s.strip() for s in selezione) == sorted(corr_list)

    quiz['risposte'][str(idx)] = {'data': selezione, 'corretta': corretta}

    errori = get_errori()
    if corretta:
        errori.discard(q['domanda'])
    else:
        errori.add(q['domanda'])
    save_json(FILE_ERRORI, list(errori))
    _cache['errori'] = errori

    _aggiorna_sr(q['domanda'], corretta)

    k           = _sr_key(q['domanda'])
    spiegazioni = get_spiegazioni()
    spiegazione = spieg_tipo = spieg_titolo = None
    if k in spiegazioni:
        spiegazione = spiegazioni[k]
        spieg_tipo  = 'ai'
    else:
        titolo, testo = _trova_spiegazione(q['domanda'], q['opzioni'], dettagliato=True)
        if testo:
            spiegazione  = testo
            spieg_tipo   = 'pdf'
            spieg_titolo = titolo

    sr_e = get_sr_data().get(k)
    return jsonify({
        'corretta':         corretta,
        'risposta_corretta': corr_list,
        'spiegazione':      spiegazione,
        'spieg_tipo':       spieg_tipo,
        'spieg_titolo':     spieg_titolo,
        'sr':               sr_e,
    })

@app.route('/api/quiz/end', methods=['POST'])
def api_quiz_end():
    if quiz.get('salvato'):
        return jsonify({'ok': True})
    risposte = quiz['risposte']
    corrette = sum(1 for v in risposte.values() if v['corretta'])
    totale   = len(risposte)
    if totale > 0:
        storia = get_storia()
        storia.append({
            'data':        datetime.now().strftime('%Y-%m-%d %H:%M'),
            'corrette':    corrette,
            'totale':      totale,
            'percentuale': round(corrette / totale * 100, 1),
            'modalita':    quiz['modalita'],
        })
        save_json(FILE_STORIA, storia)
        _cache['storia'] = storia
        quiz['salvato'] = True
    quiz['attivo'] = False
    return jsonify({
        'corrette':    corrette,
        'totale':      totale,
        'percentuale': round(corrette / totale * 100, 1) if totale else 0,
    })

@app.route('/api/quiz/results')
def api_quiz_results():
    risposte = quiz['risposte']
    domande  = quiz['domande']
    corrette = sum(1 for v in risposte.values() if v['corretta'])
    totale   = len(risposte)
    sbagliate = [
        {'idx': i, 'domanda': domande[int(i)]['domanda'],
         'tua': v['data'], 'corretta': domande[int(i)]['risposta_corretta']}
        for i, v in risposte.items() if not v['corretta']
    ]
    return jsonify({
        'corrette':    corrette,
        'totale':      totale,
        'percentuale': round(corrette / totale * 100, 1) if totale else 0,
        'sbagliate':   sbagliate,
        'modalita':    quiz['modalita'],
    })

# ── API: strumenti ────────────────────────────────────────────────────────────
@app.route('/api/translate', methods=['POST'])
def api_translate():
    testo = request.get_json().get('testo', '')
    try:
        from deep_translator import GoogleTranslator
        return jsonify({'traduzione': GoogleTranslator(source='en', target='it').translate(testo)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/explain/<q_hash>')
def api_explain(q_hash):
    spiegazioni = get_spiegazioni()
    if q_hash in spiegazioni:
        return jsonify({'spiegazione': spiegazioni[q_hash], 'tipo': 'ai'})
    q = get_hash_to_q().get(q_hash)
    if q:
        titolo, testo = _trova_spiegazione(q['domanda'], q['opzioni'], dettagliato=False)
        if testo:
            return jsonify({'spiegazione': testo, 'tipo': 'pdf', 'titolo': titolo})
    return jsonify({'spiegazione': None}), 404

# ── API: statistiche ──────────────────────────────────────────────────────────
@app.route('/api/stats')
def api_stats():
    return jsonify({
        'storia': get_storia(),
        'errori': list(get_errori()),
        'sr':     _sr_stats(),
    })

@app.route('/api/errori/clear', methods=['POST'])
def api_errori_clear():
    _cache['errori'] = set()
    save_json(FILE_ERRORI, [])
    return jsonify({'ok': True})

# ── API: studio ───────────────────────────────────────────────────────────────
@app.route('/api/study')
def api_study():
    cerca     = request.args.get('q', '')
    solo_err  = request.args.get('solo_err', 'false') == 'true'
    argomenti = request.args.getlist('arg')
    db          = get_db()
    dom_to_tags = get_dom_to_tags()
    errori      = get_errori()
    sr_data     = get_sr_data()
    spiegazioni = get_spiegazioni()
    domande = db
    if cerca:
        domande = [q for q in domande if cerca.lower() in q['domanda'].lower()]
    if solo_err:
        domande = [q for q in domande if q['domanda'] in errori]
    if argomenti:
        domande = [q for q in domande if any(a in dom_to_tags.get(q['domanda'], []) for a in argomenti)]
    results = []
    for q in domande[:100]:
        k         = _sr_key(q['domanda'])
        corr_list = [r.strip() for r in q['risposta_corretta'].split(',')]
        results.append({
            'domanda':           q['domanda'],
            'opzioni':           q['opzioni'],
            'risposta_corretta': corr_list,
            'is_multi':          len(corr_list) > 1,
            'errore':            q['domanda'] in errori,
            'sr':                sr_data.get(k),
            'spiegazione':       spiegazioni.get(k),
            'q_hash':            k,
        })
    return jsonify({'domande': results, 'totale': len(domande)})

# ── API: piano di studio ──────────────────────────────────────────────────────
@app.route('/api/plan')
def api_plan():
    return jsonify([{**s, **_piano_progress(s)} for s in PIANO_STUDIO])

# ── Avvio ─────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    host  = os.environ.get('FLASK_HOST',  '127.0.0.1')
    port  = int(os.environ.get('FLASK_PORT',  5000))
    debug = os.environ.get('FLASK_DEBUG', 'false').lower() == 'true'
    app.run(host=host, port=port, debug=debug)
