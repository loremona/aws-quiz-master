import streamlit as st
import json
import random
import os
import re
import time
import hashlib
from datetime import datetime, date, timedelta
import pandas as pd
import plotly.express as px

st.set_page_config(page_title="AWS Quiz Master", page_icon="☁️", layout="wide",
                   initial_sidebar_state="expanded")

CARTELLA_AWS = os.path.dirname(os.path.abspath(__file__))
FILE_JSON    = os.path.join(CARTELLA_AWS, "database_domande.json")
FILE_ERRORI  = os.path.join(CARTELLA_AWS, "errori.json")
FILE_STORIA  = os.path.join(CARTELLA_AWS, "storia.json")
FILE_PDF     = os.path.join(CARTELLA_AWS, "noteawsokokok.pdf")
FILE_NOTE    = os.path.join(CARTELLA_AWS, "note_aws_complete.json")
FILE_SR      = os.path.join(CARTELLA_AWS, "sr_data.json")
FILE_SPIEG   = os.path.join(CARTELLA_AWS, "spiegazioni.json")

CSS = """
<style>
.q-card    { background:#1e2a3a; border-left:4px solid #FF9900; padding:1.1rem;
             border-radius:8px; margin-bottom:.8rem; font-size:1.05rem; line-height:1.6; color:#e8eaf0; }
.pdf-box   { background:#0d2233; border-left:4px solid #17a2b8; padding:.8rem;
             border-radius:6px; font-size:.9rem; white-space:pre-wrap; color:#a8d8ea; }
.stat-card { background:#1a1a2e; border:1px solid #444; padding:1rem;
             border-radius:8px; text-align:center; color:#e0e0e0; }
.timer-ok  { color:#4CAF50; font-size:1.3rem; font-weight:bold; text-align:center; }
.timer-warn{ color:#FF9900; font-size:1.3rem; font-weight:bold; text-align:center; }
.timer-red { color:#f44336; font-size:1.3rem; font-weight:bold; text-align:center; }
</style>
"""

# Dizionario per l'auto-tagging delle domande per servizio AWS
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

