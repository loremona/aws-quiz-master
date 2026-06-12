'use strict';
const MODULE06 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🗃️',
    title: 'Database su AWS',
    text: `AWS offre database managed per ogni caso d'uso. Questo modulo copre:<br><br>
• <strong>RDS</strong> — database relazionali managed (MySQL, PostgreSQL, Aurora…)<br>
• <strong>DynamoDB</strong> — NoSQL serverless<br>
• <strong>ElastiCache</strong> — cache in memoria (Redis/Memcached)<br>
• <strong>Redshift</strong> — data warehouse per analytics<br>
• <strong>DMS</strong> — migrazione database<br><br>
La domanda chiave dell'esame: <em>relazionale o NoSQL? Quale engine? Managed o self-managed?</em>`,
    analogy: `RDS = contabile con foglio Excel strutturato. DynamoDB = quaderno con post-it veloci. ElastiCache = lavagna per appunti rapidi. Redshift = archivio storico gigante per analisi.`,
  },

  /* ── LEZIONE: RDS ── */
  {
    type: 'lesson',
    emoji: '🗄️',
    title: 'Amazon RDS: Database Relazionali Managed',
    text: `<strong>RDS (Relational Database Service)</strong> gestisce database relazionali senza che tu debba installare, patchare o fare backup manualmente.<br><br>
Engine supportati: <strong>MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora</strong>.<br><br>
Cosa gestisce AWS (differenza chiave da EC2!):<br>
• Provisioning hardware e OS<br>
• Patching automatico del DB engine<br>
• Backup automatici e point-in-time restore<br>
• Multi-AZ per alta disponibilità<br><br>
Cosa gestisce il cliente:<br>
• Schema del database e query<br>
• Parametri di configurazione<br>
• Security group e accessi`,
    analogy: `RDS è come un affitto con servizi inclusi: il proprietario (AWS) sistema gli impianti, fa la manutenzione, pulisce. Tu ti preoccupi solo dell'arredamento (dati e schema).`,
  },

  /* ── LEZIONE: Aurora ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Amazon Aurora: il Database di AWS',
    text: `<strong>Amazon Aurora</strong> è il database relazionale proprietario di AWS, compatibile con MySQL e PostgreSQL.<br><br>
Perché Aurora è speciale:<br>
• <strong>5x più veloce</strong> di MySQL standard, <strong>3x di PostgreSQL</strong><br>
• Storage automatico fino a <strong>128 TB</strong>, si espande da solo<br>
• <strong>6 copie dei dati</strong> su 3 AZ — alta durabilità<br>
• <strong>Aurora Serverless</strong>: scala automaticamente, paghi solo i secondi di utilizzo<br><br>
Scegli Aurora quando vuoi le prestazioni massime senza gestire il database. È più costoso di RDS standard ma più performante.`,
    analogy: `Aurora è come un'auto di lusso con guida autonoma: fa tutto da solo, va più veloce, ma costa di più. RDS standard è l'auto normale: affidabile, meno costosa, ma guidi tu.`,
  },

  /* ── QUIZ: RDS vs EC2 database ── */
  {
    type: 'quiz',
    q: "Un team vuole deployare un database MySQL su AWS con il minimo sforzo operativo (no patching, backup automatici, alta disponibilità). Quale soluzione scegliere?",
    opts: [
      'Installare MySQL su un\'istanza EC2 e gestirlo manualmente',
      'Usare Amazon RDS for MySQL con Multi-AZ abilitato',
      'Usare DynamoDB con schema MySQL-compatibile',
      'Usare Amazon Redshift per il database MySQL',
    ],
    a: 1,
    explain: `✅ RDS for MySQL gestisce automaticamente patching, backup, e con Multi-AZ garantisce failover automatico. EC2 + MySQL è possibile ma richiede gestione manuale di tutto (IaaS). DynamoDB è NoSQL, non compatibile con MySQL. Redshift è un data warehouse per analytics, non un DB transazionale.`,
  },

  /* ── LEZIONE: DynamoDB ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'DynamoDB: NoSQL Serverless',
    text: `<strong>Amazon DynamoDB</strong> è un database NoSQL completamente managed e serverless.<br><br>
Caratteristiche chiave:<br>
• <strong>Schemaless</strong>: ogni item può avere attributi diversi<br>
• Latenza in <strong>millisecondi a qualsiasi scala</strong><br>
• Scala automaticamente: da zero a milioni di richieste al secondo<br>
• <strong>Serverless</strong>: non gestisci server, paghi per richiesta o capacità<br>
• Integrazione nativa con Lambda per architetture event-driven<br><br>
Quando usare DynamoDB:<br>
✅ App mobile, gaming, IoT, sessioni utente, cataloghi<br>
❌ Query SQL complesse, transazioni multi-tabella complesse → usa RDS`,
    analogy: `DynamoDB è un archivio di cartelle sospese: accedi a qualsiasi cartella in ms, puoi avere milioni di cartelle, ma non puoi fare JOIN tra cartelle diverse come con un foglio Excel.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🛒',
    title: 'Amazon.com usa DynamoDB per ogni click',
    text: `<strong>DynamoDB</strong> gestisce il carrello acquisti di Amazon.com, le sessioni utente di Prime Video, e i punteggi in tempo reale di giochi come Fortnite.<br><br>
Durante il <strong>Prime Day 2023</strong> ha gestito picchi di <strong>126 milioni di richieste al secondo</strong>.<br><br>
Questo è possibile perché DynamoDB scala orizzontalmente in modo trasparente: AWS aggiunge partizioni automaticamente senza downtime. Non c'è nessun database relazionale che regge questi carichi alla stessa latenza.`,
  },

  /* ── LEZIONE: ElastiCache e Redshift ── */
  {
    type: 'lesson',
    emoji: '🚀',
    title: 'ElastiCache, Redshift e altri DB',
    text: `<strong>ElastiCache</strong> — cache in memoria managed per Redis o Memcached. Riduce il carico sul database principale memorizzando in cache le query più frequenti. Latenza in <em>microsecondi</em>.<br><br>
<strong>Amazon Redshift</strong> — data warehouse colonnare per analytics su petabyte di dati. Non è un database transazionale — ottimizzato per query analitiche complesse su enormi dataset.<br><br>
<strong>Neptune</strong> — database a grafo per relazioni complesse (social network, raccomandazioni).<br><br>
<strong>DMS (Database Migration Service)</strong> — migra database verso AWS (on-premises → RDS, Oracle → Aurora) con downtime minimo.`,
    analogy: `ElastiCache = post-it sul monitor con le risposte già pronte. Redshift = archivio storico di milioni di documenti con motore di ricerca avanzato. Neptune = mappa delle relazioni tra persone.`,
  },

  /* ── QUIZ: RDS vs DynamoDB ── */
  {
    type: 'quiz',
    q: "Un'app mobile deve salvare le sessioni di milioni di utenti con accesso in millisecondi e carico variabile. Quale database è più adatto?",
    opts: [
      'Amazon RDS MySQL — affidabile e SQL-compatibile',
      'Amazon DynamoDB — NoSQL serverless con scala automatica',
      'Amazon Redshift — per analytics ad alto volume',
      'Amazon ElastiCache — cache persistente',
    ],
    a: 1,
    explain: `✅ DynamoDB è ideale per sessioni utente: latenza costante in ms, scala automaticamente ai picchi, serverless (non gestisci capacity). RDS MySQL fa fatica a scala orizzontalmente sui picchi. Redshift è per analytics, non per dati transazionali. ElastiCache è volatile (non persistente di default) — utile sopra DynamoDB per caching ulteriore.`,
  },

  /* ── QUIZ: Multi-AZ ── */
  {
    type: 'quiz',
    q: "Cosa fornisce la funzionalità Multi-AZ di Amazon RDS?",
    opts: [
      'Maggiori prestazioni di lettura tramite repliche di lettura',
      'Riduzione dei costi grazie a hardware condiviso',
      'Failover automatico su un database standby in una AZ diversa',
      'Backup automatici su S3 in più regioni',
    ],
    a: 2,
    explain: `✅ Multi-AZ mantiene una replica sincrona standby in una AZ diversa. In caso di guasto, RDS promuove automaticamente la standby a primaria (failover in 1-2 minuti) senza intervento manuale. NON aumenta le prestazioni di lettura — per quello si usano le Read Replicas. I backup sono separati dalla funzionalità Multi-AZ.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Database',
    text: `<strong>RDS:</strong> SQL managed · MySQL/PostgreSQL/Aurora/Oracle/SQL Server · AWS gestisce OS e patching<br>
<strong>Multi-AZ:</strong> failover automatico (HA) · <strong>Read Replicas:</strong> performance lettura<br><br>
<strong>Aurora:</strong> 5x MySQL, 3x PostgreSQL · 128TB auto-scaling · 6 copie su 3 AZ · Aurora Serverless<br><br>
<strong>DynamoDB:</strong> NoSQL serverless · schemaless · ms latency · scala automatica · per sessioni/cataloghi/IoT<br><br>
<strong>ElastiCache:</strong> Redis/Memcached · cache in memoria · microsecondi<br><br>
<strong>Redshift:</strong> data warehouse · analytics su petabyte · non transazionale<br><br>
<strong>DMS:</strong> migrazione DB verso AWS con downtime minimo`,
    analogy: `RDS = ufficio organizzato. DynamoDB = post-it veloci. ElastiCache = lavagna sempre visibile. Redshift = archivio storico enorme. Aurora = versione premium di RDS.`,
  },

];
