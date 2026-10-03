# AWS Quiz Master

Strumenti per preparare l'esame **AWS Certified Cloud Practitioner (CLF-C02)**,
basati su un database di 1142 domande.

Il repo contiene due app indipendenti:

| App | Cartella | Tecnologia | Dove gira |
|-----|----------|------------|-----------|
| **AWS Dojo** | `aws-dojo/` | HTML/CSS/JS statico | GitHub Pages (PC e telefono) |
| **Quiz Master** | root (`app.py`) | Flask (Python) | Solo in locale / Codespaces |

## AWS Dojo (sito statico)

12 moduli di micro-lezioni, quiz per argomento e simulatore d'esame.
I progressi (XP, streak) sono salvati nel `localStorage` del browser.

- **Online:** https://loremona.github.io/aws-quiz-master/
- **In locale:** apri `aws-dojo/index.html` con doppio click (non serve un server).

Il deploy su GitHub Pages è automatico a ogni push su `main`
(workflow `.github/workflows/pages.yml`). Prima del deploy il workflow
rigenera `aws-dojo/js/data/quiz_bank.js` da `database_domande.json`.

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
