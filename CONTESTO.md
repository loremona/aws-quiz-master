# CONTESTO — Lorenzo Monaco / aws-quiz-master

> File di continuità sessione. Ogni nuova sessione Claude su questo repo
> deve leggere questo file PRIMA di fare qualsiasi altra cosa.

---

## Chi sono

Lorenzo Monaco, Torino. Cambio carriera dal retail verso Cloud/SRE.
Personalità INTP-T (86% Spontaneous → ho bisogno di scadenze esterne).
Stile di studio: visual, spaced repetition, gamification.

**Obiettivo professionale: SRE** (Infrastructure + automation + deep specialist).
Sia il percorso CLF→SAA che quello LPIC-1→LPIC-2 portano allo stesso posto.

---

## Ecosistema di repo

| Repo | Branch | Scopo |
|------|--------|-------|
| `aws-quiz-master` | `main` | Flask SPA con 1142 domande CLF-C02 (già funzionante) + piano aws-dojo |
| `aws-quiz-master` | `claude/aws-quiz-master-mobile-yqibg2` | Linux Dojo (app statica LPIC-1) |
| `linux-quiz-master` | `main` | Destinazione finale Linux Dojo (repo pubblica — migrazione da PC) |

**IMPORTANTE**: non toccare mai `app.py`, `templates/`, `database_domande.json`,
`requirements.txt` dentro aws-quiz-master.

---

## Progetto 1 — Linux Dojo (priorità corrente)

**Posizione**: `aws-quiz-master / branch claude/aws-quiz-master-mobile-yqibg2 / linux-dojo/`

App TikTok-style, vanilla HTML/CSS/JS, zero dipendenze, funziona da `file://`
e GitHub Pages.

### Stato checkpoint

| CP | Contenuto | Status |
|----|-----------|--------|
| CP0 | Motore app + Modulo 1 (kernel/boot/systemd) | ✅ |
| CP1 | Modulo 2 (pacchetti/GRUB/librerie) | ✅ |
| CP2 | Card tipo `input` + Modulo 3 (comandi GNU) | 🔜 prossimo |
| CP3 | Card tipo `mission` + Modulo 4 (dischi/FS) | ⬜ |
| CP4 | Moduli 5-6 (shell/scripting + GUI) | ⬜ |
| CP5 | Moduli 7-8 (admin + servizi) | ⬜ |
| CP6 | Moduli 9-10 (networking + sicurezza) + polish finale | ⬜ |

### Tipi di card

```
lesson  → spiegazione + analogia obbligatoria (+20 XP)
fact    → statistic o curiosità (+10 XP)
terminal → snippet copiabile (+15 XP)
quiz    → 4 opzioni A/B/C/D (+25 XP)
input   → fill-in-the-blank [DA IMPLEMENTARE in CP2] (+35 XP)
mission → esercizio reale in terminale [DA IMPLEMENTARE in CP3] (+50 XP)
```

### File chiave

- `linux-dojo/README.md` — guida completa sviluppatore, leggila sempre prima
- `linux-dojo/index.html` — shell SPA
- `linux-dojo/css/style.css` — dark neon theme (--bg #0b0e1a, --accent #7c5cff)
- `linux-dojo/js/app.js` — motore: localStorage, XP/livelli, scroll, card builders
- `linux-dojo/js/modules.js` — array MODULES con 10 moduli
- `linux-dojo/js/data/module01.js` — 33 card Topic 101
- `linux-dojo/js/data/module02.js` — 29 card Topic 102

### Prompt per continuare Linux Dojo (nuova sessione su linux-quiz-master)

```
Continua lo sviluppo del Linux Dojo da dove è stato lasciato.

1. Leggi PRIMA tutto il README.md nella root: contiene stato attuale,
   roadmap a checkpoint, schema esatto delle card, stile dei contenuti
   ("la voce del Dojo"), vincoli tecnici e checklist di fine checkpoint.
   Rispettalo alla lettera, senza derogare.

2. Esegui il CHECKPOINT 2, che consiste in due cose:
   a) UPGRADE MOTORE: implementa il nuovo tipo di card `input`
      (fill-in-the-blank, +35 XP) in app.js: renderizza un campo
      <input type="text"> con placeholder, confronta la risposta
      case-insensitive e trim, mostra feedback ✅/❌ e XP toast.
      Schema card: { type:'input', q:'...', a:'risposta', hint:'...' }
   b) MODULO 3 — "Comandi GNU & Unix" (LPIC-1 Topic 103.1–103.8):
      crea js/data/module03.js con ≥30 card (mix lesson/fact/terminal/
      quiz/input), copri: navigazione FS (ls,cd,find), manipolazione
      file (cp,mv,rm,ln), pipe e redirect, grep e regex base,
      editor vi/vim (modalità, comandi essenziali), compressione
      (tar,gzip,bzip2), process management (ps,kill,top,bg,fg).
      Stile voce Dojo: diretto, tagliente, con analogia nelle lesson.

3. A fine lavoro: node --check su tutti i JS, aggiorna le tabelle
   di stato nel README (CP2 ✅), commit "Linux Dojo CP2: Modulo 3 +
   quiz a risposta scritta" e push su main.
```

---

## Progetto 2 — AWS Dojo

**File piano**: `aws-quiz-master / main / AWS_DOJO_PLAN.md`

App statica mobile-first, vanilla JS, stessa architettura del Linux Dojo
ma per CLF-C02. Leggi AWS_DOJO_PLAN.md — è self-contained con:
- Script Python `convert_quiz.py` (converte database_domande.json → quiz_bank.js)
- Spec completa js/modules.js (12 moduli AWS)
- Funzione `buildModuleCards()` completa
- Tabella checkpoint (CP0 → CP4)
- Istruzioni GitHub Pages

### Prompt per iniziare AWS Dojo (nuova sessione)

```
Leggi prima AWS_DOJO_PLAN.md nella root del repo (branch main).
Poi esegui il CHECKPOINT 0:
- Crea aws-dojo/ con la struttura descritta nel piano
- Implementa index.html, css/style.css, js/app.js, js/modules.js
  seguendo le spec esatte del documento
- Esegui convert_quiz.py per generare js/data/quiz_bank.js
- Testa che l'app si apra da file:// senza errori in console
- Commit "AWS Dojo CP0: struttura base e motore app" e push su main
NON toccare app.py, templates/, database_domande.json, requirements.txt.
```

---

## Percorso certificazioni (ordine raccomandato)

1. **AWS CLF-C02** → prenota SUBITO (entro 2 settimane)
2. **LPIC-1** (101-500 + 102-500) — più riconosciuto in Europa per SRE
3. **AWS SAA-C03** — dopo SAA compra Tutorials Dojo (~15€)
4. **Terraform Associate** — dopo SAA
5. *(Opzionale)* LPIC-2 o CKA più avanti

**Stipendio entry-level SRE**: 28-35k€/anno prima esperienza.
Prima certificazione + progetto GitHub misurabile → 32-38k€.

---

## Note tecniche generali

- Tutto vanilla: HTML + CSS + JS, zero npm, zero build
- localStorage key: `linux-dojo-v1` / `aws-dojo-v1`
- Deploy: GitHub Pages (Settings → Pages → main → / root)
- `app.py` usa Flask + SQLite, NON modificare mai
- Il branch `claude/aws-quiz-master-mobile-yqibg2` contiene linux-dojo/
  e va migrato in linux-quiz-master (eseguire da PC con accesso write)

---

*Aggiornato: 2026-06-13*
