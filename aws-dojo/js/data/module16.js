'use strict';
const MODULE16 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🛠️',
    title: 'Strumenti, DevOps & Governance',
    text: `<em>Come</em> si lavora su AWS, e come si tengono in ordine decine di account.<br><br>
Questo modulo copre:<br>
• I modi per usare AWS: <strong>Console, CLI, SDK, CloudShell, IaC</strong><br>
• Gestire le risorse: <strong>Systems Manager</strong><br>
• DevOps: <strong>CodePipeline, CodeBuild, CodeDeploy, X-Ray</strong><br>
• Governance multi-account: <strong>Organizations, Control Tower, Service Catalog</strong><br>
• Restare informati: <strong>AWS Health Dashboard</strong>`,
    analogy: `Gli altri moduli sono gli attrezzi; questo è il modo di usarli e l'organizzazione dell'officina.`,
  },

  /* ── LEZIONE: accesso ── */
  {
    type: 'lesson',
    emoji: '⌨️',
    title: 'I Modi per Usare AWS',
    text: `Ogni azione su AWS è una <strong>chiamata API</strong>. Cambia solo il modo di farla:<br><br>
• <strong>AWS Management Console</strong> — interfaccia web, login con password (+ MFA)<br>
• <strong>AWS CLI</strong> — comandi da terminale e script; usa le <strong>access key</strong><br>
• <strong>AWS SDK</strong> — librerie per i linguaggi di programmazione (Python/boto3, Java, JavaScript, Go…), per chiamare AWS dal codice delle applicazioni<br>
• <strong>AWS CloudShell</strong> — terminale nel browser, già autenticato e con la CLI installata, <strong>gratuito</strong><br>
• <strong>Infrastructure as Code</strong> — <strong>CloudFormation</strong> (template YAML/JSON) e <strong>AWS CDK</strong> (infrastruttura scritta in TypeScript, Python, Java…, che genera CloudFormation)<br><br>
Accesso programmatico (CLI/SDK) → <strong>access key ID + secret access key</strong>.`,
    analogy: `Console = parlare allo sportello. CLI = mandare un modulo compilato. SDK = un'app che compila i moduli per te. CloudFormation = la ricetta che si ripete identica ogni volta.`,
  },

  /* ── QUIZ: SDK / CLI ── */
  {
    type: 'quiz',
    q: "Uno sviluppatore vuole che la sua applicazione Python carichi file su Amazon S3 direttamente dal codice. Cosa deve usare?",
    opts: [
      'AWS Management Console',
      'AWS SDK per Python (boto3)',
      'AWS CloudShell',
      'AWS Systems Manager',
    ],
    a: 1,
    explain: `✅ Gli SDK permettono di chiamare le API AWS dal codice delle applicazioni. La Console è un'interfaccia web per persone. CloudShell è un terminale nel browser per comandi manuali o script. Systems Manager gestisce le istanze, non è una libreria di programmazione.`,
  },

  /* ── LEZIONE: Systems Manager ── */
  {
    type: 'lesson',
    emoji: '🎛️',
    title: 'AWS Systems Manager',
    text: `<strong>Systems Manager</strong> gestisce flotte di server <strong>EC2 e on-premises</strong> da un unico punto:<br><br>
• <strong>Session Manager</strong> — shell sicura sulle istanze <strong>senza SSH</strong>, senza porte aperte né chiavi, con log delle sessioni<br>
• <strong>Patch Manager</strong> — applica automaticamente le patch del sistema operativo<br>
• <strong>Run Command</strong> — esegue comandi su molte istanze insieme<br>
• <strong>Parameter Store</strong> — conserva configurazioni e segreti<br>
• <strong>Inventory</strong> — elenco del software installato<br><br>
Serve l'<strong>SSM Agent</strong> sull'istanza (preinstallato su molte AMI).<br><br>
<strong>Elastic Beanstalk</strong> (PaaS): carichi il codice e AWS crea e gestisce EC2, load balancer e Auto Scaling.`,
    analogy: `Systems Manager è il telecomando universale: accendi, aggiorni e controlli cento TV senza alzarti dal divano.`,
  },

  /* ── LEZIONE: DevOps ── */
  {
    type: 'lesson',
    emoji: '🔁',
    title: 'DevOps: la Pipeline CI/CD',
    text: `I servizi "Code" coprono il ciclo di vita del software:<br><br>
• <strong>CodeCommit</strong> — repository Git privato (chiuso ai nuovi clienti dal 2024)<br>
• <strong>CodeBuild</strong> — <strong>compila e testa</strong> il codice<br>
• <strong>CodeDeploy</strong> — <strong>distribuisce</strong> su EC2, on-premises, Lambda o ECS<br>
• <strong>CodePipeline</strong> — <strong>orchestra</strong> tutto il flusso CI/CD (sorgente → build → test → deploy)<br>
• <strong>CodeArtifact</strong> — repository di pacchetti (npm, Maven, pip)<br><br>
• <strong>AWS X-Ray</strong> — <strong>traccia le richieste</strong> attraverso microservizi distribuiti per trovare colli di bottiglia ed errori<br>
• <strong>Amazon Q Developer</strong> — assistente di programmazione con AI generativa`,
    analogy: `CodePipeline è la catena di montaggio: CodeBuild assembla e collauda il pezzo, CodeDeploy lo consegna al cliente. X-Ray è la radiografia che mostra dove si blocca la richiesta.`,
  },

  /* ── QUIZ: X-Ray ── */
  {
    type: 'quiz',
    q: "Un'applicazione a microservizi risponde lentamente e il team non sa quale servizio causi il ritardo. Quale servizio aiuta a individuarlo?",
    opts: [
      'AWS CloudTrail',
      'AWS X-Ray',
      'AWS Config',
      'AWS CodeDeploy',
    ],
    a: 1,
    explain: `✅ X-Ray traccia ogni richiesta attraverso i vari servizi e mostra dove si accumula la latenza o dove avvengono gli errori. CloudTrail registra le chiamate API (chi ha fatto cosa). Config registra le configurazioni. CodeDeploy distribuisce il codice.`,
  },

  /* ── QUIZ: CodePipeline ── */
  {
    type: 'quiz',
    q: "Quale servizio automatizza l'intero processo di rilascio, dal commit del codice fino al deploy in produzione?",
    opts: [
      'AWS CodeBuild',
      'AWS CodePipeline',
      'AWS CodeArtifact',
      'AWS CloudShell',
    ],
    a: 1,
    explain: `✅ CodePipeline è il servizio di continuous delivery che orchestra le fasi sorgente, build, test e deploy. CodeBuild esegue solo compilazione e test. CodeArtifact conserva pacchetti software. CloudShell è un terminale nel browser.`,
  },

  /* ── LEZIONE: governance ── */
  {
    type: 'lesson',
    emoji: '🏢',
    title: 'Governance Multi-Account',
    text: `• <strong>AWS Organizations</strong> — raggruppa gli account in <strong>Organizational Unit (OU)</strong>, applica le <strong>SCP</strong> e offre la <strong>fatturazione consolidata</strong><br>
• <strong>AWS Control Tower</strong> — crea in pochi clic una <strong>landing zone</strong> multi-account secondo le best practice, con <strong>controlli (guardrail)</strong> preventivi e di rilevamento e l'<em>Account Factory</em> per nuovi account<br>
• <strong>AWS Service Catalog</strong> — catalogo di prodotti IT <strong>approvati</strong> (template CloudFormation) che gli utenti possono avviare in autonomia<br>
• <strong>AWS Resource Access Manager (RAM)</strong> — condivide risorse (es. subnet, Transit Gateway) tra account<br>
• <strong>AWS License Manager</strong> — gestisce le licenze software (Microsoft, Oracle…)<br>
• <strong>Tag e Resource Groups</strong> — organizzano le risorse per progetto, ambiente o centro di costo`,
    analogy: `Organizations = la holding con le sue società. Control Tower = l'impresa che costruisce la sede seguendo le norme. Service Catalog = il menu fisso della mensa aziendale: scegli solo tra piatti approvati.`,
  },

  /* ── QUIZ: Control Tower ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole configurare rapidamente un ambiente con molti account AWS, già conforme alle best practice e con guardrail di sicurezza. Quale servizio è più adatto?",
    opts: [
      'AWS Control Tower',
      'AWS Service Catalog',
      'AWS Systems Manager',
      'AWS Config',
    ],
    a: 0,
    explain: `✅ Control Tower crea e governa una landing zone multi-account con guardrail predefiniti, basandosi su Organizations. Service Catalog offre prodotti approvati ma non configura l'ambiente multi-account. Systems Manager gestisce i server. Config valuta le configurazioni ma non crea gli account.`,
  },

  /* ── LEZIONE: Health Dashboard ── */
  {
    type: 'lesson',
    emoji: '🩺',
    title: 'AWS Health Dashboard',
    text: `<strong>AWS Health Dashboard</strong> ti informa sugli eventi AWS:<br><br>
• <strong>Vista pubblica</strong> (ex Service Health Dashboard) — lo stato <strong>generale</strong> di tutti i servizi in tutte le Regioni<br>
• <strong>Vista del tuo account</strong> (ex Personal Health Dashboard) — eventi che riguardano <strong>le tue risorse</strong>: manutenzioni programmate, problemi in corso, istanze da ritirare, con indicazioni su cosa fare<br><br>
Si integra con <strong>EventBridge</strong> per ricevere notifiche automatiche.<br><br>
Non confonderlo con:<br>
• <strong>CloudWatch</strong> — metriche delle <em>tue</em> applicazioni<br>
• <strong>Trusted Advisor</strong> — consigli di best practice`,
    analogy: `La vista pubblica è il notiziario del traffico per tutta la città; la vista dell'account è l'avviso che i lavori bloccano proprio la tua strada domani mattina.`,
  },

  /* ── QUIZ: Health ── */
  {
    type: 'quiz',
    q: "Un amministratore vuole sapere se una manutenzione programmata da AWS colpirà le istanze EC2 del suo account. Dove trova questa informazione?",
    opts: [
      'Amazon CloudWatch',
      'AWS Health Dashboard (vista dell\'account)',
      'AWS Trusted Advisor',
      'AWS CloudTrail',
    ],
    a: 1,
    explain: `✅ La vista dell'account di AWS Health Dashboard mostra gli eventi e le manutenzioni che riguardano le tue risorse specifiche. CloudWatch monitora metriche e log, Trusted Advisor dà consigli di ottimizzazione, CloudTrail registra le chiamate API.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📡',
    title: 'Tutto è una chiamata API',
    text: `Anche quando clicchi un pulsante nella Console, dietro c'è una <strong>chiamata API</strong>: è lo stesso meccanismo usato da CLI, SDK e CloudFormation.<br><br>
Per questo <strong>AWS CloudTrail</strong> può registrare <strong>ogni azione</strong> nell'account, chiunque la faccia e in qualunque modo.<br><br>
Il principio nasce da un memo interno di Amazon dei primi anni 2000: tutti i team dovevano comunicare <strong>solo tramite API</strong>. È una delle radici di AWS.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Strumenti & Governance',
    text: `<strong>Accesso:</strong> Console (web) · CLI (terminale, access key) · SDK (codice) · CloudShell (terminale nel browser, gratis) · CloudFormation / CDK (IaC)<br><br>
<strong>Systems Manager:</strong> Session Manager (niente SSH) · Patch Manager · Run Command · Parameter Store<br><br>
<strong>DevOps:</strong> CodeBuild (build/test) · CodeDeploy (deploy) · CodePipeline (orchestrazione CI/CD) · CodeArtifact (pacchetti) · X-Ray (tracciamento microservizi)<br><br>
<strong>Governance:</strong> Organizations (OU, SCP, fatturazione consolidata) · Control Tower (landing zone + guardrail) · Service Catalog (prodotti approvati) · RAM (condivisione) · License Manager<br><br>
<strong>Health Dashboard:</strong> stato dei servizi AWS + eventi sulle TUE risorse`,
    analogy: `Console, CLI e SDK sono tre porte diverse sulla stessa stanza: le API.`,
  },

];
