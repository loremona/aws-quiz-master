'use strict';
const MODULE14 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🚚',
    title: 'Migrazione, Ibrido & Disaster Recovery',
    text: `Come si porta un'azienda su AWS, e come si sopravvive ai disastri.<br><br>
Questo modulo copre:<br>
• Le <strong>7 R</strong> — strategie di migrazione<br>
• Gli <strong>strumenti di migrazione</strong> (MGN, DMS, DataSync, Snow Family…)<br>
• Il <strong>cloud ibrido</strong> e l'edge (Outposts, Local Zones, Wavelength)<br>
• Le <strong>4 strategie di Disaster Recovery</strong> con RPO e RTO`,
    analogy: `Migrare è come traslocare: alcuni mobili li porti così come sono, altri li ridipingi, altri li butti e ne compri di nuovi.`,
  },

  /* ── LEZIONE: 7 R ── */
  {
    type: 'lesson',
    emoji: '7️⃣',
    title: 'Le 7 R della Migrazione',
    text: `• <strong>Retire</strong> — spegnere ciò che non serve più<br>
• <strong>Retain</strong> — lasciarlo on-premises (per ora)<br>
• <strong>Rehost</strong> — "<em>lift and shift</em>": spostare così com'è su EC2<br>
• <strong>Relocate</strong> — spostare l'infrastruttura VMware su <em>VMware Cloud on AWS</em> senza modifiche<br>
• <strong>Repurchase</strong> — "<em>drop and shop</em>": passare a un prodotto SaaS<br>
• <strong>Replatform</strong> — "<em>lift, tinker and shift</em>": piccole ottimizzazioni senza cambiare il codice (es. database → RDS)<br>
• <strong>Refactor / Re-architect</strong> — riscrivere usando servizi cloud-native (es. serverless). Più costoso, più benefici<br><br>
Ordine per sforzo: Retire &lt; Retain &lt; Rehost ≈ Relocate &lt; Repurchase &lt; Replatform &lt; Refactor.`,
    analogy: `Retire = buttare il vecchio divano. Rehost = portarlo così com'è. Replatform = cambiargli i cuscini. Repurchase = comprarne uno nuovo. Refactor = progettare un divano su misura.`,
  },

  /* ── QUIZ: replatform ── */
  {
    type: 'quiz',
    q: "Un'azienda sposta il suo database MySQL on-premises su Amazon RDS for MySQL, senza modificare il codice dell'applicazione. Quale strategia di migrazione sta usando?",
    opts: [
      'Rehost',
      'Replatform',
      'Refactor',
      'Repurchase',
    ],
    a: 1,
    explain: `✅ Replatform ("lift, tinker and shift"): si fanno piccole ottimizzazioni, come passare a un database managed, senza riscrivere l'applicazione. Rehost sposterebbe MySQL così com'è su un'istanza EC2. Refactor riscriverebbe l'app in modo cloud-native. Repurchase passerebbe a un prodotto SaaS.`,
  },

  /* ── QUIZ: repurchase ── */
  {
    type: 'quiz',
    q: "Un'azienda dismette il proprio CRM installato in sede e passa a un CRM SaaS in abbonamento. Quale delle 7 R descrive questa scelta?",
    opts: [
      'Retire',
      'Relocate',
      'Repurchase',
      'Retain',
    ],
    a: 2,
    explain: `✅ Repurchase ("drop and shop") = sostituire l'applicazione con un prodotto diverso, tipicamente SaaS. Retire significherebbe spegnerla senza sostituirla, Relocate spostare VMware su AWS, Retain lasciarla dov'è.`,
  },

  /* ── LEZIONE: strumenti ── */
  {
    type: 'lesson',
    emoji: '🛠️',
    title: 'Gli Strumenti di Migrazione',
    text: `• <strong>Migration Evaluator</strong> — crea il <em>business case</em> (stima TCO) prima di migrare<br>
• <strong>Application Discovery Service</strong> — fa l'inventario dei server on-premises e delle loro dipendenze<br>
• <strong>AWS Migration Hub</strong> — punto unico per <strong>tracciare</strong> l'avanzamento delle migrazioni<br>
• <strong>AWS Application Migration Service (MGN)</strong> — rehost automatico di server fisici/virtuali su EC2<br>
• <strong>AWS DMS (Database Migration Service)</strong> — migra database con <strong>downtime minimo</strong>: il database di origine resta operativo<br>
• <strong>Schema Conversion Tool (SCT)</strong> — converte lo schema tra motori <em>diversi</em> (es. Oracle → Aurora PostgreSQL)<br>
• <strong>AWS DataSync</strong> — trasferimento <strong>online</strong> di file (NFS, SMB) verso S3, EFS, FSx<br>
• <strong>AWS Transfer Family</strong> — SFTP/FTPS/FTP managed verso S3 o EFS`,
    analogy: `Migration Evaluator = il preventivo del traslocatore. Discovery = l'inventario dei mobili. Migration Hub = la lista con le spunte. MGN = il camion. DMS = il trasloco della cantina senza smettere di usarla.`,
  },

  /* ── LEZIONE: Snow Family ── */
  {
    type: 'lesson',
    emoji: '❄️',
    title: 'Snow Family: Migrare Offline',
    text: `Quando i dati sono tanti e la rete è lenta, si spediscono <strong>fisicamente</strong>: AWS manda un dispositivo, lo carichi, lo rispedisci e i dati finiscono in S3.<br><br>
• <strong>Snowball Edge Storage Optimized</strong> — decine di TB per dispositivo, per grandi migrazioni<br>
• <strong>Snowball Edge Compute Optimized</strong> — più potenza di calcolo, per <strong>edge computing</strong> in luoghi senza connessione (navi, miniere, zone militari)<br>
• <strong>Snowcone</strong> — piccolo e portatile (fuori commercio dal 2024)<br>
• <strong>Snowmobile</strong> — camion da 100 PB (ritirato nel 2024)<br><br>
Regola pratica: se il trasferimento via rete richiederebbe <strong>più di una settimana</strong>, conviene la Snow Family. I dati sono cifrati con KMS.<br><br>
Snowcone e Snowmobile possono ancora comparire nelle domande d'esame.`,
    analogy: `Mandare 80 TB via internet è come svuotare una piscina con un cucchiaino: meglio mandare un camion cisterna.`,
  },

  /* ── QUIZ: DMS + SCT ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole migrare un database Oracle on-premises su Amazon Aurora PostgreSQL riducendo al minimo il downtime. Quali servizi deve usare?",
    opts: [
      'AWS DataSync e Amazon S3',
      'AWS DMS e AWS Schema Conversion Tool',
      'AWS Snowball Edge e AWS Backup',
      'AWS Application Migration Service',
    ],
    a: 1,
    explain: `✅ La migrazione è eterogenea (Oracle → PostgreSQL): SCT converte schema e codice, DMS migra i dati mantenendo operativo il database di origine (downtime minimo). DataSync trasferisce file, non database. Snowball è per trasferimenti offline. MGN fa rehost di server interi, non converte motori di database.`,
  },

  /* ── LEZIONE: ibrido ed edge ── */
  {
    type: 'lesson',
    emoji: '🏭',
    title: 'Cloud Ibrido ed Edge',
    text: `• <strong>AWS Outposts</strong> — rack di hardware AWS installati <strong>nel tuo data center</strong>, gestiti da AWS. Stessi servizi e API (EC2, EBS, RDS…) on-premises: per bassa latenza o dati che devono restare in sede<br>
• <strong>Local Zones</strong> — estensioni di una Regione vicino a <strong>grandi città</strong>: latenza di pochi millisecondi (gaming, video editing)<br>
• <strong>Wavelength</strong> — infrastruttura AWS dentro le reti <strong>5G</strong> degli operatori telefonici: latenza ultra-bassa per dispositivi mobili<br>
• <strong>Storage Gateway</strong> — collega lo storage on-premises a S3 (File, Volume, Tape Gateway)<br>
• <strong>VMware Cloud on AWS</strong> — esegui ambienti VMware su infrastruttura AWS<br>
• <strong>ECS Anywhere / EKS Anywhere</strong> — container gestiti anche sui tuoi server`,
    analogy: `Outposts = una filiale AWS dentro casa tua. Local Zones = un negozio AWS sotto casa. Wavelength = un chiosco AWS dentro l'antenna del telefono.`,
  },

  /* ── QUIZ: Wavelength ── */
  {
    type: 'quiz',
    q: "Un'azienda sviluppa un gioco in realtà aumentata per smartphone che richiede latenza di pochi millisecondi sulle reti 5G. Quale servizio è più adatto?",
    opts: [
      'AWS Outposts',
      'AWS Wavelength',
      'Amazon CloudFront',
      'AWS Direct Connect',
    ],
    a: 1,
    explain: `✅ Wavelength porta calcolo e storage AWS dentro le reti 5G degli operatori, per latenza ultra-bassa verso i dispositivi mobili. Outposts porta AWS nel data center del cliente. CloudFront mette in cache contenuti, non esegue l'applicazione vicino al 5G. Direct Connect è una connessione privata dal data center ad AWS.`,
  },

  /* ── LEZIONE: Disaster Recovery ── */
  {
    type: 'lesson',
    emoji: '🆘',
    title: 'Le 4 Strategie di Disaster Recovery',
    text: `Due misure chiave:<br>
• <strong>RPO</strong> (Recovery Point Objective) — quanti <em>dati</em> posso permettermi di perdere (es. ultimi 15 minuti)<br>
• <strong>RTO</strong> (Recovery Time Objective) — quanto <em>tempo</em> posso restare fermo<br><br>
Dalla più economica alla più costosa:<br>
1. <strong>Backup & Restore</strong> — solo backup; RPO/RTO di <em>ore</em><br>
2. <strong>Pilot Light</strong> — solo il nucleo (es. database replicato) sempre acceso, il resto si avvia in caso di disastro; <em>decine di minuti</em><br>
3. <strong>Warm Standby</strong> — copia completa ma <strong>ridotta</strong> sempre attiva, si scala al bisogno; <em>minuti</em><br>
4. <strong>Multi-Site Active/Active</strong> — due ambienti completi attivi insieme; RTO quasi <em>zero</em><br><br>
Servizi: <strong>AWS Backup</strong> (backup centralizzati e pianificati), <strong>AWS Elastic Disaster Recovery</strong> (replica continua di server per ripristino rapido).`,
    analogy: `Backup = foto dei documenti in un cassetto. Pilot light = fiammella della caldaia sempre accesa. Warm standby = seconda casa arredata ma al minimo. Multi-site = due case abitate insieme.`,
  },

  /* ── QUIZ: warm standby ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole un RTO di pochi minuti mantenendo sempre attiva, in un'altra Regione, una versione ridotta ma completa del proprio ambiente. Quale strategia di DR descrive?",
    opts: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active',
    ],
    a: 2,
    explain: `✅ Warm Standby = copia completa ma ridotta, sempre in esecuzione, che si scala in caso di disastro (RTO di minuti). Pilot Light tiene acceso solo il nucleo (es. il database). Backup and Restore ha RTO di ore. Multi-Site ha due ambienti completi a piena capacità.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🚛',
    title: 'Un camion da 100 Petabyte',
    text: `<strong>AWS Snowmobile</strong> era un container lungo 14 metri trainato da un camion, con capacità di <strong>100 PB</strong>, presentato nel 2016 portandolo letteralmente sul palco di re:Invent.<br><br>
Trasferire 100 PB su una linea da 1 Gbps richiederebbe oltre <strong>25 anni</strong>; con Snowmobile bastavano poche settimane.<br><br>
È stato ritirato nel 2024: oggi le grandi migrazioni usano più dispositivi Snowball o connessioni Direct Connect ad alta velocità.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Migrazione & DR',
    text: `<strong>7 R:</strong> Retire · Retain · Rehost (lift & shift) · Relocate (VMware) · Repurchase (SaaS) · Replatform (es. → RDS) · Refactor (cloud-native)<br><br>
<strong>Strumenti:</strong> Migration Evaluator (TCO) · Discovery Service (inventario) · Migration Hub (tracciamento) · MGN (rehost server) · DMS + SCT (database) · DataSync (file online) · Transfer Family (SFTP) · Snow Family (offline)<br><br>
<strong>Ibrido/edge:</strong> Outposts (AWS in casa tua) · Local Zones (vicino alle città) · Wavelength (5G) · Storage Gateway<br><br>
<strong>DR:</strong> Backup & Restore (ore) → Pilot Light → Warm Standby (minuti) → Multi-Site (≈0)<br>
<strong>RPO</strong> = dati persi · <strong>RTO</strong> = tempo di fermo`,
    analogy: `Più vuoi ripartire in fretta dopo un disastro, più paghi per tenere acceso un ambiente di riserva.`,
  },

];
