'use strict';
const MODULE11 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '📈',
    title: 'Analytics & AI/ML',
    text: `AWS offre servizi per analizzare dati e integrare l'intelligenza artificiale senza essere data scientist.<br><br>
Questo modulo copre:<br>
• <strong>Athena</strong> — query SQL su S3<br>
• <strong>Kinesis</strong> — streaming dati in real-time<br>
• <strong>Glue</strong> — ETL serverless<br>
• <strong>QuickSight</strong> — dashboard BI<br>
• <strong>SageMaker</strong> — ML end-to-end<br>
• <strong>Rekognition, Comprehend, Polly, Transcribe, Lex, Bedrock</strong> — AI pre-addestrata<br><br>
Per il CLF-C02 basta sapere <em>cosa fa</em> ogni servizio, non come implementarlo.`,
    analogy: `Analytics = trovare pattern nei dati. AI/ML = insegnare al computer a fare cose che prima richiedevano un umano.`,
  },

  /* ── LEZIONE: Athena e Kinesis ── */
  {
    type: 'lesson',
    emoji: '🔍',
    title: 'Athena e Kinesis',
    text: `<strong>Amazon Athena</strong> — query SQL interattive direttamente su file in S3 (CSV, JSON, Parquet…) senza caricare i dati in un database. Serverless, paghi per TB scansionato.<br>
Uso tipico: analisi log, query one-off su data lake.<br><br>
<strong>Amazon Kinesis</strong> — piattaforma per elaborare flussi di dati in <strong>real-time</strong>.<br>
• <em>Kinesis Data Streams</em>: ingestione dati in tempo reale<br>
• <em>Kinesis Data Firehose</em>: carica dati su S3/Redshift/OpenSearch automaticamente<br>
• <em>Kinesis Data Analytics</em>: query SQL su flussi live<br><br>
Uso tipico: log applicativi in real-time, click-stream, dati IoT.`,
    analogy: `Athena = investigatore che legge gli archivi polverosi (S3) senza spostare i documenti. Kinesis = nastro trasportatore che porta dati freschi dall'impianto all'analista in tempo reale.`,
  },

  /* ── LEZIONE: Glue, Redshift, QuickSight ── */
  {
    type: 'lesson',
    emoji: '🔄',
    title: 'Glue, Redshift e QuickSight',
    text: `<strong>AWS Glue</strong> — servizio ETL (Extract, Transform, Load) serverless. Scopre automaticamente lo schema dei dati (<em>Glue Crawler</em>), li trasforma e li carica nella destinazione (S3, Redshift).<br><br>
<strong>Amazon Redshift</strong> — data warehouse colonnare per analytics su petabyte. Ottimizzato per query analitiche complesse su enormi volumi storici. Non è un DB transazionale.<br><br>
<strong>Amazon QuickSight</strong> — strumento BI (Business Intelligence) serverless per creare dashboard e visualizzazioni interattive dai dati AWS.<br><br>
Il pipeline tipico: dati grezzi → S3 → Glue ETL → Redshift → QuickSight dashboard.`,
    analogy: `Glue = cuoco che prepara e pulisce gli ingredienti. Redshift = magazzino enorme ottimizzato per trovare qualsiasi cosa in secondi. QuickSight = grafico sul muro che mostra i KPI al management.`,
  },

  /* ── QUIZ: scegliere il servizio analytics ── */
  {
    type: 'quiz',
    q: "Un team vuole eseguire query SQL su file di log CSV archiviati in S3, senza caricarli su un database. Quale servizio usare?",
    opts: [
      'Amazon Redshift — data warehouse per analytics',
      'Amazon RDS — database relazionale managed',
      'Amazon Athena — query SQL serverless direttamente su S3',
      'AWS Glue — per trasformare i dati prima della query',
    ],
    a: 2,
    explain: `✅ Athena è il servizio giusto: query SQL direttamente su S3, serverless, paghi per TB scansionato. Non devi spostare i dati. Redshift richiede di caricare i dati nel data warehouse. RDS è per applicazioni transazionali. Glue è per trasformazione/ETL dei dati, non per query interattive.`,
  },

  /* ── LEZIONE: SageMaker ── */
  {
    type: 'lesson',
    emoji: '🧠',
    title: 'Amazon SageMaker: ML End-to-End',
    text: `<strong>Amazon SageMaker</strong> è la piattaforma ML completa di AWS. Copre tutto il ciclo di vita di un modello:<br><br>
• <strong>Build</strong> — notebook Jupyter managed, dati da S3<br>
• <strong>Train</strong> — addestramento distribuito su cluster gestiti<br>
• <strong>Deploy</strong> — endpoint REST per inferenza in produzione<br>
• <strong>Monitor</strong> — rileva drift del modello nel tempo<br><br>
SageMaker è per chi vuole costruire modelli custom. Se invece vuoi usare AI già pronta senza costruire niente → usa i servizi AI pre-addestrati.`,
    analogy: `SageMaker è la cucina professionale completa: ingredienti (dati), ricette (algoritmi), forno (training), ristorante (deploy). I servizi AI pre-addestrati sono il take-away: già pronto, apri e mangi.`,
  },

  /* ── LEZIONE: servizi AI pre-addestrati ── */
  {
    type: 'lesson',
    emoji: '🤖',
    title: 'I Servizi AI di AWS: la Mappa',
    text: `Servizi AI pronti all'uso — nessun training richiesto:<br><br>
• <strong>Rekognition</strong> — analisi immagini e video: riconosce oggetti, volti, testo, moderazione contenuti<br>
• <strong>Comprehend</strong> — NLP: sentiment analysis, entità, linguaggio, topic modeling<br>
• <strong>Polly</strong> — text-to-speech: trasforma testo in voce realistica<br>
• <strong>Transcribe</strong> — speech-to-text: trascrive audio in testo<br>
• <strong>Lex</strong> — chatbot conversazionale (la stessa tecnologia di Alexa)<br>
• <strong>Translate</strong> — traduzione automatica<br>
• <strong>Textract</strong> — estrae testo e dati da documenti scansionati (PDF, immagini)<br>
• <strong>Bedrock</strong> — modelli generativi (LLM) di vari provider via API`,
    analogy: `Rekognition = occhi. Comprehend = cervello che legge. Polly = voce. Transcribe = orecchie. Lex = bocca che risponde. Bedrock = il grande cervello generativo.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🎯',
    title: 'Alexa gira su Amazon Lex e Polly',
    text: `<strong>Amazon Lex</strong> (comprensione del linguaggio) e <strong>Amazon Polly</strong> (sintesi vocale) sono le stesse tecnologie che alimentano <strong>Alexa</strong>.<br><br>
AWS ha aperto queste tecnologie agli sviluppatori: puoi costruire il tuo assistente vocale o chatbot con gli stessi building block di Alexa, senza addestrare nulla da zero.<br><br>
<strong>Amazon Bedrock</strong> (lanciato nel 2023) porta i grandi modelli generativi (Claude di Anthropic, Llama di Meta, Titan di AWS) disponibili via API — l'equivalente di SageMaker ma per i modelli fondazionali.`,
  },

  /* ── QUIZ: servizi AI ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole analizzare automaticamente le recensioni dei clienti per capire il sentiment (positivo/negativo) senza addestrare un modello. Quale servizio AWS usare?",
    opts: [
      'Amazon SageMaker — per addestrare un modello NLP custom',
      'Amazon Rekognition — per analisi di immagini e testo',
      'Amazon Comprehend — NLP pre-addestrato con sentiment analysis',
      'Amazon Transcribe — per convertire audio in testo',
    ],
    a: 2,
    explain: `✅ Comprehend offre sentiment analysis pre-addestrata pronta all'uso: chiami l'API con il testo e ricevi il sentiment (POSITIVE/NEGATIVE/NEUTRAL/MIXED) senza addestrare nulla. SageMaker è per modelli custom (overkill qui). Rekognition analizza immagini e testo nelle immagini, non testo scritto. Transcribe converte audio in testo — utile se le recensioni fossero vocali, ma non fa sentiment.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Analytics & AI/ML',
    text: `<strong>Athena:</strong> SQL su S3, serverless, paghi per scan<br>
<strong>Kinesis:</strong> streaming real-time (Streams → Firehose → Analytics)<br>
<strong>Glue:</strong> ETL serverless, Crawler per schema discovery<br>
<strong>Redshift:</strong> data warehouse colonnare, analytics su PB<br>
<strong>QuickSight:</strong> dashboard BI serverless<br><br>
<strong>SageMaker:</strong> ML end-to-end (build/train/deploy/monitor)<br><br>
<strong>AI pre-addestrata:</strong><br>
Rekognition (immagini) · Comprehend (NLP/sentiment) · Polly (testo→voce)<br>
Transcribe (voce→testo) · Lex (chatbot) · Translate · Textract (documenti) · Bedrock (LLM)`,
    analogy: `Athena = SQL su archivio. Kinesis = nastro real-time. Glue = preparazione dati. Redshift = magazzino gigante. QuickSight = grafici management. SageMaker = cucina ML. Bedrock = grande chef AI.`,
  },

];
