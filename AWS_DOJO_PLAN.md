# 🏗️ PIANO: AWS Dojo — app statica CLF-C02 (PC + telefono)

> Guida completa per costruire `aws-dojo/` dentro questo repo.
> Leggi TUTTO prima di scrivere una riga di codice.

---

## Obiettivo

L'app Flask esistente (`app.py`) funziona benissimo da PC: **non va toccata**.
Aggiungiamo una cartella `aws-dojo/` con una **SPA statica** (HTML/CSS/JS puro):
- Si apre da PC con doppio click su `index.html` (niente server)
- Si pubblica su GitHub Pages → accessibile da telefono senza PC acceso
- Riusa le 1142 domande già esistenti in `database_domande.json`
- Aggiunge micro-lezioni con analogie che l'app Flask non ha

---

## Regole ferree

1. **NON toccare** `app.py`, `templates/`, `database_domande.json`, `requirements.txt`
2. Tutto il nuovo codice va **solo** dentro `aws-dojo/`
3. **Niente npm, niente framework, niente build**: vanilla HTML/CSS/JS
4. Branch di lavoro: **`main`** (l'utente vuole tutto su main)
5. `node --check` su ogni file JS prima di committare

---

## Struttura da creare

```
aws-dojo/
├── index.html
├── css/style.css
├── js/
│   ├── app.js
│   ├── modules.js
│   └── data/
│       ├── quiz_bank.js     ← generato dallo script Python (vedi sotto)
│       ├── module01.js
│       ├── module02.js
│       └── ...
└── scripts/
    └── convert_quiz.py      ← da lanciare una volta sola dal PC
```

---

## PASSO 0 OBBLIGATORIO: generare quiz_bank.js

Prima di qualsiasi altra cosa, crea `aws-dojo/scripts/convert_quiz.py` con questo
contenuto **esatto** (SERVIZI_AWS è già copiato da `app.py` — non modificarlo):

```python
#!/usr/bin/env python3
"""
Converte database_domande.json → aws-dojo/js/data/quiz_bank.js
Lanciare dalla root del repo: python3 aws-dojo/scripts/convert_quiz.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

with open(os.path.join(ROOT, 'database_domande.json'), encoding='utf-8') as f:
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
```

Poi eseguilo subito per verificare che funzioni:
```bash
python3 aws-dojo/scripts/convert_quiz.py
```

Output atteso: ~1142 domande convertite, distribuzione per tag stampata.

---

## Il motore: js/app.js

Scrivi `aws-dojo/js/app.js` da zero (NON copiare da altri branch o cartelle).
Implementa esattamente questo:

### Stato persistente
```js
const STORE_KEY = 'aws-dojo-v1';
const defaultState = () => ({
  xp: 0, streak: 0, lastDay: null,
  modules: {},  // id -> { card: N, done: bool, quizOk: N, quizTot: N }
  seen: {},     // "modId:cardIdx" -> true
  wrong: {},    // "modId:cardIdx" -> true  (per ripasso errori futuro)
});
```

### Livelli AWS
```js
const LEVELS = [
  { xp: 0,    emoji: '☁️',  name: 'Cloud Curious' },
  { xp: 100,  emoji: '🌤️',  name: 'AWS Rookie' },
  { xp: 250,  emoji: '⛅',  name: 'Solutions Finder' },
  { xp: 500,  emoji: '🌩️',  name: 'Cloud Architect' },
  { xp: 800,  emoji: '🚀',  name: 'Senior Engineer' },
  { xp: 1200, emoji: '🏗️',  name: 'Solutions Architect' },
  { xp: 1700, emoji: '🔱',  name: 'AWS Hero' },
  { xp: 2300, emoji: '👑',  name: 'Cloud Master' },
  { xp: 3000, emoji: '🌟',  name: 'CLF-C02 Champion' },
];
```

### XP
- Card lezione vista per la prima volta: `+5 XP`
- Quiz scelta multipla risposto corretto: `+25 XP`
- Modulo completato: `+100 XP`

### Feed e card
- Ogni modulo ha le sue card lezione (`mod.cards`) **più** i quiz dal QUIZ_BANK filtrati per tag
- Funzione di costruzione:
```js
function buildModuleCards(mod) {
  const bankCards = (typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : [])
    .filter(q => q.tags.some(t => mod.tags.includes(t)))
    .slice(0, 25)
    .map(q => ({ type: 'quiz_bank', ...q }));
  return [...mod.cards, ...bankCards];
}
```
- Il builder di card gestisce `type: 'quiz_bank'` esattamente come `type: 'quiz'`
  (stessa UI), ma le domande sono in inglese (come l'esame reale)

### Tipi di card da implementare
```
lesson     — lezione con analogia (testo HTML + campo analogy)
fact       — fun fact (sfondo diverso, badge "FUN FACT")
quiz       — quiz custom italiano, 4 opzioni, feedback +spiegazione
quiz_bank  — quiz da QUIZ_BANK, in inglese, stessa UI di quiz
```
NON implementare `terminal` o `mission` (non servono per CLF-C02).

### Salvataggio quiz sbagliati
Quando un quiz (`quiz` o `quiz_bank`) viene risposto sbagliato, salva in `state.wrong`:
```js
state.wrong[mod.id + ':' + cardIdx] = true;
```
Questo servirà al CP futuro "Ripasso errori" — per ora basta salvarlo.

---

## Il CSS: css/style.css

Tema **arancio-oro AWS** su sfondo quasi nero. Variabili radice:
```css
:root {
  --bg:      #090d1a;
  --bg2:     #111827;
  --card:    #1a2236;
  --accent:  #ff9900;   /* arancio AWS */
  --accent2: #f0c040;   /* oro chiaro */
  --danger:  #ff4d6d;
  --gold:    #ff9900;
  --text:    #f0f4ff;
  --muted:   #8a90b8;
  --radius:  22px;
}
```

Struttura e animazioni: identiche al Linux Dojo (feed verticale, scroll-snap,
card fullscreen, confetti, toast XP). Riscrivile — non copiare da altri branch.

---

## js/modules.js

```js
'use strict';
const MODULES = [
  { id: 'm01', icon: '☁️',  title: 'Cloud Fundamentals',       tags: ['Altro', 'Well-Architected'],                  cards: typeof MODULE01 !== 'undefined' ? MODULE01 : [] },
  { id: 'm02', icon: '🔐',  title: 'IAM & Shared Responsibility', tags: ['IAM', 'Shared Responsibility'],              cards: typeof MODULE02 !== 'undefined' ? MODULE02 : [] },
  { id: 'm03', icon: '💻',  title: 'EC2 & Compute',             tags: ['EC2'],                                        cards: typeof MODULE03 !== 'undefined' ? MODULE03 : [] },
  { id: 'm04', icon: '🗄️',  title: 'S3 & Storage',              tags: ['S3', 'Storage'],                              cards: typeof MODULE04 !== 'undefined' ? MODULE04 : [] },
  { id: 'm05', icon: '🌐',  title: 'VPC & Networking',          tags: ['VPC', 'Networking', 'Route 53', 'CloudFront'], cards: typeof MODULE05 !== 'undefined' ? MODULE05 : [] },
  { id: 'm06', icon: '🗃️',  title: 'Database',                  tags: ['RDS', 'DynamoDB'],                            cards: typeof MODULE06 !== 'undefined' ? MODULE06 : [] },
  { id: 'm07', icon: '⚡',  title: 'Serverless & Container',    tags: ['Lambda', 'ECS / Fargate', 'EKS'],             cards: typeof MODULE07 !== 'undefined' ? MODULE07 : [] },
  { id: 'm08', icon: '📨',  title: 'Messaging & Integration',   tags: ['SNS', 'SQS'],                                 cards: typeof MODULE08 !== 'undefined' ? MODULE08 : [] },
  { id: 'm09', icon: '📊',  title: 'Monitoring & Management',   tags: ['CloudWatch', 'CloudFormation', 'Support'],    cards: typeof MODULE09 !== 'undefined' ? MODULE09 : [] },
  { id: 'm10', icon: '🔒',  title: 'Security',                  tags: ['Security'],                                   cards: typeof MODULE10 !== 'undefined' ? MODULE10 : [] },
  { id: 'm11', icon: '📈',  title: 'Analytics & AI/ML',         tags: ['Analytics', 'AI / ML'],                       cards: typeof MODULE11 !== 'undefined' ? MODULE11 : [] },
  { id: 'm12', icon: '💰',  title: 'Billing & Pricing',         tags: ['Billing & Cost'],                             cards: typeof MODULE12 !== 'undefined' ? MODULE12 : [] },
];
```

---

## index.html

Struttura identica al Linux Dojo ma:
- Carica `js/data/quiz_bank.js` PER PRIMO (prima dei moduli)
- Poi i moduli: `module01.js`, `module02.js`, ecc.
- Poi `js/modules.js`
- Poi `js/app.js`

```html
<script src="js/data/quiz_bank.js"></script>
<script src="js/data/module01.js"></script>
<!-- ...altri moduli... -->
<script src="js/modules.js"></script>
<script src="js/app.js"></script>
```

---

## Schema card per i moduli di lezione

```js
// LEZIONE — in italiano, con analogia obbligatoria
{ type: 'lesson', emoji: '☁️', title: 'Il modello Shared Responsibility',
  text: `Testo in italiano, max ~120 parole. HTML: <strong>, <code>, <br>.`,
  analogy: `Analogia concreta. Il CSS aggiunge "🐒 Per la scimmia:" automaticamente.` },

// FUN FACT — 1-2 per modulo
{ type: 'fact', emoji: '📊', title: 'Titolo', text: `...` },

// QUIZ CUSTOM — in italiano, per i concetti più critici dell'esame
{ type: 'quiz', q: 'Domanda in italiano?',
  opts: ['A', 'B', 'C', 'D'], a: 1,
  explain: `Spiega perché è giusta E perché le altre sono sbagliate. Chiudi con emoji.` },
```

**Nota:** i quiz in inglese dall'esame reale arrivano automaticamente da `QUIZ_BANK`
(filtrati per tag del modulo) — non vanno scritti a mano nei file modulo.

---

## Struttura di un modulo (la ricetta)

- **Apertura:** 1 card benvenuto con cosa si impara
- **Corpo:** blocchi `lezione → quiz custom` — quiz subito dopo il concetto
- **1-2 fun fact** a metà (pausa dopamina)
- **Ripasso lampo finale:** tutto in 6 righe + 2-3 quiz custom misti
- I quiz QUIZ_BANK arrivano automaticamente in coda: NON aggiungerli a mano

Numero card lezione per modulo: 6-10 (i quiz in inglese completano il feed).

---

## Stile contenuti (non derogare)

- **Lezioni in italiano**, quiz custom in italiano, quiz QUIZ_BANK in inglese (invariato)
- Tono amico sveglio, zero accademico
- Analogia obbligatoria per ogni lezione (prefisso "🐒 Per la scimmia:" lo aggiunge il CSS)
- Trappole d'esame evidenziate: S3 Standard vs Glacier, On-Demand vs Reserved vs Spot, ecc.
- Nomi di servizi AWS in `<strong>` al primo utilizzo in ogni card

---

## Checkpoint

| CP | Cosa fare |
|----|-----------|
| **0** | Scaffold completo: index.html + css/style.css + js/app.js + js/modules.js + convert_quiz.py + eseguire lo script → quiz_bank.js. L'app deve girare con tutti i moduli "🔒 In arrivo" |
| **1** | Modulo 1: Cloud Fundamentals |
| **2** | Modulo 2: IAM & Shared Responsibility ⚠️ il più importante, non affrettarlo |
| **3** | Modulo 3: EC2 & Compute |
| **4** | Modulo 4: S3 & Storage |
| **5** | Modulo 5: VPC & Networking |
| **6** | Moduli 6 + 7: Database + Serverless |
| **7** | Moduli 8 + 9: Messaging + Monitoring |
| **8** | Moduli 10 + 11: Security + Analytics |
| **9** | Modulo 12: Billing & Pricing ⚠️ cruciale, molte domande d'esame qui |
| **10** | Simulatore esame CLF-C02: 65 domande random da QUIZ_BANK, timer 90 min, punteggio 100-1000, soglia 700 |

---

## Checklist di fine checkpoint

- [ ] `node --check` su tutti i JS toccati
- [ ] Script Python già girato e `quiz_bank.js` presente (CP0 only)
- [ ] Nuovo modulo registrato in `index.html` con tag `<script>`
- [ ] App aperta nel browser e testata a mano (feed scorre, quiz funzionano)
- [ ] Commit su `main` con messaggio `AWS Dojo CPn: ...`

---

## GitHub Pages (quando vuoi usarla da telefono)

1. Repo `aws-quiz-master` → **Settings → Pages**
2. Source: **Deploy from branch → main → /aws-dojo → Save**
3. URL: `https://loremona.github.io/aws-quiz-master/aws-dojo/`
4. Dal telefono: apri l'URL → menu browser → "Aggiungi a schermata Home"

---

## Come far partire la sessione

> **"Costruisci l'AWS Dojo: leggi `AWS_DOJO_PLAN.md` e inizia dal Checkpoint 0 (scaffold + quiz_bank.js)."**
