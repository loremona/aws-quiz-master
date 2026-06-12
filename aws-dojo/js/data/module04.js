'use strict';
const MODULE04 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🗄️',
    title: 'S3 & Storage',
    text: `AWS offre più tipi di storage per casi d'uso diversi. Questo modulo copre:<br><br>
• <strong>Amazon S3</strong> — object storage, il servizio di storage più usato<br>
• <strong>EBS</strong> — disco virtuale per EC2<br>
• <strong>EFS</strong> — file system condiviso<br>
• <strong>Glacier</strong> — archivio a lungo termine<br>
• <strong>Snow Family</strong> — trasferimento dati fisico<br><br>
Le domande d'esame testano spesso la scelta giusta tra questi servizi.`,
    analogy: `S3 = deposito bagagli; EBS = disco fisso del laptop; EFS = cartella condivisa in ufficio; Glacier = magazzino sotterraneo per documenti che non apri mai.`,
  },

  /* ── LEZIONE: S3 ── */
  {
    type: 'lesson',
    emoji: '🪣',
    title: 'Amazon S3: Object Storage',
    text: `<strong>Amazon S3 (Simple Storage Service)</strong> è object storage: salvi file (<em>oggetti</em>) in contenitori (<em>bucket</em>).<br><br>
Caratteristiche chiave:<br>
• Ogni oggetto può pesare fino a <strong>5 TB</strong><br>
• I bucket hanno nomi <strong>globalmente unici</strong> (nessun altro utente AWS può usare lo stesso nome)<br>
• I bucket sono <strong>regionali</strong> ma accessibili globalmente<br>
• <strong>Durabilità: 99.999999999% (11 nines)</strong> — progettato per non perdere dati<br>
• URL pubbliche opzionali per hosting statico<br><br>
Usi tipici: backup, hosting siti statici, data lake, distribuzione di software.`,
    analogy: `Pensa a S3 come a Google Drive ma pensato per le applicazioni: metti dentro qualsiasi file, accedi via URL o API, senza preoccuparti dello spazio.`,
  },

  /* ── LEZIONE: S3 Storage Classes ── */
  {
    type: 'lesson',
    emoji: '📊',
    title: 'S3 Storage Classes: la trappola dell\'esame',
    text: `AWS offre più classi di storage S3 con diversi costi e tempi di accesso:<br><br>
<strong>S3 Standard</strong> — accesso frequente, latenza ms. La più costosa.<br>
<strong>S3 Standard-IA</strong> — accesso infrequente (<em>IA = Infrequent Access</em>), meno costosa ma paghi per ogni recupero.<br>
<strong>S3 One Zone-IA</strong> — come IA ma in una sola AZ → più economica, meno resiliente.<br>
<strong>S3 Intelligent-Tiering</strong> — sposta gli oggetti automaticamente tra classi in base agli accessi.<br>
<strong>S3 Glacier Instant</strong> — archivio, recupero in ms.<br>
<strong>S3 Glacier Flexible</strong> — recupero da minuti a ore.<br>
<strong>S3 Glacier Deep Archive</strong> — più economica, recupero in 12-48 ore.`,
    analogy: `Standard = frigo in cucina; Standard-IA = dispensa; One Zone-IA = dispensa in garage; Glacier = cantina; Deep Archive = scatoloni al piano di sopra di uno zio.`,
  },

  /* ── QUIZ: Storage Classes ── */
  {
    type: 'quiz',
    q: "Un'azienda deve archiviare log di audit che non vengono mai acceduti ma devono essere conservati per 7 anni per compliance. Quale classe S3 è più economica?",
    opts: [
      'S3 Standard — per la massima affidabilità',
      'S3 Standard-IA — per accesso infrequente',
      'S3 Glacier Deep Archive — per archivio a lungo termine',
      'S3 Intelligent-Tiering — si ottimizza automaticamente',
    ],
    a: 2,
    explain: `✅ S3 Glacier Deep Archive è la classe più economica, ideale per dati archiviati per anni senza necessità di accesso rapido (recupero in 12-48 ore). Standard e Standard-IA costano di più per storage a lungo termine. Intelligent-Tiering si ottimizza sui pattern di accesso ma ha un costo di monitoraggio mensile per oggetto.`,
  },

  /* ── LEZIONE: EBS ── */
  {
    type: 'lesson',
    emoji: '💾',
    title: 'EBS: il Disco della tua EC2',
    text: `<strong>EBS (Elastic Block Store)</strong> è il disco virtuale persistente che attacchi alle istanze EC2. Caratteristiche:<br><br>
• Persistente: i dati sopravvivono al riavvio (a differenza dell'Instance Store)<br>
• Attaccato a <strong>una sola EC2</strong> alla volta (con eccezione EBS Multi-Attach)<br>
• Nella <strong>stessa AZ</strong> dell'istanza<br>
• Puoi fare <strong>snapshot</strong> (backup) → copiare in un'altra AZ o regione<br><br>
Tipi principali:<br>
• <strong>gp3/gp2</strong> — General Purpose SSD (uso quotidiano)<br>
• <strong>io2/io1</strong> — Provisioned IOPS SSD (database ad alte prestazioni)<br>
• <strong>st1/sc1</strong> — HDD (big data, accesso sequenziale)`,
    analogy: `EBS è il disco fisso che colleghi al laptop via USB. Se formatti il laptop (termini la EC2), il disco esterno rimane e puoi attaccarlo a un altro laptop.`,
  },

  /* ── FUN FACT: S3 ── */
  {
    type: 'fact',
    emoji: '🌐',
    title: 'S3 ospita trilioni di oggetti',
    text: `Amazon S3 è entrato in produzione nel <strong>2006</strong> ed è il servizio AWS più longevo. Oggi ospita <strong>centinaia di trilioni di oggetti</strong> e serve richieste per miliardi di dollari di transazioni ogni anno.<br><br>
La <strong>durabilità dell'11 nines (99.999999999%)</strong> significa che se metti 10 milioni di oggetti su S3, potresti perdere statisticamente 1 oggetto ogni 10.000 anni.<br><br>
S3 è anche alla base di molti altri servizi AWS: Athena, EMR, SageMaker leggono direttamente da S3.`,
  },

  /* ── LEZIONE: EFS e altri storage ── */
  {
    type: 'lesson',
    emoji: '🗂️',
    title: 'EFS, Storage Gateway e Snow Family',
    text: `<strong>EFS (Elastic File System)</strong> — file system NFS condiviso tra più EC2 simultaneamente. Si espande automaticamente. Ideale per app che necessitano di un file system comune (CMS, container).<br><br>
<strong>AWS Storage Gateway</strong> — collega data center on-premises ad AWS. Estende lo storage locale su S3/Glacier senza migrare tutto.<br><br>
<strong>Snow Family</strong> — dispositivi fisici per trasferire grandi quantità di dati:<br>
• <em>Snowcone</em>: 8 TB, portatile<br>
• <em>Snowball Edge</em>: 80 TB, compute + storage<br>
• <em>Snowmobile</em>: camion con 100 PB — per migrazioni enormi`,
    analogy: `EFS = cartella condivisa di ufficio su rete locale. Storage Gateway = hard disk esterno collegato al cloud. Snowball = furgone blindato che trasporta fisicamente i tuoi dati ad AWS.`,
  },

  /* ── QUIZ: EBS vs EFS vs S3 ── */
  {
    type: 'quiz',
    q: "Dieci istanze EC2 devono accedere contemporaneamente agli stessi file di configurazione. Quale servizio di storage è più adatto?",
    opts: [
      'EBS — collegato direttamente a ogni istanza',
      'Instance Store — storage temporaneo locale',
      'EFS — file system condiviso tra più istanze',
      'S3 — object storage accessibile via API',
    ],
    a: 2,
    explain: `✅ EFS permette a più EC2 di montare lo stesso file system simultaneamente tramite NFS — ideale per file condivisi. EBS può essere collegato a una sola istanza alla volta (a meno di Multi-Attach con limitazioni). Instance Store è temporaneo e locale. S3 è valido ma richiede accesso via API HTTP, non come file system nativo.`,
  },

  /* ── QUIZ: Snow Family ── */
  {
    type: 'quiz',
    q: "Un'azienda deve migrare 50 TB di dati verso AWS ma la connessione internet è lenta (10 Mbps). Quale soluzione è più efficiente?",
    opts: [
      'Aumentare la banda internet e usare S3 Transfer Acceleration',
      'Usare AWS Snowball per trasferimento fisico dei dati',
      'Usare Direct Connect per una connessione dedicata',
      'Suddividere il trasferimento in parti e usare S3 multipart upload',
    ],
    a: 1,
    explain: `✅ Con 50 TB a 10 Mbps il trasferimento richiederebbe oltre 400 giorni. AWS Snowball è il dispositivo fisico che AWS ti spedisce, ci carichi i dati e lo rispedisci — trasferimento in giorni, non mesi. Direct Connect risolve il problema della banda ma richiede mesi per l'installazione. S3 Transfer Acceleration ottimizza il routing ma non supera i limiti fisici della connessione.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — S3 & Storage',
    text: `<strong>S3:</strong> object storage · bucket globalmente unici · regionale · 11 nines durabilità<br><br>
<strong>Storage Classes:</strong> Standard (frequente) → IA (infrequente) → Glacier Instant → Glacier Flexible → Deep Archive (archivio anni)<br><br>
<strong>EBS:</strong> disco persistente per EC2 · stessa AZ · una EC2 per volta · snapshot per backup<br><br>
<strong>EFS:</strong> file system condiviso NFS · più EC2 simultanee<br><br>
<strong>Snow Family:</strong> trasferimento fisico · Snowcone (8TB) · Snowball (80TB) · Snowmobile (100PB)<br><br>
<strong>Storage Gateway:</strong> collega on-premises ad S3/Glacier`,
    analogy: `S3 = Google Drive per le app. EBS = SSD del server. EFS = NAS condiviso. Glacier = cassaforte in cantina. Snowball = furgone blindato.`,
  },

];
