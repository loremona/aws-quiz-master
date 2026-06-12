'use strict';
const MODULE03 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '💻',
    title: 'EC2 & Compute',
    text: `<strong>Amazon EC2</strong> è il servizio di calcolo più usato di AWS — server virtuali nel cloud che avvii in minuti.<br><br>
In questo modulo:<br>
• Cos'è EC2 e come funziona<br>
• <strong>Modelli di prezzo</strong> (On-Demand, Reserved, Spot, Savings Plans) — la trappola più frequente dell'esame<br>
• Tipi di istanza e AMI<br>
• <strong>Auto Scaling</strong> e <strong>Load Balancer</strong><br><br>
Le domande sui pricing model valgono molto: impara a scegliere il modello giusto per ogni scenario.`,
    analogy: `EC2 è come noleggiare un'auto. Puoi noleggiare a giornata (On-Demand), fare un contratto annuale con sconto (Reserved), o aspettare un'auto disponibile a prezzo stracciato e accettare che te la tolgano (Spot).`,
  },

  /* ── LEZIONE: cos'è EC2 ── */
  {
    type: 'lesson',
    emoji: '🖥️',
    title: "Cos'è Amazon EC2",
    text: `<strong>EC2 (Elastic Compute Cloud)</strong> fornisce server virtuali (<em>istanze</em>) nel cloud. Scegli:<br><br>
• <strong>OS</strong>: Linux, Windows, macOS<br>
• <strong>CPU/RAM</strong>: da micro (t3.micro) a enormi (x2idn.32xlarge)<br>
• <strong>Storage</strong>: disco locale (Instance Store) o EBS persistente<br>
• <strong>Rete</strong>: dentro una VPC, con IP pubblico opzionale<br><br>
EC2 è <strong>IaaS</strong>: AWS gestisce l'hardware fisico, tu gestisci tutto il resto (OS, patch, sicurezza, applicazioni).<br><br>
<strong>Elastic</strong> significa che puoi aumentare o ridurre le risorse in pochi minuti.`,
    analogy: `Un computer potentissimo in affitto. AWS tiene il computer fisico nei suoi data center; tu accedi via internet e installi quello che vuoi sopra.`,
  },

  /* ── LEZIONE: pricing models ── */
  {
    type: 'lesson',
    emoji: '💰',
    title: 'EC2 Pricing: On-Demand e Reserved',
    text: `<strong>On-Demand</strong> — paghi per ora o per secondo, nessun impegno. Perfetto per:<br>
• Workload imprevedibili o di breve durata<br>
• Testing e sviluppo<br>
• Prima volta che usi un'applicazione<br><br>
<strong>Reserved Instances (RI)</strong> — impegno 1 o 3 anni, sconto fino al 72% vs On-Demand. Tre varianti:<br>
• <em>Standard RI</em>: sconto massimo, istanza fissa<br>
• <em>Convertible RI</em>: puoi cambiare tipo istanza, sconto minore<br>
• <em>Scheduled RI</em>: solo in fasce orarie predefinite<br><br>
Usa Reserved per workload stabili e prevedibili (es. server di produzione sempre acceso).`,
    analogy: `On-Demand = biglietto del treno comprato in stazione al prezzo pieno. Reserved = abbonamento annuale scontato — conveniente se viaggi ogni giorno.`,
  },

  /* ── LEZIONE: Spot e Savings Plans ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'EC2 Pricing: Spot e Savings Plans',
    text: `<strong>Spot Instances</strong> — uso della capacità EC2 inutilizzata di AWS, sconto fino al 90%. <strong>MA:</strong> AWS può interrompere l'istanza con 2 minuti di preavviso quando riacquista la capacità. Ideale per:<br>
• Batch jobs, analisi dati, rendering<br>
• Workload tolleranti alle interruzioni<br>
• Mai per database o app che non si possono interrompere<br><br>
<strong>Savings Plans</strong> — impegno di spesa (es. $10/ora per 1 anno), sconto fino al 72%. Più flessibile dei Reserved: si applica automaticamente a qualsiasi tipo di istanza EC2 o Lambda.<br><br>
<strong>Dedicated Host</strong> — server fisico dedicato a te. Necessario per licenze software legate all'hardware (es. Oracle, Windows Server per core).`,
    analogy: `Spot = voli last-minute super scontati ma la compagnia può cancellare e riprendersi il posto. Savings Plans = carta fedeltà: spendi almeno X al mese e risparmi su tutto.`,
  },

  /* ── QUIZ: scegliere il pricing model ── */
  {
    type: 'quiz',
    q: "Un'azienda ha un server di produzione che deve girare 24/7 per i prossimi 3 anni. Quale modello di prezzo EC2 è più conveniente?",
    opts: [
      'On-Demand — per la massima flessibilità',
      'Spot Instances — per il massimo risparmio',
      'Reserved Instances — impegno pluriennale con sconto fino al 72%',
      'Dedicated Host — per la massima sicurezza',
    ],
    a: 2,
    explain: `✅ Reserved Instances è la risposta corretta per workload stabili e a lungo termine: sconto fino al 72% vs On-Demand con impegno 1-3 anni. On-Demand è più costoso senza impegno. Spot è inadatto per produzione perché può essere interrotto. Dedicated Host risolve problemi di licenze, non di costo.`,
  },

  /* ── QUIZ: Spot ── */
  {
    type: 'quiz',
    q: "Quale tipo di workload è più adatto alle Spot Instances?",
    opts: [
      'Un database di produzione con dati critici',
      'Un sito web e-commerce con traffico continuo',
      'Un job di analisi batch che può essere riavviato in caso di interruzione',
      'Un server di autenticazione che deve rispondere 24/7',
    ],
    a: 2,
    explain: `✅ Le Spot Instances sono perfette per workload fault-tolerant e interrompibili: batch processing, rendering video, simulazioni HPC. Se AWS interrompe l'istanza, il job riparte da dove era. Sono assolutamente inadatte per database, siti in produzione o sistemi di autenticazione che devono essere sempre disponibili.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📊',
    title: 'EC2 ha oltre 500 tipi di istanza',
    text: `AWS offre oltre <strong>500 tipi di istanza</strong> EC2, organizzati in famiglie per uso:<br><br>
• <strong>t, m</strong> — General Purpose (bilanciati CPU/RAM) → web server, dev<br>
• <strong>c</strong> — Compute Optimized (CPU potente) → ML inference, HPC<br>
• <strong>r, x</strong> — Memory Optimized (molta RAM) → database in-memory<br>
• <strong>i, d</strong> — Storage Optimized (IOPS elevati) → data warehouse<br>
• <strong>p, g, trn</strong> — Accelerated Computing (GPU) → ML training<br><br>
Per l'esame non devi memorizzare tutti i tipi — basta sapere le famiglie e il loro uso.`,
  },

  /* ── LEZIONE: AMI ── */
  {
    type: 'lesson',
    emoji: '📀',
    title: 'AMI: il Template della tua EC2',
    text: `Una <strong>AMI (Amazon Machine Image)</strong> è un template che contiene:<br>
• Sistema operativo pre-configurato<br>
• Software e applicazioni già installati<br>
• Configurazione storage<br><br>
Quando avvii una EC2, scegli una AMI come punto di partenza. Fonti:<br>
• <strong>AWS Marketplace</strong> — AMI commerciali e open source<br>
• <strong>Community AMIs</strong> — condivise dalla community<br>
• <strong>Le tue AMI custom</strong> — crei uno snapshot di un'istanza configurata → riusi per deployare istanze identiche<br><br>
Le AMI sono <strong>regionali</strong>: se vuoi usare la stessa in un'altra regione devi copiarla.`,
    analogy: `L'AMI è come l'immagine disco di un computer già configurato. Invece di installare tutto da zero ogni volta, cloni l'immagine e hai una macchina pronta in 2 minuti.`,
  },

  /* ── LEZIONE: Auto Scaling ── */
  {
    type: 'lesson',
    emoji: '📈',
    title: 'Auto Scaling: elasticità automatica',
    text: `<strong>EC2 Auto Scaling</strong> aggiunge o rimuove istanze EC2 automaticamente in base al carico, garantendo:<br>
• <strong>Alta disponibilità</strong>: se un'istanza fallisce, ne avvia una nuova<br>
• <strong>Elasticità</strong>: più istanze nelle ore di punta, meno di notte<br>
• <strong>Risparmio</strong>: non paghi istanze che non ti servono<br><br>
Configurazione chiave:<br>
• <em>Minimum</em>: istanze sempre attive (mai sotto)<br>
• <em>Desired</em>: istanze normali<br>
• <em>Maximum</em>: limite massimo in caso di picco<br><br>
I trigger sono le <strong>CloudWatch metrics</strong> (es. CPU > 70% → aggiungi istanze).`,
    analogy: `Come i cassieri al supermercato: aprono più casse quando ci sono file e le chiudono quando è tranquillo. Auto Scaling fa lo stesso con i server.`,
  },

  /* ── LEZIONE: Load Balancer ── */
  {
    type: 'lesson',
    emoji: '⚖️',
    title: 'Elastic Load Balancer (ELB)',
    text: `L'<strong>Elastic Load Balancer</strong> distribuisce il traffico in entrata tra più istanze EC2 (o container, Lambda).<br><br>
Tre tipi principali:<br>
• <strong>ALB (Application LB)</strong> — layer 7 (HTTP/HTTPS), routing basato su URL/headers. Il più usato per web app.<br>
• <strong>NLB (Network LB)</strong> — layer 4 (TCP/UDP), performance estrema, bassa latenza. Per app real-time.<br>
• <strong>GLB (Gateway LB)</strong> — per appliance di sicurezza di terze parti<br><br>
ELB + Auto Scaling = coppia perfetta per alta disponibilità: ELB smista il traffico, Auto Scaling aggiusta il numero di server.`,
    analogy: `Il cassiere della biglietteria che smista i clienti: "tu vai allo sportello 1, tu al 2, tu al 3". Se uno sportello chiude, smette di mandare lì i clienti.`,
  },

  /* ── QUIZ: Auto Scaling + ELB ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole che la propria app web gestisca automaticamente i picchi di traffico distribuendo le richieste tra più server. Qual è la combinazione corretta di servizi AWS?",
    opts: [
      'Route 53 + CloudFront',
      'Elastic Load Balancer + EC2 Auto Scaling',
      'VPC + Security Group',
      'CloudWatch + SNS',
    ],
    a: 1,
    explain: `✅ ELB distribuisce il traffico in entrata tra le istanze attive; Auto Scaling regola automaticamente il numero di istanze in base al carico. Insieme realizzano la scalabilità orizzontale classica. Route 53 + CloudFront gestisce DNS e CDN. VPC + Security Group è networking/sicurezza. CloudWatch + SNS è monitoring e notifiche.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — EC2 & Compute',
    text: `<strong>EC2 = IaaS:</strong> AWS gestisce l'hardware, tu gestisci OS, patch, app<br><br>
<strong>Pricing models:</strong><br>
On-Demand = flessibile, no impegno<br>
Reserved (1-3 anni) = workload stabili, -72%<br>
Spot = interrompibile, -90%, solo per batch/fault-tolerant<br>
Savings Plans = impegno di spesa, flessibile su tipo istanza<br>
Dedicated Host = licenze hardware, compliance<br><br>
<strong>Famiglie istanze:</strong> t/m (general) · c (compute) · r/x (memory) · i/d (storage) · p/g (GPU)<br><br>
<strong>AMI:</strong> template regionale · custom AMI per deployare istanze identiche<br><br>
<strong>Auto Scaling:</strong> min/desired/max · trigger CloudWatch<br><br>
<strong>ELB:</strong> ALB (HTTP layer 7) · NLB (TCP layer 4)`,
    analogy: `EC2 è il motore dell'auto. Pricing = tipo di noleggio. Auto Scaling = turbo automatico. ELB = distributore del traffico. AMI = chiave duplicata.`,
  },

  /* ── QUIZ FINALE ── */
  {
    type: 'quiz',
    q: "Quale modello di prezzo EC2 offre lo sconto maggiore ma può essere interrotto da AWS con 2 minuti di preavviso?",
    opts: [
      'Reserved Instances',
      'On-Demand',
      'Savings Plans',
      'Spot Instances',
    ],
    a: 3,
    explain: `✅ Le Spot Instances usano capacità EC2 inutilizzata con sconti fino al 90%, ma AWS può interromperle con 2 minuti di preavviso quando riacquista la capacità. Reserved ha sconto alto ma richiede impegno, non viene interrotto. Savings Plans è flessibile ma non interrompibile. On-Demand è il più caro ma sempre disponibile.`,
  },

];
