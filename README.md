# AWS Quiz Master

Strumenti per preparare l'esame **AWS Certified Cloud Practitioner (CLF-C02)**,
basati su un database di 1142 domande.

Il repo contiene due app indipendenti:

| App | Cartella | Tecnologia | Dove gira |
|-----|----------|------------|-----------|
| **AWS Dojo** | `aws-dojo/` | HTML/CSS/JS statico | GitHub Pages (PC e telefono) |
| **Quiz Master** | root (`app.py`) | Flask (Python) | Solo in locale / Codespaces |

## AWS Dojo (sito statico)

18 moduli di micro-lezioni che coprono tutti e 4 i domini della guida d'esame
CLF-C02, quiz per argomento e simulatore d'esame.
I progressi (XP, streak, errori, storico esami) sono salvati nel `localStorage` del browser.

**Allenamento**
- **Simulatore d'esame**: 65 domande in 90 minuti, domande e risposte mescolate a ogni tentativo,
  priorità alle domande mai viste, segnalibri, riepilogo con griglia, esame ripristinabile
  se chiudi la pagina, revisione finale con spiegazioni in italiano e storico dei punteggi.
- **Ripasso errori**: tutte le domande sbagliate (moduli, allenamento, simulatore).
  Una domanda esce dal ripasso dopo 2 risposte giuste di fila.
- **Allenamento rapido**: 10/20/40 domande filtrate per argomento, con spiegazione subito.

- **Online:** https://loremona.github.io/aws-quiz-master/
- **In locale:** apri `aws-dojo/index.html` con doppio click (non serve un server).

| # | Modulo | # | Modulo |
|---|--------|---|--------|
| 1 | Cloud Fundamentals | 10 | Security |
| 2 | IAM & Shared Responsibility | 11 | Analytics & AI/ML |
| 3 | EC2 & Compute | 12 | Billing & Pricing |
| 4 | S3 & Storage | 13 | Well-Architected & CAF |
| 5 | VPC & Networking | 14 | Migrazione & Disaster Recovery |
| 6 | Database | 15 | Identità & Sicurezza Avanzata |
| 7 | Serverless & Container | 16 | Strumenti & Governance |
| 8 | Messaging & Integration | 17 | Mappa dei Servizi |
| 9 | Monitoring & Management | 18 | Costi Avanzati & Supporto |

Il deploy su GitHub Pages è automatico a ogni push su `main`
(workflow `.github/workflows/pages.yml`). Prima del deploy il workflow
rigenera `aws-dojo/js/data/quiz_bank.js` da `database_domande.json`
(togliendo i duplicati), `domande_extra.json` e `spiegazioni.json`.

`domande_extra.json` contiene domande scritte per coprire gli argomenti della guida
d'esame che nella banca originale mancavano (es. Bedrock, Amazon Q, Access Analyzer,
Wavelength, Compute Optimizer, Enterprise On-Ramp, CAF, 7 R). Stesso formato di
`database_domande.json`, più `spiegazione`, `tags` e `dominio`. Le usa anche l'app Flask.

Per rigenerarlo a mano:

```bash
python3 aws-dojo/scripts/convert_quiz.py
```

## Quiz Master (app Flask)

Quiz con statistiche, ripasso degli errori, ripetizione dilazionata,
piano di studio e traduzione delle domande.

```bash
pip install -r requirements.txt
python3 app.py            # http://127.0.0.1:5000
```

Variabili d'ambiente opzionali:

| Variabile | Default | Uso |
|-----------|---------|-----|
| `APP_PASSWORD` | *(vuota)* | Se impostata, richiede il login |
| `SECRET_KEY` | `aws-quiz-local-dev` | Chiave delle sessioni Flask |
| `FLASK_HOST` | `127.0.0.1` | Usa `0.0.0.0` per esporla in rete |
| `FLASK_PORT` | `5000` | Porta |
| `FLASK_DEBUG` | `false` | Modalità debug |

I progressi personali (`errori.json`, `storia.json`, `sr_data.json`)
vengono creati alla prima esecuzione e sono esclusi da git.

## Struttura

```
├── app.py                   # App Flask
├── templates/index.html     # Interfaccia dell'app Flask
├── database_domande.json    # Banca domande (fonte unica per entrambe le app)
├── domande_extra.json       # 218 domande aggiuntive sugli argomenti CLF-C02 scoperti (con spiegazione)
├── spiegazioni.json         # Spiegazioni delle risposte
├── note_aws_complete.json   # Note di studio
├── requirements.txt
├── aws-dojo/                # Sito statico pubblicato su GitHub Pages
│   ├── index.html
│   ├── css/  js/
│   └── scripts/convert_quiz.py
├── docs/AWS_DOJO_PLAN.md    # Piano di progetto di AWS Dojo
└── .github/workflows/pages.yml
```
