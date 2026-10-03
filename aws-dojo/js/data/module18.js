'use strict';
const MODULE18 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🧾',
    title: 'Costi Avanzati & Ecosistema di Supporto',
    text: `Completa il modulo Billing & Pricing con ciò che manca per l'esame:<br><br>
• Cosa si paga e cosa è <strong>gratis</strong> (trasferimento dati compreso)<br>
• Strumenti di costo avanzati: <strong>tag di allocazione, CUR, Cost Anomaly Detection, Compute Optimizer</strong><br>
• <strong>Trusted Advisor</strong> nel dettaglio<br>
• I <strong>5 piani di supporto</strong>, incluso Enterprise On-Ramp<br>
• Dove trovare aiuto: <strong>re:Post, Partner Network, Marketplace, Professional Services</strong>`,
    analogy: `Il modulo Billing ti ha insegnato a leggere la bolletta; questo ti insegna a ridurla e a sapere chi chiamare quando serve aiuto.`,
  },

  /* ── LEZIONE: cosa si paga ── */
  {
    type: 'lesson',
    emoji: '💸',
    title: 'Cosa si Paga (e Cosa No)',
    text: `I tre fattori di costo fondamentali:<br>
• <strong>Compute</strong> (tempo di esecuzione)<br>
• <strong>Storage</strong> (dati conservati)<br>
• <strong>Trasferimento dati in uscita</strong><br><br>
<strong>Trasferimento dati</strong>:<br>
• <strong>In entrata</strong> da internet verso AWS → <strong>gratis</strong><br>
• <strong>In uscita</strong> verso internet → a pagamento<br>
• Tra Availability Zone o tra Regioni → a pagamento<br>
• Nella stessa AZ con IP privati → gratis<br><br>
<strong>Servizi senza costo aggiuntivo</strong> (paghi solo le risorse che creano): IAM, VPC, Organizations, fatturazione consolidata, CloudFormation, Elastic Beanstalk, Auto Scaling.`,
    analogy: `AWS è come un hotel: entrare con le valigie è gratis, ma se vuoi spedire pacchi fuori paghi il corriere.`,
  },

  /* ── QUIZ: data transfer ── */
  {
    type: 'quiz',
    q: "Quale tipo di trasferimento dati è generalmente GRATUITO su AWS?",
    opts: [
      'Dati in uscita da Amazon EC2 verso internet',
      'Dati in entrata da internet verso AWS',
      'Dati trasferiti tra due Regioni AWS',
      'Dati trasferiti tra due Availability Zone',
    ],
    a: 1,
    explain: `✅ Il trasferimento in entrata (inbound) da internet verso AWS è gratuito. Si pagano invece i dati in uscita verso internet, tra Regioni e, in genere, tra Availability Zone diverse.`,
  },

  /* ── LEZIONE: strumenti di costo ── */
  {
    type: 'lesson',
    emoji: '🏷️',
    title: 'Strumenti di Costo Avanzati',
    text: `• <strong>Cost allocation tags</strong> — etichette (es. <em>Progetto=Web</em>) che, una volta <strong>attivate</strong> nella console Billing, permettono di dividere i costi per progetto, team o centro di costo<br>
• <strong>AWS Cost and Usage Report (CUR)</strong> — il report <strong>più dettagliato</strong> in assoluto (riga per riga, anche per ora), consegnato su S3 e analizzabile con Athena o QuickSight<br>
• <strong>Cost Anomaly Detection</strong> — usa il <strong>machine learning</strong> per segnalare spese anomale<br>
• <strong>AWS Compute Optimizer</strong> — consigli di <strong>rightsizing</strong> basati su ML per EC2, EBS, Lambda e ECS su Fargate<br>
• <strong>Cost Explorer</strong> — grafici, analisi storica e previsioni fino a 12 mesi, raccomandazioni per Savings Plans e Reserved Instances<br>
• <strong>AWS Budgets</strong> — soglie con avvisi e azioni automatiche<br>
• <strong>AWS Billing Conductor</strong> — personalizza la fatturazione (per rivenditori e chargeback)`,
    analogy: `I tag sono le etichette sui barattoli della dispensa: senza, non sai chi ha finito i biscotti. Il CUR è lo scontrino dettagliato di ogni singolo prodotto.`,
  },

  /* ── QUIZ: Compute Optimizer ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole sapere se le sue istanze EC2 sono sovradimensionate, con raccomandazioni basate sull'utilizzo reale. Quale servizio fornisce questi consigli di rightsizing?",
    opts: [
      'AWS Budgets',
      'AWS Compute Optimizer',
      'AWS Pricing Calculator',
      'AWS Cost and Usage Report',
    ],
    a: 1,
    explain: `✅ Compute Optimizer analizza le metriche di utilizzo con il machine learning e consiglia la dimensione ottimale per EC2, EBS, Lambda ed ECS. Budgets crea avvisi di spesa, Pricing Calculator stima costi futuri, il CUR fornisce dati di fatturazione dettagliati ma non raccomandazioni.`,
  },

  /* ── QUIZ: cost allocation tags ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole vedere nella fatturazione quanto spende ciascun reparto. Cosa deve fare?",
    opts: [
      'Creare un utente IAM per ogni reparto',
      'Applicare tag alle risorse e attivarli come cost allocation tags',
      'Acquistare un piano di supporto Business',
      'Abilitare AWS CloudTrail',
    ],
    a: 1,
    explain: `✅ Taggando le risorse (es. Reparto=Marketing) e attivando i tag come cost allocation tags, Cost Explorer e i report mostrano i costi divisi per reparto. Gli utenti IAM non dividono i costi delle risorse, il piano di supporto non c'entra, CloudTrail registra le chiamate API.`,
  },

  /* ── LEZIONE: Trusted Advisor ── */
  {
    type: 'lesson',
    emoji: '✅',
    title: 'Trusted Advisor nel Dettaglio',
    text: `<strong>AWS Trusted Advisor</strong> controlla il tuo account e consiglia miglioramenti in <strong>6 categorie</strong>:<br><br>
1. <strong>Cost Optimization</strong> — es. istanze inattive, volumi EBS non collegati<br>
2. <strong>Performance</strong> — es. istanze troppo utilizzate<br>
3. <strong>Security</strong> — es. porte aperte a tutti, MFA su root mancante, bucket S3 pubblici<br>
4. <strong>Fault Tolerance</strong> — es. snapshot EBS mancanti, una sola AZ<br>
5. <strong>Service Limits (Quotas)</strong> — risorse vicine ai limiti<br>
6. <strong>Operational Excellence</strong><br><br>
<strong>Basic e Developer</strong>: solo i controlli di sicurezza principali e le quote di servizio.<br>
<strong>Business, Enterprise On-Ramp, Enterprise</strong>: <strong>tutti</strong> i controlli e l'accesso via API.<br><br>
Semaforo: 🟢 ok · 🟡 da verificare · 🔴 azione consigliata.`,
    analogy: `Trusted Advisor è il consulente che fa il giro dell'ufficio e ti lascia un post-it rosso dove sprechi soldi o lasci la porta aperta.`,
  },

  /* ── LEZIONE: support plans 5 ── */
  {
    type: 'lesson',
    emoji: '🎧',
    title: 'I 5 Piani di Supporto e i Tempi di Risposta',
    text: `• <strong>Basic</strong> — gratuito: documentazione, re:Post, Health Dashboard, Trusted Advisor base<br>
• <strong>Developer</strong> — email in orario lavorativo; guida generale &lt; 24h, sistema compromesso &lt; 12h<br>
• <strong>Business</strong> — telefono/chat <strong>24/7</strong>; sistema di produzione compromesso &lt; 4h, <strong>produzione ferma &lt; 1h</strong><br>
• <strong>Enterprise On-Ramp</strong> — come Business, più sistema critico per il business fermo <strong>&lt; 30 min</strong>, un <strong>pool di TAM</strong> e il <strong>Concierge</strong> per la fatturazione<br>
• <strong>Enterprise</strong> — sistema critico fermo <strong>&lt; 15 min</strong>, <strong>TAM dedicato</strong>, Concierge, Infrastructure Event Management, revisioni Well-Architected<br><br>
Parole chiave: <em>TAM dedicato</em> → Enterprise · <em>pool di TAM / 30 min</em> → Enterprise On-Ramp · <em>24/7 al minor costo</em> → Business.`,
    analogy: `Basic = manuale. Developer = email. Business = numero verde 24/7. On-Ramp = team di consulenti condiviso. Enterprise = consulente personale.`,
  },

  /* ── QUIZ: On-Ramp ── */
  {
    type: 'quiz',
    q: "Quale piano di supporto è il più economico tra quelli che offrono un tempo di risposta di 30 minuti per i sistemi critici per il business e l'accesso a un pool di Technical Account Manager?",
    opts: [
      'Business',
      'Enterprise On-Ramp',
      'Enterprise',
      'Developer',
    ],
    a: 1,
    explain: `✅ Enterprise On-Ramp offre risposta entro 30 minuti per i sistemi critici fermi e un pool di TAM. Enterprise offre 15 minuti e un TAM dedicato, a un costo maggiore. Business arriva a 1 ora per produzione ferma e non include TAM. Developer non ha supporto 24/7.`,
  },

  /* ── LEZIONE: dove trovare aiuto ── */
  {
    type: 'lesson',
    emoji: '🤝',
    title: 'Dove Trovare Aiuto',
    text: `<strong>Risorse gratuite</strong>:<br>
• <strong>AWS re:Post</strong> — community di domande e risposte (ha sostituito i forum)<br>
• <strong>AWS Knowledge Center</strong> — risposte alle domande più frequenti<br>
• Documentazione, <strong>whitepaper</strong>, <strong>AWS Prescriptive Guidance</strong>, blog, AWS Skill Builder (formazione)<br><br>
<strong>Persone e aziende</strong>:<br>
• <strong>AWS Partner Network (APN)</strong> — aziende partner certificate: consulenza e servizi (es. migrazioni) o software<br>
• <strong>AWS Professional Services</strong> — team di esperti di AWS stessa, per grandi progetti<br>
• <strong>AWS Managed Services (AMS)</strong> — AWS gestisce le operazioni quotidiane della tua infrastruttura<br>
• <strong>Solutions Architect</strong> AWS — consigli di architettura<br>
• <strong>AWS IQ</strong> — trovare esperti freelance certificati AWS<br><br>
<strong>AWS Marketplace</strong> — catalogo di <strong>software di terze parti</strong> (AMI, SaaS, container, dati) pagato direttamente nella <strong>bolletta AWS</strong>.`,
    analogy: `re:Post = chiedere al forum dei vicini. Partner = chiamare un'impresa certificata. Professional Services = chiamare direttamente il costruttore. Marketplace = il centro commerciale dentro AWS.`,
  },

  /* ── QUIZ: Marketplace ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole acquistare un firewall di un produttore terzo, già pronto da avviare su AWS e pagato direttamente nella fattura AWS. Dove lo trova?",
    opts: [
      'AWS Artifact',
      'AWS Marketplace',
      'AWS Service Catalog',
      'AWS Partner Network',
    ],
    a: 1,
    explain: `✅ AWS Marketplace è il catalogo digitale di software di terze parti (AMI, SaaS, container) con fatturazione integrata nella bolletta AWS. Artifact fornisce report di conformità. Service Catalog contiene prodotti approvati internamente dall'azienda. APN è la rete di partner, non un negozio di software.`,
  },

  /* ── QUIZ: APN ── */
  {
    type: 'quiz',
    q: "Un'azienda senza competenze interne vuole affidare la migrazione su AWS a una società esterna con esperienza certificata. Quale risorsa AWS la aiuta a trovarla?",
    opts: [
      'AWS re:Post',
      'AWS Partner Network (APN)',
      'AWS Trusted Advisor',
      'AWS Knowledge Center',
    ],
    a: 1,
    explain: `✅ L'AWS Partner Network raccoglie aziende di consulenza e tecnologia validate da AWS, che si possono ingaggiare per migrazioni e progetti. re:Post e Knowledge Center offrono risposte e documentazione, non servizi. Trusted Advisor dà consigli automatici sull'account.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📉',
    title: 'Il risparmio più facile: spegnere',
    text: `Secondo molte analisi del settore, una parte significativa della spesa cloud va in risorse <strong>inattive o sovradimensionate</strong>: ambienti di test accesi la notte, volumi EBS scollegati, istanze troppo grandi.<br><br>
Per questo all'esame tornano sempre gli stessi strumenti: <strong>Trusted Advisor</strong> e <strong>Compute Optimizer</strong> per trovare gli sprechi, <strong>tag</strong> per capire di chi sono, <strong>Budgets</strong> per non avere sorprese.<br><br>
Spegnere ciò che non serve rientra sia in Cost Optimization sia in Sustainability.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Costi Avanzati & Supporto',
    text: `<strong>Si paga:</strong> compute · storage · dati in uscita · <strong>gratis:</strong> dati in entrata, IAM, VPC, Organizations, CloudFormation, Beanstalk, Auto Scaling (paghi le risorse)<br><br>
<strong>Strumenti:</strong> cost allocation tags (costi per progetto) · CUR (massimo dettaglio) · Cost Anomaly Detection (ML) · Compute Optimizer (rightsizing) · Cost Explorer (analisi e previsioni) · Budgets (avvisi)<br><br>
<strong>Trusted Advisor:</strong> Cost · Performance · Security · Fault Tolerance · Service Limits · Operational Excellence · completo da Business in su<br><br>
<strong>Supporto:</strong> Basic · Developer · Business (24/7, &lt;1h) · Enterprise On-Ramp (&lt;30 min, pool di TAM) · Enterprise (&lt;15 min, TAM dedicato)<br><br>
<strong>Aiuto:</strong> re:Post · Knowledge Center · APN (partner) · Professional Services · AMS · IQ · Marketplace (software di terzi in bolletta)`,
    analogy: `Trova gli sprechi, etichettali, metti un budget, e se serve aiuto sai chi chiamare.`,
  },

];
