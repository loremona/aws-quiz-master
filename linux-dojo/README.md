# 🐧 LINUX DOJO — La palestra per la certificazione LPIC-1

> Impara Linux come se fosse TikTok: card a schermo intero, swipe, quiz istantanei,
> XP, streak, livelli e coriandoli. Zero noia, massima dopamina. 🧠⚡

**Certificazione target: LPIC-1** (Linux Professional Institute Certification, livello 1)
— la certificazione Linux vendor-neutral più riconosciuta in Europa. Si compone di
due esami: **101-500** e **102-500**. Tutto il contenuto è in italiano, spiegato
in modo semplicissimo, con esempi pratici su **Arch Linux / CachyOS** (la tua distro)
e note su Debian/Red Hat dove l'esame le richiede.

---

## 🚀 Come si usa

### Dal PC
Apri `index.html` nel browser. Fine. Niente server, niente installazioni.

### Dal telefono (senza PC acceso!) 📱
Quando il progetto sarà nel suo repo dedicato:
1. Su GitHub: **Settings → Pages → Source: Deploy from branch → main → / (root)** → Save
2. Dopo ~1 minuto l'app è live su `https://<tuo-utente>.github.io/linux-quiz-master/`
3. Aprila dal telefono → menu del browser → **"Aggiungi a schermata Home"** → diventa un'app vera e propria

I progressi (XP, streak, moduli completati) si salvano nel browser (localStorage).

---

## 📋 IL PIANO COMPLETO — Tutto ciò che verrà costruito

### L'app (il "motore") ✅ Checkpoint 0
- **Feed verticale stile TikTok**: ogni concetto è una card a schermo intero, scorri per andare avanti
- **4 tipi di card**:
  - 📖 **Lezione** — un concetto, una analogia stupida ma memorabile, zero paroloni
  - 💻 **Terminale** — un comando vero; tocchi e appare l'output (come sul tuo CachyOS)
  - ❓ **Quiz** — rispondi, feedback istantaneo verde/rosso, spiegazione, +XP
  - 💡 **Fun fact** — curiosità per fissare il concetto
- **Gamification**: XP, livelli con nomi (da 🥚 *Pinguino Neonato* a 👑 *Tux Supremo*), streak giornaliero, coriandoli quando completi un modulo
- **Progressi salvati** in automatico, riprendi da dove eri
- **Mobile-first**: progettata per il telefono

### I 10 moduli di contenuto (programma d'esame LPIC-1 completo)

| # | Modulo | Esame LPI | Stato |
|---|--------|-----------|-------|
| 1 | 🧠 **Com'è fatto Linux** — kernel, boot, systemd, processi, hardware | 101: Topic 101 | ✅ CP0 |
| 2 | 📦 **Pacchetti & installazione** — pacman/AUR (casa tua!), apt, dnf, librerie, GRUB | 101: Topic 102 | ✅ CP1 |
| 3 | ⌨️ **Comandi GNU & Unix** — file, pipe, redirect, grep, regex, find, vi | 101: Topic 103 | ⬜ CP2 |
| 4 | 💾 **Dischi & filesystem** — partizioni, mount, fsck, permessi, link, FHS | 101: Topic 104 | ⬜ CP3 |
| 5 | 🐚 **Shell & scripting** — bash, variabili, alias, script, if/for | 102: Topic 105 | ⬜ CP4 |
| 6 | 🖥️ **Interfacce grafiche** — X11, Wayland, desktop, accessibilità | 102: Topic 106 | ⬜ CP5 |
| 7 | 👥 **Amministrazione** — utenti, gruppi, cron, at, localizzazione | 102: Topic 107 | ⬜ CP6 |
| 8 | ⚙️ **Servizi di sistema** — orologio/NTP, log (journald/rsyslog), mail, stampa | 102: Topic 108 | ⬜ CP7 |
| 9 | 🌐 **Networking** — IP, porte, DNS, ping, ss, troubleshooting | 102: Topic 109 | ⬜ CP8 |
| 10 | 🔐 **Sicurezza** — sudo, permessi speciali, SSH, GPG | 102: Topic 110 | ⬜ CP9 |

Ogni modulo contiene **25-35 card** (lezioni + demo terminale + fun fact) e **12-18 quiz** in stile esame.

### Gran finale ⬜ CP10
- 🎓 **Simulatore Esame 101** — 60 domande miste, timer, punteggio stile LPI (500-800)
- 🎓 **Simulatore Esame 102** — idem per il secondo esame
- 📜 **Cheatsheet finali** — un foglio per modulo, ripasso lampo pre-esame

---

## ✅ Stato checkpoint

### CP0 — FATTO (questa sessione)
- [x] Scaffold del progetto
- [x] Motore dell'app completo (feed, card, quiz, XP, livelli, streak, badge, coriandoli, salvataggio)
- [x] Modulo 1 completo: "Com'è fatto Linux" (~30 card, 14 quiz)
- [x] Questo piano

### CP1 — FATTO (stessa sessione)
- [x] Modulo 2 completo: "Pacchetti & installazione" (29 card, 11 quiz) — disco/swap/LVM, GRUB, librerie .so, pacman/AUR, dpkg/apt, rpm/dnf, virtualizzazione

### Cosa manca (per le prossime sessioni)
- [ ] **CP2** → Modulo 3: Comandi GNU & Unix
- [ ] **CP3** → Modulo 4: Dischi & filesystem
- [ ] **CP4** → Modulo 5: Shell & scripting
- [ ] **CP5** → Modulo 6: Interfacce grafiche
- [ ] **CP6** → Modulo 7: Amministrazione
- [ ] **CP7** → Modulo 8: Servizi di sistema
- [ ] **CP8** → Modulo 9: Networking
- [ ] **CP9** → Modulo 10: Sicurezza
- [ ] **CP10** → Simulatori esame 101 e 102 + cheatsheet
- [ ] Migrazione in repo dedicato `linux-quiz-master` + attivazione GitHub Pages

**Per continuare in una nuova sessione**, di' semplicemente:
> "Continua il Linux Dojo dal checkpoint X (vedi linux-dojo/README.md)"

---

## 📦 Migrazione in un repo dedicato (quando vuoi)

```bash
# 1. Crea su github.com un repo vuoto chiamato linux-quiz-master (senza README)
# 2. Poi sul tuo PC:
git clone https://github.com/loremona/aws-quiz-master.git
cd aws-quiz-master && git checkout claude/aws-quiz-master-mobile-yqibg2
cp -r linux-dojo /tmp/linux-quiz-master && cd /tmp/linux-quiz-master
git init && git add -A && git commit -m "Linux Dojo: corso interattivo LPIC-1"
git remote add origin https://github.com/loremona/linux-quiz-master.git
git push -u origin main
```

---

## 🗂️ Struttura del progetto

```
linux-dojo/
├── index.html          # L'app (single page)
├── css/style.css       # Tema scuro neon, animazioni
├── js/app.js           # Motore: feed, quiz, XP, salvataggio
├── js/modules.js       # Registro dei moduli
└── js/data/
    └── module01.js     # Contenuto Modulo 1 (e poi 02, 03...)
```
