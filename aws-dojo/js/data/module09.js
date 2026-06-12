'use strict';
const MODULE09 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '📊',
    title: 'Monitoring & Management',
    text: `Questo modulo copre gli strumenti per <strong>osservare, controllare e automatizzare</strong> l'infrastruttura AWS:<br><br>
• <strong>CloudWatch</strong> — metriche, allarmi, log<br>
• <strong>CloudTrail</strong> — audit di tutte le azioni sull'account<br>
• <strong>AWS Config</strong> — compliance e configurazioni nel tempo<br>
• <strong>CloudFormation</strong> — Infrastructure as Code<br>
• <strong>Systems Manager</strong> — gestione operativa<br>
• <strong>AWS Organizations</strong> — gestione multi-account<br><br>
L'esame distingue spesso CloudWatch, CloudTrail e Config — impara le differenze.`,
    analogy: `CloudWatch = quadro strumenti dell'auto (velocità, temperatura). CloudTrail = scatola nera (registra tutto). Config = revisione periodica del meccanico (tutto a norma?).`,
  },

  /* ── LEZIONE: CloudWatch ── */
  {
    type: 'lesson',
    emoji: '📈',
    title: 'Amazon CloudWatch: Metriche e Allarmi',
    text: `<strong>Amazon CloudWatch</strong> raccoglie e monitora metriche, log e eventi dai servizi AWS.<br><br>
Componenti principali:<br>
• <strong>Metrics</strong> — dati numerici nel tempo (CPU usage, NetworkIn, RequestCount…). Ogni servizio AWS pubblica automaticamente le proprie metriche.<br>
• <strong>Alarms</strong> — scatta quando una metrica supera una soglia. Azioni: notifica SNS, Auto Scaling, EC2 reboot.<br>
• <strong>Logs</strong> — raccoglie log da EC2, Lambda, ECS. Ricercabili e filtrabili.<br>
• <strong>Dashboards</strong> — visualizzazione custom delle metriche.<br><br>
<strong>CloudWatch Agent</strong> — installa sulle EC2 per metriche custom (RAM, disco) non raccolte di default.`,
    analogy: `CloudWatch è il cardiologo della tua infrastruttura: monitora il battito (CPU), alza il campanello se va troppo in alto (alarm), e conserva l'elettrocardiogramma storico (logs).`,
  },

  /* ── LEZIONE: CloudTrail ── */
  {
    type: 'lesson',
    emoji: '🔍',
    title: 'AWS CloudTrail: la Scatola Nera',
    text: `<strong>AWS CloudTrail</strong> registra ogni <strong>chiamata API</strong> effettuata sull'account AWS — chi ha fatto cosa, quando e da dove.<br><br>
Cosa registra:<br>
• Azioni dalla console AWS (click nella UI)<br>
• Chiamate SDK/CLI<br>
• Azioni di altri servizi AWS<br><br>
Uso tipico: <strong>audit di sicurezza</strong>, forensica dopo un incidente, compliance.<br><br>
Differenza chiave con CloudWatch:<br>
• CloudWatch = <em>"cosa sta succedendo ora?"</em> (performance, metriche)<br>
• CloudTrail = <em>"chi ha fatto cosa?"</em> (azioni, API call)<br><br>
I log CloudTrail vengono salvati su <strong>S3</strong> e possono essere analizzati con Athena.`,
    analogy: `CloudTrail è la videocamera di sicurezza del tuo account AWS: registra ogni ingresso, ogni azione, chi ha aperto quale porta e quando. Se sparisce qualcosa, guardi i filmati.`,
  },

  /* ── QUIZ: CloudWatch vs CloudTrail vs Config ── */
  {
    type: 'quiz',
    q: "Un amministratore vuole scoprire chi ha eliminato un bucket S3 ieri pomeriggio. Quale servizio AWS fornisce queste informazioni?",
    opts: [
      'Amazon CloudWatch — per monitorare le metriche S3',
      'AWS CloudTrail — che registra tutte le chiamate API inclusa DeleteBucket',
      'AWS Config — per la cronologia delle configurazioni S3',
      'Amazon GuardDuty — per rilevare attività sospette',
    ],
    a: 1,
    explain: `✅ CloudTrail registra ogni chiamata API sull'account, inclusa DeleteBucket, con timestamp, identità dell'utente e IP sorgente. È lo strumento corretto per rispondere a "chi ha fatto cosa?". CloudWatch monitora metriche e performance. Config traccia le modifiche alla configurazione delle risorse. GuardDuty rileva minacce ma non registra le API call in dettaglio.`,
  },

  /* ── LEZIONE: AWS Config ── */
  {
    type: 'lesson',
    emoji: '✅',
    title: 'AWS Config: Compliance Continua',
    text: `<strong>AWS Config</strong> monitora e registra la <strong>configurazione delle risorse AWS</strong> nel tempo, verificando la compliance rispetto a regole definite.<br><br>
Esempio di regole Config:<br>
• "Tutti i bucket S3 devono avere la cifratura abilitata"<br>
• "Nessuna Security Group deve permettere accesso SSH da 0.0.0.0/0"<br>
• "Tutte le EC2 devono avere un IAM role associato"<br><br>
Se una risorsa viola una regola, Config la segnala come <strong>NON COMPLIANT</strong>.<br><br>
Differenza con CloudTrail: Config risponde a <em>"come è configurata la risorsa adesso e nel passato?"</em>, non a "chi ha fatto l'azione?".`,
    analogy: `Config è l'ispettore edilizio che gira periodicamente a controllare che tutto sia a norma: "questo bucket ha la porta blindata (cifratura)? No? NON COMPLIANT."`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🏗️',
    title: 'CloudFormation: 1 file YAML = intera infrastruttura',
    text: `Con <strong>AWS CloudFormation</strong> puoi descrivere tutta la tua infrastruttura (VPC, EC2, RDS, Lambda, IAM…) in un file YAML o JSON chiamato <strong>template</strong>.<br><br>
CloudFormation esegue il template e crea tutte le risorse nell'ordine corretto, gestendo le dipendenze automaticamente. Se qualcosa fallisce, fa il rollback.<br><br>
Vantaggi dell'Infrastructure as Code:<br>
• <strong>Ripetibile</strong>: stesso ambiente in dev, staging e prod<br>
• <strong>Versionabile</strong>: il template va su Git<br>
• <strong>Documentazione vivente</strong>: il codice descrive l'infrastruttura`,
  },

  /* ── LEZIONE: Organizations e Trusted Advisor ── */
  {
    type: 'lesson',
    emoji: '🏢',
    title: 'AWS Organizations e Trusted Advisor',
    text: `<strong>AWS Organizations</strong> — gestisce più account AWS da un account centrale (<em>management account</em>).<br>
• <strong>Consolidated Billing</strong>: una sola fattura per tutti gli account<br>
• <strong>SCP (Service Control Policies)</strong>: limita cosa possono fare gli account figlio<br>
• Permette di organizzare account in <em>Organizational Unit (OU)</em><br><br>
<strong>AWS Trusted Advisor</strong> — strumento che analizza il tuo account e dà raccomandazioni su 5 aree:<br>
1. Cost Optimization<br>
2. Performance<br>
3. Security<br>
4. Fault Tolerance<br>
5. Service Limits<br><br>
Con il piano <strong>Business/Enterprise Support</strong> sblocchi tutti i check; con Basic/Developer solo i check base di sicurezza e limiti.`,
    analogy: `Organizations = holding aziendale con filiali. Trusted Advisor = consulente che gira per l'azienda e ti dice "stai sprecando soldi qui, hai questa vulnerabilità lì".`,
  },

  /* ── QUIZ: CloudFormation ── */
  {
    type: 'quiz',
    q: "Un team deve deployare lo stesso ambiente (VPC + EC2 + RDS) in 3 regioni AWS diverse, in modo ripetibile e consistente. Quale servizio è più adatto?",
    opts: [
      'AWS Config — per monitorare la compliance delle risorse',
      'AWS CloudTrail — per registrare le azioni di deployment',
      'AWS CloudFormation — template IaC ripetibile in qualsiasi regione',
      'AWS Systems Manager — per la gestione operativa delle risorse',
    ],
    a: 2,
    explain: `✅ CloudFormation permette di definire l'intera infrastruttura come codice (template YAML/JSON) e deployarla identica in qualsiasi regione con un click. Config monitora compliance. CloudTrail registra chi fa cosa. Systems Manager gestisce le risorse esistenti, non le crea.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Monitoring & Management',
    text: `<strong>CloudWatch:</strong> metriche + allarmi + log · "cosa sta succedendo?" · Agent per RAM/disco<br><br>
<strong>CloudTrail:</strong> audit API call · "chi ha fatto cosa?" · salvato su S3 · forensica/compliance<br><br>
<strong>AWS Config:</strong> configurazione risorse nel tempo · regole compliance · "la risorsa è a norma?"<br><br>
<strong>CloudFormation:</strong> Infrastructure as Code · template YAML/JSON · rollback automatico<br><br>
<strong>Organizations:</strong> multi-account · consolidated billing · SCP per limitare account figlio<br><br>
<strong>Trusted Advisor:</strong> 5 aree (cost/performance/security/fault tolerance/limits) · check completi con Business+`,
    analogy: `CloudWatch = cruscotto auto. CloudTrail = scatola nera. Config = ispettore edilizio. CloudFormation = progetto architettonico. Organizations = holding. Trusted Advisor = consulente aziendale.`,
  },

];
