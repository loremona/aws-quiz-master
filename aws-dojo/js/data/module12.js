'use strict';
const MODULE12 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '💰',
    title: 'Billing & Pricing',
    text: `Il dominio Billing & Pricing vale <strong>~12% dell'esame</strong> ma con molte domande dirette e prevedibili — è uno dei più "recuperabili".<br><br>
Questo modulo copre:<br>
• <strong>Free Tier</strong> — cosa è gratuito e per quanto<br>
• <strong>Strumenti di costo</strong>: Cost Explorer, Budgets, Pricing Calculator<br>
• <strong>Consolidated Billing</strong> — fattura unica multi-account<br>
• <strong>Support Plans</strong> — Basic, Developer, Business, Enterprise<br>
• <strong>TCO e modelli di pricing</strong><br><br>
Le domande sui Support Plans sono quasi sempre presenti — impara le differenze.`,
    analogy: `Billing AWS = bolletta del telefono: capisci come sei tariffato, usi gli strumenti per non avere sorprese, e scegli il piano di assistenza giusto.`,
  },

  /* ── LEZIONE: Free Tier ── */
  {
    type: 'lesson',
    emoji: '🆓',
    title: 'AWS Free Tier: 3 Tipi Diversi',
    text: `AWS Free Tier ha tre categorie distinte — l'esame le distingue:<br><br>
<strong>1. Always Free</strong> — non scade mai:<br>
• Lambda: 1 milione di richieste/mese gratis<br>
• DynamoDB: 25 GB di storage gratis<br>
• CloudWatch: 10 metriche custom gratis<br><br>
<strong>2. 12 Months Free</strong> — gratis per 12 mesi dalla registrazione:<br>
• EC2: 750 ore/mese di t2.micro o t3.micro<br>
• S3: 5 GB di storage Standard<br>
• RDS: 750 ore/mese di db.t2.micro<br><br>
<strong>3. Trials</strong> — periodi di prova brevi per servizi specifici:<br>
• SageMaker: 2 mesi gratis<br>
• Redshift: 2 mesi gratis`,
    analogy: `Always Free = acqua del rubinetto (sempre gratis). 12 Months Free = campione omaggio che dura un anno. Trials = assaggio in negozio — finisce presto.`,
  },

  /* ── LEZIONE: strumenti di costo ── */
  {
    type: 'lesson',
    emoji: '🔧',
    title: 'Cost Explorer, Budgets e Pricing Calculator',
    text: `<strong>AWS Cost Explorer</strong> — visualizza e analizza i costi storici e previsti. Grafici per servizio, regione, tag. Forecasting dei costi futuri. Identifica sprechi.<br><br>
<strong>AWS Budgets</strong> — imposta alert quando i costi superano una soglia. Puoi creare budget per costo, utilizzo, o Reserved Instance coverage. Notifiche via email o SNS.<br><br>
<strong>AWS Pricing Calculator</strong> — stima il costo di un'architettura AWS <em>prima</em> di crearla. Utile per preventivi e analisi TCO.<br><br>
<strong>Cost Allocation Tags</strong> — tag applicati alle risorse (es. <code>Project: Alpha</code>) per attribuire i costi a team o progetti specifici.`,
    analogy: `Cost Explorer = estratto conto del mese. Budgets = limite sulla carta di credito con avviso SMS. Pricing Calculator = preventivo del meccanico prima di portare l'auto.`,
  },

  /* ── QUIZ: strumenti di costo ── */
  {
    type: 'quiz',
    q: "Un CFO vuole ricevere un'email automatica se la spesa AWS mensile supera i $5.000. Quale servizio configurare?",
    opts: [
      'AWS Cost Explorer — per analizzare i costi storici',
      'AWS Pricing Calculator — per stimare i costi futuri',
      'AWS Budgets — per impostare soglie di alert sui costi',
      'AWS Trusted Advisor — per raccomandazioni di ottimizzazione',
    ],
    a: 2,
    explain: `✅ AWS Budgets permette di impostare soglie di spesa e ricevere notifiche (email o SNS) quando vengono raggiunte o superate. Cost Explorer è per analisi retrospettiva, non per alert. Pricing Calculator è per stime preventive. Trusted Advisor dà raccomandazioni di ottimizzazione ma non gestisce soglie di spesa personalizzate.`,
  },

  /* ── LEZIONE: Consolidated Billing ── */
  {
    type: 'lesson',
    emoji: '🏢',
    title: 'Consolidated Billing e Volume Discounts',
    text: `Con <strong>AWS Organizations</strong>, tutti gli account della stessa organizzazione ricevono <strong>una sola fattura</strong> (Consolidated Billing).<br><br>
Vantaggi:<br>
• <strong>Una fattura</strong> invece di tante<br>
• <strong>Volume discounts</strong>: l'utilizzo di tutti gli account si somma. Se 5 account usano S3, lo sconto per volume si calcola sul totale combinato<br>
• <strong>Reserved Instance sharing</strong>: le RI inutilizzate di un account possono essere usate da altri account nella stessa organizzazione<br><br>
Esempio: se un account usa 60 TB su S3 e un altro usa 60 TB, insieme fanno 120 TB → entrano nel tier di sconto superiore.`,
    analogy: `Come un abbonamento famiglia: tutti i membri pagano meno perché si va dal provider insieme — anche se usano linee separate, il contratto è unico e si ottengono sconti volume.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📋',
    title: 'I 4 Support Plans AWS',
    text: `AWS ha <strong>4 piani di supporto</strong> — le differenze sono sempre sull'esame:<br><br>
• <strong>Basic</strong>: gratuito, solo documentazione e forum<br>
• <strong>Developer</strong>: ~$29/mese, risposta email entro 12-24h (orario lavorativo), per ambienti di test<br>
• <strong>Business</strong>: ~$100/mese, supporto telefonico 24/7, risposta entro 1 ora per problemi critici, Trusted Advisor completo<br>
• <strong>Enterprise</strong>: da $15.000/mese, Technical Account Manager (TAM) dedicato, risposta entro 15 min per produzione down<br><br>
Mnemonica: <strong>B</strong>asic → <strong>D</strong>ev → <strong>B</strong>usiness → <strong>E</strong>nterprise (BDBE).`,
  },

  /* ── LEZIONE: Support Plans in dettaglio ── */
  {
    type: 'lesson',
    emoji: '🎧',
    title: 'Support Plans: le Differenze Chiave',
    text: `Le domande d'esame chiedono spesso: <em>"qual è il piano MINIMO per X?"</em><br><br>
<strong>Supporto telefonico 24/7</strong> → minimo <strong>Business</strong><br>
<strong>Technical Account Manager (TAM)</strong> → solo <strong>Enterprise</strong><br>
<strong>Trusted Advisor completo</strong> → minimo <strong>Business</strong><br>
<strong>Response time &lt;1h per produzione down</strong> → minimo <strong>Business</strong><br>
<strong>Response time 15 min per sistema critico down</strong> → solo <strong>Enterprise</strong><br>
<strong>Concierge Support Team</strong> → solo <strong>Enterprise</strong><br><br>
Con <strong>Basic e Developer</strong>: solo Trusted Advisor parziale (6 check), nessun supporto telefonico.`,
    analogy: `Basic = manuale d'istruzioni online. Developer = email al call center. Business = numero verde 24/7. Enterprise = assistente personale dedicato H24.`,
  },

  /* ── QUIZ: Support Plans ── */
  {
    type: 'quiz',
    q: "Quale piano di supporto AWS fornisce il minimo per accedere al supporto telefonico 24/7 e a Trusted Advisor completo?",
    opts: [
      'Basic — incluso gratuitamente per tutti',
      'Developer — per ambienti di sviluppo e test',
      'Business — supporto produzione con telefono 24/7',
      'Enterprise — con TAM dedicato',
    ],
    a: 2,
    explain: `✅ Il piano Business è il minimo per: supporto telefonico 24/7, chat, risposta entro 1 ora per produzione down, Trusted Advisor completo. Basic ha solo documentazione e forum. Developer ha email support (non telefono) solo negli orari lavorativi. Enterprise aggiunge TAM, Concierge e risposta 15 min — necessario solo per sistemi mission-critical.`,
  },

  /* ── QUIZ: TCO ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole confrontare il costo totale di mantenere server on-premises con quello di migrare su AWS. Quale strumento usare?",
    opts: [
      'AWS Budgets — per monitorare i costi AWS',
      'AWS Cost Explorer — per analizzare spese storiche',
      'AWS Pricing Calculator — per stimare e confrontare i costi TCO',
      'AWS Trusted Advisor — per ottimizzare i costi esistenti',
    ],
    a: 2,
    explain: `✅ AWS Pricing Calculator permette di modellare architetture AWS e stimarne il costo, usato tipicamente per calcolare il TCO (Total Cost of Ownership) a confronto con on-premises. Include anche la voce "AWS Migration Evaluator" per analisi TCO formali. Budgets è per alert in tempo reale. Cost Explorer è per analisi retrospettiva. Trusted Advisor ottimizza risorse già in uso.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Billing & Pricing',
    text: `<strong>Free Tier:</strong> Always Free (Lambda, DynamoDB) · 12 Months (EC2 t2.micro, S3 5GB, RDS) · Trials<br><br>
<strong>Strumenti:</strong><br>
Cost Explorer = analisi storica e forecast<br>
Budgets = alert soglia di spesa<br>
Pricing Calculator = preventivo pre-migrazione / TCO<br>
Cost Allocation Tags = costi per team/progetto<br><br>
<strong>Consolidated Billing:</strong> fattura unica · volume discounts combinati · RI sharing<br><br>
<strong>Support Plans (minimo per):</strong><br>
Telefono 24/7 → Business · TAM → Enterprise<br>
Trusted Advisor completo → Business<br>
Risposta 15 min → Enterprise`,
    analogy: `Free Tier = acqua, campione, assaggio. Cost Explorer = estratto conto. Budgets = limite carta. Pricing Calculator = preventivo. Support = Basic (manuale) → Developer (email) → Business (24/7) → Enterprise (assistente).`,
  },

];
