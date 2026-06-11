# 🏗️ PIANO: AWS Dojo — versione Dojo dell'app per la CLF-C02

> Questo documento serve a una sessione Claude futura per costruire la versione
> "Dojo" dell'app AWS Quiz Master: statica, sul telefono, con micro-lezioni +
> quiz + gamification. Leggi tutto prima di scrivere codice.

---

## Contesto (perché questo documento esiste)

L'app attuale (`app.py`) è una **Flask app** che:
- Funziona SOLO con il PC acceso (server Python)
- Ha già quiz ottimi (1142 domande, ripetizione spaziata, modalità errori, simulatore esame)
- **Manca di lezioni**: butta l'utente sui quiz senza spiegare prima i concetti
- Non è mobile-first

La CLF-C02 è un esame **100% concettuale** (solo scelta multipla, niente terminale, niente pratica): è l'esame perfetto per il formato Dojo — micro-lezioni + quiz + spaced repetition sul telefono.

**L'obiettivo:** costruire `aws-dojo/index.html` (statico, zero server, funziona su GitHub Pages) che affianca l'app Flask esistente. L'app Flask NON va toccata.

---

## Cosa NON toccare

- `app.py` — niente modifiche
- `templates/` — niente modifiche
- `database_domande.json` — solo lettura (lo usiamo come fonte)
- `requirements.txt`, `.gitignore`, i JSON di dati — niente

Tutto il nuovo lavoro va SOLO nella cartella `aws-dojo/`.

---

## Struttura da creare

```
aws-dojo/
├── index.html           # SPA: home + feed
├── css/style.css        # Tema scuro arancio-oro AWS
├── js/app.js            # Motore (identico al Linux Dojo, tema cambiato)
├── js/modules.js        # Registro MODULES
└── js/data/
    ├── module01.js      # Lezione: Shared Responsibility Model
    ├── module02.js      # Lezione: IAM
    ├── ...              # ecc.
    └── quiz_bank.js     # Le domande da database_domande.json (vedi sotto)
```

---

## Il database_domande.json: struttura e utilizzo

