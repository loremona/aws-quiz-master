'use strict';
const MODULE13 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🏛️',
    title: 'Well-Architected & Cloud Adoption Framework',
    text: `Due "manuali" ufficiali di AWS che all'esame escono <strong>quasi sempre</strong>:<br><br>
• <strong>Well-Architected Framework</strong> — come progettare <em>bene</em> un'architettura cloud (6 pilastri)<br>
• <strong>Cloud Adoption Framework (CAF)</strong> — come un'<em>azienda</em> si organizza per passare al cloud (6 prospettive)<br><br>
Il primo è tecnico (l'edificio), il secondo è organizzativo (l'impresa che lo costruisce).<br><br>
Domanda tipica: <em>"Quale pilastro / prospettiva riguarda X?"</em>`,
    analogy: `Well-Architected = le norme antisismiche per costruire una casa solida. CAF = il piano per traslocare un'intera famiglia nella casa nuova, compresi bambini, mobili e abitudini.`,
  },

  /* ── LEZIONE: i 6 pilastri ── */
  {
    type: 'lesson',
    emoji: '🏛️',
    title: 'I 6 Pilastri del Well-Architected',
    text: `1. <strong>Operational Excellence</strong> — eseguire e monitorare i sistemi, migliorare i processi<br>
2. <strong>Security</strong> — proteggere dati, sistemi e asset<br>
3. <strong>Reliability</strong> — funzionare correttamente e riprendersi dai guasti<br>
4. <strong>Performance Efficiency</strong> — usare le risorse in modo efficiente al variare della domanda<br>
5. <strong>Cost Optimization</strong> — evitare spese inutili<br>
6. <strong>Sustainability</strong> — ridurre l'impatto ambientale (aggiunto nel 2021)<br><br>
Mnemonica: <strong>CROPS + S</strong> → <strong>C</strong>ost, <strong>R</strong>eliability, <strong>O</strong>perational excellence, <strong>P</strong>erformance, <strong>S</strong>ecurity + <strong>S</strong>ustainability.`,
    analogy: `Un'auto ben progettata: si guida facilmente (Operational), ha antifurto (Security), non si rompe e se buca ha la ruota di scorta (Reliability), ha il motore giusto (Performance), consuma poco (Cost) e inquina poco (Sustainability).`,
  },

  /* ── LEZIONE: pilastri 1-3 ── */
  {
    type: 'lesson',
    emoji: '🔧',
    title: 'Operational Excellence, Security, Reliability',
    text: `<strong>Operational Excellence</strong> — principi chiave:<br>
• Operazioni come codice (<em>operations as code</em>)<br>
• Modifiche <strong>piccole, frequenti e reversibili</strong><br>
• Anticipare i guasti e imparare dagli errori operativi<br><br>
<strong>Security</strong>:<br>
• Base di identità solida (<em>least privilege</em>)<br>
• <strong>Tracciabilità</strong> (log e audit di tutto)<br>
• Sicurezza a <strong>tutti i livelli</strong> e automatizzata<br>
• Proteggere i dati <strong>in transito e a riposo</strong><br>
• Tenere le persone lontane dai dati<br><br>
<strong>Reliability</strong>:<br>
• <strong>Recupero automatico</strong> dai guasti<br>
• <strong>Testare le procedure di ripristino</strong><br>
• Scalare <strong>orizzontalmente</strong> (tante istanze piccole)<br>
• Smettere di indovinare la capacità`,
    analogy: `Reliability è il piano di evacuazione: non basta scriverlo, bisogna fare le prove antincendio (testare il recovery).`,
  },

  /* ── LEZIONE: pilastri 4-6 ── */
  {
    type: 'lesson',
    emoji: '⚙️',
    title: 'Performance, Cost, Sustainability',
    text: `<strong>Performance Efficiency</strong>:<br>
• <strong>Democratizzare</strong> le tecnologie avanzate (usarle come servizio)<br>
• Andare <strong>globali in pochi minuti</strong><br>
• Usare architetture <strong>serverless</strong><br>
• Sperimentare più spesso<br><br>
<strong>Cost Optimization</strong>:<br>
• Adottare il modello <strong>a consumo</strong><br>
• Misurare l'efficienza complessiva<br>
• Smettere di spendere in <em>undifferentiated heavy lifting</em> (lavoro pesante che non ti differenzia, es. gestire data center)<br>
• Analizzare e attribuire le spese (tag)<br><br>
<strong>Sustainability</strong>:<br>
• <strong>Massimizzare l'utilizzo</strong> delle risorse (niente server al 5%)<br>
• Usare <strong>servizi managed</strong> e hardware più efficiente (es. Graviton)<br>
• Ridurre l'impatto a valle (dati e dispositivi dei clienti)`,
    analogy: `Sustainability = fare il car pooling: la stessa auto (server) piena invece di cinque auto con una persona sola.`,
  },

  /* ── QUIZ: pilastro reliability ── */
  {
    type: 'quiz',
    q: "Un'azienda simula periodicamente il guasto di un'intera Availability Zone per verificare che l'applicazione si riprenda da sola. Quale pilastro del Well-Architected Framework sta applicando?",
    opts: [
      'Operational Excellence',
      'Performance Efficiency',
      'Reliability',
      'Security',
    ],
    a: 2,
    explain: `✅ "Testare le procedure di ripristino" e "recuperare automaticamente dai guasti" sono principi del pilastro Reliability. Operational Excellence riguarda processi e operations as code, Performance Efficiency l'uso efficiente delle risorse, Security la protezione di dati e sistemi.`,
  },

  /* ── QUIZ: sustainability ── */
  {
    type: 'quiz',
    q: "Quale pratica è allineata al pilastro Sustainability del Well-Architected Framework?",
    opts: [
      'Abilitare MFA per tutti gli utenti IAM',
      'Massimizzare l\'utilizzo delle risorse ed eliminare quelle inattive',
      'Distribuire l\'applicazione in più Regioni per la latenza',
      'Usare Reserved Instances per ridurre la bolletta',
    ],
    a: 1,
    explain: `✅ Sustainability = minimizzare l'impatto ambientale: massimizzare l'utilizzo, spegnere ciò che non serve, usare servizi managed e hardware efficiente. MFA è Security, più Regioni per la latenza è Performance Efficiency, le Reserved Instances sono Cost Optimization.`,
  },

  /* ── LEZIONE: principi generali e tool ── */
  {
    type: 'lesson',
    emoji: '🧰',
    title: 'Principi Generali e Well-Architected Tool',
    text: `<strong>Principi generali di design</strong> (valgono per tutti i pilastri):<br>
• Smettere di indovinare la capacità necessaria<br>
• Testare i sistemi a <strong>scala di produzione</strong><br>
• <strong>Automatizzare</strong> per facilitare la sperimentazione<br>
• Architetture <strong>evolutive</strong> (cambiano nel tempo)<br>
• Decisioni guidate dai <strong>dati</strong><br>
• Migliorare con i <strong>game day</strong> (simulazioni di eventi)<br><br>
<strong>AWS Well-Architected Tool</strong> — servizio <strong>gratuito</strong> nella console: rispondi a domande sul tuo workload e ricevi un report con i rischi (alti/medi) e i consigli per ogni pilastro.<br><br>
<strong>Lenses</strong> — estensioni per settori specifici (Serverless, SaaS, Machine Learning, IoT…).`,
    analogy: `Il Well-Architected Tool è il check-up medico gratuito: un questionario, e alla fine il referto con cosa sistemare prima.`,
  },

  /* ── LEZIONE: CAF ── */
  {
    type: 'lesson',
    emoji: '🧭',
    title: 'Cloud Adoption Framework: 6 Prospettive',
    text: `Il <strong>CAF</strong> organizza l'adozione del cloud in <strong>6 prospettive</strong>:<br><br>
<em>Lato business</em>:<br>
• <strong>Business</strong> — gli investimenti cloud accelerano gli obiettivi di business (CEO, CFO)<br>
• <strong>People</strong> — cultura, formazione, struttura organizzativa, gestione del cambiamento (HR)<br>
• <strong>Governance</strong> — gestione del programma, rischi, costi, conformità (CIO, PMO)<br><br>
<em>Lato tecnico</em>:<br>
• <strong>Platform</strong> — architettura e piattaforma cloud scalabile (CTO, architetti)<br>
• <strong>Security</strong> — riservatezza, integrità e disponibilità di dati e workload (CISO)<br>
• <strong>Operations</strong> — erogare i servizi cloud ai livelli concordati (IT operations, SRE)<br><br>
Mnemonica: <strong>B-P-G</strong> (business) + <strong>P-S-O</strong> (tecnica).`,
    analogy: `Trasloco aziendale: Business decide perché traslocare, People prepara i dipendenti, Governance controlla budget e rischi, Platform progetta i nuovi uffici, Security mette le serrature, Operations fa funzionare tutto dal primo giorno.`,
  },

  /* ── LEZIONE: CAF fasi e benefici ── */
  {
    type: 'lesson',
    emoji: '🗺️',
    title: 'CAF: Fasi e Benefici',
    text: `<strong>Le 4 fasi della trasformazione</strong>:<br>
1. <strong>Envision</strong> — immaginare le opportunità di business<br>
2. <strong>Align</strong> — allineare gli stakeholder, individuare i gap<br>
3. <strong>Launch</strong> — avviare progetti pilota in produzione<br>
4. <strong>Scale</strong> — estendere i piloti a tutta l'azienda<br><br>
<strong>I 4 benefici di business</strong>:<br>
• Ridurre il <strong>rischio</strong> di business<br>
• Migliorare le performance <strong>ESG</strong> (ambientali, sociali, governance)<br>
• Aumentare i <strong>ricavi</strong><br>
• Aumentare l'<strong>efficienza operativa</strong><br><br>
<strong>Domini di trasformazione</strong>: Technology, Process, Organization, Product.`,
    analogy: `Envision = sognare la casa, Align = mettersi d'accordo in famiglia, Launch = arredare la prima stanza, Scale = completare tutta la casa.`,
  },

  /* ── QUIZ: CAF People ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole valutare le competenze del personale e pianificare la formazione necessaria per il passaggio al cloud. Quale prospettiva del CAF se ne occupa?",
    opts: [
      'Business',
      'Governance',
      'People',
      'Operations',
    ],
    a: 2,
    explain: `✅ La prospettiva People copre cultura, competenze, formazione e gestione del cambiamento organizzativo. Business riguarda la strategia e il valore economico, Governance la gestione di programmi, rischi e costi, Operations l'erogazione dei servizi IT.`,
  },

  /* ── QUIZ: CAF Platform ── */
  {
    type: 'quiz',
    q: "Quale prospettiva del CAF aiuta a costruire un'architettura cloud ibrida scalabile e a modernizzare i workload esistenti?",
    opts: [
      'Platform',
      'Security',
      'Governance',
      'People',
    ],
    a: 0,
    explain: `✅ Platform riguarda l'architettura, la piattaforma e l'ingegneria dei workload (CTO, architetti). Security riguarda la protezione dei dati, Governance la gestione di programmi e rischi, People le persone e le competenze.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📚',
    title: 'Il Well-Architected nasce da migliaia di revisioni',
    text: `Il <strong>Well-Architected Framework</strong> è stato pubblicato nel <strong>2015</strong> raccogliendo le lezioni apprese dai Solutions Architect AWS in migliaia di revisioni di architetture dei clienti.<br><br>
All'inizio i pilastri erano <strong>5</strong>: il sesto, <strong>Sustainability</strong>, è arrivato nel <strong>2021</strong>.<br><br>
Le revisioni Well-Architected si possono fare da soli con il Tool gratuito oppure con un <strong>partner AWS</strong> certificato.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Well-Architected & CAF',
    text: `<strong>6 pilastri:</strong> Operational Excellence · Security · Reliability · Performance Efficiency · Cost Optimization · Sustainability<br><br>
<strong>Parole chiave → pilastro:</strong><br>
operations as code, piccole modifiche reversibili → <em>Operational</em><br>
least privilege, tracciabilità, cifratura → <em>Security</em><br>
recupero automatico, test del ripristino, scalare orizzontalmente → <em>Reliability</em><br>
serverless, globali in minuti, sperimentare → <em>Performance</em><br>
consumo, tag, niente heavy lifting → <em>Cost</em><br>
massimo utilizzo, impatto ambientale → <em>Sustainability</em><br><br>
<strong>CAF:</strong> Business · People · Governance | Platform · Security · Operations<br>
<strong>Fasi:</strong> Envision → Align → Launch → Scale<br>
<strong>Well-Architected Tool:</strong> gratuito, report dei rischi per pilastro`,
    analogy: `Well-Architected = come costruire bene. CAF = come far adottare il cloud all'azienda.`,
  },

];