# ── Persistenza ───────────────────────────────────────────────────────────────
def carica_database():
    if os.path.exists(FILE_JSON):
        with open(FILE_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def carica_errori():
    if os.path.exists(FILE_ERRORI):
        try:
            with open(FILE_ERRORI, 'r', encoding='utf-8') as f:
                return set(json.load(f))
        except: pass
    return set()

def salva_errori(s):
    tmp = FILE_ERRORI + '.tmp'
    try:
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(list(s), f, indent=2)
        os.replace(tmp, FILE_ERRORI)
    except Exception as e:
        st.warning(f"salva_errori: impossibile scrivere ({e})")

# ── Spaced Repetition (SM-2 semplificato) ────────────────────────────────────
def _sr_key(domanda):
    return hashlib.md5(domanda.encode()).hexdigest()[:12]

def carica_sr():
    if os.path.exists(FILE_SR):
        try:
            with open(FILE_SR, 'r', encoding='utf-8') as f:
                return json.load(f)
        except: pass
    return {}

def salva_sr(sr):
    tmp = FILE_SR + '.tmp'
    try:
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(sr, f, indent=2)
        os.replace(tmp, FILE_SR)
    except Exception as e:
        print(f"salva_sr: impossibile scrivere ({e})")

@st.cache_resource
def carica_spiegazioni():
    if os.path.exists(FILE_SPIEG):
        try:
            with open(FILE_SPIEG, 'r', encoding='utf-8') as f:
                return json.load(f)
        except: pass
    return {}

def aggiorna_sr(domanda, corretta):
    sr = st.session_state.sr_data
    k  = _sr_key(domanda)
    e  = sr.get(k, {"intervallo": 1, "facilita": 2.5, "ripetizioni": 0, "prossima": None})
    if corretta:
        e['ripetizioni'] += 1
        if e['ripetizioni'] == 1:   e['intervallo'] = 1
        elif e['ripetizioni'] == 2: e['intervallo'] = 6
        else:                       e['intervallo'] = round(e['intervallo'] * e['facilita'])
        e['facilita'] = round(min(3.0, e['facilita'] + 0.1), 2)
    else:
        e['ripetizioni'] = 0
        e['intervallo']  = 1
        e['facilita']    = round(max(1.3, e['facilita'] - 0.2), 2)
    e['prossima'] = (date.today() + timedelta(days=e['intervallo'])).isoformat()
    sr[k] = e
    st.session_state.sr_data = sr
    salva_sr(sr)

def get_domande_sr(db):
    """Ritorna le domande da ripassare oggi (scadute prima, poi mai viste)."""
    sr   = st.session_state.sr_data
    oggi = date.today().isoformat()
    nuove, scadute = [], []
    for q in db:
        k = _sr_key(q['domanda'])
        if k not in sr:
            nuove.append(q)
        elif sr[k]['prossima'] <= oggi:
            scadute.append((sr[k]['prossima'], q))
    scadute.sort(key=lambda x: x[0])
    return [q for _, q in scadute] + nuove

def sr_stats():
    sr   = st.session_state.sr_data
    oggi = date.today().isoformat()
    tot      = len(sr)
    scadute  = sum(1 for e in sr.values() if e['prossima'] <= oggi)
    imparate = sum(1 for e in sr.values() if e['ripetizioni'] >= 3)
    return tot, scadute, imparate

# ── Auto-tagging ──────────────────────────────────────────────────────────────
def calcola_tags(db):
    tags = []
    for q in db:
        testo   = (q['domanda'] + " " + " ".join(q['opzioni'].values())).lower()
        trovati = [srv for srv, kws in SERVIZI_AWS.items() if any(kw in testo for kw in kws)]
        tags.append(trovati if trovati else ['Altro'])
    return tags

# ── Storia ────────────────────────────────────────────────────────────────────
def carica_storia():
    if os.path.exists(FILE_STORIA):
        try:
            with open(FILE_STORIA, 'r', encoding='utf-8') as f:
                return json.load(f)
        except: pass
    return []

def salva_storia(storia):
    tmp = FILE_STORIA + '.tmp'
    try:
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(storia, f, indent=2, ensure_ascii=False)
        os.replace(tmp, FILE_STORIA)
    except Exception as e:
        st.warning(f"salva_storia: impossibile scrivere ({e})")

def aggiungi_storia(corrette, totale, modalita):
    if st.session_state.sessione_salvata or totale == 0:
        return
    entry = {
        "data":        datetime.now().strftime("%Y-%m-%d %H:%M"),
        "corrette":    corrette,
        "totale":      totale,
        "percentuale": round(corrette / totale * 100, 1),
        "modalita":    modalita,
    }
    st.session_state.storia.append(entry)
    salva_storia(st.session_state.storia)
    st.session_state.sessione_salvata = True

# ── Note (JSON combinato grezzo+pulito) ───────────────────────────────────────
@st.cache_resource
def carica_pdf_index():
    if os.path.exists(FILE_NOTE):
        with open(FILE_NOTE, 'r', encoding='utf-8') as f:
            dati = json.load(f)
        return [(s['titolo'], s['contenuto']) for s in dati if s.get('parole', 0) >= 20]

    import pdfplumber
    sezioni = []
    full_text = ""
    with pdfplumber.open(FILE_PDF) as pdf:
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                full_text += t + "\n\n"
    titolo_corrente, blocco = "", []
    for line in full_text.split('\n'):
        line = line.strip()
        if not line:
            if blocco:
                testo = ' '.join(blocco)
                if len(testo) > 100:
                    sezioni.append((titolo_corrente, testo))
                blocco = []
        elif len(line) < 90 and not line.endswith(',') and (line[0].isupper() or line[0].isdigit()):
            if blocco:
                testo = ' '.join(blocco)
                if len(testo) > 100:
                    sezioni.append((titolo_corrente, testo))
                blocco = []
            titolo_corrente = line
        else:
            blocco.append(line)
    return sezioni

def trova_spiegazione(domanda, opzioni, sezioni, dettagliato=False):
    STOP = {'the','a','an','is','are','was','were','be','have','has','do','does',
            'will','to','of','in','for','on','with','at','by','from','that','this',
            'and','or','but','not','use','using','used','user','users','company',
            'companies','customer','need','provide','ensure','allows','require'}
    testo_q  = domanda + " " + " ".join(opzioni.values())
    parole   = re.findall(r'\b\w{3,}\b', testo_q.lower())
    keywords = set(w for w in parole if w not in STOP)

    scored = sorted(
        ((sum(1 for kw in keywords if kw in (t+c).lower()), t, c) for t, c in sezioni),
        reverse=True
    )
    if not scored or scored[0][0] == 0:
        return None, None

    _, titolo, contenuto = scored[0]
    frasi = re.split(r'(?<=[.!?])\s+', contenuto)

    if dettagliato:
        limite    = 900
        risultato = ""
        for f in frasi:
            if len(risultato) + len(f) < limite:
                risultato += f + " "
            else:
                break
        return titolo, risultato.strip()
    else:
        prima_frase = frasi[0] if frasi else ""
        if len(prima_frase) > 200:
            prima_frase = prima_frase[:200].rsplit(' ', 1)[0] + "..."
        return titolo, f"Argomento: **{titolo}**\n\n{prima_frase}"

# ── Traduzione ────────────────────────────────────────────────────────────────
@st.cache_data(show_spinner=False)
def traduci(testo):
    try:
        from deep_translator import GoogleTranslator
        return GoogleTranslator(source='en', target='it').translate(testo)
    except Exception as e:
        return f"[Errore: {e}]"

def display(testo, usa_trad):
    return traduci(testo) if usa_trad else testo

# ── Timer ─────────────────────────────────────────────────────────────────────
def secondi_a_mmss(sec):
    sec = max(0, int(sec))
    return f"{sec // 60:02d}:{sec % 60:02d}"

def tempo_rimanente():
    if st.session_state.quiz_start_time is None or st.session_state.quiz_durata_sec is None:
        return None
    return st.session_state.quiz_durata_sec - (time.time() - st.session_state.quiz_start_time)

# ── Sessione ──────────────────────────────────────────────────────────────────
def init():
    defs = {
        'db': None, 'errori': None, 'storia': None, 'sr_data': None, 'tags': None, 'spiegazioni_db': None,
        'quiz_attivo': False, 'domande_quiz': [], 'indice': 0,
        'punteggio': 0, 'risposte_date': {}, 'risposta_confermata': False,
        'selezione_corrente': [], 'modalita': 'practice',
        'usa_traduzione': False, 'mostra_pdf': True,
        'sessione_salvata': False, 'traduzioni': {}, 'spiegazioni': {},
        'quiz_start_time': None, 'quiz_durata_sec': None,
    }
    for k, v in defs.items():
        if k not in st.session_state:
            st.session_state[k] = v
    if st.session_state.db is None:
        st.session_state.db = carica_database()
    if st.session_state.errori is None:
        st.session_state.errori = carica_errori()
    if st.session_state.storia is None:
        st.session_state.storia = carica_storia()
    if st.session_state.sr_data is None:
        st.session_state.sr_data = carica_sr()
    if st.session_state.tags is None:
        st.session_state.tags = calcola_tags(st.session_state.db)
    st.session_state.spiegazioni_db = carica_spiegazioni()

def stat_card(col, icon, label, val):
    col.markdown(f'<div class="stat-card"><h3>{icon}</h3><b>{label}</b><br/>{val}</div>',
                 unsafe_allow_html=True)

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    st.markdown(CSS, unsafe_allow_html=True)

    if 'autenticato' not in st.session_state:
        st.session_state.autenticato = False

    if not st.session_state.autenticato:
        st.title("☁️ AWS Quiz Master")
        pw = st.text_input("Password", type="password")
        if st.button("Accedi", type="primary"):
            if pw == st.secrets["APP_PASSWORD"]:
                st.session_state.autenticato = True
                st.rerun()
            else:
                st.error("Password errata")
        return

    init()

    db      = st.session_state.db
    tags    = st.session_state.tags
    sezioni = carica_pdf_index()

    # mappa domanda→tags per lookup rapido
    dom_to_tags = {q['domanda']: t for q, t in zip(db, tags)}

    # ── Sidebar ───────────────────────────────────────────────────────────────
    with st.sidebar:
        st.markdown("## ☁️ AWS Quiz Master")
        fonte = "📚 note complete" if os.path.exists(FILE_NOTE) else "📄 PDF"
        st.caption(f"{len(db)} domande | {len(st.session_state.errori)} errori | {fonte}")
        st.divider()

        pagina = st.radio("Sezione", ["🎯 Quiz", "📚 Studia", "📊 Statistiche", "📖 Piano"])
        st.divider()

        if "Quiz" in pagina:
            if not st.session_state.quiz_attivo:
                modalita = st.selectbox("Modalità", ["practice", "exam", "errori", "sr"],
                    format_func=lambda x: {
                        "practice": "📝 Practice (feedback immediato)",
                        "exam":     "🏆 Exam Simulation (65 dom, timer 90 min)",
                        "errori":   "🔄 Recupero Errori",
                        "sr":       "🧠 Spaced Repetition",
                    }[x])

                # Info SR
                if modalita == "sr":
                    tot_sr, scad_sr, _ = sr_stats()
                    sr_pool_size = len(get_domande_sr(db))
                    st.caption(f"📅 Da ripassare oggi: **{scad_sr}** | Mai viste: **{sr_pool_size - scad_sr}**")

                # Filtro argomento
                tutti_tag     = sorted({t for ts in tags for t in ts})
                argomenti_sel = st.multiselect("🏷️ Filtra argomento", tutti_tag,
                                               placeholder="Tutti gli argomenti")

                num_q      = st.select_slider("Domande", [10, 20, 30, 40, 65],
                                              value=65 if modalita == "exam" else 20)
                usa_trad   = st.toggle("🇮🇹 Traduzione")
                mostra_pdf = st.toggle("📄 Note dal PDF", value=True)
                st.divider()

                if st.button("▶️ Avvia Quiz", type="primary", use_container_width=True):
                    # Costruisci pool base
                    if modalita == "errori" and st.session_state.errori:
                        pool = [q for q in db if q['domanda'] in st.session_state.errori] or db
                    elif modalita == "sr":
                        pool = get_domande_sr(db)
                    else:
                        pool = db

                    # Filtro argomento
                    if argomenti_sel:
                        pool = [q for q in pool
                                if any(a in dom_to_tags.get(q['domanda'], []) for a in argomenti_sel)]

                    if not pool:
                        st.warning("Nessuna domanda corrisponde ai filtri selezionati.")
                    else:
                        n = min(num_q, len(pool))
                        # SR: mantieni ordine di priorità; altri: random
                        domande_quiz = pool[:n] if modalita == "sr" else random.sample(pool, n)

                        st.session_state.domande_quiz        = domande_quiz
                        st.session_state.indice              = 0
                        st.session_state.punteggio           = 0
                        st.session_state.risposte_date       = {}
                        st.session_state.quiz_attivo         = True
                        st.session_state.risposta_confermata = False
                        st.session_state.selezione_corrente  = []
                        st.session_state.modalita            = modalita
                        st.session_state.usa_traduzione      = usa_trad
                        st.session_state.mostra_pdf          = mostra_pdf
                        st.session_state.sessione_salvata    = False
                        st.session_state.traduzioni          = {}
                        st.session_state.spiegazioni         = {}
                        # Timer solo per exam (proporzionale al numero di domande)
                        st.session_state.quiz_start_time = time.time() if modalita == "exam" else None
                        st.session_state.quiz_durata_sec = (90 * 60 * n // 65) if modalita == "exam" else None
                        st.rerun()
            else:
                n = len(st.session_state.domande_quiz)
                i = st.session_state.indice
                st.progress(min(i / n, 1.0))
                st.caption(f"Domanda {min(i+1,n)} / {n}")

                # Timer (solo exam)
                rim = tempo_rimanente()
                if rim is not None:
                    mmss = secondi_a_mmss(rim)
                    if rim > 20 * 60:
                        css_cls = "timer-ok"
                    elif rim > 5 * 60:
                        css_cls = "timer-warn"
                    else:
                        css_cls = "timer-red"
                    st.markdown(f'<p class="{css_cls}">⏱️ {mmss}</p>', unsafe_allow_html=True)

                if st.button("⏹️ Termina anticipato", use_container_width=True):
                    risposte = st.session_state.risposte_date
                    corrette = sum(1 for v in risposte.values() if v['corretta'])
                    aggiungi_storia(corrette, len(risposte), st.session_state.modalita)
                    st.session_state.quiz_attivo = False
                    st.rerun()

    # ── Pagine ────────────────────────────────────────────────────────────────
    if "Quiz" in pagina:
        if not st.session_state.quiz_attivo:
            pagina_home(db)
        else:
            pagina_quiz(db, sezioni)

    elif "Studia" in pagina:
        pagina_studio(db, sezioni, tags, dom_to_tags)

    elif "Statistic" in pagina:
        pagina_statistiche()

    elif "Piano" in pagina:
        pagina_piano(db, tags, dom_to_tags)


# ── Home ──────────────────────────────────────────────────────────────────────
def pagina_home(db):
    st.title("☁️ AWS Certified Cloud Practitioner")
    st.info("⬅️ Apri la barra laterale per scegliere la modalità e avviare il quiz.")

    storia          = st.session_state.storia
    avg             = round(sum(s['percentuale'] for s in storia) / len(storia), 1) if storia else 0
    tot_sr, scad_sr, imp_sr = sr_stats()

    c1, c2, c3, c4 = st.columns(4)
    stat_card(c1, "📋", "Domande totali",     len(db))
    stat_card(c2, "📈", "Media sessioni",      f"{avg}%")
    stat_card(c3, "❌", "Errori da ripassare", len(st.session_state.errori))
    stat_card(c4, "📝", "Sessioni completate", len(storia))

    st.divider()

    c1, c2, c3 = st.columns(3)
    stat_card(c1, "🧠", "SR: viste",        tot_sr)
    stat_card(c2, "📅", "SR: da ripassare", scad_sr)
    stat_card(c3, "⭐", "SR: imparate",     imp_sr)

    st.divider()
    st.markdown("""
**Modalità disponibili:**
- 📝 **Practice** — feedback immediato + note dal PDF dopo ogni risposta
- 🏆 **Exam Simulation** — 65 domande, timer 90 min, risultato finale
- 🔄 **Recupero Errori** — ripassa solo le domande sbagliate
- 🧠 **Spaced Repetition** — le domande tornano in base a quanto le ricordi (tipo Anki)

Soglia di superamento AWS: **72%** (47/65 corrette)
""")


# ── Quiz ──────────────────────────────────────────────────────────────────────
def pagina_quiz(db, sezioni):
    dq    = st.session_state.domande_quiz
    idx   = st.session_state.indice
    modal = st.session_state.modalita
    trad  = st.session_state.usa_traduzione
    pdf   = st.session_state.mostra_pdf

    # Timer scaduto → forza fine quiz
    rim = tempo_rimanente()
    if rim is not None and rim <= 0 and idx < len(dq):
        risposte = st.session_state.risposte_date
        corrette = sum(1 for v in risposte.values() if v['corretta'])
        aggiungi_storia(corrette, len(risposte), modal)
        st.warning("⏰ Tempo scaduto! Quiz terminato automaticamente.")
        pagina_risultato(dq, risposte, corrette, len(risposte), trad)
        return

    if idx >= len(dq):
        risposte = st.session_state.risposte_date
        corrette = sum(1 for v in risposte.values() if v['corretta'])
        aggiungi_storia(corrette, len(risposte), modal)
        pagina_risultato(dq, risposte, corrette, len(risposte), trad)
        return

    q         = dq[idx]
    corr_list = [r.strip() for r in q['risposta_corretta'].split(',')]
    is_multi  = len(corr_list) > 1

    st.progress(idx / len(dq), text=f"Domanda {idx+1} / {len(dq)}")
    if modal in ("practice", "sr") and idx > 0:
        corr_fin = sum(1 for v in st.session_state.risposte_date.values() if v['corretta'])
        st.caption(f"Punteggio: {corr_fin}/{idx} ({round(corr_fin/idx*100)}%)")

    # Badge SR
    if modal == "sr":
        k    = _sr_key(q['domanda'])
        sr_e = st.session_state.sr_data.get(k)
        if sr_e:
            st.caption(f"🧠 Ripetizioni: {sr_e['ripetizioni']} | Intervallo: {sr_e['intervallo']}gg | Facilità: {sr_e['facilita']}")
        else:
            st.caption("🆕 Prima volta che vedi questa domanda")

    testo_dom = display(q['domanda'], trad)
    st.markdown(f'<div class="q-card">{testo_dom}</div>', unsafe_allow_html=True)
    if is_multi:
        st.caption(f"⚡ Seleziona **{len(corr_list)}** risposte")

    col_tr, col_sp, _ = st.columns([1, 1, 4])
    with col_tr:
        if st.button("🇮🇹 Traduci", key=f"tr_{idx}", disabled=trad):
            if idx not in st.session_state.traduzioni:
                with st.spinner("Traduzione..."):
                    testo = q['domanda'] + "\n\n" + "\n".join(
                        f"{l}) {t}" for l, t in q['opzioni'].items())
                    st.session_state.traduzioni[idx] = traduci(testo)
            else:
                del st.session_state.traduzioni[idx]
            st.rerun()
    with col_sp:
        if st.button("💡 Spiega", key=f"sp_{idx}"):
            if idx not in st.session_state.spiegazioni:
                k    = _sr_key(q['domanda'])
                spdb = st.session_state.spiegazioni_db
                if k in spdb:
                    st.session_state.spiegazioni[idx] = ("ai", spdb[k])
                else:
                    titolo, testo = trova_spiegazione(q['domanda'], q['opzioni'], sezioni, dettagliato=False)
                    st.session_state.spiegazioni[idx] = (titolo, testo)
            else:
                del st.session_state.spiegazioni[idx]
            st.rerun()

    if idx in st.session_state.traduzioni:
        st.success(st.session_state.traduzioni[idx])
    if idx in st.session_state.spiegazioni:
        tipo, testo_sp = st.session_state.spiegazioni[idx]
        if testo_sp:
            if tipo == "ai":
                st.info(f"💡 {testo_sp}")
            else:
                st.info(testo_sp)

    if not st.session_state.risposta_confermata:
        form_risposta(q, idx, corr_list, is_multi, modal, trad)
    else:
        mostra_feedback(q, idx, corr_list, trad, pdf, sezioni)


def form_risposta(q, idx, corr_list, is_multi, modal, trad):
    opzioni = q['opzioni']
    lettere = list(opzioni.keys())

    if is_multi:
        selezioni = []
        for l in lettere:
            if st.checkbox(f"**{l})** {display(opzioni[l], trad)}", key=f"chk_{idx}_{l}"):
                selezioni.append(l)
        st.session_state.selezione_corrente = sorted(selezioni)
        disabled = len(selezioni) != len(corr_list)
    else:
        scelte = [f"{l}) {display(opzioni[l], trad)}" for l in lettere]
        radio  = st.radio("", scelte, index=None, key=f"rad_{idx}")
        st.session_state.selezione_corrente = [radio[0]] if radio else []
        disabled = not radio

    if st.button("✅ Conferma", type="primary", disabled=disabled, use_container_width=True):
        sel      = st.session_state.selezione_corrente
        risposta = ", ".join(sel)
        corretta = sorted(sel) == sorted(corr_list)

        st.session_state.risposte_date[idx] = {'data': risposta, 'corretta': corretta}

        if corretta:
            st.session_state.errori.discard(q['domanda'])
        else:
            st.session_state.errori.add(q['domanda'])
        salva_errori(st.session_state.errori)

        # Aggiorna SR per tutte le modalità (così i dati si accumulano sempre)
        aggiorna_sr(q['domanda'], corretta)

        if modal == "exam":
            st.session_state.indice += 1
            st.session_state.selezione_corrente = []
        else:
            st.session_state.risposta_confermata = True
        st.rerun()


def mostra_feedback(q, idx, corr_list, trad, mostra_pdf, sezioni):
    val     = st.session_state.risposte_date[idx]
    ld      = [r.strip() for r in val['data'].split(',')]
    opzioni = q['opzioni']

    for l, testo in opzioni.items():
        t = display(testo, trad)
        if l in corr_list:
            st.success(f"✅ **{l})** {t}")
        elif l in ld:
            st.error(f"❌ **{l})** {t}")
        else:
            st.markdown(f"&nbsp;&nbsp;**{l})** {t}")

    if val['corretta']:
        st.success("✅ **CORRETTO!**")
    else:
        st.error(f"❌ **SBAGLIATO!** Risposta corretta: **{q['risposta_corretta']}**")

    if mostra_pdf:
        k    = _sr_key(q['domanda'])
        spdb = st.session_state.spiegazioni_db
        if k in spdb:
            with st.expander("💡 Spiegazione", expanded=not val['corretta']):
                st.markdown(spdb[k])
        else:
            tip_t, tip_c = trova_spiegazione(q['domanda'], q['opzioni'], sezioni, dettagliato=True)
            if tip_c and tip_t:
                with st.expander(f"📄 Approfondimento — {tip_t}", expanded=not val['corretta']):
                    st.markdown(f'<div class="pdf-box">{tip_c}</div>', unsafe_allow_html=True)

    if st.button("➡️ Prossima domanda", type="primary", use_container_width=True):
        st.session_state.indice += 1
        st.session_state.risposta_confermata = False
        st.session_state.selezione_corrente  = []
        st.rerun()


# ── Risultato ─────────────────────────────────────────────────────────────────
def pagina_risultato(dq, risposte, corrette, totale, trad):
    st.balloons()
    st.title("📊 Risultato Sessione")
    perc = round(corrette / totale * 100, 1) if totale > 0 else 0

    c1, c2, c3 = st.columns(3)
    c1.metric("Punteggio",   f"{corrette}/{totale}")
    c2.metric("Percentuale", f"{perc}%", delta=f"{perc-72:.1f}% vs soglia 72%")
    c3.metric("Esito", "✅ SUPERATO" if perc >= 72 else "❌ Da migliorare")

    sbagliate = [(i, v) for i, v in risposte.items() if not v['corretta']]
    if sbagliate:
        with st.expander(f"🔍 Rivedi le {len(sbagliate)} risposte sbagliate"):
            for i_q, val in sbagliate:
                q = dq[i_q]
                st.markdown(f"**Q{i_q+1}: {display(q['domanda'], trad)}**")
                st.markdown(f"Tua risposta: `{val['data']}` | Corretta: `{q['risposta_corretta']}`")
                st.divider()

    if st.button("🔄 Nuovo Quiz", type="primary", use_container_width=True):
        st.session_state.quiz_attivo = False
        st.rerun()


# ── Studio ────────────────────────────────────────────────────────────────────
def pagina_studio(db, sezioni, tags, dom_to_tags):
    st.title("📚 Modalità Studio")

    col1, col2 = st.columns([3, 1])
    with col1:
        cerca = st.text_input("🔍 Cerca domanda", placeholder="es. S3, IAM, pricing...")
    with col2:
        solo_err = st.checkbox("Solo errori")
        usa_trad = st.toggle("🇮🇹 Traduzione")

    tutti_tag     = sorted({t for ts in tags for t in ts})
    argomenti_sel = st.multiselect("🏷️ Filtra per argomento", tutti_tag)

    domande = db
    if cerca:
        domande = [q for q in domande if cerca.lower() in q['domanda'].lower()]
    if solo_err:
        domande = [q for q in domande if q['domanda'] in st.session_state.errori]
    if argomenti_sel:
        domande = [q for q in domande
                   if any(a in dom_to_tags.get(q['domanda'], []) for a in argomenti_sel)]

    st.caption(f"{len(domande)} domande")

    for q in domande[:100]:
        badge    = "❌" if q['domanda'] in st.session_state.errori else "✅"
        sr_e     = st.session_state.sr_data.get(_sr_key(q['domanda']))
        sr_badge = f"🧠×{sr_e['ripetizioni']}" if sr_e else "🆕"
        label    = f"{badge} {sr_badge} {q['domanda'][:90]}..."
        with st.expander(label):
            st.markdown(f"**{display(q['domanda'], usa_trad)}**")
            corr_list = [r.strip() for r in q['risposta_corretta'].split(',')]
            if len(corr_list) > 1:
                st.caption(f"⚡ Risposta multipla — {len(corr_list)} risposte")
            for l, testo in q['opzioni'].items():
                t = display(testo, usa_trad)
                if l in corr_list:
                    st.success(f"✅ **{l})** {t}")
                else:
                    st.markdown(f"&nbsp;&nbsp;**{l})** {t}")
            k    = _sr_key(q['domanda'])
            spdb = st.session_state.spiegazioni_db
            if k in spdb:
                with st.expander("💡 Spiegazione"):
                    st.markdown(spdb[k])
            else:
                tip_t, tip_c = trova_spiegazione(q['domanda'], q['opzioni'], sezioni, dettagliato=True)
                if tip_c and tip_t:
                    with st.expander(f"📄 Approfondimento — {tip_t}"):
                        st.markdown(f'<div class="pdf-box">{tip_c}</div>', unsafe_allow_html=True)


# ── Statistiche ───────────────────────────────────────────────────────────────
def pagina_statistiche():
    st.title("📊 Le tue Statistiche")
    storia = st.session_state.storia

    if not storia:
        st.info("Non hai ancora completato sessioni. Avvia un quiz per iniziare!")
        return

    df = pd.DataFrame(storia)

    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Sessioni totali", len(storia))
    c2.metric("Media",           f"{round(df['percentuale'].mean(),1)}%")
    c3.metric("Migliore",        f"{df['percentuale'].max()}%")
    c4.metric("Sessioni ≥ 72%",  f"{len(df[df['percentuale']>=72])}/{len(storia)}")

    fig = px.line(df, x=df.index, y="percentuale",
                  title="Andamento nel tempo",
                  labels={"index": "Sessione", "percentuale": "%"},
                  markers=True)
    fig.add_hline(y=72, line_dash="dash", line_color="red",
                  annotation_text="Soglia 72%", annotation_position="bottom right")
    fig.update_layout(yaxis_range=[0, 100])
    st.plotly_chart(fig, use_container_width=True)

    if st.session_state.errori:
        st.markdown(f"### ❌ Domande da ripassare ({len(st.session_state.errori)})")
        for d in list(st.session_state.errori)[:15]:
            st.markdown(f"- {d[:110]}...")
        if len(st.session_state.errori) > 15:
            st.caption(f"...e altre {len(st.session_state.errori)-15}")
        st.divider()
        if st.button("🗑️ Azzera lista errori"):
            st.session_state.errori = set()
            salva_errori(st.session_state.errori)
            st.rerun()


PIANO_STUDIO = [
    # FASE 1 — Fondamenta
    dict(id="iam",       fase="Fase 1 — Fondamenta",      titolo="IAM & Shared Responsibility", sett="Sett. 1–2",  tags=["IAM","Shared Responsibility"], obiettivo=80, desc="Il modello di sicurezza AWS e la gestione delle identità. La base di ogni domanda d'esame."),
    dict(id="compute",   fase=None,                        titolo="EC2 & Compute",               sett="Sett. 3–4",  tags=["EC2"],                         obiettivo=75, desc="Istanze, tipi, Auto Scaling, Load Balancer. Il servizio più testato dell'esame."),
    dict(id="storage",   fase=None,                        titolo="S3 & Storage",                sett="Sett. 5–6",  tags=["S3","Storage"],                 obiettivo=75, desc="Bucket, classi di storage, ciclo di vita, EBS, EFS, Glacier."),
    dict(id="networking",fase=None,                        titolo="VPC & Networking",            sett="Sett. 7–8",  tags=["VPC","Networking"],             obiettivo=75, desc="Virtual Private Cloud, subnet, security group, NACL, Internet Gateway."),
    # FASE 2 — Servizi Core
    dict(id="database",  fase="Fase 2 — Servizi Core",    titolo="Database",                    sett="Sett. 9–10", tags=["RDS","DynamoDB"],               obiettivo=75, desc="RDS, Aurora, DynamoDB, ElastiCache. Quando usare quale servizio."),
    dict(id="billing",   fase=None,                        titolo="Billing & Pricing",           sett="Sett. 11–12",tags=["Billing"],                      obiettivo=75, desc="Modelli di pricing, Reserved/Spot/On-Demand, Support plans, Cost Explorer."),
    dict(id="arch",      fase=None,                        titolo="Well-Architected & IaC",      sett="Sett. 13–14",tags=["Well-Architected","CloudFormation"], obiettivo=70, desc="I 6 pilastri del Well-Architected Framework e CloudFormation."),
    dict(id="serverless",fase=None,                        titolo="Serverless & Containers",     sett="Sett. 15–16",tags=["Lambda","ECS / Fargate"],          obiettivo=70, desc="Lambda, API Gateway, ECS, Fargate, EKS. Architetture moderne."),
    # FASE 3 — Specializzazione
    dict(id="messaging", fase="Fase 3 — Specializzazione",titolo="Messaging & Integration",     sett="Sett. 17–18",tags=["SNS","SQS"],                    obiettivo=70, desc="SQS, SNS, EventBridge. Disaccoppiamento e comunicazione tra servizi."),
    dict(id="security",  fase=None,                        titolo="Security Avanzata",           sett="Sett. 19–20",tags=["Security"],                     obiettivo=70, desc="KMS, WAF, Shield, GuardDuty, Inspector, Cognito, Macie."),
    dict(id="analytics", fase=None,                        titolo="Analytics & AI/ML",           sett="Sett. 21–22",tags=["Analytics","AI/ML"],            obiettivo=65, desc="Athena, Redshift, Glue, Kinesis, SageMaker, Rekognition."),
    dict(id="monitoring",fase=None,                        titolo="Monitoring & Management",     sett="Sett. 23–24",tags=["CloudWatch","Support"],          obiettivo=65, desc="CloudWatch, CloudTrail, Config, Systems Manager, Trusted Advisor."),
]

def _piano_progress(step, db, dom_to_tags, errori, sr_data):
    qs       = [q for q in db if any(t in dom_to_tags.get(q['domanda'], []) for t in step['tags'])]
    total    = len(qs)
    attempted= [q for q in qs if _sr_key(q['domanda']) in sr_data]
    wrong    = [q for q in attempted if q['domanda'] in errori]
    correct  = len(attempted) - len(wrong)
    score    = round(correct / total * 100, 1) if total else 0
    accuracy = round(correct / len(attempted) * 100) if attempted else 0
    return dict(total=total, attempted=len(attempted), correct=correct,
                score=score, accuracy=accuracy, superato=score >= step['obiettivo'])

def pagina_piano(db, tags, dom_to_tags):
    st.title("📖 Piano di Studio — CLF-C02")

    errori  = st.session_state.errori
    sr_data = st.session_state.sr_data

    results = [dict(**s, **_piano_progress(s, db, dom_to_tags, errori, sr_data)) for s in PIANO_STUDIO]
    superati  = sum(1 for r in results if r['superato'])
    curr_idx  = next((i for i, r in enumerate(results) if not r['superato']), len(results))

    # ── Header globale ────────────────────────────────────────────────────────
    c1, c2, c3 = st.columns(3)
    c1.metric("Argomenti superati", f"{superati}/{len(results)}")
    total_score = round(sum(r['score'] for r in results) / len(results), 1)
    c2.metric("Media globale", f"{total_score}%")
    c3.metric("Settimane stimate", "24")
    st.progress(superati / len(results))
    st.caption("~20 domande al giorno · pratica + Spaced Repetition")
    st.divider()

    # ── Steps ─────────────────────────────────────────────────────────────────
    fase_corrente = None
    for i, r in enumerate(results):
        if r['fase'] and r['fase'] != fase_corrente:
            fase_corrente = r['fase']
            st.markdown(f"#### {fase_corrente}")

        is_current = i == curr_idx
        icon = "✅" if r['superato'] else ("🎯" if is_current else "○")
        label = f"{icon} **{r['titolo']}** — {r['sett']}"

        with st.expander(label, expanded=is_current):
            st.caption(r['desc'])

            # Barra progresso
            bar_val = min(1.0, r['score'] / r['obiettivo']) if r['obiettivo'] else 0
            st.progress(bar_val)

            col1, col2, col3 = st.columns(3)
            col1.metric("Punteggio",  f"{r['score']}%", delta=f"obiettivo {r['obiettivo']}%", delta_color="off")
            col2.metric("Domande viste", f"{r['attempted']}/{r['total']}")
            if r['attempted']:
                col3.metric("Accuratezza", f"{r['accuracy']}%")

            if r['superato']:
                st.success("Obiettivo raggiunto! Passa al prossimo argomento.")
            elif is_current:
                st.info("👆 Questo è l'argomento su cui concentrarsi ora.")

            # Bottone lancia quiz filtrato
            btn_label = "🔄 Ripassa" if r['superato'] else ("▶️ Inizia ora" if is_current else "Apri")
            if st.button(btn_label, key=f"piano_btn_{r['id']}"):
                st.session_state.quiz_attivo         = False
                st.session_state.domande_quiz        = []
                st.session_state.indice              = 0
                st.session_state.punteggio           = 0
                st.session_state.risposte_date       = {}
                st.session_state.risposta_confermata = False
                st.session_state.selezione_corrente  = []
                st.session_state.modalita            = 'practice'
                st.session_state.sessione_salvata    = False
                # Pre-filtra le domande per questo argomento
                pool = [q for q in db if any(t in dom_to_tags.get(q['domanda'],[]) for t in r['tags'])]
                if pool:
                    import random as _rnd
                    st.session_state.domande_quiz = _rnd.sample(pool, min(20, len(pool)))
                    st.session_state.quiz_attivo  = True
                    st.rerun()


if __name__ == "__main__":
    main()
