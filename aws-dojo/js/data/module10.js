'use strict';
const MODULE10 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🔒',
    title: 'Security Services',
    text: `La sicurezza è il <strong>pilastro più pesante</strong> del CLF-C02 (~30%). Hai già visto IAM nel modulo 2. Qui trovi i servizi di sicurezza avanzati:<br><br>
• <strong>KMS</strong> — gestione chiavi di cifratura<br>
• <strong>Shield</strong> — protezione DDoS<br>
• <strong>WAF</strong> — firewall applicativo web<br>
• <strong>GuardDuty</strong> — rilevamento minacce AI<br>
• <strong>Inspector</strong> — vulnerability assessment<br>
• <strong>Macie</strong> — protezione dati sensibili<br>
• <strong>Secrets Manager</strong> — gestione credenziali`,
    analogy: `KMS = cassaforte per le chiavi. Shield = guardia del corpo anti-folla. WAF = metal detector all'ingresso web. GuardDuty = telecamera intelligente con AI. Inspector = revisione sicurezza periodica.`,
  },

  /* ── LEZIONE: KMS ── */
  {
    type: 'lesson',
    emoji: '🔑',
    title: 'AWS KMS: Gestione Chiavi di Cifratura',
    text: `<strong>AWS KMS (Key Management Service)</strong> crea e gestisce le chiavi crittografiche usate per cifrare i dati su AWS.<br><br>
Caratteristiche:<br>
• Integrato con S3, EBS, RDS, DynamoDB, Lambda e quasi tutti i servizi AWS<br>
• Le chiavi non lasciano mai KMS in chiaro<br>
• <strong>CMK (Customer Managed Key)</strong>: chiavi che crei e controlli tu<br>
• <strong>AWS Managed Key</strong>: chiavi create e gestite da AWS per conto tuo<br><br>
Quando vedi "cifratura at-rest" nell'esame → pensa KMS.<br>
Quando vedi "cifratura in transito" → pensa TLS/SSL (certificati ACM).`,
    analogy: `KMS è il guardiano della cassaforte: tiene le chiavi master, le presta ai servizi quando servono, ma non le lascia mai uscire fisicamente dall'edificio.`,
  },

  /* ── LEZIONE: Shield e WAF ── */
  {
    type: 'lesson',
    emoji: '🛡️',
    title: 'Shield e WAF: Protezione da Attacchi',
    text: `<strong>AWS Shield</strong> — protezione contro attacchi DDoS (Distributed Denial of Service):<br>
• <strong>Shield Standard</strong>: incluso gratis per tutti — protegge da attacchi DDoS comuni (layer 3/4)<br>
• <strong>Shield Advanced</strong>: a pagamento — protezione DDoS avanzata (layer 7), response team 24/7, rimborso costi durante attacchi<br><br>
<strong>AWS WAF (Web Application Firewall)</strong> — filtra il traffico HTTP/HTTPS delle applicazioni web:<br>
• Blocca SQL injection, XSS, bot malevoli<br>
• Regole custom o Managed Rules (OWASP Top 10)<br>
• Si integra con CloudFront, ALB, API Gateway<br><br>
Differenza: Shield = quantità (volumetric DDoS), WAF = qualità (attacchi applicativi).`,
    analogy: `Shield = cancello anti-folla (blocca migliaia di persone che spingono). WAF = addetto alla sicurezza che controlla i documenti di ogni singolo visitatore.`,
  },

  /* ── QUIZ: sicurezza servizi ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole proteggere la propria API da attacchi SQL injection e cross-site scripting. Quale servizio AWS è più appropriato?",
    opts: [
      'AWS Shield Standard — protezione DDoS inclusa di default',
      'AWS WAF — filtra traffico HTTP e blocca attacchi applicativi',
      'Amazon GuardDuty — rilevamento minacce basato su AI',
      'AWS KMS — per cifrare i dati dell\'API',
    ],
    a: 1,
    explain: `✅ WAF è progettato per bloccare attacchi a livello applicativo (SQL injection, XSS, OWASP Top 10) filtrando le richieste HTTP/HTTPS. Shield Standard protegge da DDoS volumetrici, non da attacchi applicativi. GuardDuty rileva comportamenti anomali ma non blocca richieste web in real-time. KMS cifra i dati, non protegge dall'iniezione di codice.`,
  },

  /* ── LEZIONE: GuardDuty, Inspector, Macie ── */
  {
    type: 'lesson',
    emoji: '🤖',
    title: 'GuardDuty, Inspector e Macie',
    text: `<strong>Amazon GuardDuty</strong> — threat detection intelligente. Analizza CloudTrail, VPC Flow Logs e DNS logs con machine learning per rilevare comportamenti anomali (account compromessi, crypto-mining, accessi insoliti).<br><br>
<strong>Amazon Inspector</strong> — vulnerability assessment automatico. Scansiona istanze EC2 e container per vulnerabilità note (CVE), configurazioni non sicure e deviazioni dalle best practice.<br><br>
<strong>Amazon Macie</strong> — protezione dati sensibili su S3. Usa ML per scoprire e classificare automaticamente dati PII (nomi, carte di credito, dati sanitari) nei bucket S3 e avvisarti se sono esposti.`,
    analogy: `GuardDuty = guardia notturna intelligente che nota comportamenti strani. Inspector = tecnico che testa le serrature. Macie = archivista che trova documenti confidenziali lasciati in bella vista.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🔐',
    title: 'AWS Secrets Manager vs Parameter Store',
    text: `Per gestire credenziali (password database, API key) AWS offre due opzioni:<br><br>
<strong>AWS Secrets Manager</strong> — rotazione automatica delle password, integrazione con RDS. A pagamento per segreto.<br><br>
<strong>AWS Systems Manager Parameter Store</strong> — più economico (tier gratuito), per configurazioni e segreti semplici, ma senza rotazione automatica nativa.<br><br>
La regola pratica: se devi ruotare le credenziali automaticamente → Secrets Manager. Per configurazioni statiche → Parameter Store.<br><br>
Mai hardcodare credenziali nel codice — questa è una delle regole di sicurezza AWS più violate.`,
  },

  /* ── QUIZ: GuardDuty ── */
  {
    type: 'quiz',
    q: "Quale servizio AWS utilizza machine learning per rilevare automaticamente attività sospette come accessi anomali o istanze EC2 usate per crypto-mining?",
    opts: [
      'AWS Config — per monitorare le configurazioni delle risorse',
      'AWS Inspector — per la scansione delle vulnerabilità',
      'Amazon GuardDuty — threat detection intelligente',
      'AWS CloudTrail — per l\'audit delle API call',
    ],
    a: 2,
    explain: `✅ GuardDuty usa ML per analizzare CloudTrail, VPC Flow Logs e DNS logs e rilevare minacce in tempo reale: account compromessi, movimento laterale, crypto-mining, comunicazioni con IP malevoli. Inspector scansiona vulnerabilità note (CVE), non comportamenti anomali. Config monitora compliance di configurazione. CloudTrail registra le azioni ma non le analizza per anomalie.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Security Services',
    text: `<strong>KMS:</strong> chiavi cifratura · at-rest encryption · CMK (tue) vs AWS Managed Keys<br><br>
<strong>Shield Standard:</strong> DDoS gratis per tutti · <strong>Shield Advanced:</strong> DDoS avanzato + response team<br><br>
<strong>WAF:</strong> SQL injection/XSS/OWASP · su CloudFront/ALB/API GW<br><br>
<strong>GuardDuty:</strong> ML threat detection · analizza CloudTrail + VPC Flow Logs<br><br>
<strong>Inspector:</strong> vulnerability assessment EC2/container · CVE scanning<br><br>
<strong>Macie:</strong> dati sensibili su S3 · PII detection con ML<br><br>
<strong>Secrets Manager:</strong> credenziali con rotazione auto · <strong>Parameter Store:</strong> config semplici`,
    analogy: `KMS = cassaforte chiavi. Shield = anti-folla. WAF = metal detector. GuardDuty = AI sorveglianza. Inspector = revisione vulnerabilità. Macie = trova dati sensibili esposti.`,
  },

];