**1142 domande** in inglese (l'esame CLF-C02 è in inglese), struttura:

```json
{
  "domanda": "Which control becomes AWS responsibility after migration?",
  "opzioni": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "risposta_corretta": "B"
}
```

- **267 domande multi-risposta** (risposta_corretta = "A,C" ecc.)
- I tag per argomento sono già calcolati in `app.py` → `SERVIZI_AWS` (dizionario con keywords per servizio)

**Come convertirlo in quiz_bank.js**: scrivere uno script Python `scripts/convert_quiz.py` che legge `database_domande.json` e genera `aws-dojo/js/data/quiz_bank.js` con:

```js
const QUIZ_BANK = [
  { q: "domanda...", opts: ["A: ...", "B: ...", "C: ...", "D: ..."],
    a: 1,  // indice 0-based della risposta corretta
    multi: false, tags: ["IAM"] },
  // ...
];
```

Lo script deve anche assegnare i `tags` usando la logica di `SERVIZI_AWS` già in `app.py`.

---

## I moduli di lezione (contenuto da creare da zero)

Sono 12 moduli, uno per argomento CLF-C02. Le domande del QUIZ_BANK si assegnano ai moduli per tag.

| # | Modulo | Tag domande | N° domande stimate |
|---|--------|-------------|-------------------|
| 1 | ☁️ Cloud & AWS Fundamentals | Altro, Well-Architected | ~80 |
| 2 | 🔐 IAM & Shared Responsibility | IAM, Shared Responsibility | ~130 |
| 3 | 💻 EC2 & Compute | EC2 | ~140 |
| 4 | 🗄️ S3 & Storage | S3, Storage | ~100 |
| 5 | 🌐 VPC & Networking | VPC, Networking, Route 53, CloudFront | ~110 |
| 6 | 🗃️ Database | RDS, DynamoDB | ~70 |
| 7 | ⚡ Serverless & Container | Lambda, ECS / Fargate, EKS | ~80 |
| 8 | 📨 Messaging & Integration | SNS, SQS | ~50 |
| 9 | 📊 Monitoring & Management | CloudWatch, CloudFormation, Support | ~90 |
| 10 | 🔒 Security Avanzata | Security | ~80 |
| 11 | 📈 Analytics & AI/ML | Analytics, AI / ML | ~60 |
| 12 | 💰 Billing & Pricing | Billing & Cost | ~100 |

Ogni modulo ha:
- **5-10 card lezione** (micro-lezioni con analogie in italiano — stesso stile del Linux Dojo)
- **Card terminale ASSENTI** (la CLF-C02 non richiede pratica)
- **Quiz** pescati dal QUIZ_BANK per quel tag (in inglese, come all'esame vero)
- **Fun fact** su AWS (storia, curiosità, numeri)
- **Ripasso lampo** finale

---

## Il motore (js/app.js)

È **quasi identico** al Linux Dojo (`linux-dojo/js/app.js`). Differenze:

1. **Tema colori**: dal viola-verde al **arancio-oro AWS** (`--accent: #ff9900`, `--accent2: #ffffff`, background più scuro tipo `#0a0f1e`)
2. **Nome store**: `STORE_KEY = 'aws-dojo-v1'` (non `linux-dojo-v1`)
3. **Livelli a tema AWS**:
   ```js
   { xp: 0,    emoji: '☁️', name: 'Cloud Curious' },
   { xp: 100,  emoji: '🌤️', name: 'AWS Rookie' },
   { xp: 250,  emoji: '⛅', name: 'Solutions Finder' },
   { xp: 500,  emoji: '🌩️', name: 'Cloud Architect' },
   { xp: 800,  emoji: '🚀', name: 'Senior Engineer' },
   { xp: 1200, emoji: '🏗️', name: 'Solutions Architect' },
   { xp: 1700, emoji: '🔱', name: 'AWS Hero' },
   { xp: 2300, emoji: '👑', name: 'Cloud Master' },
   { xp: 3000, emoji: '🌟', name: 'CLF-C02 Champion' },
   ```
4. **NESSUN tipo `terminal`** (la CLF non richiede pratica CLI)
5. **Aggiungere tipo `input`** per fill-in-the-blank (già specificato nel Linux Dojo README — stessa implementazione)

Per il resto: copia `linux-dojo/js/app.js` e applica solo queste differenze.

---

## Schema card (stesso del Linux Dojo, senza `terminal`)

```js
// LEZIONE — spiegazione concetto CLF-C02, in italiano, con analogia
{ type: 'lesson', emoji: '☁️', title: 'Shared Responsibility: chi fa cosa?',
  text: `...max 120 parole, HTML: <strong> <code> <br>...`,
  analogy: `Analogia stupida ma memorabile. Prefisso "🐒 Per la scimmia:" lo mette il CSS.` },

// FUN FACT — curiosità AWS/cloud, 1-2 per modulo
{ type: 'fact', emoji: '📊', title: 'Il datacenter di AWS...', text: `...` },

// QUIZ BANCA — preso da QUIZ_BANK (in inglese, come l'esame reale)
// NON si scrive a mano: l'app pesca automaticamente dal QUIZ_BANK per tag
// (vedi sezione "Come collegare QUIZ_BANK ai moduli" sotto)

// QUIZ CUSTOM — quiz in italiano scritto a mano, per concetti critici
{ type: 'quiz', q: 'Chi è responsabile del patching del sistema operativo su EC2?',
  opts: ['AWS', 'Il cliente', 'Entrambi al 50%', 'Dipende dalla regione'], a: 1,
  explain: `Su EC2 il cliente controlla l'OS: tocca a lui aggiornarlo. AWS gestisce solo
  l'hypervisor e l'hardware sotto. Shared Responsibility: AWS = sicurezza DEL cloud,
  cliente = sicurezza NEL cloud. 🔐` },
```

---

## Come collegare QUIZ_BANK ai moduli

In `js/modules.js`, ogni modulo dichiara i suoi `tags`. Il motore in `js/app.js` filtra `QUIZ_BANK` per quei tag e aggiunge i quiz in coda alle card lezione:

```js
// js/modules.js
const MODULES = [
  { id: 'm01', icon: '☁️', title: 'Cloud Fundamentals', tags: ['Altro', 'Well-Architected'],
    cards: typeof MODULE01 !== 'undefined' ? MODULE01 : [] },
  { id: 'm02', icon: '🔐', title: 'IAM & Shared Responsibility', tags: ['IAM', 'Shared Responsibility'],
    cards: typeof MODULE02 !== 'undefined' ? MODULE02 : [] },
  // ...
];

// js/app.js — in openModule(), dopo aver caricato le card:
function buildModuleCards(mod) {
  const quizCards = (typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : [])
    .filter(q => q.tags.some(t => mod.tags.includes(t)))
    .slice(0, 20); // max 20 domande per modulo nel feed
  return [...mod.cards, ...quizCards.map(q => ({
    type: 'quiz',
    q: q.q, opts: q.opts, a: q.a,
    explain: '(da banca domande CLF-C02)'
  }))];
}
```

Questo modo riusa le 1142 domande esistenti senza riscriverle e le espone all'utente nel contesto giusto (dopo aver studiato quel modulo).

---

## Script di conversione: scripts/convert_quiz.py

Da creare e lanciare una volta sola:

```python
# scripts/convert_quiz.py
import json, re, os

with open('database_domande.json') as f:
    db = json.load(f)

# Copia la logica SERVIZI_AWS da app.py
SERVIZI_AWS = { ... }  # copia identica da app.py

def get_tags(q):
    testo = (q['domanda'] + ' ' + ' '.join(q['opzioni'].values())).lower()
    trovati = [srv for srv, kws in SERVIZI_AWS.items() if any(kw in testo for kw in kws)]
    return trovati if trovati else ['Altro']

def convert(q):
    opts = [f"{k}: {v}" for k, v in q['opzioni'].items()]
    corr = [r.strip() for r in q['risposta_corretta'].split(',')]
    # indice 0-based della prima risposta corretta
    a = list(q['opzioni'].keys()).index(corr[0])
    return {
        'q': q['domanda'].replace('\n', ' ').strip(),
        'opts': opts, 'a': a,
        'multi': len(corr) > 1, 'tags': get_tags(q)
    }

out = [convert(q) for q in db]
os.makedirs('aws-dojo/js/data', exist_ok=True)
with open('aws-dojo/js/data/quiz_bank.js', 'w') as f:
    f.write('const QUIZ_BANK = ')
    json.dump(out, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f'Convertite {len(out)} domande → aws-dojo/js/data/quiz_bank.js')
```

Lanciare con: `python3 scripts/convert_quiz.py`

---

## Ordine di lavoro (checkpoint)

| CP | Cosa fare | Note |
|----|-----------|------|
| **0** | Scaffold (index.html, css/style.css con tema AWS arancio, js/app.js adattato, js/modules.js) + script di conversione + quiz_bank.js generato | Niente contenuto ancora, ma l'app gira e mostra la home coi moduli tutti "bloccati" |
| **1** | Modulo 1: Cloud Fundamentals (5-8 card lezione + quiz da banca) | |
| **2** | Modulo 2: IAM & Shared Responsibility (modulo più importante!) | |
| **3** | Modulo 3: EC2 & Compute | |
| **4** | Modulo 4: S3 & Storage | |
| **5** | Modulo 5: VPC & Networking | |
| **6** | Moduli 6+7: Database + Serverless | Due moduli più corti in un CP |
| **7** | Moduli 8+9: Messaging + Monitoring | Due moduli |
| **8** | Moduli 10+11: Security + Analytics | Due moduli |
| **9** | Modulo 12: Billing & Pricing (cruciale per l'esame!) | |
| **10** | Simulatore esame CLF-C02: 65 domande random da QUIZ_BANK, timer 90 min, soglia 700/1000, review finale | |
| **11** | Gamification avanzata: mazzo errori 🔁, quiz input fill-in-the-blank, cheatsheet PDF-style per modulo | |

---

## Stile contenuti (INVARIANTE rispetto al Linux Dojo)

- **Lezioni in italiano**, quiz in inglese (perché l'esame è in inglese)
- Tono amico sveglio, mai accademico
- Analogia obbligatoria per ogni lezione (prefisso "🐒 Per la scimmia:" aggiunto dal CSS)
- Trappole d'esame evidenziate (es. S3 Standard vs Glacier, On-Demand vs Reserved)
- Concetti chiave in `<strong>`, nomi di servizi AWS in `<strong>` al primo utilizzo

---

## Come attivare GitHub Pages dopo aver pushato

1. Repo `aws-quiz-master` → **Settings → Pages**
2. Source: **Deploy from branch** → `main` → `/aws-dojo` → Save
3. URL: `https://loremona.github.io/aws-quiz-master/aws-dojo/`
4. Dal telefono: apri quell'URL → menu browser → "Aggiungi a schermata Home"

*(Alternativa: creare un repo dedicato `aws-dojo-master` pubblico, come fatto per linux-quiz-master)*

---

## Per la sessione futura: come iniziare

Apri questa sessione e scrivi:

> **"Costruisci l'AWS Dojo: crea la cartella `aws-dojo/` seguendo il piano in `AWS_DOJO_PLAN.md`. Parti dal Checkpoint 0: scaffold + script conversione + quiz_bank.js."**

Prima di scrivere codice, la sessione deve:
1. Leggere questo file
2. Leggere `linux-dojo/js/app.js` (base del motore da adattare)
3. Leggere `linux-dojo/css/style.css` (base del CSS da ricolorare)
4. Verificare che `database_domande.json` sia presente e leggibile
