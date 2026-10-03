'use strict';
const MODULE17 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🧭',
    title: 'Mappa dei Servizi da Riconoscere',
    text: `All'esame compaiono molti servizi che basta <strong>riconoscere</strong>: non serve sapere come si configurano, ma <em>a cosa servono</em>.<br><br>
Questo modulo è una mappa rapida, divisa per area:<br>
• Compute e desktop<br>
• Storage e backup<br>
• Database specializzati<br>
• Networking avanzato<br>
• App, frontend e comunicazione con i clienti<br>
• Analytics, IoT e AI aggiuntivi<br><br>
Trucco: impara la <strong>parola chiave</strong> associata a ogni servizio.`,
    analogy: `È come imparare i cartelli stradali: non devi sapere come sono costruiti, solo riconoscerli al volo.`,
  },

  /* ── LEZIONE: compute ── */
  {
    type: 'lesson',
    emoji: '🖥️',
    title: 'Compute e Desktop',
    text: `• <strong>Amazon Lightsail</strong> — server virtuali <strong>semplici</strong> a <strong>prezzo mensile fisso</strong> (VPS), per siti web e piccole app; ideale per chi ha poca esperienza di cloud<br>
• <strong>AWS Batch</strong> — esegue <strong>job batch</strong> su larga scala (anche migliaia) gestendo automaticamente le risorse<br>
• <strong>AWS App Runner</strong> — pubblica web app containerizzate senza gestire l'infrastruttura<br>
• <strong>Elastic Beanstalk</strong> — PaaS: carichi il codice, AWS gestisce il resto<br>
• <strong>Amazon WorkSpaces</strong> — <strong>desktop virtuali</strong> Windows/Linux nel cloud (DaaS)<br>
• <strong>Amazon AppStream 2.0</strong> — <strong>streaming di singole applicazioni</strong> desktop nel browser<br>
• <strong>EC2 Image Builder</strong> — crea e aggiorna automaticamente le AMI`,
    analogy: `Lightsail = monolocale arredato con affitto fisso. EC2 = terreno su cui costruisci quello che vuoi. WorkSpaces = un PC intero in affitto, raggiungibile da ovunque.`,
  },

  /* ── QUIZ: Lightsail ── */
  {
    type: 'quiz',
    q: "Una piccola impresa senza esperienza di cloud vuole pubblicare un sito WordPress con un costo mensile prevedibile e una configurazione semplice. Quale servizio è più adatto?",
    opts: [
      'Amazon EC2 con Auto Scaling',
      'Amazon Lightsail',
      'AWS Batch',
      'Amazon EKS',
    ],
    a: 1,
    explain: `✅ Lightsail offre server virtuali preconfigurati (anche con WordPress) a prezzo mensile fisso, pensati per la semplicità. EC2 con Auto Scaling richiede più competenze. Batch è per job di elaborazione in serie. EKS è Kubernetes, molto più complesso.`,
  },

  /* ── LEZIONE: storage ── */
  {
    type: 'lesson',
    emoji: '💾',
    title: 'Storage e Backup',
    text: `• <strong>Amazon FSx</strong> — file system managed di terze parti:<br>
&nbsp;&nbsp;– <strong>FSx for Windows File Server</strong> (SMB, Active Directory)<br>
&nbsp;&nbsp;– <strong>FSx for Lustre</strong> (calcolo ad alte prestazioni, <strong>HPC</strong> e ML)<br>
&nbsp;&nbsp;– FSx for NetApp ONTAP e FSx for OpenZFS<br>
• <strong>AWS Backup</strong> — gestione <strong>centralizzata</strong> dei backup di EC2, EBS, RDS, DynamoDB, EFS e altri, con piani e policy<br>
• <strong>Storage Gateway</strong> — ponte tra on-premises e AWS: <em>File Gateway</em> (file su S3), <em>Volume Gateway</em> (dischi iSCSI), <em>Tape Gateway</em> (nastri virtuali per i backup)<br>
• <strong>AWS Elastic Disaster Recovery</strong> — replica continua dei server per ripartire su AWS in pochi minuti<br><br>
Ripasso: <strong>EBS</strong> = blocchi per una EC2 · <strong>EFS</strong> = file condivisi Linux · <strong>S3</strong> = oggetti.`,
    analogy: `EFS è la cartella condivisa per PC Linux; FSx for Windows è quella per l'ufficio Windows; FSx for Lustre è la pista da Formula 1 dei file system.`,
  },

  /* ── LEZIONE: database ── */
  {
    type: 'lesson',
    emoji: '🗂️',
    title: 'Database Specializzati',
    text: `AWS propone il database <strong>giusto per ogni uso</strong> (<em>purpose-built</em>):<br><br>
• <strong>Amazon DocumentDB</strong> — documenti JSON, compatibile con <strong>MongoDB</strong><br>
• <strong>Amazon Neptune</strong> — database a <strong>grafo</strong> (social network, raccomandazioni, rilevamento frodi)<br>
• <strong>Amazon Keyspaces</strong> — compatibile con <strong>Apache Cassandra</strong><br>
• <strong>Amazon Timestream</strong> — <strong>serie temporali</strong> (IoT, metriche)<br>
• <strong>Amazon MemoryDB</strong> — database in memoria compatibile con Redis, durevole<br>
• <strong>Amazon ElastiCache</strong> — <strong>cache</strong> in memoria (Redis/Memcached) per velocizzare le letture<br>
• <strong>Amazon OpenSearch Service</strong> — <strong>ricerca</strong> testuale e analisi dei log<br>
• <strong>Amazon QLDB</strong> — registro immutabile (ledger), in dismissione dal 2025<br><br>
Ripasso: <strong>RDS/Aurora</strong> = relazionale · <strong>DynamoDB</strong> = chiave-valore serverless · <strong>Redshift</strong> = data warehouse.`,
    analogy: `Non usi un martello per tutto: grafo per le relazioni tra persone, serie temporali per i sensori, documenti per i cataloghi prodotti.`,
  },

  /* ── QUIZ: Neptune ── */
  {
    type: 'quiz',
    q: "Un social network deve memorizzare e interrogare le relazioni di amicizia tra milioni di utenti per suggerire nuovi contatti. Quale database è più adatto?",
    opts: [
      'Amazon Neptune',
      'Amazon Timestream',
      'Amazon Redshift',
      'Amazon DocumentDB',
    ],
    a: 0,
    explain: `✅ Neptune è un database a grafo, ottimizzato per relazioni molto connesse come le reti sociali e le raccomandazioni. Timestream è per serie temporali, Redshift è un data warehouse analitico, DocumentDB memorizza documenti JSON.`,
  },

  /* ── LEZIONE: networking ── */
  {
    type: 'lesson',
    emoji: '🛰️',
    title: 'Networking Avanzato',
    text: `• <strong>AWS Global Accelerator</strong> — fornisce <strong>IP statici anycast</strong> e instrada il traffico (TCP/UDP) sulla rete globale AWS fino all'endpoint più vicino e sano. <em>Non</em> fa cache, a differenza di CloudFront<br>
• <strong>Amazon API Gateway</strong> — crea, pubblica e protegge <strong>API</strong> REST e WebSocket (spesso davanti a Lambda)<br>
• <strong>VPC Endpoint / AWS PrivateLink</strong> — raggiungere servizi AWS (es. S3, DynamoDB) o di terzi <strong>senza passare da internet</strong><br>
• <strong>AWS Transit Gateway</strong> — <strong>hub centrale</strong> per collegare molte VPC e reti on-premises (invece di tanti peering)<br>
• <strong>VPC Peering</strong> — collegamento privato tra <strong>due</strong> VPC<br>
• <strong>AWS Client VPN</strong> — accesso remoto sicuro dei singoli utenti alla VPC<br>
• <strong>Elastic Load Balancer</strong>: ALB (HTTP, livello 7) · NLB (TCP/UDP, livello 4, altissime prestazioni) · Gateway LB (appliance di sicurezza)`,
    analogy: `Transit Gateway è l'aeroporto hub: invece di voli diretti tra ogni coppia di città (peering), tutti passano dal centro.`,
  },

  /* ── QUIZ: Global Accelerator ── */
  {
    type: 'quiz',
    q: "Un'applicazione di gioco online basata su UDP serve utenti in tutto il mondo e ha bisogno di indirizzi IP statici e di migliori prestazioni di rete. Quale servizio usare?",
    opts: [
      'Amazon CloudFront',
      'AWS Global Accelerator',
      'Amazon Route 53',
      'AWS Direct Connect',
    ],
    a: 1,
    explain: `✅ Global Accelerator fornisce due IP statici anycast e porta il traffico TCP/UDP sulla rete globale AWS, migliorando latenza e disponibilità. CloudFront è una CDN per contenuti HTTP con cache. Route 53 è DNS. Direct Connect collega un data center ad AWS.`,
  },

  /* ── LEZIONE: app e clienti ── */
  {
    type: 'lesson',
    emoji: '📱',
    title: 'App, Frontend e Clienti',
    text: `• <strong>AWS Amplify</strong> — sviluppo e hosting di app <strong>web e mobile full-stack</strong><br>
• <strong>AWS AppSync</strong> — API <strong>GraphQL</strong> managed<br>
• <strong>Amazon Connect</strong> — <strong>contact center</strong> (call center) nel cloud<br>
• <strong>Amazon SES</strong> (Simple Email Service) — invio di <strong>email</strong> in massa (transazionali e marketing)<br>
• <strong>Amazon SNS</strong> — notifiche push, SMS ed email da applicazioni<br>
• <strong>Amazon MQ</strong> — broker di messaggi managed (ActiveMQ, RabbitMQ), utile per migrare app esistenti che già li usano<br><br>
<strong>IoT</strong>:<br>
• <strong>AWS IoT Core</strong> — collega miliardi di dispositivi al cloud<br>
• <strong>AWS IoT Greengrass</strong> — esegue codice ed elaborazione direttamente sui dispositivi edge`,
    analogy: `Connect = il centralino del servizio clienti. SES = l'ufficio postale per le email. IoT Core = la centrale che ascolta tutti i sensori.`,
  },

  /* ── LEZIONE: analytics e AI extra ── */
  {
    type: 'lesson',
    emoji: '🧠',
    title: 'Analytics e AI: gli Altri Servizi',
    text: `<strong>Analytics</strong> (oltre ad Athena, Kinesis, Glue, Redshift, QuickSight):<br>
• <strong>Amazon EMR</strong> — big data con <strong>Hadoop e Spark</strong><br>
• <strong>Amazon MSK</strong> — <strong>Apache Kafka</strong> managed<br>
• <strong>AWS Lake Formation</strong> — costruire e proteggere un <strong>data lake</strong><br>
• <strong>AWS Data Exchange</strong> — trovare e acquistare dati di terze parti<br><br>
<strong>AI</strong> (oltre a SageMaker, Rekognition, Comprehend, Polly, Transcribe, Lex, Bedrock):<br>
• <strong>Amazon Q</strong> — assistente di <strong>AI generativa</strong> per aziende (Q Business) e sviluppatori (Q Developer)<br>
• <strong>Amazon Textract</strong> — estrae testo e dati da <strong>documenti scansionati</strong> e moduli<br>
• <strong>Amazon Translate</strong> — <strong>traduzione</strong> automatica<br>
• <strong>Amazon Kendra</strong> — <strong>ricerca intelligente</strong> nei documenti aziendali<br>
• <strong>Amazon Personalize</strong> — <strong>raccomandazioni personalizzate</strong> (come su Amazon.com)`,
    analogy: `Textract legge i moduli, Translate li traduce, Comprehend capisce di cosa parlano, Polly li legge ad alta voce.`,
  },

  /* ── QUIZ: Textract ── */
  {
    type: 'quiz',
    q: "Un'assicurazione riceve migliaia di moduli cartacei scansionati e vuole estrarne automaticamente testo, campi e tabelle. Quale servizio usare?",
    opts: [
      'Amazon Comprehend',
      'Amazon Textract',
      'Amazon Rekognition',
      'Amazon Kendra',
    ],
    a: 1,
    explain: `✅ Textract estrae testo, coppie chiave-valore e tabelle dai documenti scansionati. Comprehend analizza il significato di un testo già digitale (sentiment, entità). Rekognition analizza immagini e video (volti, oggetti). Kendra è un motore di ricerca sui documenti.`,
  },

  /* ── QUIZ: Connect / SES ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole creare un call center nel cloud per il servizio clienti, senza installare centralini fisici. Quale servizio AWS usare?",
    opts: [
      'Amazon SES',
      'Amazon SNS',
      'Amazon Connect',
      'Amazon Lex',
    ],
    a: 2,
    explain: `✅ Amazon Connect è un contact center omnicanale nel cloud. SES invia email, SNS invia notifiche e SMS, Lex crea chatbot (che possono integrarsi con Connect, ma non sono il call center).`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🔢',
    title: 'Oltre 200 servizi',
    text: `AWS offre <strong>oltre 200 servizi</strong> completi, e ogni anno ne aggiunge di nuovi e ne ritira alcuni (come Snowmobile, Cloud9 e CodeCommit, chiusi ai nuovi clienti nel 2024).<br><br>
L'esame CLF-C02 non chiede di conoscerli tutti a fondo: elenca nella guida ufficiale i servizi <strong>in scope</strong>, e per molti basta sapere <strong>a cosa servono</strong>.<br><br>
Per questo funziona l'associazione "parola chiave → servizio".`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Mappa dei Servizi',
    text: `<strong>Compute:</strong> Lightsail (VPS a prezzo fisso) · Batch (job batch) · App Runner · WorkSpaces (desktop virtuali) · AppStream 2.0 (streaming app)<br><br>
<strong>Storage:</strong> FSx (Windows / Lustre HPC) · AWS Backup (backup centralizzati) · Storage Gateway (ibrido) · Elastic Disaster Recovery<br><br>
<strong>Database:</strong> DocumentDB (MongoDB) · Neptune (grafo) · Keyspaces (Cassandra) · Timestream (serie temporali) · ElastiCache (cache) · OpenSearch (ricerca)<br><br>
<strong>Rete:</strong> Global Accelerator (IP statici, TCP/UDP) · API Gateway (API) · PrivateLink (privato) · Transit Gateway (hub)<br><br>
<strong>App:</strong> Amplify (web/mobile) · AppSync (GraphQL) · Connect (call center) · SES (email) · MQ · IoT Core<br><br>
<strong>Analytics/AI:</strong> EMR (Spark) · MSK (Kafka) · Lake Formation · Q (AI generativa) · Textract (documenti) · Translate · Kendra (ricerca) · Personalize (raccomandazioni)`,
    analogy: `Una parola chiave per servizio: è tutto ciò che serve per riconoscerli all'esame.`,
  },

];
