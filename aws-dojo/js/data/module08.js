'use strict';
const MODULE08 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '📨',
    title: 'Messaging & Integration',
    text: `I servizi di messaggistica AWS permettono ai componenti di un'applicazione di comunicare in modo <strong>disaccoppiato</strong> — senza che si conoscano o dipendano l'uno dall'altro.<br><br>
Questo modulo copre:<br>
• <strong>SQS</strong> — coda di messaggi (disaccoppiamento asincrono)<br>
• <strong>SNS</strong> — notifiche pub/sub a molti destinatari<br>
• <strong>EventBridge</strong> — bus eventi serverless<br>
• <strong>Step Functions</strong> — orchestrazione di workflow<br><br>
Domanda chiave dell'esame: <em>SQS vs SNS — quale usare quando?</em>`,
    analogy: `SQS = cassetta delle lettere (uno lascia, uno raccoglie quando può). SNS = altoparlante (uno parla, tutti ascoltano in contemporanea).`,
  },

  /* ── LEZIONE: SQS ── */
  {
    type: 'lesson',
    emoji: '📬',
    title: 'Amazon SQS: Code di Messaggi',
    text: `<strong>SQS (Simple Queue Service)</strong> è una coda di messaggi managed che disaccoppia i componenti di un'applicazione.<br><br>
Come funziona:<br>
• Il <em>producer</em> mette messaggi in coda<br>
• Il <em>consumer</em> li legge quando è pronto<br>
• Il messaggio viene eliminato dopo la lettura<br><br>
Caratteristiche chiave:<br>
• <strong>Standard Queue</strong>: ordine approssimativo, consegna almeno 1 volta (possibili duplicati)<br>
• <strong>FIFO Queue</strong>: ordine garantito, esattamente 1 volta<br>
• I messaggi restano in coda fino a <strong>14 giorni</strong> se non vengono letti<br>
• <strong>Dead Letter Queue (DLQ)</strong>: messaggi non elaborabili vanno qui per ispezione`,
    analogy: `SQS è la mail aziendale: scrivi l'email (messaggio), la metti nella casella del collega (coda), lui la legge quando ha tempo. Non devi aspettarlo online.`,
  },

  /* ── LEZIONE: SNS ── */
  {
    type: 'lesson',
    emoji: '📢',
    title: 'Amazon SNS: Notifiche Pub/Sub',
    text: `<strong>SNS (Simple Notification Service)</strong> distribuisce messaggi a <strong>molti destinatari contemporaneamente</strong> usando il modello publish/subscribe.<br><br>
Come funziona:<br>
• Un <em>publisher</em> invia un messaggio a un <strong>topic</strong><br>
• Tutti i <em>subscriber</em> del topic ricevono il messaggio istantaneamente<br><br>
I subscriber possono essere: Lambda, SQS, email, SMS, HTTP endpoint<br><br>
<strong>SNS + SQS Fan-out</strong> — pattern classico: SNS distribuisce a più code SQS → ogni sistema elabora indipendentemente.<br><br>
Differenza chiave:<br>
• SQS = 1 consumer legge 1 messaggio (pull)<br>
• SNS = N subscriber ricevono lo stesso messaggio (push)`,
    analogy: `SNS è WhatsApp broadcast: pubblichi una volta, arriva a tutti i contatti del gruppo contemporaneamente. SQS è un messaggio privato che aspetta che il destinatario lo apra.`,
  },

  /* ── QUIZ: SQS vs SNS ── */
  {
    type: 'quiz',
    q: "Un'applicazione deve inviare notifiche email agli amministratori E scrivere su una coda per elaborazione asincrona ogni volta che avviene un evento critico. Quale architettura è corretta?",
    opts: [
      'SQS con due consumer separati per email e coda',
      'SNS topic con subscriber: Lambda per email + SQS per elaborazione asincrona',
      'Due Lambda separate che monitorano lo stesso evento',
      'EventBridge con un solo target',
    ],
    a: 1,
    explain: `✅ SNS è perfetto per il fan-out: pubblica una volta sul topic, i subscriber (Lambda per email + SQS per elaborazione) ricevono il messaggio simultaneamente. SQS standard non fa broadcast — un messaggio viene letto da un solo consumer. Due Lambda separati creare logica duplicata. EventBridge con un target non copre entrambi i casi.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📊',
    title: 'SQS esiste dal 2004 — prima di EC2',
    text: `<strong>Amazon SQS</strong> è stato il <strong>primo servizio AWS</strong> pubblicamente disponibile, lanciato nel <strong>2004</strong> — due anni prima di EC2 e S3.<br><br>
Oggi SQS gestisce <strong>trilioni di messaggi all'anno</strong>. I pattern di disaccoppiamento con SQS e SNS sono alla base delle architetture a microservizi: se un componente si rompe, i messaggi restano in coda e vengono elaborati quando il componente torna online.<br><br>
Questo è il concetto di <strong>resilienza tramite disaccoppiamento</strong> — un pilastro del Well-Architected Framework.`,
  },

  /* ── LEZIONE: EventBridge e Step Functions ── */
  {
    type: 'lesson',
    emoji: '🔄',
    title: 'EventBridge e Step Functions',
    text: `<strong>Amazon EventBridge</strong> — bus eventi serverless. Riceve eventi da servizi AWS, app SaaS (Salesforce, Zendesk) e app custom, e li instrada verso target (Lambda, SQS, SNS…) in base a regole.<br>
Differenza da SNS: EventBridge filtra e trasforma gli eventi, è più potente per integrazioni complesse.<br><br>
<strong>AWS Step Functions</strong> — orchestratore di workflow visuale. Coordina Lambda e altri servizi in sequenza con gestione di errori, retry e branch logici.<br>
Usa Step Functions quando hai flussi complessi (es. processo di ordine: verifica pagamento → aggiorna inventario → spedizione → notifica).`,
    analogy: `EventBridge = centralino intelligente che smista le chiamate in base al contenuto. Step Functions = diagramma di flusso che si esegue da solo, con gestione degli imprevisti.`,
  },

  /* ── QUIZ: SQS FIFO vs Standard ── */
  {
    type: 'quiz',
    q: "Un sistema di pagamenti deve elaborare le transazioni esattamente una volta e nell'ordine in cui arrivano. Quale tipo di coda SQS è necessario?",
    opts: [
      'SQS Standard — alta throughput, ordine approssimativo',
      'SQS FIFO — ordine garantito, elaborazione esattamente una volta',
      'Amazon SNS — per la consegna garantita',
      'SQS con Dead Letter Queue — per evitare duplicati',
    ],
    a: 1,
    explain: `✅ SQS FIFO garantisce: ordine FIFO (First-In-First-Out) e consegna esattamente una volta (no duplicati). Obbligatorio per transazioni finanziarie. SQS Standard ha ordine approssimativo e può consegnare duplicati — inaccettabile per pagamenti. SNS non è una coda. La DLQ gestisce i messaggi non elaborabili, non i duplicati.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Messaging & Integration',
    text: `<strong>SQS:</strong> coda messaggi · 1 consumer per messaggio · Standard (ordine approssimativo) vs FIFO (ordine garantito, no duplicati) · DLQ per messaggi falliti<br><br>
<strong>SNS:</strong> pub/sub · 1 publisher → N subscriber · push immediato · subscriber: Lambda, SQS, email, SMS<br><br>
<strong>Fan-out pattern:</strong> SNS → più code SQS (ogni sistema elabora indipendentemente)<br><br>
<strong>EventBridge:</strong> bus eventi · filtra e trasforma · integra servizi SaaS esterni<br><br>
<strong>Step Functions:</strong> orchestrazione workflow · sequenza Lambda + retry + branch<br><br>
<strong>Scelta:</strong> ordine/no duplicati → SQS FIFO · broadcast → SNS · workflow complessi → Step Functions`,
    analogy: `SQS = cassetta postale. SNS = altoparlante broadcast. EventBridge = centralino intelligente. Step Functions = diagramma di flusso automatico.`,
  },

];
