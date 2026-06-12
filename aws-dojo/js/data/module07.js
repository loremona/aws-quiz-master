'use strict';
const MODULE07 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Serverless & Container',
    text: `Questo modulo copre i servizi AWS per eseguire codice <strong>senza gestire server</strong>:<br><br>
• <strong>Lambda</strong> — funzioni serverless, paghi solo le esecuzioni<br>
• <strong>ECS</strong> — container Docker su AWS<br>
• <strong>Fargate</strong> — container serverless (niente EC2 da gestire)<br>
• <strong>EKS</strong> — Kubernetes managed<br>
• <strong>Elastic Beanstalk</strong> — deploy semplificato di app<br><br>
La domanda chiave: <em>quando usare Lambda vs container vs EC2?</em>`,
    analogy: `EC2 = affitti un appartamento e gestisci tutto. Container = porti la tua casa prefabbricata ovunque. Lambda = prenoti una stanza in hotel solo per le notti che dormi — paghi solo quelle.`,
  },

  /* ── LEZIONE: Lambda ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'AWS Lambda: Serverless Functions',
    text: `<strong>AWS Lambda</strong> esegue codice in risposta a eventi senza che tu gestisca alcun server.<br><br>
Come funziona:<br>
• Carichi il codice (Python, Node.js, Java, Go…)<br>
• Definisci un <strong>trigger</strong> (API Gateway, S3 upload, DynamoDB stream, EventBridge…)<br>
• Lambda esegue la funzione e si ferma<br>
• Paghi solo il tempo di esecuzione (per millisecondo)<br><br>
Limiti da sapere per l'esame:<br>
• Timeout massimo: <strong>15 minuti</strong><br>
• Memoria: fino a 10 GB<br>
• Perfetto per task brevi e basati su eventi, non per processi lunghi`,
    analogy: `Lambda è un elettricista a chiamata: arriva solo quando serve, fa il lavoro in pochi minuti e se ne va. Non lo paghi quando non lavora. Non ha bisogno di un ufficio fisso (server).`,
  },

  /* ── QUIZ: Lambda ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole ridimensionare automaticamente le immagini caricate su S3 senza gestire server. Quale servizio è più adatto?",
    opts: [
      'EC2 con Auto Scaling — per gestire i picchi di carico',
      'AWS Lambda triggered da S3 — esecuzione event-driven senza server',
      'Amazon ECS con Fargate — container per l\'elaborazione immagini',
      'AWS Batch — per elaborazioni batch pianificate',
    ],
    a: 1,
    explain: `✅ Lambda è perfetto: ogni upload su S3 scatena automaticamente la funzione che ridimensiona l'immagine. Nessun server da gestire, paghi solo le esecuzioni. EC2 + Auto Scaling è sovradimensionato per questo caso. ECS/Fargate funziona ma è più complesso. AWS Batch è per job pianificati, non event-driven immediati.`,
  },

  /* ── LEZIONE: Container e Docker ── */
  {
    type: 'lesson',
    emoji: '📦',
    title: 'Container: Docker su AWS',
    text: `Un <strong>container</strong> impacchetta un'app con tutte le sue dipendenze in un'unità portabile. Stesso comportamento ovunque venga eseguito.<br><br>
Su AWS hai tre modi per eseguire container:<br><br>
<strong>ECS (Elastic Container Service)</strong> — orchestratore container nativo AWS. Gestisci tu il cluster di EC2 sottostante (<em>EC2 launch type</em>) oppure usi Fargate.<br><br>
<strong>AWS Fargate</strong> — esegui container <strong>senza gestire EC2</strong>. Serverless per container: definisci CPU/RAM necessari, Fargate provvede l'infrastruttura in modo trasparente.<br><br>
<strong>EKS (Elastic Kubernetes Service)</strong> — Kubernetes managed su AWS. Sceglilo se hai già competenze Kubernetes o vuoi portabilità multi-cloud.`,
    analogy: `ECS su EC2 = gestisci tu il magazzino e i corrieri. Fargate = chiami un corriere espresso (AWS gestisce tutto). EKS = usi lo stesso sistema di spedizione Kubernetes che usi altrove.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🚀',
    title: 'Lambda esegue miliardi di funzioni al giorno',
    text: `AWS Lambda elabora <strong>miliardi di eventi al giorno</strong> per i clienti. Netflix usa Lambda per elaborare i log di visualizzazione in tempo reale. Coca-Cola usa Lambda per gestire i pagamenti alle vending machine.<br><br>
Il modello serverless ha cambiato l'economia del software: una startup può gestire milioni di eventi al giorno spendendo <strong>pochi centesimi</strong>, senza pagare server inattivi la notte.`,
  },

  /* ── LEZIONE: Elastic Beanstalk ── */
  {
    type: 'lesson',
    emoji: '🌱',
    title: 'Elastic Beanstalk: PaaS su AWS',
    text: `<strong>AWS Elastic Beanstalk</strong> è un servizio PaaS che gestisce automaticamente il deploy di applicazioni web.<br><br>
Tu fornisci: il codice (Java, Python, Node.js, PHP, Ruby, Go, .NET)<br>
Beanstalk gestisce: EC2, ELB, Auto Scaling, monitoring, aggiornamenti OS<br><br>
Non ha costi aggiuntivi — paghi solo le risorse AWS sottostanti (EC2, ELB, ecc.).<br><br>
Quando usarlo:<br>
✅ Sviluppatori che vogliono deployare velocemente senza configurare l'infrastruttura<br>
❌ Se hai bisogno di controllo fine sull'infrastruttura → usa EC2 direttamente`,
    analogy: `Beanstalk è come un appartamento arredato chiavi in mano: porti solo i vestiti (il codice) e trovi tutto già pronto. EC2 è la casa vuota: la arredi tu come vuoi.`,
  },

  /* ── QUIZ: EC2 vs Lambda vs Fargate ── */
  {
    type: 'quiz',
    q: "Quale affermazione descrive correttamente AWS Fargate?",
    opts: [
      'Un servizio per eseguire funzioni serverless in risposta a eventi',
      'Un tipo di istanza EC2 ottimizzata per container',
      'Un motore serverless per container che elimina la gestione dell\'infrastruttura EC2',
      'Un servizio per orchestrare container Kubernetes',
    ],
    a: 2,
    explain: `✅ Fargate è il motore serverless per container di AWS: esegui container ECS o EKS senza gestire istanze EC2. AWS provvede l'infrastruttura in modo trasparente. Lambda esegue funzioni (non container). Fargate non è un tipo di istanza EC2. EKS è l'orchestratore Kubernetes — Fargate può essere il motore di esecuzione sotto EKS.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Serverless & Container',
    text: `<strong>Lambda:</strong> event-driven · nessun server · timeout max 15 min · paghi per ms · trigger: S3, API Gateway, DynamoDB…<br><br>
<strong>ECS:</strong> container Docker nativo AWS · EC2 launch type (gestisci tu EC2) o Fargate launch type<br><br>
<strong>Fargate:</strong> serverless per container · nessuna EC2 da gestire · ECS + Fargate = combo classica<br><br>
<strong>EKS:</strong> Kubernetes managed · per chi già usa K8s o vuole portabilità<br><br>
<strong>Elastic Beanstalk:</strong> PaaS · deploy rapido · gestisce EC2/ELB/ASG automaticamente · no costi extra<br><br>
<strong>Scelta:</strong> task brevi/event-driven → Lambda · container senza server → Fargate · controllo totale → EC2`,
    analogy: `Lambda = elettricista a chiamata. Fargate = container hotel. ECS = tuo magazzino container. EKS = sistema di spedizione Kubernetes. Beanstalk = appartamento chiavi in mano.`,
  },

];
