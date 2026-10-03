'use strict';
const MODULE15 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🛡️',
    title: 'Identità & Sicurezza Avanzata',
    text: `La sicurezza è il dominio più pesante dell'esame (<strong>30%</strong>). Questo modulo completa i moduli IAM e Security:<br><br>
• Le operazioni riservate all'<strong>utente root</strong><br>
• Identità per dipendenti e clienti: <strong>IAM Identity Center, Cognito, Directory Service</strong><br>
• Strumenti di analisi IAM: <strong>Access Analyzer, Credential Report</strong><br>
• Rilevamento e conformità: <strong>Security Hub, Detective, Artifact, Audit Manager</strong><br>
• Rete e cifratura: <strong>Network Firewall, Firewall Manager, ACM, CloudHSM</strong><br>
• Le regole sui <strong>penetration test</strong> e gli abusi`,
    analogy: `Se IAM è il badge per entrare in ufficio, questo modulo è tutto il resto della sicurezza: telecamere, registro visitatori, cassaforte e ispezioni.`,
  },

  /* ── LEZIONE: root user ── */
  {
    type: 'lesson',
    emoji: '👑',
    title: "Le Operazioni Riservate all'Utente Root",
    text: `L'<strong>utente root</strong> è l'email usata per creare l'account. Ha accesso totale e <strong>non si può limitare</strong> con le policy IAM.<br><br>
Operazioni che <strong>solo root</strong> può fare:<br>
• Cambiare nome account, email, password di root e le sue chiavi<br>
• <strong>Chiudere</strong> l'account AWS<br>
• <strong>Cambiare o annullare il piano di supporto</strong><br>
• Ripristinare i permessi di un amministratore IAM bloccato<br>
• Registrarsi come venditore nel <strong>Reserved Instance Marketplace</strong><br>
• Configurare l'<strong>MFA Delete</strong> su un bucket S3<br>
• Modificare una bucket policy S3 che nega l'accesso a tutti<br><br>
Best practice: <strong>MFA</strong> su root, <strong>nessuna access key</strong> per root, usarlo solo per queste operazioni e lavorare ogni giorno con utenti o ruoli IAM.`,
    analogy: `L'utente root è la chiave master dell'albergo: la tieni in cassaforte e la usi solo per le emergenze, mai per aprire la tua stanza ogni giorno.`,
  },

  /* ── QUIZ: root ── */
  {
    type: 'quiz',
    q: "Quale di queste operazioni può essere eseguita SOLO dall'utente root dell'account AWS?",
    opts: [
      'Creare un nuovo utente IAM',
      'Avviare un\'istanza EC2',
      'Cambiare il piano di AWS Support',
      'Creare un bucket S3',
    ],
    a: 2,
    explain: `✅ Cambiare o annullare il piano di supporto è un'operazione riservata a root, come chiudere l'account o cambiare l'email dell'account. Creare utenti IAM, avviare EC2 e creare bucket S3 si possono fare con utenti IAM con i permessi giusti.`,
  },

  /* ── LEZIONE: identità ── */
  {
    type: 'lesson',
    emoji: '🪪',
    title: 'Identità: Dipendenti vs Clienti',
    text: `<strong>Per i dipendenti (workforce)</strong>:<br>
• <strong>IAM Identity Center</strong> (ex AWS SSO) — <strong>single sign-on</strong> su più account AWS di un'Organization e su app aziendali, con un solo login<br>
• <strong>AWS Directory Service</strong> — Microsoft <strong>Active Directory</strong> managed su AWS, o collegamento all'AD esistente<br>
• <strong>Federazione SAML 2.0</strong> — usare le credenziali aziendali esistenti per accedere ad AWS<br><br>
<strong>Per i clienti delle tue app (web e mobile)</strong>:<br>
• <strong>Amazon Cognito</strong> — registrazione e login degli utenti, anche con <strong>Google, Facebook, Apple</strong> (social login); milioni di utenti<br><br>
<strong>Credenziali temporanee</strong>: <strong>AWS STS</strong> (Security Token Service) le genera quando si assume un ruolo IAM.`,
    analogy: `Identity Center = il badge unico per tutti gli edifici dell'azienda. Cognito = la registrazione clienti sul sito di un negozio online.`,
  },

  /* ── QUIZ: Cognito ── */
  {
    type: 'quiz',
    q: "Un'app mobile deve permettere ai propri utenti di registrarsi e accedere con il loro account Google o Facebook. Quale servizio AWS usare?",
    opts: [
      'AWS IAM Identity Center',
      'Amazon Cognito',
      'AWS Directory Service',
      'Utenti IAM',
    ],
    a: 1,
    explain: `✅ Cognito gestisce identità e login per gli utenti finali di app web e mobile, con supporto al social login. IAM Identity Center è per l'accesso dei dipendenti agli account AWS. Directory Service è Active Directory managed. Gli utenti IAM sono per chi amministra AWS, non per i clienti di un'app.`,
  },

  /* ── LEZIONE: strumenti IAM ── */
  {
    type: 'lesson',
    emoji: '🔍',
    title: 'Analizzare i Permessi IAM',
    text: `• <strong>IAM Credential Report</strong> — report a livello di <strong>account</strong> con tutti gli utenti e lo stato delle loro credenziali (password, access key, MFA, ultima rotazione)<br>
• <strong>IAM Access Advisor</strong> — a livello di <strong>utente</strong>: quali servizi può usare e quando li ha usati l'ultima volta (per togliere permessi inutili)<br>
• <strong>IAM Access Analyzer</strong> — trova le risorse (bucket S3, ruoli, chiavi KMS…) <strong>condivise con l'esterno</strong> dell'account o dell'organizzazione, valida le policy e segnala gli accessi inutilizzati<br>
• <strong>IAM Policy Simulator</strong> — testa cosa permette una policy prima di applicarla<br><br>
<strong>Service Control Policies (SCP)</strong> in AWS Organizations: limitano il <em>massimo</em> dei permessi di interi account, anche per root degli account membri.`,
    analogy: `Credential Report = l'elenco delle chiavi di tutto il condominio. Access Advisor = il registro di quali porte ha aperto ogni inquilino. Access Analyzer = l'allarme che scatta se una porta dà sulla strada.`,
  },

  /* ── LEZIONE: rilevamento e conformità ── */
  {
    type: 'lesson',
    emoji: '🚨',
    title: 'Rilevamento, Indagine e Conformità',
    text: `• <strong>AWS Security Hub</strong> — <strong>cruscotto centrale</strong> della sicurezza: raccoglie i finding di GuardDuty, Inspector, Macie e altri, e controlla gli account rispetto a standard (CIS, AWS Foundational Best Practices)<br>
• <strong>Amazon Detective</strong> — <strong>indaga</strong> la causa di un problema di sicurezza analizzando log e relazioni tra risorse<br>
• <strong>GuardDuty</strong> rileva le minacce · <strong>Inspector</strong> scansiona le vulnerabilità · <strong>Macie</strong> trova dati sensibili in S3<br><br>
<strong>Conformità</strong>:<br>
• <strong>AWS Artifact</strong> — scarica i <strong>report di conformità</strong> di AWS (SOC, PCI DSS, ISO) e accetta accordi (es. BAA per HIPAA)<br>
• <strong>AWS Audit Manager</strong> — raccoglie automaticamente le <strong>prove</strong> per i tuoi audit<br>
• <strong>AWS Config</strong> — verifica nel tempo la conformità della configurazione delle risorse`,
    analogy: `GuardDuty = l'allarme che suona. Security Hub = la centrale di vigilanza che vede tutti gli allarmi. Detective = l'investigatore che ricostruisce come è entrato il ladro.`,
  },

  /* ── QUIZ: Detective ── */
  {
    type: 'quiz',
    q: "GuardDuty ha segnalato attività sospette su un'istanza EC2. Il team di sicurezza vuole analizzare la causa e ricostruire cosa è successo. Quale servizio usare?",
    opts: [
      'Amazon Inspector',
      'Amazon Detective',
      'AWS Artifact',
      'Amazon Macie',
    ],
    a: 1,
    explain: `✅ Detective serve a indagare e trovare la causa di problemi di sicurezza, partendo anche dai finding di GuardDuty. Inspector cerca vulnerabilità software, Artifact fornisce report di conformità, Macie trova dati sensibili in S3.`,
  },

  /* ── QUIZ: Artifact ── */
  {
    type: 'quiz',
    q: "Un auditor chiede il report PCI DSS che attesta la conformità dell'infrastruttura AWS. Dove si ottiene?",
    opts: [
      'AWS Artifact',
      'AWS Audit Manager',
      'AWS Security Hub',
      'AWS Trusted Advisor',
    ],
    a: 0,
    explain: `✅ AWS Artifact è il portale self-service per scaricare i report di conformità di AWS (SOC, PCI, ISO…) e gestire gli accordi. Audit Manager raccoglie le prove sui TUOI workload. Security Hub controlla la postura di sicurezza dei tuoi account. Trusted Advisor dà raccomandazioni di best practice.`,
  },

  /* ── LEZIONE: rete e cifratura ── */
  {
    type: 'lesson',
    emoji: '🔐',
    title: 'Firewall, Certificati e Chiavi',
    text: `<strong>Rete</strong>:<br>
• <strong>AWS Network Firewall</strong> — firewall managed a livello di <strong>VPC</strong>, con ispezione del traffico<br>
• <strong>AWS Firewall Manager</strong> — gestisce <strong>centralmente</strong> le regole di WAF, Shield Advanced, Security Group e Network Firewall su <strong>tutti gli account</strong> dell'Organization<br>
• <strong>Shield Advanced</strong> — protezione DDoS evoluta con Shield Response Team 24/7 e protezione dai costi dovuti agli attacchi<br><br>
<strong>Cifratura</strong>:<br>
• <strong>In transito</strong> → TLS. <strong>AWS Certificate Manager (ACM)</strong> fornisce certificati SSL/TLS pubblici <strong>gratuiti</strong> con rinnovo automatico (per ELB, CloudFront, API Gateway)<br>
• <strong>A riposo</strong> → <strong>KMS</strong> (chiavi managed, multi-tenant) oppure <strong>CloudHSM</strong> (hardware dedicato <strong>solo tuo</strong>, chiavi gestite interamente dal cliente, FIPS 140 livello 3)<br>
• <strong>Secrets Manager</strong> — password e chiavi API con rotazione automatica`,
    analogy: `KMS = cassetta di sicurezza in banca (la banca gestisce il caveau). CloudHSM = cassaforte privata a casa tua, di cui solo tu hai la combinazione.`,
  },

  /* ── QUIZ: CloudHSM ── */
  {
    type: 'quiz',
    q: "Per motivi normativi un'azienda deve gestire le chiavi di cifratura su moduli hardware dedicati e a uso esclusivo. Quale servizio soddisfa il requisito?",
    opts: [
      'AWS KMS con chiavi gestite da AWS',
      'AWS CloudHSM',
      'AWS Secrets Manager',
      'AWS Certificate Manager',
    ],
    a: 1,
    explain: `✅ CloudHSM fornisce Hardware Security Module dedicati a un solo cliente, che controlla interamente le chiavi. KMS è un servizio managed su hardware condiviso. Secrets Manager conserva segreti come le password. ACM gestisce certificati TLS.`,
  },

  /* ── LEZIONE: pentest e abusi ── */
  {
    type: 'lesson',
    emoji: '🧪',
    title: 'Penetration Test e Abusi',
    text: `<strong>Penetration test</strong>: si possono fare <strong>senza chiedere approvazione</strong> ad AWS sulle proprie risorse di molti servizi (EC2, RDS, Aurora, CloudFront, API Gateway, Lambda, Lightsail, Elastic Beanstalk…).<br><br>
<strong>Vietato</strong>:<br>
• Simulare attacchi <strong>DoS/DDoS</strong> (serve una policy apposita e un fornitore approvato)<br>
• Flooding di porte, protocolli o richieste<br>
• DNS zone walking sulle zone ospitate di Route 53<br><br>
<strong>AWS Trust & Safety</strong>: il team a cui segnalare <strong>abusi provenienti da risorse AWS</strong> (spam, port scanning, attacchi DoS, malware, contenuti illegali) tramite il modulo apposito o l'email abuse.<br><br>
Ricorda: la conformità dei <strong>tuoi</strong> workload resta una responsabilità tua (Shared Responsibility).`,
    analogy: `Puoi controllare che le serrature di casa tua reggano, ma non puoi far esplodere il palazzo per vedere se crolla.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🏰',
    title: 'Data center che nessuno può visitare',
    text: `AWS non rende pubblici gli indirizzi dei suoi data center e <strong>non permette visite</strong> dei clienti, nemmeno dei più grandi.<br><br>
La sicurezza fisica (guardie, telecamere, controlli biometrici, distruzione dei dischi a fine vita) è tutta "<strong>security OF the cloud</strong>": la responsabilità è di AWS.<br><br>
Per verificarla, i clienti si affidano agli <strong>audit indipendenti</strong> scaricabili da <strong>AWS Artifact</strong>.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Identità & Sicurezza Avanzata',
    text: `<strong>Solo root:</strong> chiudere l'account · cambiare piano di supporto · cambiare email/nome account · RI Marketplace seller · MFA Delete su S3<br><br>
<strong>Identità:</strong> Identity Center (SSO dipendenti, multi-account) · Cognito (clienti app, social login) · Directory Service (Active Directory) · STS (credenziali temporanee)<br><br>
<strong>IAM:</strong> Credential Report (account) · Access Advisor (utente) · Access Analyzer (accessi esterni) · SCP (limiti per account)<br><br>
<strong>Rilevamento:</strong> GuardDuty (minacce) · Inspector (vulnerabilità) · Macie (dati sensibili) · Security Hub (cruscotto) · Detective (indagine)<br>
<strong>Conformità:</strong> Artifact (report AWS) · Audit Manager (prove per i tuoi audit) · Config<br><br>
<strong>Rete/cifratura:</strong> Network Firewall (VPC) · Firewall Manager (multi-account) · ACM (TLS gratis) · KMS vs CloudHSM (dedicato)<br>
<strong>Pentest:</strong> sì sulle tue risorse, no DoS · abusi → Trust & Safety`,
    analogy: `Allarme (GuardDuty) → centrale (Security Hub) → investigatore (Detective) → certificati del palazzo (Artifact).`,
  },

];
