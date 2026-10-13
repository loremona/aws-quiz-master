# ☁️ AWS Quiz Master

Sto preparando la **AWS Certified Cloud Practitioner (CLF-C02)** come primo passo verso il
cloud. Avevo un database di domande d'esame e volevo un modo per studiarle che non fosse
scorrere un PDF, così ci ho costruito sopra due app.

| App | Dove | Tecnologia | Dove gira |
|-----|------|------------|-----------|
| **AWS Dojo** | `aws-dojo/` | HTML/CSS/JS statico | GitHub Pages, PC e telefono |
| **Quiz Master** | `app.py` | Flask (Python) | In locale o su Codespaces |

**👉 AWS Dojo online:** https://loremona.github.io/aws-quiz-master/

---

## AWS Dojo

È quella che uso di più. 18 moduli di lezioni brevi che coprono tutti e 4 i domini della
guida d'esame, con un'analogia per ogni concetto e quiz subito dopo. In mezzo ci sono le
domande vere della banca, con una spiegazione in italiano che dice anche perché le altre
risposte sono sbagliate.

Per allenarmi ci sono:

- **Simulatore d'esame:** 65 domande in 90 minuti, domande e risposte mescolate a ogni
  tentativo, prima quelle mai viste. Si possono segnare le domande, c'è la griglia di
  riepilogo e se chiudo la pagina riprendo da dove ero. Alla fine rivedo tutto con le
  spiegazioni e tengo lo storico dei punteggi.
- **Ripasso errori:** raccoglie tutte le domande sbagliate, da moduli, allenamento e
  simulatore. Una domanda esce dal ripasso dopo 2 risposte giuste di fila.
- **Allenamento rapido:** 10, 20 o 40 domande per argomento, con la spiegazione subito.
- **Backup progressi:** i progressi stanno nel browser, quindi da *Esporta* scarico un file
  `.json` e con *Importa* lo ricarico su un altro dispositivo.

Per usarla basta il link sopra, oppure aprire `aws-dojo/index.html` con doppio click.

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

### La banca domande

Le domande sono **1252**, tutte diverse, e vengono da tre file:

- `database_domande.json`: la banca originale, da cui tolgo i doppioni
- `domande_extra.json`: domande aggiunte sugli argomenti della guida che nella banca
  mancavano del tutto (Bedrock, Amazon Q, Access Analyzer, Wavelength, Compute Optimizer,
  CAF, le 7 R della migrazione…)
- `revisione_it.json`: la revisione di tutta la banca. Per ogni domanda c'è il capitolo
  (il primo tag decide in quale modulo finisce), una spiegazione specifica e, dove la
  risposta originale era sbagliata o non più valida, la correzione.

Lo script `aws-dojo/scripts/convert_quiz.py` mette tutto insieme in
`aws-dojo/js/data/quiz_bank.js`. A ogni push su `main` lo fa da solo il workflow
`.github/workflows/pages.yml`, che poi pubblica il sito su GitHub Pages. Per farlo a mano:

```bash
python3 aws-dojo/scripts/convert_quiz.py
```

---

## Quiz Master (Flask)

È la prima versione, da usare sul PC: quiz con statistiche, ripasso degli errori,
ripetizione dilazionata, piano di studio e traduzione delle domande.

```bash
pip install -r requirements.txt
python3 app.py            # http://127.0.0.1:5000
```

Si può configurare con qualche variabile d'ambiente, tutte facoltative:

| Variabile | Default | A cosa serve |
|-----------|---------|--------------|
| `APP_PASSWORD` | *(vuota)* | Se c'è, chiede il login |
| `SECRET_KEY` | `aws-quiz-local-dev` | Chiave delle sessioni Flask |
| `FLASK_HOST` | `127.0.0.1` | `0.0.0.0` per aprirla in rete |
| `FLASK_PORT` | `5000` | Porta |
| `FLASK_DEBUG` | `false` | Modalità debug |

I miei progressi (`errori.json`, `storia.json`, `sr_data.json`) si creano al primo avvio e
non finiscono su git.

---

## Struttura

```
app.py                   app Flask
templates/index.html     interfaccia dell'app Flask
database_domande.json    banca domande originale (la usano tutte e due le app)
domande_extra.json       domande aggiunte sugli argomenti scoperti
spiegazioni.json         spiegazioni delle risposte
revisione_it.json        revisione: capitoli, spiegazioni, correzioni
note_aws_complete.json   note di studio
requirements.txt
aws-dojo/                sito statico pubblicato su GitHub Pages
  index.html
  css/  js/
  scripts/convert_quiz.py
.github/workflows/pages.yml
```

---

## Crediti

È un progetto di studio, quindi per fare prima e tenere le cose semplici mi sono fatto
aiutare da Claude per la revisione e la correzione dei contenuti e del codice.
