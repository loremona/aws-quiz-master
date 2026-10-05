/* Generato automaticamente da convert_quiz.py — non modificare a mano */
const QUIZ_BANK = [
  {
    "q": "Un utente sta pianificando di migrare un carico di lavoro applicativo nel cloud AWS. Quale controllo diventa responsabilità di AWS una volta completata la migrazione?",
    "opts": [
      "Applicare le patch al sistema operativo guest",
      "Mantenere i controlli fisici e ambientali",
      "Proteggere le comunicazioni e mantenere la sicurezza della zona",
      "Applicare le patch ad applicazioni specifiche"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "2db30614282b",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica e dei controlli ambientali dei data center: alimentazione, raffreddamento, controllo accessi fisici e distruzione dei dispositivi a fine vita. Nel modello Shared Responsibility, AWS gestisce tutta la sicurezza fisica dell'infrastruttura. Il cliente è responsabile della sicurezza a livello software, dati e configurazioni."
  },
  {
    "q": "Quali servizi possono essere usati per distribuire applicazioni su AWS? (Scegline due.)",
    "opts": [
      "AWS Elastic Beanstalk",
      "AWS Config",
      "AWS OpsWorks",
      "AWS Application Discovery Service",
      "Amazon Kinesis"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Analytics"
    ],
    "id": "7e5fdf61fe94",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale servizio AWS può essere usato per fornire un contact center on-demand basato sul cloud?",
    "opts": [
      "AWS Direct Connect",
      "Amazon Connect",
      "AWS Support Center",
      "AWS Managed Services"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Networking"
    ],
    "id": "11d09fe408ca",
    "explain": "Amazon Connect è un servizio di contact center cloud scalabile senza hardware. Supporta chiamate vocali e chat con routing intelligente. Si paga a minuto di utilizzo."
  },
  {
    "q": "Quale strumento permette ai clienti senza un account AWS di stimare i costi di quasi tutti i servizi AWS?",
    "opts": [
      "Cost Explorer",
      "TCO Calculator",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "9f7a13e3ace4",
    "explain": "AWS Pricing Calculator stima il costo mensile dei servizi AWS prima di iniziare. Confronta scenari diversi senza bisogno di un account AWS."
  },
  {
    "q": "Quale componente deve essere collegato a un VPC per consentire l'accesso in entrata da Internet?",
    "opts": [
      "NAT gateway",
      "VPC endpoint",
      "Connessione VPN",
      "Internet gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "e2a7a0ce2c6b",
    "explain": "Un Internet Gateway permette la comunicazione tra istanze VPC e internet. Deve essere collegato alla VPC e le subnet pubbliche devono avere una route verso 0.0.0.0/0 che punta a esso."
  },
  {
    "q": "Quale modello di prezzo darebbe il massimo risparmio su Amazon Elastic Compute Cloud (Amazon EC2) per un server di database che deve restare online per un anno?",
    "opts": [
      "Istanza Spot",
      "Istanza On-Demand",
      "Istanza Reserved con pagamento anticipato parziale (Partial Upfront)",
      "Istanza Reserved senza pagamento anticipato (No Upfront)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "b7a45553f150",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Un'azienda ha un database MySQL in esecuzione su una singola istanza Amazon EC2. Ora l'azienda ha bisogno di una disponibilità più alta in caso di interruzione. Quale insieme di attività soddisfa questo requisito?",
    "opts": [
      "Aggiungere un Application Load Balancer davanti all'istanza EC2",
      "Configurare EC2 Auto Recovery per spostare l'istanza in un'altra Availability Zone",
      "Migrare su Amazon RDS e abilitare Multi-AZ",
      "Abilitare la protezione dalla terminazione dell'istanza EC2 per evitare interruzioni"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "737738c3d43c",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Un'azienda vuole assicurarsi che gli utenti della AWS Management Console rispettino i requisiti di complessità delle password. Come può l'azienda configurare la complessità delle password?",
    "opts": [
      "Usando una policy utente AWS IAM",
      "Usando una service control policy (SCP) di AWS Organizations",
      "Usando una policy delle password dell'account AWS IAM",
      "Usando un managed insight di AWS Security Hub"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "AI / ML"
    ],
    "id": "059a8046ae76",
    "explain": "Le policy di password IAM definiscono i requisiti per le password degli utenti AWS: lunghezza minima, complessità, scadenza e riuso. Permettono agli amministratori di imporre standard di sicurezza. Si configurano nella console IAM e si applicano a tutti gli utenti dell'account."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quale delle seguenti è responsabilità del cliente?",
    "opts": [
      "Applicare le patch al sistema operativo guest e alle applicazioni",
      "Applicare le patch e correggere i difetti dell'infrastruttura",
      "Controlli fisici e ambientali",
      "Configurazione dei dispositivi dell'infrastruttura AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "2288f3e3f93b",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale delle seguenti attività è necessaria per distribuire su AWS un carico di lavoro conforme a PCI?",
    "opts": [
      "Usare qualsiasi servizio AWS e implementare i controlli PCI a livello di applicazione",
      "Usare un servizio AWS che rientra nell'ambito (in scope) della conformità PCI e aprire un ticket di supporto AWS per abilitare la conformità PCI a livello di applicazione",
      "Usare qualsiasi servizio AWS e aprire un ticket di supporto AWS per abilitare la conformità PCI su quel servizio",
      "Usare un servizio AWS che rientra nell'ambito (in scope) della conformità PCI e applicare i controlli PCI a livello di applicazione"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "be6d9fd38e90",
    "explain": "Per workload PCI-compliant su AWS bisogna usare servizi in scope PCI DSS e implementare i controlli a livello applicativo. AWS Artifact fornisce il certificato PCI DSS. La responsabilità è condivisa tra AWS (infrastruttura) e cliente (applicazioni e dati)."
  },
  {
    "q": "Un'azienda sta costruendo un'applicazione che deve poter inviare, conservare e ricevere messaggi tra i componenti dell'applicazione. Un altro requisito dell'azienda è elaborare i messaggi in ordine first-in, first-out (FIFO). Quale servizio AWS dovrebbe usare l'azienda?",
    "opts": [
      "AWS Step Functions",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Kinesis Data Streams",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "SNS",
      "SQS",
      "Analytics"
    ],
    "id": "5fd78ef2018d",
    "explain": "Amazon SQS è una coda di messaggi che disaccoppia i componenti di un'applicazione distribuita. Supporta code Standard e FIFO. Agisce come buffer tra producer e consumer."
  },
  {
    "q": "AnyCompany ha acquistato da poco Example Corp. Entrambe le aziende usano risorse AWS, e AnyCompany vuole un'unica fattura aggregata. Quale opzione permette ad AnyCompany di ricevere una fattura unica?",
    "opts": [
      "Example Corp. deve inviare una richiesta al proprio solutions architect AWS o al technical account manager AWS per collegare gli account e consolidare la fatturazione.",
      "AnyCompany deve aprire un nuovo caso di supporto nell'AWS Support Center chiedendo di unire le due fatture.",
      "Inviare a Example Corp. un invito a entrare nell'organizzazione dall'account master di AWS Organizations di AnyCompany.",
      "Migrare i VPC, le istanze Amazon EC2 e le altre risorse di Example Corp. nell'account AWS di AnyCompany."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Billing & Cost"
    ],
    "id": "c8a7c4a2c880",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale strumento può essere usato per creare avvisi quando il costo effettivo o previsto dei servizi AWS supera una certa soglia?",
    "opts": [
      "Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "de0618fa24c7",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Un utente ha una conoscenza limitata dei servizi AWS, ma vuole distribuire rapidamente un'applicazione Node.js scalabile nel cloud AWS. Quale servizio dovrebbe essere usato per distribuire l'applicazione?",
    "opts": [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS OpsWorks"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ],
    "id": "530638ab2413",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale controllo di AWS Trusted Advisor è disponibile per tutti gli utenti AWS?",
    "opts": [
      "Controlli di base (core checks)",
      "Tutti i controlli",
      "Controlli di ottimizzazione dei costi",
      "Controlli di tolleranza ai guasti"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support",
      "Well-Architected"
    ],
    "id": "5c6f6f11c32f",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Uno sviluppatore web teme che un attacco DDoS possa prendere di mira un'applicazione. Quali servizi o funzionalità AWS possono aiutare a proteggersi da un attacco del genere? (Scegline due.)",
    "opts": [
      "AWS Shield",
      "AWS CloudTrail",
      "Amazon CloudFront",
      "AWS Support Center",
      "AWS Service Health Dashboard"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Security"
    ],
    "id": "bb2bc21f2f3f",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale servizio AWS offre agli utenti un accesso on-demand e self-service ai report sui controlli di conformità di AWS?",
    "opts": [
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "AWS Artifact"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ],
    "id": "fb7760aa1894",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Un'azienda vuole dare a uno dei suoi dipendenti l'accesso ad Amazon RDS. L'azienda vuole anche limitare l'interazione alla sola AWS CLI e ai software development kit (SDK) di AWS. Quale combinazione di azioni dovrebbe intraprendere l'azienda per soddisfare questi requisiti rispettando il principio del privilegio minimo? (Scegline due.)",
    "opts": [
      "Creare un utente IAM e fornire solo l'accesso alla AWS Management Console.",
      "Creare un utente IAM e fornire solo l'accesso programmatico.",
      "Creare un ruolo IAM e fornire solo l'accesso alla AWS Management Console.",
      "Creare una policy IAM con accesso da amministratore e collegarla all'utente IAM.",
      "Creare una policy IAM con accesso ad Amazon RDS e collegarla all'utente IAM."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "8686ab994274",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Un'azienda ha un requisito di conformità che le impone di registrare e valutare le modifiche di configurazione, oltre a eseguire azioni correttive sulle risorse AWS. Quale servizio AWS dovrebbe usare l'azienda?",
    "opts": [
      "AWS Config",
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS Trusted Advisor"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "885f4dd5d4e6",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Quali sono i vantaggi di distribuire un'applicazione con istanze Amazon EC2 in più Availability Zone? (Scegline due.)",
    "opts": [
      "Evitare un single point of failure (punto unico di guasto)",
      "Ridurre i costi operativi dell'applicazione",
      "Permettere all'applicazione di servire utenti di altre Regioni con bassa latenza",
      "Aumentare la disponibilità dell'applicazione",
      "Aumentare il carico dell'applicazione"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "11c0a19b6046",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Un carico di lavoro su AWS girerà per il prossimo futuro usando un numero costante di istanze Amazon EC2. Quale modello di prezzo ridurrà al minimo i costi garantendo che le risorse di calcolo restino disponibili?",
    "opts": [
      "Dedicated Hosts",
      "Istanze On-Demand",
      "Istanze Spot",
      "Istanze Reserved"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "a7ef7b3c2758",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale strumento può essere usato per individuare le modifiche programmate all'infrastruttura AWS?",
    "opts": [
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor",
      "Billing Dashboard",
      "AWS Config"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "784576ac5a1a",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Quale delle seguenti è responsabilità del cliente quando usa Amazon RDS?",
    "opts": [
      "Applicare le patch al sistema operativo dell'hardware sottostante",
      "Controllare il traffico da e verso il database tramite i security group",
      "Eseguire i backup che permettono il ripristino point-in-time di un'istanza DB",
      "Sostituire le istanze DB guaste"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC"
    ],
    "id": "7d65faea3588",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Qual è la responsabilità del cliente quando usa AWS Lambda?",
    "opts": [
      "Configurazione del sistema operativo",
      "Gestione dell'applicazione",
      "Gestione della piattaforma",
      "Cifratura del codice"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Security"
    ],
    "id": "378b4ddb5b89",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Un'azienda vuole essere avvisata quando i costi o l'utilizzo del cloud AWS superano soglie definite. Quale servizio AWS soddisfa questi requisiti?",
    "opts": [
      "AWS Budgets",
      "Cost Explorer",
      "AWS CloudTrail",
      "Amazon Macie"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security"
    ],
    "id": "8d7e6a01fb74",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Quale servizio AWS offre la possibilità di ospitare un database NoSQL nel cloud AWS?",
    "opts": [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "f9e2459efc24",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quale servizio AWS permette ai clienti di acquistare capacità Amazon EC2 inutilizzata, spesso a un prezzo scontato?",
    "opts": [
      "Istanze Reserved",
      "Istanze On-Demand",
      "Istanze Dedicated",
      "Istanze Spot"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "aa42bc21ac24",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio o funzionalità AWS richiede, per essere implementato, un internet service provider (ISP) e una struttura di colocation?",
    "opts": [
      "AWS VPN",
      "Amazon Connect",
      "AWS Direct Connect",
      "Internet gateway"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "29898d7c65df",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quali servizi AWS offrono capacità di calcolo? (Scegline due.)",
    "opts": [
      "Amazon EC2",
      "Amazon S3",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Cognito",
      "AWS Lambda"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "Security",
      "Storage"
    ],
    "id": "7ef759af0c7c",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS può essere usato per conservare e gestire in modo privato le versioni del codice sorgente?",
    "opts": [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodePipeline",
      "AWS CodeStar"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "82114d271e5e",
    "explain": "AWS CodeCommit è un servizio Git privato e gestito. Si integra con IAM e CodePipeline per CI/CD."
  },
  {
    "q": "Quale servizio AWS dovrebbe usare un cloud practitioner per individuare le vulnerabilità di sicurezza di un account AWS?",
    "opts": [
      "AWS Secrets Manager",
      "Amazon Cognito",
      "Amazon Macie",
      "AWS Trusted Advisor"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "0dd71e55bc33",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Un'azienda vuole assicurarsi che la propria infrastruttura sia progettata per la tolleranza ai guasti e la continuità operativa in caso di un evento ambientale dannoso. Su quale componente dell'infrastruttura AWS dovrebbe replicarsi l'azienda?",
    "opts": [
      "Edge location",
      "Availability Zone",
      "Regioni",
      "Amazon Route 53"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53"
    ],
    "id": "b4a3f2ed7119",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale servizio o funzionalità AWS si usa per inviare sia SMS sia email da applicazioni distribuite?",
    "opts": [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Email Service (Amazon SES)",
      "Avvisi di Amazon CloudWatch",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "SNS",
      "SQS"
    ],
    "id": "53fd2097a602",
    "explain": "Amazon SNS è un servizio pub/sub per comunicazione many-to-many. Publisher inviano a topic e SNS distribuisce a subscriber (Lambda, SQS, email, SMS)."
  },
  {
    "q": "Quali principi di progettazione del cloud AWS possono aiutare ad aumentare l'affidabilità? (Scegline due.)",
    "opts": [
      "Usare un'architettura monolitica",
      "Misurare l'efficienza complessiva",
      "Testare le procedure di ripristino",
      "Adottare un modello a consumo",
      "Ripristinare automaticamente dopo un guasto"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "dadbe0c79d48",
    "explain": "Il pillar Reliability del Well-Architected Framework garantisce che un workload esegua la sua funzione in modo coerente. Include recupero automatico dai guasti, scaling orizzontale e testing del disaster recovery."
  },
  {
    "q": "Un'azienda sta pianificando di lanciare un sito di ecommerce in una singola Regione AWS per un pubblico di utenti in tutto il mondo. Quali servizi AWS permetteranno all'azienda di raggiungere gli utenti offrendo bassa latenza e alte velocità di trasferimento? (Scegline due.)",
    "opts": [
      "Application Load Balancer",
      "AWS Global Accelerator",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Lambda"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "CloudFront",
      "Networking"
    ],
    "id": "c17f90203286",
    "explain": "AWS Global Accelerator instrada il traffico attraverso la rete backbone privata AWS. Usa IP anycast statici per dirigere gli utenti all'endpoint più vicino. Migliora disponibilità e performance per applicazioni globali."
  },
  {
    "q": "Un'azienda vuole collegarsi ad AWS dalla sua sede remota tramite una connessione privata e a bassa latenza. Qual è il metodo consigliato per soddisfare questi requisiti?",
    "opts": [
      "Creare un tunnel VPN",
      "Collegarsi attraverso la rete Internet pubblica",
      "Usare il VPC peering per creare una connessione.",
      "Usare AWS Direct Connect."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "09cb638a1429",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quale servizio AWS può essere usato per ottenere su richiesta i report di conformità?",
    "opts": [
      "AWS Secrets Manager",
      "AWS Artifact",
      "AWS Security Hub",
      "AWS Certificate Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "5a91621947bc",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Un'azienda ha un sito web ospitato su AWS dietro un Application Load Balancer. L'azienda vuole proteggere il sito da SQL injection e cross-site scripting. Quale servizio AWS dovrebbe usare l'azienda?",
    "opts": [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security",
      "Storage",
      "Support"
    ],
    "id": "b40ef19a0cd5",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Come dovrebbe essere distribuita un'applicazione web per garantire l'alta disponibilità nel cloud AWS?",
    "opts": [
      "Distribuire più istanze dell'applicazione in più Availability Zone.",
      "Distribuire più istanze dell'applicazione in una singola Availability Zone.",
      "Distribuire l'applicazione su un'istanza Amazon EC2 ottimizzata per il calcolo in una singola Availability Zone.",
      "Distribuire l'applicazione su un'istanza Amazon EC2 in un gruppo di Auto Scaling."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "b44cd8fd97b4",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Un'azienda usa per il suo database a carico costante un database Oracle autogestito che gira direttamente su Amazon EC2. L'azienda vuole ridurre i costi di calcolo. Quale opzione dovrebbe usare per massimizzare il risparmio su un periodo di 3 anni?",
    "opts": [
      "Istanze EC2 Dedicated",
      "Istanze EC2 Spot",
      "Istanze EC2 Reserved",
      "Istanze EC2 On-Demand"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "50d62768ef03",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un revisore esterno ha chiesto a un'azienda di fornire l'elenco di tutti i suoi utenti IAM, compreso lo stato delle credenziali e delle chiavi di accesso degli utenti. Qual è il modo PIÙ SEMPLICE per fornire queste informazioni?",
    "opts": [
      "Creare un account utente IAM per il revisore, concedendogli i permessi di amministratore.",
      "Fare uno screenshot della pagina di ogni utente nella AWS Management Console, poi fornire gli screenshot al revisore.",
      "Scaricare il credential report di IAM, poi fornire il report al revisore.",
      "Scaricare il report di AWS Trusted Advisor, poi fornire il report al revisore."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Support"
    ],
    "id": "668c40a238d4",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quali sono i vantaggi della fatturazione consolidata per i servizi del cloud AWS? (Scegline due.)",
    "opts": [
      "Sconti sui volumi",
      "Un costo aggiuntivo minimo per l'utilizzo",
      "Un'unica fattura per più account",
      "Possibilità di pagamento rateale",
      "Creazione di budget personalizzati per costi e utilizzo"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "a47a9dcb701e",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Un'azienda si aspetta un picco di traffico Internet di breve durata per la sua applicazione. Durante l'aumento di traffico l'applicazione non può essere interrotta. L'azienda deve anche ridurre al minimo i costi e massimizzare la flessibilità. Quale tipo di istanza Amazon EC2 dovrebbe usare l'azienda per soddisfare questi requisiti?",
    "opts": [
      "Istanze On-Demand",
      "Istanze Spot",
      "Istanze Reserved",
      "Dedicated Hosts"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "b61c2151768d",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda vuole tracciare le modifiche di configurazione delle risorse AWS per motivi di conformità. Quale funzionalità AWS può essere usata per soddisfare questo requisito?",
    "opts": [
      "AWS Cost and Usage Report",
      "Service control policy (SCP) di AWS Organizations",
      "Regole di AWS Config",
      "VPC Flow Logs"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "fb69d5f63be4",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Un'azienda sta costruendo un'applicazione che deve distribuire immagini e video in tutto il mondo con una latenza minima. Quale approccio può usare l'azienda per farlo in modo economico?",
    "opts": [
      "Distribuire i contenuti tramite Amazon CloudFront.",
      "Conservare i contenuti su Amazon S3 e abilitare la replica tra Regioni di S3.",
      "Implementare una VPN su più Regioni AWS.",
      "Distribuire i contenuti tramite AWS PrivateLink."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront"
    ],
    "id": "382021485fe6",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "La best practice di AWS IAM per concedere il privilegio minimo è:",
    "opts": [
      "applicare una policy IAM a un gruppo IAM e limitare la dimensione del gruppo.",
      "richiedere l'autenticazione a più fattori (MFA) per tutti gli utenti IAM.",
      "richiedere che ogni utente IAM con permessi diversi abbia più password.",
      "applicare una policy IAM solo agli utenti IAM che ne hanno bisogno."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "9d19bec146aa",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale vantaggio del cloud computing dimostra AWS con la sua capacità di offrire costi variabili più bassi grazie a volumi di acquisto elevati?",
    "opts": [
      "Prezzi pay-as-you-go (a consumo)",
      "Alta disponibilità",
      "Portata globale",
      "Economie di scala"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "64c165e8ec6b",
    "explain": "Le economie di scala di AWS derivano dall'aggregazione di migliaia di clienti, riducendo i costi per unità. Questi risparmi vengono trasferiti ai clienti con riduzioni periodiche dei prezzi. I clienti beneficiano di prezzi enterprise anche con utilizzi ridotti."
  },
  {
    "q": "Un'azienda farmaceutica gestisce la propria infrastruttura in una singola Regione AWS. L'azienda ha migliaia di VPC in vari account AWS che vuole collegare tra loro. Quale servizio o funzionalità AWS dovrebbe usare l'azienda per semplificare la gestione e ridurre i costi operativi?",
    "opts": [
      "VPC endpoint",
      "AWS Direct Connect",
      "AWS Transit Gateway",
      "VPC peering"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "b946af33b775",
    "explain": "AWS Transit Gateway è un hub che semplifica la connettività tra VPC e reti on-premise con un modello hub-and-spoke. Connette fino a 5000 VPC eliminando peering mesh complesse."
  },
  {
    "q": "In che modo AWS può permettere a un'azienda di controllare le spese quando l'utilizzo di un'applicazione cambia in modo imprevedibile?",
    "opts": [
      "AWS rimborserà la differenza di costo se un cliente passa a server più grandi.",
      "L'applicazione può essere costruita per scalare automaticamente in su o in giù in base alle risorse necessarie",
      "Le istanze Spot verranno usate automaticamente se il prezzo è più basso di quello delle istanze On-Demand.",
      "Amazon CloudWatch prevederà automaticamente quali risorse sono necessarie."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "ece1ad8b6115",
    "explain": "L'elasticità cloud AWS permette di scalare automaticamente le risorse in risposta alla domanda reale, senza dover fare previsioni di capacità in anticipo. Questo riduce il TCO eliminando sia il sovra-provisioning (sprechi) che il sotto-provisioning (performance degradate). Si paga solo per le risorse effettivamente usate, adattando automaticamente la capacità al carico."
  },
  {
    "q": "Quale servizio o funzionalità AWS può essere usato per prevenire gli attacchi di SQL injection?",
    "opts": [
      "Security group",
      "Network ACL",
      "AWS WAF",
      "Policy IAM"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "Security"
    ],
    "id": "94139d022e46",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Un amministratore deve distribuire rapidamente una soluzione IT molto diffusa e iniziare a usarla subito. Dove può trovare assistenza l'amministratore?",
    "opts": [
      "Nella documentazione dell'AWS Well-Architected Framework.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "Nelle distribuzioni di riferimento AWS Quick Start."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Well-Architected"
    ],
    "id": "e899260a27b0",
    "explain": "Gli AWS Quick Start automatizzano il deployment di soluzioni popolari usando CloudFormation. Permettono di deployare in pochi minuti architetture complesse. Sviluppati da AWS e partner certificati seguendo le best practice."
  },
  {
    "q": "Qual è uno dei vantaggi di Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "Semplifica le attività di amministrazione dei database relazionali.",
      "Offre un'affidabilità e una durabilità del 99,99999999999%.",
      "Scala automaticamente i database in base al carico.",
      "Permette agli utenti di regolare dinamicamente le risorse di CPU e RAM."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "7c0f98396f85"
  },
  {
    "q": "Quale dei seguenti servizi del cloud AWS può essere usato per eseguire un database relazionale gestito dal cliente?",
    "opts": [
      "Amazon EC2.",
      "Amazon Route 53.",
      "Amazon ElastiCache.",
      "Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "DynamoDB"
    ],
    "id": "5387e2c9cf31",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un utente sta pianificando di avviare due istanze Amazon EC2 aggiuntive per aumentare la disponibilità. Quale azione dovrebbe intraprendere l'utente?",
    "opts": [
      "Avviare le istanze in più Availability Zone di una singola Regione AWS.",
      "Avviare le istanze come Istanze Reserved EC2 nella stessa Regione AWS e nella stessa Availability Zone.",
      "Avviare le istanze in più Regioni AWS ma nella stessa Availability Zone.",
      "Avviare le istanze come Istanze Spot EC2 nella stessa Regione AWS ma in Availability Zone diverse."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "25d6848a8f9d",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale dei seguenti strumenti può limitare l'accesso a un bucket Amazon Simple Storage Service (Amazon S3) a utenti specifici?",
    "opts": [
      "Una coppia di chiavi pubblica e privata.",
      "Amazon Inspector.",
      "Le policy di AWS Identity and Access Management (IAM).",
      "I security group."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ],
    "id": "2ef0edd24de4",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale servizio AWS permette alle aziende di collegare un Amazon VPC a un data center on-premises? (Scegline DUE)",
    "opts": [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "Amazon Direct Connect."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Analytics",
      "Networking"
    ],
    "id": "0c519d2087a7",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quale servizio o funzionalità AWS può essere usato per monitorare l'utilizzo della CPU?",
    "opts": [
      "AWS CloudTrail.",
      "VPC Flow Logs.",
      "Amazon CloudWatch.",
      "AWS Config."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch"
    ],
    "id": "a176d1439fea",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Di quale attività è responsabile AWS nel modello di responsabilità condivisa per la sicurezza e la conformità?",
    "opts": [
      "Concedere l'accesso a persone e servizi.",
      "Cifrare i dati in transito.",
      "Aggiornare il firmware degli host Amazon EC2.",
      "Aggiornare i sistemi operativi."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ],
    "id": "000140f98eed",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale delle seguenti azioni legate alla sicurezza è disponibile senza costi?",
    "opts": [
      "Chiamare l'AWS Support.",
      "Contattare gli AWS Professional Services per richiedere un workshop.",
      "Consultare forum, blog e whitepaper.",
      "Frequentare corsi AWS in un'università locale."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "69b8c7fe43a6",
    "explain": "AWS mette a disposizione gratuitamente numerose risorse di sicurezza e formazione: documentazione ufficiale, whitepaper, blog AWS, Security Bulletins, AWS Online Tech Talks e forum della community. Queste risorse sono accessibili a tutti i clienti indipendentemente dal piano Support. Per supporto tecnico diretto invece è necessario un piano a pagamento."
  },
  {
    "q": "Quale servizio di storage può essere usato come opzione a basso costo per ospitare siti web statici?",
    "opts": [
      "Amazon Glacier.",
      "Amazon DynamoDB.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Simple Storage Service (Amazon S3)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Storage"
    ],
    "id": "3d773fbf7624",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, qual è la responsabilità esclusiva di AWS?",
    "opts": [
      "La sicurezza delle applicazioni.",
      "La gestione delle edge location.",
      "La gestione delle patch.",
      "I dati lato client."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ],
    "id": "a36327b2e493",
    "explain": "Le edge location di AWS ospitano CloudFront e Route 53 per avvicinare contenuti agli utenti finali. Ci sono più edge location che Availability Zones e Regioni. Riducono la latenza distribuendo i contenuti in tutto il mondo."
  },
  {
    "q": "Quali dei seguenti sono pilastri dell'AWS Well-Architected Framework? (Scegline DUE)",
    "opts": [
      "Più Availability Zone.",
      "Efficienza delle prestazioni.",
      "Sicurezza.",
      "Uso della cifratura.",
      "Alta disponibilità."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ],
    "id": "ea89e907471b",
    "explain": "Il pillar Performance Efficiency del Well-Architected Framework si concentra sull'uso efficiente delle risorse. Include la scelta del tipo di risorsa giusto, monitoraggio delle performance e adozione di nuove tecnologie."
  },
  {
    "q": "Quale servizio AWS individua i security group che consentono un accesso senza restrizioni alle risorse AWS di un utente?",
    "opts": [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch",
      "Security",
      "Support"
    ],
    "id": "e47bcad25597",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali principi di progettazione dell'architettura cloud sono consigliati quando si riprogetta una grande applicazione monolitica? (Scegline DUE)",
    "opts": [
      "Usare il monitoraggio manuale.",
      "Usare server fissi.",
      "Implementare l'accoppiamento debole (loose coupling).",
      "Affidarsi a singoli componenti.",
      "Progettare per la scalabilità."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch"
    ],
    "id": "6761183747ac",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Quando si progettano applicazioni cloud, quale dei seguenti è un principio di progettazione fondamentale?",
    "opts": [
      "Usare l'istanza più grande possibile.",
      "Predisporre capacità per il carico di picco.",
      "Usare il processo di sviluppo Scrum.",
      "Implementare l'elasticità."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "ee077f39425c",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Un'azienda ha distribuito diversi database relazionali su istanze Amazon EC2. Ogni mese il fornitore del software di database rilascia nuove patch di sicurezza che devono essere applicate ai database. Qual è il modo PIÙ efficiente per applicare le patch di sicurezza?",
    "opts": [
      "Collegarsi ogni mese a ciascuna istanza di database, scaricare dal fornitore le patch di sicurezza necessarie e applicarle.",
      "Abilitare l'applicazione automatica delle patch per le istanze dalla console di Amazon RDS.",
      "In AWS Config, configurare una regola per le istanze e il livello di patch richiesto.",
      "Usare AWS Systems Manager per automatizzare l'applicazione delle patch ai database secondo una pianificazione."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "36bd4ab13abf",
    "explain": "AWS Systems Manager fornisce controllo centralizzato dell'infrastruttura. Include Patch Manager, Run Command, Parameter Store e Session Manager per accesso sicuro senza SSH/RDP."
  },
  {
    "q": "Quale meccanismo permette agli sviluppatori di accedere ai servizi AWS dal codice delle applicazioni?",
    "opts": [
      "AWS Software Development Kit.",
      "AWS Management Console.",
      "AWS CodePipeline.",
      "AWS Config."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "fb8330afe9a1",
    "explain": "L'AWS SDK (Software Development Kit) permette agli sviluppatori di interagire con i servizi AWS dal codice applicativo in Python, JavaScript, Java, C# e altri linguaggi. Gestisce autenticazione, retry automatici e serializzazione. È il modo standard per integrare servizi AWS nelle applicazioni."
  },
  {
    "q": "Quale caratteristica di AWS ridurrà il costo totale di proprietà (TCO) del cliente?",
    "opts": [
      "Il modello di sicurezza a responsabilità condivisa.",
      "La single tenancy (uso esclusivo dell'hardware).",
      "Il calcolo elastico.",
      "La cifratura."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ],
    "id": "2e85f97b0ebc",
    "explain": "L'elasticità cloud AWS permette di scalare automaticamente le risorse in risposta alla domanda reale, senza dover fare previsioni di capacità in anticipo. Questo riduce il TCO eliminando sia il sovra-provisioning (sprechi) che il sotto-provisioning (performance degradate). Si paga solo per le risorse effettivamente usate, adattando automaticamente la capacità al carico."
  },
  {
    "q": "Quale dei seguenti è un vantaggio dell'uso del cloud AWS?",
    "opts": [
      "Una sicurezza permissiva elimina il carico amministrativo.",
      "La possibilità di concentrarsi sulle attività che generano ricavi.",
      "Il controllo sull'hardware di rete del cloud.",
      "La scelta di specifici fornitori di hardware per il cloud."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e4f27d8df50f",
    "explain": "Un vantaggio chiave del cloud AWS è che elimina la necessità di gestire l'infrastruttura fisica, permettendo ai team IT di concentrarsi su attività che generano valore per il business invece di gestire hardware e data center. Questo accelera l'innovazione e il time-to-market. AWS gestisce l'infrastruttura sottostante in modo che i clienti si concentrino sui propri prodotti e clienti."
  },
  {
    "q": "Quali delle seguenti sono categorie di AWS Trusted Advisor? (Scegline DUE)",
    "opts": [
      "Tolleranza ai guasti.",
      "Utilizzo delle istanze.",
      "Infrastruttura.",
      "Prestazioni.",
      "Capacità di storage."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "6b284df7bc24",
    "explain": "La fault tolerance è la capacità di continuare a funzionare con guasti di componenti. Si implementa con ridondanza multi-AZ, Auto Scaling ed ELB. Il principio 'design for failure' è fondamentale: assumere che ogni componente possa fallire."
  },
  {
    "q": "Che cos'è Amazon CloudWatch?",
    "opts": [
      "Un repository di codice con funzionalità personalizzabili di build e di commit per il team.",
      "Un archivio di metriche con soglie e canali di notifica personalizzabili.",
      "Un archivio di configurazioni di sicurezza con analisi delle minacce.",
      "Un archivio di regole di un web application firewall con funzionalità automatiche di prevenzione delle vulnerabilità."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "704c9a32de1d",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali delle seguenti attività sono responsabilità del cliente? (Scegline DUE)",
    "opts": [
      "Applicare le patch ai componenti del sistema operativo di Amazon Relational Database Server (Amazon RDS).",
      "Cifrare i dati lato client.",
      "Formare il personale del data center.",
      "Configurare le Network Access Control List (ACL).",
      "Mantenere i controlli ambientali all'interno di un data center."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ],
    "id": "79de2ac4714f",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quale dei seguenti è un controllo condiviso tra il cliente e AWS?",
    "opts": [
      "I controlli fisici.",
      "La gestione delle patch.",
      "La sicurezza della zona.",
      "L'audit dei data center."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "7f752176d84c",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio AWS si usa per pagare le fatture AWS e monitorare l'utilizzo e i costi rispetto al budget?",
    "opts": [
      "AWS Billing and Cost Management.",
      "Fatturazione consolidata.",
      "Amazon CloudWatch.",
      "Amazon QuickSight."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost",
      "Analytics"
    ],
    "id": "4eccfd81d53c",
    "explain": "AWS Billing and Cost Management è il servizio centrale per pagare le fatture AWS e monitorare l'utilizzo. Include Cost Explorer, Budgets e il dashboard di fatturazione."
  },
  {
    "q": "In che modo i clienti beneficiano delle enormi economie di scala di Amazon?",
    "opts": [
      "Riduzioni periodiche dei prezzi come risultato dell'efficienza operativa di Amazon.",
      "Nuovi tipi di istanza Amazon EC2 con l'hardware più recente.",
      "La possibilità di scalare in su e in giù quando serve.",
      "Maggiore affidabilità dell'hardware sottostante alle istanze Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "d0c6d03422b9",
    "explain": "Le economie di scala di AWS derivano dall'aggregazione di migliaia di clienti, riducendo i costi per unità. Questi risparmi vengono trasferiti ai clienti con riduzioni periodiche dei prezzi. I clienti beneficiano di prezzi enterprise anche con utilizzi ridotti."
  },
  {
    "q": "Quale funzionalità AWS permette a un'azienda di sfruttare le fasce di prezzo per volume dei servizi su più account membri?",
    "opts": [
      "Service control policy (SCP).",
      "Fatturazione consolidata.",
      "Istanze Reserved con pagamento anticipato totale (All Upfront).",
      "AWS Cost Explorer."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "2773cb8d4951",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quali servizi AWS permettono di estendere un'architettura on-premises nel cloud AWS? (Scegline DUE)",
    "opts": [
      "Amazon EBS.",
      "Amazon Connect.",
      "AWS Storage Gateway.",
      "Amazon CloudFront.",
      "AWS Direct Connect."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ],
    "id": "9250bbc2ea6c",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Quale dei seguenti servizi scalerà automaticamente con un aumento previsto del traffico web?",
    "opts": [
      "AWS CodePipeline.",
      "Elastic Load Balancing.",
      "Amazon EBS.",
      "AWS Direct Connect."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage",
      "Networking"
    ],
    "id": "0bf6b603ed6b",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più istanze EC2 in più Availability Zones. Rileva istanze non sane ed escludendole aumenta la disponibilità. Supporta Application (HTTP/HTTPS), Network (TCP/UDP) e Classic Load Balancer."
  },
  {
    "q": "Quale servizio offre una quantità praticamente illimitata di object storage online ad alta durabilità?",
    "opts": [
      "Amazon Redshift.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Elastic Container Service (Amazon ECS).",
      "Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "ECS / Fargate",
      "Storage",
      "Analytics"
    ],
    "id": "3827aa21de85",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale funzionalità AWS dovrebbe sfruttare un cliente per ottenere l'alta disponibilità di un'applicazione?",
    "opts": [
      "AWS Direct Connect.",
      "Le Availability Zone.",
      "I data center.",
      "Amazon Virtual Private Cloud (Amazon VPC)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "52b8574bf540",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale servizio o funzionalità AWS può migliorare la sicurezza di rete bloccando le richieste provenienti da una determinata rete verso un'applicazione web su AWS? (Scegline DUE)",
    "opts": [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Direct Connect.",
      "AWS Organizations.",
      "Network ACL."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Security",
      "Networking",
      "Support"
    ],
    "id": "72258f99f7cc",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Quale dei seguenti è un principio di progettazione dell'architettura cloud?",
    "opts": [
      "Scalare in verticale, non in orizzontale.",
      "Accoppiare debolmente i componenti.",
      "Costruire sistemi monolitici.",
      "Usare software di database commerciale."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "95285c127982",
    "explain": "Il principio di Loose Coupling (componenti debolmente accoppiati) prevede che i componenti di un'applicazione interagiscano tramite interfacce ben definite. Se un componente fallisce, gli altri continuano a funzionare indipendentemente. Riduce la propagazione dei guasti e permette scaling e aggiornamenti indipendenti."
  },
  {
    "q": "Quale servizio permette l'audit dei rischi monitorando e registrando continuamente l'attività dell'account, comprese le azioni degli utenti nella AWS Management Console e negli SDK AWS?",
    "opts": [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "be0c276d9dc8",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Dove si possono scaricare i report di conformità e di certificazione di AWS?",
    "opts": [
      "AWS Artifact.",
      "AWS Concierge.",
      "AWS Certificate Manager.",
      "AWS Trusted Advisor."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "578e6bf9106c",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "I vantaggi finanziari dell'uso di AWS sono: (Scegline DUE)",
    "opts": [
      "Riduzione del costo totale di proprietà (TCO).",
      "Aumento delle spese in conto capitale (capex).",
      "Riduzione delle spese operative (opex).",
      "Piani di pagamento dilazionato per le startup.",
      "Linee di credito aziendali per le startup."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "f0fbbfbfb913",
    "explain": "Il modello cloud AWS converte le spese CapEx in OpEx variabili. Si paga solo per le risorse usate senza impegni a lungo termine. Migliora il cash flow ed elimina il rischio di sovra-provisioning."
  },
  {
    "q": "Quale servizio AWS può servire un sito web statico?",
    "opts": [
      "Amazon S3.",
      "Amazon Route 53.",
      "Amazon QuickSight.",
      "AWS X-Ray."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Route 53",
      "Storage",
      "Analytics"
    ],
    "id": "1daf39d45d16",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali sono i vantaggi dell'uso del cloud AWS per le aziende con clienti in molti paesi del mondo? (Scegline DUE)",
    "opts": [
      "Le aziende possono distribuire le applicazioni in più Regioni AWS per ridurre la latenza.",
      "Amazon Translate traduce automaticamente in più lingue le interfacce di siti web di terze parti.",
      "Amazon CloudFront ha molte edge location in tutto il mondo per ridurre la latenza.",
      "Amazon Comprehend permette agli utenti di costruire applicazioni che rispondono alle richieste degli utenti in molte lingue.",
      "Elastic Load Balancing può distribuire il traffico web dell'applicazione su più Regioni AWS in tutto il mondo, riducendo la latenza."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "AI / ML"
    ],
    "id": "2375abead9b6",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Quali dei seguenti sono componenti principali dell'infrastruttura globale di AWS? (Scegline DUE)",
    "opts": [
      "Resource group.",
      "Availability Zone.",
      "Security group.",
      "Regioni.",
      "Amazon Machine Image (AMI)."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC"
    ],
    "id": "c66fabfd5233",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Di cosa è responsabile il cliente AWS secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Controlli di accesso fisico.",
      "Cifratura dei dati.",
      "Smaltimento sicuro dei dispositivi di storage.",
      "Gestione dei rischi ambientali."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ],
    "id": "0ad70664ac1c",
    "explain": "La cifratura dei dati su AWS protegge le informazioni sia at-rest (su disco) che in-transit (in rete). AWS KMS gestisce le chiavi di cifratura e si integra con S3, EBS, RDS e altri servizi. I clienti sono responsabili di abilitare e configurare la cifratura per i propri dati."
  },
  {
    "q": "Se ogni reparto di un'azienda ha il proprio account AWS, qual è un modo per abilitare la fatturazione consolidata?",
    "opts": [
      "Usare AWS Budgets su ogni account per pagare solo fino al budget.",
      "Contattare l'AWS Support per ricevere una fattura mensile.",
      "Creare un'organizzazione AWS Organizations dall'account pagante e invitare gli altri account a farne parte.",
      "Mettere tutte le fatture in un unico bucket Amazon Simple Storage Service (Amazon S3), caricare i dati in Amazon Redshift e poi generare un report di fatturazione."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Billing & Cost",
      "Analytics"
    ],
    "id": "eedfe07d5982",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quali costi sono inclusi quando si confronta il costo totale di proprietà (TCO) di AWS con il TCO on-premises?",
    "opts": [
      "La gestione dei progetti.",
      "Le licenze del software antivirus.",
      "La sicurezza del data center.",
      "Lo sviluppo software."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "862376a8fbd8",
    "explain": "Nel calcolo del Total Cost of Ownership (TCO) on-premise bisogna includere non solo il costo del server, ma anche sicurezza del data center, personale IT per manutenzione, costi di facility (spazio, elettricità, raffreddamento), hardware di networking e costi di dismissione hardware. AWS elimina tutti questi costi nascosti con un modello pay-as-you-go dove si paga solo per le risorse cloud usate."
  },
  {
    "q": "Qual è il vantaggio di usare servizi gestiti da AWS, come Amazon ElastiCache e Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "Richiedono al cliente di monitorare e sostituire le istanze guaste.",
      "Hanno prestazioni migliori dei servizi gestiti dal cliente.",
      "Semplificano l'applicazione delle patch e l'aggiornamento dei sistemi operativi sottostanti.",
      "Non richiedono al cliente di ottimizzare la scelta del tipo o della dimensione dell'istanza."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "301f5d8b62a0",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quali servizi possono essere usati in architetture ibride con il cloud AWS? (Scegline DUE)",
    "opts": [
      "Amazon Route 53.",
      "Virtual Private Gateway.",
      "Classic Load Balancer.",
      "Auto Scaling.",
      "Metriche predefinite di Amazon CloudWatch."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Route 53",
      "CloudWatch"
    ],
    "id": "c944a1ff1066",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Quale affermazione descrive meglio Elastic Load Balancing?",
    "opts": [
      "Traduce un nome di dominio in un indirizzo IP usando il DNS.",
      "Distribuisce il traffico applicativo in entrata su una o più istanze Amazon EC2.",
      "Raccoglie metriche sulle istanze Amazon EC2 collegate.",
      "Regola automaticamente il numero di istanze Amazon EC2 per sostenere il traffico in entrata."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch"
    ],
    "id": "463e0a7f3cdd"
  },
  {
    "q": "Quale dei seguenti è un servizio di database NoSQL veloce e affidabile?",
    "opts": [
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon S3."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "1a13814f97b5",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quale servizio AWS useresti per ottenere report e certificati di conformità?",
    "opts": [
      "AWS Artifact.",
      "AWS Lambda.",
      "Amazon Inspector.",
      "AWS Certificate Manager."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Security"
    ],
    "id": "76f2b5be1155",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quali servizi AWS sono definiti globali invece che regionali? (Scegline DUE)",
    "opts": [
      "Amazon Route 53.",
      "Amazon EC2.",
      "Amazon S3.",
      "Amazon CloudFront.",
      "Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "CloudFront",
      "Route 53",
      "DynamoDB"
    ],
    "id": "5b0cda823e77",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Come può un cliente AWS applicare facilmente controlli di accesso comuni a un grande insieme di utenti?",
    "opts": [
      "Applicare una policy IAM a un gruppo IAM.",
      "Applicare una policy IAM a un ruolo IAM.",
      "Applicare la stessa policy IAM a tutti gli utenti IAM che accedono allo stesso carico di lavoro.",
      "Applicare una policy IAM a un user pool di Amazon Cognito."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "1056e788d56a",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale dei seguenti è un principio importante di progettazione architetturale nella progettazione di applicazioni cloud?",
    "opts": [
      "Usare più Availability Zone.",
      "Usare componenti strettamente accoppiati.",
      "Usare software open source.",
      "Predisporre capacità in eccesso."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "0153a2fd7f05",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale servizio permette a un'azienda con più account AWS di sommare il proprio utilizzo per ottenere sconti sui volumi?",
    "opts": [
      "AWS Server Migration Service.",
      "AWS Organizations.",
      "AWS Budgets.",
      "AWS Trusted Advisor."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "dede68db1659",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale offerta AWS permette ai clienti di trovare, acquistare e iniziare subito a usare soluzioni software nel proprio ambiente AWS?",
    "opts": [
      "AWS Config",
      "AWS OpsWorks",
      "AWS SDK",
      "AWS Marketplace"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c9f5544727d1",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Quale servizio di rete AWS permette a un'azienda di creare una rete virtuale all'interno di AWS?",
    "opts": [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ],
    "id": "816d05dc5c6a",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Quale delle seguenti è responsabilità di AWS secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Configurare applicazioni di terze parti",
      "Mantenere l'hardware fisico",
      "Proteggere l'accesso alle applicazioni e i dati",
      "Gestire le Amazon Machine Image (AMI) personalizzate"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "7d2c57713123",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale componente dell'infrastruttura globale di AWS usa Amazon CloudFront per garantire una distribuzione a bassa latenza?",
    "opts": [
      "Regioni AWS",
      "Edge location AWS",
      "Availability Zone AWS",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ],
    "id": "d39d78b0b668",
    "explain": "L'infrastruttura globale AWS è composta da Regioni, Availability Zone ed Edge Location. Ci sono più edge location che AZ, e più AZ che Regioni. Garantisce alta disponibilità, bassa latenza globale e resilienza."
  },
  {
    "q": "Come può un amministratore di sistema aggiungere un ulteriore livello di sicurezza all'accesso di un utente alla AWS Management Console?",
    "opts": [
      "Usare AWS Cloud Directory",
      "Verificare i ruoli di AWS Identity and Access Management (IAM)",
      "Abilitare l'autenticazione a più fattori (MFA)",
      "Abilitare AWS CloudTrail"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "2cafdfc15ef6",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quale servizio può identificare l'utente che ha effettuato la chiamata API quando un'istanza Amazon Elastic Compute Cloud (Amazon EC2) viene terminata?",
    "opts": [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "CloudWatch"
    ],
    "id": "236e816ede84",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quale servizio useresti per inviare avvisi basati sugli allarmi di Amazon CloudWatch?",
    "opts": [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "CloudWatch",
      "SNS",
      "Support"
    ],
    "id": "0c89e6255132",
    "explain": "Amazon SNS è un servizio pub/sub per comunicazione many-to-many. Publisher inviano a topic e SNS distribuisce a subscriber (Lambda, SQS, email, SMS)."
  },
  {
    "q": "Dove può trovare un cliente le informazioni sulle azioni vietate sull'infrastruttura AWS?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
      "AWS Acceptable Use Policy (politica di utilizzo accettabile)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ],
    "id": "91a28c6cc625",
    "explain": "La AWS Acceptable Use Policy definisce i comportamenti vietati: spam, malware, DDoS, accessi non autorizzati. I clienti la accettano alla creazione dell'account. Le violazioni comportano la sospensione."
  },
  {
    "q": "Quale dei seguenti è un esempio di come il passaggio al cloud AWS riduce i costi iniziali?",
    "opts": [
      "Sostituendo grandi costi variabili con investimenti di capitale più bassi",
      "Sostituendo grandi investimenti di capitale con costi variabili più bassi",
      "Permettendo di predisporre calcolo e storage a un livello fisso per soddisfare la domanda di picco",
      "Sostituendo il ridimensionamento ripetuto dei server virtuali con un modello più semplice a dimensione fissa"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "73a0e7f7ec63",
    "explain": "AWS trasforma le spese in conto capitale (CapEx) per hardware on-premise in spese operative variabili (OpEx). Invece di dover investire grandi somme in hardware prima di sapere se sarà effettivamente usato, si paga solo per le risorse usate. Questo migliora il cash flow aziendale, riduce il rischio finanziario e permette di riallocare il budget verso attività che generano valore."
  },
  {
    "q": "Nella progettazione di una tipica applicazione web a tre livelli, quali servizi e/o funzionalità AWS migliorano la disponibilità e riducono l'impatto dei guasti? (Scegline due.)",
    "opts": [
      "AWS Auto Scaling per le istanze Amazon EC2",
      "ACL delle subnet di Amazon VPC per controllare lo stato di salute di un servizio",
      "Risorse distribuite su più Availability Zone",
      "AWS Server Migration Service (AWS SMS) per spostare le istanze Amazon EC2 in un'altra Regione",
      "Risorse distribuite su più point of presence AWS"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "5fb0ac988513",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale principio di progettazione cloud è in linea con le best practice del cloud AWS?",
    "opts": [
      "Creare dipendenze fisse tra i componenti dell'applicazione",
      "Concentrare i servizi su una singola istanza",
      "Distribuire le applicazioni in una singola Availability Zone",
      "Distribuire il carico di calcolo su più risorse"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "cef1490faa6e",
    "explain": "Distribuire il carico di calcolo su più risorse (scaling orizzontale) è una best practice fondamentale su AWS. Invece di avere una singola istanza potente (scaling verticale), si usano multiple istanze più piccole con un ELB davanti, aumentando sia la performance che la fault tolerance. Questo permette di eliminare i single point of failure e gestire picchi di traffico senza interruzioni."
  },
  {
    "q": "Quali delle seguenti sono pratiche consigliate per gestire gli utenti IAM? (Scegline due.)",
    "opts": [
      "Richiedere agli utenti IAM di cambiare la password dopo un periodo di tempo stabilito",
      "Impedire agli utenti IAM di riutilizzare password precedenti",
      "Consigliare di usare la stessa password su AWS e su altri siti",
      "Richiedere agli utenti IAM di conservare le password in chiaro",
      "Disabilitare l'autenticazione a più fattori (MFA) per gli utenti IAM"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "9ce1a0a01a6f",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Un'azienda sta migrando dai data center on-premises al cloud AWS e cerca un aiuto pratico per il progetto. Come può ottenere questo supporto? (Scegline due.)",
    "opts": [
      "Chiedere un preventivo al team di AWS Marketplace per eseguire una migrazione nell'account AWS dell'azienda.",
      "Contattare l'AWS Support e aprire un caso di assistenza",
      "Usare gli AWS Professional Services per ricevere indicazioni e configurare una AWS Landing Zone nell'account AWS dell'azienda",
      "Scegliere un partner dell'AWS Partner Network (APN) che aiuti con la migrazione",
      "Usare Amazon Connect per creare una nuova richiesta di offerta (RFP) per l'assistenza di esperti nella migrazione al cloud AWS."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "a91be5588549",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "In che modo il team Concierge dell'AWS Enterprise Support aiuta gli utenti?",
    "opts": [
      "Supportando lo sviluppo delle applicazioni",
      "Fornendo indicazioni sull'architettura",
      "Rispondendo a domande su fatturazione e account",
      "Rispondendo a domande sui casi di supporto tecnico"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "cefaea904e78",
    "explain": "Il team AWS Enterprise Support Concierge risponde a domande su fatturazione e account per i clienti Enterprise. Aiuta a navigare le complessità amministrative di AWS."
  },
  {
    "q": "Un'applicazione progettata per estendersi su più Availability Zone è descritta come:",
    "opts": [
      "altamente disponibile",
      "con portata globale",
      "che sfrutta un'economia di scala",
      "elastica"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "12774a794110",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Un nuovo servizio che usa AWS deve essere altamente disponibile. Tuttavia, per requisiti normativi, tutte le sue istanze Amazon EC2 devono trovarsi in un'unica area geografica. Secondo le best practice, per soddisfare questi requisiti le istanze EC2 devono essere collocate in almeno due:",
    "opts": [
      "Regioni AWS",
      "Availability Zone",
      "subnet",
      "placement group"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "fa2de906fca1",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale strumento AWS si usa per confrontare il costo di eseguire un'applicazione on-premises con quello di eseguirla nel cloud AWS?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Simple Monthly Calculator",
      "AWS Pricing Calculator",
      "Cost Explorer"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "1cb958f002bf",
    "explain": "AWS Pricing Calculator stima il costo mensile dei servizi AWS prima di iniziare. Confronta scenari diversi senza bisogno di un account AWS."
  },
  {
    "q": "Un'azienda ha più account AWS dentro AWS Organizations e vuole applicare il vantaggio delle Istanze Reserved Amazon EC2 a un solo account. Quale azione deve intraprendere?",
    "opts": [
      "Acquistare le Istanze Reserved dall'account master pagante e disattivare la condivisione delle Istanze Reserved.",
      "Abilitare gli avvisi di fatturazione nella console AWS Billing and Cost Management.",
      "Acquistare le Istanze Reserved nei singoli account collegati e disattivare la condivisione delle Istanze Reserved a livello dell'account pagante.",
      "Abilitare la condivisione delle Istanze Reserved nella console AWS Billing and Cost Management."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "a352b278144d",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Quale situazione dovrebbe essere segnalata al team AWS Abuse?",
    "opts": [
      "Una Availability Zone ha un'interruzione del servizio",
      "Un tentativo di intrusione proviene da un indirizzo IP di AWS",
      "Un utente ha problemi ad accedere a un bucket Amazon S3 da un indirizzo IP di AWS",
      "Un utente deve cambiare metodo di pagamento a causa di una compromissione"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3"
    ],
    "id": "d50e6cb9183f",
    "explain": "Il team AWS Abuse gestisce segnalazioni di utilizzo abusivo dell'infrastruttura AWS come attacchi, malware e port scanning da IP AWS. Si contatta tramite il form AWS o abuse@amazonaws.com."
  },
  {
    "q": "Quale servizio o risorsa AWS è serverless?",
    "opts": [
      "AWS Lambda",
      "Istanze Amazon EC2",
      "Amazon Lightsail",
      "Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "4202f7c9ba8b",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quali dei seguenti sono componenti di Amazon VPC? (Scegline due.)",
    "opts": [
      "Oggetti",
      "Subnet",
      "Bucket",
      "Internet gateway",
      "Chiave di accesso"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "VPC"
    ],
    "id": "fe0c5725a777",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "AWS Budgets può essere usato per:",
    "opts": [
      "impedire a un determinato utente di creare una risorsa",
      "inviare un avviso quando l'utilizzo delle Istanze Reserved scende sotto una certa percentuale",
      "impostare limiti alle risorse negli account AWS per evitare spese eccessive",
      "dividere una fattura AWS su più metodi di pagamento"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "8bf90d1a88b5",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Quali dei seguenti strumenti miglioreranno la sicurezza dell'accesso alla AWS Management Console? (Scegline due.)",
    "opts": [
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS Multi-Factor Authentication (AWS MFA)",
      "Security group",
      "Policy delle password"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC"
    ],
    "id": "c6e67ecf1d0f",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "I controlli di AWS Trusted Advisor includono raccomandazioni su quali dei seguenti aspetti? (Scegline due.)",
    "opts": [
      "Informazioni sui permessi dei bucket Amazon S3",
      "Interruzioni dei servizi AWS",
      "Autenticazione a più fattori abilitata sull'utente root dell'account AWS",
      "Patch software disponibili",
      "Numero di utenti nell'account"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "IAM",
      "Support"
    ],
    "id": "c5237fa6708b",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quali funzioni possono svolgere gli utenti con AWS KMS?",
    "opts": [
      "Creare e gestire le chiavi di accesso AWS per l'utente root dell'account AWS",
      "Creare e gestire le chiavi di accesso AWS per un utente IAM di un account AWS",
      "Creare e gestire chiavi per la cifratura e la decifratura dei dati",
      "Creare e gestire chiavi per l'autenticazione a più fattori"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "1ff1ff2abdb5",
    "explain": "La cifratura dei dati su AWS protegge le informazioni sia at-rest (su disco) che in-transit (in rete). AWS KMS gestisce le chiavi di cifratura e si integra con S3, EBS, RDS e altri servizi. I clienti sono responsabili di abilitare e configurare la cifratura per i propri dati."
  },
  {
    "q": "In che modo AWS Trusted Advisor fornisce indicazioni agli utenti del cloud AWS? (Scegline due.)",
    "opts": [
      "Individua le vulnerabilità software nelle applicazioni in esecuzione su AWS",
      "Fornisce un elenco di raccomandazioni per ottimizzare i costi in base all'utilizzo attuale di AWS",
      "Rileva potenziali vulnerabilità di sicurezza causate dalle impostazioni dei permessi sulle risorse dell'account",
      "Corregge automaticamente i potenziali problemi di sicurezza causati dalle impostazioni dei permessi sulle risorse dell'account",
      "Invia avvisi proattivi ogni volta che un'istanza Amazon EC2 è stata compromessa"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support",
      "Well-Architected"
    ],
    "id": "f00e2bcbd68c",
    "explain": "Il pillar Cost Optimization del Well-Architected Framework evita costi non necessari. Include eliminazione delle risorse inutilizzate, uso di Reserved Instance/Savings Plans e dimensionamento corretto."
  },
  {
    "q": "Quali dei seguenti sono vantaggi del cloud AWS? (Scegline due.)",
    "opts": [
      "AWS gestisce la manutenzione dell'infrastruttura cloud",
      "AWS gestisce la sicurezza delle applicazioni costruite su AWS",
      "AWS gestisce la pianificazione della capacità dei server fisici",
      "AWS gestisce lo sviluppo delle applicazioni su AWS",
      "AWS gestisce la pianificazione dei costi dei server virtuali"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "6a1aa9fe8696"
  },
  {
    "q": "Un utente distribuisce un'istanza DB Amazon RDS in più Availability Zone. Questa strategia riguarda quale pilastro dell'AWS Well-Architected Framework?",
    "opts": [
      "Efficienza delle prestazioni",
      "Affidabilità",
      "Ottimizzazione dei costi",
      "Sicurezza"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Well-Architected"
    ],
    "id": "a42595dd06d3",
    "explain": "Il pillar Reliability del Well-Architected Framework garantisce che un workload esegua la sua funzione in modo coerente. Include recupero automatico dai guasti, scaling orizzontale e testing del disaster recovery."
  },
  {
    "q": "Quali servizi AWS forniscono a un utente la connettività tra il cloud AWS e le risorse on-premises? (Scegline due.)",
    "opts": [
      "AWS VPN",
      "Amazon Connect",
      "Amazon Cognito",
      "AWS Direct Connect",
      "AWS Managed Services"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security",
      "Networking"
    ],
    "id": "5f0e38cf48d9",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quale elemento dell'infrastruttura globale di AWS è formato da uno o più data center distinti, ciascuno con alimentazione, rete e connettività ridondanti, ospitati in strutture separate?",
    "opts": [
      "Regioni AWS",
      "Availability Zone",
      "Edge location",
      "Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "d489d6d892c8",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale funzionalità di Amazon VPC permette agli utenti di registrare informazioni sul traffico IP che raggiunge le istanze Amazon EC2?",
    "opts": [
      "Security group",
      "Elastic network interface",
      "Network ACL",
      "VPC Flow Logs"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "89b1cdf61245",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Quale servizio AWS può essere usato per scalare automaticamente un'applicazione in su e in giù senza dover prendere decisioni di pianificazione della capacità?",
    "opts": [
      "Amazon AutoScaling",
      "Amazon Redshift",
      "AWS CloudTrail",
      "AWS Lambda"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Analytics"
    ],
    "id": "460da45fe025"
  },
  {
    "q": "Gli utenti di AWS Enterprise Support hanno accesso a quale servizio o funzionalità non disponibile per gli utenti degli altri piani di AWS Support?",
    "opts": [
      "AWS Trusted Advisor",
      "Caso di AWS Support",
      "Team Concierge",
      "Amazon Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "7c7888ed0372",
    "explain": "Il team AWS Enterprise Support Concierge risponde a domande su fatturazione e account per i clienti Enterprise. Aiuta a navigare le complessità amministrative di AWS."
  },
  {
    "q": "Un'azienda vuole migrare un database MySQL su AWS, ma non ha il budget per avere amministratori di database che gestiscano le attività di routine, tra cui provisioning, patch e backup. Quale servizio AWS supporta questo caso d'uso?",
    "opts": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB"
    ],
    "id": "00599cbd0f1f",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Un'azienda vuole espandersi da una Regione AWS a una seconda Regione AWS. Cosa deve fare l'azienda per iniziare a usare la nuova Regione?",
    "opts": [
      "Contattare un AWS Account Manager per firmare un nuovo contratto",
      "Spostare una Availability Zone nella nuova Regione",
      "Iniziare a distribuire risorse nella seconda Regione",
      "Scaricare la AWS Management Console per la nuova Regione"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a226727d966b",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Un utente deve rispettare requisiti di conformità e di licenza software secondo cui un carico di lavoro deve essere ospitato su un server fisico. Quale opzione di prezzo delle istanze Amazon EC2 soddisfa questi requisiti?",
    "opts": [
      "Dedicated Hosts",
      "Istanze Dedicated",
      "Istanze Spot",
      "Istanze Reserved"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "2a42013afea9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS permette di generare chiavi di cifratura che possono essere usate per cifrare i dati? (Scegline due.)",
    "opts": [
      "Amazon Macie",
      "AWS Certificate Manager",
      "AWS Key Management Service (AWS KMS)",
      "AWS Secrets Manager",
      "AWS CloudHSM"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "576ba953e7d1",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "Un'azienda sta pianificando di migrare dall'on-premises al cloud AWS. Quale strumento o servizio AWS fornisce report dettagliati sui risparmi stimati dopo la migrazione?",
    "opts": [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Explorer",
      "AWS Budgets",
      "AWS Migration Hub"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "0e3e37d904fa",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Cosa può aiutare a valutare un'applicazione per la migrazione al cloud? (Scegline due.)",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Professional Services",
      "AWS Systems Manager",
      "AWS Partner Network (APN)",
      "AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "dc51d374e2cc",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "Quale servizio AWS aiuta gli utenti a soddisfare requisiti contrattuali e normativi di conformità per la sicurezza dei dati usando dispositivi hardware dedicati all'interno del cloud AWS?",
    "opts": [
      "AWS Secrets Manager",
      "AWS CloudHSM",
      "AWS Key Management Service (AWS KMS)",
      "AWS Directory Service"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "59839a646f0f",
    "explain": "AWS CloudHSM fornisce moduli hardware di sicurezza dedicati per gestire chiavi crittografiche con controllo esclusivo del cliente. Richiesto per PCI DSS e altri standard che richiedono HSM dedicati. Il cliente ha controllo completo dell'hardware, a differenza di KMS."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali dei seguenti aspetti gestisce il cliente? (Scegline due.)",
    "opts": [
      "Dismissione dei dispositivi di storage fisici",
      "Configurazione di security group e ACL",
      "Gestione delle patch del sistema operativo di un'istanza Amazon RDS",
      "Controllo dell'accesso fisico ai data center",
      "Gestione delle patch del sistema operativo di un'istanza Amazon EC2"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "VPC",
      "Shared Responsibility"
    ],
    "id": "72046ae944d8",
    "explain": "I Security Group funzionano come firewall a livello di istanza EC2 con regole stateful. Il traffico di risposta è automaticamente autorizzato. Le regole specificano protocollo, porta e sorgente/destinazione."
  },
  {
    "q": "Quale servizio AWS è adatto a un carico di lavoro guidato dagli eventi (event-driven)?",
    "opts": [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS Lambda",
      "Amazon Lumberyard"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "26d881bb48b6",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Qual è una proposta di valore del cloud AWS?",
    "opts": [
      "AWS è responsabile della sicurezza nel cloud AWS",
      "Non è richiesto alcun contratto a lungo termine",
      "Predisporre nuovi server in pochi giorni",
      "AWS gestisce le applicazioni degli utenti nel cloud AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "039f53fdd34a",
    "explain": "AWS non richiede contratti a lungo termine né impegni upfront: si paga solo per le risorse effettivamente usate, per il tempo in cui le si usa (pay-as-you-go). Questo è fondamentalmente diverso dall'on-premise dove bisogna acquistare hardware anni prima che venga effettivamente usato. I clienti possono iniziare con risorse minime e scalare in base alle necessità reali."
  },
  {
    "q": "Qual è una caratteristica della replica tra Regioni (cross-region replication) di Amazon S3?",
    "opts": [
      "Sia il bucket S3 di origine sia quello di destinazione devono avere il versioning disabilitato",
      "I bucket S3 di origine e di destinazione non possono trovarsi in Regioni AWS diverse",
      "I bucket S3 configurati per la replica tra Regioni possono appartenere a un unico account AWS o ad account diversi",
      "Il proprietario del bucket S3 di origine deve avere le Regioni AWS di origine e di destinazione disabilitate per il proprio account"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3"
    ],
    "id": "1efcc5839718",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Di cosa è responsabile un utente quando esegue un'applicazione nel cloud AWS? - A. Gestire l'hardware fisico",
    "opts": [
      "Aggiornare l'hypervisor sottostante",
      "Fornire un elenco degli utenti autorizzati ad accedere al data center",
      "Gestire gli aggiornamenti del software applicativo"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e5fdd1867397",
    "explain": "Nel modello Shared Responsibility, il cliente è sempre responsabile del sistema operativo guest, delle applicazioni e dei dati che eseguono sulle istanze EC2. Questo include il patching e gli aggiornamenti del software applicativo, la configurazione del firewall a livello OS e la gestione delle identità nell'applicazione. AWS si occupa solo dell'infrastruttura fisica e dell'hypervisor."
  },
  {
    "q": "Un'azienda che lavora online deve rilasciare rapidamente nuove funzionalità in modo iterativo, riducendo al minimo il time to market. Quale caratteristica del cloud AWS può offrire questo?",
    "opts": [
      "Elasticità",
      "Alta disponibilità",
      "Agilità",
      "Affidabilità"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "66ec892fc602",
    "explain": "L'agilità di AWS riduce il tempo per ottenere risorse IT da settimane a minuti. Accelera i cicli di sviluppo e permette di sperimentare rapidamente a basso costo. Le aziende possono innovare e rispondere al mercato molto più velocemente."
  },
  {
    "q": "Quali funzionalità o servizi possono essere usati per monitorare costi e spese di un account AWS? (Scegline due.)",
    "opts": [
      "AWS Cost and Usage Report",
      "Pagine dei prodotti AWS",
      "AWS Simple Monthly Calculator",
      "Avvisi di fatturazione e allarmi di Amazon CloudWatch",
      "AWS Price List API"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "315a5f3db2b4",
    "explain": "AWS Cost and Usage Report è il report più dettagliato sui costi AWS con dati granulari per ora o giorno. Si integra con Athena e QuickSight per analisi avanzate."
  },
  {
    "q": "Amazon Route 53 permette agli utenti di:",
    "opts": [
      "cifrare i dati in transito",
      "registrare nomi di dominio DNS",
      "generare e gestire certificati SSL",
      "stabilire una connessione di rete dedicata verso AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ],
    "id": "d6fe7d565f91",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Dove puoi conservare file in AWS? (Scegline DUE)",
    "opts": [
      "Amazon EFS.",
      "Amazon SNS.",
      "Amazon EBS.",
      "Amazon ECS.",
      "Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "SNS",
      "ECS / Fargate",
      "Storage",
      "Analytics"
    ],
    "id": "5065bacb653d",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Quale servizio AWS può essere usato per conservare e consegnare in modo affidabile messaggi tra sistemi distribuiti?",
    "opts": [
      "Amazon Simple Queue Service.",
      "AWS Storage Gateway.",
      "Amazon Simple Email Service.",
      "Amazon Simple Storage Service."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "SQS",
      "Storage"
    ],
    "id": "aff99b230663"
  },
  {
    "q": "Quale delle seguenti descrive il modello di pagamento che AWS mette a disposizione dei clienti che possono impegnarsi a usare Amazon EC2 per 1 o 3 anni per ridurre i costi di calcolo totali?",
    "opts": [
      "Paghi meno man mano che AWS cresce.",
      "Paghi a consumo.",
      "Paghi meno usando di più.",
      "Risparmi quando prenoti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "8de9b4b048b8",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda sta migrando il proprio database on-premises su Amazon RDS. Cosa dovrebbe fare per mantenere al minimo i costi di Amazon RDS?",
    "opts": [
      "Dimensionare correttamente (right-sizing) prima e dopo la migrazione.",
      "Usare un'architettura Multi-Region Active-Passive.",
      "Combinare le On-Demand Capacity Reservations con i Savings Plans.",
      "Usare un'architettura Multi-Region Active-Active."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ],
    "id": "d16f14fb169c",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Qual è il principale servizio di storage usato dalle istanze di database Amazon RDS?",
    "opts": [
      "Amazon Glacier.",
      "Amazon EBS.",
      "Amazon EFS.",
      "Amazon S3."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "RDS",
      "Storage"
    ],
    "id": "ee19a6c53f48",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Un'azienda sta sviluppando una nuova applicazione con un'architettura a microservizi. La nuova applicazione ha problemi di prestazioni e di latenza. Quale servizio AWS dovrebbe essere usato per analizzare questi problemi?",
    "opts": [
      "AWS CodePipeline.",
      "AWS X-Ray.",
      "Amazon Inspector.",
      "AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "897e156958df",
    "explain": "I microservizi scompongono un'applicazione in servizi piccoli e indipendenti. Su AWS si implementano con Lambda, ECS/EKS e API Gateway. Permettono deploy frequenti e isolamento dei guasti."
  },
  {
    "q": "Quali dei seguenti servizi AWS sono progettati con una tolleranza ai guasti Multi-AZ nativa? (Scegline DUE)",
    "opts": [
      "Amazon Redshift.",
      "AWS Snowball.",
      "Amazon Simple Storage Service.",
      "Amazon EBS.",
      "Amazon DynamoDB."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "DynamoDB",
      "Storage",
      "Analytics"
    ],
    "id": "5be9c3b65928",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quali funzionalità di Amazon RDS possono essere usate per migliorare la disponibilità del database? (Scegline DUE)",
    "opts": [
      "Regioni AWS.",
      "Distribuzione Multi-AZ.",
      "Applicazione automatica delle patch.",
      "Read Replica.",
      "Edge location."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "CloudFront"
    ],
    "id": "4677fa3a8f82",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Sarah ha distribuito un'applicazione nella Regione California settentrionale (us-west-1). Esaminando il traffico dell'applicazione, nota che circa il 30% arriva dall'Asia. Cosa può fare per ridurre la latenza per gli utenti in Asia?",
    "opts": [
      "Replicare le risorse attuali su più Availability Zone della stessa Regione.",
      "Migrare l'applicazione presso un provider di hosting in Asia.",
      "Ricreare i contenuti del sito web.",
      "Creare una CDN con CloudFront, così che i contenuti vengano messi in cache nelle edge location vicine all'Asia e in Asia."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Storage"
    ],
    "id": "0708a9c1aa68",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Un'organizzazione gestisce molti sistemi e usa molti prodotti AWS. Quale dei seguenti servizi le permette di controllare come ogni sviluppatore interagisce con questi prodotti?",
    "opts": [
      "AWS Identity and Access Management.",
      "Amazon RDS.",
      "Network Access Control List.",
      "Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS",
      "Analytics"
    ],
    "id": "2bed8188bbb2",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "L'uso di Amazon EC2 rientra in quale dei seguenti modelli di cloud computing?",
    "opts": [
      "IaaS e SaaS.",
      "IaaS.",
      "SaaS.",
      "PaaS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "c29065ad9adf",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale delle seguenti è una best practice quando si costruiscono applicazioni su AWS?",
    "opts": [
      "Rafforzare la sicurezza fisica applicando il principio del privilegio minimo.",
      "Assicurarsi che l'applicazione giri su hardware di fornitori affidabili.",
      "Usare le policy IAM per mantenere le prestazioni.",
      "Disaccoppiare i componenti dell'applicazione in modo che funzionino in modo indipendente."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "7ad8b0de1cc9"
  },
  {
    "q": "La tua azienda sta progettando una nuova applicazione che salverà e recupererà foto e video. Quale dei seguenti servizi dovresti consigliare come meccanismo di storage sottostante?",
    "opts": [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon Instance store.",
      "Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "SQS",
      "Storage"
    ],
    "id": "a2bf4a0ae9b8",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Amazon Glacier è una classe di storage di Amazon S3 adatta a conservare [...] e [...]. (Scegline DUE)",
    "opts": [
      "Archivi attivi.",
      "Risorse di siti web dinamici.",
      "Dati analitici a lungo termine.",
      "Database attivi.",
      "Dati in cache."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "c2eacaabe583",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Che cosa offre Amazon Elastic Beanstalk?",
    "opts": [
      "Una soluzione PaaS per automatizzare la distribuzione delle applicazioni.",
      "Un motore di calcolo per Amazon ECS.",
      "Una soluzione scalabile di file storage da usare con AWS e con server on-premises.",
      "Un servizio di database NoSQL."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "ECS / Fargate"
    ],
    "id": "ca93e40b3892",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Qual è il servizio AWS che esegue valutazioni di rete automatiche delle istanze Amazon EC2 per verificare la presenza di vulnerabilità?",
    "opts": [
      "Amazon Kinesis.",
      "Security group.",
      "Amazon Inspector.",
      "AWS Network Access Control List."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Security",
      "Analytics"
    ],
    "id": "d613603f733c",
    "explain": "Amazon Inspector valuta la sicurezza di istanze EC2 e container ECR identificando vulnerabilità CVE. Genera report prioritizzati con azioni correttive."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali dei seguenti controlli i clienti ereditano completamente da AWS? (Scegline DUE)",
    "opts": [
      "Controlli di gestione delle patch.",
      "Controlli del database.",
      "Consapevolezza e formazione.",
      "Controlli ambientali.",
      "Controlli fisici."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "08338fe085e5",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica e dei controlli ambientali dei data center: alimentazione, raffreddamento, controllo accessi fisici e distruzione dei dispositivi a fine vita. Nel modello Shared Responsibility, AWS gestisce tutta la sicurezza fisica dell'infrastruttura. Il cliente è responsabile della sicurezza a livello software, dati e configurazioni."
  },
  {
    "q": "Un'azienda deve ospitare un database in Amazon RDS per almeno tre anni. Quale delle seguenti opzioni sarebbe la soluzione più conveniente?",
    "opts": [
      "Istanze Reserved - senza pagamento anticipato (No Upfront).",
      "Istanze Reserved - pagamento anticipato parziale (Partial Upfront).",
      "Istanze On-Demand.",
      "Istanze Spot."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ],
    "id": "57ad684b9c4c",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "La tua applicazione ha avuto di recente una forte crescita a livello globale, e gli utenti internazionali si lamentano di una latenza alta. Quale caratteristica di AWS può aiutare a migliorare l'esperienza degli utenti internazionali?",
    "opts": [
      "Elasticità.",
      "Portata globale.",
      "Durabilità dei dati.",
      "Alta disponibilità."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4dec61149b6e",
    "explain": "Il global reach di AWS permette di deployare applicazioni in qualsiasi parte del mondo in pochi minuti usando la rete globale di Regioni, Availability Zone ed Edge Location. Questo consente di avvicinare l'applicazione agli utenti finali riducendo la latenza. È possibile espandere il business globalmente senza dover costruire infrastrutture fisiche in ogni paese."
  },
  {
    "q": "Per quali dei seguenti servizi di calcolo AWS sono disponibili i Savings Plans? (Scegline DUE)",
    "opts": [
      "AWS Batch.",
      "AWS Outposts.",
      "Amazon Lightsail.",
      "Amazon EC2.",
      "AWS Lambda."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "Billing & Cost"
    ],
    "id": "2b143d0dac1b",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda ha carichi di lavoro critici per il business ospitati su AWS e non è disposta ad accettare alcun tempo di inattività. Quale delle seguenti è una best practice consigliata per proteggere i carichi di lavoro in caso di un disastro naturale imprevisto?",
    "opts": [
      "Replicare i dati su più edge location nel mondo e usare Amazon CloudFront per eseguire il failover automatico in caso di interruzione.",
      "Distribuire le risorse AWS su più Availability Zone della stessa Regione AWS.",
      "Creare backup point-in-time in un'altra subnet e recuperare questi dati quando si verifica un disastro.",
      "Distribuire le risorse AWS in un'altra Regione AWS e implementare una strategia di disaster recovery Active-Active."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ],
    "id": "4b16256f87ad",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Quale affermazione è corretta riguardo ai limiti dei servizi AWS (service limits)? (Scegline DUE)",
    "opts": [
      "Puoi contattare l'AWS Support per aumentare i limiti dei servizi.",
      "Ogni utente IAM ha lo stesso limite di servizio.",
      "Su AWS non esistono limiti dei servizi.",
      "Puoi usare AWS Trusted Advisor per monitorare i limiti dei servizi.",
      "Amazon Simple Email Service è responsabile dell'invio di notifiche email quando l'utilizzo si avvicina a un limite di servizio."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS",
      "Support"
    ],
    "id": "65ff8248e2ec",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Qual è lo strumento AWS che permette di usare script per gestire tutti i servizi e le risorse AWS?",
    "opts": [
      "AWS Console.",
      "AWS Service Catalog.",
      "AWS OpsWorks.",
      "AWS CLI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "fa13908b3f2f",
    "explain": "L'AWS CLI (Command Line Interface) permette di gestire i servizi AWS direttamente dal terminale con comandi. Può essere usata per automatizzare operazioni tramite scripting. Richiede configurazione con Access Key o ruolo IAM."
  },
  {
    "q": "Quali sono le opzioni di connettività che possono essere usate per costruire architetture di cloud ibrido? (Scegline DUE)",
    "opts": [
      "AWS Artifact.",
      "AWS Cloud9.",
      "AWS Direct Connect.",
      "AWS CloudTrail.",
      "AWS VPN."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Networking"
    ],
    "id": "3fb5c5dd5e6c",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Un'azienda ha distribuito una nuova applicazione web su più istanze Amazon EC2. Quale dei seguenti strumenti dovrebbe usare per garantire che il traffico HTTP in entrata sia distribuito in modo uniforme tra le istanze?",
    "opts": [
      "AWS EC2 Auto Recovery.",
      "AWS Auto Scaling.",
      "AWS Network Load Balancer.",
      "AWS Application Load Balancer."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "e0dd48500d11",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale delle seguenti offerte AWS è un servizio di database relazionale compatibile con MySQL che può scalare la capacità automaticamente in base alla domanda?",
    "opts": [
      "Amazon Neptune.",
      "Amazon Aurora.",
      "Amazon RDS for SQL Server.",
      "Amazon RDS for PostgreSQL."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "d1f6513524b5",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Quali dei seguenti strumenti possono aiutare a proteggere le istanze EC2 dagli attacchi DDoS? (Scegline DUE)",
    "opts": [
      "AWS CloudHSM.",
      "Security group.",
      "AWS Batch.",
      "AWS IAM.",
      "Network Access Control List (Network ACL)."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "VPC"
    ],
    "id": "16cd728d156a",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Qual è il servizio di data warehouse di AWS che garantisce alte prestazioni nelle query su grandi quantità di dati?",
    "opts": [
      "Amazon Redshift.",
      "Amazon Kinesis.",
      "Amazon DynamoDB.",
      "Amazon RDS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "e38152e0f9ea",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Quale dei seguenti aspetti va considerato in un'analisi del TCO per confrontare i costi di eseguire un'applicazione su AWS invece che on-premises?",
    "opts": [
      "Lo sviluppo dell'applicazione.",
      "Le ricerche di mercato.",
      "L'analisi di business.",
      "L'hardware fisico."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "6846064b26d3",
    "explain": "Nel calcolo del Total Cost of Ownership (TCO) on-premise bisogna includere non solo il costo del server, ma anche sicurezza del data center, personale IT per manutenzione, costi di facility (spazio, elettricità, raffreddamento), hardware di networking e costi di dismissione hardware. AWS elimina tutti questi costi nascosti con un modello pay-as-you-go dove si paga solo per le risorse cloud usate."
  },
  {
    "q": "Come vengono fatturati ai clienti AWS i consumi di Amazon EC2 basati su Linux?",
    "opts": [
      "Le istanze EC2 vengono fatturate a incrementi di un secondo, con un minimo di un minuto.",
      "Le istanze EC2 vengono fatturate a incrementi di un'ora, con un minimo di un giorno.",
      "Le istanze EC2 vengono fatturate a incrementi di un minuto, con un minimo di un'ora.",
      "Le istanze EC2 vengono fatturate a incrementi di un giorno, con un minimo di un mese."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "54b5eb029014",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti fattori influiscono sul prezzo pagato per un'istanza EC2? (Scegline DUE)",
    "opts": [
      "Il tipo di istanza.",
      "La Availability Zone in cui l'istanza è predisposta.",
      "Il bilanciamento del carico.",
      "Il numero di bucket.",
      "Il numero di IP privati."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3"
    ],
    "id": "df4e8be1e795",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "Un cliente ha impiegato molto tempo a configurare un'istanza Amazon EC2 appena distribuita. Dopo l'aumento del carico di lavoro, il cliente decide di predisporre un'altra istanza EC2 con una configurazione identica. Come può farlo?",
    "opts": [
      "Creando un modello di AWS Config dalla vecchia istanza e avviando da esso una nuova istanza.",
      "Creando uno snapshot EBS della vecchia istanza.",
      "Installando Aurora su EC2 e avviando da esso una nuova istanza.",
      "Creando una AMI dalla vecchia istanza e avviando da essa una nuova istanza."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Storage"
    ],
    "id": "6a8260326391",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda usa AWS Organizations per gestire tutti i suoi account AWS. Quale dei seguenti strumenti le permette di limitare quali servizi e azioni sono consentiti in ogni singolo account?",
    "opts": [
      "IAM Principal.",
      "AWS Service Control Policy (SCP).",
      "Policy IAM.",
      "AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "ECS / Fargate"
    ],
    "id": "b223019955bf",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale delle seguenti affermazioni descrive l'agilità del cloud AWS?",
    "opts": [
      "AWS permette di ospitare le applicazioni in più Regioni nel mondo.",
      "AWS fornisce hardware personalizzabile al costo più basso possibile.",
      "AWS permette di predisporre risorse in pochi minuti.",
      "AWS permette di pagare in anticipo per ridurre i costi."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "0eaa586b15fd",
    "explain": "L'agilità di AWS riduce il tempo per ottenere risorse IT da settimane a minuti. Accelera i cicli di sviluppo e permette di sperimentare rapidamente a basso costo. Le aziende possono innovare e rispondere al mercato molto più velocemente."
  },
  {
    "q": "Quali sono i vantaggi dell'uso di Amazon Relational Database Service? (Scegline DUE)",
    "opts": [
      "Minore carico amministrativo.",
      "Controllo completo sull'host sottostante.",
      "Capacità di calcolo ridimensionabile.",
      "Scala automaticamente verso tipi di istanza più grandi o più piccoli.",
      "Supporta le strutture dati a documenti e chiave-valore."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB"
    ],
    "id": "9dee4e9f5c57"
  },
  {
    "q": "Qual è l'opzione di connettività che usa Internet Protocol Security (IPSec) per stabilire una connessione cifrata tra una rete on-premises e il cloud AWS?",
    "opts": [
      "Internet Gateway.",
      "AWS IQ.",
      "AWS Direct Connect.",
      "AWS Site-to-Site VPN."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking",
      "Support"
    ],
    "id": "74e834dda5b5",
    "explain": "AWS Site-to-Site VPN crea una connessione cifrata tramite Internet Protocol Security (IPSec) tra il data center on-premise e il VPC AWS. È un'alternativa più economica al Direct Connect ma con latenza e banda variabili dipendenti dalla qualità della connessione internet. Ideale per connettività ibrida con requisiti di banda moderati o come backup del Direct Connect."
  },
  {
    "q": "Qual è il livello minimo di supporto AWS che offre accesso 24 ore su 24, 7 giorni su 7, agli ingegneri del supporto tecnico via telefono e chat?",
    "opts": [
      "Enterprise Support.",
      "Developer Support.",
      "Basic Support.",
      "Business Support."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4d63ccc9c6ff",
    "explain": "Il piano AWS Business Support (a partire da $100/mese o 10% della spesa mensile) è il minimo che fornisce accesso 24/7 al supporto tecnico tramite telefono, chat e email. Include tempi di risposta <1 ora per sistemi di produzione critici, <4 ore per sistemi compromessi e accesso completo ai check di AWS Trusted Advisor. È il livello minimo raccomandato per ambienti di produzione."
  },
  {
    "q": "Quali dei seguenti strumenti si usano per controllare il traffico di rete in AWS? (Scegline DUE)",
    "opts": [
      "Network Access Control List (NACL).",
      "Coppie di chiavi.",
      "Chiavi di accesso.",
      "Policy IAM.",
      "Security group."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ],
    "id": "3d86542d597c",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Un'azienda ha sviluppato un'applicazione di transcodifica multimediale su AWS. L'applicazione è progettata per riprendersi rapidamente dai guasti hardware. Quale dei seguenti tipi di istanza sarebbe la scelta più conveniente?",
    "opts": [
      "Istanze Reserved.",
      "Istanze Spot.",
      "Istanze On-Demand.",
      "Istanze Dedicated."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "af9e51f9a57e",
    "explain": "Le EC2 Spot Instance usano capacità inutilizzata a prezzi fino al 90% inferiori. Possono essere interrotte con 2 minuti di preavviso. Ideali per batch e rendering, non per workload critici."
  },
  {
    "q": "Quale servizio AWS fornisce lo stato attuale di tutti i servizi AWS in tutte le Regioni AWS?",
    "opts": [
      "AWS Service Health Dashboard.",
      "AWS Management Console.",
      "Amazon CloudWatch.",
      "AWS Personal Health Dashboard."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "50574b52f30d",
    "explain": "Il Service Health Dashboard mostra la salute di tutti i servizi AWS in tutte le regioni in tempo reale. È pubblicamente accessibile. Per informazioni personalizzate si usa il Personal Health Dashboard."
  },
  {
    "q": "Quale servizio o funzionalità AWS può essere usato per chiamare i servizi AWS da diversi linguaggi di programmazione?",
    "opts": [
      "AWS Software Development Kit.",
      "AWS Command Line Interface.",
      "AWS CodeDeploy.",
      "AWS Management Console."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a86ce9a81785",
    "explain": "L'AWS SDK (Software Development Kit) permette agli sviluppatori di interagire con i servizi AWS dal codice applicativo in Python, JavaScript, Java, C# e altri linguaggi. Gestisce autenticazione, retry automatici e serializzazione. È il modo standard per integrare servizi AWS nelle applicazioni."
  },
  {
    "q": "Quale servizio AWS può essere usato per registrare un nuovo nome di dominio?",
    "opts": [
      "Amazon Personalize.",
      "Amazon Route 53.",
      "AWS KMS.",
      "AWS Config."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ],
    "id": "91e117974319",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Le aziende che sviluppano app spostano la loro attività su AWS per ridurre il time to market e migliorare la soddisfazione dei clienti. Quali sono gli strumenti di automazione AWS che le aiutano a distribuire le applicazioni più velocemente? (Scegline DUE)",
    "opts": [
      "AWS CloudFormation.",
      "AWS Migration Hub.",
      "AWS IAM.",
      "AWS Elastic Beanstalk.",
      "Amazon Macie."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFormation",
      "Security"
    ],
    "id": "0c5eebd3c603",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale servizio AWS fornisce raccomandazioni per l'ottimizzazione dei costi?",
    "opts": [
      "AWS Trusted Advisor.",
      "AWS Pricing Calculator.",
      "Amazon QuickSight.",
      "AWS X-Ray."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics",
      "Support"
    ],
    "id": "8effe565e398",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Un'azienda ha centinaia di VPC in più Regioni AWS nel mondo. Quale servizio offre AWS per semplificare la gestione delle connessioni tra i VPC?",
    "opts": [
      "VPC Peering.",
      "AWS Transit Gateway.",
      "Amazon Connect.",
      "Security group."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "001c6c4474b8",
    "explain": "AWS Transit Gateway è un hub che semplifica la connettività tra VPC e reti on-premise con un modello hub-and-spoke. Connette fino a 5000 VPC eliminando peering mesh complesse."
  },
  {
    "q": "Qual è un vantaggio e qual è uno svantaggio dell'acquisto di un'istanza EC2 Reserved? (Scegline DUE)",
    "opts": [
      "Le istanze possono essere spente da AWS in qualsiasi momento senza preavviso.",
      "Le istanze Reserved richiedono un impegno di prezzo di almeno un anno.",
      "Non ci sono costi aggiuntivi per l'uso di istanze dedicate.",
      "Le istanze Reserved offrono uno sconto significativo rispetto alle istanze On-Demand.",
      "Le istanze Reserved sono più adatte a carichi di lavoro periodici."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "41f87acea07d",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Perché ogni Regione AWS contiene più Availability Zone?",
    "opts": [
      "Più Availability Zone permettono di costruire architetture resilienti e altamente disponibili.",
      "Più Availability Zone portano a un costo totale più basso rispetto alla distribuzione in una singola Availability Zone.",
      "Più Availability Zone permettono la replica dei dati e la portata globale.",
      "Più Availability Zone in una Regione aumentano la capacità di storage disponibile in quella Regione."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "f4927307f3d1",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Qual è l'opzione di acquisto più conveniente per eseguire un gruppo di istanze EC2 che devono essere sempre disponibili per un periodo di due mesi?",
    "opts": [
      "Istanze On-Demand.",
      "Istanze Spot.",
      "Istanze Reserved - pagamento anticipato totale (All Upfront).",
      "Istanze Reserved - senza pagamento anticipato (No Upfront)."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "543f238c1a94",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti è un vantaggio di eseguire un'applicazione in più Availability Zone?",
    "opts": [
      "Permette di superare i limiti dei servizi AWS.",
      "Riduce il tempo di risposta dell'applicazione tra i server e gli utenti globali.",
      "Aumenta la capacità di calcolo disponibile.",
      "Aumenta la disponibilità dell'applicazione."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "cd430c76915c",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "La sicurezza dei dati è una delle massime priorità di AWS. Come gestisce AWS i vecchi dispositivi di storage arrivati alla fine della loro vita utile?",
    "opts": [
      "AWS vende i vecchi dispositivi ad altri provider di hosting.",
      "AWS distrugge i vecchi dispositivi secondo le pratiche standard del settore.",
      "AWS invia i vecchi dispositivi alla rigenerazione.",
      "AWS conserva i vecchi dispositivi in un luogo sicuro."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c27e9a7d2c7f",
    "explain": "AWS è responsabile della distruzione sicura dei dispositivi di storage fisici a fine vita seguendo standard di settore come NIST 800-88. Questo include demagnetizzazione e distruzione fisica dei dischi che hanno contenuto dati dei clienti. Nel modello Shared Responsibility, la gestione fisica dell'hardware inclusa la sua dismissione sicura è esclusivamente responsabilità di AWS."
  },
  {
    "q": "AWS permette agli utenti di gestire le proprie risorse tramite un'interfaccia utente web. Come si chiama questa interfaccia?",
    "opts": [
      "AWS CLI.",
      "AWS API.",
      "AWS SDK.",
      "AWS Management Console."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "bef6841a79b5",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Quale dei seguenti è un esempio di scalabilità orizzontale nel cloud AWS?",
    "opts": [
      "Sostituire un'istanza EC2 esistente con una più grande e più potente.",
      "Aumentare la capacità di calcolo di una singola istanza EC2 per far fronte alla domanda crescente di un'applicazione.",
      "Aggiungere RAM a un'istanza EC2.",
      "Aggiungere altre istanze EC2 della stessa dimensione per gestire un aumento del traffico."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "984593b7409e",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Hai notato che diverse istanze Amazon EC2 critiche sono state terminate. Quale dei seguenti servizi AWS ti aiuterebbe a capire chi ha eseguito questa azione?",
    "opts": [
      "Amazon Inspector.",
      "AWS CloudTrail.",
      "AWS Trusted Advisor.",
      "EC2 Instance Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security",
      "Support"
    ],
    "id": "e4631f6a4b8d",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quali delle seguenti opzioni riguardano l'affidabilità di AWS? (Scegline DUE)",
    "opts": [
      "Applicare il principio del privilegio minimo a tutte le risorse AWS.",
      "Predisporre automaticamente nuove risorse per soddisfare la domanda.",
      "Tutti i servizi AWS sono considerati servizi globali, e questa architettura aiuta i clienti a servire gli utenti internazionali.",
      "Fornire un risarcimento ai clienti se si verificano problemi.",
      "Capacità di riprendersi rapidamente dai guasti."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "453e657c9e3f",
    "explain": "Il pillar Reliability del Well-Architected Framework garantisce che un workload esegua la sua funzione in modo coerente. Include recupero automatico dai guasti, scaling orizzontale e testing del disaster recovery."
  },
  {
    "q": "Quale affermazione è vera riguardo al modello di responsabilità condivisa di AWS?",
    "opts": [
      "Le responsabilità variano a seconda dei servizi usati.",
      "La sicurezza dei servizi IaaS è responsabilità di AWS.",
      "Applicare le patch al sistema operativo guest è sempre responsabilità di AWS.",
      "La sicurezza dei servizi gestiti è responsabilità del cliente."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "e73e02f87452",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Hai configurato la fatturazione consolidata per diversi account AWS. Uno degli account ha acquistato alcune istanze Reserved per 3 anni. Quale delle seguenti affermazioni è vera in questo scenario?",
    "opts": [
      "Gli sconti delle Istanze Reserved possono essere condivisi solo con l'account master.",
      "Tutti gli account possono ricevere il vantaggio sul costo orario delle Istanze Reserved.",
      "Le istanze acquistate avranno prestazioni migliori delle istanze On-Demand.",
      "La fatturazione consolidata non dà vantaggi economici: serve solo a scopo informativo."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "e9cb4420ef64",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Un'azienda ha sviluppato un'applicazione web di eCommerce su AWS. Cosa dovrebbe fare per garantire il massimo livello di disponibilità dell'applicazione?",
    "opts": [
      "Distribuire l'applicazione su più Availability Zone ed edge location.",
      "Distribuire l'applicazione su più Availability Zone e subnet.",
      "Distribuire l'applicazione su più Regioni e Availability Zone.",
      "Distribuire l'applicazione su più VPC e subnet."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ],
    "id": "9456021e611d",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Che cosa offre AWS Snowball? (Scegline DUE)",
    "opts": [
      "Capacità di calcolo integrate che permettono ai clienti di elaborare i dati in locale.",
      "Un catalogo di soluzioni software di terze parti di cui i clienti hanno bisogno per costruire soluzioni e gestire la propria attività.",
      "Uno storage cloud ibrido tra ambienti on-premises e cloud AWS.",
      "Un servizio di trasferimento dati su scala exabyte che permette di spostare quantità enormi di dati in AWS.",
      "Il trasferimento sicuro di grandi quantità di dati verso e da AWS."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Storage"
    ],
    "id": "662a2d99f493",
    "explain": "AWS Snowball è un dispositivo fisico per migrare grandi quantità di dati verso AWS senza usare internet. Ideale quando la migrazione via rete richiederebbe settimane. Snowball Edge aggiunge capacità di calcolo locale."
  },
  {
    "q": "Un'azienda ha un piano AWS Enterprise Support. Vuole un'assistenza rapida ed efficiente per le domande su fatturazione e account. Quale delle seguenti opzioni dovrebbe usare?",
    "opts": [
      "AWS Health Dashboard.",
      "AWS Support Concierge.",
      "AWS Customer Service.",
      "AWS Operations Support."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "770120316364",
    "explain": "Il team AWS Enterprise Support Concierge risponde a domande su fatturazione e account per i clienti Enterprise. Aiuta a navigare le complessità amministrative di AWS."
  },
  {
    "q": "Un'azienda giapponese ospita le proprie applicazioni su istanze Amazon EC2 nella Regione di Tokyo. L'azienda ha aperto nuove filiali negli Stati Uniti, e gli utenti statunitensi si lamentano di una latenza alta. Cosa può fare l'azienda per ridurre la latenza per gli utenti negli Stati Uniti contenendo i costi?",
    "opts": [
      "Applicare la policy di routing basata sulla latenza di Amazon Connect.",
      "Registrare un nuovo nome di dominio statunitense per servire gli utenti negli Stati Uniti.",
      "Costruire un nuovo data center negli Stati Uniti e implementare un modello ibrido.",
      "Distribuire nuove istanze Amazon EC2 in una Regione situata negli Stati Uniti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "c0ae4e4434c9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'organizzazione ha molti dipendenti tecnici che gestiscono la sua infrastruttura nel cloud AWS. Cosa mette a disposizione AWS per organizzarli in team e poi assegnare i permessi appropriati a ciascun team?",
    "opts": [
      "Ruoli IAM.",
      "Utenti IAM.",
      "Gruppi di utenti IAM.",
      "AWS Organizations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "6b11ba7cb13e",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Un'azienda ha deciso di migrare il proprio database Oracle su AWS. Quale servizio AWS può aiutare a farlo senza compromettere il funzionamento del database di origine?",
    "opts": [
      "AWS OpsWorks.",
      "AWS Database Migration Service.",
      "AWS Server Migration Service.",
      "AWS Application Discovery Service."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "25c710afd084"
  },
  {
    "q": "Regolare dinamicamente la capacità di calcolo per ridurre i costi è l'applicazione di quale best practice del cloud AWS?",
    "opts": [
      "Integrare la sicurezza a ogni livello.",
      "Parallelizzare le attività.",
      "Implementare l'elasticità.",
      "Adottare un'architettura monolitica."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "712171208b3d",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Quali sono i vantaggi di avere l'infrastruttura ospitata su AWS? (Scegline DUE)",
    "opts": [
      "Maggiore velocità e agilità.",
      "Non c'è bisogno di preoccuparsi della sicurezza.",
      "Ottenere il controllo completo sull'infrastruttura fisica.",
      "Gestire le applicazioni per conto dei clienti.",
      "Tutta la sicurezza fisica e gran parte della sicurezza dei dati e della rete sono gestite al posto tuo."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "a51b0822d27a",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica dei data center: controlli di accesso fisico, videosorveglianza e distruzione dei dispositivi di storage a fine vita secondo gli standard di settore. Nel modello Shared Responsibility, la sicurezza fisica dell'infrastruttura non è mai responsabilità del cliente. Questo include manutenzione dell'hardware, controlli ambientali e sicurezza del personale AWS."
  },
  {
    "q": "Qual è il vantaggio della pratica raccomandata da AWS di \"disaccoppiare\" le applicazioni?",
    "opts": [
      "Permette di trattare un'applicazione come un'unica unità coesa.",
      "Riduce le interdipendenze, così che i guasti non abbiano impatto sugli altri componenti dell'applicazione.",
      "Permette di aggiornare qualsiasi applicazione monolitica in modo rapido e semplice.",
      "Permette di tracciare qualsiasi chiamata API fatta a qualsiasi servizio AWS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "f15f184887a0"
  },
  {
    "q": "Quale dei seguenti strumenti aiuta un cliente a vedere l'attività di fatturazione di Amazon EC2 del mese passato?",
    "opts": [
      "AWS Budgets.",
      "AWS Pricing Calculator.",
      "AWS Systems Manager.",
      "AWS Cost & Usage Reports."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "982434f0ed5d",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Cosa ottieni configurando la fatturazione consolidata per cinque account AWS diversi sotto un altro account master?",
    "opts": [
      "I costi dei servizi AWS si ridurranno alla metà del prezzo originale.",
      "La funzionalità di fatturazione consolidata serve solo a scopo organizzativo.",
      "Ogni account AWS ottiene sconti sui volumi.",
      "Ogni account AWS ottiene cinque volte la capacità dei servizi del piano gratuito (free tier)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "bc4821b4205d",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Cosa dovresti fare per mantenere al sicuro i dati sui volumi EBS? (Scegline DUE)",
    "opts": [
      "Aggiornare regolarmente il firmware dei dispositivi EBS.",
      "Creare snapshot EBS.",
      "Assicurarsi che i dati EBS siano cifrati a riposo.",
      "Salvare ogni giorno un backup su un disco esterno.",
      "Impedire qualsiasi accesso non autorizzato ai data center AWS."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Storage"
    ],
    "id": "42783274f4b1",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Una delle best practice AWS più importanti da seguire è il principio di architettura cloud dell'elasticità. In che modo questo principio migliora la progettazione della tua architettura?",
    "opts": [
      "Scalando automaticamente le risorse on-premises in base ai cambiamenti della domanda.",
      "Scalando automaticamente le risorse AWS tramite un Elastic Load Balancer.",
      "Riducendo dove possibile le interdipendenze tra i componenti dell'applicazione.",
      "Predisponendo automaticamente le risorse AWS necessarie in base ai cambiamenti della domanda."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "d97e767987a6",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Una startup dispone di fondi limitati ed è molto preoccupata di sforare i costi. Quali delle seguenti opzioni possono essere usate per avvisare l'azienda quando la fattura mensile AWS supera i 2000 $? (Scegline DUE)",
    "opts": [
      "Configurare un allarme di fatturazione CloudWatch che invii una notifica SNS quando la soglia viene superata.",
      "Configurare Amazon Simple Email Service per inviare ogni giorno avvisi di fatturazione al loro indirizzo email.",
      "Configurare il servizio AWS Budgets per avvisare l'azienda quando la soglia viene superata.",
      "Configurare AWS CloudTrail per eliminare automaticamente tutte le risorse AWS quando la soglia viene superata.",
      "Configurare il servizio Amazon Connect per avvisare l'azienda quando la soglia viene superata."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS",
      "Billing & Cost"
    ],
    "id": "0b2ce4f8c05d",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Che cosa usa Amazon CloudFront per distribuire contenuti agli utenti di tutto il mondo con bassa latenza?",
    "opts": [
      "AWS Global Accelerator.",
      "Regioni AWS.",
      "Edge location AWS.",
      "Availability Zone AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Networking"
    ],
    "id": "0a4d60fea177",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "A cosa si riferisce il \"principio del privilegio minimo\"?",
    "opts": [
      "Devi concedere ai tuoi utenti solo i permessi di cui hanno bisogno, quando ne hanno bisogno, e niente di più.",
      "Tutti gli utenti IAM dovrebbero avere almeno i permessi necessari per accedere ai servizi AWS principali.",
      "Tutti gli utenti IAM fidati dovrebbero avere accesso a qualsiasi servizio AWS nel rispettivo account AWS.",
      "Agli utenti IAM non dovrebbe essere concesso alcun permesso, per mantenere sicuro l'account."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "c303cc0b2bd7",
    "explain": "Il principio del Least Privilege richiede di concedere agli utenti solo i permessi strettamente necessari. Riduce il rischio in caso di compromissione delle credenziali. Si implementa con policy IAM granulari revisionate periodicamente."
  },
  {
    "q": "Quale dei seguenti NON fa parte dei modelli di cloud computing di AWS?",
    "opts": [
      "Platform as a Service (PaaS).",
      "Infrastructure as a Service (IaaS).",
      "Software as a Service (SaaS).",
      "Networking as a Service (NaaS)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e3c044710353",
    "explain": "I modelli di cloud computing riconosciuti sono: IaaS (Infrastructure as a Service: EC2, VPC), PaaS (Platform as a Service: Elastic Beanstalk, RDS gestito) e SaaS (Software as a Service: applicazioni complete come Gmail). 'Networking as a Service' (NaaS) non è un modello di cloud computing standard riconosciuto da AWS o dall'industria. Spesso usato in contesti specifici ma non è uno dei tre modelli principali."
  },
  {
    "q": "La procedura di identificazione di una società di servizi finanziari online richiede che i nuovi utenti completino un colloquio online con il team di sicurezza. Le registrazioni dei colloqui servono solo in caso di una questione legale o di una violazione della conformità normativa. Qual è il servizio più conveniente per conservare i video registrati?",
    "opts": [
      "S3 Intelligent-Tiering.",
      "AWS Marketplace.",
      "Amazon S3 Glacier Deep Archive.",
      "Amazon EBS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "2ebff6bb968c",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale servizio fornisce il DNS nel cloud AWS?",
    "opts": [
      "Route 53.",
      "AWS Config.",
      "Amazon CloudFront.",
      "Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53",
      "Analytics"
    ],
    "id": "c6d6f5c60022",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Ogni mese nel mondo vengono registrati centinaia di migliaia di attacchi DDoS. Quale servizio fornisce AWS per aiutare a proteggere i clienti AWS da questi attacchi? (Scegline DUE)",
    "opts": [
      "AWS Shield.",
      "AWS Config.",
      "Amazon Cognito.",
      "AWS WAF.",
      "AWS KMS."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "61aaa89808af",
    "explain": "AWS Shield protegge le applicazioni dagli attacchi DDoS. Shield Standard è gratuito e automatico. Shield Advanced protegge EC2, ELB, CloudFront e Route 53 con supporto 24/7 del DDoS Response Team."
  },
  {
    "q": "Un'azienda sta distribuendo su AWS una nuova applicazione web a due livelli. Dove dovrebbero essere conservati i dati letti più spesso, così che il tempo di risposta dell'applicazione sia ottimale?",
    "opts": [
      "AWS OpsWorks.",
      "AWS Storage Gateway.",
      "Volume Amazon EBS.",
      "Amazon ElastiCache."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "293ffeac2508",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "Vuoi eseguire un'applicazione di questionari per un solo giorno (senza interruzioni). Quale opzione di acquisto di Amazon EC2 dovresti usare?",
    "opts": [
      "Istanze Reserved.",
      "Istanze Spot.",
      "Istanze Dedicated.",
      "Istanze On-Demand."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "d2851da2619b",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Stai lavorando a un progetto che prevede la creazione di miniature di milioni di immagini. Un uptime costante non è un problema, e non serve un'elaborazione continua. Quale opzione di acquisto EC2 sarebbe la più conveniente?",
    "opts": [
      "Istanze Reserved.",
      "Istanze On-Demand.",
      "Istanze Dedicated.",
      "Istanze Spot."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "48893830a962",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti può essere descritto come un servizio globale di content delivery network (CDN)?",
    "opts": [
      "AWS VPN.",
      "AWS Direct Connect.",
      "Regioni AWS.",
      "Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Networking"
    ],
    "id": "af3b1e2530ca",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale dei seguenti servizi permette ai clienti di gestire i propri accordi con AWS?",
    "opts": [
      "AWS Artifact.",
      "AWS Certificate Manager.",
      "AWS Systems Manager.",
      "AWS Organizations."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "bd96af449f60",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quali dei seguenti sono esempi di servizi gestiti da AWS, in cui AWS è responsabile del lavoro operativo e di manutenzione per far funzionare il servizio? (Scegline DUE)",
    "opts": [
      "Amazon VPC.",
      "Amazon DynamoDB.",
      "Amazon Elastic MapReduce.",
      "AWS IAM.",
      "Amazon Elastic Compute Cloud."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "VPC",
      "DynamoDB"
    ],
    "id": "69ec913c06a9",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "La tua azienda ha un'applicazione di archiviazione dati che ha bisogno di un database NoSQL. Quale offerta di database AWS soddisfa questo requisito?",
    "opts": [
      "Amazon Aurora.",
      "Amazon DynamoDB.",
      "Amazon Elastic Block Store.",
      "Amazon Redshift."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Storage",
      "Analytics"
    ],
    "id": "cd06f391181a",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Nel piano Enterprise Support, chi è il punto di contatto principale per le esigenze di supporto continuative?",
    "opts": [
      "Un utente AWS Identity and Access Management (IAM).",
      "Un ingegnere Infrastructure Event Management (IEM).",
      "Gli AWS Consulting Partner.",
      "Il Technical Account Manager (TAM)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Support"
    ],
    "id": "e74b16f7e2c6",
    "explain": "Il Technical Account Manager (TAM) è un consulente AWS dedicato incluso nel piano Enterprise Support. Fornisce supporto proattivo, revisioni architetturali e accesso prioritario agli esperti AWS."
  },
  {
    "q": "Come puoi vedere la distribuzione della spesa AWS in uno dei tuoi account AWS?",
    "opts": [
      "Usando la console di Amazon VPC.",
      "Contattando il team di AWS Support.",
      "Usando AWS Cost Explorer.",
      "Contattando il team finanziario di AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront",
      "Billing & Cost"
    ],
    "id": "a9f45d6e5b83",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Quale dei seguenti elementi deve fornire un utente IAM per interagire con i servizi AWS tramite la AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "Chiavi di accesso.",
      "Token segreto.",
      "UserID.",
      "Nome utente e password."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "3e1dda242617",
    "explain": "L'AWS CLI (Command Line Interface) permette di gestire i servizi AWS direttamente dal terminale con comandi. Può essere usata per automatizzare operazioni tramite scripting. Richiede configurazione con Access Key o ruolo IAM."
  },
  {
    "q": "Hai il piano AWS Basic Support e hai scoperto che alcune risorse AWS vengono usate in modo malevolo, e quelle risorse potrebbero compromettere i tuoi dati. Cosa dovresti fare?",
    "opts": [
      "Contattare il team AWS Customer Service.",
      "Contattare il team AWS Abuse.",
      "Contattare il team AWS Concierge.",
      "Contattare il team AWS Security."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "51bce8a02b09",
    "explain": "Il team AWS Abuse gestisce segnalazioni di utilizzo abusivo dell'infrastruttura AWS come attacchi, malware e port scanning da IP AWS. Si contatta tramite il form AWS o abuse@amazonaws.com."
  },
  {
    "q": "Scegli DUE esempi di controlli condivisi di AWS.",
    "opts": [
      "Gestione delle patch.",
      "Gestione di IAM.",
      "Gestione dei VPC.",
      "Gestione della configurazione.",
      "Operazioni del data center."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ],
    "id": "b5063cca97f2",
    "explain": "I controlli condivisi (Shared Controls) nel modello AWS Shared Responsibility sono responsabilità sia di AWS che del cliente, ma in contesti separati. Patch Management: AWS patcha l'infrastruttura e i servizi gestiti; il cliente patcha il proprio OS e le applicazioni. Configuration Management: AWS configura l'infrastruttura; il cliente configura le proprie applicazioni. Awareness and Training: entrambi devono formare i propri dipendenti."
  },
  {
    "q": "Per applicare le best practice nella gestione di un \"single point of failure\" (punto unico di guasto), dovresti cercare di automatizzare il più possibile sia il rilevamento sia la reazione ai guasti. Quali dei seguenti servizi AWS sarebbero d'aiuto? (Scegline DUE)",
    "opts": [
      "ELB.",
      "Auto Scaling.",
      "Amazon Athena.",
      "ECR.",
      "Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "bd61c51542ec",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Un'azienda sta pianificando di ospitare un sito web di formazione su AWS. I suoi corsi video saranno trasmessi in streaming in tutto il mondo. Quale dei seguenti servizi AWS aiuterà a ottenere alte velocità di trasferimento?",
    "opts": [
      "Amazon SNS.",
      "Amazon Kinesis Video Streams.",
      "AWS CloudFormation.",
      "Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "SNS",
      "CloudFormation",
      "Storage",
      "Analytics"
    ],
    "id": "70c7efd937e6",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Uno sviluppatore sta pianificando di costruire un'applicazione web a due livelli con un livello di database MySQL. Quale dei seguenti servizi di database AWS fornirebbe backup automatici per l'applicazione?",
    "opts": [
      "Un database MySQL installato su un'istanza EC2.",
      "Amazon Aurora.",
      "Amazon DynamoDB.",
      "Amazon Neptune."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB"
    ],
    "id": "b944e53532f6",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Qual è il servizio AWS che permette agli architetti AWS di gestire l'infrastruttura come codice?",
    "opts": [
      "AWS CloudFormation.",
      "AWS Config.",
      "Amazon SES.",
      "Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Analytics"
    ],
    "id": "137206d9d497",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quale dei seguenti aspetti è responsabilità di AWS?",
    "opts": [
      "La cifratura lato client.",
      "La configurazione dei dispositivi dell'infrastruttura.",
      "La cifratura lato server.",
      "Il filtraggio del traffico con i security group."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Security",
      "Shared Responsibility"
    ],
    "id": "90015f2f5417",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Che cosa fornisce l'AWS Health Dashboard? (Scegline DUE)",
    "opts": [
      "Indicazioni dettagliate per risolvere gli eventi AWS che hanno impatto sulle tue risorse.",
      "Controlli di stato per le istanze di Auto Scaling.",
      "Raccomandazioni per l'ottimizzazione dei costi.",
      "Una dashboard con il dettaglio delle vulnerabilità delle tue applicazioni.",
      "Una vista personalizzata dello stato di salute dei servizi AWS."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Well-Architected"
    ],
    "id": "c77ad7df3743",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Hai distribuito la tua applicazione su più istanze Amazon EC2. I tuoi clienti si lamentano che a volte non riescono a raggiungere l'applicazione. Quale servizio AWS permette di monitorare le prestazioni delle istanze EC2 per aiutarti a risolvere questi problemi?",
    "opts": [
      "AWS Lambda.",
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "CloudWatch"
    ],
    "id": "5a9013364380",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "La tua azienda sta sviluppando un'applicazione web critica su AWS, e la sicurezza dell'applicazione è una priorità assoluta. Quale dei seguenti servizi AWS fornirà raccomandazioni per ottimizzare la sicurezza dell'infrastruttura?",
    "opts": [
      "AWS Shield.",
      "AWS Management Console.",
      "AWS Secrets Manager.",
      "AWS Trusted Advisor."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "515950f9e62c",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale dei seguenti NON è un vantaggio di Amazon S3? (Scegline DUE)",
    "opts": [
      "Amazon S3 offre storage illimitato per qualsiasi tipo di dati.",
      "Amazon S3 può eseguire qualsiasi tipo di applicazione o sistema di backend.",
      "Amazon S3 conserva un numero qualsiasi di oggetti, ma con limiti di dimensione per oggetto.",
      "Amazon S3 può essere scalato manualmente per salvare e recuperare qualsiasi quantità di dati da qualsiasi luogo.",
      "Amazon S3 offre una durabilità dei dati del 99,999999999% (11 nove)."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "S3"
    ],
    "id": "9ab978ff443e",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Nel modello di responsabilità condivisa di AWS, quali dei seguenti aspetti sono responsabilità del cliente? (Scegline DUE)",
    "opts": [
      "Lo smaltimento dei dischi.",
      "Il controllo dell'accesso fisico alle risorse di calcolo.",
      "L'applicazione delle patch all'infrastruttura di rete.",
      "L'impostazione delle regole di complessità delle password.",
      "La configurazione delle regole di accesso alla rete."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "AI / ML",
      "Shared Responsibility"
    ],
    "id": "f656c35ce4ae",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Che cosa mette a disposizione AWS per distribuire su AWS tecnologie diffuse come IBM MQ con il minimo sforzo e nel minor tempo?",
    "opts": [
      "Amazon Aurora.",
      "Amazon CloudWatch.",
      "Le distribuzioni di riferimento AWS Quick Start.",
      "AWS OpsWorks."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch"
    ],
    "id": "07e1fef544f3",
    "explain": "Gli AWS Quick Start automatizzano il deployment di soluzioni popolari usando CloudFormation. Permettono di deployare in pochi minuti architetture complesse. Sviluppati da AWS e partner certificati seguendo le best practice."
  },
  {
    "q": "Un'organizzazione ha deciso di acquistare un'Istanza Reserved (RI) Amazon EC2 per tre anni per ridurre i costi. È possibile che i carichi di lavoro dell'applicazione cambino durante il periodo di prenotazione. Quale tipo di Istanza Reserved EC2 permetterà all'azienda di scambiare l'istanza acquistata con un'altra istanza Reserved con più potenza di calcolo, se ne avrà bisogno?",
    "opts": [
      "Elastic RI.",
      "Premium RI.",
      "Standard RI.",
      "Convertible RI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "b7ca8788999d",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Quale vantaggio in termini di risparmio di tempo offre l'uso di Amazon Rekognition?",
    "opts": [
      "Amazon Rekognition applica automaticamente una filigrana alle immagini.",
      "Amazon Rekognition rileva automaticamente gli oggetti che compaiono nelle immagini.",
      "Amazon Rekognition permette di ridimensionare automaticamente milioni di immagini.",
      "Amazon Rekognition usa Amazon Mechanical Turk per permettere a persone di fare offerte su lavori di rilevamento di oggetti."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "2da3d31a3adb"
  },
  {
    "q": "Quando si confronta il costo totale di proprietà (TCO) di AWS con quello on-premises, quali costi sono inclusi?",
    "opts": [
      "La sicurezza del data center",
      "L'analisi di business",
      "La gestione dei progetti",
      "L'amministrazione del sistema operativo"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "ff867323f703",
    "explain": "Nel calcolo del Total Cost of Ownership (TCO) on-premise bisogna includere non solo il costo del server, ma anche sicurezza del data center, personale IT per manutenzione, costi di facility (spazio, elettricità, raffreddamento), hardware di networking e costi di dismissione hardware. AWS elimina tutti questi costi nascosti con un modello pay-as-you-go dove si paga solo per le risorse cloud usate."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, di cosa è responsabile AWS?",
    "opts": [
      "Configurare Amazon VPC",
      "Gestire il codice dell'applicazione",
      "Gestire il traffico dell'applicazione",
      "Gestire l'infrastruttura di rete"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ],
    "id": "acfb1b9d520d",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio dovrebbe essere usato per stimare i costi di un nuovo progetto su AWS?",
    "opts": [
      "AWS TCO Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Cost Explorer API",
      "AWS Budgets"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "bbc2d552c0fb",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Quale strumento AWS individua i security group che concedono accesso illimitato da Internet a un elenco ristretto di porte?",
    "opts": [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Usage Report",
      "Dashboard di Amazon EC2"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Support"
    ],
    "id": "7ecf25131b7c",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale servizio AWS può essere usato per generare avvisi basati sulla fattura mensile stimata?",
    "opts": [
      "AWS Config",
      "Amazon CloudWatch",
      "AWS X-Ray",
      "AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "e6df934fe014",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quale modello di prezzo di Amazon EC2 offre lo sconto PIÙ consistente rispetto alle Istanze On-Demand?",
    "opts": [
      "Istanze Reserved con pagamento anticipato parziale (Partial Upfront) per 1 anno",
      "Istanze Reserved con pagamento anticipato totale (All Upfront) per 1 anno",
      "Istanze Reserved con pagamento anticipato totale (All Upfront) per 3 anni",
      "Istanze Reserved senza pagamento anticipato (No Upfront) per 3 anni"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "d79a09f944c2",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale delle seguenti è responsabilità di AWS?",
    "opts": [
      "Configurare utenti e gruppi di AWS Identity and Access Management (IAM)",
      "Distruggere fisicamente i supporti di storage a fine vita",
      "Applicare le patch ai sistemi operativi guest",
      "Configurare le impostazioni di sicurezza delle istanze Amazon EC2"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "79d0e03cb76b",
    "explain": "AWS è responsabile della distruzione sicura dei dispositivi di storage fisici a fine vita seguendo standard di settore come NIST 800-88. Questo include demagnetizzazione e distruzione fisica dei dischi che hanno contenuto dati dei clienti. Nel modello Shared Responsibility, la gestione fisica dell'hardware inclusa la sua dismissione sicura è esclusivamente responsabilità di AWS."
  },
  {
    "q": "Quale dei seguenti è un vantaggio dell'uso di AWS?",
    "opts": [
      "AWS verifica i dati degli utenti.",
      "I dati sono automaticamente sicuri.",
      "Non bisogna indovinare il fabbisogno di capacità.",
      "AWS gestisce le esigenze di conformità."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "101ff8f8feef",
    "explain": "L'elasticità cloud AWS permette di scalare automaticamente le risorse in risposta alla domanda reale, senza dover fare previsioni di capacità in anticipo. Questo riduce il TCO eliminando sia il sovra-provisioning (sprechi) che il sotto-provisioning (performance degradate). Si paga solo per le risorse effettivamente usate, adattando automaticamente la capacità al carico."
  },
  {
    "q": "Quale servizio AWS userebbe un cliente con un sito web statico per ottenere una latenza più bassa e alte velocità di trasferimento?",
    "opts": [
      "AWS Lambda",
      "Amazon DynamoDB Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "CloudFront",
      "Route 53",
      "DynamoDB",
      "Storage"
    ],
    "id": "ba10b3311aa8",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quali servizi gestiscono e automatizzano la distribuzione delle applicazioni su AWS? (Scegline due.)",
    "opts": [
      "AWS Elastic Beanstalk",
      "AWS CodeCommit",
      "AWS Data Pipeline",
      "AWS CloudFormation",
      "AWS Config"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFormation"
    ],
    "id": "82d378cf8e94",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Un utente vuole indicazioni sui possibili risparmi migrando dall'on-premises ad AWS. Quale strumento è adatto a questo scenario?",
    "opts": [
      "AWS Budgets",
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Well-Architected Tool"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Well-Architected"
    ],
    "id": "d6afee9ae873",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quali principi si usano per progettare applicazioni affidabili nel cloud AWS? (Scegline due.)",
    "opts": [
      "Progettare per il ripristino automatico dai guasti",
      "Usare più Availability Zone",
      "Gestire le modifiche tramite processi documentati",
      "Testare con una domanda moderata per garantire l'affidabilità",
      "Ripristinare i backup in un ambiente on-premises"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "1abbd8ff8d66",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quali attività dovrebbe svolgere un cliente quando sospetta che un account AWS sia stato compromesso? (Scegline due.)",
    "opts": [
      "Cambiare password e chiavi di accesso.",
      "Rimuovere i token MFA.",
      "Spostare le risorse in un'altra Regione AWS.",
      "Eliminare le risorse di AWS CloudTrail.",
      "Contattare l'AWS Support."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "RDS"
    ],
    "id": "1af1387c0e69",
    "explain": "I modelli di cloud computing riconosciuti sono: IaaS (Infrastructure as a Service: EC2, VPC), PaaS (Platform as a Service: Elastic Beanstalk, RDS gestito) e SaaS (Software as a Service: applicazioni complete come Gmail). 'Networking as a Service' (NaaS) non è un modello di cloud computing standard riconosciuto da AWS o dall'industria. Spesso usato in contesti specifici ma non è uno dei tre modelli principali."
  },
  {
    "q": "Qual è un esempio di alta disponibilità nel cloud AWS?",
    "opts": [
      "Consultare il supporto tecnico AWS in qualsiasi momento, di giorno o di notte",
      "Garantire che un'applicazione resti accessibile anche se una risorsa si guasta",
      "Rendere disponibile qualsiasi servizio AWS pagando a consumo",
      "Distribuire in qualsiasi parte del mondo usando le Regioni AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "278926b59a04",
    "explain": "L'alta disponibilità su AWS si ottiene distribuendo applicazioni su più Availability Zone. Include ridondanza, health check automatici e failover. L'obiettivo è garantire continuità del servizio anche in caso di guasto di componenti."
  },
  {
    "q": "Quale servizio di sicurezza AWS protegge le applicazioni dagli attacchi distributed denial of service con rilevamento sempre attivo e mitigazioni automatiche in linea?",
    "opts": [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security"
    ],
    "id": "67d0a76962fb",
    "explain": "AWS Shield protegge le applicazioni dagli attacchi DDoS. Shield Standard è gratuito e automatico. Shield Advanced protegge EC2, ELB, CloudFront e Route 53 con supporto 24/7 del DDoS Response Team."
  },
  {
    "q": "Un'azienda vuole monitorare l'utilizzo della CPU delle sue risorse Amazon EC2. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Cost and Usage Report",
      "Amazon Simple Notification Service (Amazon SNS)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "SNS"
    ],
    "id": "8e07a21d75fa",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Che cos'è un ruolo AWS Identity and Access Management (IAM)?",
    "opts": [
      "Un utente associato a una risorsa AWS",
      "Un gruppo associato a una risorsa AWS",
      "Un'entità che definisce un insieme di permessi da usare con una risorsa AWS",
      "Una credenziale di autenticazione associata a un token di autenticazione a più fattori (MFA)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "4b44b60e0d0a",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quali sono i vantaggi delle Istanze Reserved? (Scegline due.)",
    "opts": [
      "Offrono uno sconto rispetto al prezzo On-Demand.",
      "Danno accesso a tipi di istanza aggiuntivi.",
      "Offrono capacità di rete aggiuntive.",
      "I clienti possono aggiornare le istanze quando diventano disponibili nuovi tipi.",
      "I clienti possono riservare capacità in una Availability Zone."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "2301d84d759a",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "In che modo i gruppi di Amazon EC2 Auto Scaling aiutano a ottenere l'alta disponibilità di un'applicazione web?",
    "opts": [
      "Aggiungono automaticamente altre istanze in più Regioni AWS in base alla domanda globale dell'applicazione.",
      "Aggiungono o sostituiscono automaticamente istanze in più Availability Zone quando l'applicazione ne ha bisogno.",
      "Permettono di tenere i contenuti statici dell'applicazione più vicini agli utenti finali.",
      "Sono in grado di distribuire le richieste in entrata su un livello di istanze web server."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "139ea9f5808c"
  },
  {
    "q": "Come può un account AWS usare le Istanze Reserved di un altro account AWS?",
    "opts": [
      "Usando le Istanze Dedicated Amazon EC2",
      "Usando la fatturazione consolidata di AWS Organizations",
      "Usando lo strumento AWS Cost Explorer",
      "Usando AWS Budgets"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "43ce80bf76a5",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Un cliente esegue un'istanza EC2 Amazon Linux On-Demand per 3 ore, 5 minuti e 6 secondi. Per quanto tempo verrà fatturato il cliente?",
    "opts": [
      "3 ore e 5 minuti",
      "3 ore, 5 minuti e 6 secondi",
      "3 ore e 6 minuti",
      "4 ore"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "1a39daaed543",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti servizi AWS forniscono risorse di calcolo? (Scegline due.)",
    "opts": [
      "AWS Lambda",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS CodeDeploy",
      "Amazon Glacier",
      "AWS Organizations"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "ECS / Fargate",
      "Storage"
    ],
    "id": "fc919b3337c8",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di distribuire l'infrastruttura come codice automatizzando il processo di provisioning delle risorse?",
    "opts": [
      "Amazon GameLift",
      "AWS CloudFormation",
      "AWS Data Pipeline",
      "AWS Glue"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Analytics"
    ],
    "id": "6511986a3506",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Quali servizi AWS permettono di estendere un'architettura on-premises nel cloud AWS? (Scegline due.)",
    "opts": [
      "Amazon EBS",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Storage Gateway",
      "Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ],
    "id": "0f269d34963a",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Quale dei seguenti permette agli utenti di predisporre una connessione di rete dedicata dalla propria rete interna ad AWS?",
    "opts": [
      "AWS CloudHSM",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "2bb26449d868",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quali servizi usano le edge location di AWS? (Scegline due.)",
    "opts": [
      "Amazon CloudFront",
      "AWS Shield",
      "Amazon EC2",
      "Amazon RDS",
      "Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "CloudFront",
      "Security"
    ],
    "id": "7aa6f37b0b08",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale servizio fornirebbe connettività di rete in un'architettura ibrida che include il cloud AWS?",
    "opts": [
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Directory Service",
      "Amazon API Gateway"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "8e5bf3467d21",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Quale strumento può essere usato per confrontare i costi di un'applicazione web in un ambiente di hosting tradizionale con quelli della stessa applicazione su AWS?",
    "opts": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Total Cost of Ownership (TCO) Calculator"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "f4c47a811728",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Qual è il vantaggio di usare software di terze parti da AWS Marketplace invece di installare software di terze parti su Amazon EC2? (Scegline due.)",
    "opts": [
      "Gli utenti pagano il software a ore o a mese, a seconda della licenza.",
      "AWS Marketplace permette all'utente di avviare applicazioni con 1 clic.",
      "La cifratura dei dati di AWS Marketplace è gestita da un fornitore terzo.",
      "AWS Marketplace elimina la necessità di aggiornare alle nuove versioni del software.",
      "Gli utenti possono distribuire software di terze parti senza testarlo."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Security"
    ],
    "id": "3abfdec42132",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali delle seguenti aree sono responsabilità del cliente? (Scegline due.)",
    "opts": [
      "Aggiornamenti del firmware dell'infrastruttura di rete",
      "Applicazione delle patch ai sistemi operativi",
      "Applicazione delle patch all'hypervisor sottostante",
      "Sicurezza fisica dei data center",
      "Configurazione del security group"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ],
    "id": "db9d79176a2c",
    "explain": "I Security Group funzionano come firewall a livello di istanza EC2 con regole stateful. Il traffico di risposta è automaticamente autorizzato. Le regole specificano protocollo, porta e sorgente/destinazione."
  },
  {
    "q": "Quale servizio permette ai clienti di verificare e monitorare le modifiche alle risorse AWS?",
    "opts": [
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Config"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "6c41556d0b4b",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Quale servizio AWS individua i security group che consentono un accesso senza restrizioni alle risorse AWS di un utente?",
    "opts": [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch",
      "Security",
      "Support"
    ],
    "id": "577f4283b976",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, chi è responsabile della gestione della configurazione?",
    "opts": [
      "È responsabilità esclusiva del cliente.",
      "È responsabilità esclusiva di AWS.",
      "È condivisa tra AWS e il cliente.",
      "Non fa parte del modello di responsabilità condivisa di AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "f8d93fa8bb61",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio AWS è una content delivery network che consegna in modo sicuro dati, video e applicazioni agli utenti di tutto il mondo con bassa latenza e alte velocità?",
    "opts": [
      "AWS CloudFormation",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon Pinpoint"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Networking"
    ],
    "id": "2af4188149e9",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale vantaggio del cloud AWS permette di adeguare la disponibilità di risorse alla domanda variabile dei carichi di lavoro?",
    "opts": [
      "Sicurezza",
      "Affidabilità",
      "Elasticità",
      "Alta disponibilità"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "b5354d92b58c",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Un utente esegue un'applicazione su AWS e nota che uno o più indirizzi IP di proprietà di AWS sono coinvolti in un attacco distributed denial-of-service (DDoS). Chi dovrebbe contattare PER PRIMO l'utente per questa situazione?",
    "opts": [
      "AWS Premium Support",
      "AWS Technical Account Manager",
      "AWS Solutions Architect",
      "Team AWS Abuse"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a6f94af64743",
    "explain": "Il team AWS Abuse gestisce segnalazioni di utilizzo abusivo dell'infrastruttura AWS come attacchi, malware e port scanning da IP AWS. Si contatta tramite il form AWS o abuse@amazonaws.com."
  },
  {
    "q": "Quali dei seguenti sono vantaggi di ospitare l'infrastruttura nel cloud AWS? (Scegline due.)",
    "opts": [
      "Non ci sono impegni iniziali.",
      "AWS gestisce tutta la sicurezza nel cloud.",
      "Gli utenti possono predisporre risorse su richiesta.",
      "Gli utenti hanno accesso a storage gratuito e illimitato.",
      "Gli utenti hanno il controllo dell'infrastruttura fisica."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "ef9c646594b9",
    "explain": "L'elasticità cloud AWS permette di scalare automaticamente le risorse in risposta alla domanda reale, senza dover fare previsioni di capacità in anticipo. Questo riduce il TCO eliminando sia il sovra-provisioning (sprechi) che il sotto-provisioning (performance degradate). Si paga solo per le risorse effettivamente usate, adattando automaticamente la capacità al carico."
  },
  {
    "q": "Quale servizio AWS verrebbe usato per gestire in modo centralizzato le policy di accesso AWS su più account?",
    "opts": [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "7fecb96b7780",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Che cos'è AWS Trusted Advisor?",
    "opts": [
      "Un membro dello staff AWS che fornisce raccomandazioni e best practice su come usare AWS.",
      "Una rete di partner AWS che forniscono raccomandazioni e best practice su come usare AWS.",
      "Uno strumento online con una serie di controlli automatici che fornisce raccomandazioni su ottimizzazione dei costi, prestazioni e sicurezza.",
      "Un altro nome per i Technical Account Manager AWS, che forniscono raccomandazioni su ottimizzazione dei costi, prestazioni e sicurezza."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support",
      "Well-Architected"
    ],
    "id": "c17fc337f024",
    "explain": "Il pillar Cost Optimization del Well-Architected Framework evita costi non necessari. Include eliminazione delle risorse inutilizzate, uso di Reserved Instance/Savings Plans e dimensionamento corretto."
  },
  {
    "q": "Quale servizio o funzionalità AWS permette a un'azienda di visualizzare, capire e gestire i costi e l'utilizzo di AWS nel tempo?",
    "opts": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Organizations",
      "Fatturazione consolidata"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "3e9c52b517d8",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Quale servizio AWS offre accesso su richiesta ai report di sicurezza e conformità di AWS?",
    "opts": [
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Health",
      "Amazon CloudWatch"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "80d22114c089",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quali sono i vantaggi dell'uso del cloud AWS per le aziende con clienti in molti paesi del mondo? (Scegline due.)",
    "opts": [
      "Le aziende possono distribuire le applicazioni in più Regioni AWS per ridurre la latenza.",
      "Amazon Translate traduce automaticamente in più lingue le interfacce di siti web di terze parti.",
      "Amazon CloudFront ha molte edge location in tutto il mondo per ridurre la latenza.",
      "Amazon Comprehend permette agli utenti di costruire applicazioni che rispondono alle richieste degli utenti in molte lingue.",
      "Elastic Load Balancing può distribuire il traffico web dell'applicazione su più Regioni AWS in tutto il mondo, riducendo la latenza."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "AI / ML"
    ],
    "id": "31c170bef8e9",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Quale servizio AWS gestisce i dettagli di distribuzione relativi a provisioning della capacità, bilanciamento del carico, Auto Scaling e monitoraggio dello stato di salute dell'applicazione?",
    "opts": [
      "AWS Config",
      "AWS Elastic Beanstalk",
      "Amazon Route 53",
      "Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53",
      "CloudWatch"
    ],
    "id": "1db5a178b51f",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale servizio AWS fornisce network ACL in entrata e in uscita per rafforzare la connettività esterna verso Amazon EC2?",
    "opts": [
      "AWS IAM",
      "Amazon Connect",
      "Amazon VPC",
      "Amazon API Gateway"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "VPC"
    ],
    "id": "b540804d5e71",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Quando un'azienda predispone web server in più Regioni AWS, cosa sta aumentando?",
    "opts": [
      "L'accoppiamento",
      "La disponibilità",
      "La sicurezza",
      "La durabilità"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4f503c8dc8ec",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Il modello di prezzo pay-as-you-go (a consumo) dei servizi AWS:",
    "opts": [
      "riduce le spese in conto capitale.",
      "richiede il pagamento anticipato dei servizi AWS.",
      "vale solo per Amazon EC2, Amazon S3 e Amazon RDS.",
      "riduce le spese operative."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "Billing & Cost"
    ],
    "id": "dcf7afafe953",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, di quale attività legata alla sicurezza è responsabile AWS?",
    "opts": [
      "La gestione del ciclo di vita delle credenziali IAM",
      "La sicurezza fisica dell'infrastruttura globale",
      "La cifratura dei volumi Amazon EBS",
      "La configurazione del firewall"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security",
      "Storage",
      "Shared Responsibility"
    ],
    "id": "317ea0ac3497",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica dei data center: controlli di accesso fisico, videosorveglianza e distruzione dei dispositivi di storage a fine vita secondo gli standard di settore. Nel modello Shared Responsibility, la sicurezza fisica dell'infrastruttura non è mai responsabilità del cliente. Questo include manutenzione dell'hardware, controlli ambientali e sicurezza del personale AWS."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di consolidare la fatturazione di più account?",
    "opts": [
      "Amazon QuickSight",
      "AWS Organizations",
      "AWS Budgets",
      "Amazon Forecast"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics"
    ],
    "id": "7d500536d76b",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale dei seguenti componenti dell'infrastruttura globale di AWS è formato da uno o più data center distinti collegati tra loro da connessioni a bassa latenza?",
    "opts": [
      "Availability Zone",
      "Edge location",
      "Regione",
      "Rete privata"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "ef2390625794",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "Un vantaggio del prezzo On-Demand di Amazon Elastic Compute Cloud (Amazon EC2) è:",
    "opts": [
      "La possibilità di fare un'offerta per un costo orario più basso.",
      "Pagare una tariffa giornaliera indipendentemente dal tempo di utilizzo.",
      "Pagare solo per il tempo di utilizzo.",
      "Pagare le istanze in anticipo e avere una tariffa oraria più bassa."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "0a2a26974d04",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Cosa può aiutare a valutare un'applicazione per la migrazione al cloud? (Scegline DUE)",
    "opts": [
      "AWS Trusted Advisor.",
      "AWS Professional Services.",
      "AWS Systems Manager.",
      "AWS Partner Network (APN).",
      "AWS Secrets Manager."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "6c395dc4ea5d",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "Una caratteristica delle edge location è che:",
    "opts": [
      "Ospitano istanze Amazon EC2 più vicine agli utenti.",
      "Aiutano a ridurre la latenza e a migliorare le prestazioni per gli utenti.",
      "Mettono in cache dati che cambiano spesso senza raggiungere il server di origine.",
      "Aggiornano le modifiche ai dati ogni giorno."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront"
    ],
    "id": "a8a318af0319"
  },
  {
    "q": "Quali dei seguenti sono modi validi con cui un cliente può interagire con i servizi AWS? (Scegline DUE)",
    "opts": [
      "Interfaccia a riga di comando.",
      "On-premises.",
      "Software Development Kit.",
      "Software-as-a-service.",
      "Ibrido."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "0f59ec92f188"
  },
  {
    "q": "Un'azienda sta migrando un'applicazione che esegue carichi di lavoro non interrompibili per un periodo di tre anni. Quale formula di prezzo offrirebbe la soluzione PIÙ conveniente?",
    "opts": [
      "Istanze Spot Amazon EC2.",
      "Istanze Dedicated Amazon EC2.",
      "Istanze On-Demand Amazon EC2.",
      "Istanze Reserved Amazon EC2."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "8a16dbae1f94",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS si usa per tracciare, registrare e verificare le modifiche di configurazione apportate alle risorse AWS?",
    "opts": [
      "AWS Shield.",
      "AWS Config.",
      "AWS IAM.",
      "Amazon Inspector."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "73c71bf0fd75",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Quale caratteristica del cloud AWS soddisfa il requisito di un'azienda internazionale di avere bassa latenza verso tutti i suoi clienti?",
    "opts": [
      "Tolleranza ai guasti.",
      "Portata globale.",
      "Prezzi pay-as-you-go (a consumo).",
      "Alta disponibilità."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "74e1dad237eb",
    "explain": "Il global reach di AWS permette di deployare applicazioni in qualsiasi parte del mondo in pochi minuti usando la rete globale di Regioni, Availability Zone ed Edge Location. Questo consente di avvicinare l'applicazione agli utenti finali riducendo la latenza. È possibile espandere il business globalmente senza dover costruire infrastrutture fisiche in ogni paese."
  },
  {
    "q": "Quali sono i vantaggi di sviluppare ed eseguire una nuova applicazione nel cloud AWS rispetto all'on-premises? (Scegline DUE)",
    "opts": [
      "AWS distribuisce automaticamente i dati in tutto il mondo per una durabilità maggiore.",
      "AWS si occuperà di gestire l'applicazione.",
      "AWS rende facile progettare per l'alta disponibilità.",
      "AWS si adatta facilmente ai cambiamenti della domanda dell'applicazione.",
      "AWS si occupa delle patch di sicurezza dell'applicazione."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "d526b95a044a",
    "explain": "L'alta disponibilità su AWS si ottiene distribuendo applicazioni su più Availability Zone. Include ridondanza, health check automatici e failover. L'obiettivo è garantire continuità del servizio anche in caso di guasto di componenti."
  },
  {
    "q": "Per quale dei seguenti servizi è responsabilità del cliente mantenere la configurazione del sistema operativo, le patch di sicurezza e la rete?",
    "opts": [
      "Amazon RDS.",
      "Amazon EC2.",
      "Amazon ElastiCache.",
      "AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "ECS / Fargate"
    ],
    "id": "16e4d559b1c0",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti metodi supporta AWS per aggiungere sicurezza agli utenti di Identity and Access Management (IAM)? (Scegline DUE)",
    "opts": [
      "Implementare Amazon Rekognition.",
      "Usare risorse protette da AWS Shield.",
      "Bloccare l'accesso con i security group.",
      "Usare l'autenticazione a più fattori (MFA).",
      "Imporre robustezza e scadenza delle password."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "AI / ML"
    ],
    "id": "bb915e37b5c5",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quale servizio fornisce uno storage ibrido che permette alle applicazioni on-premises di usare lo storage cloud in modo trasparente?",
    "opts": [
      "Amazon Glacier",
      "AWS Snowball",
      "AWS Storage Gateway",
      "Amazon Elastic Block Storage (Amazon EBS)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ],
    "id": "72e050876054",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Dove dovrebbe andare un'azienda per cercare tra le offerte di fornitori di software indipendenti, per trovare, provare, acquistare e distribuire software che gira su AWS?",
    "opts": [
      "AWS Marketplace.",
      "Amazon Lumberyard.",
      "AWS Artifact.",
      "Amazon CloudSearch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4a68ab2592cf",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Quale dei seguenti è un componente dell'infrastruttura globale di AWS?",
    "opts": [
      "Amazon Alexa.",
      "Regioni AWS.",
      "Amazon Lightsail.",
      "AWS Organizations."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "525cd8cd536a",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Quale modello di prezzo di Amazon EC2 varia in base alla domanda e all'offerta di istanze EC2?",
    "opts": [
      "Istanze On-Demand.",
      "Istanze Reserved.",
      "Istanze Spot.",
      "Istanze Reserved Convertible."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "9f232fcd6fc1",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda vuole migrare le sue applicazioni in un VPC su AWS. Queste applicazioni dovranno accedere a risorse on-premises. Quale combinazione di azioni permetterà all'azienda di raggiungere questi obiettivi? (Scegline DUE)",
    "opts": [
      "Usare AWS Service Catalog per individuare un elenco di risorse on-premises che possono essere migrate",
      "Creare una connessione VPN tra un dispositivo on-premises e un virtual private gateway nel nuovo VPC",
      "Usare Amazon Athena per interrogare i dati dei server di database on-premises",
      "Collegare il data center on-premises dell'azienda ad AWS usando AWS Direct Connect",
      "Sfruttare Amazon CloudFront per limitare l'accesso ai contenuti web statici forniti dai web server on-premises dell'azienda"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "CloudFront",
      "Analytics",
      "Networking"
    ],
    "id": "29884f889d4b",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Un Cloud Practitioner deve verificare se in un account AWS ci sono security group configurati per consentire accesso illimitato su porte specifiche. Qual è il modo PIÙ SEMPLICE per farlo?",
    "opts": [
      "Rivedere le regole in entrata di ogni security group nella console di gestione di Amazon EC2 per controllare la presenza della porta 0.0.0.0/0.",
      "Eseguire AWS Trusted Advisor e rivederne i risultati.",
      "Aprire la console di AWS IAM e controllare i filtri delle regole in entrata per l'accesso aperto.",
      "In AWS Config, creare una regola personalizzata che richiami una funzione AWS Lambda per esaminare le regole del firewall per l'accesso in entrata."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "Lambda",
      "VPC",
      "Support"
    ],
    "id": "07937aea79f0",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali dei seguenti servizi legati alla sicurezza offre AWS? (Scegline DUE)",
    "opts": [
      "Token fisici di autenticazione a più fattori.",
      "Controlli di sicurezza di AWS Trusted Advisor.",
      "Cifratura dei dati.",
      "Penetration test automatici.",
      "Rilevamento di contenuti protetti da copyright in Amazon S3."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Support"
    ],
    "id": "06ea60cb6dd7",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali dei seguenti servizi hanno funzionalità di mitigazione degli attacchi Distributed Denial of Service (DDoS)? (Scegline DUE)",
    "opts": [
      "AWS WAF.",
      "Amazon DynamoDB.",
      "Amazon EC2.",
      "Amazon CloudFront.",
      "Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "DynamoDB",
      "Security"
    ],
    "id": "3a5797047bae",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale delle seguenti funzionalità AWS permette a un utente di avviare un'istanza Amazon Elastic Compute Cloud (Amazon EC2) preconfigurata?",
    "opts": [
      "Amazon Elastic Block Store (Amazon EBS).",
      "Amazon Machine Image.",
      "Amazon EC2 Systems Manager.",
      "Amazon AppStream 2.0."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "8ee73f873d02",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Una soluzione capace di sostenere la crescita di utenti, traffico o volume di dati senza cali di prestazioni è in linea con quale principio di architettura cloud?",
    "opts": [
      "Pensare in parallelo.",
      "Implementare l'elasticità.",
      "Disaccoppiare i componenti.",
      "Progettare per i guasti."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d3fddce701c4",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Quale vantaggio del cloud AWS elimina la necessità per gli utenti di provare a stimare l'utilizzo futuro dell'infrastruttura?",
    "opts": [
      "La distribuzione facile e rapida di applicazioni in più Regioni nel mondo.",
      "La sicurezza del cloud AWS.",
      "L'elasticità del cloud AWS.",
      "Costi variabili più bassi grazie a enormi economie di scala."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "9313e2a3cd12",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "A cosa possono accedere gli utenti tramite AWS Artifact?",
    "opts": [
      "Ai documenti di sicurezza e conformità di AWS.",
      "Al download dei dettagli di gestione della configurazione di tutte le risorse AWS.",
      "Ai materiali di formazione sui servizi AWS.",
      "A una valutazione di sicurezza delle applicazioni distribuite nel cloud AWS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "93ebe6f194a6",
    "explain": "AWS supporta PCI DSS, HIPAA, SOC 1/2/3, ISO 27001 e FedRAMP. AWS Artifact fornisce report di conformità e accordi legali. I clienti ereditano i controlli AWS ma rimangono responsabili della conformità delle loro applicazioni."
  },
  {
    "q": "Rispetto ai costi dei data center tradizionali e virtualizzati, AWS ha:",
    "opts": [
      "Costi variabili più alti e costi iniziali più alti.",
      "Costi di utilizzo fissi e costi iniziali più bassi.",
      "Costi variabili più bassi e costi iniziali più alti.",
      "Costi variabili più bassi e costi iniziali più bassi."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c5e6147d6784",
    "explain": "AWS trasforma le spese in conto capitale (CapEx) per hardware on-premise in spese operative variabili (OpEx). Invece di dover investire grandi somme in hardware prima di sapere se sarà effettivamente usato, si paga solo per le risorse usate. Questo migliora il cash flow aziendale, riduce il rischio finanziario e permette di riallocare il budget verso attività che generano valore."
  },
  {
    "q": "Quale servizio AWS userebbe un cliente con un sito web statico per ottenere una latenza più bassa e alte velocità di trasferimento?",
    "opts": [
      "AWS Lambda.",
      "Amazon DynamoDB Accelerator.",
      "Amazon Route 53.",
      "Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "CloudFront",
      "Route 53",
      "DynamoDB",
      "Storage"
    ],
    "id": "248716365753",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "In che modo i gruppi di Amazon EC2 Auto Scaling aiutano a ottenere l'alta disponibilità di un'applicazione web?",
    "opts": [
      "Aggiungono automaticamente altre istanze in più Regioni AWS in base alla domanda globale dell'applicazione.",
      "Aggiungono o sostituiscono automaticamente istanze in più Availability Zone quando l'applicazione ne ha bisogno.",
      "Permettono di tenere i contenuti statici dell'applicazione più vicini agli utenti finali.",
      "Sono in grado di distribuire le richieste in entrata su un livello di istanze web server."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "139ea9f5808c-2"
  },
  {
    "q": "Come dovrebbe un cliente prevedere i costi futuri di una nuova applicazione web?",
    "opts": [
      "Amazon Aurora Backtrack.",
      "Allarmi di fatturazione di Amazon CloudWatch.",
      "AWS Simple Monthly Calculator.",
      "AWS Cost and Usage Report."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "93dbf2298a53",
    "explain": "Il AWS Simple Monthly Calculator (ora AWS Pricing Calculator) stima i costi mensili inserendo parametri di utilizzo previsti. Strumento per previsioni di spesa di nuovi progetti."
  },
  {
    "q": "Dove si trovano i documenti di conformità di AWS, come un report SOC 1?",
    "opts": [
      "Amazon Inspector.",
      "AWS CloudTrail.",
      "AWS Artifact.",
      "AWS Certificate Manager."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "d89595ab71f9",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quale delle seguenti attività è responsabilità di AWS?",
    "opts": [
      "Cifrare i dati lato client.",
      "Configurare i ruoli di AWS Identity and Access Management (IAM).",
      "Proteggere l'hypervisor di Amazon EC2.",
      "Impostare le policy delle password degli utenti."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "5ba9360fe9c3",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali delle seguenti aree sono responsabilità del cliente? (Scegline DUE)",
    "opts": [
      "Aggiornamenti del firmware dell'infrastruttura di rete.",
      "Applicazione delle patch ai sistemi operativi.",
      "Applicazione delle patch all'hypervisor sottostante.",
      "Sicurezza fisica dei data center.",
      "Configurazione del security group."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ],
    "id": "b05432fea23f",
    "explain": "I Security Group funzionano come firewall a livello di istanza EC2 con regole stateful. Il traffico di risposta è automaticamente autorizzato. Le regole specificano protocollo, porta e sorgente/destinazione."
  },
  {
    "q": "Un'azienda cerca una soluzione di data warehouse scalabile. Quale delle seguenti soluzioni AWS soddisfa le sue esigenze?",
    "opts": [
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon DynamoDB.",
      "Amazon Kinesis.",
      "Amazon Redshift."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Analytics"
    ],
    "id": "94f210ca4279",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Quali servizi AWS permettono di estendere un'architettura on-premises nel cloud AWS? (Scegline DUE)",
    "opts": [
      "Amazon EBS.",
      "AWS Direct Connect.",
      "Amazon CloudFront.",
      "AWS Storage Gateway.",
      "Amazon Connect."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ],
    "id": "9da6ea8a0736",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Quali sono i vantaggi del cloud AWS? (Scegline DUE)",
    "opts": [
      "Costo mensile a tariffa fissa.",
      "Nessun bisogno di indovinare il fabbisogno di capacità.",
      "Maggiore velocità di arrivo sul mercato.",
      "Maggiori spese iniziali in conto capitale.",
      "Accesso fisico ai data center del cloud."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "41ae8a723e43"
  },
  {
    "q": "In che modo il cloud AWS può aumentare la produttività del personale dopo la migrazione da un data center on-premises?",
    "opts": [
      "Gli utenti non devono aspettare il provisioning dell'infrastruttura.",
      "L'infrastruttura del cloud AWS è molto più veloce di quella di un data center on-premises.",
      "AWS si fa carico della gestione della configurazione delle applicazioni per conto degli utenti.",
      "Gli utenti non devono occuparsi di sicurezza e conformità."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "3999cda1481f"
  },
  {
    "q": "Quali dei seguenti servizi potrebbero essere usati per distribuire un'applicazione su server on-premises? (Scegline DUE)",
    "opts": [
      "AWS Elastic Beanstalk.",
      "AWS OpsWorks.",
      "AWS CodeDeploy.",
      "AWS Batch.",
      "AWS X-Ray."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "3f07e3a4e9d8",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Qual è un esempio di agilità nel cloud AWS?",
    "opts": [
      "L'accesso a più tipi di istanza.",
      "L'accesso a servizi gestiti.",
      "L'uso della fatturazione consolidata per avere un'unica fattura.",
      "Tempi ridotti per ottenere nuove risorse di calcolo."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "6e75dc861b36",
    "explain": "L'agilità di AWS riduce il tempo per ottenere risorse IT da settimane a minuti. Accelera i cicli di sviluppo e permette di sperimentare rapidamente a basso costo. Le aziende possono innovare e rispondere al mercato molto più velocemente."
  },
  {
    "q": "Quali dei seguenti sono vantaggi della fatturazione consolidata di AWS? (Scegline due)",
    "opts": [
      "La possibilità di ricevere un'unica fattura per più account.",
      "L'aumento predefinito dei limiti dei servizi in tutti gli account.",
      "Uno sconto fisso sulla fattura mensile.",
      "Possibili sconti sui volumi, perché l'utilizzo di tutti gli account viene sommato.",
      "L'estensione automatica del piano di supporto AWS dell'account master a tutti gli account."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "be1e30241263",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Un'azienda sta valutando di usare AWS per un database autogestito che deve essere spento ogni notte per manutenzione e per risparmiare. Quale servizio dovrebbe usare l'azienda?",
    "opts": [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Elastic Compute Cloud (Amazon EC2) con instance store Amazon EC2.",
      "Amazon EC2 con Amazon Elastic Block Store (Amazon EBS)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "DynamoDB",
      "Storage",
      "Analytics"
    ],
    "id": "27dd22eb2b45",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti strumenti può usare un cliente AWS per avviare un nuovo cluster Amazon Relational Database Service (Amazon RDS)? (Scegline DUE)",
    "opts": [
      "AWS Concierge.",
      "AWS CloudFormation.",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon EC2 Auto Scaling.",
      "AWS Management Console."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "CloudFormation",
      "Support"
    ],
    "id": "4f804190201d",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Quale dei seguenti modelli di prezzo delle Istanze Reserved (RI) offre il risparmio medio più alto rispetto al prezzo On-Demand?",
    "opts": [
      "RI Standard, un anno, senza pagamento anticipato (No Upfront).",
      "RI Convertible, un anno, pagamento anticipato totale (All Upfront).",
      "RI Standard, tre anni, pagamento anticipato totale (All Upfront).",
      "RI Convertible, tre anni, senza pagamento anticipato (No Upfront)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "409be3ca61bc",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Quali delle seguenti sono funzionalità di Amazon CloudWatch Logs? (Scegline DUE)",
    "opts": [
      "Riepiloghi tramite Amazon Simple Notification Service (Amazon SNS).",
      "Analisi gratuite con Amazon Elasticsearch Service.",
      "Fornito senza costi.",
      "Monitoraggio in tempo reale.",
      "Conservazione (retention) regolabile."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS"
    ],
    "id": "daa1b648120f",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quale dei seguenti è un servizio di calcolo gestito da AWS?",
    "opts": [
      "Amazon SWF.",
      "Amazon EC2.",
      "AWS Lambda.",
      "Amazon Aurora."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Lambda"
    ],
    "id": "b29fa27151a4",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Un'azienda vuole ridurre l'infrastruttura di calcolo fisica che gli sviluppatori usano per eseguire il codice. Quale servizio soddisfa questa esigenza permettendo architetture serverless?",
    "opts": [
      "Amazon Elastic Compute Cloud (Amazon EC2).",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "AWS CodeCommit."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "DynamoDB"
    ],
    "id": "4ae9027aa13c",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quale delle seguenti è responsabilità del cliente secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Applicare le patch all'infrastruttura sottostante",
      "La sicurezza fisica",
      "Applicare le patch alle istanze Amazon EC2",
      "Applicare le patch all'infrastruttura di rete"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ],
    "id": "d52452519e33",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, chi è responsabile della gestione della configurazione?",
    "opts": [
      "È responsabilità esclusiva del cliente.",
      "È responsabilità esclusiva di AWS.",
      "È condivisa tra AWS e il cliente.",
      "Non fa parte del modello di responsabilità condivisa di AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "07b7f7c50952",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio di sicurezza riconosce e classifica automaticamente i dati sensibili o la proprietà intellettuale su AWS?",
    "opts": [
      "Amazon GuardDuty.",
      "Amazon Macie.",
      "Amazon Inspector.",
      "AWS Shield."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "eee876dacb81",
    "explain": "Amazon Macie scopre e protegge dati sensibili (PII) in S3 usando ML. Genera avvisi per dati non protetti e monitora accessi anomali. Utile per conformità GDPR e HIPAA."
  },
  {
    "q": "Quali delle seguenti descrivono MEGLIO il modello di prezzo di AWS? (Scegline DUE)",
    "opts": [
      "A durata fissa.",
      "Pay-as-you-go (a consumo).",
      "Colocation.",
      "Pianificato.",
      "Costo variabile."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "ff5fe5c7b195",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali delle seguenti attività sono responsabilità del cliente AWS? (Scegline DUE)",
    "opts": [
      "Assicurarsi che i dati dell'applicazione siano cifrati a riposo.",
      "Assicurarsi che i server NTP di AWS siano impostati sull'ora corretta.",
      "Assicurarsi che gli utenti abbiano ricevuto una formazione sulla sicurezza nell'uso dei servizi AWS.",
      "Assicurarsi che l'accesso ai data center sia limitato.",
      "Assicurarsi che l'hardware sia smaltito correttamente."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "8b2998de7b26",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Un cliente usa più account AWS con fatturazione separata. Come può sfruttare gli sconti sui volumi con il minimo impatto sulle risorse AWS?",
    "opts": [
      "Creare un unico account AWS globale e spostare lì tutte le risorse AWS.",
      "Sottoscrivere in anticipo tre anni di prezzi delle Istanze Reserved.",
      "Usare la funzionalità di fatturazione consolidata di AWS Organizations.",
      "Sottoscrivere il piano AWS Enterprise Support per ottenere sconti sui volumi."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "8d1d87235529",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quale modello di prezzo di Amazon EC2 offre lo sconto PIÙ consistente rispetto alle Istanze On-Demand?",
    "opts": [
      "Istanze Reserved con pagamento anticipato parziale (Partial Upfront) per 1 anno.",
      "Istanze Reserved con pagamento anticipato totale (All Upfront) per 1 anno.",
      "Istanze Reserved con pagamento anticipato totale (All Upfront) per 3 anni.",
      "Istanze Reserved senza pagamento anticipato (No Upfront) per 3 anni."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "017a43ceb8d7",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali servizi AWS dovrebbero essere usati per leggere e scrivere dati che cambiano continuamente? (Scegline DUE)",
    "opts": [
      "Amazon Glacier.",
      "Amazon RDS.",
      "AWS Snowball.",
      "Amazon Redshift.",
      "Amazon EFS."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Storage",
      "Analytics"
    ],
    "id": "ccc5531b27ff",
    "explain": "Amazon EFS è un file system NFS gestito condivisibile tra più istanze EC2. Si scala automaticamente da gigabyte a petabyte senza provisioning. Ideale per CMS e ambienti di sviluppo condivisi."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di individuare le modifiche apportate a una risorsa nel tempo?",
    "opts": [
      "Amazon Inspector.",
      "AWS Config.",
      "AWS Service Catalog.",
      "AWS IAM."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "8dcb1b5cffbd",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Secondo le best practice, come dovrebbe essere progettata un'applicazione per girare nel cloud AWS?",
    "opts": [
      "Usare componenti strettamente accoppiati.",
      "Usare componenti debolmente accoppiati.",
      "Usare componenti accoppiati raramente.",
      "Usare componenti accoppiati frequentemente."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "3e5194dc6baf",
    "explain": "Il principio di Loose Coupling (componenti debolmente accoppiati) prevede che i componenti di un'applicazione interagiscano tramite interfacce ben definite. Se un componente fallisce, gli altri continuano a funzionare indipendentemente. Riduce la propagazione dei guasti e permette scaling e aggiornamenti indipendenti."
  },
  {
    "q": "Quali vantaggi sono inclusi nel piano AWS Business Support? (Scegline DUE)",
    "opts": [
      "Assistenza 24/7 tramite chat dal vivo o telefonata.",
      "Supporto da parte di un Technical Account Manager AWS dedicato.",
      "Un numero illimitato di casi e di contatti.",
      "Tempo di risposta di 15 minuti per i casi di interruzione di un sistema in produzione.",
      "Revisioni operative annuali con i Solutions Architect AWS."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "d6c1cf7d8212",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quale dei seguenti è un servizio web di Domain Name System (DNS) gestito da AWS?",
    "opts": [
      "Amazon Route 53.",
      "Amazon Neptune.",
      "Amazon SageMaker.",
      "Amazon Lightsail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "AI / ML"
    ],
    "id": "b431a0d72319",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Un utente deve rispettare requisiti di conformità e di licenza software secondo cui un carico di lavoro deve essere ospitato su un server fisico. Quale opzione di prezzo delle istanze Amazon EC2 soddisfa questi requisiti?",
    "opts": [
      "Dedicated Hosts.",
      "Istanze Dedicated.",
      "Istanze Spot.",
      "Istanze Reserved."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "094f5da93eb2",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale modello di prezzo delle Istanze Reserved (RI) permette di cambiare gli attributi della RI, purché lo scambio porti alla creazione di RI di valore uguale o superiore?",
    "opts": [
      "RI Dedicated.",
      "RI Scheduled.",
      "RI Convertible.",
      "RI Standard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "541378a84e81",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Qual è il servizio migliore per conservare i risultati delle query più comuni al database, aiutando a ridurre il carico di accesso al database?",
    "opts": [
      "Amazon Machine Learning.",
      "Amazon SQS.",
      "Amazon ElastiCache.",
      "Amazon EC2 Instance Store."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "SQS"
    ],
    "id": "e0a0ae22e922",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "Quando un'azienda dovrebbe considerare l'uso delle Istanze Spot Amazon EC2? (Scegline DUE)",
    "opts": [
      "Per applicazioni non di produzione.",
      "Per carichi di lavoro con stato (stateful).",
      "Per applicazioni che non possono avere interruzioni.",
      "Per applicazioni flessibili e tolleranti ai guasti.",
      "Per applicazioni di database sensibili."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "ad0676071b4a",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali strumenti AWS aiutano a stimare i costi? (Scegline tre)",
    "opts": [
      "Report di fatturazione dettagliato.",
      "Tag di allocazione dei costi.",
      "AWS Simple Monthly Calculator.",
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "Cost Estimator."
    ],
    "a": 1,
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "aa4f5c3e24d9",
    "explain": "I Cost Allocation Tags tracciano i costi AWS per progetto, reparto o categoria. Appaiono nei report di costo e in Cost Explorer. Sono lo strumento principale per chargeback dei costi cloud."
  },
  {
    "q": "Un'azienda vuole concentrarsi sulle attività di business invece che sulla gestione di calcolo e capacità. Quale servizio AWS può essere usato per aggiungere o rimuovere automaticamente istanze Amazon EC2 in base alla domanda?",
    "opts": [
      "Elastic Load Balancer.",
      "Amazon EC2 Auto Scaling.",
      "Amazon Route 53.",
      "Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53"
    ],
    "id": "fe89fdced341",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Qual è il piano AWS Support minimo che include l'Infrastructure Event Management senza costi aggiuntivi?",
    "opts": [
      "Enterprise.",
      "Business.",
      "Developer.",
      "Basic."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "3bfb93cc3923",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Le chiavi di accesso di AWS Identity and Access Management (IAM) si usano per:",
    "opts": [
      "Accedere alla AWS Management Console.",
      "Fare chiamate programmatiche ad AWS tramite le API AWS.",
      "Accedere alle istanze Amazon EC2.",
      "Autenticarsi sui repository AWS CodeCommit."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "94412610a30e"
  },
  {
    "q": "Quale servizio AWS può essere usato per interrogare con SQL standard i dataset salvati direttamente in Amazon S3?",
    "opts": [
      "AWS Glue.",
      "AWS Data Pipeline.",
      "Amazon CloudSearch.",
      "Amazon Athena."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Analytics"
    ],
    "id": "5cb3b3360d17",
    "explain": "Amazon Athena analizza dati direttamente su S3 con SQL standard, senza ETL o provisioning. Si paga per i dati scansionati (5$/TB)."
  },
  {
    "q": "In che modo AWS riduce il tempo necessario per predisporre le risorse IT?",
    "opts": [
      "Fornisce una piattaforma online di ticketing IT per le richieste di risorse.",
      "Supporta servizi automatici di validazione del codice.",
      "Offre la possibilità di predisporre risorse esistenti in modo programmatico.",
      "Automatizza il processo di richiesta delle risorse partendo dall'elenco dei fornitori IT dell'azienda."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e5ed2b8a261f"
  },
  {
    "q": "Quali servizi AWS possono essere usati per raccogliere informazioni sull'attività di un account AWS? (Scegline DUE)",
    "opts": [
      "Amazon CloudFront.",
      "AWS Cloud9.",
      "AWS CloudTrail.",
      "AWS CloudHSM.",
      "Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ],
    "id": "2a9b364ddcf2",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quali delle seguenti sono caratteristiche di Amazon S3? (Scegline DUE)",
    "opts": [
      "Un file system globale.",
      "Un object store (archivio di oggetti).",
      "Un archivio di file locale.",
      "Un file system di rete.",
      "Un sistema di storage durevole."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "9001dbaa7bf8",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Un utente vuole indicazioni sui possibili risparmi migrando dall'on-premises ad AWS. Quale strumento è adatto a questo scenario?",
    "opts": [
      "AWS Budgets.",
      "Cost Explorer.",
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "AWS Well-Architected Tool."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Well-Architected"
    ],
    "id": "bcc3b3a4662c",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quale dei seguenti servizi rientra nella categoria della piattaforma serverless di AWS?",
    "opts": [
      "Amazon EMR.",
      "Elastic Load Balancing.",
      "AWS Lambda.",
      "AWS Mobile Hub."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "Analytics"
    ],
    "id": "fd3070f6275d",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "L'uso di quale funzionalità o servizio AWS permette alle aziende di tracciare e classificare la spesa a un livello di dettaglio?",
    "opts": [
      "Tag di allocazione dei costi.",
      "Fatturazione consolidata.",
      "AWS Budgets.",
      "AWS Marketplace."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "79c41960c4c7",
    "explain": "I Cost Allocation Tags tracciano i costi AWS per progetto, reparto o categoria. Appaiono nei report di costo e in Cost Explorer. Sono lo strumento principale per chargeback dei costi cloud."
  },
  {
    "q": "Quale dei seguenti strumenti esamina gli ambienti AWS per trovare opportunità di risparmio per gli utenti e anche di miglioramento delle prestazioni del sistema?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Trusted Advisor.",
      "Fatturazione consolidata.",
      "Fatturazione dettagliata."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "1589e7324c9b",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Dei web server in esecuzione su Amazon EC2 accedono a un'applicazione legacy che gira in un data center aziendale. Quale termine descrive questo modello?",
    "opts": [
      "Cloud-native.",
      "Rete di partner.",
      "Architettura ibrida.",
      "Infrastructure as a service."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "7a4c6e0bca3c",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale tecnologia permette alla capacità di calcolo di adattarsi al variare del carico?",
    "opts": [
      "Il bilanciamento del carico.",
      "Il failover automatico.",
      "Il round robin.",
      "L'Auto Scaling."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "34df295da2a7",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale servizio AWS è un database NoSQL gestito?",
    "opts": [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon RDS for MariaDB."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "713ba57f80d4"
  },
  {
    "q": "Quale delle seguenti è una relazione corretta tra Regioni, Availability Zone ed edge location?",
    "opts": [
      "I data center contengono le Regioni.",
      "Le Regioni contengono le Availability Zone.",
      "Le Availability Zone contengono le edge location.",
      "Le edge location contengono le Regioni."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "0c55bb7f1c5e",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale approccio alla transcodifica di un grande numero di singoli file video rispetta i principi di architettura di AWS?",
    "opts": [
      "Usare molte istanze in parallelo.",
      "Usare una singola istanza grande nelle ore di minor carico.",
      "Usare hardware dedicato.",
      "Usare un tipo di istanza GPU grande."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "f09d8ed41572",
    "explain": "Distribuire il carico di calcolo su più risorse (scaling orizzontale) è una best practice fondamentale su AWS. Invece di avere una singola istanza potente (scaling verticale), si usano multiple istanze più piccole con un ELB davanti, aumentando sia la performance che la fault tolerance. Questo permette di eliminare i single point of failure e gestire picchi di traffico senza interruzioni."
  },
  {
    "q": "Quali servizi AWS possono ospitare un database Microsoft SQL Server? (Scegline DUE)",
    "opts": [
      "Amazon EC2.",
      "Amazon Relational Database Service (Amazon RDS).",
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon S3."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "Analytics"
    ],
    "id": "fb6702eab8dd",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale funzionalità di AWS IAM permette agli sviluppatori di accedere ai servizi AWS tramite la AWS CLI?",
    "opts": [
      "Chiavi API.",
      "Chiavi di accesso.",
      "Nomi utente e password.",
      "Chiavi SSH."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "0ff1c1d6aaa7",
    "explain": "L'AWS CLI (Command Line Interface) permette di gestire i servizi AWS direttamente dal terminale con comandi. Può essere usata per automatizzare operazioni tramite scripting. Richiede configurazione con Access Key o ruolo IAM."
  },
  {
    "q": "Di quale azione è completamente responsabile l'utente quando esegue carichi di lavoro su AWS?",
    "opts": [
      "Applicare le patch ai componenti dell'infrastruttura.",
      "Mantenere i componenti dell'infrastruttura sottostante.",
      "Mantenere i controlli fisici e ambientali.",
      "Implementare i controlli per instradare il traffico dell'applicazione."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "9e934b43de06"
  },
  {
    "q": "Quale piano di supporto AWS include un Technical Account Manager dedicato?",
    "opts": [
      "Developer.",
      "Enterprise.",
      "Business.",
      "Basic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "5f17cae3cce0",
    "explain": "Il Technical Account Manager (TAM) è un consulente AWS dedicato incluso nel piano Enterprise Support. Fornisce supporto proattivo, revisioni architetturali e accesso prioritario agli esperti AWS."
  },
  {
    "q": "Quale vantaggio in termini di risparmio di tempo offre l'uso di Amazon Rekognition?",
    "opts": [
      "Amazon Rekognition applica automaticamente una filigrana alle immagini.",
      "Amazon Rekognition rileva automaticamente gli oggetti che compaiono nelle immagini.",
      "Amazon Rekognition permette di ridimensionare automaticamente milioni di immagini.",
      "Amazon Rekognition usa Amazon Mechanical Turk per permettere a persone di fare offerte su lavori di rilevamento di oggetti."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "2da3d31a3adb-2"
  },
  {
    "q": "Quale dei seguenti vantaggi offre Amazon Relational Database Service (Amazon RDS) rispetto alla gestione tradizionale dei database?",
    "opts": [
      "AWS gestisce i dati salvati nelle tabelle di Amazon RDS.",
      "AWS gestisce la manutenzione del sistema operativo.",
      "AWS aumenta automaticamente il tipo di istanza su richiesta.",
      "AWS gestisce il tipo di database."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "c846fc13e901",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "L'applicazione web di un'azienda ha attualmente dipendenze strette dai componenti sottostanti, quindi quando un componente si guasta si blocca l'intera applicazione web. Applicare quale principio di progettazione del cloud AWS risolverà questo problema?",
    "opts": [
      "Implementare l'elasticità, permettendo all'applicazione di scalare in su o in giù al variare della domanda.",
      "Far girare diverse istanze EC2 in parallelo per ottenere prestazioni migliori.",
      "Puntare sul disaccoppiamento dei componenti, isolandoli e assicurando che i singoli componenti possano funzionare quando altri componenti si guastano.",
      "Raddoppiare le risorse di calcolo EC2 per aumentare la tolleranza ai guasti del sistema."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "1dedf2bed728"
  },
  {
    "q": "Un cliente vuole progettare e costruire un nuovo carico di lavoro nel cloud AWS, ma non ha al suo interno competenze tecniche sul software legato ad AWS. Quale dei seguenti programmi AWS può sfruttare per ottenere questo risultato?",
    "opts": [
      "AWS Partner Network Technology Partner.",
      "AWS Marketplace.",
      "AWS Partner Network Consulting Partner.",
      "AWS Service Catalog."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "773807172dec",
    "explain": "L'AWS Partner Network (APN) include Consulting Partners che aiutano a progettare e costruire su AWS e Technology Partners con prodotti integrati. I partner APN possono aiutare con valutazione e migrazione al cloud."
  },
  {
    "q": "Quale servizio conserva oggetti, offre accesso in tempo reale a quegli oggetti e fornisce funzionalità di versioning e di gestione del ciclo di vita?",
    "opts": [
      "Amazon Glacier.",
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "f68903293523",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Distribuire i carichi di lavoro su più Availability Zone sostiene quale principio di progettazione dell'architettura cloud?",
    "opts": [
      "Implementare l'automazione.",
      "Progettare per l'agilità.",
      "Progettare per i guasti.",
      "Implementare l'elasticità."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "5b6b47424be3",
    "explain": "Il principio 'Design for failure' prevede di progettare sistemi assumendo che ogni componente possa fallire. Si implementa con ridondanza multi-AZ, health check e Auto Scaling. Un sistema progettato per il fallimento è più resiliente e disponibile."
  },
  {
    "q": "Quale servizio dovrebbe usare un cliente per consolidare e gestire in modo centralizzato più account AWS?",
    "opts": [
      "AWS IAM.",
      "AWS Organizations.",
      "AWS Schema Conversion Tool.",
      "AWS Config."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "0f6c0a8d83a7",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quale dei seguenti è un esempio di sicurezza nel cloud AWS?",
    "opts": [
      "Gestire le edge location",
      "La sicurezza fisica",
      "La configurazione del firewall",
      "L'infrastruttura globale"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ],
    "id": "01667a3ba056",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Come può un utente AWS con il piano AWS Basic Support ottenere assistenza tecnica da AWS?",
    "opts": [
      "AWS Senior Support Engineer",
      "AWS Technical Account Manager",
      "AWS Trusted Advisor",
      "Forum di discussione AWS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "2f21a3e46c86",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quali dei seguenti sono pilastri dell'AWS Well-Architected Framework? (Scegline due.)",
    "opts": [
      "Più Availability Zone",
      "Efficienza delle prestazioni",
      "Sicurezza",
      "Uso della cifratura",
      "Alta disponibilità"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ],
    "id": "41e42c2bac54",
    "explain": "Il pillar Performance Efficiency del Well-Architected Framework si concentra sull'uso efficiente delle risorse. Include la scelta del tipo di risorsa giusto, monitoraggio delle performance e adozione di nuove tecnologie."
  },
  {
    "q": "Dopo aver scelto una prenotazione di un Dedicated Host Amazon EC2, quale opzione di pagamento darebbe lo sconto più alto?",
    "opts": [
      "Nessun pagamento anticipato",
      "Pagamento orario On-Demand",
      "Pagamento anticipato parziale",
      "Pagamento anticipato totale"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "4b0fa0fb0a1c",
    "explain": "EC2 Dedicated Host è un server fisico dedicato esclusivamente al tuo uso. Permette di portare licenze software (Microsoft, Oracle) dall'on-premise. Necessario per conformità che richiede server dedicati."
  },
  {
    "q": "Qual è un vantaggio di distribuire un'applicazione su più Availability Zone?",
    "opts": [
      "Il rischio di guasto del servizio è più basso se un disastro naturale causa un'interruzione del servizio in una determinata Regione AWS.",
      "L'applicazione avrà una disponibilità più alta perché può resistere a un'interruzione del servizio in una Availability Zone.",
      "La copertura sarà migliore, perché le Availability Zone sono geograficamente distanti e possono servire un'area più ampia.",
      "La latenza dell'applicazione diminuirà, migliorando l'esperienza utente."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "62d67fed4db7"
  },
  {
    "q": "A un Cloud Practitioner viene chiesto come stimare il costo di usare una nuova applicazione su AWS. Qual è la risposta PIÙ appropriata?",
    "opts": [
      "Informare l'utente che i prezzi AWS prevedono la tariffa On-Demand.",
      "Indirizzare l'utente all'AWS Simple Monthly Calculator per una stima.",
      "Usare Amazon QuickSight per analizzare la spesa attuale on-premises.",
      "Usare Amazon AppStream 2.0 per analisi dei prezzi in tempo reale."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics"
    ],
    "id": "847ea29a96c8",
    "explain": "Il AWS Simple Monthly Calculator (ora AWS Pricing Calculator) stima i costi mensili inserendo parametri di utilizzo previsti. Strumento per previsioni di spesa di nuovi progetti."
  },
  {
    "q": "Un'azienda vuole migrare le sue applicazioni in un VPC su AWS. Queste applicazioni dovranno accedere a risorse on-premises. Quale combinazione di azioni permetterà all'azienda di raggiungere questo obiettivo? (Scegline due.)",
    "opts": [
      "Usare AWS Service Catalog per individuare un elenco di risorse on-premises che possono essere migrate.",
      "Creare una connessione VPN tra un dispositivo on-premises e un virtual private gateway nel nuovo VPC.",
      "Usare Amazon Athena per interrogare i dati dei server di database on-premises.",
      "Collegare il data center on-premises dell'azienda ad AWS usando AWS Direct Connect.",
      "Sfruttare Amazon CloudFront per limitare l'accesso ai contenuti web statici forniti dai web server on-premises dell'azienda."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "CloudFront",
      "Analytics",
      "Networking"
    ],
    "id": "6871d5c380c5",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Un'applicazione web su AWS è stata bombardata di richieste malevole da un gruppo ricorrente di indirizzi IP. Quale servizio AWS può aiutare a proteggere l'applicazione e bloccare il traffico malevolo?",
    "opts": [
      "AWS IAM",
      "Amazon GuardDuty",
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS WAF"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "SNS",
      "Security"
    ],
    "id": "88ee1246d338",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Trattare l'infrastruttura come codice nel cloud AWS permette agli utenti di:",
    "opts": [
      "automatizzare la migrazione dell'hardware on-premises nei data center AWS.",
      "far automatizzare a una terza parte un audit dell'infrastruttura AWS.",
      "consegnare il codice dell'applicazione ad AWS perché lo esegua sulla propria infrastruttura.",
      "automatizzare il processo di provisioning dell'infrastruttura."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ],
    "id": "28ba77c65f56",
    "explain": "Infrastructure as Code (IaC) gestisce l'infrastruttura tramite codice, rendendola ripetibile, versionabile e automatizzabile. Su AWS si implementa con CloudFormation o CDK. Riduce errori umani e accelera i deploy."
  },
  {
    "q": "Un'azienda ha bisogno di una connessione di rete dedicata tra i suoi server on-premises e il cloud AWS. Quale servizio AWS dovrebbe essere usato?",
    "opts": [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon API Gateway",
      "Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "7aec556439ad",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "AWS CloudFormation è progettato per aiutare l'utente a:",
    "opts": [
      "modellare e predisporre le risorse.",
      "aggiornare il codice dell'applicazione.",
      "configurare data lake.",
      "creare report di fatturazione."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Billing & Cost",
      "Analytics"
    ],
    "id": "3a669fe78d3f",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Quale dei seguenti è un servizio di database AWS?",
    "opts": [
      "Amazon Redshift",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3 Glacier",
      "AWS Snowball"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "Analytics"
    ],
    "id": "94dce0c11f1e",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Un Cloud Practitioner deve verificare se in un account AWS ci sono security group configurati per consentire accesso illimitato su porte specifiche. Qual è il modo PIÙ SEMPLICE per farlo?",
    "opts": [
      "Rivedere le regole in entrata di ogni security group nella console di gestione di Amazon EC2 per controllare la presenza della porta 0.0.0.0/0.",
      "Eseguire AWS Trusted Advisor e rivederne i risultati.",
      "Aprire la console di AWS IAM e controllare i filtri delle regole in entrata per l'accesso aperto.",
      "In AWS Config, creare una regola personalizzata che richiami una funzione AWS Lambda per esaminare le regole per l'accesso in entrata."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "Lambda",
      "VPC",
      "Support"
    ],
    "id": "993447f26931",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali sono i vantaggi di sviluppare ed eseguire una nuova applicazione nel cloud AWS rispetto all'on-premises? (Scegline due.)",
    "opts": [
      "AWS distribuisce automaticamente i dati in tutto il mondo per una durabilità maggiore.",
      "AWS si occuperà di gestire l'applicazione.",
      "AWS rende facile progettare per l'alta disponibilità.",
      "AWS si adatta facilmente ai cambiamenti della domanda dell'applicazione.",
      "AWS si occupa delle patch di sicurezza dell'applicazione."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "29fe7df37a8f",
    "explain": "L'alta disponibilità su AWS si ottiene distribuendo applicazioni su più Availability Zone. Include ridondanza, health check automatici e failover. L'obiettivo è garantire continuità del servizio anche in caso di guasto di componenti."
  },
  {
    "q": "Un utente ha bisogno di un report automatico di valutazione della sicurezza che individui gli accessi di rete non previsti alle istanze Amazon EC2 e le vulnerabilità di quelle istanze. Quale servizio AWS fornirà questo report?",
    "opts": [
      "Security group EC2",
      "AWS Config",
      "Amazon Macie",
      "Amazon Inspector"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Security"
    ],
    "id": "daf3a1892886",
    "explain": "Amazon Inspector valuta la sicurezza di istanze EC2 e container ECR identificando vulnerabilità CVE. Genera report prioritizzati con azioni correttive."
  },
  {
    "q": "Come può un'azienda separare i costi dei carichi di lavoro di produzione da quelli non di produzione su AWS?",
    "opts": [
      "Creare ruoli di Identity and Access Management (IAM) per i carichi di lavoro di produzione e non di produzione.",
      "Usare account diversi per le spese di produzione e per quelle non di produzione.",
      "Usare Amazon EC2 per i carichi di lavoro non di produzione e altri servizi per quelli di produzione.",
      "Usare Amazon CloudWatch per monitorare l'uso dei servizi."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "CloudWatch"
    ],
    "id": "3e9a4f5a15cb"
  },
  {
    "q": "Dove possono trovare gli utenti un catalogo di fornitori di soluzioni di sicurezza di terze parti riconosciuti da AWS?",
    "opts": [
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS Quick Start",
      "AWS CodeDeploy"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "b758ab822c40",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Un Cloud Practitioner deve conservare dati per 7 anni per rispettare requisiti normativi. Quale servizio AWS soddisfa questo requisito al costo PIÙ BASSO?",
    "opts": [
      "Amazon S3",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon S3 Glacier"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "Analytics"
    ],
    "id": "e5ed93fa4302",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali sono i vantaggi immediati dell'uso del cloud AWS? (Scegline due.)",
    "opts": [
      "Più personale IT.",
      "Le spese in conto capitale vengono sostituite da spese variabili.",
      "Il controllo dell'infrastruttura da parte dell'utente.",
      "Maggiore agilità.",
      "AWS è responsabile della sicurezza nel cloud."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "45133293f983",
    "explain": "L'agilità di AWS riduce il tempo per ottenere risorse IT da settimane a minuti. Accelera i cicli di sviluppo e permette di sperimentare rapidamente a basso costo. Le aziende possono innovare e rispondere al mercato molto più velocemente."
  },
  {
    "q": "Qual è lo scopo di AWS Storage Gateway?",
    "opts": [
      "Garantisce che lo storage dei dati on-premises sia durevole al 99,999999999%.",
      "Trasporta petabyte di dati verso e da AWS.",
      "Si collega a più istanze Amazon EC2.",
      "Collega lo storage dei dati on-premises al cloud AWS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "e447fd41ead3",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Cosa dovrebbero fare gli utenti se vogliono installare un'applicazione in luoghi geograficamente isolati?",
    "opts": [
      "Installare l'applicazione usando più internet gateway.",
      "Distribuire l'applicazione in un Amazon VPC.",
      "Distribuire l'applicazione in più Regioni AWS.",
      "Configurare l'applicazione usando più NAT gateway."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "16a9ecbfad95",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Un sistema nel cloud AWS è progettato per resistere al guasto di uno o più componenti. Di cosa è un esempio?",
    "opts": [
      "Elasticità",
      "Alta disponibilità",
      "Scalabilità",
      "Agilità"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "dd1566c57eca",
    "explain": "L'alta disponibilità su AWS si ottiene distribuendo applicazioni su più Availability Zone. Include ridondanza, health check automatici e failover. L'obiettivo è garantire continuità del servizio anche in caso di guasto di componenti."
  },
  {
    "q": "Un Cloud Practitioner ha bisogno di una connessione costante e dedicata tra le risorse AWS e un sistema on-premises. Quale servizio AWS può soddisfare questo requisito?",
    "opts": [
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect",
      "AWS Data Pipeline"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "0faebdb130f4",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Nel modello di responsabilità condivisa di AWS, chi è responsabile della sicurezza e della conformità?",
    "opts": [
      "Il responsabile è il cliente.",
      "Il responsabile è AWS.",
      "AWS e il cliente condividono la responsabilità.",
      "AWS condivide la responsabilità con l'ente regolatore competente."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "7d0c03ad3174",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Per usare la AWS CLI, gli utenti devono generare:",
    "opts": [
      "una policy delle password.",
      "una chiave di accesso e una chiave segreta.",
      "una managed policy.",
      "una chiave API."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "52d8b505fa29",
    "explain": "Le Access Key (Access Key ID + Secret Access Key) sono credenziali per chiamate programmatiche all'API AWS. Best practice: ruotarle regolarmente e non incorporarle nel codice. Ogni utente IAM può avere al massimo 2 access key attive."
  },
  {
    "q": "Quale servizio AWS si usa per fornire la cifratura per Amazon EBS?",
    "opts": [
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS KMS",
      "AWS Config"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ],
    "id": "f73860529294",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "Come fattura AWS l'utilizzo di AWS Lambda una volta superato il piano gratuito (free tier)? (Scegline due.)",
    "opts": [
      "In base al tempo di esecuzione della funzione Lambda.",
      "In base al numero di versioni di una specifica funzione Lambda.",
      "In base al numero di richieste fatte a una determinata funzione Lambda.",
      "In base al linguaggio di programmazione usato per la funzione Lambda.",
      "In base al numero totale di funzioni Lambda in un account AWS."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Billing & Cost"
    ],
    "id": "1fb306ec4eda",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quali delle seguenti descrivono i rapporti tra Regioni AWS, Availability Zone ed edge location? (Scegline due.)",
    "opts": [
      "Ci sono più Regioni AWS che Availability Zone.",
      "Ci sono più edge location che Regioni AWS.",
      "Una edge location è una Availability Zone.",
      "Ci sono più Regioni AWS che edge location.",
      "Ci sono più Availability Zone che Regioni AWS."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ],
    "id": "d5c47bec5a89",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Che cosa offre AWS Shield Standard?",
    "opts": [
      "Regole WAF",
      "Protezione DDoS",
      "Permessi di Identity and Access Management (IAM) e accesso alle risorse",
      "Cifratura dei dati"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "0287cea16cb3",
    "explain": "AWS Shield protegge le applicazioni dagli attacchi DDoS. Shield Standard è gratuito e automatico. Shield Advanced protegge EC2, ELB, CloudFront e Route 53 con supporto 24/7 del DDoS Response Team."
  },
  {
    "q": "Un'azienda vuole costruire i suoi nuovi carichi di lavoro applicativi nel cloud AWS invece di usare risorse on-premises. Quale spesa può essere ridotta usando il cloud AWS?",
    "opts": [
      "Il costo di scrivere codice Java o Node.js su misura",
      "I penetration test di sicurezza",
      "L'hardware necessario a supportare le nuove applicazioni",
      "La scrittura di casi di test specifici per applicazioni di terze parti."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "813a81c34ce3"
  },
  {
    "q": "Cosa permette di fare AWS Marketplace agli utenti? (Scegline due.)",
    "opts": [
      "Vendere le Istanze Spot Amazon EC2 inutilizzate.",
      "Vendere soluzioni ad altri utenti AWS.",
      "Acquistare software di terze parti che gira su AWS.",
      "Acquistare documenti di sicurezza e conformità di AWS.",
      "Ordinare AWS Snowball."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ],
    "id": "16c946bc0d57",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Cosa significa se un utente distribuisce un'architettura di cloud ibrido su AWS?",
    "opts": [
      "Tutte le risorse girano su infrastruttura on-premises.",
      "Alcune risorse girano on-premises e altre in un centro di colocation.",
      "Tutte le risorse girano nel cloud AWS.",
      "Alcune risorse girano on-premises e altre nel cloud AWS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "ea8060e7f52b"
  },
  {
    "q": "Come può un'azienda ridurre il proprio costo totale di proprietà (TCO) usando AWS?",
    "opts": [
      "Riducendo al minimo le grandi spese in conto capitale",
      "Non avendo alcuna responsabilità sui costi delle licenze di terze parti",
      "Non avendo spese operative",
      "Facendo gestire le applicazioni ad AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c68df82d910a",
    "explain": "AWS trasforma le spese in conto capitale (CapEx) per hardware on-premise in spese operative variabili (OpEx). Invece di dover investire grandi somme in hardware prima di sapere se sarà effettivamente usato, si paga solo per le risorse usate. Questo migliora il cash flow aziendale, riduce il rischio finanziario e permette di riallocare il budget verso attività che generano valore."
  },
  {
    "q": "Quale attività è responsabilità del cliente nel cloud AWS secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Garantire la connettività di rete da AWS verso Internet",
      "Applicare le patch e correggere i difetti nell'infrastruttura del cloud AWS",
      "Garantire la sicurezza fisica dei data center del cloud",
      "Assicurarsi che venga fatto il backup dei volumi Amazon EBS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Shared Responsibility"
    ],
    "id": "0be64d6ef9e2",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Quali sono i vantaggi del cloud AWS? (Scegline due.)",
    "opts": [
      "Costo mensile a tariffa fissa",
      "Nessun bisogno di indovinare il fabbisogno di capacità",
      "Maggiore velocità di arrivo sul mercato",
      "Maggiori spese iniziali in conto capitale",
      "Accesso fisico ai data center del cloud"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "8a83e27bb56a"
  },
  {
    "q": "Quando si confronta il costo totale di proprietà (TCO) di un'infrastruttura on-premises con quello di un'architettura cloud, quali costi vanno considerati? (Scegline due.)",
    "opts": [
      "Le commissioni di elaborazione delle carte di credito per le transazioni dell'applicazione nel cloud.",
      "Il costo di acquisto e installazione dell'hardware server nel data center on-premises.",
      "Il costo di amministrazione dell'infrastruttura, comprese le installazioni di sistema operativo e software, le patch, i backup e il ripristino dai guasti.",
      "I costi dei penetration test di terze parti.",
      "I costi pubblicitari legati a una campagna in corso a livello di tutta l'azienda."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "71d52c936a7b",
    "explain": "Nel calcolo del Total Cost of Ownership (TCO) on-premise bisogna includere non solo il costo del server, ma anche sicurezza del data center, personale IT per manutenzione, costi di facility (spazio, elettricità, raffreddamento), hardware di networking e costi di dismissione hardware. AWS elimina tutti questi costi nascosti con un modello pay-as-you-go dove si paga solo per le risorse cloud usate."
  },
  {
    "q": "Qual è una delle responsabilità del cliente secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "L'infrastruttura di virtualizzazione",
      "L'infrastruttura di rete",
      "La sicurezza delle applicazioni",
      "La sicurezza fisica dell'hardware"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "f4c054f8cf93",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Cosa aiuta un'azienda a offrire ai propri utenti di tutto il mondo un'esperienza con latenza più bassa?",
    "opts": [
      "Usare una Regione AWS centrale rispetto a tutti gli utenti",
      "Usare una seconda Availability Zone nella Regione AWS in uso",
      "Abilitare la cache nella Regione AWS in uso",
      "Usare le edge location per portare i contenuti più vicino a tutti gli utenti"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "822d17312c83"
  },
  {
    "q": "Quale servizio AWS offre un modo rapido e automatizzato per creare e gestire account AWS?",
    "opts": [
      "AWS QuickSight",
      "Amazon Lightsail",
      "AWS Organizations",
      "Amazon Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "id": "932c253e69bb",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale funzionalità di Amazon RDS può essere usata per ottenere l'alta disponibilità?",
    "opts": [
      "Più Availability Zone",
      "Istanze Reserved di Amazon",
      "Storage con Provisioned IOPS",
      "Monitoraggio avanzato (Enhanced Monitoring)"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "9cafbb161b9e",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "A chi dovrebbero segnalare gli utenti che delle risorse AWS vengono usate per scopi malevoli?",
    "opts": [
      "Al team AWS Abuse",
      "AWS Shield",
      "All'AWS Support",
      "Ai forum per sviluppatori AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "3073420b8727",
    "explain": "Il team AWS Abuse gestisce segnalazioni di utilizzo abusivo dell'infrastruttura AWS come attacchi, malware e port scanning da IP AWS. Si contatta tramite il form AWS o abuse@amazonaws.com."
  },
  {
    "q": "Quale servizio AWS deve essere abilitato per tracciare tutte le modifiche agli account utente nella AWS Management Console?",
    "opts": [
      "AWS CloudTrail",
      "Amazon Simple Notification Service (Amazon SNS)",
      "VPC Flow Logs",
      "AWS CloudHSM"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "SNS"
    ],
    "id": "21d498c3a50e",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Qual è una best practice di progettazione nel cloud AWS?",
    "opts": [
      "L'accoppiamento stretto dei componenti",
      "Il single point of failure (punto unico di guasto)",
      "L'alta disponibilità",
      "Il sovradimensionamento delle risorse"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "54c55625305a",
    "explain": "L'alta disponibilità su AWS si ottiene distribuendo applicazioni su più Availability Zone. Include ridondanza, health check automatici e failover. L'obiettivo è garantire continuità del servizio anche in caso di guasto di componenti."
  },
  {
    "q": "Perché AWS è più economico dei data center tradizionali per applicazioni con carichi di calcolo variabili?",
    "opts": [
      "I costi di Amazon Elastic Compute Cloud (Amazon EC2) vengono fatturati su base mensile.",
      "I clienti mantengono l'accesso amministrativo completo alle loro istanze Amazon EC2.",
      "Le istanze Amazon EC2 possono essere avviate su richiesta, quando servono.",
      "I clienti possono tenere sempre accese abbastanza istanze per gestire i carichi di picco."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "f80edab3a1ec",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS semplificherebbe la migrazione di un database su AWS?",
    "opts": [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon AppStream 2.0"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "35a68c057851",
    "explain": "AWS Database Migration Service migra database verso AWS con downtime minimo. Supporta migrazioni omogenee ed eterogenee con Schema Conversion Tool."
  },
  {
    "q": "Quali opzioni mette a disposizione AWS per i clienti che vogliono imparare la sicurezza nel cloud con un istruttore? (Scegline DUE)",
    "opts": [
      "AWS Trusted Advisor.",
      "AWS Online Tech Talks.",
      "AWS Blog.",
      "AWS Forums.",
      "AWS Classroom Training."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "cecac204614f",
    "explain": "AWS mette a disposizione gratuitamente numerose risorse di sicurezza e formazione: documentazione ufficiale, whitepaper, blog AWS, Security Bulletins, AWS Online Tech Talks e forum della community. Queste risorse sono accessibili a tutti i clienti indipendentemente dal piano Support. Per supporto tecnico diretto invece è necessario un piano a pagamento."
  },
  {
    "q": "Quali dei seguenti strumenti miglioreranno la sicurezza dell'accesso alla AWS Management Console? (Scegline DUE)",
    "opts": [
      "AWS Secrets Manager.",
      "AWS Certificate Manager.",
      "AWS Multi-Factor Authentication (AWS MFA).",
      "Security group.",
      "Policy delle password."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC"
    ],
    "id": "cab3c2b84825",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quali delle seguenti funzionalità possono essere configurate dalla dashboard di Amazon Virtual Private Cloud (Amazon VPC)? (Scegline DUE)",
    "opts": [
      "Distribuzioni Amazon CloudFront.",
      "Amazon Route 53.",
      "Security group.",
      "Subnet.",
      "Elastic Load Balancing."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Route 53"
    ],
    "id": "41dbede721af",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Per quale processo di audit AWS ha la responsabilità esclusiva?",
    "opts": [
      "Le policy AWS IAM.",
      "La sicurezza fisica.",
      "Le bucket policy di Amazon S3.",
      "I log di AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM"
    ],
    "id": "0e998290b88c",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica dei data center: controlli di accesso fisico, videosorveglianza e distruzione dei dispositivi di storage a fine vita secondo gli standard di settore. Nel modello Shared Responsibility, la sicurezza fisica dell'infrastruttura non è mai responsabilità del cliente. Questo include manutenzione dell'hardware, controlli ambientali e sicurezza del personale AWS."
  },
  {
    "q": "Quali dei seguenti sono vantaggi della fatturazione consolidata di AWS? (Scegline DUE)",
    "opts": [
      "La possibilità di ricevere un'unica fattura per più account.",
      "L'aumento predefinito dei limiti dei servizi in tutti gli account.",
      "Uno sconto fisso sulla fattura mensile.",
      "Possibili sconti sui volumi, perché l'utilizzo di tutti gli account viene sommato.",
      "L'estensione automatica del piano di supporto AWS dell'account master a tutti gli account."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "d50fa7972fd8",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quali delle seguenti attività IT comuni può coprire AWS per liberare risorse IT dell'azienda? (Scegline DUE)",
    "opts": [
      "Applicare le patch al software di database.",
      "Testare i rilasci delle applicazioni.",
      "Fare il backup dei database.",
      "Creare lo schema del database.",
      "Eseguire penetration test."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "2b6ac877dc21"
  },
  {
    "q": "Un'azienda vuole espandersi da una Regione AWS a una seconda Regione AWS. Cosa deve fare l'azienda per iniziare a usare la nuova Regione?",
    "opts": [
      "Contattare un AWS Account Manager per firmare un nuovo contratto.",
      "Spostare una Availability Zone nella nuova Regione.",
      "Iniziare a distribuire risorse nella seconda Regione.",
      "Scaricare la AWS Management Console per la nuova Regione."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e2bb56ec037b",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Perché è vantaggioso usare gli Elastic Load Balancer con le applicazioni?",
    "opts": [
      "Permettono la conversione da Application Load",
      "Balancer a Classic Load Balancer.",
      "Sono in grado di gestire i continui cambiamenti negli andamenti del traffico di rete.",
      "Regolano automaticamente la capacità. Sono forniti gratuitamente agli utenti."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "f7db82395903"
  },
  {
    "q": "Qual è il piano AWS Support MINIMO che prevede un tempo di risposta obiettivo di un'ora per i casi di supporto?",
    "opts": [
      "Enterprise.",
      "Business.",
      "Developer",
      "Basic"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "dceb02ccfb1a",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Qual è l'opzione di storage durevole più economica per conservare i backup di database con recupero immediato?",
    "opts": [
      "Amazon S3.",
      "Amazon Glacier.",
      "Amazon EBS.",
      "Amazon EC2 Instance Store."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "972b3ca2bbf9",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale team AWS aiuta i clienti ad accelerare l'adozione del cloud tramite incarichi a pagamento in diverse aree di competenza specialistica?",
    "opts": [
      "AWS Enterprise Support.",
      "AWS Solutions Architect.",
      "AWS Professional Services.",
      "AWS Account Manager."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "2b5bfed74379",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "Un'azienda ha bisogno di accesso 24/7 via telefono, email e chat, con un tempo di risposta inferiore a 1 ora se un sistema in produzione ha un'interruzione del servizio. Quale piano AWS Support soddisfa questi requisiti al costo PIÙ BASSO?",
    "opts": [
      "Basic.",
      "Developer.",
      "Business.",
      "Enterprise."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "dadd6a60fa7f",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Se un cliente deve verificare la gestione delle modifiche delle risorse AWS, quale dei seguenti servizi AWS dovrebbe usare?",
    "opts": [
      "AWS Config.",
      "AWS Trusted Advisor.",
      "Amazon CloudWatch.",
      "Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Security",
      "Support"
    ],
    "id": "9fb07db06871",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "In che modo AWS Trusted Advisor fornisce indicazioni agli utenti del cloud AWS? (Scegline DUE)",
    "opts": [
      "Individua le vulnerabilità software nelle applicazioni in esecuzione su AWS.",
      "Fornisce un elenco di raccomandazioni per ottimizzare i costi in base all'utilizzo attuale di AWS.",
      "Rileva potenziali vulnerabilità di sicurezza causate dalle impostazioni dei permessi sulle risorse dell'account.",
      "Corregge automaticamente i potenziali problemi di sicurezza causati dalle impostazioni dei permessi sulle risorse dell'account.",
      "Invia avvisi proattivi ogni volta che un'istanza Amazon EC2 è stata compromessa."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support",
      "Well-Architected"
    ],
    "id": "0d9971250bfc",
    "explain": "Il pillar Cost Optimization del Well-Architected Framework evita costi non necessari. Include eliminazione delle risorse inutilizzate, uso di Reserved Instance/Savings Plans e dimensionamento corretto."
  },
  {
    "q": "Quale servizio gestito AWS si usa per ospitare database?",
    "opts": [
      "AWS Batch.",
      "AWS Artifact.",
      "AWS Data Pipeline.",
      "Amazon RDS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "536379c71eb9",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale delle seguenti entità di Identity and Access Management (IAM) è associata a un access key ID e a una secret access key quando si usa la AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "Gruppo IAM.",
      "Utente IAM.",
      "Ruolo IAM.",
      "Policy IAM."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "1d785b919343",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, di quale dei seguenti aspetti è responsabile il cliente?",
    "opts": [
      "Assicurarsi che i dischi vengano cancellati dopo l'uso.",
      "Assicurarsi che il firmware dei dispositivi hardware sia aggiornato.",
      "Assicurarsi che i dati siano cifrati a riposo.",
      "Assicurarsi che i cavi di rete siano di categoria sei o superiore."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "45848a00b735",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio AWS fornisce una soluzione di file storage condiviso semplice e scalabile da usare con server Linux su AWS e on-premises?",
    "opts": [
      "Amazon S3.",
      "Amazon Glacier.",
      "Amazon EBS.",
      "Amazon EFS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "409d506c9aa3",
    "explain": "Amazon EFS è un file system NFS gestito condivisibile tra più istanze EC2. Si scala automaticamente da gigabyte a petabyte senza provisioning. Ideale per CMS e ambienti di sviluppo condivisi."
  },
  {
    "q": "Quali componenti delle credenziali servono per ottenere l'accesso programmatico a un account AWS? (Scegline DUE)",
    "opts": [
      "Un access key ID.",
      "Una chiave primaria.",
      "Una secret access key.",
      "Uno user ID.",
      "Una chiave secondaria."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "8badbb649975",
    "explain": "Le Access Key (Access Key ID + Secret Access Key) sono credenziali per chiamate programmatiche all'API AWS. Best practice: ruotarle regolarmente e non incorporarle nel codice. Ogni utente IAM può avere al massimo 2 access key attive."
  },
  {
    "q": "Quale dei seguenti è un controllo condiviso tra il cliente e AWS?",
    "opts": [
      "Fornire una chiave per la cifratura lato client di Amazon S3.",
      "La configurazione di un'istanza Amazon EC2.",
      "I controlli ambientali dei data center fisici di AWS.",
      "La consapevolezza (awareness)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Security"
    ],
    "id": "067b7c448732"
  },
  {
    "q": "Quale tipo di storage AWS è effimero e viene cancellato quando un'istanza viene arrestata o terminata?",
    "opts": [
      "Amazon EBS.",
      "Instance store di Amazon EC2.",
      "Amazon EFS.",
      "Amazon S3."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "aa6ce2aca47e",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti è un vantaggio della fatturazione consolidata su AWS?",
    "opts": [
      "L'accesso ai prezzi per volume.",
      "Permessi di accesso condivisi.",
      "Più fatture per account.",
      "Elimina la necessità dei tag."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ],
    "id": "3b9c7ea6a7a1",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quali servizi fanno parte della piattaforma serverless di AWS?",
    "opts": [
      "Amazon EC2, Amazon S3, Amazon Athena.",
      "Amazon Kinesis, Amazon SQS, Amazon EMR.",
      "AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
      "Amazon Athena, Amazon Cognito, Amazon EC2."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "DynamoDB",
      "SNS",
      "SQS",
      "Security",
      "Analytics"
    ],
    "id": "d52d73aae76a",
    "explain": "AWS Step Functions orchestra workflow serverless multi-step con macchine a stati. Gestisce errori, retry e timeout automaticamente."
  },
  {
    "q": "Quale dei seguenti modelli di prezzo di Amazon EC2 permette ai clienti di usare licenze software esistenti legate al server?",
    "opts": [
      "Istanze Spot.",
      "Istanze Reserved.",
      "Dedicated Hosts.",
      "Istanze On-Demand."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "1ee8cd38bf58",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali delle seguenti misure di sicurezza proteggono l'accesso a un account AWS? (Scegline DUE)",
    "opts": [
      "Abilitare AWS CloudTrail.",
      "Concedere agli utenti IAM l'accesso con privilegio minimo.",
      "Creare un unico utente IAM e condividerlo tra molti sviluppatori e utenti.",
      "Abilitare Amazon CloudFront.",
      "Attivare l'autenticazione a più fattori (MFA) per gli utenti privilegiati."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFront"
    ],
    "id": "43bf27354ff1",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quale servizio AWS offre la possibilità di gestire l'infrastruttura come codice?",
    "opts": [
      "AWS CodePipeline.",
      "AWS CodeDeploy.",
      "AWS Direct Connect.",
      "AWS CloudFormation."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Networking"
    ],
    "id": "bbebe519ba21",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Qual è un vantaggio di distribuire un'applicazione su più Availability Zone?",
    "opts": [
      "Il rischio di guasto del servizio è più basso se un disastro naturale causa un'interruzione del servizio in una determinata Regione AWS.",
      "L'applicazione avrà una disponibilità più alta perché può resistere a un'interruzione del servizio in una Availability Zone.",
      "La copertura sarà migliore, perché le Availability Zone sono geograficamente distanti e possono servire un'area più ampia.",
      "La latenza dell'applicazione diminuirà, migliorando l'esperienza utente."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "62d67fed4db7-2"
  },
  {
    "q": "Un cliente deve eseguire un database MySQL che scali facilmente. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon ElastiCache."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "9e57b631ae24",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Quale dei seguenti è un principio di progettazione dell'architettura nel cloud AWS?",
    "opts": [
      "Implementare single point of failure.",
      "Implementare l'accoppiamento debole (loose coupling).",
      "Implementare una progettazione monolitica.",
      "Implementare la scalabilità verticale."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "3f80d744d061",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Un'azienda passerà da un data center on-premises al cloud AWS. Quale sarebbe una differenza finanziaria dopo il passaggio?",
    "opts": [
      "Passare da spese operative variabili (opex) a spese in conto capitale anticipate (capex).",
      "Passare da spese in conto capitale anticipate (capex) a spese in conto capitale variabili (capex).",
      "Passare da spese in conto capitale anticipate (capex) a spese operative variabili (opex).",
      "L'eliminazione delle spese in conto capitale anticipate (capex) e delle spese operative variabili (opex)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "070854e36a96",
    "explain": "Il modello cloud AWS converte le spese CapEx in OpEx variabili. Si paga solo per le risorse usate senza impegni a lungo termine. Migliora il cash flow ed elimina il rischio di sovra-provisioning."
  },
  {
    "q": "In un'analisi dei costi che prevede l'isolamento fisico del carico di lavoro di un cliente, quale modello di hosting di calcolo va considerato nel costo totale di proprietà (TCO)?",
    "opts": [
      "Dedicated Hosts",
      "Istanze Reserved",
      "Istanze On-Demand",
      "Istanze Reserved senza pagamento anticipato (No Upfront)"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "82ae330b0c81"
  },
  {
    "q": "Quale servizio AWS dovrebbe essere usato per conservare a lungo termine e a basso costo i backup dei dati?",
    "opts": [
      "Amazon RDS.",
      "Amazon Glacier.",
      "AWS Snowball.",
      "AWS EBS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ],
    "id": "e69cb9dbb6de",
    "explain": "Amazon S3 Glacier è storage a bassissimo costo per archiviazione a lungo termine. Il recupero richiede da minuti a ore. Conforme a normative di conservazione come HIPAA e SEC Rule 17a-4."
  },
  {
    "q": "Qual è il piano AWS Support MINIMO che offre supporto tecnico tramite telefono?",
    "opts": [
      "Enterprise.",
      "Business.",
      "Developer.",
      "Basic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "79eb532cbe54",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quale modello di prezzo delle istanze Amazon EC2 può offrire sconti fino al 90%?",
    "opts": [
      "Istanze Reserved.",
      "On-Demand.",
      "Dedicated Hosts.",
      "Istanze Spot."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "4fafea978847",
    "explain": "Le EC2 Spot Instance usano capacità inutilizzata a prezzi fino al 90% inferiori. Possono essere interrotte con 2 minuti di preavviso. Ideali per batch e rendering, non per workload critici."
  },
  {
    "q": "Quali dei seguenti servizi AWS possono essere usati per distribuire grandi quantità di contenuti video online con la latenza più bassa possibile? (Scegline DUE)",
    "opts": [
      "appGateway.",
      "Amazon S3.",
      "Amazon Elastic File System (EFS).",
      "Amazon Glacier.",
      "Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ],
    "id": "f2ade26eca04",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Per cosa possono essere usate le edge location di AWS? (Scegline DUE)",
    "opts": [
      "Ospitare applicazioni.",
      "Consegnare i contenuti più vicino agli utenti.",
      "Eseguire servizi di cache per database NoSQL.",
      "Ridurre il traffico sul server mettendo in cache le risposte.",
      "Inviare messaggi di notifica agli utenti finali."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "DynamoDB"
    ],
    "id": "993edc38c061"
  },
  {
    "q": "Un'azienda sta pianificando di migrare dall'on-premises al cloud AWS. Quale strumento o servizio AWS fornisce report dettagliati sui risparmi stimati dopo la migrazione?",
    "opts": [
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "Cost Explorer.",
      "AWS Budgets.",
      "AWS Migration Hub."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "b2d7ae2bb0ca",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quale servizio AWS fornisce una vista personalizzata dello stato di salute dei servizi AWS specifici su cui si basano i carichi di lavoro di un cliente in esecuzione su AWS?",
    "opts": [
      "AWS Service Health Dashboard.",
      "AWS X-Ray.",
      "AWS Personal Health Dashboard.",
      "Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "83a8f79a9372",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Uno dei vantaggi di spostare l'infrastruttura da un data center on-premises al cloud AWS è che:",
    "opts": [
      "Permette all'azienda di eliminare i costi IT.",
      "Permette all'azienda di mettere un server nel data center di ogni cliente.",
      "Permette all'azienda di concentrarsi sulle attività di business.",
      "Permette all'azienda di lasciare i server senza patch."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "8484e9d9b9d6",
    "explain": "Un vantaggio chiave del cloud AWS è che elimina la necessità di gestire l'infrastruttura fisica, permettendo ai team IT di concentrarsi su attività che generano valore per il business invece di gestire hardware e data center. Questo accelera l'innovazione e il time-to-market. AWS gestisce l'infrastruttura sottostante in modo che i clienti si concentrino sui propri prodotti e clienti."
  },
  {
    "q": "Come può un utente proteggersi dalle interruzioni dei servizi AWS se un disastro naturale colpisce un'intera area geografica?",
    "opts": [
      "Distribuire le applicazioni su più Availability Zone di una Regione AWS.",
      "Usare un modello di distribuzione di cloud ibrido all'interno dell'area geografica.",
      "Distribuire le applicazioni su più Regioni AWS.",
      "Conservare gli artefatti dell'applicazione con AWS Artifact e replicarli su più Regioni AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "fe7465f41649",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "In quale scenario dovrebbero essere usate le Istanze Spot Amazon EC2?",
    "opts": [
      "Un'azienda vuole spostare il suo sito web principale su AWS da un web server on-premises.",
      "Un'azienda ha diversi servizi applicativi il cui Service Level Agreement (SLA) richiede un uptime del 99,999%.",
      "Il database legacy molto usato di un'azienda gira attualmente on-premises.",
      "Un'azienda ha diversi lavori saltuari e interrompibili che attualmente usano Istanze On-Demand."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ],
    "id": "e88bd37d1e81",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un cliente sta distribuendo una nuova applicazione e deve scegliere una Regione AWS. Quali dei seguenti fattori potrebbero influenzare la decisione del cliente? (Scegline DUE)",
    "opts": [
      "Latenza ridotta verso gli utenti.",
      "La presentazione dell'applicazione nella lingua locale.",
      "La conformità alla sovranità dei dati.",
      "I costi di raffreddamento nei climi più caldi.",
      "La vicinanza all'ufficio del cliente per le visite in sede."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "b90d5d2692b7",
    "explain": "AWS supporta PCI DSS, HIPAA, SOC 1/2/3, ISO 27001 e FedRAMP. AWS Artifact fornisce report di conformità e accordi legali. I clienti ereditano i controlli AWS ma rimangono responsabili della conformità delle loro applicazioni."
  },
  {
    "q": "Quale servizio AWS invia avvisi quando un evento AWS può avere impatto sulle risorse AWS di un'azienda?",
    "opts": [
      "AWS Personal Health Dashboard.",
      "AWS Service Health Dashboard.",
      "AWS Trusted Advisor.",
      "AWS Infrastructure Event Management."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "8e9e94fae4a2",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Quale scenario di disaster recovery offre la probabilità più bassa di tempi di inattività?",
    "opts": [
      "Backup and restore.",
      "Pilot light.",
      "Warm standby.",
      "Multi-site active-active."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "691e12661411",
    "explain": "La strategia Multi-site Active-Active esegue l'applicazione in più regioni simultaneamente. Offre il RTO e RPO più bassi possibili, prossimi a zero. È la strategia DR più costosa ma con massima disponibilità."
  },
  {
    "q": "Quale servizio ha come scopo PRINCIPALE il controllo di versione del software?",
    "opts": [
      "Amazon CodeStar.",
      "AWS Command Line Interface (AWS CLI).",
      "Amazon Cognito.",
      "AWS CodeCommit."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "3e97dd90637c",
    "explain": "AWS CodeCommit è un servizio Git privato e gestito. Si integra con IAM e CodePipeline per CI/CD."
  },
  {
    "q": "Come può un cliente aumentare la sicurezza degli accessi all'account AWS? (Scegline DUE)",
    "opts": [
      "Configurare AWS Certificate Manager",
      "Abilitare l'autenticazione a più fattori (MFA)",
      "Usare Amazon Cognito per gestire gli accessi",
      "Configurare una policy delle password robusta",
      "Abilitare AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "366893c0a4db",
    "explain": "Le policy di password IAM definiscono i requisiti per le password degli utenti AWS: lunghezza minima, complessità, scadenza e riuso. Permettono agli amministratori di imporre standard di sicurezza. Si configurano nella console IAM e si applicano a tutti gli utenti dell'account."
  },
  {
    "q": "Quale team AWS aiuta i clienti ad accelerare l'adozione del cloud tramite incarichi a pagamento in diverse aree di competenza specialistica?",
    "opts": [
      "AWS Enterprise Support",
      "AWS Solutions Architect",
      "AWS Professional Services",
      "AWS Account Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "f99fa5cfc85d",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "Un cliente vuole progettare e costruire un nuovo carico di lavoro nel cloud AWS, ma non ha al suo interno competenze tecniche sul software legato ad AWS. Quale dei seguenti programmi AWS può sfruttare per ottenere questo risultato?",
    "opts": [
      "AWS Partner Network Technology Partner",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partner",
      "AWS Service Catalog"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a2e234f51829",
    "explain": "L'AWS Partner Network (APN) include Consulting Partners che aiutano a progettare e costruire su AWS e Technology Partners con prodotti integrati. I partner APN possono aiutare con valutazione e migrazione al cloud."
  },
  {
    "q": "Quale dei seguenti strumenti esamina gli ambienti AWS per trovare opportunità di risparmio per gli utenti e anche di miglioramento delle prestazioni del sistema?",
    "opts": [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Fatturazione consolidata",
      "Fatturazione dettagliata"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "23664041434b",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale dei seguenti modelli di prezzo di Amazon EC2 permette ai clienti di usare licenze software esistenti legate al server?",
    "opts": [
      "Istanze Spot",
      "Istanze Reserved",
      "Dedicated Hosts",
      "Istanze On-Demand"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "627119b3be1b",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali caratteristiche di AWS lo rendono conveniente per un carico di lavoro con una domanda degli utenti variabile? (Scegline DUE)",
    "opts": [
      "Alta disponibilità",
      "Modello di sicurezza condivisa",
      "Elasticità",
      "Prezzi pay-as-you-go (a consumo)",
      "Affidabilità"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "23adcdd22991",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Quali delle seguenti sono caratteristiche di Amazon S3? (Scegline DUE.)",
    "opts": [
      "Un file system globale",
      "Un object store (archivio di oggetti)",
      "Un archivio di file locale",
      "Un file system di rete",
      "Un sistema di storage durevole"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "3be3db32779e",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali servizi possono essere usati in architetture ibride con il cloud AWS? (Scegline DUE.)",
    "opts": [
      "Amazon Route 53",
      "Virtual Private Gateway",
      "Classic Load Balancer",
      "Auto Scaling",
      "Metriche predefinite di Amazon CloudWatch"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Route 53",
      "CloudWatch"
    ],
    "id": "c436f9b28bb6",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Un'azienda sta valutando di usare AWS per un database autogestito che deve essere spento ogni notte per manutenzione e per risparmiare. Quale servizio dovrebbe usare l'azienda?",
    "opts": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) con instance store Amazon EC2",
      "Amazon EC2 con Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "DynamoDB",
      "Storage",
      "Analytics"
    ],
    "id": "bfdff71e57cc",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali strumenti AWS aiutano a stimare i costi? (Scegline tre.)",
    "opts": [
      "Report di fatturazione dettagliato",
      "Tag di allocazione dei costi",
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Eliminator"
    ],
    "a": 1,
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "26e44641670b",
    "explain": "I Cost Allocation Tags tracciano i costi AWS per progetto, reparto o categoria. Appaiono nei report di costo e in Cost Explorer. Sono lo strumento principale per chargeback dei costi cloud."
  },
  {
    "q": "Quali dei seguenti sono vantaggi della fatturazione consolidata di AWS? (Scegline DUE.)",
    "opts": [
      "La possibilità di ricevere un'unica fattura per più account",
      "L'aumento predefinito dei limiti dei servizi in tutti gli account",
      "Uno sconto fisso sulla fattura mensile",
      "Possibili sconti sui volumi, perché l'utilizzo di tutti gli account viene sommato",
      "L'estensione automatica del piano di supporto AWS dell'account master a tutti gli account"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "4c63ba857ea4",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quale dei seguenti strumenti può limitare l'accesso a un bucket Amazon Simple Storage Service (Amazon S3) a utenti specifici?",
    "opts": [
      "Una coppia di chiavi pubblica e privata",
      "Amazon Inspector",
      "Le policy di AWS Identity and Access Management (IAM)",
      "I security group"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ],
    "id": "baf1db039fcd",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale caratteristica di AWS ridurrà il costo totale di proprietà (TCO) del cliente?",
    "opts": [
      "Il modello di sicurezza a responsabilità condivisa",
      "La single tenancy (uso esclusivo dell'hardware)",
      "Il calcolo elastico",
      "La cifratura"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ],
    "id": "f6d8a9e63172",
    "explain": "L'elasticità cloud AWS permette di scalare automaticamente le risorse in risposta alla domanda reale, senza dover fare previsioni di capacità in anticipo. Questo riduce il TCO eliminando sia il sovra-provisioning (sprechi) che il sotto-provisioning (performance degradate). Si paga solo per le risorse effettivamente usate, adattando automaticamente la capacità al carico."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali delle seguenti attività sono responsabilità del cliente? (Scegline DUE.)",
    "opts": [
      "Applicare le patch ai componenti del sistema operativo di Amazon Relational Database Server (Amazon RDS)",
      "Cifrare i dati lato client",
      "Formare il personale del data center",
      "Configurare le Network Access Control List (ACL)",
      "Mantenere i controlli ambientali all'interno di un data center"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ],
    "id": "aaeb713be690",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Qual è uno schema consigliato per progettare un'architettura altamente disponibile su AWS?",
    "opts": [
      "Assicurarsi che i componenti abbiano una connettività di rete a bassa latenza.",
      "Eseguire abbastanza istanze Amazon EC2 da reggere il carico di picco.",
      "Assicurarsi che l'applicazione sia progettata per sopportare il guasto di qualsiasi singolo componente.",
      "Usare un'applicazione monolitica che gestisce tutte le operazioni."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "ef334f5d629c"
  },
  {
    "q": "Quali dei seguenti metodi supporta AWS per aggiungere sicurezza agli utenti di Identity and Access Management (IAM)? (Scegline DUE.)",
    "opts": [
      "Implementare Amazon Rekognition",
      "Usare risorse protette da AWS Shield",
      "Bloccare l'accesso con i security group",
      "Usare l'autenticazione a più fattori (MFA)",
      "Imporre robustezza e scadenza delle password"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "AI / ML"
    ],
    "id": "dac1e0f7c960",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quali servizi AWS dovrebbero essere usati per leggere e scrivere dati che cambiano continuamente? (Scegline DUE.)",
    "opts": [
      "Amazon Glacier",
      "Amazon RDS",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon EFS"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Storage",
      "Analytics"
    ],
    "id": "d24f013c0cf3",
    "explain": "Amazon EFS è un file system NFS gestito condivisibile tra più istanze EC2. Si scala automaticamente da gigabyte a petabyte senza provisioning. Ideale per CMS e ambienti di sviluppo condivisi."
  },
  {
    "q": "Qual è uno dei vantaggi di Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "Semplifica le attività di amministrazione dei database relazionali.",
      "Offre un'affidabilità e una durabilità del 99,99999999999%.",
      "Scala automaticamente i database in base al carico.",
      "Permette agli utenti di regolare dinamicamente le risorse di CPU e RAM."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "7c0f98396f85-2"
  },
  {
    "q": "Un cliente deve eseguire un database MySQL che scali facilmente. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "42fd6c8fa2a8",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Quale dei seguenti è un controllo condiviso tra il cliente e AWS?",
    "opts": [
      "Fornire una chiave per la cifratura lato client di Amazon S3",
      "La configurazione di un'istanza Amazon EC2",
      "I controlli ambientali dei data center fisici di AWS",
      "Consapevolezza e formazione"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Security"
    ],
    "id": "067b7c448732-2"
  },
  {
    "q": "Su quante Availability Zone andrebbero distribuite le risorse di calcolo per ottenere l'alta disponibilità?",
    "opts": [
      "Almeno una",
      "Almeno due",
      "Almeno tre",
      "Almeno quattro o più"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "0902767c723a",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quale caratteristica del cloud AWS soddisfa il requisito di un'azienda internazionale di avere bassa latenza verso tutti i suoi clienti?",
    "opts": [
      "Tolleranza ai guasti",
      "Portata globale",
      "Prezzi pay-as-you-go (a consumo)",
      "Alta disponibilità"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "c8786480d845",
    "explain": "Il global reach di AWS permette di deployare applicazioni in qualsiasi parte del mondo in pochi minuti usando la rete globale di Regioni, Availability Zone ed Edge Location. Questo consente di avvicinare l'applicazione agli utenti finali riducendo la latenza. È possibile espandere il business globalmente senza dover costruire infrastrutture fisiche in ogni paese."
  },
  {
    "q": "Quale delle seguenti è responsabilità del cliente secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Applicare le patch all'infrastruttura sottostante",
      "La sicurezza fisica",
      "Applicare le patch alle istanze Amazon EC2",
      "Applicare le patch all'infrastruttura di rete"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ],
    "id": "a89afc3d41bf",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un cliente usa più account AWS con fatturazione separata. Come può sfruttare gli sconti sui volumi con il minimo impatto sulle risorse AWS?",
    "opts": [
      "Creare un unico account AWS globale e spostare lì tutte le risorse AWS.",
      "Sottoscrivere in anticipo tre anni di prezzi delle Istanze Reserved.",
      "Usare la funzionalità di fatturazione consolidata di AWS Organizations.",
      "Sottoscrivere il piano AWS Enterprise Support per ottenere sconti sui volumi."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "50c61eb760a8",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quali delle seguenti sono funzionalità di Amazon CloudWatch Logs? (Scegline DUE.)",
    "opts": [
      "Riepiloghi tramite Amazon Simple Notification Service (Amazon SNS)",
      "Analisi gratuite con Amazon Elasticsearch Service",
      "Fornito senza costi",
      "Monitoraggio in tempo reale",
      "Conservazione (retention) regolabile"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS"
    ],
    "id": "7ab72b378a1d",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Un cliente sta distribuendo una nuova applicazione e deve scegliere una Regione AWS. Quali dei seguenti fattori potrebbero influenzare la decisione del cliente? (Scegline DUE.)",
    "opts": [
      "Latenza ridotta verso gli utenti",
      "La presentazione dell'applicazione nella lingua locale",
      "La conformità alla sovranità dei dati",
      "I costi di raffreddamento nei climi più caldi",
      "La vicinanza all'ufficio del cliente per le visite in sede"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "18f5951fab69",
    "explain": "AWS supporta PCI DSS, HIPAA, SOC 1/2/3, ISO 27001 e FedRAMP. AWS Artifact fornisce report di conformità e accordi legali. I clienti ereditano i controlli AWS ma rimangono responsabili della conformità delle loro applicazioni."
  },
  {
    "q": "Quale delle seguenti affermazioni è vera riguardo alle Availability Zone e alle edge location di AWS?",
    "opts": [
      "Le edge location si trovano in Availability Zone separate in tutto il mondo per servire i clienti globali.",
      "Dentro una edge location esiste una Availability Zone per distribuire i contenuti in tutto il mondo con bassa latenza.",
      "Una Availability Zone è un luogo geografico in cui AWS fornisce più edge location fisicamente separate e isolate.",
      "Una Availability Zone AWS è un luogo isolato all'interno di una Regione AWS, mentre le edge location si trovano in molte città del mondo."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "d6ed8efbbc05",
    "explain": "Le edge location di AWS ospitano CloudFront e Route 53 per avvicinare contenuti agli utenti finali. Ci sono più edge location che Availability Zones e Regioni. Riducono la latenza distribuendo i contenuti in tutto il mondo."
  },
  {
    "q": "Quali funzionalità sono incluse nel piano AWS Business Support? (Scegline DUE)",
    "opts": [
      "Accesso 24x7 al servizio clienti.",
      "Accesso ai Cloud Support Engineer via email solo in orario lavorativo.",
      "Accesso alla funzionalità Infrastructure Event Management (IEM) a pagamento.",
      "Accesso 24x7 al TAM.",
      "Accesso parziale ai controlli di base di Trusted Advisor."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "da995bd24bc6",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Un'azienda sta sviluppando un'app mobile e vuole permettere agli utenti di autenticarsi all'applicazione con le loro identità Amazon, Apple, Facebook o Google. Quale servizio AWS dovrebbe usare l'azienda per questo scopo?",
    "opts": [
      "Amazon GuardDuty.",
      "Amazon Personalize.",
      "Amazon Cognito.",
      "AWS IAM."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "3125916dc3e2",
    "explain": "Amazon Cognito fornisce autenticazione e gestione utenti per applicazioni web e mobile. User Pools gestisce login, Identity Pools fornisce credenziali AWS temporanee. Supporta Google, Facebook e SAML/OIDC."
  },
  {
    "q": "Quale servizio AWS permette ai clienti di creare un modello (template) che definisce in modo programmatico, come codice, le policy e le configurazioni di tutte le risorse AWS, così che lo stesso template possa essere riutilizzato in più progetti?",
    "opts": [
      "AWS CloudFormation.",
      "AWS Config.",
      "AWS CloudTrail.",
      "AWS Auto Scaling."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ],
    "id": "b10e6f879538",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Quali dei seguenti sono vantaggi dell'uso di AWS come fornitore di cloud computing? (Scegline DUE)",
    "opts": [
      "Elimina la necessità di monitorare server e applicazioni.",
      "Gestisce tutte le attività di conformità e di audit.",
      "Fornisce hardware personalizzato per qualsiasi specifica.",
      "Elimina la necessità di indovinare il fabbisogno di capacità dell'infrastruttura.",
      "Permette ai clienti di sostituire le spese in conto capitale con spese operative."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "4bd85b87b04f"
  },
  {
    "q": "Un cliente sta pianificando di migrare i suoi database Microsoft SQL Server su AWS. Quali servizi AWS può usare il cliente per eseguire il database Microsoft SQL Server su AWS? (Scegline DUE)",
    "opts": [
      "AWS Fargate.",
      "Amazon Elastic Compute Cloud.",
      "Amazon RDS.",
      "AWS Database Migration Service (DMS).",
      "AWS Lambda."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "Lambda",
      "ECS / Fargate"
    ],
    "id": "bf9d2de1706b",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale servizio AWS può eseguire controlli di stato (health check) sulle istanze Amazon EC2?",
    "opts": [
      "AWS CloudFormation.",
      "Amazon Route 53.",
      "Amazon Chime.",
      "Amazon Aurora."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Route 53",
      "CloudFormation"
    ],
    "id": "bc9ec4cca17c",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Un'azienda sta sviluppando un'applicazione che userà il riconoscimento facciale per automatizzare il tagging delle foto. Quale servizio AWS dovrebbe usare l'azienda per il riconoscimento facciale?",
    "opts": [
      "Amazon Comprehend.",
      "AWS IAM.",
      "Amazon Polly.",
      "Amazon Rekognition."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "AI / ML"
    ],
    "id": "62c8f95e8755",
    "explain": "Amazon Rekognition analizza immagini e video per identificare oggetti, scene e volti con deep learning. Non richiede esperienza ML."
  },
  {
    "q": "Quali dei seguenti sono esempi di database gestiti da AWS? (Scegline DUE)",
    "opts": [
      "Amazon Neptune.",
      "Amazon CloudSearch.",
      "Microsoft SQL Server su Amazon EC2.",
      "MySQL su Amazon EC2.",
      "Amazon RDS for MySQL."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "43814502b98f",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Il flusso di lavoro AWS di un'azienda richiede di eseguire periodicamente lavori di elaborazione di immagini e video su larga scala. Il cliente vuole ridurre al minimo i costi e ha dichiarato che il tempo necessario per elaborare questi lavori non è critico, mentre la riduzione dei costi è il fattore più importante nella progettazione della soluzione. Quale classe di istanze EC2 è la più adatta a questa elaborazione?",
    "opts": [
      "Istanze On-Demand EC2.",
      "Istanze Reserved EC2 - senza pagamento anticipato (No Upfront).",
      "Istanze Spot EC2.",
      "Istanze Reserved EC2 - pagamento anticipato totale (All Upfront)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "416ba9666e2c",
    "explain": "Le EC2 Spot Instance usano capacità inutilizzata a prezzi fino al 90% inferiori. Possono essere interrotte con 2 minuti di preavviso. Ideali per batch e rendering, non per workload critici."
  },
  {
    "q": "C'è l'esigenza di concedere a un team DevOps l'accesso amministrativo completo a tutte le risorse di un account AWS. Chi può concedere questi permessi?",
    "opts": [
      "Il proprietario dell'account AWS.",
      "Il technical account manager AWS.",
      "Il team di sicurezza AWS.",
      "I cloud support engineer AWS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "a90d627de2b4"
  },
  {
    "q": "Devi migrare su AWS un gran numero di carichi di lavoro on-premises. Quale servizio AWS è il più appropriato?",
    "opts": [
      "AWS File Transfer Acceleration.",
      "AWS Server Migration Service.",
      "AWS Database Migration Service.",
      "AWS Application Discovery Service."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "5b9e13fdf7dd"
  },
  {
    "q": "Quali sono alcuni vantaggi chiave dell'uso di AWS CloudFormation? (Scegline DUE)",
    "opts": [
      "Aiuta i clienti AWS a distribuire le applicazioni senza preoccuparsi dell'infrastruttura sottostante.",
      "Applica automaticamente funzionalità di sicurezza IAM avanzate.",
      "Automatizza il provisioning e l'aggiornamento dell'infrastruttura in modo sicuro e controllato.",
      "Permette di modellare l'intera infrastruttura in un semplice file di testo.",
      "Compila e costruisce il codice dell'applicazione in tempi rapidi."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFormation"
    ],
    "id": "1b37bcb9cb10",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Quale dei seguenti è un modello di distribuzione del cloud computing che collega infrastruttura e applicazioni tra risorse basate sul cloud e risorse esistenti che non si trovano nel cloud?",
    "opts": [
      "On-premises.",
      "Misto.",
      "Ibrido.",
      "Cloud."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "f4894241441b"
  },
  {
    "q": "Un'azienda ospita carichi di lavoro critici per il business in una Regione AWS. Per proteggersi dalla perdita di dati e garantire la continuità operativa, deve essere creata in un'altra Regione AWS una copia speculare dell'attuale ambiente AWS. La policy aziendale richiede che l'ambiente di riserva sia disponibile in pochi minuti in caso di interruzione nella Regione AWS principale. Quale servizio AWS può essere usato per soddisfare questi requisiti?",
    "opts": [
      "CloudEndure Disaster Recovery.",
      "CloudEndure Migration.",
      "AWS Backup.",
      "AWS Glue."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Analytics"
    ],
    "id": "7c8ab51d6f76",
    "explain": "Il Disaster Recovery su AWS sfrutta la distribuzione multi-Region. Le strategie vanno da Backup & Restore (alto RTO/RPO) a Multi-Site Active-Active (RTO/RPO minimo). AWS permette DR a costi molto inferiori rispetto all'on-premise."
  },
  {
    "q": "Quale delle seguenti classi di storage S3 è la più adatta a ospitare le risorse statiche di un sito di e-commerce molto visitato, con modalità di accesso stabili?",
    "opts": [
      "S3 Standard-IA.",
      "S3 Intelligent-Tiering.",
      "S3 Glacier Deep Archive.",
      "S3 Standard."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "7ccb68dffe68",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Vuoi creare un backup dei tuoi dati in un altro luogo geografico. Dove dovresti creare questo backup?",
    "opts": [
      "In un'altra edge location.",
      "In un'altra Regione.",
      "In un altro VPC.",
      "In un'altra Availability Zone."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ],
    "id": "3c6fe7531802"
  },
  {
    "q": "Quale affermazione è vera riguardo alla sicurezza di Amazon EC2?",
    "opts": [
      "Dovresti usare i volumi instance store per conservare i dati di accesso.",
      "Dovresti applicare regolarmente le patch al sistema operativo e alle applicazioni delle tue istanze EC2.",
      "Dovresti distribuire i componenti critici della tua applicazione nella Availability Zone di cui ti fidi.",
      "Puoi tracciare tutte le chiamate API usando Amazon Athena."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Analytics"
    ],
    "id": "8133e1af00ec",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Che cosa offre AWS Cost Explorer per aiutarti a gestire la spesa AWS?",
    "opts": [
      "Confronti di costo tra ambienti nel cloud AWS e ambienti on-premises.",
      "Stime precise dei costi dei servizi AWS in base all'utilizzo previsto.",
      "La fatturazione consolidata.",
      "Previsioni dei costi molto accurate fino a 12 mesi in avanti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "aad210b9841a",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Quale delle seguenti è una funzionalità di Amazon RDS che esegue il failover automatico quando il database primario non risponde?",
    "opts": [
      "RDS Single-AZ.",
      "RDS Write Replica.",
      "Snapshot RDS.",
      "RDS Multi-AZ."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "60128e1cc14a",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Stai usando diverse istanze EC2 On-Demand per il tuo ambiente di sviluppo. Qual è il modo migliore per ridurre i costi quando queste istanze non vengono usate?",
    "opts": [
      "Eliminare tutti i volumi EBS collegati alle istanze.",
      "Non è possibile ridurre i costi delle istanze On-Demand.",
      "Terminare le istanze.",
      "Arrestare (stop) le istanze."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ],
    "id": "a081e2b8c408",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale delle seguenti strategie aiuta a proteggere l'account root AWS?",
    "opts": [
      "Eliminare le chiavi di accesso dell'utente root se non servono.",
      "Applicare l'MFA all'account root e usarlo per tutto il tuo lavoro.",
      "Accedere all'account root solo dal tuo telefono personale.",
      "Condividere la password o le chiavi di accesso dell'account AWS solo con persone fidate."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "b033cb588fb9",
    "explain": "L'account root AWS ha accesso illimitato e non può essere limitato da policy IAM. Best practice: non usarlo per operazioni quotidiane, abilitare MFA, eliminare le access key root, creare utenti IAM con permessi specifici. Usarlo solo per task che lo richiedono esplicitamente."
  },
  {
    "q": "Quali dei seguenti fattori vanno considerati per il prezzo di Amazon EBS? (Scegline DUE)",
    "opts": [
      "La dimensione dei volumi predisposti ogni mese.",
      "La capacità di calcolo consumata.",
      "La quantità di dati salvati negli snapshot.",
      "Il tempo di calcolo consumato.",
      "Il numero di dispositivi di storage Snowball richiesti."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Storage"
    ],
    "id": "48370c606074",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Hai appena configurato il tuo ambiente AWS e hai creato sei account utente IAM per il team DevOps. Cosa raccomanda AWS quando si concedono i permessi a questi account IAM?",
    "opts": [
      "Collegare una policy IAM separata a ogni singolo account.",
      "Applicare il principio del privilegio minimo.",
      "Per motivi di sicurezza, non concedere alcun permesso al team DevOps.",
      "Creare sei password IAM diverse."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "88cc355d3aa8",
    "explain": "Il principio del Least Privilege richiede di concedere agli utenti solo i permessi strettamente necessari. Riduce il rischio in caso di compromissione delle credenziali. Si implementa con policy IAM granulari revisionate periodicamente."
  },
  {
    "q": "Quali dei seguenti elementi hanno l'impatto maggiore sui costi? (Scegline DUE)",
    "opts": [
      "I costi di calcolo.",
      "Il numero di servizi usati.",
      "I costi del trasferimento dati in entrata (Data Transfer In).",
      "I costi del trasferimento dati in uscita (Data Transfer Out).",
      "Il numero di ruoli IAM predisposti."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "53b54adc0848"
  },
  {
    "q": "Chi tra i seguenti otterrà lo sconto più alto?",
    "opts": [
      "Un utente che sceglie di acquistare istanze On-Demand, Convertible, con pagamento anticipato parziale.",
      "Un utente che sceglie di acquistare istanze Reserved, Convertible, con pagamento anticipato totale.",
      "Un utente che sceglie di acquistare istanze Reserved, Standard, senza pagamento anticipato.",
      "Un utente che sceglie di acquistare istanze Reserved, Standard, con pagamento anticipato totale."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "08d1ccd4353b"
  },
  {
    "q": "Quale delle seguenti è un'opzione disponibile quando si acquistano istanze Amazon EC2?",
    "opts": [
      "La possibilità di fare un'offerta per ottenere i prezzi più bassi possibili.",
      "La possibilità di registrare le istanze EC2 per ottenere sconti sui volumi per ogni ora in cui le istanze sono in esecuzione.",
      "La possibilità di acquistare Istanze Dedicated con uno sconto fino al 90%.",
      "La possibilità di pagare in anticipo per avere costi orari più bassi."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "661053506cd9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Cosa significa il termine \"economie di scala\"?",
    "opts": [
      "Significa che risparmi di più quando consumi di più.",
      "Significa che più a lungo usi AWS, più paghi i suoi servizi.",
      "Significa che AWS abbasserà continuamente i costi man mano che cresce.",
      "Significa che hai la possibilità di pagare a consumo."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "0afffe9ff742",
    "explain": "Le economie di scala di AWS derivano dall'aggregazione di migliaia di clienti, riducendo i costi per unità. Questi risparmi vengono trasferiti ai clienti con riduzioni periodiche dei prezzi. I clienti beneficiano di prezzi enterprise anche con utilizzi ridotti."
  },
  {
    "q": "Un'azienda registra oscillazioni del traffico verso il suo sito di e-commerce durante le vendite lampo (flash sale). Quale servizio può aiutare l'azienda ad adeguare dinamicamente la capacità di calcolo necessaria per gestire i picchi di traffico durante le vendite lampo?",
    "opts": [
      "AWS Auto Scaling.",
      "Amazon Elastic Compute Cloud.",
      "Amazon Elastic File System.",
      "Amazon ElastiCache."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "7863736661d1",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale delle seguenti opzioni è vera per Amazon VPC?",
    "opts": [
      "Amazon VPC permette ai clienti di controllare le interazioni degli utenti con tutte le altre risorse AWS.",
      "I clienti AWS hanno il controllo completo del proprio ambiente di rete virtuale Amazon VPC.",
      "AWS è responsabile di tutti i dettagli di gestione e configurazione di Amazon VPC.",
      "Amazon VPC aiuta i clienti a rivedere la propria architettura AWS e ad adottare le best practice."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "cfd42fa72c4f",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Quale strumento può usare chi non è cliente AWS per confrontare il costo delle risorse di un ambiente on-premises con AWS?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS TCO Calculator."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "a1e3832e632c",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quali dei seguenti servizi forniscono un audit in tempo reale di conformità e vulnerabilità? (Scegline DUE)",
    "opts": [
      "AWS Config.",
      "Amazon Redshift.",
      "Amazon MQ.",
      "AWS Trusted Advisor.",
      "Amazon Cognito."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security",
      "Analytics",
      "Support"
    ],
    "id": "83ca1a326756",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale dei seguenti servizi AWS usa Puppet per automatizzare la configurazione delle istanze EC2?",
    "opts": [
      "AWS OpsWorks.",
      "AWS CloudFormation.",
      "AWS Quick Starts.",
      "AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ],
    "id": "1e6bb2a35eda",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Un'organizzazione usa un'architettura di cloud ibrido per la propria attività. Quale servizio AWS le permette di distribuire le applicazioni su qualsiasi server AWS o on-premises?",
    "opts": [
      "Amazon Kinesis.",
      "Amazon QuickSight.",
      "AWS CodeDeploy.",
      "Amazon Athena."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "id": "2db1d706617a",
    "explain": "AWS CodeDeploy automatizza il deployment su EC2, Lambda, ECS e on-premise con rollback automatico."
  },
  {
    "q": "Scegli i servizi basati su server: (Scegline DUE)",
    "opts": [
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "AWS Lambda.",
      "AWS Fargate.",
      "Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Lambda",
      "DynamoDB",
      "ECS / Fargate",
      "Analytics"
    ],
    "id": "a4630a50ba22",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Cosa descrive meglio il penetration testing?",
    "opts": [
      "Testare il tempo di risposta dell'applicazione da luoghi diversi.",
      "Testare la rete per trovare vulnerabilità di sicurezza che un attaccante potrebbe sfruttare.",
      "Testare le istanze per individuare quelle non funzionanti.",
      "Testare il software alla ricerca di bug ed errori."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c8cb578f681a",
    "explain": "AWS permette penetration test sulle proprie risorse (EC2, RDS, CloudFront, API Gateway, Lambda) compilando il Penetration Testing Request Form o senza approvazione per servizi approvati. I test DDoS richiedono autorizzazione esplicita. I clienti sono responsabili di non impattare altre risorse AWS."
  },
  {
    "q": "Quali dei seguenti sono casi d'uso di Amazon EMR? (Scegline DUE)",
    "opts": [
      "Permette di fare il backup di quantità enormi di dati a costi molto bassi.",
      "Permette di spostare dati su scala exabyte dai data center on-premises ad AWS.",
      "Permette di analizzare ed elaborare quantità enormi di dati in tempi rapidi.",
      "Permette di eseguire e scalare facilmente Apache Spark, Hadoop e altri framework di Big Data.",
      "Permette di eseguire e gestire facilmente container Docker."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "ECS / Fargate",
      "Analytics"
    ],
    "id": "11dddd019425",
    "explain": "Amazon EMR elabora grandi quantità di dati con Hadoop, Spark, Hive e Presto. Molto più economico rispetto all'on-premise."
  },
  {
    "q": "Il tuo CTO ti ha chiesto di contattare l'AWS Support tramite chat per avere indicazioni su EBS. Però, quando apri l'AWS Support Center, non trovi un modo per contattare il supporto via chat. Cosa dovresti fare?",
    "opts": [
      "Nell'AWS Support non esiste la chat.",
      "La chat è disponibile per tutti i piani a un costo aggiuntivo, ma prima devi richiederla.",
      "Passare almeno al piano Business Support.",
      "Passare dal piano Basic Support al Developer Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Support"
    ],
    "id": "cae570e6d581",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Uno sviluppatore vuole distribuire e gestire rapidamente la sua applicazione nel cloud AWS, ma non ha alcuna esperienza di cloud computing. Quale dei seguenti servizi AWS lo aiuterebbe a raggiungere il suo obiettivo?",
    "opts": [
      "AWS Fargate.",
      "AWS Batch.",
      "Amazon Personalize.",
      "AWS Elastic Beanstalk."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate"
    ],
    "id": "25ad6f4e907d",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale affermazione descrive meglio il modello di prezzo pay-as-you-go (a consumo) di AWS?",
    "opts": [
      "Con AWS sostituisci spese iniziali basse con grandi pagamenti variabili.",
      "Con AWS sostituisci spese iniziali basse con grandi pagamenti fissi.",
      "Con AWS sostituisci grandi spese iniziali con piccoli pagamenti fissi.",
      "Con AWS sostituisci grandi spese in conto capitale con piccoli pagamenti variabili."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "786955383d96",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Per i database Amazon RDS, cosa fa AWS al posto tuo? (Scegline DUE)",
    "opts": [
      "La configurazione del database.",
      "La protezione del traffico di rete.",
      "La gestione del sistema operativo.",
      "La gestione degli accessi.",
      "La gestione delle regole del firewall."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "RDS"
    ],
    "id": "c26f532470e0",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale delle seguenti strategie aiuta ad analizzare i costi in AWS?",
    "opts": [
      "Usare i tag per raggruppare le risorse.",
      "Usare AWS CloudFormation per automatizzare la distribuzione delle risorse.",
      "Distribuire risorse dello stesso tipo in Regioni diverse.",
      "Configurare Amazon Inspector per analizzare automaticamente i costi e inviare report via email."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Security"
    ],
    "id": "c930a0d5024e"
  },
  {
    "q": "Un'azienda di media ha un'applicazione che richiede ogni giorno il trasferimento di grandi set di dati verso e da AWS. Questi dati sono critici per il business e devono essere trasferiti su una connessione costante. Quale servizio AWS dovrebbe usare l'azienda?",
    "opts": [
      "AWS Direct Connect.",
      "Amazon Comprehend.",
      "AWS Snowmobile.",
      "AWS VPN."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage",
      "AI / ML",
      "Networking"
    ],
    "id": "aec57ddfc6f8",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Qual è il vantaggio principale del servizio AWS Storage Gateway?",
    "opts": [
      "Automatizza il processo di creazione, manutenzione ed esecuzione dei job ETL.",
      "Fornisce dispositivi fisici per migrare dati dall'on-premises ad AWS.",
      "Permette di integrare gli ambienti IT on-premises con lo storage cloud.",
      "Fornisce un archivio hardware delle chiavi per la conformità normativa."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "d24898222596",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Per proteggerti dalla perdita di dati, devi fare regolarmente il backup del database. Qual è l'opzione di storage più conveniente che permette il recupero immediato dei backup?",
    "opts": [
      "Amazon S3 Glacier Deep Archive.",
      "Amazon S3 Standard-Infrequent Access.",
      "Amazon S3 Glacier.",
      "Instance Store."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "3978d6edc6db",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale servizio puoi usare per instradare il traffico verso l'endpoint che offre le migliori prestazioni dell'applicazione per i tuoi utenti in tutto il mondo?",
    "opts": [
      "AWS Global Accelerator.",
      "AWS Data Pipeline.",
      "AWS DAX Accelerator.",
      "AWS Transfer Acceleration."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "6436bf9db05b",
    "explain": "AWS Global Accelerator instrada il traffico attraverso la rete backbone privata AWS. Usa IP anycast statici per dirigere gli utenti all'endpoint più vicino. Migliora disponibilità e performance per applicazioni globali."
  },
  {
    "q": "Perché le architetture serverless sono più economiche delle architetture basate su server?",
    "opts": [
      "Le architetture serverless usano nuovi dispositivi di calcolo potenti.",
      "Con le architetture basate su server le risorse di calcolo restano sempre accese, mentre con l'architettura serverless le risorse di calcolo vengono usate solo quando il codice è in esecuzione.",
      "Quando prenoti capacità serverless, ottieni grandi sconti rispetto alla prenotazione di server.",
      "Con le architetture serverless puoi scalare automaticamente in su o in giù al variare della domanda."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "id": "7c7dce511223",
    "explain": "L'architettura serverless elimina la gestione di server e scaling. Su AWS si implementa con Lambda, DynamoDB, S3 e API Gateway. Si paga solo per l'utilizzo effettivo senza costi per risorse inattive."
  },
  {
    "q": "Quali delle seguenti opzioni sono casi d'uso del servizio Amazon Route 53? (Scegline DUE)",
    "opts": [
      "Connettività punto-punto tra un data center on-premises e AWS.",
      "Rileva le modifiche di configurazione nell'ambiente AWS.",
      "Configurazione e gestione del DNS.",
      "Gestisce il traffico globale delle applicazioni tramite diversi tipi di instradamento.",
      "Fornisce raccomandazioni per ottimizzare la sicurezza dell'infrastruttura."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Route 53"
    ],
    "id": "2a3eadb27321",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Vuoi trasferire 200 terabyte di dati da sedi on-premises al cloud AWS. Quale delle seguenti opzioni può farlo in modo conveniente?",
    "opts": [
      "AWS Snowmobile.",
      "AWS Import/Export.",
      "AWS DMS.",
      "AWS Snowball."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "07b98c8a44ca",
    "explain": "AWS Snowball è un dispositivo fisico per migrare grandi quantità di dati verso AWS senza usare internet. Ideale quando la migrazione via rete richiederebbe settimane. Snowball Edge aggiunge capacità di calcolo locale."
  },
  {
    "q": "Hai un'applicazione IoT in tempo reale che richiede una latenza inferiore al millisecondo. Quale dei seguenti servizi dovresti usare?",
    "opts": [
      "Amazon Redshift.",
      "Amazon Athena.",
      "AWS Cloud9.",
      "Amazon ElastiCache for Redis."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "id": "b500418134ad",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "Un'azienda usa istanze EC2 per gestire il suo sito di e-commerce sulla piattaforma AWS. Se il sito diventa irraggiungibile, l'azienda perde una somma considerevole per ogni minuto di indisponibilità. Quale principio di progettazione dovrebbe usare l'azienda per ridurre al minimo il rischio di un'interruzione?",
    "opts": [
      "Privilegio minimo.",
      "Pilot Light.",
      "Tolleranza ai guasti.",
      "Multi-threading."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "990336b4c301",
    "explain": "La fault tolerance è la capacità di continuare a funzionare con guasti di componenti. Si implementa con ridondanza multi-AZ, Auto Scaling ed ELB. Il principio 'design for failure' è fondamentale: assumere che ogni componente possa fallire."
  },
  {
    "q": "Decidi di acquistare un'istanza Reserved per un periodo di un anno. Quale opzione offre lo sconto totale più alto?",
    "opts": [
      "Prenotazione con pagamento anticipato totale.",
      "Tutte le opzioni di pagamento delle istanze Reserved offrono lo stesso livello di sconto.",
      "Prenotazione con pagamento anticipato parziale.",
      "Prenotazione senza pagamento anticipato."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "b71ea84de8ec",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Quali funzionalità offre AWS per aiutarti a proteggere i dati nel cloud? (Scegline DUE)",
    "opts": [
      "Controllo degli accessi.",
      "Dispositivi MFA fisici.",
      "Cifratura dei dati.",
      "Storage illimitato.",
      "Bilanciamento del carico."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "b805f923ea7d",
    "explain": "La cifratura dei dati su AWS protegge le informazioni sia at-rest (su disco) che in-transit (in rete). AWS KMS gestisce le chiavi di cifratura e si integra con S3, EBS, RDS e altri servizi. I clienti sono responsabili di abilitare e configurare la cifratura per i propri dati."
  },
  {
    "q": "Un cliente AWS ha usato un'istanza Amazon Linux per 2 ore, 5 minuti e 9 secondi, e un'istanza CentOS per 4 ore, 23 minuti e 7 secondi. Per quanto tempo verrà fatturato il cliente?",
    "opts": [
      "3 ore per l'istanza Linux e 5 ore per l'istanza CentOS.",
      "2 ore, 5 minuti e 9 secondi per l'istanza Linux e 4 ore, 23 minuti e 7 secondi per l'istanza CentOS.",
      "2 ore, 5 minuti e 9 secondi per l'istanza Linux e 5 ore per l'istanza CentOS.",
      "3 ore per l'istanza Linux e 4 ore, 23 minuti e 7 secondi per l'istanza CentOS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "325adcd93adc"
  },
  {
    "q": "Qual è la funzionalità di AWS Support che permette ai clienti di gestire i casi di supporto in modo programmatico?",
    "opts": [
      "AWS Trusted Advisor.",
      "AWS Operations Support.",
      "AWS Support API.",
      "AWS Personal Health Dashboard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "7f4176e3f6d3"
  },
  {
    "q": "Quali metodi possono usare i clienti per interagire con AWS Identity and Access Management (IAM)? (Scegline DUE)",
    "opts": [
      "AWS CLI.",
      "Security group AWS.",
      "SDK AWS.",
      "Network Access Control List AWS.",
      "AWS CodeCommit."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ],
    "id": "160ef11f2a70",
    "explain": "L'AWS CLI (Command Line Interface) permette di gestire i servizi AWS direttamente dal terminale con comandi. Può essere usata per automatizzare operazioni tramite scripting. Richiede configurazione con Access Key o ruolo IAM."
  },
  {
    "q": "Quali dei seguenti sono tipi di identità di AWS Identity and Access Management (IAM)? (Scegline DUE)",
    "opts": [
      "AWS Resource Groups.",
      "Policy IAM.",
      "Ruoli IAM.",
      "Utenti IAM.",
      "AWS Organizations."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "876f0e9168a6",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale delle seguenti funzionalità di Amazon RDS aiuta a scaricare l'attività di lettura del database?",
    "opts": [
      "Snapshot del database.",
      "Distribuzioni Multi-AZ.",
      "Backup automatici.",
      "Read Replica."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "3fc2755f1415",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Come avvisa AWS i clienti degli eventi di sicurezza e privacy che riguardano i servizi AWS?",
    "opts": [
      "Usando il servizio AWS ACM.",
      "Usando i Security Bulletin (bollettini di sicurezza).",
      "Usando la AWS Management Console.",
      "Usando le risorse di conformità (Compliance Resources)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "c6934be8470c",
    "explain": "AWS mette a disposizione gratuitamente numerose risorse di sicurezza e formazione: documentazione ufficiale, whitepaper, blog AWS, Security Bulletins, AWS Online Tech Talks e forum della community. Queste risorse sono accessibili a tutti i clienti indipendentemente dal piano Support. Per supporto tecnico diretto invece è necessario un piano a pagamento."
  },
  {
    "q": "Quale entità IAM è la più adatta per concedere un accesso temporaneo alle tue risorse AWS?",
    "opts": [
      "Utenti IAM.",
      "Coppia di chiavi.",
      "Ruoli IAM.",
      "Gruppi IAM."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "0a0fd32a1e16",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Un'azienda ha un'applicazione web ospitata su una singola istanza EC2, che nei picchi di carico si avvicina al 100% di utilizzo della CPU. Invece di scalare il server in verticale, l'azienda ha deciso di distribuire tre istanze Amazon EC2 in parallelo e di ripartire il traffico tra i tre server. Quale servizio AWS dovrebbe usare l'azienda per distribuire il traffico in modo uniforme?",
    "opts": [
      "AWS Global Accelerator.",
      "AWS Application Load Balancer (ALB).",
      "Amazon CloudFront.",
      "Transit VPC."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Networking"
    ],
    "id": "fc57403435fd",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti approcci ti aiuterà a eliminare l'errore umano e ad automatizzare il processo di creazione e aggiornamento del tuo ambiente AWS?",
    "opts": [
      "Usare strumenti di automazione dei test software.",
      "Usare AWS CodeDeploy per costruire e automatizzare il tuo ambiente AWS.",
      "Usare il codice per predisporre e gestire l'infrastruttura AWS.",
      "Migrare tutte le applicazioni su un host dedicato."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "b509fc615ee9"
  },
  {
    "q": "Un'azienda vuole proteggere meglio il proprio account AWS dagli accessi non autorizzati. Quale delle seguenti opzioni può usare il cliente per raggiungere questo obiettivo?",
    "opts": [
      "Bloccare qualsiasi chiamata API fatta tramite SDK o CLI.",
      "Creare un account IAM per ogni reparto dell'azienda (Sviluppo, QA, Produzione) e condividerlo con tutto il personale del reparto.",
      "Richiedere l'autenticazione a più fattori (MFA) per tutti gli accessi degli utenti IAM.",
      "Impostare due password di accesso."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "faf5620ee81c",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quale servizio AWS offre sconti sui volumi in base all'utilizzo?",
    "opts": [
      "Amazon VPC.",
      "Amazon S3.",
      "Amazon Lightsail.",
      "AWS Cost Explorer."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Billing & Cost"
    ],
    "id": "aecce632d603",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali dei seguenti fattori vanno considerati per scegliere la Regione in cui distribuire le risorse AWS? (Scegline DUE)",
    "opts": [
      "Il livello di sicurezza della Regione AWS.",
      "La sovranità dei dati.",
      "Il costo.",
      "Il numero previsto di VPC.",
      "La vicinanza geografica alla sede dell'azienda."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "VPC"
    ],
    "id": "44a05d940663",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Gestisci un'applicazione web di servizi finanziari su AWS. L'applicazione usa un database MySQL per conservare i dati. Quale dei seguenti servizi AWS migliorerebbe le prestazioni dell'applicazione permettendoti di recuperare le informazioni da cache in memoria veloci?",
    "opts": [
      "Amazon EFS.",
      "Amazon Neptune.",
      "Amazon ElastiCache.",
      "DAX."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ],
    "id": "1659c87aca4a",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "Quali sono i vantaggi di usare gli Auto Scaling Group per le istanze EC2?",
    "opts": [
      "Gli Auto Scaling Group mettono in cache le risposte più recenti nelle edge location globali per ridurre la latenza e migliorare le prestazioni.",
      "Gli Auto Scaling Group scalano le istanze EC2 in più Availability Zone per aumentare la disponibilità e la tolleranza ai guasti dell'applicazione.",
      "Gli Auto Scaling Group scalano le istanze EC2 su più Regioni per ridurre la latenza per gli utenti globali.",
      "Gli Auto Scaling Group distribuiscono il traffico dell'applicazione su più Availability Zone per migliorare le prestazioni."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront"
    ],
    "id": "fa13f0f1b4a9",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Negli ultimi anni la differenza di TCO tra l'infrastruttura AWS e l'infrastruttura tradizionale è aumentata. Quale delle seguenti potrebbe esserne la ragione?",
    "opts": [
      "AWS aiuta i clienti a investire di più in spese in conto capitale.",
      "AWS automatizza tutte le operazioni dell'infrastruttura, quindi i clienti risparmiano di più sui costi del personale.",
      "AWS continua ad abbassare il costo del cloud computing per i suoi clienti.",
      "AWS protegge le risorse AWS senza costi aggiuntivi."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a397b4036743"
  },
  {
    "q": "Quali dei seguenti sono esempi della responsabilità del cliente di implementare la \"sicurezza NEL cloud\"? (Scegline DUE)",
    "opts": [
      "Costruire lo schema di un'applicazione.",
      "Sostituire l'hardware fisico.",
      "Creare un nuovo hypervisor.",
      "La gestione delle patch dell'infrastruttura sottostante.",
      "La cifratura del file system."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "eb573d06ebcf"
  },
  {
    "q": "Quale dei seguenti è un tipo di dispositivo MFA che i clienti possono usare per proteggere le proprie risorse AWS?",
    "opts": [
      "AWS CloudHSM.",
      "Chiave di sicurezza U2F.",
      "Chiavi di accesso AWS.",
      "Coppia di chiavi AWS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4c6783b8b5f3",
    "explain": "Un U2F Security Key (come YubiKey) è un dispositivo hardware MFA resistente al phishing. Si collega via USB o NFC come secondo fattore di autenticazione per l'accesso alla console AWS."
  },
  {
    "q": "Un'azienda vuole distribuire su AWS un'applicazione .NET esistente il più rapidamente possibile. Quale servizio AWS dovrebbe usare il cliente per raggiungere questo obiettivo?",
    "opts": [
      "Amazon SNS.",
      "AWS Elastic Beanstalk.",
      "AWS Systems Manager.",
      "AWS Trusted Advisor."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "SNS",
      "Support"
    ],
    "id": "86c3b06b9250",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale dei seguenti NON è un fattore nella stima dei costi di Amazon EC2? (Scegline DUE)",
    "opts": [
      "Il tempo per cui le istanze resteranno in esecuzione.",
      "Il numero di security group.",
      "Gli indirizzi Elastic IP allocati.",
      "Il numero di hosted zone.",
      "Il numero di istanze."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "Route 53"
    ],
    "id": "3a29c4a32a20",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS aiuta le aziende a estendere il proprio storage on-premises su AWS in modo conveniente?",
    "opts": [
      "AWS Data Pipeline.",
      "AWS Storage Gateway.",
      "Amazon Aurora.",
      "Amazon EFS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ],
    "id": "a3c0c38baf12",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Un'azienda sta costruendo una piattaforma di cloud storage online. Ha bisogno di un servizio di storage che possa scalare la capacità automaticamente, riducendo al minimo i costi. Quale servizio di storage AWS dovrebbe usare l'azienda per soddisfare questi requisiti?",
    "opts": [
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "Amazon Elastic Container Service.",
      "AWS Storage Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "ECS / Fargate",
      "Storage"
    ],
    "id": "b3ca418b5678"
  },
  {
    "q": "Hai appena assunto un sistemista esperto nel tuo team. Come di consueto, hai creato per lui un nuovo utente IAM per interagire con i servizi AWS. Il primo giorno gli chiedi di creare gli snapshot di tutti i volumi Amazon EBS esistenti e di salvarli in un nuovo bucket Amazon S3. Però il nuovo membro del team ti riferisce che non riesce a creare né snapshot EBS né bucket S3. Cosa potrebbe impedirgli di svolgere questa semplice attività?",
    "opts": [
      "EBS e S3 sono accessibili solo al proprietario dell'account root.",
      "Il sistemista deve prima contattare l'AWS Support per attivare il suo nuovo account IAM.",
      "In S3 non c'è abbastanza spazio per conservare gli snapshot.",
      "Esiste un rifiuto implicito (non esplicito) per tutti i nuovi utenti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "Storage"
    ],
    "id": "0ba69c050c54",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Un revisore esterno chiede un registro di tutti gli accessi alle risorse AWS nell'account dell'azienda. Quale dei seguenti servizi fornirà al revisore le informazioni richieste?",
    "opts": [
      "AWS CloudTrail.",
      "Amazon CloudFront.",
      "AWS CloudFormation.",
      "Amazon CloudWatch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "CloudFormation"
    ],
    "id": "d10206168f48",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quale delle seguenti opzioni è vera per Amazon Cloud Directory?",
    "opts": [
      "Amazon Cloud Directory permette di organizzare gerarchie di dati su più dimensioni.",
      "Amazon Cloud Directory permette di analizzare flussi video e di dati in tempo reale.",
      "Amazon Cloud Directory permette agli utenti di accedere ad AWS con le proprie credenziali Active Directory esistenti.",
      "Amazon Cloud Directory permette di registrare e gestire nomi di dominio."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "1d9a5a79ffd7",
    "explain": "Amazon Cloud Directory organizza gerarchie di dati lungo più dimensioni simultaneamente, supportando schemi multipli e relazioni multidimensionali. A differenza delle directory tradizionali (LDAP), gestisce oggetti con attributi multipli e relazioni complesse. Ideale per organigrammi con strutture complesse."
  },
  {
    "q": "Un utente ha aperto un caso di supporto \"Production System Down\" (sistema di produzione fermo) per ricevere aiuto dall'AWS Support dopo un'interruzione di un sistema in produzione. Qual è il tempo di risposta previsto per questo tipo di caso?",
    "opts": [
      "12 ore.",
      "15 minuti.",
      "24 ore.",
      "Un'ora."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "ac4ddbd9b46f"
  },
  {
    "q": "Quale delle seguenti opzioni è una best practice per rendere altamente disponibile un'applicazione su AWS?",
    "opts": [
      "Distribuire l'applicazione in almeno due Availability Zone.",
      "Usare Elastic Load Balancing (ELB) su più Regioni AWS.",
      "Distribuire il codice dell'applicazione su almeno due server nella stessa Availability Zone.",
      "Riscrivere il codice dell'applicazione perché gestisca tutte le richieste in entrata."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "dd67cde830f7",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quali dei seguenti aspetti vanno considerati in un'analisi del TCO sui costi di eseguire un'applicazione su AWS rispetto all'on-premises? (Scegline DUE)",
    "opts": [
      "I costi del personale e dell'IT.",
      "Il raffreddamento e il consumo di energia.",
      "La potenza di calcolo di Amazon EBS.",
      "L'architettura del software.",
      "La compatibilità del software."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Storage"
    ],
    "id": "a40695abcaaf"
  },
  {
    "q": "La tua azienda richiede un tempo di risposta inferiore a 15 minuti dal supporto per i suoi sistemi critici ospitati su AWS, nel caso in cui quei sistemi si fermino. Quale piano AWS Support dovrebbe usare l'azienda?",
    "opts": [
      "AWS Basic Support.",
      "AWS Developer Support.",
      "AWS Business Support.",
      "AWS Enterprise Support."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "b2fcec43410f",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quali delle seguenti offerte AWS sono servizi serverless? (Scegline DUE)",
    "opts": [
      "Amazon EC2.",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "Amazon EMR.",
      "Amazon RDS."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "Lambda",
      "DynamoDB",
      "Analytics"
    ],
    "id": "9543a710e3b7",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quale servizio AWS permette di acquistare e distribuire rapidamente certificati SSL/TLS?",
    "opts": [
      "Amazon GuardDuty.",
      "AWS ACM.",
      "Amazon Detective.",
      "AWS WAF."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "aabc6d8660cc"
  },
  {
    "q": "Quale servizio AWS offre l'integrazione con Chef per automatizzare la configurazione delle istanze EC2?",
    "opts": [
      "AWS Config.",
      "AWS OpsWorks.",
      "AutoScaling.",
      "AWS CloudFormation."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ],
    "id": "54d400cc51f1",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Un cliente vuole conservare oggetti nel proprio ambiente AWS e renderli scaricabili via Internet. Quale servizio AWS può essere usato per farlo?",
    "opts": [
      "Amazon EBS.",
      "Amazon EFS.",
      "Amazon S3.",
      "Amazon Instance Store."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "fe10a2cf7da5",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale dei seguenti servizi può essere usato per monitorare le richieste HTTP e HTTPS inoltrate ad Amazon CloudFront?",
    "opts": [
      "AWS WAF.",
      "Amazon CloudWatch.",
      "AWS Cloud9.",
      "AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Security"
    ],
    "id": "d813728e5e0f",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Un'azienda sta migrando un'applicazione web su AWS. La capacità di calcolo dell'applicazione è usata in modo continuo per tutto l'anno. Quale delle seguenti opzioni offre all'azienda la soluzione più conveniente?",
    "opts": [
      "Istanze On-Demand.",
      "Dedicated Hosts.",
      "Istanze Spot.",
      "Istanze Reserved."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "78cec97d301a"
  },
  {
    "q": "Un'azienda vuole concedere a un nuovo dipendente un accesso a lungo termine per gestire i database Amazon DynamoDB. Quale delle seguenti è una best practice consigliata per concedere questi permessi?",
    "opts": [
      "Creare un ruolo IAM e collegargli una policy con permessi di accesso ad Amazon DynamoDB.",
      "Creare un ruolo IAM e collegargli una policy con permessi di amministratore.",
      "Creare un utente IAM e collegargli una policy con permessi di accesso ad Amazon DynamoDB.",
      "Creare un utente IAM e collegargli una policy con permessi di amministratore."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "DynamoDB"
    ],
    "id": "8fa64295db89",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quando si concedono permessi ad applicazioni in esecuzione su istanze Amazon EC2, quale delle seguenti è considerata una best practice?",
    "opts": [
      "Generare nuove chiavi di accesso IAM ogni volta che si delegano permessi.",
      "Conservare le credenziali AWS necessarie direttamente nel codice dell'applicazione.",
      "Usare credenziali di sicurezza temporanee (ruoli IAM) invece di chiavi di accesso a lungo termine.",
      "Non fare nulla: le applicazioni in esecuzione su istanze Amazon EC2 non hanno bisogno di permessi per interagire con altri servizi o risorse AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "41fc06610c2f",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale dei seguenti aiuterà i clienti AWS a risparmiare sui costi quando migrano i loro carichi di lavoro su AWS?",
    "opts": [
      "Usare server invece di servizi gestiti.",
      "Usare su AWS le licenze software di terze parti già in possesso.",
      "Migrare i carichi di lavoro di produzione nelle edge location AWS invece che nelle Regioni AWS.",
      "Usare AWS Outposts per eseguire tutti i carichi di lavoro in un ambiente ottimizzato nei costi."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "73dbd98c1a65"
  },
  {
    "q": "Un'organizzazione ha un'applicazione legacy progettata con un'architettura monolitica. Quale servizio AWS può essere usato per disaccoppiare i componenti dell'applicazione?",
    "opts": [
      "Amazon SQS.",
      "Virtual Private Gateway.",
      "AWS Artifact.",
      "Amazon CloudFront."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "SQS"
    ],
    "id": "d1797cd849eb",
    "explain": "Amazon SQS è una coda di messaggi che disaccoppia i componenti di un'applicazione distribuita. Supporta code Standard e FIFO. Agisce come buffer tra producer e consumer."
  },
  {
    "q": "Quali dei seguenti strumenti possono essere usati per abilitare l'autenticazione a più fattori virtuale (MFA virtuale)? (Scegline DUE)",
    "opts": [
      "Amazon Connect.",
      "AWS CLI.",
      "AWS Identity and Access Management (IAM).",
      "Amazon SNS.",
      "Amazon Virtual Private Cloud."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "SNS"
    ],
    "id": "23a2d1f6f668",
    "explain": "L'AWS CLI (Command Line Interface) permette di gestire i servizi AWS direttamente dal terminale con comandi. Può essere usata per automatizzare operazioni tramite scripting. Richiede configurazione con Access Key o ruolo IAM."
  },
  {
    "q": "Secondo le best practice, quale delle seguenti opzioni è la più adatta per elaborare un gran numero di file binari?",
    "opts": [
      "Scalare in verticale le istanze EC2.",
      "Eseguire istanze RDS in parallelo.",
      "Scalare in verticale le istanze RDS.",
      "Eseguire istanze EC2 in parallelo."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "a34948f5a91c",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda sta pianificando di usare Amazon S3 e Amazon CloudFront per distribuire i suoi corsi video in tutto il mondo. Quale strumento può usare per stimare i costi di questi servizi?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Cost & Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Billing & Cost"
    ],
    "id": "3d8a63751d65",
    "explain": "AWS Pricing Calculator stima il costo mensile dei servizi AWS prima di iniziare. Confronta scenari diversi senza bisogno di un account AWS."
  },
  {
    "q": "Cosa dovresti fare se nella AWS Management Console vedi risorse che non ricordi di aver creato? (Scegline DUE)",
    "opts": [
      "Fermare tutti i servizi in esecuzione e aprire un'indagine.",
      "Dare la password dell'account root all'AWS Support perché ti aiuti a risolvere il problema e a mettere in sicurezza l'account.",
      "Controllare i log di AWS CloudTrail ed eliminare tutti gli utenti IAM che hanno accesso alle tue risorse.",
      "Aprire un'indagine ed eliminare tutti gli utenti IAM potenzialmente compromessi.",
      "Cambiare la password dell'account root AWS e le password di tutti gli utenti IAM."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "3f550b4efd8c",
    "explain": "L'account root AWS ha accesso illimitato e non può essere limitato da policy IAM. Best practice: non usarlo per operazioni quotidiane, abilitare MFA, eliminare le access key root, creare utenti IAM con permessi specifici. Usarlo solo per task che lo richiedono esplicitamente."
  },
  {
    "q": "Una pratica chiave nella progettazione di soluzioni su AWS è ridurre al minimo le dipendenze tra componenti, così che il guasto di un singolo componente non abbia impatto sugli altri. Come si chiama questa pratica?",
    "opts": [
      "Accoppiamento elastico.",
      "Accoppiamento debole (loose coupling).",
      "Accoppiamento scalabile.",
      "Accoppiamento stretto (tight coupling)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d14cccb46d6e"
  },
  {
    "q": "Quale servizio AWS offre un file system NFS che può essere montato contemporaneamente da più istanze EC2?",
    "opts": [
      "Amazon Elastic File System.",
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "9e88a6d8d6d8",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Le Availability Zone di una Regione sono collegate da connessioni a bassa latenza. Quale dei seguenti è un vantaggio di queste connessioni?",
    "opts": [
      "Creare una connessione privata verso il tuo data center.",
      "Ottenere l'alta disponibilità globale.",
      "Automatizzare il processo di provisioning di nuove risorse di calcolo.",
      "Rendere possibile la replica sincrona dei dati."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d1234723bec3",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quali delle seguenti affermazioni sono vere riguardo ai linguaggi supportati da AWS Lambda? (Scegline DUE)",
    "opts": [
      "Lambda supporta solo Python e Node.js, ma esistono plugin di terze parti per convertire codice di altri linguaggi in questi formati.",
      "Lambda supporta in modo nativo diversi linguaggi di programmazione, come Node.js, Python e Java.",
      "Lambda è il linguaggio di programmazione proprietario di AWS per i microservizi.",
      "Lambda non supporta linguaggi di programmazione: è un servizio di calcolo serverless.",
      "Lambda può supportare qualsiasi linguaggio di programmazione usando un'API."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Lambda"
    ],
    "id": "9b7104071e70",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quali sono le capacità di AWS X-Ray? (Scegline DUE)",
    "opts": [
      "Disaccoppia automaticamente i componenti dell'applicazione.",
      "Facilita il tracciamento delle richieste degli utenti per individuare i problemi dell'applicazione.",
      "Aiuta a migliorare le prestazioni dell'applicazione.",
      "Distribuisce le applicazioni sulle istanze Amazon EC2.",
      "Distribuisce le applicazioni su server on-premises."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "b14c6f8e91fb"
  },
  {
    "q": "Un'azienda globale con molti account AWS cerca un modo per gestire in modo centralizzato la fatturazione e le policy di sicurezza di tutti gli account. Quale servizio AWS la aiuterà a raggiungere questi obiettivi?",
    "opts": [
      "AWS Organizations.",
      "AWS Trusted Advisor.",
      "Gruppi di utenti IAM.",
      "AWS Config."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ],
    "id": "e126b4c0ed7b",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale servizio fornisce storage a livello di oggetti in AWS?",
    "opts": [
      "Amazon EBS.",
      "Amazon Instance Store.",
      "Amazon EFS.",
      "Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "721689b4e852",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Un'azienda teme di spendere soldi in risorse di calcolo AWS sottoutilizzate. Quale funzionalità AWS aiuterà a far sì che le applicazioni aggiungano o rimuovano automaticamente capacità di calcolo EC2 per seguire da vicino la domanda?",
    "opts": [
      "AWS Elastic Load Balancer.",
      "AWS Budgets.",
      "AWS Auto Scaling.",
      "AWS Cost Explorer."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "b58842700e42",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale classe di storage S3 è la migliore per dati con modalità di accesso imprevedibili?",
    "opts": [
      "Amazon S3 Intelligent-Tiering.",
      "Amazon S3 Glacier Flexible Retrieval.",
      "Amazon S3 Standard.",
      "Amazon S3 Standard-Infrequent Access."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "AI / ML"
    ],
    "id": "874747fcafc3",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Qual è il servizio di database AWS che permette di caricare dati strutturati in formato chiave-valore?",
    "opts": [
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon RDS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "331669b4808d",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quale delle seguenti affermazioni NON è corretta riguardo alle istanze On-Demand di Amazon EC2?",
    "opts": [
      "Devi pagare un costo di attivazione quando avvii una nuova istanza per la prima volta.",
      "Le istanze On-Demand seguono il modello di prezzo pay-as-you-go (a consumo) di AWS.",
      "Con le istanze On-Demand non servono impegni a lungo termine né pagamenti anticipati.",
      "Con le istanze Linux On-Demand paghi al secondo in base a una tariffa oraria."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "23919c20ef78",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda è passata da poco ad AWS. Quali dei seguenti servizi AWS la aiuteranno ad assicurarsi di avere le impostazioni di sicurezza corrette? (Scegline DUE)",
    "opts": [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon SNS.",
      "Amazon CloudWatch.",
      "Concierge Support Team."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS",
      "Security",
      "Support"
    ],
    "id": "b5a07c0bbad0",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Qual è la funzionalità AWS che fornisce un livello di sicurezza aggiuntivo rispetto al meccanismo di autenticazione predefinito con nome utente e password?",
    "opts": [
      "Chiavi cifrate.",
      "Verifica via email.",
      "AWS KMS.",
      "AWS MFA."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Security"
    ],
    "id": "d9f1e948cf90",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali (Google Authenticator), hardware token e U2F Key come YubiKey. È best practice fondamentale specialmente per l'account root e utenti con accesso privilegiato."
  },
  {
    "q": "Un'azienda sta lanciando un nuovo prodotto per i suoi clienti e si aspetta un'impennata di traffico verso la sua applicazione web. Nell'ambito del suo piano Enterprise Support, quale dei seguenti servizi le fornisce indicazioni su architettura e scalabilità?",
    "opts": [
      "AWS Knowledge Center.",
      "AWS Health Dashboard.",
      "Infrastructure Event Management.",
      "AWS Support Concierge Service."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "145f488a5723",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Lavori come DBA MySQL on-premises. Il lavoro di configurazione del database, backup, patch e disaster recovery può essere lungo e ripetitivo. La tua azienda ha deciso di migrare nel cloud AWS. Quale dei seguenti servizi può aiutarti a risparmiare tempo sulla manutenzione del database, così da concentrarti sull'architettura dei dati e sulle prestazioni?",
    "opts": [
      "Amazon RDS.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon CloudWatch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "CloudWatch",
      "Analytics"
    ],
    "id": "d74c8884d2f3",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale delle seguenti è una best practice nella progettazione di soluzioni su AWS?",
    "opts": [
      "Investire molto nella progettazione dell'ambiente, perché in seguito non è facile cambiarla.",
      "Usare le prenotazioni AWS per ridurre i costi quando si testa l'ambiente di produzione.",
      "Automatizzare dove possibile per rendere più facile la sperimentazione architetturale.",
      "Predisporre una grande capacità di calcolo per gestire qualsiasi picco di carico"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d1c5cbe3529e"
  },
  {
    "q": "Secondo l'AWS Acceptable Use Policy, quale delle seguenti affermazioni è vera riguardo ai penetration test sulle istanze EC2?",
    "opts": [
      "I penetration test non sono consentiti in AWS.",
      "I penetration test vengono eseguiti automaticamente da AWS per individuare le vulnerabilità della tua infrastruttura AWS.",
      "Il cliente può eseguire penetration test sulle proprie istanze senza autorizzazione preventiva da parte di AWS.",
      "I clienti AWS possono eseguire penetration test solo sui servizi gestiti da AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "f321dc5cec5e",
    "explain": "AWS permette penetration test sulle proprie risorse (EC2, RDS, CloudFront, API Gateway, Lambda) compilando il Penetration Testing Request Form o senza approvazione per servizi approvati. I test DDoS richiedono autorizzazione esplicita. I clienti sono responsabili di non impattare altre risorse AWS."
  },
  {
    "q": "Quale servizio si usa per garantire che i messaggi tra componenti software non vadano persi se uno o più componenti si guastano?",
    "opts": [
      "Amazon SQS.",
      "Amazon SES.",
      "AWS Direct Connect.",
      "Amazon Connect."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "SQS",
      "Networking"
    ],
    "id": "6bfed599a3a5",
    "explain": "Amazon SQS è una coda di messaggi che disaccoppia i componenti di un'applicazione distribuita. Supporta code Standard e FIFO. Agisce come buffer tra producer e consumer."
  },
  {
    "q": "Il principio \"progetta per i guasti e niente si guasterà\" è molto importante nella progettazione dell'architettura nel cloud AWS. Quali dei seguenti aiuterebbero a rispettare questo principio? (Scegline DUE)",
    "opts": [
      "Autenticazione a più fattori.",
      "Availability Zone.",
      "Elastic Load Balancing.",
      "Penetration test.",
      "Scalabilità verticale."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "0ff9b51cbd2a",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più istanze EC2 in più Availability Zones. Rileva istanze non sane ed escludendole aumenta la disponibilità. Supporta Application (HTTP/HTTPS), Network (TCP/UDP) e Classic Load Balancer."
  },
  {
    "q": "Qual è il servizio AWS che fornisce una rete virtuale dedicata al tuo account AWS?",
    "opts": [
      "AWS VPN.",
      "AWS Subnets.",
      "AWS Dedicated Hosts.",
      "Amazon VPC."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "e48244b1b501",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali dei seguenti aspetti sono responsabilità del cliente? (Scegline DUE)",
    "opts": [
      "Gestire gli eventi ambientali dei data center AWS.",
      "Proteggere la riservatezza dei dati in transito in Amazon S3.",
      "Controllare l'accesso fisico alle Regioni AWS.",
      "Assicurarsi che l'host EC2 sottostante sia configurato correttamente.",
      "Applicare le patch alle applicazioni installate su Amazon EC2."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Shared Responsibility"
    ],
    "id": "1bba2e4954e9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti servizi AWS possono essere usati come risorsa di calcolo? (Scegline DUE)",
    "opts": [
      "Amazon VPC.",
      "Amazon CloudWatch.",
      "Amazon S3.",
      "Amazon EC2.",
      "AWS Lambda."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "VPC",
      "CloudWatch"
    ],
    "id": "697e07b64ea8",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti equivale a nome utente e password e si usa per autenticare l'accesso programmatico ai servizi e alle API AWS?",
    "opts": [
      "Password dell'istanza.",
      "Coppie di chiavi.",
      "Chiavi di accesso.",
      "MFA."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "2e9f5c2b8dbd",
    "explain": "I modelli di cloud computing riconosciuti sono: IaaS (Infrastructure as a Service: EC2, VPC), PaaS (Platform as a Service: Elastic Beanstalk, RDS gestito) e SaaS (Software as a Service: applicazioni complete come Gmail). 'Networking as a Service' (NaaS) non è un modello di cloud computing standard riconosciuto da AWS o dall'industria. Spesso usato in contesti specifici ma non è uno dei tre modelli principali."
  },
  {
    "q": "Che cosa offre Amazon ElastiCache?",
    "opts": [
      "Cache in memoria per applicazioni con molte letture.",
      "Un archivio dati in memoria compatibile con Ehcache.",
      "Un negozio di software online che permette ai clienti di avviare software preconfigurato con pochi clic.",
      "Un sistema di nomi di dominio nel cloud."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "61003527ff1a",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "Qual è il servizio AWS che permette di gestire tutti i tuoi account AWS da un unico account master?",
    "opts": [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Organizations.",
      "Amazon Config."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "0e18fa3273f1",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale delle seguenti opzioni di acquisto delle istanze EC2 supporta il modello Bring Your Own License (BYOL, porta la tua licenza) in quasi tutti gli scenari BYOL?",
    "opts": [
      "Istanze Dedicated.",
      "Dedicated Hosts.",
      "Istanze On-Demand.",
      "Istanze Reserved."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "053c04bc3881",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti è uno dei vantaggi di spostare l'infrastruttura da un data center on-premises ad AWS?",
    "opts": [
      "Supporto gratuito per tutti i clienti enterprise.",
      "Protezione automatica dei dati.",
      "Riduzione delle spese in conto capitale (CapEx).",
      "AWS è responsabile della gestione delle applicazioni dei clienti."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "dd7eb10c564f",
    "explain": "AWS trasforma le spese CapEx (acquisto hardware on-premise) in spese OpEx variabili. Elimina investimenti upfront e permette di pagare solo per le risorse usate. Il risultato è un TCO inferiore rispetto ai data center tradizionali."
  },
  {
    "q": "Quali dei seguenti sono principi di progettazione importanti da adottare quando si progettano sistemi su AWS? (Scegline DUE)",
    "opts": [
      "Usare sempre servizi globali nell'architettura invece che servizi regionali.",
      "Scegliere sempre il pagamento a consumo.",
      "Trattare i server come risorse fisse.",
      "Automatizzare dove possibile.",
      "Eliminare i single point of failure."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "38e88e1d5ff8"
  },
  {
    "q": "Quale servizio AWS può essere usato per stabilire una connessione di rete privata e dedicata tra AWS e il tuo data center?",
    "opts": [
      "AWS Direct Connect.",
      "Amazon CloudFront.",
      "AWS Snowball.",
      "Amazon Route 53."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53",
      "Storage",
      "Networking"
    ],
    "id": "335a9ef5d63d",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Stai lavorando a due progetti che richiedono configurazioni di rete completamente diverse. Quale servizio o funzionalità AWS ti permetterà di isolare risorse e configurazioni di rete?",
    "opts": [
      "Internet gateway.",
      "Virtual Private Cloud.",
      "Security group.",
      "Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ],
    "id": "89ff46226e30"
  },
  {
    "q": "Quale dei seguenti servizi può aiutare a proteggere le applicazioni web da SQL injection e da altre vulnerabilità nel codice dell'applicazione?",
    "opts": [
      "Amazon Cognito.",
      "AWS IAM.",
      "Amazon Aurora.",
      "AWS WAF."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS",
      "Security"
    ],
    "id": "a70bd9bb0104",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Un'organizzazione deve analizzare ed elaborare un gran numero di set di dati. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon EMR.",
      "Amazon MQ.",
      "Amazon SNS.",
      "Amazon SQS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "SNS",
      "SQS",
      "Analytics"
    ],
    "id": "a18ef41e1a14",
    "explain": "Amazon EMR elabora grandi quantità di dati con Hadoop, Spark, Hive e Presto. Molto più economico rispetto all'on-premise."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali dei seguenti aspetti sono responsabilità esclusiva di AWS? (Scegline DUE)",
    "opts": [
      "Monitorare le prestazioni di rete.",
      "Installare software sulle istanze EC2.",
      "Creare gli hypervisor.",
      "Configurare le Access Control List (ACL).",
      "La manutenzione dell'hardware."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudWatch",
      "Shared Responsibility"
    ],
    "id": "79b57033dc33",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Qual è il servizio AWS che offre il massimo livello di controllo sull'infrastruttura virtuale sottostante?",
    "opts": [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon EC2.",
      "Amazon RDS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "6f94c08badd9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali sono le credenziali di sicurezza predefinite necessarie per accedere alla AWS Management Console con un account utente IAM?",
    "opts": [
      "MFA.",
      "Token di sicurezza.",
      "Nome utente e password.",
      "Chiavi di accesso."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "e41c89a29f86",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Nel tuo ambiente on-premises puoi creare tutti i server virtuali che ti servono partendo da un unico modello. Cosa puoi usare per fare lo stesso in AWS?",
    "opts": [
      "IAM.",
      "Un internet gateway.",
      "Uno snapshot EBS.",
      "Una AMI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "Storage"
    ],
    "id": "a76cbcd6990d"
  },
  {
    "q": "Quali sono due vantaggi dell'uso del cloud computing rispetto ai data center tradizionali? (Scegline DUE)",
    "opts": [
      "Capacità di calcolo riservata.",
      "Eliminazione dei single point of failure (SPOF).",
      "Infrastruttura distribuita.",
      "Risorse di calcolo virtualizzate.",
      "Hosting dedicato."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "b034da5b7f64"
  },
  {
    "q": "Quali dei seguenti aspetti della sicurezza sono gestiti da AWS? (Scegline DUE)",
    "opts": [
      "La cifratura dei volumi EBS.",
      "La sicurezza dei VPC.",
      "I permessi di accesso.",
      "Le patch dell'hardware.",
      "La protezione dell'infrastruttura fisica globale."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "Storage"
    ],
    "id": "4ba47ab75f3e",
    "explain": "L'infrastruttura globale AWS è composta da Regioni, Availability Zone ed Edge Location. Ci sono più edge location che AZ, e più AZ che Regioni. Garantisce alta disponibilità, bassa latenza globale e resilienza."
  },
  {
    "q": "Quale affermazione descrive meglio il pilastro dell'eccellenza operativa dell'AWS Well-Architected Framework?",
    "opts": [
      "La capacità di un sistema di riprendersi senza danni da un guasto.",
      "L'uso efficiente delle risorse di calcolo per soddisfare i requisiti.",
      "La capacità di monitorare i sistemi e migliorare i processi e le procedure di supporto.",
      "La capacità di gestire le operazioni del data center in modo più efficiente."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "939b007099e0",
    "explain": "Il pillar Operational Excellence del Well-Architected Framework riguarda l'esecuzione e monitoraggio dei sistemi per fornire valore aziendale. Prevede Infrastructure as Code, deployment frequenti e risposta agli eventi operativi."
  },
  {
    "q": "AWS ha creato un gran numero di edge location come parte della sua infrastruttura globale. Quale dei seguenti NON è un vantaggio dell'uso delle edge location?",
    "opts": [
      "Le edge location vengono usate da CloudFront per mettere in cache le risposte più recenti.",
      "Le edge location vengono usate da CloudFront per migliorare l'esperienza degli utenti finali quando caricano file.",
      "Le edge location vengono usate da CloudFront per distribuire il traffico su più istanze e ridurre la latenza.",
      "Le edge location vengono usate da CloudFront per distribuire contenuti agli utenti di tutto il mondo con bassa latenza."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "ab80c2a98fce",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quali sono gli strumenti di gestione delle modifiche che aiutano i clienti AWS a verificare e monitorare tutte le modifiche alle risorse nel loro ambiente AWS? (Scegline DUE)",
    "opts": [
      "AWS CloudTrail.",
      "Amazon Comprehend.",
      "AWS Transit Gateway.",
      "AWS X-Ray.",
      "AWS Config."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "AI / ML",
      "Networking"
    ],
    "id": "9e70c7202c44",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quale dei seguenti servizi permette di eseguire applicazioni in container su un cluster di istanze EC2?",
    "opts": [
      "Amazon ECS.",
      "AWS Data Pipeline.",
      "AWS Cloud9.",
      "AWS Personal Health Dashboard."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "ECS / Fargate",
      "Support"
    ],
    "id": "34def4150d6f",
    "explain": "Amazon ECS è un servizio di orchestrazione container gestito che supporta Docker. Si integra con IAM, CloudWatch e Load Balancer. Può usare EC2 o Fargate come infrastruttura."
  },
  {
    "q": "Quale dei seguenti servizi aiuterà le aziende a garantire la conformità in AWS?",
    "opts": [
      "CloudFront.",
      "CloudEndure Migration.",
      "CloudWatch.",
      "CloudTrail."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ],
    "id": "f48fed5e09d2",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quale delle seguenti procedure aiuterà a ridurre i costi di Amazon S3?",
    "opts": [
      "Usare la funzionalità Import/Export per spostare automaticamente i file vecchi in Amazon Glacier.",
      "Usare la giusta combinazione di classi di storage in base ai diversi casi d'uso.",
      "Scegliere la Availability Zone giusta per il bucket S3.",
      "Spostare su EBS tutti i dati salvati in S3 Standard."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "e6b88d168ffe",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali sono i servizi o le funzionalità AWS che possono aiutarti a mantenere un'architettura altamente disponibile e tollerante ai guasti in AWS? (Scegline DUE)",
    "opts": [
      "AWS Direct Connect.",
      "Amazon EC2 Auto Scaling.",
      "Elastic Load Balancer.",
      "CloudFormation.",
      "Network ACL."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFormation",
      "Networking"
    ],
    "id": "efd1ec3a995b",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale delle seguenti attività può aiutare a ridurre i costi mensili di AWS?",
    "opts": [
      "Abilitare Amazon EC2 Auto Scaling per tutti i carichi di lavoro.",
      "Usare l'AWS Network Load Balancer (NLB) per bilanciare le richieste HTTP in entrata.",
      "Rimuovere tutti i tag di allocazione dei costi.",
      "Distribuire le risorse AWS su più Availability Zone."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "2371562f9e47",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Qual è il servizio o la funzionalità AWS che sfrutta le edge location distribuite nel mondo di Amazon CloudFront per trasferire file su S3 con velocità di caricamento più alte?",
    "opts": [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Security",
      "Storage"
    ],
    "id": "3060afafc048",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale delle seguenti funzionalità di sicurezza AWS è associata a un'istanza EC2 e serve a filtrare le richieste di traffico in entrata?",
    "opts": [
      "AWS X-Ray.",
      "Network ACL.",
      "Security group.",
      "VPC Flow Logs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "b36a95e951a7",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali servizi AWS possono essere usati per migliorare le prestazioni di un'applicazione globale e ridurre la latenza per i suoi utenti? (Scegline DUE)",
    "opts": [
      "AWS KMS.",
      "AWS Global Accelerator.",
      "AWS Direct Connect.",
      "AWS Glue.",
      "Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Security",
      "Analytics",
      "Networking"
    ],
    "id": "91a93c3db861",
    "explain": "AWS Global Accelerator instrada il traffico attraverso la rete backbone privata AWS. Usa IP anycast statici per dirigere gli utenti all'endpoint più vicino. Migliora disponibilità e performance per applicazioni globali."
  },
  {
    "q": "L'uso di Amazon RDS rientra nel modello di responsabilità condivisa. Quali delle seguenti sono responsabilità del cliente? (Scegline DUE)",
    "opts": [
      "Costruire lo schema del database relazionale.",
      "Eseguire i backup.",
      "Gestire le impostazioni del database.",
      "Applicare le patch al software del database.",
      "Installare il software del database."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ],
    "id": "94e7eb019ca8",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Un'azienda ha una grande quantità di dati strutturati nel suo data center on-premises. Sta pianificando di migrare tutti i dati su AWS: qual è l'opzione di database AWS più appropriata?",
    "opts": [
      "Amazon DynamoDB.",
      "Amazon SNS.",
      "Amazon RDS.",
      "Amazon ElastiCache."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "SNS"
    ],
    "id": "982fa7ff940d",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Un'azienda ha creato una soluzione che aiuta i clienti AWS a migliorare le loro architetture su AWS. Quale programma AWS può supportare questa azienda?",
    "opts": [
      "APN Consulting Partner.",
      "AWS TAM.",
      "APN Technology Partner.",
      "AWS Professional Services."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "1cf305b80883"
  },
  {
    "q": "Qual è il servizio serverless di AWS che permette di eseguire le applicazioni senza alcun carico amministrativo?",
    "opts": [
      "Amazon LightSail.",
      "AWS Lambda.",
      "Istanze Amazon RDS.",
      "Istanze Amazon EC2."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Lambda"
    ],
    "id": "2bd91ab70785",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Jessica gestisce un'applicazione web di e-commerce su AWS. L'applicazione è ospitata su sei istanze EC2. Un giorno tre delle istanze si sono bloccate, ma nessuno dei suoi clienti ne ha risentito. Cosa ha fatto bene Jessica in questo scenario?",
    "opts": [
      "Ha costruito correttamente un sistema elastico.",
      "Ha costruito correttamente un sistema tollerante ai guasti.",
      "Ha costruito correttamente un sistema cifrato.",
      "Ha costruito correttamente un sistema scalabile."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "4ff049414708",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è il vantaggio principale di collegare dei security group a un'istanza Amazon RDS?",
    "opts": [
      "Gestisce l'accesso degli utenti e le chiavi di cifratura.",
      "Controlla quali intervalli di indirizzi IP possono collegarsi all'istanza del database.",
      "Distribuisce certificati SSL/TLS da usare con l'istanza del database.",
      "Distribuisce il traffico in entrata su più destinazioni."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC",
      "Security"
    ],
    "id": "8d4548697370",
    "explain": "Amazon Connect è un servizio di contact center cloud scalabile senza hardware. Supporta chiamate vocali e chat con routing intelligente. Si paga a minuto di utilizzo."
  },
  {
    "q": "Un'azienda vuole usare Amazon Elastic Container Service (Amazon ECS) per eseguire le sue applicazioni in container. Per motivi di conformità, vuole mantenere visibilità e controllo completi sul cluster di server sottostante. Quale launch type di Amazon ECS soddisfa questi requisiti?",
    "opts": [
      "Launch type EC2.",
      "Launch type Fargate.",
      "Launch type Lightsail.",
      "Launch type Lambda."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate"
    ],
    "id": "d2f6a542e5f4",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Hai più account AWS indipendenti e vuoi ridurre i costi mensili di AWS. Cosa dovresti fare?",
    "opts": [
      "Provare a eliminare gli account AWS non necessari.",
      "Aggiungere gli account a un'organizzazione AWS Organizations e usare la fatturazione consolidata.",
      "Tracciare i costi AWS sostenuti dagli account membri.",
      "Abilitare i prezzi a scaglioni (tiered pricing) di AWS prima di predisporre le risorse."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "c72de45da83c",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Ti è stato chiesto di verificare la sicurezza del tuo VPC. Come prima cosa devi analizzare quale traffico in entrata e in uscita è consentito sulle tue istanze EC2. Quali due parti del VPC devi controllare per svolgere questa attività?",
    "opts": [
      "Network ACL e Traffic Manager.",
      "Network ACL e subnet.",
      "Security group e internet gateway.",
      "Security group e network ACL."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "c1202582b172",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Che cosa offre il piano di supporto AWS \"Business\"? (Scegline DUE)",
    "opts": [
      "Accesso all'insieme completo dei controlli di Trusted Advisor.",
      "Support Concierge Service.",
      "Risposta in meno di 15 minuti se il tuo sistema critico si ferma.",
      "AWS Support API.",
      "Technical Account Management proattivo."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "097ff964f3b4",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Hai appena finito di scrivere il codice della tua applicazione. Quale servizio può essere usato per automatizzare la distribuzione e la scalabilità dell'applicazione?",
    "opts": [
      "Amazon Simple Storage Service.",
      "AWS Elastic Beanstalk.",
      "AWS CodeCommit.",
      "Amazon Elastic File System."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "9745adee470d",
    "explain": "AWS Elastic Beanstalk semplifica il deploy: carica il codice e Beanstalk gestisce provisioning, bilanciamento del carico, scalabilità e monitoraggio. Mantiene controllo sulle risorse EC2 sottostanti. Ideale per sviluppatori che vogliono deployare rapidamente senza gestire l'infrastruttura."
  },
  {
    "q": "Quale affermazione è vera riguardo alla sicurezza in AWS?",
    "opts": [
      "AWS gestisce tutto ciò che riguarda i sistemi operativi di EC2.",
      "I clienti AWS sono responsabili delle patch di qualsiasi software di database in esecuzione su Amazon EC2.",
      "La cifratura lato server è responsabilità di AWS.",
      "AWS è responsabile della sicurezza della tua applicazione."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security"
    ],
    "id": "cf2805c5c2ce",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Le istanze Amazon EC2 sono concettualmente molto simili ai server tradizionali. Tuttavia, usare le istanze server Amazon EC2 nello stesso modo dei server hardware tradizionali è solo un punto di partenza. Quali sono i vantaggi principali di usare le istanze EC2 invece dei server tradizionali? (Scegline DUE)",
    "opts": [
      "Migliora la tolleranza ai guasti.",
      "Offre alla tua azienda un accesso remoto senza interruzioni.",
      "Impedisce agli utenti non autorizzati di entrare nella tua rete.",
      "Fornisce backup automatici dei dati.",
      "Può essere scalato manualmente in meno tempo."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "1a5cdd677229",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale affermazione è vera riguardo ai prezzi di AWS? (Scegline DUE)",
    "opts": [
      "Con il modello di prezzo pay-as-you-go di AWS non devi pagare alcun costo iniziale.",
      "Non hai alcuna responsabilità sui costi delle licenze software di terze parti.",
      "Paghi solo i singoli servizi di cui hai bisogno, senza contratti a lungo termine.",
      "Per alcuni servizi devi pagare un costo di attivazione per far partire il servizio.",
      "Su AWS non esistono prenotazioni: paghi solo quello che usi."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "a2bd8f710814",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Quale servizio AWS offre il modo PIÙ SEMPLICE per configurare e gestire un ambiente AWS multi-account sicuro e ben progettato?",
    "opts": [
      "AWS Control Tower.",
      "Amazon Macie.",
      "AWS Systems Manager Patch Manager.",
      "AWS Security Hub."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security",
      "Well-Architected"
    ],
    "id": "fc6761af1f7f",
    "explain": "AWS Control Tower automatizza la configurazione di un ambiente multi-account sicuro con guardrail preventivi e detective. Semplifica la governance centralizzata."
  },
  {
    "q": "Un'azienda gestisce una grande applicazione web che deve essere sempre disponibile. L'applicazione tende a rallentare quando l'utilizzo della CPU supera il 60%. Come può l'azienda accorgersi di quando l'utilizzo della CPU supera il 60% su una qualsiasi delle istanze EC2 del suo account?",
    "opts": [
      "Usare CloudFront per monitorare l'utilizzo della CPU.",
      "Impostare la soglia di CPU di AWS Config al 60% per ricevere una notifica quando l'utilizzo di EC2 supera quel valore.",
      "Usare gli allarmi di CloudWatch per monitorare la CPU e inviare un avviso quando l'utilizzo della CPU è >= 60%.",
      "Usare SNS per monitorare l'utilizzo del server."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "CloudWatch",
      "SNS"
    ],
    "id": "42a95caa6a67",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Qual è l'opzione di storage consigliata quando si ospita su un'istanza Amazon EC2 un database che cambia spesso?",
    "opts": [
      "Amazon EBS.",
      "Amazon RDS.",
      "Non è possibile eseguire un database dentro un'istanza Amazon EC2.",
      "Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Storage"
    ],
    "id": "2b0101c1b58f",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Lavori come site reliability engineer (SRE) in un ambiente AWS. Quale dei seguenti servizi aiuta a monitorare le tue applicazioni?",
    "opts": [
      "Amazon CloudWatch.",
      "Amazon CloudSearch.",
      "Amazon Elastic MapReduce.",
      "Amazon CloudHSM."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "232b89e7170c",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quali fattori determinano quanto paghi quando usi AWS Lambda? (Scegline DUE)",
    "opts": [
      "Lo storage consumato.",
      "Il numero di richieste alle tue funzioni.",
      "Il numero di volumi.",
      "I placement group.",
      "Il tempo di calcolo consumato."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Lambda"
    ],
    "id": "7ec2e5cb1ac0",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quali sono le differenze principali tra un utente IAM e un ruolo IAM in AWS? (Scegline DUE)",
    "opts": [
      "Un utente IAM è associato in modo univoco a una sola persona, mentre un ruolo è pensato per essere assunto da chiunque ne abbia bisogno.",
      "Un utente IAM ha credenziali permanenti associate, mentre un ruolo ha credenziali temporanee associate.",
      "Gli utenti IAM sono più convenienti dei ruoli IAM.",
      "Un ruolo è associato in modo univoco a una sola persona, mentre un utente IAM è pensato per essere assunto da chiunque ne abbia bisogno.",
      "Un utente IAM ha credenziali temporanee associate, mentre un ruolo ha credenziali permanenti associate."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "8e9625432092",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quali delle seguenti azioni possono ridurre i costi di Amazon EBS? (Scegline DUE)",
    "opts": [
      "Eliminare i bucket inutilizzati.",
      "Usare le prenotazioni.",
      "Eliminare gli snapshot non necessari.",
      "Cambiare il tipo del volume.",
      "Distribuire le richieste su più volumi."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "f2e3868e9a68",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Cosa fa Amazon GuardDuty per proteggere gli account e i carichi di lavoro AWS?",
    "opts": [
      "Avvisa i clienti AWS degli eventi di abuso dopo che sono stati segnalati.",
      "Monitora continuamente l'infrastruttura AWS e aiuta a rilevare minacce come le attività di ricognizione di un attaccante o la compromissione di un account.",
      "Aiuta i clienti AWS a individuare la causa principale di potenziali problemi di sicurezza.",
      "Controlla i security group alla ricerca di regole che consentono un accesso senza restrizioni alle risorse AWS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Security"
    ],
    "id": "8ee2af84ca3a",
    "explain": "Amazon GuardDuty rileva minacce monitorando account e workload per attività malevole. Analizza CloudTrail, VPC Flow Logs e DNS usando ML e threat intelligence. Non richiede agent e non impatta le performance."
  },
  {
    "q": "Quale servizio di database dovresti usare se la tua applicazione e lo schema dei dati richiedono \"join\" o transazioni complesse?",
    "opts": [
      "Amazon RDS.",
      "AWS Outposts.",
      "Amazon DocumentDB.",
      "Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "AI / ML"
    ],
    "id": "6cd9bc08882a",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale dei seguenti strumenti ti rende più facile classificare, gestire e filtrare le tue risorse?",
    "opts": [
      "Amazon CloudWatch.",
      "AWS Service Catalog.",
      "AWS Directory Service.",
      "I tag AWS (AWS Tagging)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "80584b14fee4",
    "explain": "I tag AWS sono coppie chiave-valore per organizzare e categorizzare le risorse. Consentono di tracciare i costi per progetto o reparto, filtrare le risorse nei report e applicare policy basate su tag (ABAC). È best practice applicare tag consistenti a tutte le risorse dalla creazione."
  },
  {
    "q": "Cosa dovresti considerare quando conservi dati in Amazon Glacier?",
    "opts": [
      "Amazon Glacier accetta solo dati in formato compresso.",
      "Glacier può essere usato solo per conservare dati letti spesso e archivi di dati.",
      "Amazon Glacier non permette il recupero immediato dei dati.",
      "Bisogna collegare Glacier a un'istanza EC2 per poter conservare i dati."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "5740c2cd8819",
    "explain": "Amazon S3 Glacier è storage a bassissimo costo per archiviazione a lungo termine. Il recupero richiede da minuti a ore. Conforme a normative di conservazione come HIPAA e SEC Rule 17a-4."
  },
  {
    "q": "Gli ingegneri stanno sprecando molto tempo e fatica a gestire software di calcolo batch nei data center tradizionali. Quale dei seguenti servizi AWS permette di eseguire facilmente migliaia di job di calcolo batch?",
    "opts": [
      "Amazon EC2.",
      "AWS Batch.",
      "Lambda@Edge.",
      "AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate"
    ],
    "id": "3ba10001c3dc"
  },
  {
    "q": "Come puoi aumentare la tolleranza ai guasti della tua applicazione mentre è ospitata in AWS?",
    "opts": [
      "Distribuire l'applicazione su più istanze EC2.",
      "Distribuire l'applicazione su più Availability Zone.",
      "Ospitare l'applicazione su un unico tipo di istanza EC2 potente invece che su più istanze più piccole.",
      "Distribuire le risorse sottostanti dell'applicazione su più subnet."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "a58b2bfd58d9",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quali dei seguenti piani AWS Support danno accesso 24/7 ai Cloud Support Engineer via email e telefono? (Scegline DUE)",
    "opts": [
      "Developer.",
      "Premium.",
      "Enterprise.",
      "Standard.",
      "Business."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "37a43ae694c3"
  },
  {
    "q": "Quale dei seguenti richiede un access key ID e una secret access key per ottenere un accesso programmatico di lunga durata alle risorse AWS? (Scegline DUE)",
    "opts": [
      "Gruppo IAM.",
      "Utente IAM.",
      "Ruolo IAM.",
      "Utente root dell'account AWS.",
      "TAM."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "a5f1bd49b053",
    "explain": "L'account root AWS ha accesso illimitato e non può essere limitato da policy IAM. Best practice: non usarlo per operazioni quotidiane, abilitare MFA, eliminare le access key root, creare utenti IAM con permessi specifici. Usarlo solo per task che lo richiedono esplicitamente."
  },
  {
    "q": "Quale dei seguenti è un vantaggio del principio architetturale del \"loose coupling\" (accoppiamento debole)?",
    "opts": [
      "Elimina la necessità di gestire le modifiche.",
      "Permette la replica tra Regioni (Cross-Region Replication).",
      "Aiuta i clienti AWS a ridurre gli accessi privilegiati alle risorse AWS.",
      "Permette di modificare singoli componenti o servizi dell'applicazione senza influire sugli altri componenti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e7ee5b8c188b",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Un'azienda deve ospitare un'applicazione di big data su AWS usando istanze EC2. Quale dei seguenti servizi di storage AWS sceglierebbe per ottenere automaticamente un alto throughput verso più nodi di calcolo?",
    "opts": [
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway.",
      "Amazon Elastic File System.",
      "S3."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "2c3cb1fd77b6",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti modelli di distribuzione del cloud computing elimina la necessità di gestire e mantenere data center fisici?",
    "opts": [
      "On-premises.",
      "IaaS.",
      "PaaS.",
      "Cloud."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "e0fa0396eccf"
  },
  {
    "q": "Quali sono i vantaggi del servizio AWS Marketplace? (Scegline DUE)",
    "opts": [
      "Protegge i clienti eseguendo controlli di sicurezza periodici sui prodotti in catalogo.",
      "Fatturazione al secondo.",
      "Offre opzioni più economiche per acquistare istanze On-Demand Amazon EC2.",
      "Offre opzioni di prezzo flessibili adatte alla maggior parte delle esigenze dei clienti.",
      "Fornisce soluzioni software che girano su AWS o su qualsiasi altro fornitore cloud."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "b608642ba465",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Qual è il vantaggio della replica automatica dei volumi Amazon EBS all'interno della stessa Availability Zone?",
    "opts": [
      "Elasticità.",
      "Durabilità.",
      "Tracciabilità.",
      "Accessibilità."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "6deac80204b8",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "Stai pianificando di lanciare una campagna pubblicitaria nel prossimo fine settimana per promuovere un nuovo prodotto digitale. Durante la campagna sono previsti forti picchi di carico, e non puoi permetterti alcuna interruzione. Ti servono risorse di calcolo aggiuntive per gestire il carico in più. Qual è l'opzione di acquisto di istanze EC2 più conveniente per questo lavoro?",
    "opts": [
      "Savings Plans.",
      "Istanze Spot.",
      "Istanze Reserved.",
      "Istanze On-Demand."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "0e43d52e0593",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti servizi AWS si integra con AWS Shield e AWS Web Application Firewall (AWS WAF) per proteggere dagli attacchi DDoS a livello di rete e di applicazione?",
    "opts": [
      "Amazon EFS.",
      "AWS Secrets Manager.",
      "AWS Systems Manager.",
      "Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Security",
      "Storage"
    ],
    "id": "6d21f9fa9365",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale dei seguenti servizi si usa per cifrare i volumi EBS?",
    "opts": [
      "AWS WAF.",
      "AWS KMS.",
      "Amazon Macie.",
      "Amazon GuardDuty."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ],
    "id": "74995c9ab20a",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "L'amministratore dell'account AWS della tua azienda è stato licenziato. Con i permessi che aveva come amministratore, ha potuto creare diversi account utente IAM e chiavi di accesso. Inoltre, non sai se abbia accesso o no all'account root AWS. Cosa dovresti fare subito per proteggere la tua infrastruttura AWS? (Scegline DUE)",
    "opts": [
      "Scaricare tutte le policy collegate in un luogo sicuro.",
      "Eliminare tutti gli account IAM e ricrearli.",
      "Usare il servizio CloudWatch per controllare tutte le chiamate API fatte nel tuo account dal licenziamento dell'amministratore.",
      "Ruotare (cambiare) tutte le chiavi di accesso.",
      "Cambiare l'indirizzo email e la password dell'account utente root e abilitare l'MFA."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudWatch"
    ],
    "id": "c1ad8fb879d9",
    "explain": "L'account root AWS ha accesso illimitato e non può essere limitato da policy IAM. Best practice: non usarlo per operazioni quotidiane, abilitare MFA, eliminare le access key root, creare utenti IAM con permessi specifici. Usarlo solo per task che lo richiedono esplicitamente."
  },
  {
    "q": "A cosa serve il servizio Amazon ElastiCache? (Scegline DUE)",
    "opts": [
      "Fornire un servizio di archiviazione dati in memoria.",
      "Ridurre i costi di distribuzione usando le edge location.",
      "Migliorare le prestazioni delle applicazioni web.",
      "Fornire una cache compatibile con Chef per velocizzare la risposta delle applicazioni.",
      "Distribuire le richieste su più istanze."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ],
    "id": "ec3db45d905f",
    "explain": "Amazon ElastiCache è un servizio di caching in-memory compatibile con Redis e Memcached. Riduce la latenza da millisecondi a microsecondi. Ideale per sessioni utente e caching di query database."
  },
  {
    "q": "L'elasticità del cloud AWS permette ai clienti di risparmiare rispetto ai provider di hosting tradizionali. Cosa possono fare i clienti AWS per sfruttare l'elasticità del cloud AWS? (Scegline DUE)",
    "opts": [
      "Distribuire le risorse su più Availability Zone.",
      "Usare Amazon EC2 Auto Scaling.",
      "Distribuire le risorse in un'altra Regione.",
      "Usare Elastic Load Balancing.",
      "Usare il calcolo serverless quando possibile."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "8573e4c8b616",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quali sono alcuni dei vantaggi dell'uso delle istanze EC2 On-Demand? (Scegline DUE)",
    "opts": [
      "Forniscono capacità gratuita quando testi le tue nuove applicazioni.",
      "Sono più economiche di tutte le altre opzioni EC2.",
      "Eliminano la necessità di acquistare capacità di \"rete di sicurezza\" per gestire i picchi di traffico periodici.",
      "Richiedono solo 1-2 giorni per l'installazione e la configurazione.",
      "Puoi aumentare o diminuire la capacità di calcolo in base alle esigenze della tua applicazione."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "3df15ba2ebe5",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Ogni Regione AWS è formata da più Availability Zone. Quale delle seguenti descrive meglio che cos'è una Availability Zone?",
    "opts": [
      "È un data center progettato per essere completamente isolato dagli altri data center della stessa Regione.",
      "È un insieme di data center distribuiti in più paesi.",
      "È una rete logicamente isolata del cloud AWS.",
      "È un luogo distinto all'interno di una Regione, isolato dai guasti nelle altre Availability Zone."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "065cca637add",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "AWS offre capacità di disaster recovery permettendo ai clienti di distribuire l'infrastruttura in più [...].",
    "opts": [
      "Regioni.",
      "Dispositivi di trasporto.",
      "Piani di supporto.",
      "Edge location."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Support"
    ],
    "id": "073c6f509348",
    "explain": "Il Disaster Recovery su AWS sfrutta la distribuzione multi-Region. Le strategie vanno da Backup & Restore (alto RTO/RPO) a Multi-Site Active-Active (RTO/RPO minimo). AWS permette DR a costi molto inferiori rispetto all'on-premise."
  },
  {
    "q": "Una società di servizi finanziari decide di migrare una delle sue applicazioni su AWS. L'applicazione tratta dati sensibili, come le informazioni delle carte di credito, e deve girare in un ambiente conforme a PCI. Quale delle seguenti è responsabilità della società quando costruisce un ambiente conforme a PCI su AWS? (Scegline DUE)",
    "opts": [
      "Avviare subito la migrazione, perché tutti i servizi AWS sono conformi a PCI.",
      "Assicurarsi che i servizi AWS siano configurati correttamente per rispettare tutti gli standard PCI DSS.",
      "Limitare qualsiasi accesso ai dati dei titolari delle carte e creare una policy sulla sicurezza delle informazioni per tutto il personale.",
      "Configurare l'infrastruttura sottostante dei servizi AWS per rispettare tutti i requisiti PCI DSS.",
      "Assicurarsi che tutti i requisiti di sicurezza fisica di PCI DSS siano rispettati."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ],
    "id": "565c0ed940ce",
    "explain": "Per workload PCI-compliant su AWS bisogna usare servizi in scope PCI DSS e implementare i controlli a livello applicativo. AWS Artifact fornisce il certificato PCI DSS. La responsabilità è condivisa tra AWS (infrastruttura) e cliente (applicazioni e dati)."
  },
  {
    "q": "Qual è la quantità massima di dati che si possono conservare in S3 in un singolo account AWS?",
    "opts": [
      "100 petabyte.",
      "Storage praticamente illimitato.",
      "5 terabyte.",
      "10 exabyte."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3"
    ],
    "id": "347cb86f76a9",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale pilastro dell'AWS Well-Architected Framework fornisce raccomandazioni per aiutare i clienti a scegliere le risorse di calcolo giuste in base ai requisiti del carico di lavoro?",
    "opts": [
      "Eccellenza operativa.",
      "Sicurezza.",
      "Efficienza delle prestazioni.",
      "Affidabilità."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "6bd3a1a46283",
    "explain": "Il pillar Performance Efficiency del Well-Architected Framework si concentra sull'uso efficiente delle risorse. Include la scelta del tipo di risorsa giusto, monitoraggio delle performance e adozione di nuove tecnologie."
  },
  {
    "q": "Quale servizio AWS consegna dati, video, applicazioni e API agli utenti di tutto il mondo con bassa latenza e alte velocità di trasferimento?",
    "opts": [
      "Amazon Route 53.",
      "Amazon Connect.",
      "Amazon CloudFront.",
      "Amazon EC2."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53"
    ],
    "id": "2905870fc954",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quali dei seguenti passaggi dovrebbe seguire un cliente quando esegue penetration test su AWS?",
    "opts": [
      "Eseguire i penetration test con Amazon Inspector e poi avvisare l'AWS Support.",
      "Chiedere e attendere l'approvazione del team di sicurezza interno del cliente, poi eseguire i test.",
      "Avvisare l'AWS Support e poi eseguire subito i test.",
      "Chiedere e attendere l'approvazione dell'AWS Support, poi eseguire i test."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "868b767ac472",
    "explain": "AWS permette penetration test sulle proprie risorse (EC2, RDS, CloudFront, API Gateway, Lambda) compilando il Penetration Testing Request Form o senza approvazione per servizi approvati. I test DDoS richiedono autorizzazione esplicita. I clienti sono responsabili di non impattare altre risorse AWS."
  },
  {
    "q": "Quale strumento di AWS Cost Management permette di vedere i dati più dettagliati sulla tua fattura AWS?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Budgets.",
      "AWS Cost and Usage Report.",
      "Dashboard di AWS Billing."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "133fd91e96e1",
    "explain": "AWS Cost and Usage Report è il report più dettagliato sui costi AWS con dati granulari per ora o giorno. Si integra con Athena e QuickSight per analisi avanzate."
  },
  {
    "q": "Quale elemento dell'infrastruttura globale di AWS è formato da uno o più data center distinti, ciascuno con alimentazione, rete e connettività ridondanti, ospitati in strutture separate?",
    "opts": [
      "Regioni AWS.",
      "Availability Zone.",
      "Edge location.",
      "Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "2e28838415e4",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Le molte Regioni del cloud AWS sono un esempio di:",
    "opts": [
      "Agilità.",
      "Infrastruttura globale.",
      "Elasticità.",
      "Prezzi pay-as-you-go (a consumo)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "89031c773461",
    "explain": "L'infrastruttura globale AWS è composta da Regioni, Availability Zone ed Edge Location. Ci sono più edge location che AZ, e più AZ che Regioni. Garantisce alta disponibilità, bassa latenza globale e resilienza."
  },
  {
    "q": "Quale servizio AWS può essere usato per avviare manualmente istanze in base ai requisiti di risorse?",
    "opts": [
      "Amazon EBS.",
      "Amazon S3.",
      "Amazon EC2.",
      "Amazon ECS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "ECS / Fargate",
      "Storage"
    ],
    "id": "62954b6e9caf",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Uno sviluppatore deve configurare un certificato di sicurezza SSL per il sito eCommerce di un cliente, per usare il protocollo HTTPS. Quali dei seguenti servizi AWS possono essere usati per distribuire i certificati server SSL necessari? (Scegline DUE)",
    "opts": [
      "Amazon Route 53.",
      "AWS ACM.",
      "AWS Directory Service.",
      "AWS Identity & Access Management.",
      "AWS Data Pipeline."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Route 53",
      "Security",
      "Storage"
    ],
    "id": "b4346beec591",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Quali dei seguenti servizi AWS scalano automaticamente senza il tuo intervento? (Scegline DUE)",
    "opts": [
      "Amazon EC2.",
      "Amazon S3.",
      "AWS Lambda.",
      "Amazon EMR.",
      "Amazon EBS."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "Storage",
      "Analytics"
    ],
    "id": "3998eb40f76d",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Un'azienda sta pianificando di migrare un'applicazione da Amazon EC2 ad AWS Lambda per usare un'architettura serverless. Quali dei seguenti aspetti saranno responsabilità di AWS dopo la migrazione? (Scegline DUE)",
    "opts": [
      "La gestione dell'applicazione.",
      "La gestione della capacità.",
      "Il controllo degli accessi.",
      "La manutenzione del sistema operativo.",
      "La gestione dei dati."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "2e628e31d476",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "In che modo gli ELB migliorano l'affidabilità della tua applicazione?",
    "opts": [
      "Distribuendo il traffico su più bucket S3.",
      "Replicando i dati su più Availability Zone.",
      "Creando Read Replica del database.",
      "Assicurando che solo le destinazioni sane (healthy) ricevano traffico."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3"
    ],
    "id": "d73d26efe3ea",
    "explain": "Il pillar Reliability del Well-Architected Framework garantisce che un workload esegua la sua funzione in modo coerente. Include recupero automatico dai guasti, scaling orizzontale e testing del disaster recovery."
  },
  {
    "q": "Un'azienda deve migrare il suo sito web dall'on-premises ad AWS. La sicurezza è una sua grande preoccupazione, quindi deve ospitare il sito su hardware NON condiviso con altri clienti AWS. Quale delle seguenti opzioni di istanze EC2 soddisfa questo requisito?",
    "opts": [
      "Istanze On-Demand.",
      "Istanze Spot.",
      "Istanze Dedicated.",
      "Istanze Reserved."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ],
    "id": "1bcf239d191c",
    "explain": "EC2 Dedicated Host è un server fisico dedicato esclusivamente al tuo uso. Permette di portare licenze software (Microsoft, Oracle) dall'on-premise. Necessario per conformità che richiede server dedicati."
  },
  {
    "q": "Un cliente sta pianificando di spostare miliardi di immagini e video da conservare su Amazon S3. Ha circa 60 petabyte di dati da spostare. Quale dei seguenti servizi AWS è la scelta migliore per trasferire i dati in AWS?",
    "opts": [
      "Snowball.",
      "S3 Transfer Acceleration.",
      "Snowmobile.",
      "Amazon VPC."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Storage"
    ],
    "id": "d97c1ec0da3e",
    "explain": "AWS Snowmobile trasferisce fino a 100 petabyte usando un container trasportato da camion. Ideale per migrazioni complete di data center a livello exabyte."
  },
  {
    "q": "Un'azienda prevede di migrare una grande quantità di dati archiviati su AWS. I dati archiviati devono essere conservati per 5 anni e devono essere recuperabili entro 5 ore da una richiesta. Qual è il servizio di storage AWS più conveniente da usare?",
    "opts": [
      "Amazon S3 Glacier.",
      "Amazon EFS.",
      "Amazon S3 Standard.",
      "Amazon EBS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "11978ba3ec8f",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale servizio AWS si usa per gestire i permessi degli utenti?",
    "opts": [
      "Security group.",
      "Amazon ECS.",
      "AWS IAM.",
      "AWS Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "ECS / Fargate"
    ],
    "id": "aeb87f44b5d9",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale piano di supporto include l'AWS Support Concierge Service?",
    "opts": [
      "Premium Support.",
      "Business Support.",
      "Enterprise Support.",
      "Standard Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "1febafaea643",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Un'azienda deve tracciare le modifiche alle risorse usando la cronologia delle chiamate API. Quale servizio AWS può aiutarla a raggiungere questo obiettivo?",
    "opts": [
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS CloudFormation."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "CloudFormation"
    ],
    "id": "28f8497229a2",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quali sono i vantaggi dell'uso di un servizio gestito da AWS? (Scegline DUE)",
    "opts": [
      "Offre il controllo completo sull'infrastruttura virtuale.",
      "Permette ai clienti di rilasciare nuove soluzioni più velocemente.",
      "Riduce la complessità operativa.",
      "Elimina la necessità di cifrare i dati.",
      "Permette agli sviluppatori di controllare tutte le attività legate alle patch."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "AI / ML"
    ],
    "id": "affb07c4b533"
  },
  {
    "q": "Quali dei seguenti sono casi d'uso di Amazon S3? (Scegline DUE)",
    "opts": [
      "Ospitare siti web statici.",
      "Ospitare siti web che richiedono un utilizzo di CPU elevato e costante.",
      "Storage conveniente per database e log.",
      "Un archivio di contenuti multimediali per il servizio CloudFront.",
      "Elaborare flussi di dati su qualsiasi scala."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage"
    ],
    "id": "dc9dab1ca455",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Qual è la raccomandazione di AWS riguardo alle chiavi di accesso?",
    "opts": [
      "Eliminare tutte le chiavi di accesso e usare invece le password.",
      "Condividerle solo con persone fidate.",
      "Ruotarle (cambiarle) regolarmente.",
      "Salvarle nel codice della tua applicazione."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "335f43fa4149"
  },
  {
    "q": "Qual è la funzionalità di AWS IAM che aggiunge un ulteriore livello di sicurezza all'autenticazione con nome utente e password?",
    "opts": [
      "Coppia di chiavi.",
      "Chiavi di accesso.",
      "SDK.",
      "MFA."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "c9c411766cf6",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali (Google Authenticator), hardware token e U2F Key come YubiKey. È best practice fondamentale specialmente per l'account root e utenti con accesso privilegiato."
  },
  {
    "q": "Qual è il vantaggio di usare un'API per accedere ai servizi AWS?",
    "opts": [
      "Migliora le prestazioni delle risorse AWS.",
      "Riduce il tempo necessario per predisporre le risorse AWS.",
      "Riduce il numero di sviluppatori necessari.",
      "Permette di gestire le risorse AWS in modo programmatico."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "6643db33e1de"
  },
  {
    "q": "Un'azienda sta pianificando di migrare su AWS un database con molta attività di lettura e scrittura. Qual è la migliore opzione di storage da usare?",
    "opts": [
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
      "Amazon Glacier."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "8413d92f5145",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Come possono i clienti AWS tenere sotto controllo ed evitare spese eccessive per istanze Reserved sottoutilizzate?",
    "opts": [
      "I clienti possono aggiungere tutti gli account AWS a un'organizzazione AWS Organizations, abilitare la fatturazione consolidata e disattivare la condivisione delle Istanze Reserved.",
      "I clienti possono usare Amazon Neptune per tracciare e analizzare le loro modalità di utilizzo, individuare le istanze Reserved sottoutilizzate e poi venderle sull'Amazon EC2 Reserved Instance Marketplace.",
      "I clienti possono usare il servizio AWS Budgets per tracciare l'utilizzo delle istanze Reserved e impostare notifiche di avviso quando l'utilizzo scende sotto la soglia da loro definita.",
      "I clienti possono usare Amazon CloudTrail per controllare automaticamente le prenotazioni inutilizzate e ricevere raccomandazioni per ridurre la fattura."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "3186fcdfc7bd",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Qual è il servizio AWS che offre prestazioni cinque volte superiori a quelle di un database MySQL standard?",
    "opts": [
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Neptune."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "01797b9d4960",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Che cosa offre AWS Service Catalog?",
    "opts": [
      "Permette ai clienti di trovare rapidamente descrizioni e casi d'uso dei servizi AWS.",
      "Permette ai clienti di esplorare i diversi cataloghi dei servizi AWS.",
      "Semplifica l'organizzazione e la governance dei servizi IT distribuiti più comunemente.",
      "Permette agli sviluppatori di distribuire infrastruttura su AWS usando linguaggi di programmazione familiari."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "3e8141f1947c",
    "explain": "AWS Service Catalog permette di creare cataloghi di servizi IT approvati che gli utenti deployano self-service rispettando le policy aziendali."
  },
  {
    "q": "Per i servizi gestiti come Amazon DynamoDB, di quali dei seguenti aspetti è responsabile AWS? (Scegline DUE)",
    "opts": [
      "Proteggere le credenziali.",
      "Registrare le attività di accesso.",
      "Applicare le patch al software del database.",
      "La manutenzione del sistema operativo.",
      "Creare le policy di accesso."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "DynamoDB"
    ],
    "id": "5728317627e4",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quale dei seguenti servizi AWS aiuta a pianificare la migrazione delle applicazioni nel cloud AWS?",
    "opts": [
      "AWS Snowball Migration Service.",
      "AWS Application Discovery Service.",
      "AWS DMS.",
      "AWS Migration Hub."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "75e43f4e3b41"
  },
  {
    "q": "Un'azienda sta cercando di analizzare i costi addebitati di recente sul suo account AWS. Quale dei seguenti strumenti le fornisce i dati più dettagliati su costi e utilizzo di AWS?",
    "opts": [
      "Amazon Machine Image.",
      "AWS Cost Explorer.",
      "AWS Cost & Usage Report.",
      "Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "41f43f7be276",
    "explain": "AWS Cost and Usage Report è il report più dettagliato sui costi AWS con dati granulari per ora o giorno. Si integra con Athena e QuickSight per analisi avanzate."
  },
  {
    "q": "Quale affermazione descrive meglio il concetto di Regione AWS?",
    "opts": [
      "Una Regione AWS è un luogo geografico con un insieme di edge location.",
      "Una Regione AWS è una rete virtuale dedicata a un solo cliente AWS.",
      "Una Regione AWS è un luogo geografico con un insieme di Availability Zone.",
      "Una Regione AWS rappresenta il paese in cui si trova l'infrastruttura AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "dc53d45ead6a",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Un'azienda ha scoperto che diversi bucket S3 sono stati eliminati, ma non è chiaro chi li abbia eliminati. Quale dei seguenti strumenti può usare l'azienda per individuare l'identità che ha eliminato i bucket?",
    "opts": [
      "Log di SNS.",
      "Log di SQS.",
      "CloudWatch Logs.",
      "Log di CloudTrail."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudWatch",
      "SNS",
      "SQS"
    ],
    "id": "33f767366532",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quali dei seguenti fattori servono a scegliere la tecnologia di database adatta a un carico di lavoro specifico? (Scegline DUE)",
    "opts": [
      "Le Availability Zone.",
      "La sovranità dei dati.",
      "Il numero di letture e scritture al secondo.",
      "La natura delle query.",
      "I bug del software."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "d3bf97f85984"
  },
  {
    "q": "Quali sono i vantaggi di adottare una strategia di tagging per le risorse AWS? (Scegline DUE)",
    "opts": [
      "Individuare rapidamente le risorse che appartengono a un progetto specifico.",
      "Individuare rapidamente soluzioni software su AWS.",
      "Tracciare le chiamate API nel tuo account AWS.",
      "Individuare rapidamente le risorse eliminate e i loro metadati.",
      "Tracciare la spesa AWS su più risorse."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "81875873d0e6",
    "explain": "I tag AWS sono coppie chiave-valore per organizzare risorse, tracciare costi e applicare policy. Permettono di filtrare risorse nei report di costo e automatizzare operazioni. Una strategia di tagging coerente è fondamentale per la governance e l'allocazione dei costi."
  },
  {
    "q": "Cosa sono i controlli condivisi di AWS?",
    "opts": [
      "Controlli che sono responsabilità esclusiva del cliente, in base all'applicazione che distribuisce nei servizi AWS.",
      "Controlli che il cliente eredita da AWS.",
      "Controlli che si applicano sia al livello dell'infrastruttura sia ai livelli del cliente.",
      "Controlli su cui il cliente e AWS collaborano per proteggere l'infrastruttura."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d2e81fd0dd5b",
    "explain": "I controlli condivisi (Shared Controls) nel modello AWS Shared Responsibility sono responsabilità sia di AWS che del cliente, ma in contesti separati. Patch Management: AWS patcha l'infrastruttura e i servizi gestiti; il cliente patcha il proprio OS e le applicazioni. Configuration Management: AWS configura l'infrastruttura; il cliente configura le proprie applicazioni. Awareness and Training: entrambi devono formare i propri dipendenti."
  },
  {
    "q": "Quali principi di progettazione riguardano l'efficienza delle prestazioni in AWS? (Scegline DUE)",
    "opts": [
      "Costruire architetture multi-regione per servire meglio i clienti globali.",
      "Applicare la sicurezza a tutti i livelli.",
      "Implementare controlli forti su identità e accessi.",
      "Usare architetture serverless.",
      "Abilitare i log di audit."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Lambda",
      "Well-Architected"
    ],
    "id": "ebe42140e175",
    "explain": "L'architettura serverless elimina la gestione di server e scaling. Su AWS si implementa con Lambda, DynamoDB, S3 e API Gateway. Si paga solo per l'utilizzo effettivo senza costi per risorse inattive."
  },
  {
    "q": "Quali delle seguenti sono responsabilità del cliente quando usa Amazon EC2? (Scegline DUE)",
    "opts": [
      "Proteggere i dati sensibili.",
      "Applicare le patch all'infrastruttura sottostante.",
      "Configurare e gestire database gestiti.",
      "Mantenere componenti hardware coerenti.",
      "Installare e configurare software di terze parti."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "b23354f6a372",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Perché un'organizzazione dovrebbe decidere di usare AWS invece di un data center on-premises? (Scegline DUE)",
    "opts": [
      "Licenze software commerciali gratuite.",
      "Supporto tecnico gratuito.",
      "Risorse elastiche.",
      "Visite in sede per gli audit.",
      "Risparmio sui costi."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "9df8a9ce61aa"
  },
  {
    "q": "Quali dei seguenti servizi AWS possono aiutarti a eseguire analisi di sicurezza e audit di conformità normativa? (Scegline DUE)",
    "opts": [
      "Amazon Inspector.",
      "AWS Virtual Private Gateway.",
      "AWS Batch.",
      "Amazon ECS.",
      "AWS Config."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "ECS / Fargate",
      "Security"
    ],
    "id": "0e522f08d18e",
    "explain": "Amazon Inspector valuta la sicurezza di istanze EC2 e container ECR identificando vulnerabilità CVE. Genera report prioritizzati con azioni correttive."
  },
  {
    "q": "Quale delle seguenti NON è una caratteristica di Amazon Elastic Compute Cloud (Amazon EC2)?",
    "opts": [
      "Amazon EC2 è considerato un servizio web serverless.",
      "Amazon EC2 elimina la necessità di investire in hardware in anticipo.",
      "Amazon EC2 può avviare tutti i server virtuali che servono, tanti o pochi.",
      "Amazon EC2 offre calcolo scalabile."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "7124b0a4d5ab",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è il servizio di calcolo AWS che esegue codice solo quando viene attivato da eventi?",
    "opts": [
      "AWS Lambda.",
      "Amazon CloudWatch.",
      "AWS Transit Gateway.",
      "Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "CloudWatch",
      "Networking"
    ],
    "id": "6614877a9ecb",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Sia AWS sia i distributori IT tradizionali offrono un'ampia gamma di server virtuali per soddisfare le esigenze dei clienti. Come si chiamano questi server virtuali in AWS?",
    "opts": [
      "Snapshot Amazon EBS.",
      "Amazon VPC.",
      "AWS Managed Servers.",
      "Istanze Amazon EC2."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Storage"
    ],
    "id": "48995110da0e",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è il framework creato dagli AWS Professional Services che aiuta le organizzazioni a definire una roadmap per un'adozione del cloud di successo?",
    "opts": [
      "AWS Secrets Manager.",
      "AWS WAF.",
      "AWS CAF.",
      "Amazon EFS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ],
    "id": "839f9771f611",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "TYMO Cloud Corp vuole migrare l'intero data center on-premises su AWS. Quale strumento può usare per un'analisi costi-benefici del passaggio al cloud AWS?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS TCO Calculator.",
      "AWS Budgets.",
      "AWS Pricing Calculator."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "ce969ee7b0bc",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quale delle seguenti attività sostiene il pilastro dell'eccellenza operativa dell'AWS Well-Architected Framework?",
    "opts": [
      "Usare AWS Trusted Advisor per trovare risorse sottoutilizzate.",
      "Usare AWS CloudTrail per registrare le attività degli utenti.",
      "Usare AWS CloudFormation per gestire l'infrastruttura come codice.",
      "Distribuire un'applicazione in più Availability Zone."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Support",
      "Well-Architected"
    ],
    "id": "3d2e3102dac6",
    "explain": "Infrastructure as Code (IaC) gestisce l'infrastruttura tramite codice, rendendola ripetibile, versionabile e automatizzabile. Su AWS si implementa con CloudFormation o CDK. Riduce errori umani e accelera i deploy."
  },
  {
    "q": "Perché molte startup preferiscono AWS alle soluzioni on-premises tradizionali? (Scegline DUE)",
    "opts": [
      "AWS permette loro di pagare più tardi, quando la loro attività avrà successo.",
      "AWS può costruire data center completi più velocemente di qualsiasi altro fornitore cloud.",
      "Usando AWS possono ridurre il time to market concentrandosi sulle attività di business invece che sulla costruzione e gestione dei data center.",
      "AWS elimina la necessità di sostenere spese operative.",
      "Usare AWS permette alle aziende di sostituire grandi spese in conto capitale con bassi costi variabili."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "22751d9b66b1",
    "explain": "AWS trasforma le spese CapEx (acquisto hardware on-premise) in spese OpEx variabili. Elimina investimenti upfront e permette di pagare solo per le risorse usate. Il risultato è un TCO inferiore rispetto ai data center tradizionali."
  },
  {
    "q": "Quali sono i vantaggi dell'uso di DynamoDB? (Scegline DUE)",
    "opts": [
      "Scala automaticamente per soddisfare la capacità di throughput richiesta.",
      "Offre istanze ridimensionabili per adattarsi alla domanda attuale.",
      "Supporta sia modelli di dati relazionali sia non relazionali.",
      "Offre una latenza estremamente bassa (pochi millisecondi, a una cifra).",
      "Supporta i motori di database NoSQL più diffusi, come CouchDB e MongoDB."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "DynamoDB"
    ],
    "id": "cbf31faa4d5d",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Quali dei seguenti strumenti possono essere usati per proteggere i dati a riposo su Amazon S3? (Scegline DUE)",
    "opts": [
      "Il versioning.",
      "La deduplicazione.",
      "I permessi.",
      "La decifratura.",
      "La conversione."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "77cb7cf16d1a",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Nell'ambito dell'AWS Migration Acceleration Program (MAP), cosa fornisce AWS per accelerare l'adozione di AWS da parte delle aziende? (Scegline DUE)",
    "opts": [
      "Partner AWS.",
      "AWS Artifact.",
      "AWS Professional Services.",
      "Amazon Athena.",
      "Amazon PinPoint."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Analytics"
    ],
    "id": "ab40d12a87aa",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "AWS raccomanda alcune pratiche per aiutare le organizzazioni a evitare addebiti inattesi in fattura. Quale delle seguenti NON è una di queste pratiche?",
    "opts": [
      "Eliminare i volumi EBS inutilizzati dopo aver terminato un'istanza EC2.",
      "Eliminare le launch configuration di Auto Scaling inutilizzate.",
      "Eliminare gli Elastic Load Balancer inutilizzati.",
      "Rilasciare gli Elastic IP inutilizzati dopo aver terminato un'istanza EC2."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "211dce88ded4",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Qual è lo strumento AWS che può aiutare un'azienda a visualizzare la sua spesa AWS degli ultimi mesi?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Consolidated Billing."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "c18cd3aa0909",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Quando esegue un carico di lavoro su AWS, il cliente NON è responsabile di: (Scegline DUE)",
    "opts": [
      "Eseguire penetration test.",
      "Prenotare capacità.",
      "Le operazioni del data center.",
      "Gli audit e la conformità normativa.",
      "La sicurezza dell'infrastruttura."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "2d2c60ba1a8a"
  },
  {
    "q": "Quale servizio AWS può essere usato per inviare SMS promozionali in più di 200 paesi nel mondo?",
    "opts": [
      "Amazon Simple Email Service (Amazon SES).",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon Simple Notification Service (Amazon SNS).",
      "Amazon Simple Queue Service (Amazon SQS)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "SNS",
      "SQS"
    ],
    "id": "10eb76845b84",
    "explain": "Amazon SNS è un servizio pub/sub per comunicazione many-to-many. Publisher inviano a topic e SNS distribuisce a subscriber (Lambda, SQS, email, SMS)."
  },
  {
    "q": "Quali dei seguenti strumenti permettono di creare nuove istanze RDS? (Scegline DUE)",
    "opts": [
      "AWS CodeDeploy.",
      "AWS Quick Starts.",
      "AWS CloudFormation.",
      "AWS DMS.",
      "AWS Management Console."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "CloudFormation"
    ],
    "id": "20160a8dee21",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Uno dei grandi vantaggi dell'uso di AWS è il risparmio sui costi. Che cosa offre AWS per ridurre il costo dell'esecuzione delle istanze Amazon EC2?",
    "opts": [
      "Bassi costi mensili di manutenzione delle istanze.",
      "Tagging delle istanze a basso costo.",
      "Fatturazione delle istanze al secondo.",
      "Bassi costi di attivazione delle istanze."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "302a0716de32",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale gruppo AWS aiuta i clienti a raggiungere i risultati di business desiderati?",
    "opts": [
      "AWS Security Team.",
      "AWS Professional Services.",
      "AWS Trusted Advisor.",
      "AWS Concierge Support Team."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "94eaef6e240c",
    "explain": "AWS Professional Services aiuta i clienti ad accelerare l'adozione del cloud tramite engagement a pagamento. Offre consulenza per migrazione, modernizzazione e ottimizzazione."
  },
  {
    "q": "Quale servizio o funzionalità AWS si usa per gestire le chiavi usate per cifrare i dati dei clienti?",
    "opts": [
      "AWS KMS.",
      "Service Control Policy (SCP) di AWS.",
      "Autenticazione a più fattori (MFA).",
      "Amazon Macie."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "808053b2d8e4",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "Quale servizio AWS permette ai clienti di scaricare i report SOC e PCI di AWS?",
    "opts": [
      "AWS Well-Architected Tool.",
      "AWS Artifact.",
      "AWS Glue.",
      "Amazon Chime."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Analytics",
      "Well-Architected"
    ],
    "id": "17b99d909b79",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quali dei seguenti accorgimenti possono aiutare a proteggere i dati sensibili in Amazon S3? (Scegline DUE)",
    "opts": [
      "Eliminare le chiavi di cifratura una volta cifrati i dati.",
      "Con AWS non devi preoccuparti della cifratura.",
      "Abilitare la cifratura S3.",
      "Cifrare i dati prima di caricarli.",
      "Eliminare tutti gli utenti IAM che hanno accesso a S3."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "IAM",
      "Security"
    ],
    "id": "46aaec21ef47",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale servizio AWS aiuta gli sviluppatori a compilare e testare il codice?",
    "opts": [
      "AWS CodeDeploy.",
      "AWS CodeCommit.",
      "CloudEndure.",
      "AWS CodeBuild."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "ec008a431145",
    "explain": "AWS CodeBuild compila codice, esegue test e produce pacchetti deployabili. Scala automaticamente e si paga per minuti di build."
  },
  {
    "q": "Quali dei seguenti fattori influiscono su quanto paghi per conservare oggetti in S3? (Scegline DUE)",
    "opts": [
      "Usare la cifratura predefinita su un numero qualsiasi di bucket S3.",
      "Il numero di volumi EBS collegati alle tue istanze.",
      "La classe di storage usata per gli oggetti conservati.",
      "Creare ed eliminare bucket S3.",
      "La dimensione totale in gigabyte di tutti gli oggetti conservati."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Storage"
    ],
    "id": "8d15b157bd89",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Che cosa offre il servizio Amazon CloudFront? (Scegline DUE)",
    "opts": [
      "Traccia l'attività degli utenti e l'uso delle API.",
      "Aumenta la disponibilità dell'applicazione grazie alla cache sulle edge location.",
      "Permette un disaster recovery più rapido.",
      "Conserva dati archiviati a costi molto bassi.",
      "Consegna contenuti agli utenti finali con bassa latenza."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ],
    "id": "be1237d6ff28",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Hai molti problemi con il tuo attuale contact center. Quale servizio fornisce un contact center basato sul cloud che può offrire un servizio migliore ai tuoi clienti?",
    "opts": [
      "Amazon Lightsail.",
      "Amazon Connect.",
      "AWS Direct Connect.",
      "AWS Elastic Beanstalk."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "cee4cd1dc6f4",
    "explain": "Amazon Connect è un servizio di contact center cloud scalabile senza hardware. Supporta chiamate vocali e chat con routing intelligente. Si paga a minuto di utilizzo."
  },
  {
    "q": "Hai migrato da poco la tua applicazione su AWS. Come puoi vedere i costi AWS addebitati sul tuo account?",
    "opts": [
      "Usando l'AWS Cost & Usage Report.",
      "Usando la dashboard AWS Total Cost of Ownership (TCO).",
      "Usando la dashboard dei log di AWS CloudWatch.",
      "Usando la dashboard di Amazon VPC."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch"
    ],
    "id": "81604d875dc5"
  },
  {
    "q": "Quali dei seguenti sono tipi validi di Istanze Reserved Amazon EC2? (Scegline DUE)",
    "opts": [
      "Convertible.",
      "Expedited.",
      "Bulk.",
      "Spot.",
      "Standard."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "f351d992754d",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Quale dei seguenti servizi dà accesso a tutti i report e le certificazioni emessi dai revisori di AWS?",
    "opts": [
      "AWS Artifact.",
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "id": "ca6a277cfa5b",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Gestisci un blog su AWS con diversi ambienti: sviluppo, test e produzione. Cosa puoi usare per creare una console personalizzata per ogni ambiente, così da vedere e gestire facilmente le tue risorse?",
    "opts": [
      "AWS Resource Groups.",
      "AWS Placement Groups.",
      "AWS Management Console.",
      "AWS Tag Editor."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "077f32a216e0",
    "explain": "AWS Resource Groups organizza risorse correlate basandosi su tag o stack CloudFormation. Permette di visualizzare e agire su gruppi di risorse dello stesso progetto o ambiente."
  },
  {
    "q": "Quale servizio AWS raccoglie le metriche dalle istanze EC2 in esecuzione?",
    "opts": [
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudFormation.",
      "AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "CloudFormation",
      "Security"
    ],
    "id": "fc3cb0073946",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "La tua applicazione web ha attualmente problemi di prestazioni e tempi di caricamento lunghi. Quale dei seguenti servizi AWS potrebbe aiutare a risolvere questi problemi e migliorare le prestazioni?",
    "opts": [
      "Amazon Detective.",
      "AWS X-Ray.",
      "AWS Security Hub.",
      "AWS Shield."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "4d09fb8973f2"
  },
  {
    "q": "Quali delle seguenti risorse di calcolo sono serverless? (Scegline DUE)",
    "opts": [
      "Amazon EC2.",
      "AWS Fargate.",
      "AWS Lambda.",
      "Amazon ECS.",
      "Amazon EMR."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate",
      "Analytics"
    ],
    "id": "a6ee134ca754",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Per motivi di conformità normativa, un ente governativo richiede che le sue applicazioni girino su hardware dedicato solo a lui. Come puoi soddisfare questo requisito?",
    "opts": [
      "Usare i Dedicated Hosts EC2.",
      "Usare le Istanze Reserved EC2.",
      "Usare le Istanze Spot EC2.",
      "Usare le Istanze On-Demand EC2."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "2ec4159d7351",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale best practice di governance dei costi AWS raccomanda di affinare regolarmente i carichi di lavoro per sfruttare al meglio le risorse AWS esistenti e ridurre i costi?",
    "opts": [
      "Obbligo di tagging (Tagging Enforcement).",
      "Ottimizzazione dell'architettura.",
      "Processi di budgeting.",
      "Controlli sulle risorse."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "4559e5869956",
    "explain": "Il pillar Cost Optimization del Well-Architected Framework evita costi non necessari. Include eliminazione delle risorse inutilizzate, uso di Reserved Instance/Savings Plans e dimensionamento corretto."
  },
  {
    "q": "Un'organizzazione deve costruire un'applicazione finanziaria che richiede il supporto delle transazioni ACID. Quale servizio di database AWS è il più adatto in questo caso?",
    "opts": [
      "RedShift.",
      "RDS.",
      "CloudHSM.",
      "DMS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Analytics"
    ],
    "id": "1e1a45323040",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Cosa puoi usare per assegnare permessi direttamente a un utente IAM?",
    "opts": [
      "IAM Identity.",
      "Gruppo IAM.",
      "Ruolo IAM.",
      "Policy IAM."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "0d8f6cdf1f8e",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Il proprietario di un'applicazione di e-commerce nota che il fabbisogno di capacità di calcolo varia molto da un momento all'altro. Cosa rende AWS più economico dei data center tradizionali per questo tipo di applicazione?",
    "opts": [
      "AWS permette ai clienti di avviare istanze EC2 potenti per gestire i picchi di carico.",
      "AWS permette ai clienti di pagare in anticipo per ottenere sconti maggiori.",
      "AWS permette ai clienti di avviare e terminare istanze EC2 in base alla domanda.",
      "AWS permette ai clienti di scegliere tipi di istanza EC2 più economici e più adatti alle loro esigenze."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "a0ead0971281",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Amazon RDS supporta diversi motori di database tra cui scegliere. Quale dei seguenti non è tra questi?",
    "opts": [
      "PostgreSQL.",
      "Oracle.",
      "Microsoft SQL Server.",
      "Teradata."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "2b8b7d5588d6",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quale dei seguenti servizi AWS ti aiuterebbe a migrare database on-premises su AWS?",
    "opts": [
      "AWS DMS.",
      "Amazon S3 Transfer Acceleration.",
      "AWS Directory Service.",
      "AWS Transit Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Networking"
    ],
    "id": "8a300f6e9706",
    "explain": "AWS Database Migration Service migra database verso AWS con downtime minimo. Supporta migrazioni omogenee ed eterogenee con Schema Conversion Tool."
  },
  {
    "q": "Per i nuovi clienti AWS, qual è il modo PIÙ SEMPLICE per avviare un semplice sito WordPress su AWS?",
    "opts": [
      "Eseguire WordPress su un'istanza Amazon Lightsail.",
      "Installare WordPress su un'istanza Amazon EC2.",
      "Usare la funzionalità di web hosting di Amazon S3.",
      "Ospitare il sito direttamente su AWS Cloud Development Kit (AWS CDK)."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "453423677e6e",
    "explain": "Amazon Lightsail offre server virtuali a prezzo mensile fisso per applicazioni semplici. Ideale per piccole imprese e sviluppatori che non necessitano della complessità AWS."
  },
  {
    "q": "Quali dei seguenti strumenti useresti per gestire le tue chiavi di cifratura nel cloud AWS? (Scegline DUE)",
    "opts": [
      "AWS KMS.",
      "AWS Certificate Manager.",
      "AWS CodeDeploy.",
      "AWS CodeCommit.",
      "CloudHSM."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "9a24cdf67a63",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "Quale dei seguenti servizi permette di installare ed eseguire software di database relazionale personalizzato?",
    "opts": [
      "Amazon EC2.",
      "Amazon Cognito.",
      "Amazon RDS.",
      "Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Security"
    ],
    "id": "3452062089d2",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "I requisiti di CPU e RAM della tua applicazione cambiano in modo imprevedibile. Quale servizio può essere usato per regolare dinamicamente queste risorse in base al carico?",
    "opts": [
      "Auto Scaling.",
      "ELB.",
      "Amazon Route53.",
      "Amazon Elastic Container Service."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "ECS / Fargate"
    ],
    "id": "5f95b28f188d",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Un'azienda ha un'infrastruttura ospitata in un data center on-premises. Attualmente ha un team operativo che si occupa della gestione delle identità. Se decide di migrare nel cloud AWS, quale dei seguenti servizi la aiuterebbe a svolgere lo stesso ruolo in AWS?",
    "opts": [
      "AWS IAM.",
      "AWS Outposts.",
      "AWS Federation.",
      "Amazon Redshift."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Analytics"
    ],
    "id": "3cd674cb6442",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quali sono alcuni principi chiave per progettare sistemi nel cloud pubblico? (Scegline DUE)",
    "opts": [
      "Capacità riservata invece che On-Demand.",
      "Accoppiamento debole invece che stretto.",
      "Server invece di servizi gestiti.",
      "Risorse usa e getta (disposable) invece di server fissi.",
      "Distribuzioni Multi-AZ invece di distribuzioni multi-regione."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "57d7785a218c",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Dove possono ottenere i proprietari di un account AWS l'elenco di tutti gli utenti dell'account, compreso lo stato delle loro credenziali AWS?",
    "opts": [
      "Trail di AWS CloudTrail.",
      "IAM Credential Report.",
      "Report di AWS Artifact.",
      "AWS Cost and Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "f5263a9e8645",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale dei seguenti servizi permette di generare e usare facilmente le tue chiavi di cifratura nel cloud AWS?",
    "opts": [
      "AWS Shield.",
      "AWS Certificate Manager.",
      "AWS CloudHSM.",
      "AWS WAF."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "d621c5b7fe69",
    "explain": "AWS CloudHSM fornisce moduli hardware di sicurezza dedicati per gestire chiavi crittografiche con controllo esclusivo del cliente. Richiesto per PCI DSS e altri standard che richiedono HSM dedicati. Il cliente ha controllo completo dell'hardware, a differenza di KMS."
  },
  {
    "q": "Hai sviluppato un'applicazione web rivolta a un pubblico globale. Quale delle seguenti soluzioni ti aiuterà a ottenere la massima ridondanza e tolleranza ai guasti dal punto di vista dell'infrastruttura?",
    "opts": [
      "Non serve progettare per queste capacità in AWS, perché AWS è ridondante per impostazione predefinita.",
      "Distribuire l'applicazione in una singola Availability Zone.",
      "Distribuire l'applicazione in più Availability Zone di una singola Regione AWS.",
      "Distribuire l'applicazione in più Availability Zone di più Regioni AWS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "03d3db09b187",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Per alcuni servizi, AWS replica automaticamente i dati su più Availability Zone per garantire la tolleranza ai guasti in caso di guasto di un server o di interruzione di una Availability Zone. Scegli DUE servizi che replicano automaticamente i dati tra Availability Zone.",
    "opts": [
      "Instance Store.",
      "S3.",
      "DynamoDB.",
      "Amazon Route 53.",
      "AWS VPN."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Route 53",
      "DynamoDB"
    ],
    "id": "adc3bf2418bb",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali dei seguenti fattori influiscono sul costo di Amazon CloudFront? (Scegline DUE)",
    "opts": [
      "Il numero di richieste.",
      "La distribuzione del traffico.",
      "Il numero di volumi.",
      "Il tipo di istanza.",
      "La classe di storage."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront"
    ],
    "id": "e7f7f8df5a31",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale delle seguenti risorse può usare un cliente AWS per saperne di più sugli usi vietati dei servizi offerti da AWS?",
    "opts": [
      "Service Control Policy (SCP) di AWS.",
      "AWS Artifact.",
      "AWS Budgets.",
      "AWS Acceptable Use Policy."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ],
    "id": "bf2acd828039",
    "explain": "La AWS Acceptable Use Policy definisce i comportamenti vietati: spam, malware, DDoS, accessi non autorizzati. I clienti la accettano alla creazione dell'account. Le violazioni comportano la sospensione."
  },
  {
    "q": "Quali delle seguenti risorse di sicurezza sono disponibili gratuitamente per qualsiasi utente? (Scegline DUE)",
    "opts": [
      "Bollettini AWS (AWS Bulletins).",
      "AWS TAM.",
      "AWS Support API.",
      "AWS Security Blog.",
      "AWS Classroom Training."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "4fcb6b7d785b"
  },
  {
    "q": "Come puoi proteggere i dati salvati su Amazon S3 dalla cancellazione accidentale?",
    "opts": [
      "Abilitando il versioning di S3.",
      "Configurando le bucket policy di S3.",
      "Configurando le lifecycle policy di S3.",
      "Disabilitando la Cross-Region Replication (CRR) di S3."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3"
    ],
    "id": "1c6fd1442100",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale delle seguenti è responsabilità di AWS secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Proteggere le Regioni e le edge location.",
      "Eseguire le attività di audit.",
      "Monitorare l'utilizzo delle risorse AWS.",
      "Proteggere l'accesso alle risorse AWS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Shared Responsibility"
    ],
    "id": "d9876fa00fd7",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quali dei seguenti piani di supporto AWS danno accesso solo ai sette controlli di base di AWS Trusted Advisor?",
    "opts": [
      "Business ed Enterprise Support.",
      "Basic e Developer Support.",
      "Developer ed Enterprise Support.",
      "Developer e Business Support."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "b062b38f69d5",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale dei seguenti NON è un vantaggio dell'uso di AWS Lambda?",
    "opts": [
      "AWS Lambda esegue il codice senza dover predisporre o gestire server.",
      "AWS Lambda fornisce capacità di calcolo ridimensionabile nel cloud.",
      "Non si paga nulla quando il codice AWS Lambda non è in esecuzione.",
      "AWS Lambda può essere chiamato direttamente da qualsiasi app mobile."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "id": "5aa6db11fdb5",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "In che modo AWS aiuta i clienti a ottenere la conformità nel cloud?",
    "opts": [
      "Non è possibile soddisfare i requisiti di conformità normativa nel cloud.",
      "AWS applica gli standard di sicurezza cloud più comuni ed è responsabile del rispetto delle leggi e dei regolamenti applicabili ai clienti.",
      "AWS ha molte certificazioni di garanzia comuni, come ISO 9001 e HIPAA.",
      "Molti servizi AWS vengono valutati regolarmente per la conformità alle leggi e ai regolamenti locali."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "dd511f46d4d0",
    "explain": "AWS supporta PCI DSS, HIPAA, SOC 1/2/3, ISO 27001 e FedRAMP. AWS Artifact fornisce report di conformità e accordi legali. I clienti ereditano i controlli AWS ma rimangono responsabili della conformità delle loro applicazioni."
  },
  {
    "q": "Chi è responsabile di scalare un database DynamoDB nel modello di responsabilità condivisa di AWS?",
    "opts": [
      "Il tuo team di sicurezza.",
      "Il tuo team di sviluppo.",
      "AWS.",
      "Il tuo team DevOps interno."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "Shared Responsibility"
    ],
    "id": "926a3b695f04",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Lavori come sviluppatore di app web. Hai problemi nella riproduzione dei contenuti multimediali sui dispositivi mobili perché il formato dei tuoi media non è supportato. Quale dei seguenti servizi AWS può aiutarti a convertire i media in un altro formato?",
    "opts": [
      "Amazon Elastic Transcoder.",
      "Amazon Pinpoint.",
      "Amazon S3.",
      "Amazon Rekognition."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "7ddcf5db3872",
    "explain": "Amazon Elastic Transcoder converte file video e audio in formati ottimizzati per dispositivi diversi. Si integra con S3 e scala automaticamente senza gestione di infrastruttura di transcodifica."
  },
  {
    "q": "Quali sono i vantaggi del servizio AWS Organizations? (Scegline DUE)",
    "opts": [
      "Controllare l'accesso ai servizi AWS.",
      "Aiutare le organizzazioni a definire e mantenere un percorso accelerato verso un'adozione del cloud di successo.",
      "Gestire i metodi di pagamento della tua organizzazione.",
      "Aiutare le organizzazioni a raggiungere i risultati di business desiderati con AWS.",
      "Consolidare la fatturazione di più account AWS."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "95bd7db04e86",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Quale servizio AWS permette di costruire un data warehouse nel cloud?",
    "opts": [
      "AWS Shield.",
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon Comprehend."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Security",
      "Analytics",
      "AI / ML"
    ],
    "id": "badfdad1f98f",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Quale servizio AWS permette di acquistare soluzioni e servizi software di terze parti che girano su risorse AWS?",
    "opts": [
      "AWS Application Discovery Service.",
      "Amazon DevPay.",
      "AWS Marketplace.",
      "Resource Groups."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "edffa77741e0",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Quale dei seguenti servizi è un sistema AWS di gestione dei repository che permette di conservare, versionare e gestire il codice delle applicazioni?",
    "opts": [
      "AWS CodePipeline.",
      "AWS CodeCommit.",
      "AWS X-Ray.",
      "Amazon Inspector."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "ed7a88a628f6",
    "explain": "AWS CodeCommit è un servizio Git privato e gestito. Si integra con IAM e CodePipeline per CI/CD."
  },
  {
    "q": "Quale servizio AWS può essere usato per indirizzare gli utenti finali verso la Regione AWS più vicina, riducendo la latenza?",
    "opts": [
      "Amazon Cognito.",
      "AWS Systems Manager.",
      "AWS Cloud9.",
      "Amazon Route 53."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ],
    "id": "2f28510ee883",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Quale funzionalità permette agli utenti di accedere ai propri account AWS con le credenziali aziendali che già hanno?",
    "opts": [
      "La federazione (Federation).",
      "Le chiavi di accesso.",
      "I permessi IAM.",
      "Le regole WAF."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "c859f8de30ad",
    "explain": "La Federation permette di accedere a AWS usando credenziali aziendali (Active Directory, Okta) tramite SAML 2.0 o OIDC. Elimina la necessità di creare utenti IAM separati. IAM Identity Center è il servizio consigliato."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali sono i controlli che i clienti ereditano completamente da AWS? (Scegline DUE)",
    "opts": [
      "Consapevolezza e formazione.",
      "Controlli delle comunicazioni.",
      "Controlli di sicurezza del data center.",
      "Controlli ambientali.",
      "Gestione della configurazione delle risorse."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "177d98a42532",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "A cosa accedi visitando l'URL <http://status.aws.amazon.com>?",
    "opts": [
      "AWS Billing Dashboard.",
      "AWS Cost Dashboard.",
      "AWS Service Health Dashboard.",
      "AWS Security Dashboard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "e96c2ae885f2",
    "explain": "Il Service Health Dashboard mostra la salute di tutti i servizi AWS in tutte le regioni in tempo reale. È pubblicamente accessibile. Per informazioni personalizzate si usa il Personal Health Dashboard."
  },
  {
    "q": "Quali delle seguenti procedure possono ridurre la latenza quando gli utenti finali recuperano dati? (Scegline DUE)",
    "opts": [
      "Conservare i contenuti multimediali nella Regione più vicina agli utenti finali.",
      "Conservare i contenuti multimediali su un volume EBS aggiuntivo e aumentare la capacità del server.",
      "Replicare i contenuti multimediali su almeno due Availability Zone.",
      "Ridurre la dimensione dei contenuti multimediali con Amazon Elastic Transcoder.",
      "Conservare i contenuti multimediali in S3 e usare CloudFront per distribuirli."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ],
    "id": "23a29a5149cf",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quali dei seguenti fanno parte dei sette principi di progettazione per la sicurezza nel cloud? (Scegline DUE)",
    "opts": [
      "Usare tecniche di monitoraggio manuale per proteggere le risorse AWS.",
      "Usare i ruoli IAM per concedere accessi temporanei invece di credenziali a lungo termine.",
      "Scalare in orizzontale per proteggersi dai guasti.",
      "Abilitare la tracciabilità in tempo reale.",
      "Non conservare mai dati sensibili nel cloud."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudWatch"
    ],
    "id": "330b6b96fb70",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Un'azienda sta migrando carichi di lavoro di produzione su AWS ed è preoccupata per la gestione dei costi tra i diversi reparti. Quale opzione dovrebbe implementare per classificare e tracciare la spesa AWS?",
    "opts": [
      "Usare il servizio AWS Pricing Calculator per monitorare i costi sostenuti da ogni reparto.",
      "Usare Amazon Aurora per prevedere la spesa AWS in base all'utilizzo.",
      "Applicare tag di allocazione dei costi per suddividere i costi AWS per progetti e reparti.",
      "Configurare l'AWS Price List API per ricevere automaticamente aggiornamenti di fatturazione per ogni reparto."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ],
    "id": "c336d05ace2f",
    "explain": "I Cost Allocation Tags tracciano i costi AWS per progetto, reparto o categoria. Appaiono nei report di costo e in Cost Explorer. Sono lo strumento principale per chargeback dei costi cloud."
  },
  {
    "q": "Un utente deve distribuire rapidamente un database non relazionale su AWS. L'utente non vuole gestire l'hardware sottostante né il software del database. Quale servizio AWS può essere usato per farlo?",
    "opts": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "8efe50308895",
    "explain": "Amazon DynamoDB è un database NoSQL key-value con latenza a singola cifra di millisecondi su qualsiasi scala. Si scala automaticamente e replica su 3 data center. Ideale per applicazioni web, mobile, gaming e IoT."
  },
  {
    "q": "Un Cloud Practitioner sta preparando un piano di disaster recovery e intende replicare i dati tra più aree geografiche. Quale dei seguenti soddisfa questi requisiti?",
    "opts": [
      "Account AWS",
      "Regioni AWS",
      "Availability Zone",
      "Edge location"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "9c98e4302f0c",
    "explain": "Le regioni AWS sono aree geografiche indipendenti con più Availability Zone. Ogni regione è separata dalle altre per garantire sovranità dei dati e isolamento dei guasti. Distribuire su più regioni protegge da disastri regionali."
  },
  {
    "q": "Quali funzionalità e vantaggi offre il servizio AWS Organizations? (Scegline due.)",
    "opts": [
      "Stabilire comunicazioni in tempo reale tra i membri di un team interno",
      "Facilitare l'uso di database NoSQL",
      "Fornire controlli di sicurezza automatici",
      "Implementare la fatturazione consolidata",
      "Imporre la governance degli account AWS"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "DynamoDB",
      "Billing & Cost"
    ],
    "id": "8d61e3fa9faa",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quale servizio AWS si usa per automatizzare la gestione della configurazione con Chef e Puppet?",
    "opts": [
      "AWS Config",
      "AWS OpsWorks",
      "AWS CloudFormation",
      "AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ],
    "id": "8a82d3a89d72",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Quale strumento è il più adatto per unire la fatturazione di account AWS che prima erano indipendenti tra loro?",
    "opts": [
      "Report di fatturazione dettagliato",
      "Fatturazione consolidata",
      "AWS Cost and Usage Report",
      "Report di allocazione dei costi"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "2da333fffe7e",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "L'AWS Total Cost of Ownership (TCO) Calculator si usa per:",
    "opts": [
      "ricevere report che suddividono i costi di calcolo del cloud AWS per durata, risorsa o tag",
      "stimare i risparmi confrontando il cloud AWS con un ambiente on-premises",
      "stimare la fattura mensile per le risorse del cloud AWS che verranno usate",
      "abilitare avvisi di fatturazione per monitorare i costi AWS effettivi rispetto a quelli stimati"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "35b00efea897",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quali servizi AWS possono essere usati per fornire connettività di rete tra una rete on-premises e un VPC? (Scegline due.)",
    "opts": [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Data Pipeline",
      "AWS VPN",
      "Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ],
    "id": "fbcb36c965cc",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali delle seguenti sono responsabilità del cliente? (Scegline due.)",
    "opts": [
      "Configurare la cifratura lato server su un bucket Amazon S3",
      "Applicare le patch alle istanze Amazon RDS",
      "Le configurazioni di rete e del firewall",
      "La sicurezza fisica delle strutture dei data center",
      "La disponibilità di capacità di calcolo"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "RDS",
      "Security",
      "Shared Responsibility"
    ],
    "id": "76d8871cc604",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Qual è il livello MINIMO di piano AWS Support che dà agli utenti accesso all'AWS Support API?",
    "opts": [
      "Developer",
      "Enterprise",
      "Business",
      "Basic"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "54103ad1f422",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Un'azienda ha distribuito diversi database relazionali su istanze Amazon EC2. Ogni mese il fornitore del software di database rilascia nuove patch di sicurezza che devono essere applicate ai database. Qual è il modo PIÙ efficiente per applicare le patch di sicurezza?",
    "opts": [
      "Collegarsi ogni mese a ciascuna istanza di database, scaricare dal fornitore le patch di sicurezza necessarie e applicarle.",
      "Abilitare l'applicazione automatica delle patch per le istanze dalla console di Amazon RDS.",
      "In AWS Config, configurare una regola per le istanze e il livello di patch richiesto.",
      "Usare AWS Systems Manager per automatizzare l'applicazione delle patch ai database secondo una pianificazione."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "96e047035f8b",
    "explain": "AWS Systems Manager fornisce controllo centralizzato dell'infrastruttura. Include Patch Manager, Run Command, Parameter Store e Session Manager per accesso sicuro senza SSH/RDP."
  },
  {
    "q": "Un'azienda vuole usare Amazon Elastic Compute Cloud (Amazon EC2) per distribuire un'applicazione commerciale globale. La soluzione di distribuzione deve avere la massima ridondanza e tolleranza ai guasti. In questa situazione, le istanze Amazon EC2 dovrebbero essere distribuite:",
    "opts": [
      "in una singola Availability Zone di una Regione AWS",
      "con più Elastic Network Interface appartenenti a subnet diverse",
      "su più Availability Zone di una Regione AWS",
      "su più Availability Zone di due Regioni AWS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "0630fddab965",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Un'azienda ha un'applicazione con utenti sia in Australia sia in Brasile. Tutta l'infrastruttura dell'azienda è attualmente predisposta nella Regione Asia Pacifico (Sydney), in Australia, e gli utenti brasiliani hanno una latenza alta. Cosa dovrebbe fare l'azienda per ridurre la latenza?",
    "opts": [
      "Implementare AWS Direct Connect per gli utenti in Brasile",
      "Predisporre risorse nella Regione Sud America (San Paolo), in Brasile.",
      "Usare AWS Transit Gateway per instradare rapidamente gli utenti dal Brasile all'applicazione",
      "Avviare altre istanze Amazon EC2 a Sydney per gestire la domanda"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Networking"
    ],
    "id": "19dd71c3223d"
  },
  {
    "q": "Un'istanza Amazon EC2 gira solo quando serve, ma deve restare attiva per tutta la durata del processo. Qual è l'opzione di acquisto più appropriata?",
    "opts": [
      "Istanze Dedicated",
      "Istanze Spot",
      "Istanze On-Demand",
      "Istanze Reserved"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "2b9fac4ba1e1",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dashboard AWS mostra informazioni pertinenti e tempestive per aiutare gli utenti a gestire gli eventi in corso, e fornisce notifiche proattive per aiutare a pianificare le attività programmate?",
    "opts": [
      "AWS Service Health Dashboard",
      "AWS Personal Health Dashboard",
      "Dashboard di AWS Trusted Advisor",
      "Dashboard di Amazon CloudWatch"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "d81bb94daf42",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Quale servizio di storage ibrido AWS permette alle applicazioni on-premises di un utente di usare lo storage del cloud AWS in modo trasparente?",
    "opts": [
      "AWS Backup",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Storage Gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage",
      "Networking"
    ],
    "id": "bb50ff826503",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Quale dei seguenti funziona come firewall virtuale a livello di istanza Amazon EC2 per controllare il traffico di una o più istanze?",
    "opts": [
      "Chiavi di accesso",
      "Virtual private gateway",
      "Security group",
      "Access Control List (ACL)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "db1aa71b5a8f",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è il modo più efficiente per stabilire la connettività di rete dall'on-premises verso più VPC in diverse Regioni AWS?",
    "opts": [
      "Usare AWS Direct Connect",
      "Usare AWS VPN",
      "Usare AWS Client VPN",
      "Usare un AWS Transit Gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "fb95811dab24",
    "explain": "AWS Transit Gateway è un hub che semplifica la connettività tra VPC e reti on-premise con un modello hub-and-spoke. Connette fino a 5000 VPC eliminando peering mesh complesse."
  },
  {
    "q": "Quale piano AWS Support dà accesso a revisioni architetturali e operative, oltre all'accesso 24/7 ai Senior Cloud Support Engineer via email, chat online e telefono?",
    "opts": [
      "Basic",
      "Business",
      "Developer",
      "Enterprise"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "8cd380c29442",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quale servizio o funzionalità AWS aiuta a limitare i servizi AWS, le risorse e le singole azioni API a cui possono accedere gli utenti e i ruoli di ogni account membro?",
    "opts": [
      "Amazon Cognito",
      "AWS Organizations",
      "AWS Shield",
      "AWS Firewall Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "93e643b63591",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Qual è la risorsa migliore per un utente che cerca informazioni e report di conformità su AWS?",
    "opts": [
      "AWS Artifact",
      "AWS Marketplace",
      "Amazon Inspector",
      "AWS Support"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "b2e802beb5b1",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quale classe di storage di Amazon S3 è ottimizzata per dati con requisiti di resilienza più bassi ma che devono essere accessibili rapidamente quando serve, come i backup duplicati?",
    "opts": [
      "Amazon S3 Standard",
      "Amazon S3 Glacier Deep Archive",
      "Amazon S3 One Zone-Infrequent Access",
      "Amazon S3 Glacier"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "a996ceee8726",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Che cos'è una Availability Zone in AWS?",
    "opts": [
      "Uno o più data center fisici",
      "Un luogo geografico completamente isolato",
      "Una o più edge location situate nel mondo",
      "Un data center con un'unica fonte di alimentazione e di rete"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "aa6de9d344cd",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "Quali servizi AWS possono essere usati come strumenti di automazione dell'infrastruttura? (Scegline due.)",
    "opts": [
      "AWS CloudFormation",
      "Amazon CloudFront",
      "AWS Batch",
      "AWS OpsWorks",
      "Amazon QuickSight"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Analytics"
    ],
    "id": "610c257188f4",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di creare copie delle risorse in più Regioni AWS?",
    "opts": [
      "Amazon ElastiCache",
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ],
    "id": "dfae58476b52",
    "explain": "AWS CloudFormation provisiona l'infrastruttura come codice (IaC) usando template JSON o YAML. Gestisce dipendenze, supporta rollback automatico e permette di replicare ambienti in più regioni."
  },
  {
    "q": "Un utente vuole cifrare i dati ricevuti, conservati e gestiti da AWS CloudTrail. Quale servizio AWS offre questa capacità?",
    "opts": [
      "AWS Secrets Manager",
      "AWS Systems Manager",
      "AWS Key Management Service (AWS KMS)",
      "AWS Certificate Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "018d6f563e79",
    "explain": "AWS KMS crea e gestisce chiavi di cifratura per i dati su AWS. Si integra con la maggior parte dei servizi per cifratura at-rest e genera audit log tramite CloudTrail. Le chiavi possono essere gestite da AWS o dal cliente."
  },
  {
    "q": "Quali componenti delle credenziali servono per ottenere l'accesso programmatico a un account AWS? (Scegline due.)",
    "opts": [
      "Un access key ID",
      "Una chiave primaria",
      "Una secret access key",
      "Uno user ID",
      "Una chiave secondaria"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "33eb8f1458dd",
    "explain": "Le Access Key (Access Key ID + Secret Access Key) sono credenziali per chiamate programmatiche all'API AWS. Best practice: ruotarle regolarmente e non incorporarle nel codice. Ogni utente IAM può avere al massimo 2 access key attive."
  },
  {
    "q": "Quali dei seguenti sono servizi di calcolo AWS? (Scegline due.)",
    "opts": [
      "Amazon Lightsail",
      "AWS Systems Manager",
      "AWS CloudFormation",
      "AWS Batch",
      "Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFormation",
      "Security"
    ],
    "id": "9eed16b4dcd4",
    "explain": "Amazon Lightsail offre server virtuali a prezzo mensile fisso per applicazioni semplici. Ideale per piccole imprese e sviluppatori che non necessitano della complessità AWS."
  },
  {
    "q": "Come può un'azienda separare per reparto i costi del traffico di rete, di Amazon EC2, di Amazon S3 e degli altri servizi AWS?",
    "opts": [
      "Aggiungere a ogni risorsa tag specifici del reparto",
      "Creare un VPC separato per ogni reparto",
      "Creare un account AWS separato per ogni reparto",
      "Usare AWS Organizations"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "VPC"
    ],
    "id": "7103976f7ed7",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è un vantaggio della fatturazione consolidata per gli account AWS?",
    "opts": [
      "L'accesso all'AWS Personal Health Dashboard",
      "Sconti sui volumi grazie all'utilizzo combinato",
      "Una maggiore sicurezza dell'account",
      "Un AWS IAM centralizzato"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ],
    "id": "0c926a3e9fa1",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Quale servizio AWS permette a un utente di impostare limiti personalizzati di costo e di utilizzo, e invia un avviso quando le soglie vengono superate?",
    "opts": [
      "AWS Organizations",
      "AWS Budgets",
      "Cost Explorer",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "3616bf45d15c",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Quale servizio AWS offre la possibilità di rilevare fughe involontarie di dati personali identificativi (PII) e di credenziali degli utenti?",
    "opts": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Shield"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "a7f89d0c7ecb",
    "explain": "Amazon Macie scopre e protegge dati sensibili (PII) in S3 usando ML. Genera avvisi per dati non protetti e monitora accessi anomali. Utile per conformità GDPR e HIPAA."
  },
  {
    "q": "Quale strumento può essere usato per monitorare i limiti dei servizi AWS?",
    "opts": [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Trusted Advisor",
      "AWS Personal Health Dashboard",
      "AWS Cost and Usage Report"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "e7fd42a184bc",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Un'azienda ha distribuito il proprio carico di lavoro sia sul cloud AWS sia su alcuni server on-premises. Che tipo di architettura è questa?",
    "opts": [
      "Rete privata virtuale (VPN)",
      "Virtual private cloud",
      "Cloud ibrido",
      "Cloud privato"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "23cf1cd90144"
  },
  {
    "q": "Quale delle seguenti descrive una best practice di sicurezza che può essere implementata con AWS IAM?",
    "opts": [
      "Disabilitare l'accesso alla AWS Management Console per tutti gli utenti",
      "Generare chiavi segrete per ogni utente IAM",
      "Concedere i permessi solo agli utenti che devono svolgere una determinata attività",
      "Conservare le credenziali AWS all'interno delle istanze Amazon EC2"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ],
    "id": "d0afde3d8b7b",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Cosa può essere usato per automatizzare e gestire ambienti AWS multi-account sicuri e ben progettati?",
    "opts": [
      "Il modello di responsabilità condivisa di AWS",
      "AWS Control Tower",
      "AWS Security Hub",
      "AWS Well-Architected Tool"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected",
      "Shared Responsibility"
    ],
    "id": "ebffeb51c791",
    "explain": "AWS Control Tower automatizza la configurazione di un ambiente multi-account sicuro con guardrail preventivi e detective. Semplifica la governance centralizzata."
  },
  {
    "q": "Quale servizio o funzionalità AWS permette a un utente di scalare facilmente la connettività tra migliaia di VPC?",
    "opts": [
      "VPC peering",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "AWS Global Accelerator"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "0c781ca9feb5",
    "explain": "AWS Transit Gateway è un hub che semplifica la connettività tra VPC e reti on-premise con un modello hub-and-spoke. Connette fino a 5000 VPC eliminando peering mesh complesse."
  },
  {
    "q": "Un'azienda ha bisogno di protezione da attacchi distributed denial of service (DDoS) di ampia portata sul suo sito web, e dell'assistenza degli esperti AWS durante questi eventi. Quale servizio gestito AWS soddisfa questi requisiti?",
    "opts": [
      "AWS Shield Advanced",
      "AWS Firewall Manager",
      "AWS WAF",
      "Amazon GuardDuty"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ],
    "id": "d016b8b1dbe5",
    "explain": "AWS Shield protegge le applicazioni dagli attacchi DDoS. Shield Standard è gratuito e automatico. Shield Advanced protegge EC2, ELB, CloudFront e Route 53 con supporto 24/7 del DDoS Response Team."
  },
  {
    "q": "L'applicazione di un'azienda ha orari di inizio e fine flessibili. Quale modello di prezzo di Amazon EC2 sarà il PIÙ conveniente?",
    "opts": [
      "Istanze On-Demand",
      "Istanze Spot",
      "Istanze Reserved",
      "Dedicated Hosts"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "ea7f8ed39f5b",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quali sono le responsabilità del cliente? (Scegline due.)",
    "opts": [
      "La sicurezza fisica e ambientale",
      "I dispositivi di rete fisici, compresi i firewall",
      "La dismissione dei dispositivi di storage",
      "La sicurezza dei dati in transito",
      "L'autenticazione dell'integrità dei dati"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "b30df319972c",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Un cloud practitioner ha un carico di lavoro di analisi dei dati che viene eseguito raramente e può essere interrotto senza danni. Per ottimizzare i costi, quale opzione di acquisto di Amazon EC2 dovrebbe essere usata?",
    "opts": [
      "Istanze On-Demand",
      "Istanze Reserved",
      "Istanze Spot",
      "Dedicated Hosts"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "6a5860d68d71",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale servizio AWS per container aiuterà un utente a installare, gestire e scalare l'infrastruttura di gestione del cluster?",
    "opts": [
      "Amazon Elastic Container Registry (Amazon ECR)",
      "AWS Elastic Beanstalk",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate",
      "Storage"
    ],
    "id": "347c554a72b4",
    "explain": "Amazon ECS è un servizio di orchestrazione container gestito che supporta Docker. Si integra con IAM, CloudWatch e Load Balancer. Può usare EC2 o Fargate come infrastruttura."
  },
  {
    "q": "Quale dei seguenti permette a un'applicazione in esecuzione su un'istanza Amazon EC2 di scrivere dati in modo sicuro in un bucket Amazon S3 senza usare credenziali a lungo termine?",
    "opts": [
      "Amazon Cognito",
      "AWS Shield",
      "Ruolo AWS IAM",
      "Chiave di accesso di un utente AWS IAM"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "IAM",
      "Security"
    ],
    "id": "17866a9db057",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Un'azienda con un piano AWS Support di livello Developer ha predisposto un database Amazon RDS e non riesce a collegarsi. Chi dovrebbe contattare lo sviluppatore con questo livello di supporto?",
    "opts": [
      "L'AWS Support, aprendo un caso di supporto",
      "Gli AWS Professional Services",
      "Il technical account manager AWS",
      "I consulting partner AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Support"
    ],
    "id": "2c3663e8cfb0",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Qual è lo scopo di avere un internet gateway in un VPC?",
    "opts": [
      "Creare una connessione VPN verso il VPC",
      "Permettere la comunicazione tra il VPC e Internet",
      "Imporre limiti di banda al traffico Internet",
      "Bilanciare il traffico da Internet tra le istanze Amazon EC2"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ],
    "id": "bfab229009dd",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Un'azienda deve garantire che l'endpoint di un'istanza di database resti lo stesso dopo un'interruzione del servizio in una singola Availability Zone. L'applicazione deve riprendere le operazioni sul database senza bisogno di interventi manuali dell'amministratore. Come si possono soddisfare questi requisiti?",
    "opts": [
      "Usare più route di Amazon Route 53 verso l'endpoint dell'istanza di database di riserva ospitata su AWS Storage Gateway.",
      "Configurare distribuzioni Amazon RDS Multi-Availability Zone con failover automatico sull'istanza di riserva.",
      "Aggiungere più Application Load Balancer e distribuire l'istanza di database con AWS Elastic Beanstalk.",
      "Distribuire un singolo Network Load Balancer per ripartire il traffico in entrata su più origini Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "CloudFront",
      "Route 53",
      "Storage"
    ],
    "id": "84b2fde12522",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità. Una sola AZ non sufficiente per workload critici."
  },
  {
    "q": "Quale servizio gestito AWS può essere usato per distribuire il traffico tra una o più istanze Amazon EC2?",
    "opts": [
      "NAT gateway",
      "Elastic Load Balancing",
      "Amazon Athena",
      "AWS PrivateLink"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Analytics"
    ],
    "id": "7b56b73cca81",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più istanze EC2 in più Availability Zones. Rileva istanze non sane ed escludendole aumenta la disponibilità. Supporta Application (HTTP/HTTPS), Network (TCP/UDP) e Classic Load Balancer."
  },
  {
    "q": "AWS Trusted Advisor fornisce raccomandazioni su quali dei seguenti aspetti? (Scegline due.)",
    "opts": [
      "Ottimizzazione dei costi",
      "Audit",
      "Architettura serverless",
      "Prestazioni",
      "Scalabilità"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Support",
      "Well-Architected"
    ],
    "id": "c2a7a147eb7f",
    "explain": "Il pillar Cost Optimization del Well-Architected Framework evita costi non necessari. Include eliminazione delle risorse inutilizzate, uso di Reserved Instance/Savings Plans e dimensionamento corretto."
  },
  {
    "q": "Quali delle seguenti attività possono essere svolte solo dopo aver effettuato l'accesso con le credenziali dell'utente root dell'account AWS? (Scegline due.)",
    "opts": [
      "Chiudere un account AWS",
      "Creare una nuova policy IAM",
      "Cambiare piano di AWS Support",
      "Collegare un ruolo a un'istanza Amazon EC2",
      "Generare chiavi di accesso per gli utenti IAM"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support"
    ],
    "id": "ff3dde81e4e1",
    "explain": "L'account root AWS ha accesso illimitato e non può essere limitato da policy IAM. Best practice: non usarlo per operazioni quotidiane, abilitare MFA, eliminare le access key root, creare utenti IAM con permessi specifici. Usarlo solo per task che lo richiedono esplicitamente."
  },
  {
    "q": "La tolleranza ai guasti (fault tolerance) indica:",
    "opts": [
      "la capacità di un'applicazione di sostenere la crescita senza cambiare progettazione",
      "quanto bene e quanto in fretta si possono ripristinare i dati persi nell'ambiente di un'applicazione",
      "quanto è sicura la tua applicazione",
      "la ridondanza integrata dei componenti di un'applicazione"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "d8ae741df686",
    "explain": "La fault tolerance è la capacità di continuare a funzionare con guasti di componenti. Si implementa con ridondanza multi-AZ, Auto Scaling ed ELB. Il principio 'design for failure' è fondamentale: assumere che ogni componente possa fallire."
  },
  {
    "q": "Un'azienda cerca una soluzione di data warehouse scalabile. Quale delle seguenti soluzioni AWS soddisfa le sue esigenze?",
    "opts": [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Analytics"
    ],
    "id": "55b40eade4b4",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Quale affermazione descrive meglio Elastic Load Balancing?",
    "opts": [
      "Traduce un nome di dominio in un indirizzo IP usando il DNS.",
      "Distribuisce il traffico applicativo in entrata su una o più istanze Amazon EC2.",
      "Raccoglie metriche sulle istanze Amazon EC2 collegate.",
      "Regola automaticamente il numero di istanze Amazon EC2 per sostenere il traffico in entrata."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch"
    ],
    "id": "463e0a7f3cdd-2"
  },
  {
    "q": "Quali dei seguenti sono modi validi con cui un cliente può interagire con i servizi AWS? (Scegline DUE.)",
    "opts": [
      "Interfaccia a riga di comando",
      "On-premises",
      "Software Development Kit",
      "Software-as-a-service",
      "Ibrido"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "737715ba517f"
  },
  {
    "q": "Le molte Regioni del cloud AWS sono un esempio di:",
    "opts": [
      "agilità.",
      "infrastruttura globale.",
      "elasticità.",
      "prezzi pay-as-you-go (a consumo)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "8e5b77ea114a",
    "explain": "L'infrastruttura globale AWS è composta da Regioni, Availability Zone ed Edge Location. Ci sono più edge location che AZ, e più AZ che Regioni. Garantisce alta disponibilità, bassa latenza globale e resilienza."
  },
  {
    "q": "Quali dei seguenti servizi AWS possono essere usati per distribuire grandi quantità di contenuti video online con la latenza più bassa possibile? (Scegline DUE.)",
    "opts": [
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon Elastic File System (EFS)",
      "Amazon Glacier",
      "Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ],
    "id": "c4917a339e5a",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Dei web server in esecuzione su Amazon EC2 accedono a un'applicazione legacy che gira in un data center aziendale. Quale termine descrive questo modello?",
    "opts": [
      "Cloud-native",
      "Rete di partner",
      "Architettura ibrida",
      "Infrastructure as a service"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "f6ffa2fbf26a",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti servizi legati alla sicurezza offre AWS? (Scegline DUE.)",
    "opts": [
      "Token fisici di autenticazione a più fattori",
      "Controlli di sicurezza di AWS Trusted Advisor",
      "Cifratura dei dati",
      "Penetration test automatici",
      "Rilevamento di contenuti protetti da copyright in Amazon S3"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Support"
    ],
    "id": "137920b94df0",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali dei seguenti servizi potrebbero essere usati per distribuire un'applicazione su server on-premises? (Scegline DUE.)",
    "opts": [
      "AWS Elastic Beanstalk",
      "AWS OpsWorks",
      "AWS CodeDeploy",
      "AWS Batch",
      "AWS X-Ray"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "3b65e46f4775",
    "explain": "AWS OpsWorks gestisce la configurazione usando Chef e Puppet per automatizzare provisioning e gestione di server. È la scelta per team che già usano Chef o Puppet."
  },
  {
    "q": "Quali principi di progettazione dell'architettura cloud sono consigliati quando si riprogetta una grande applicazione monolitica? (Scegline DUE.)",
    "opts": [
      "Usare il monitoraggio manuale.",
      "Usare server fissi.",
      "Implementare l'accoppiamento debole (loose coupling).",
      "Affidarsi a singoli componenti.",
      "Progettare per la scalabilità."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch"
    ],
    "id": "1867c5fee706",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Quale servizio AWS fornisce una vista personalizzata dello stato di salute dei servizi AWS specifici su cui si basano i carichi di lavoro di un cliente in esecuzione su AWS?",
    "opts": [
      "AWS Service Health Dashboard",
      "AWS X-Ray",
      "AWS Personal Health Dashboard",
      "Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "fdf854c5b51d",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Quali dei seguenti strumenti può usare un cliente AWS per avviare un nuovo cluster Amazon Relational Database Service (Amazon RDS)? (Scegline DUE.)",
    "opts": [
      "AWS Concierge",
      "AWS CloudFormation",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon EC2 Auto Scaling",
      "AWS Management Console"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "CloudFormation",
      "Support"
    ],
    "id": "c193da8ee27c",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Quali delle seguenti misure di sicurezza proteggono l'accesso a un account AWS? (Scegline DUE.)",
    "opts": [
      "Abilitare AWS CloudTrail.",
      "Concedere agli utenti IAM l'accesso con privilegio minimo.",
      "Creare un unico utente IAM e condividerlo tra molti sviluppatori e utenti.",
      "Abilitare Amazon CloudFront.",
      "Attivare l'autenticazione a più fattori (MFA) per gli utenti privilegiati."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFront"
    ],
    "id": "3fed72b424b2",
    "explain": "La Multi-Factor Authentication (MFA) aggiunge un secondo livello di sicurezza oltre alla password. Supporta app virtuali, hardware token e U2F Key. È best practice fondamentale specialmente per l'account root."
  },
  {
    "q": "Quale dei seguenti è un componente del modello di responsabilità condivisa gestito interamente da AWS?",
    "opts": [
      "Applicare le patch al software del sistema operativo",
      "Cifrare i dati",
      "Imporre l'autenticazione a più fattori",
      "Verificare (audit) le risorse fisiche dei data center"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "390a6d358fd3",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quali opzioni mette a disposizione AWS per i clienti che vogliono imparare la sicurezza nel cloud con un istruttore? (Scegline DUE.)",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Online Tech Talks",
      "AWS Blog",
      "AWS Forums",
      "AWS Classroom Training"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "585833444a80",
    "explain": "AWS mette a disposizione gratuitamente numerose risorse di sicurezza e formazione: documentazione ufficiale, whitepaper, blog AWS, Security Bulletins, AWS Online Tech Talks e forum della community. Queste risorse sono accessibili a tutti i clienti indipendentemente dal piano Support. Per supporto tecnico diretto invece è necessario un piano a pagamento."
  },
  {
    "q": "Quali delle seguenti funzionalità possono essere configurate dalla dashboard di Amazon Virtual Private Cloud (Amazon VPC)? (Scegline DUE.)",
    "opts": [
      "Distribuzioni Amazon CloudFront",
      "Amazon Route 53",
      "Security group",
      "Subnet",
      "Elastic Load Balancing"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Route 53"
    ],
    "id": "f0b40f83d2cb",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Cosa aiuterà un'azienda a fare un'analisi costi-benefici della migrazione nel cloud AWS?",
    "opts": [
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "c15a0b8a152f",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quale dei seguenti permette di condividere tra account AWS i vantaggi economici delle Istanze Reserved?",
    "opts": [
      "AWS Cost Explorer tra account AWS",
      "Account collegati e fatturazione consolidata",
      "Report di utilizzo delle Istanze Reserved di Amazon Elastic Compute Cloud (Amazon EC2)",
      "Report di utilizzo delle istanze Amazon EC2 tra account AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "d3323f76ac87",
    "explain": "Il Consolidated Billing di Organizations riceve un'unica fattura per tutti gli account e beneficia di sconti volume cumulativi. L'account pagante paga tutte le fatture degli account figlio."
  },
  {
    "q": "Un'azienda ha più account AWS e vuole semplificare e consolidare il processo di fatturazione. Quale servizio AWS lo permette?",
    "opts": [
      "AWS Cost and Usage Reports",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "0e579b17dbab",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Un'azienda sta progettando un'applicazione ospitata in una singola Regione AWS, che serve utenti finali sparsi in tutto il mondo. L'azienda vuole offrire agli utenti finali un accesso a bassa latenza ai dati dell'applicazione. Quale dei seguenti servizi aiuterà a soddisfare questo requisito?",
    "opts": [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "DNS globale di Amazon Route 53",
      "Transfer Acceleration di Amazon Simple Storage Service (Amazon S3)"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Route 53",
      "Networking"
    ],
    "id": "9611bfa39187",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale dei seguenti modelli di distribuzione permette ai clienti di sostituire completamente le spese IT in conto capitale con spese operative?",
    "opts": [
      "On-premises",
      "Ibrido",
      "Cloud",
      "Platform as a service"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "b09a1e77989b"
  },
  {
    "q": "Perché la gestione degli asset su AWS è più facile della gestione degli asset in un data center fisico?",
    "opts": [
      "AWS fornisce un Configuration Management Database che gli utenti possono mantenere.",
      "AWS esegue scansioni di individuazione dell'infrastruttura per conto del cliente.",
      "Amazon EC2 genera automaticamente un report degli asset e lo mette nel bucket Amazon S3 indicato dal cliente.",
      "Gli utenti possono raccogliere in modo affidabile i metadati degli asset con poche chiamate API."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3"
    ],
    "id": "ea19b805c93c"
  },
  {
    "q": "Quale funzionalità di Amazon RDS aiuta a creare database ridondanti a livello globale?",
    "opts": [
      "Snapshot",
      "Applicazione automatica di patch e aggiornamenti",
      "Read Replica tra Regioni (Cross-Region)",
      "Provisioned IOPS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "21bc799315cb",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Usare AWS Identity and Access Management (IAM) per concedere l'accesso solo alle risorse necessarie a svolgere un'attività è un concetto noto come:",
    "opts": [
      "accesso limitato.",
      "accesso secondo necessità.",
      "accesso con privilegio minimo.",
      "accesso tramite token."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "acb7d1e65175",
    "explain": "Il principio del Least Privilege richiede di concedere agli utenti solo i permessi strettamente necessari. Riduce il rischio in caso di compromissione delle credenziali. Si implementa con policy IAM granulari revisionate periodicamente."
  },
  {
    "q": "Quali metodi possono essere usati per individuare i costi AWS per reparto? (Scegline due.)",
    "opts": [
      "Abilitare l'autenticazione a più fattori per l'utente root dell'account AWS.",
      "Creare account separati per ogni reparto.",
      "Usare le Istanze Reserved quando possibile.",
      "Usare i tag per associare ogni istanza a un determinato reparto.",
      "Pagare le fatture tramite ordini di acquisto."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "1cd987f0439a"
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quale delle seguenti rientra tra le responsabilità del cliente?",
    "opts": [
      "Proteggere hardware, software, strutture e reti su cui girano tutti i prodotti e servizi.",
      "Fornire certificati, report e altra documentazione direttamente ai clienti AWS sotto NDA.",
      "Configurare il sistema operativo, la rete e il firewall.",
      "Ottenere certificazioni di settore e attestazioni indipendenti di terze parti."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "3beac27881df",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio gestito AWS fornisce indicazioni in tempo reale sulle best practice di sicurezza di AWS?",
    "opts": [
      "AWS X-Ray",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "4f0a834c9f6a",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale funzionalità aggiunge elasticità alle istanze Amazon EC2 per gestire la domanda variabile dei carichi di lavoro?",
    "opts": [
      "Resource group",
      "Lifecycle policy",
      "Application Load Balancer",
      "Amazon EC2 Auto Scaling"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "62ff6a3c4796",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, di quali aspetti della sicurezza nel cloud sono responsabili i clienti? (Scegline due.)",
    "opts": [
      "Gestione della virtualizzazione",
      "Gestione dell'hardware",
      "Gestione della cifratura",
      "Gestione delle strutture (facilities)",
      "Gestione del firewall"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Security",
      "Shared Responsibility"
    ],
    "id": "95dc3e01738c",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio di storage ibrido AWS permette alle applicazioni on-premises di usare lo storage del cloud AWS in modo trasparente tramite i protocolli standard di file storage?",
    "opts": [
      "AWS Direct Connect",
      "AWS Snowball",
      "AWS Storage Gateway",
      "AWS Snowball Edge"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage",
      "Networking"
    ],
    "id": "80bd802299f3",
    "explain": "AWS Storage Gateway connette ambienti on-premise con lo storage AWS. Offre File Gateway (S3), Volume Gateway (EBS) e Tape Gateway (Glacier). Estende il data center con storage cloud senza modificare le applicazioni."
  },
  {
    "q": "Qual è una responsabilità di AWS nel modello di responsabilità condivisa?",
    "opts": [
      "Aggiornare le network ACL per bloccare il traffico verso le porte vulnerabili.",
      "Applicare le patch ai sistemi operativi in esecuzione sulle istanze Amazon EC2.",
      "Aggiornare il firmware degli host EC2 sottostanti.",
      "Aggiornare le regole dei security group per bloccare il traffico verso le porte vulnerabili."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Shared Responsibility"
    ],
    "id": "83af84458845",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale principio architetturale si applica quando si distribuisce un'istanza Amazon Relational Database Service (Amazon RDS) in modalità Multi-Availability Zone?",
    "opts": [
      "Implementare l'accoppiamento debole.",
      "Progettare per i guasti.",
      "Automatizzare tutto ciò che può essere automatizzato.",
      "Usare servizi, non server."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "a88b6cba5093",
    "explain": "Il principio 'Design for failure' prevede di progettare sistemi assumendo che ogni componente possa fallire. Si implementa con ridondanza multi-AZ, health check e Auto Scaling. Un sistema progettato per il fallimento è più resiliente e disponibile."
  },
  {
    "q": "Cosa significa concedere il privilegio minimo agli utenti AWS IAM?",
    "opts": [
      "Concedere permessi a un solo utente.",
      "Concedere permessi usando solo policy AWS IAM.",
      "Concedere i permessi della policy AdministratorAccess agli utenti affidabili.",
      "Concedere solo i permessi necessari a svolgere una determinata attività."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "d041fb2b56ae",
    "explain": "Il principio del Least Privilege richiede di concedere agli utenti solo i permessi strettamente necessari. Riduce il rischio in caso di compromissione delle credenziali. Si implementa con policy IAM granulari revisionate periodicamente."
  },
  {
    "q": "Qual è un vantaggio dell'accoppiamento debole come principio di progettazione dell'architettura cloud?",
    "opts": [
      "Facilita la gestione delle richieste a bassa latenza.",
      "Permette alle applicazioni di avere flussi di lavoro dipendenti.",
      "Impedisce i guasti a cascata tra componenti diversi.",
      "Permette alle aziende di concentrarsi sulle operazioni del proprio data center fisico."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "bd7d3240eca7",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Un direttore ha il compito di studiare un'architettura di cloud ibrido. Attualmente l'azienda accede ad AWS tramite la rete Internet pubblica. Quale servizio faciliterà una connettività ibrida privata?",
    "opts": [
      "NAT Gateway di Amazon Virtual Private Cloud (Amazon VPC)",
      "AWS Direct Connect",
      "Transfer Acceleration di Amazon Simple Storage Service (Amazon S3)",
      "AWS Web Application Firewall (AWS WAF)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Security",
      "Networking"
    ],
    "id": "a877f7bd88fe",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "L'applicazione web di un'azienda ha attualmente dipendenze strette dai componenti sottostanti, quindi quando un componente si guasta si blocca l'intera applicazione web. Applicare quale principio di progettazione del cloud AWS risolverà questo problema?",
    "opts": [
      "Implementare l'elasticità, permettendo all'applicazione di scalare in su o in giù al variare della domanda.",
      "Far girare diverse istanze EC2 in parallelo per ottenere prestazioni migliori.",
      "Puntare sul disaccoppiamento dei componenti, isolandoli e assicurando che i singoli componenti possano funzionare quando altri componenti si guastano.",
      "Raddoppiare le risorse di calcolo EC2 per aumentare la tolleranza ai guasti del sistema."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "a29485dd2ebd"
  },
  {
    "q": "Come può un cliente aumentare la sicurezza degli accessi all'account AWS? (Scegline due.)",
    "opts": [
      "Configurare AWS Certificate Manager",
      "Abilitare l'autenticazione a più fattori (MFA)",
      "Usare Amazon Cognito per gestire gli accessi",
      "Configurare una policy delle password robusta",
      "Abilitare AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Security"
    ],
    "id": "7bab10044cc8",
    "explain": "Le policy di password IAM definiscono i requisiti per le password degli utenti AWS: lunghezza minima, complessità, scadenza e riuso. Permettono agli amministratori di imporre standard di sicurezza. Si configurano nella console IAM e si applicano a tutti gli utenti dell'account."
  },
  {
    "q": "Quale servizio AWS verrebbe usato per gestire in modo centralizzato l'accesso AWS su più account?",
    "opts": [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "58b884016100",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale servizio AWS può usare un cliente per impostare una notifica di avviso quando l'account si avvicina a un certo importo in dollari?",
    "opts": [
      "AWS Cost and Usage Reports",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "ea19a19053ae",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Qual è il piano AWS Support MINIMO che offre Technical Account Manager designati?",
    "opts": [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "da0d652bc422",
    "explain": "AWS offre quattro piani: Basic (gratuito), Developer ($29/mese), Business ($100/mese, 24/7, < 1h per critici) ed Enterprise ($15.000/mese, TAM dedicato, < 15 min per critici). Business è il minimo per produzione."
  },
  {
    "q": "Quale dei seguenti è un principio di progettazione dell'AWS Well-Architected Framework legato all'affidabilità?",
    "opts": [
      "La distribuzione in una singola Availability Zone",
      "La capacità di riprendersi dai guasti",
      "Progettare per l'ottimizzazione dei costi",
      "Eseguire le operazioni come codice"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "5ac7c556997c",
    "explain": "Il AWS Well-Architected Framework fornisce best practice su sei pillar: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability. Well-Architected Tool valuta le architetture."
  },
  {
    "q": "Quale tipo di storage AWS è effimero e viene cancellato quando un'istanza viene arrestata o terminata?",
    "opts": [
      "Amazon EBS",
      "Instance store di Amazon EC2",
      "Amazon EFS",
      "Amazon S3"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ],
    "id": "8058e4b9bf8a",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Qual è un vantaggio dell'uso del cloud AWS rispetto a una soluzione on-premises tradizionale?",
    "opts": [
      "Gli utenti non devono indovinare il fabbisogno di capacità futuro.",
      "Gli utenti possono usare i contratti hardware esistenti per gli acquisti.",
      "Gli utenti possono fissare i costi qualunque sia il loro traffico.",
      "Gli utenti possono evitare gli audit usando i report di AWS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "62678a1a543c"
  },
  {
    "q": "Quale dei seguenti è un principio architetturale importante nella progettazione di applicazioni cloud?",
    "opts": [
      "Conservare dati e backup nella stessa Regione.",
      "Progettare componenti di sistema strettamente accoppiati.",
      "Evitare il multi-threading.",
      "Progettare per i guasti"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "9ecbe7969861",
    "explain": "Il principio 'Design for failure' prevede di progettare sistemi assumendo che ogni componente possa fallire. Si implementa con ridondanza multi-AZ, health check e Auto Scaling. Un sistema progettato per il fallimento è più resiliente e disponibile."
  },
  {
    "q": "Quale modello di prezzo di Amazon EC2 è il PIÙ conveniente per un carico di lavoro non interrompibile che gira una volta l'anno per 24 ore?",
    "opts": [
      "Istanze On-Demand",
      "Istanze Reserved",
      "Istanze Spot",
      "Istanze Dedicated"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "834a02449997",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale dei seguenti servizi è un database compatibile con MySQL che aumenta automaticamente lo storage quando serve?",
    "opts": [
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon Relational Database Service (Amazon RDS) for MySQL",
      "Amazon Lightsail",
      "Amazon Aurora"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "169c603d0b8b",
    "explain": "Amazon Aurora è un database relazionale compatibile MySQL/PostgreSQL con performance fino a 5x superiori a MySQL. Replica su 3 zone con 6 copie e si recupera automaticamente dai guasti. Aurora Serverless scala la capacità automaticamente."
  },
  {
    "q": "Quale funzionalità di Amazon Virtual Private Cloud (Amazon VPC) permette agli utenti di collegare tra loro due VPC?",
    "opts": [
      "Endpoint Amazon VPC",
      "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink",
      "Amazon VPC peering",
      "AWS Direct Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Networking"
    ],
    "id": "3470a1592f32",
    "explain": "VPC Peering instrada il traffico privatamente tra VPC usando IP privati. Funziona tra account diversi e regioni diverse. Il peering non è transitivo."
  },
  {
    "q": "Quale servizio ha come scopo PRINCIPALE il controllo di versione del software?",
    "opts": [
      "Amazon CodeStar",
      "AWS Command Line Interface (AWS CLI)",
      "Amazon Cognito",
      "AWS CodeCommit"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "157b2a725032",
    "explain": "AWS CodeCommit è un servizio Git privato e gestito. Si integra con IAM e CodePipeline per CI/CD."
  },
  {
    "q": "Un'azienda sta valutando di migrare le sue applicazioni su AWS. Vuole confrontare il costo di eseguire il carico di lavoro on-premises con quello di eseguire un carico di lavoro equivalente sulla piattaforma AWS. Quale strumento può essere usato per questo confronto?",
    "opts": [
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Console di AWS Billing and Cost Management",
      "Cost Explorer"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "42d8cf229238",
    "explain": "Il AWS Total Cost of Ownership Calculator confronta i costi AWS con i data center on-premise. Considera hardware, facility e personale IT. Aiuta a giustificare la migrazione al cloud."
  },
  {
    "q": "Quale servizio AWS offre un modo sicuro, veloce e conveniente per migrare o trasportare in AWS dataset su scala exabyte?",
    "opts": [
      "AWS Batch",
      "AWS Snowball",
      "AWS Migration Hub",
      "AWS Snowmobile"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "id": "17344b034a26",
    "explain": "AWS Snowmobile trasferisce fino a 100 petabyte usando un container trasportato da camion. Ideale per migrazioni complete di data center a livello exabyte."
  },
  {
    "q": "Quali delle seguenti descrivono MEGLIO il modello di prezzo di AWS? (Scegline due.)",
    "opts": [
      "A durata fissa",
      "Pay-as-you-go (a consumo)",
      "Colocation",
      "Pianificato",
      "Costo variabile"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "id": "0287a80af759",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Quali tipi di load balancer sono disponibili con Elastic Load Balancing (ELB)? (Scegline due.)",
    "opts": [
      "Load balancer pubblici con funzionalità di AWS Application Auto Scaling",
      "Load balancer F5 Big-IP e Citrix NetScaler",
      "Classic Load Balancer",
      "Load balancer cross-zone con IP pubblici e privati",
      "Application Load Balancer"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "98e586742dcf",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più istanze EC2 in più Availability Zones. Rileva istanze non sane ed escludendole aumenta la disponibilità. Supporta Application (HTTP/HTTPS), Network (TCP/UDP) e Classic Load Balancer."
  },
  {
    "q": "Perché un'azienda dovrebbe scegliere AWS invece di un data center tradizionale?",
    "opts": [
      "AWS dà agli utenti il controllo completo sulle risorse sottostanti.",
      "AWS non richiede contratti a lungo termine e offre un modello pay-as-you-go (a consumo).",
      "AWS offre edge location in ogni paese, garantendo una portata globale.",
      "AWS non ha limiti sul numero di risorse che si possono creare."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "66bd47f18e6b",
    "explain": "Il modello pay-as-you-go elimina l'acquisto di hardware in anticipo: si paga solo per le risorse usate. Converte CapEx in OpEx variabile e permette di scalare in base alla domanda reale senza sprechi."
  },
  {
    "q": "Quale soluzione offre i tempi di risposta dell'applicazione PIÙ RAPIDI per i dati letti spesso, agli utenti in più Regioni AWS?",
    "opts": [
      "AWS CloudTrail su più Availability Zone",
      "Amazon CloudFront verso le edge location",
      "AWS CloudFormation in più Regioni",
      "Un virtual private gateway su AWS Direct Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Networking"
    ],
    "id": "1528fdfc6144",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale servizio AWS fornisce un portale self-service per accedere su richiesta ai report di conformità di AWS?",
    "opts": [
      "AWS Config",
      "AWS Certificate Manager",
      "Amazon Inspector",
      "AWS Artifact"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security"
    ],
    "id": "39951896ab33",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quale dei seguenti servizi AWS può essere usato per eseguire un database autogestito?",
    "opts": [
      "Amazon Route 53",
      "AWS X-Ray",
      "AWS Snowmobile",
      "Amazon Elastic Compute Cloud (Amazon EC2)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "Storage"
    ],
    "id": "e71b0e33ab6c",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale vantaggio esclusivo è riservato agli utenti con Enterprise Support?",
    "opts": [
      "L'accesso a un Technical Project Manager",
      "L'accesso a un Technical Account Manager",
      "L'accesso a un Cloud Support Engineer",
      "L'accesso a un Solutions Architect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "38edf450f54c",
    "explain": "Il Technical Account Manager (TAM) è un consulente AWS dedicato incluso nel piano Enterprise Support. Fornisce supporto proattivo, revisioni architetturali e accesso prioritario agli esperti AWS."
  },
  {
    "q": "In che modo AWS riduce nel modo PIÙ efficace i costi di calcolo di una startup in crescita?",
    "opts": [
      "Fornisce risorse on-demand per i picchi di utilizzo.",
      "Automatizza la predisposizione degli ambienti dei singoli sviluppatori.",
      "Automatizza la gestione delle relazioni con i clienti.",
      "Applica un budget di calcolo mensile fisso."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "2b5af6594531"
  },
  {
    "q": "Una startup sta lavorando a una nuova applicazione che deve arrivare rapidamente sul mercato. I requisiti dell'applicazione potrebbero dover cambiare a breve. Quale delle seguenti caratteristiche del cloud AWS soddisfa questa esigenza specifica?",
    "opts": [
      "Elasticità",
      "Affidabilità",
      "Prestazioni",
      "Agilità"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "2cbe7fd88da7",
    "explain": "L'agilità di AWS riduce il tempo per ottenere risorse IT da settimane a minuti. Accelera i cicli di sviluppo e permette di sperimentare rapidamente a basso costo. Le aziende possono innovare e rispondere al mercato molto più velocemente."
  },
  {
    "q": "Quale piano AWS Support offre l'insieme completo dei controlli di AWS Trusted Advisor?",
    "opts": [
      "Business e Developer Support",
      "Business e Basic Support",
      "Enterprise e Developer Support",
      "Enterprise e Business Support"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "d3d1739d2ff0",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quali dei seguenti servizi hanno funzionalità di mitigazione degli attacchi Distributed Denial of Service (DDoS)? (Scegline due.)",
    "opts": [
      "AWS WAF",
      "Amazon DynamoDB",
      "Amazon EC2",
      "Amazon CloudFront",
      "Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "DynamoDB",
      "Security"
    ],
    "id": "cabe1222a507",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quando si costruisce un modello di costo totale di proprietà (TCO) per il cloud, quali voci di costo vanno considerate per i carichi di lavoro su AWS? (Scegline tre.)",
    "opts": [
      "Costi di calcolo",
      "Costi delle strutture (facilities)",
      "Costi di storage",
      "Costi di trasferimento dati",
      "Costi dell'infrastruttura di rete",
      "Costi del ciclo di vita dell'hardware"
    ],
    "a": 0,
    "correct": [
      0,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "f7be3901eba8"
  },
  {
    "q": "Quale servizio AWS aiuta a individuare attività malevole o non autorizzate negli account e nei carichi di lavoro AWS?",
    "opts": [
      "Amazon Rekognition",
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Security",
      "AI / ML",
      "Support"
    ],
    "id": "33ac104d9e49",
    "explain": "Amazon GuardDuty rileva minacce monitorando account e workload per attività malevole. Analizza CloudTrail, VPC Flow Logs e DNS usando ML e threat intelligence. Non richiede agent e non impatta le performance."
  },
  {
    "q": "Un'azienda vuole provare una soluzione di ecommerce di terze parti prima di decidere se usarla a lungo termine. Quale servizio o strumento AWS supporterà questa esigenza?",
    "opts": [
      "AWS Marketplace",
      "AWS Partner Network (APN)",
      "AWS Managed Services",
      "AWS Service Catalog"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "eb0a212d2751",
    "explain": "AWS Marketplace è un catalogo di software di terze parti per AWS. Permette di trovare, testare e acquistare software con un click, addebitando i costi sulla fattura AWS."
  },
  {
    "q": "Quale servizio AWS è un database NoSQL gestito?",
    "opts": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS for MariaDB"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "713ba57f80d4-2"
  },
  {
    "q": "Quale servizio AWS dovrebbe essere usato per creare un allarme di fatturazione?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "Amazon QuickSight"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost",
      "Analytics",
      "Support"
    ],
    "id": "7d492cf6a7b8",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Un'azienda ospita un'applicazione web in un container Docker su Amazon EC2. Di quale delle seguenti attività è responsabile AWS?",
    "opts": [
      "Scalare l'applicazione web e i servizi sviluppati con Docker",
      "Predisporre o pianificare i container da eseguire sui cluster e mantenerne la disponibilità",
      "Eseguire la manutenzione dell'hardware nelle strutture AWS su cui gira il cloud AWS",
      "Gestire il sistema operativo guest, compresi aggiornamenti e patch di sicurezza"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "ECS / Fargate"
    ],
    "id": "047fab6227de",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Gli utenti segnalano latenza quando si collegano a un sito web con una clientela in tutto il mondo. Quale servizio AWS migliorerà l'esperienza dei clienti riducendo la latenza?",
    "opts": [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon EC2 Auto Scaling",
      "AWS Transit Gateway"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "Networking"
    ],
    "id": "eb6d42d70c50",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quali azioni rappresentano best practice nell'uso di AWS IAM? (Scegline due.)",
    "opts": [
      "Configurare una policy delle password robusta",
      "Condividere le credenziali di sicurezza tra gli utenti degli account AWS che si trovano nella stessa Regione",
      "Usare le chiavi di accesso per accedere alla AWS Management Console",
      "Ruotare (cambiare) regolarmente le chiavi di accesso",
      "Evitare di usare i ruoli IAM per delegare permessi"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "4a1044b81287",
    "explain": "Le policy di password IAM definiscono i requisiti per le password degli utenti AWS: lunghezza minima, complessità, scadenza e riuso. Permettono agli amministratori di imporre standard di sicurezza. Si configurano nella console IAM e si applicano a tutti gli utenti dell'account."
  },
  {
    "q": "Quale funzionalità o servizio AWS può essere usato per registrare informazioni sul traffico in entrata e in uscita in un'infrastruttura VPC su AWS?",
    "opts": [
      "AWS Config",
      "VPC Flow Logs",
      "AWS Trusted Advisor",
      "AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Support"
    ],
    "id": "84916f3cf983",
    "explain": "Amazon VPC permette di creare una rete virtuale isolata in AWS con controllo completo su IP, subnet, route e gateway. Subnet pubbliche usano Internet Gateway, quelle private NAT Gateway. Security Group e NACL controllano il traffico a livello di istanza e subnet."
  },
  {
    "q": "Un'azienda vuole usare un servizio AWS per monitorare lo stato di salute degli endpoint delle applicazioni, con la possibilità di instradare il traffico verso endpoint regionali sani per migliorare la disponibilità dell'applicazione. Quale servizio soddisfa questi requisiti?",
    "opts": [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS Global Accelerator",
      "Amazon CloudFront"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Security",
      "Networking"
    ],
    "id": "3e8c9a20804a",
    "explain": "AWS Global Accelerator instrada il traffico attraverso la rete backbone privata AWS. Usa IP anycast statici per dirigere gli utenti all'endpoint più vicino. Migliora disponibilità e performance per applicazioni globali."
  },
  {
    "q": "Secondo l'AWS Well-Architected Framework, quali passi di gestione delle modifiche vanno adottati per ottenere l'affidabilità nel cloud AWS? (Scegline due.)",
    "opts": [
      "Usare AWS Config per generare un inventario delle risorse AWS",
      "Usare i limiti dei servizi per impedire agli utenti di creare o modificare risorse AWS",
      "Usare AWS CloudTrail per registrare le chiamate API AWS in un file di log verificabile",
      "Usare AWS Certificate Manager per mettere in whitelist le risorse e i servizi AWS approvati",
      "Usare Amazon GuardDuty per convalidare le modifiche di configurazione apportate alle risorse AWS"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ],
    "id": "132de0bb64f5",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Quale servizio può essere usato per monitorare e ricevere avvisi sugli accessi dell'utente root dell'account AWS alla AWS Management Console?",
    "opts": [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS IAM"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "CloudWatch",
      "Support"
    ],
    "id": "132777a8fdf0",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quale principio di progettazione va considerato quando si progetta un'architettura nel cloud AWS?",
    "opts": [
      "Considerare i server come risorse non usa e getta",
      "Usare l'integrazione sincrona dei servizi",
      "Progettare componenti debolmente accoppiati",
      "Applicare le regole meno permissive per i security group"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ],
    "id": "1dcac21146c4",
    "explain": "Il principio di Loose Coupling (componenti debolmente accoppiati) prevede che i componenti di un'applicazione interagiscano tramite interfacce ben definite. Se un componente fallisce, gli altri continuano a funzionare indipendentemente. Riduce la propagazione dei guasti e permette scaling e aggiornamenti indipendenti."
  },
  {
    "q": "Quali servizi AWS possono essere usati per spostare dati dai data center on-premises ad AWS? (Scegline due.)",
    "opts": [
      "AWS Snowball",
      "AWS Lambda",
      "AWS ElastiCache",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon API Gateway"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Storage"
    ],
    "id": "603a2cfab3cf",
    "explain": "AWS Snowball è un dispositivo fisico per migrare grandi quantità di dati verso AWS senza usare internet. Ideale quando la migrazione via rete richiederebbe settimane. Snowball Edge aggiunge capacità di calcolo locale."
  },
  {
    "q": "Un carico di lavoro batch impiega 5 ore per terminare su un'istanza Amazon EC2. La quantità di dati da elaborare raddoppia ogni mese e il tempo di elaborazione cresce in proporzione. Qual è la migliore architettura cloud per gestire questa domanda in crescita costante?",
    "opts": [
      "Eseguire l'applicazione su un'istanza EC2 di dimensione maggiore.",
      "Passare a una famiglia di istanze EC2 più adatta ai requisiti batch.",
      "Distribuire l'applicazione su più istanze EC2 ed eseguire il carico di lavoro in parallelo.",
      "Eseguire l'applicazione su un'istanza EC2 bare metal."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "28894d7f66b9",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Ogni reparto di un'azienda ha il proprio account AWS indipendente e il proprio metodo di pagamento. La nuova direzione vuole centralizzare la governance dei reparti e consolidare i pagamenti. Come si può ottenere questo risultato con servizi o funzionalità AWS?",
    "opts": [
      "Inoltrare le fatture mensili di ogni account. Poi creare ruoli IAM per consentire l'accesso tra account.",
      "Creare un nuovo account AWS. Poi configurare AWS Organizations e invitare tutti gli account esistenti a farne parte.",
      "Configurare AWS Organizations in ciascuno degli account esistenti. Poi collegare tutti gli account tra loro.",
      "Usare Cost Explorer per sommare i costi di tutti gli account. Poi replicare le policy IAM tra gli account."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ],
    "id": "63e767226d22",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "La capacità di scalare in orizzontale le istanze Amazon EC2 in base alla domanda è un esempio di quale concetto della proposta di valore del cloud AWS?",
    "opts": [
      "Economia di scala",
      "Elasticità",
      "Alta disponibilità",
      "Agilità"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "9efeec46f275",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Un'azienda di ecommerce prevede un forte aumento del traffico web per due giornate di shopping molto popolari in arrivo. Quale servizio o funzionalità AWS può essere configurato per regolare dinamicamente le risorse in base a questo cambiamento della domanda?",
    "opts": [
      "AWS CloudTrail",
      "Amazon EC2 Auto Scaling",
      "Amazon Forecast",
      "AWS Config"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "b87bcdd878b1",
    "explain": "Amazon Auto Scaling regola automaticamente la capacità per mantenere performance stabili al costo minimo. Scala orizzontalmente aggiungendo o rimuovendo istanze EC2 in base a metriche come CPU o traffico."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di collegarsi in modo sicuro alle risorse AWS attraverso la rete Internet pubblica?",
    "opts": [
      "Amazon VPC peering",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Pinpoint"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "1162d100fc3a"
  },
  {
    "q": "Quale strumento si usa per prevedere la spesa AWS?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Organizations",
      "Cost Explorer",
      "Amazon Inspector"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ],
    "id": "13c91f5f1b54",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Un'azienda gestisce un'applicazione di ecommerce ospitata in Europa. Per ridurre la latenza degli utenti che accedono al sito da altre parti del mondo, vuole mettere in cache i contenuti statici letti più spesso più vicino agli utenti. Quale servizio AWS soddisfa questi requisiti?",
    "opts": [
      "Amazon ElastiCache",
      "Amazon CloudFront",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Storage"
    ],
    "id": "3c11456253e2",
    "explain": "Amazon CloudFront è una CDN globale con 400+ edge location per ridurre la latenza. Si integra con S3 e EC2 e protegge da DDoS tramite Shield. Supporta HTTPS e certificati SSL personalizzati."
  },
  {
    "q": "Quale servizio AWS aiuterà gli utenti a capire se un'applicazione in esecuzione su un'istanza Amazon EC2 ha abbastanza capacità di CPU?",
    "opts": [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "Security"
    ],
    "id": "2ab06080b778",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Perché è vantaggioso usare gli Elastic Load Balancer con le applicazioni?",
    "opts": [
      "Permettono la conversione da Application Load Balancer a Classic Load Balancer.",
      "Sono in grado di gestire i continui cambiamenti negli andamenti del traffico di rete.",
      "Regolano automaticamente la capacità.",
      "Sono forniti gratuitamente agli utenti."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "f7db82395903-2"
  },
  {
    "q": "Quali attività sono responsabilità del cliente nel modello di responsabilità condivisa di AWS? (Scegline due.)",
    "opts": [
      "La gestione degli accessi alle strutture dell'infrastruttura",
      "La gestione del ciclo di vita dell'hardware dell'infrastruttura cloud",
      "La gestione della configurazione delle applicazioni dell'utente",
      "La protezione dell'infrastruttura di rete",
      "La configurazione dei security group"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ],
    "id": "039e2ab65116",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "I sistemi IT dovrebbero essere progettati per ridurre le interdipendenze, così che una modifica o un guasto in un componente non si propaghi a cascata agli altri. Questo è un esempio di quale principio di progettazione dell'architettura cloud?",
    "opts": [
      "Scalabilità",
      "Accoppiamento debole (loose coupling)",
      "Automazione",
      "Scalabilità automatica"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "85c23d60d227",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Quale servizio o funzionalità AWS può migliorare la sicurezza di rete bloccando le richieste provenienti da una determinata rete verso un'applicazione web su AWS? (Scegline due.)",
    "opts": [
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Direct Connect",
      "AWS Organizations",
      "Network ACL"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Security",
      "Networking",
      "Support"
    ],
    "id": "d664157a52ba",
    "explain": "AWS WAF protegge le applicazioni web da SQL injection, XSS e bot. Si integra con CloudFront, ALB e API Gateway. Permette di bloccare, permettere o monitorare il traffico HTTP/HTTPS."
  },
  {
    "q": "Un'applicazione gira su più istanze Amazon EC2 che accedono contemporaneamente a un file system condiviso. Quale servizio di storage AWS dovrebbe essere usato?",
    "opts": [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "AWS Artifact"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "0fda884b5b6e",
    "explain": "Amazon EFS è un file system NFS gestito condivisibile tra più istanze EC2. Si scala automaticamente da gigabyte a petabyte senza provisioning. Ideale per CMS e ambienti di sviluppo condivisi."
  },
  {
    "q": "Un'applicazione web è ospitata su AWS con un Elastic Load Balancer, più istanze Amazon EC2 e Amazon RDS. Quali misure di sicurezza sono responsabilità di AWS? (Scegline due.)",
    "opts": [
      "Eseguire una scansione antivirus sulle istanze EC2",
      "Proteggere dall'IP spoofing e dal packet sniffing",
      "Installare le patch di sicurezza più recenti sull'istanza RDS",
      "Cifrare la comunicazione tra le istanze EC2 e l'Elastic Load Balancer",
      "Configurare un security group e una network access control list (NACL) per EC2"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "VPC"
    ],
    "id": "4928b6e60727",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Qual è il vantaggio dell'elasticità nel cloud AWS?",
    "opts": [
      "Garantire che il traffico web sia distribuito automaticamente su più Regioni AWS.",
      "Ridurre al minimo i costi di storage archiviando automaticamente i dati di log.",
      "Permettere ad AWS di scegliere automaticamente i servizi più convenienti.",
      "Regolare automaticamente la capacità di calcolo necessaria per mantenere prestazioni costanti."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "65c061fe7962",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "La continua riduzione dei prezzi del cloud AWS è dovuta a:",
    "opts": [
      "prezzi pay-as-you-go (a consumo)",
      "l'infrastruttura globale di AWS",
      "le economie di scala",
      "i prezzi dello storage riservato"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "f26c020b6dc7",
    "explain": "Le economie di scala di AWS derivano dall'aggregazione di migliaia di clienti, riducendo i costi per unità. Questi risparmi vengono trasferiti ai clienti con riduzioni periodiche dei prezzi. I clienti beneficiano di prezzi enterprise anche con utilizzi ridotti."
  },
  {
    "q": "Un'azienda ha bisogno di un bucket Amazon S3 che non possa avere oggetti pubblici, per requisiti di conformità. Come si può ottenere questo risultato?",
    "opts": [
      "Abilitare S3 Block Public Access dalla AWS Management Console.",
      "Fare una riunione di team per discutere l'importanza di caricare solo oggetti S3 privati.",
      "Richiedere che tutti gli oggetti S3 vengano approvati manualmente prima del caricamento.",
      "Creare un servizio che monitori tutti i caricamenti su S3 e rimuova quelli pubblici."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3"
    ],
    "id": "a3ead6468c24",
    "explain": "L'AWS Management Console è l'interfaccia web grafica per gestire i servizi AWS senza scrivere codice. Permette di navigare tra servizi, monitorare risorse e configurare l'infrastruttura. È il punto di partenza per operazioni non automatizzate."
  },
  {
    "q": "Un Cloud Practitioner individua un problema di fatturazione dopo aver esaminato l'AWS Cost and Usage Report nella AWS Management Console. Quale azione si può intraprendere per risolverlo?",
    "opts": [
      "Aprire un caso dettagliato relativo alla fatturazione e inviarlo all'AWS Support per ricevere aiuto.",
      "Caricare i dati che descrivono il problema in un nuovo oggetto in un bucket Amazon S3 privato.",
      "Creare un'applicazione per i prezzi e distribuirla su un'istanza Amazon EC2 dimensionata correttamente per avere più informazioni.",
      "Procedere con la creazione di una nuova dashboard in Amazon QuickSight."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Billing & Cost",
      "Analytics"
    ],
    "id": "926d75b13618",
    "explain": "AWS Cost and Usage Report è il report più dettagliato sui costi AWS con dati granulari per ora o giorno. Si integra con Athena e QuickSight per analisi avanzate."
  },
  {
    "q": "Che cosa fa l'AWS Simple Monthly Calculator?",
    "opts": [
      "Confronta i costi on-premises con quelli di ambienti in colocation",
      "Stima la fattura mensile in base all'utilizzo previsto",
      "Stima il consumo di energia nei data center esistenti",
      "Stima l'utilizzo della CPU"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "fea4e79ab4b4",
    "explain": "Il AWS Simple Monthly Calculator (ora AWS Pricing Calculator) stima i costi mensili inserendo parametri di utilizzo previsti. Strumento per previsioni di spesa di nuovi progetti."
  },
  {
    "q": "Chi è responsabile di applicare le patch al sistema operativo guest di Amazon RDS?",
    "opts": [
      "Il team di prodotto AWS",
      "L'amministratore di database del cliente",
      "I partner gestiti",
      "L'AWS Support"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "id": "c5d44b2e746e",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quali servizi AWS possono essere scalati con AWS Auto Scaling? (Scegline due.)",
    "opts": [
      "Amazon EC2",
      "Amazon DynamoDB",
      "Amazon S3",
      "Amazon Route 53",
      "Amazon Redshift"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Route 53",
      "DynamoDB",
      "Analytics"
    ],
    "id": "3ca1e0054ca6",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti sono vantaggi di AWS Global Accelerator? (Scegline due.)",
    "opts": [
      "Costo ridotto per eseguire servizi su AWS",
      "Migliore disponibilità delle applicazioni distribuite su AWS",
      "Maggiore durabilità dei dati conservati su AWS",
      "Latenza ridotta per raggiungere le applicazioni distribuite su AWS",
      "Maggiore sicurezza dei dati conservati su AWS"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Networking"
    ],
    "id": "e712554ff9dc",
    "explain": "AWS Global Accelerator instrada il traffico attraverso la rete backbone privata AWS. Usa IP anycast statici per dirigere gli utenti all'endpoint più vicino. Migliora disponibilità e performance per applicazioni globali."
  },
  {
    "q": "Un utente che vuole ricevere aiuto sulla fatturazione e riattivare un account sospeso dovrebbe inviare una richiesta su account e fatturazione a:",
    "opts": [
      "il forum dell'AWS Support",
      "AWS Abuse",
      "un AWS Solutions Architect",
      "l'AWS Support"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "11413f218749"
  },
  {
    "q": "Quale best practice del cloud AWS sfrutta l'elasticità e l'agilità del cloud computing?",
    "opts": [
      "Predisporre la capacità in base all'utilizzo passato e ai picchi teorici",
      "Scalare in modo dinamico e predittivo per soddisfare la domanda di utilizzo",
      "Costruire l'applicazione e l'infrastruttura in un data center che consente l'accesso fisico",
      "Suddividere l'applicazione in componenti debolmente accoppiati"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a6a9128c63c8",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Quale metodo aiuta a ottimizzare i costi degli utenti che passano al cloud AWS?",
    "opts": [
      "Pagare solo ciò che si usa",
      "Acquistare hardware prima che serva",
      "Predisporre manualmente le risorse cloud",
      "Acquistare per il carico massimo possibile"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "22f00a91b50c"
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quale delle seguenti è una responsabilità del cliente?",
    "opts": [
      "Installare le patch di sicurezza per gli hypervisor Xen e KVM",
      "Installare le patch del sistema operativo per Amazon DynamoDB",
      "Installare le patch di sicurezza del sistema operativo per le istanze di database su Amazon EC2",
      "Installare le patch di sicurezza del sistema operativo per le istanze di database Amazon RDS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Shared Responsibility"
    ],
    "id": "f2af3d63c46b",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Gli strumenti di AWS Cost Management permettono agli utenti di fare quali delle seguenti cose? (Scegline due.)",
    "opts": [
      "Terminare automaticamente tutte le risorse AWS se le soglie di budget vengono superate.",
      "Suddividere i costi AWS per giorno, servizio e account AWS collegato.",
      "Creare budget e ricevere notifiche se l'utilizzo attuale o previsto supera i budget.",
      "Passare automaticamente alle Istanze Reserved o Spot, a seconda di quale sia la più conveniente.",
      "Spostare i dati conservati in Amazon S3 in una classe di storage più conveniente."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Billing & Cost"
    ],
    "id": "d9c7f92a7366",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, la sicurezza e le patch del sistema operativo guest sono responsabilità di:",
    "opts": [
      "AWS Support",
      "il cliente",
      "AWS Systems Manager",
      "AWS Config"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "024344672b96",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quale servizio AWS permette di creare e gestire facilmente utenti e gruppi AWS e di fornire loro un accesso sicuro alle risorse AWS, senza costi?",
    "opts": [
      "AWS Direct Connect",
      "Amazon Connect",
      "AWS Identity and Access Management (IAM)",
      "AWS Firewall Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Networking"
    ],
    "id": "14017a110bfa",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quale servizio AWS fornisce su richiesta la documentazione di sicurezza e conformità di AWS?",
    "opts": [
      "AWS Directory Service",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ],
    "id": "75310cc3b5e1",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quale servizio AWS può essere usato per trasformare il testo in un parlato realistico?",
    "opts": [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Lex"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "cc1ececdd88f",
    "explain": "Amazon Polly converte testo in parlato realistico in decine di lingue. Genera audio streamabile e supporta SSML."
  },
  {
    "q": "Qual è uno dei principi fondamentali da seguire quando si progetta un'applicazione altamente disponibile nel cloud AWS?",
    "opts": [
      "Progettare con un'architettura serverless",
      "Presumere che tutti i componenti di un'applicazione possano guastarsi",
      "Integrare AWS Auto Scaling in ogni applicazione",
      "Progettare tutti i componenti con codice open source"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ],
    "id": "ba77db49c01c"
  },
  {
    "q": "Un utente deve generare un report che riassuma lo stato dei principali controlli di sicurezza in un account AWS. Il report deve includere: (lo stato dei permessi dei bucket Amazon S3, se l'autenticazione a più fattori è abilitata per l'utente root dell'account AWS, se ci sono security group configurati per consentire un accesso senza restrizioni). Dove si trovano tutte queste informazioni in un unico posto?",
    "opts": [
      "Dashboard di Amazon QuickSight",
      "Trail di AWS CloudTrail",
      "Report di AWS Trusted Advisor",
      "IAM credential report"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Analytics",
      "Support"
    ],
    "id": "ab713ebbbf80",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Quale modello di prezzo di Amazon EC2 dovrebbe essere usato per rispettare i requisiti di licenze software per core?",
    "opts": [
      "Dedicated Hosts",
      "Istanze On-Demand",
      "Istanze Spot",
      "Istanze Reserved"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "7a1fbf0ee970",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale elemento dell'infrastruttura globale di AWS si usa per mettere in cache copie dei contenuti e consegnarli più velocemente agli utenti di tutto il mondo?",
    "opts": [
      "Regioni AWS",
      "Availability Zone",
      "Edge location",
      "Data center"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ],
    "id": "9d3a4c69d7cc",
    "explain": "L'infrastruttura globale AWS è composta da Regioni, Availability Zone ed Edge Location. Ci sono più edge location che AZ, e più AZ che Regioni. Garantisce alta disponibilità, bassa latenza globale e resilienza."
  },
  {
    "q": "Usare AWS Config per registrare, verificare e valutare le modifiche alle risorse AWS e garantirne la tracciabilità è un esempio di quale pilastro dell'AWS Well-Architected Framework?",
    "opts": [
      "Sicurezza",
      "Eccellenza operativa",
      "Efficienza delle prestazioni",
      "Ottimizzazione dei costi"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "e267642de653",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Un'azienda che opera nel cloud AWS ha bisogno di fatture separate per ambienti specifici, come sviluppo, test e produzione. Come si può ottenere?",
    "opts": [
      "Usare più account AWS",
      "Usare i tag sulle risorse",
      "Usare più VPC",
      "Usare Cost Explorer"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Billing & Cost"
    ],
    "id": "a6d44e2fc780",
    "explain": "Creare più account AWS separati per ambienti diversi (sviluppo, test, produzione) fornisce isolamento completo delle risorse e permette di ricevere fatture separate per ogni ambiente. Con AWS Organizations è possibile avere comunque visibilità centralizzata e consolidated billing. Questa è la best practice AWS per separare gli ambienti e controllare i costi per progetto."
  },
  {
    "q": "Quale servizio AWS può essere usato nel processo di distribuzione delle applicazioni?",
    "opts": [
      "AWS AppSync",
      "AWS Batch",
      "AWS CodePipeline",
      "AWS DataSync"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "496f2ab5eccc",
    "explain": "AWS CodePipeline automatizza build, test e deploy ad ogni modifica del codice. Orchestra CodeCommit, CodeBuild e CodeDeploy."
  },
  {
    "q": "Cosa può essere usato per ridurre il costo dell'esecuzione delle istanze Amazon EC2? (Scegline due.)",
    "opts": [
      "Istanze Spot per carichi di lavoro stateless e flessibili",
      "Istanze ottimizzate per la memoria per carichi di lavoro con molto calcolo",
      "Istanze On-Demand per carichi di lavoro costosi e continuativi",
      "Istanze Reserved per carichi di lavoro continuativi",
      "Limiti di spesa impostati con AWS Budgets"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "2080dde6386d",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda sta lanciando un sito di e-commerce che conserverà ed elaborerà dati di carte di credito. Ha bisogno di informazioni sui report di conformità e sugli accordi di AWS. Quale servizio AWS offre accesso su richiesta a questi documenti?",
    "opts": [
      "AWS Certificate Manager",
      "AWS Config",
      "AWS Artifact",
      "AWS CloudTrail"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "596344e95062",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quale servizio o funzionalità AWS permette all'utente di gestire il traffico delle applicazioni tra Regioni?",
    "opts": [
      "Amazon AppStream 2.0",
      "Amazon VPC",
      "Elastic Load Balancer",
      "Amazon Route 53"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Route 53"
    ],
    "id": "4f03a095cd1a",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Quale servizio AWS può essere usato per tracciare le chiamate API non autorizzate?",
    "opts": [
      "AWS Config",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "401d2f143c4a",
    "explain": "AWS CloudTrail registra tutte le chiamate API nell'account, fornendo un audit log completo. Fondamentale per governance, conformità e analisi forense. Gli eventi vengono inviati a S3 e CloudWatch Logs."
  },
  {
    "q": "Un utente deve verificare e valutare regolarmente la configurazione di tutte le risorse AWS, individuare gli account non conformi e ricevere una notifica quando una risorsa cambia. Quale servizio AWS può soddisfare questi requisiti?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Resource Access Manager",
      "AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "936703d5906a",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Un utente sta pianificando di avviare due istanze Amazon EC2 aggiuntive per aumentare la disponibilità. Quale azione dovrebbe intraprendere l'utente?",
    "opts": [
      "Avviare le istanze in più Availability Zone di una singola Regione AWS.",
      "Avviare le istanze come Istanze Reserved EC2 nella stessa Regione AWS e nella stessa Availability Zone.",
      "Avviare le istanze in più Regioni AWS, ma nella stessa Availability Zone.",
      "Avviare le istanze come Istanze Spot EC2 nella stessa Regione AWS, ma in Availability Zone diverse."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "898e16bdbeca",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Un'azienda deve conservare dati aziendali critici in Amazon S3, con un backup in un'altra Regione AWS. Come si può ottenere?",
    "opts": [
      "Usare una Content Delivery Network (CDN) Amazon CloudFront per mettere in cache i dati a livello globale",
      "Configurare la replica tra Regioni (cross-region replication) di Amazon S3 verso un'altra Regione AWS",
      "Configurare il servizio AWS Backup per fare il backup dei dati in un'altra Regione AWS",
      "Fare snapshot del bucket Amazon S3 e copiare quei dati in un'altra Regione AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront"
    ],
    "id": "b469335cd502",
    "explain": "Una regione AWS è un'area geografica con più Availability Zone. Ogni regione è completamente indipendente per garantire sovranità dei dati. La scelta dipende da latenza, conformità, disponibilità dei servizi e costo."
  },
  {
    "q": "Quale servizio del cloud AWS può inviare avvisi ai clienti se vengono superate soglie di spesa personalizzate?",
    "opts": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost Allocation Tags",
      "AWS Organizations"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "3a5e1ebf7cbf",
    "explain": "AWS Budgets imposta budget e invia notifiche al superamento delle soglie. Può attivare azioni automatiche come fermare istanze."
  },
  {
    "q": "Qual è il metodo consigliato per richiedere un penetration test sulle risorse AWS?",
    "opts": [
      "Aprire un caso di supporto",
      "Compilare il modulo di richiesta di penetration test (Penetration Testing Request Form)",
      "Chiedere un penetration test al tuo technical account manager",
      "Contattare il tuo referente commerciale AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "6a4f397acff9",
    "explain": "AWS permette penetration test sulle proprie risorse (EC2, RDS, CloudFront, API Gateway, Lambda) compilando il Penetration Testing Request Form o senza approvazione per servizi approvati. I test DDoS richiedono autorizzazione esplicita. I clienti sono responsabili di non impattare altre risorse AWS."
  },
  {
    "q": "Un utente deve individuare, classificare e proteggere automaticamente i dati sensibili conservati in Amazon S3. Quale servizio AWS può soddisfare questi requisiti?",
    "opts": [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Security"
    ],
    "id": "c890cc770818",
    "explain": "Amazon Macie scopre e protegge dati sensibili (PII) in S3 usando ML. Genera avvisi per dati non protetti e monitora accessi anomali. Utile per conformità GDPR e HIPAA."
  },
  {
    "q": "Quali componenti servono per costruire correttamente una connessione VPN site-to-site su AWS? (Scegline due.)",
    "opts": [
      "Internet gateway",
      "NAT gateway",
      "Customer gateway",
      "Transit gateway",
      "Virtual private gateway"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Networking"
    ],
    "id": "f9377eb38d26",
    "explain": "AWS Site-to-Site VPN crea una connessione cifrata tramite Internet Protocol Security (IPSec) tra il data center on-premise e il VPC AWS. È un'alternativa più economica al Direct Connect ma con latenza e banda variabili dipendenti dalla qualità della connessione internet. Ideale per connettività ibrida con requisiti di banda moderati o come backup del Direct Connect."
  },
  {
    "q": "Quale opzione di prezzo di Amazon EC2 è la più adatta ad applicazioni con carichi di lavoro brevi, a picchi o imprevedibili, che non possono essere interrotti?",
    "opts": [
      "Istanze Spot",
      "Dedicated Hosts",
      "Istanze On-Demand",
      "Istanze Reserved"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "101b830d845e",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale principio dell'architettura cloud AWS afferma che i sistemi dovrebbero ridurre le interdipendenze?",
    "opts": [
      "Scalabilità",
      "Servizi, non server",
      "Eliminare i single point of failure",
      "Accoppiamento debole (loose coupling)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "a6eabcdabcc4",
    "explain": "Il Loose Coupling prevede che i componenti interagiscano tramite interfacce definite (API, code di messaggi) invece di dipendere direttamente l'uno dall'altro. Riduce l'impatto dei guasti: se un componente cade, gli altri continuano. Si implementa con SQS, SNS e API Gateway."
  },
  {
    "q": "Qual è la risorsa PIÙ efficace per restare aggiornati sugli annunci di sicurezza di AWS?",
    "opts": [
      "AWS Personal Health Dashboard",
      "AWS Secrets Manager",
      "AWS Security Bulletins (bollettini di sicurezza)",
      "Amazon Inspector"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ],
    "id": "a3296e5a1b2a",
    "explain": "AWS mette a disposizione gratuitamente numerose risorse di sicurezza e formazione: documentazione ufficiale, whitepaper, blog AWS, Security Bulletins, AWS Online Tech Talks e forum della community. Queste risorse sono accessibili a tutti i clienti indipendentemente dal piano Support. Per supporto tecnico diretto invece è necessario un piano a pagamento."
  },
  {
    "q": "Quale servizio AWS offre storage persistente per un file system?",
    "opts": [
      "Amazon S3",
      "Instance store di Amazon EC2",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon ElastiCache"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ],
    "id": "e527b703389e",
    "explain": "Amazon EBS fornisce volumi di storage a blocchi persistenti per EC2. I dati persistono indipendentemente dalla vita dell'istanza. Supporta snapshot su S3 e diversi tipi SSD/HDD."
  },
  {
    "q": "Quale dei seguenti permette agli utenti AWS di gestire l'allocazione dei costi per la fatturazione?",
    "opts": [
      "Applicare tag alle risorse",
      "Limitare chi può creare risorse",
      "Aggiungere un metodo di pagamento secondario",
      "Svolgere tutte le operazioni su un unico account AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "3aa560a08ca0",
    "explain": "I tag AWS sono coppie chiave-valore per organizzare risorse, tracciare costi e applicare policy. Permettono di filtrare risorse nei report di costo e automatizzare operazioni. Una strategia di tagging coerente è fondamentale per la governance e l'allocazione dei costi."
  },
  {
    "q": "Quale servizio AWS permette agli utenti di scaricare su richiesta report di sicurezza e conformità sull'infrastruttura AWS?",
    "opts": [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Artifact",
      "AWS Shield"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "752bc51f7e95",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Quali dei seguenti servizi AWS sono serverless? (Scegline due.)",
    "opts": [
      "AWS Lambda",
      "Amazon Elasticsearch Service",
      "AWS Elastic Beanstalk",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "DynamoDB",
      "Analytics"
    ],
    "id": "3b7c6a3c93c1",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quali servizi gestiti AWS possono essere usati per estendere un data center on-premises nella rete AWS? (Scegline due.)",
    "opts": [
      "AWS VPN",
      "NAT gateway",
      "AWS Direct Connect",
      "Amazon Connect",
      "Amazon Route 53"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ],
    "id": "a7a265c0515e",
    "explain": "AWS Direct Connect stabilisce una connessione privata dedicata tra on-premise e AWS bypassando internet. Garantisce banda consistente, latenza ridotta e sicurezza superiore alla VPN. Disponibile da 1 a 100 Gbps."
  },
  {
    "q": "Quale requisito deve essere soddisfatto perché un account membro possa essere scollegato da un'organizzazione AWS Organizations?",
    "opts": [
      "L'account collegato deve essere attivamente conforme agli AWS System and Organization Controls (SOC).",
      "L'account pagante e l'account collegato devono entrambi aprire casi di AWS Support per chiedere che l'account membro venga scollegato dall'organizzazione.",
      "L'account membro deve soddisfare i requisiti di un account indipendente (standalone).",
      "Per rimuovere l'account collegato dall'organizzazione deve essere usato l'account pagante."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "2bcdbf34321d",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Quale vantaggio di AWS indica la capacità di un cliente di distribuire applicazioni che scalano in su e in giù per soddisfare una domanda variabile?",
    "opts": [
      "Elasticità",
      "Agilità",
      "Sicurezza",
      "Scalabilità"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "33408ab951db",
    "explain": "La scalabilità è la capacità di gestire carichi crescenti aggiungendo risorse. AWS favorisce la scalabilità orizzontale (scale-out) con Auto Scaling, ELB e servizi managed come DynamoDB e S3 che scalano automaticamente."
  },
  {
    "q": "Durante una verifica di conformità, uno dei revisori chiede una copia del report SOC 2 di AWS. Quale servizio dovrebbe essere usato per questa richiesta?",
    "opts": [
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Artifact",
      "Amazon S3"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "56d12209edf3",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Un'azienda vuole configurare su AWS un carico di lavoro altamente disponibile, con un piano di disaster recovery che le permetta di riprendersi in caso di interruzione del servizio a livello di Regione. Quale configurazione soddisfa questi requisiti?",
    "opts": [
      "Girare su due Availability Zone di una Regione AWS, usando le altre Availability Zone della stessa Regione come sito di disaster recovery.",
      "Girare su due Availability Zone di una Regione AWS, usando un'altra Regione AWS come sito di disaster recovery.",
      "Girare su due Availability Zone di una Regione AWS, usando una Regione AWS locale come sito di disaster recovery.",
      "Girare su due Regioni AWS, usando una terza Regione AWS come sito di disaster recovery."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "6f0242f31552",
    "explain": "Il Disaster Recovery su AWS sfrutta la distribuzione multi-Region. Le strategie vanno da Backup & Restore (alto RTO/RPO) a Multi-Site Active-Active (RTO/RPO minimo). AWS permette DR a costi molto inferiori rispetto all'on-premise."
  },
  {
    "q": "Un'azienda ha un archivio di immagini da 500 TB che deve essere trasportato in AWS per l'elaborazione. Quale servizio AWS può importare questi dati nel modo PIÙ conveniente?",
    "opts": [
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon S3"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Networking"
    ],
    "id": "d7079bab0171",
    "explain": "AWS Snowball è un dispositivo fisico per migrare grandi quantità di dati verso AWS senza usare internet. Ideale quando la migrazione via rete richiederebbe settimane. Snowball Edge aggiunge capacità di calcolo locale."
  },
  {
    "q": "Quale servizio AWS può eseguire un database PostgreSQL gestito che offre elaborazione delle transazioni online (OLTP)?",
    "opts": [
      "Amazon DynamoDB",
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ],
    "id": "61ed708f9a09",
    "explain": "Amazon RDS è un servizio database relazionale gestito che supporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Aurora. Automatizza backup, patching e failover Multi-AZ riducendo drasticamente il lavoro amministrativo. Ideale per migrare da database self-managed su EC2 riducendo l'overhead operativo."
  },
  {
    "q": "Quali dei seguenti aiutano a individuare i costi per reparto? (Scegline due.)",
    "opts": [
      "Usare i tag sulle risorse",
      "Usare più account AWS",
      "Usare un account manager",
      "Usare AWS Trusted Advisor",
      "Usare la fatturazione consolidata"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ],
    "id": "4c1d1eb008f0",
    "explain": "Creare più account AWS separati per ambienti diversi (sviluppo, test, produzione) fornisce isolamento completo delle risorse e permette di ricevere fatture separate per ogni ambiente. Con AWS Organizations è possibile avere comunque visibilità centralizzata e consolidated billing. Questa è la best practice AWS per separare gli ambienti e controllare i costi per progetto."
  },
  {
    "q": "Un'azienda vuole concedere a un determinato utente l'accesso completo a un bucket Amazon S3. Quale elemento della bucket policy S3 contiene i dati dell'utente che indicano chi deve accedere al bucket?",
    "opts": [
      "Principal",
      "Action",
      "Resource",
      "Statement"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM"
    ],
    "id": "423bd66c606c",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Quale servizio AWS permette una gestione efficace dei costi di più account AWS?",
    "opts": [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Direct Connect",
      "Amazon Connect"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking",
      "Support"
    ],
    "id": "edd3f3167f2b",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Un'azienda sta sperimentando per un mese una nuova applicazione rivolta ai clienti su Amazon Elastic Compute Cloud (Amazon EC2). Quale modello di prezzo è appropriato?",
    "opts": [
      "Istanze Reserved",
      "Istanze Spot",
      "Istanze On-Demand",
      "Dedicated Hosts"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "ae782980e984",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali strumenti AWS prevedono automaticamente i costi AWS futuri?",
    "opts": [
      "AWS Support Center",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "Cost Explorer"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "54b3ba41c419",
    "explain": "AWS Cost Explorer analizza e visualizza costi e utilizzo AWS con grafici e previsioni. Identifica opportunità di risparmio e raccomandazioni per Reserved Instance."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, quale delle seguenti è una responsabilità di AWS?",
    "opts": [
      "Abilitare la cifratura lato server per gli oggetti conservati in S3",
      "Applicare le policy di sicurezza AWS IAM",
      "Applicare le patch al sistema operativo di un'istanza Amazon EC2",
      "Applicare gli aggiornamenti all'hypervisor"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "IAM",
      "Security",
      "Shared Responsibility"
    ],
    "id": "6d8afe40ca09",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Un utente può configurare un account master pagante per vedere i report di fatturazione consolidata tramite:",
    "opts": [
      "AWS Budgets.",
      "Amazon Macie.",
      "Amazon QuickSight.",
      "AWS Organizations."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Analytics"
    ],
    "id": "5dfa06eba1fe",
    "explain": "AWS Organizations gestisce più account AWS in una gerarchia centralizzata. Le Service Control Policy (SCP) limitano i permessi degli account figlio. Consolida la fatturazione e applica policy di sicurezza all'intera organizzazione."
  },
  {
    "q": "Eseguire le operazioni come codice è un principio di progettazione che sostiene quale pilastro dell'AWS Well-Architected Framework?",
    "opts": [
      "Efficienza delle prestazioni",
      "Eccellenza operativa",
      "Affidabilità",
      "Sicurezza"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "01f68516bd0f",
    "explain": "Il pillar Operational Excellence del Well-Architected Framework riguarda l'esecuzione e monitoraggio dei sistemi per fornire valore aziendale. Prevede Infrastructure as Code, deployment frequenti e risposta agli eventi operativi."
  },
  {
    "q": "Quale principio di progettazione si ottiene seguendo il pilastro dell'affidabilità dell'AWS Well-Architected Framework?",
    "opts": [
      "Scalabilità verticale",
      "Ripristino manuale dai guasti",
      "Testare le procedure di ripristino",
      "Modificare l'infrastruttura manualmente"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "id": "61849ecadf37",
    "explain": "Il AWS Well-Architected Framework fornisce best practice su sei pillar: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability. Well-Architected Tool valuta le architetture."
  },
  {
    "q": "Qual è una caratteristica delle Istanze Reserved (RI) Convertible?",
    "opts": [
      "Gli utenti possono scambiare RI Convertible con altre RI Convertible di una famiglia di istanze diversa, di valore uguale o superiore a quelle che stanno scambiando.",
      "Gli utenti possono scambiare RI Convertible con altre RI Convertible in Regioni AWS diverse.",
      "Gli utenti possono vendere e acquistare RI Convertible su AWS Marketplace.",
      "Gli utenti possono accorciare la durata delle loro RI Convertible unendole ad altre RI Convertible."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "bea374a224cb",
    "explain": "Le Reserved Instance di EC2 offrono fino al 72% di sconto con impegno 1-3 anni. Varianti: No Upfront, Partial Upfront (sconto intermedio) e All Upfront (sconto massimo)."
  },
  {
    "q": "Un progetto architetturale comprende Amazon EC2, un Elastic Load Balancer e Amazon RDS. Qual è il modo MIGLIORE per ottenere una stima mensile dei costi di questa architettura?",
    "opts": [
      "Aprire un caso di AWS Support, fornire la proposta di architettura e chiedere una stima dei costi mensili.",
      "Raccogliere i prezzi pubblicati dei servizi AWS e calcolare la stima mensile.",
      "Usare l'AWS Simple Monthly Calculator per stimare il costo mensile.",
      "Usare l'AWS Total Cost of Ownership (TCO) Calculator per stimare il costo mensile."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "87b9e8829e16",
    "explain": "Il AWS Simple Monthly Calculator (ora AWS Pricing Calculator) stima i costi mensili inserendo parametri di utilizzo previsti. Strumento per previsioni di spesa di nuovi progetti."
  },
  {
    "q": "Quali sono i vantaggi di usare Amazon RDS invece di Amazon EC2 per eseguire database relazionali su AWS? (Scegline due.)",
    "opts": [
      "Backup automatici",
      "Gestione dello schema",
      "Indicizzazione delle tabelle",
      "Applicazione delle patch al software",
      "Gestione di estrazione, trasformazione e caricamento (ETL)"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "1d882062e8c0",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Che cosa offre la classe di storage Amazon S3 Intelligent-Tiering?",
    "opts": [
      "Flessibilità di pagamento tramite la prenotazione di capacità di storage",
      "Conservazione a lungo termine dei dati copiandoli su un volume Amazon Elastic Block Store (Amazon EBS) cifrato",
      "Risparmi automatici spostando gli oggetti tra livelli (tier) in base ai cambiamenti nelle modalità di accesso",
      "Storage sicuro, durevole e al costo più basso per l'archiviazione dei dati"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "AI / ML"
    ],
    "id": "2e9fb78a2f7e",
    "explain": "Amazon S3 è object storage con durabilità del 99.999999999%. Memorizza dati come oggetti in bucket con versioning e lifecycle policies. Le classi (Standard, IA, Glacier) ottimizzano i costi in base alla frequenza di accesso."
  },
  {
    "q": "Un'azienda ha più fonti di dati in tutta l'organizzazione e vuole consolidare i dati in un unico data warehouse. Quale servizio AWS può essere usato per soddisfare questo requisito?",
    "opts": [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon QuickSight"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "Analytics"
    ],
    "id": "171b038fd8c0",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "Quale servizio AWS può essere usato per tracciare le modifiche alle risorse e verificare la conformità?",
    "opts": [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ],
    "id": "3d36d93d8ec7",
    "explain": "AWS Config registra le configurazioni delle risorse e valuta la conformità. Permette di vedere com'era configurata una risorsa in passato. Essenziale per governance e audit regolatori."
  },
  {
    "q": "Un utente ha risorse on-premises sottoutilizzate. Quale concetto del cloud AWS può risolvere MEGLIO questo problema?",
    "opts": [
      "Alta disponibilità",
      "Elasticità",
      "Sicurezza",
      "Accoppiamento debole"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "656eeaebc63a",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Un utente ha un carico di lavoro stateful che girerà su Amazon EC2 per i prossimi 3 anni. Qual è il modello di prezzo PIÙ conveniente per questo carico di lavoro?",
    "opts": [
      "Istanze On-Demand",
      "Istanze Reserved",
      "Istanze Dedicated",
      "Istanze Spot"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "e9c1408a528a",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un cloud practitioner ha bisogno di un'istanza Amazon EC2 da avviare e far girare per 7 ore senza interruzioni. Qual è l'opzione più adatta e conveniente per questo compito?",
    "opts": [
      "Istanza On-Demand",
      "Istanza Reserved",
      "Dedicated Host",
      "Istanza Spot"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "ad08173ee050",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quali dei seguenti sono vantaggi dell'uso di AWS Trusted Advisor? (Scegline due.)",
    "opts": [
      "Fornire un'orchestrazione dei container ad alte prestazioni",
      "Creare e ruotare le chiavi di cifratura",
      "Rilevare le risorse sottoutilizzate per risparmiare",
      "Migliorare la sicurezza monitorando in modo proattivo l'ambiente AWS",
      "Imporre il tagging obbligatorio sulle risorse AWS"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "ECS / Fargate",
      "Security",
      "Support"
    ],
    "id": "d8badc9cb089",
    "explain": "AWS Trusted Advisor fornisce raccomandazioni in cinque categorie: costi, performance, sicurezza, fault tolerance e limiti. I check avanzati richiedono Support Business o Enterprise."
  },
  {
    "q": "Uno sviluppatore è stato assunto da una grande azienda e ha bisogno di credenziali AWS. Quali best practice di sicurezza vanno seguite? (Scegline due.)",
    "opts": [
      "Concedere allo sviluppatore l'accesso solo alle risorse AWS necessarie per il suo lavoro.",
      "Condividere con lo sviluppatore le credenziali dell'utente root dell'account AWS.",
      "Aggiungere lo sviluppatore al gruppo degli amministratori in AWS IAM.",
      "Configurare una policy delle password che impedisca allo sviluppatore di cambiare la password.",
      "Assicurarsi che la policy delle password dell'account richieda una lunghezza minima."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "id": "a6d7b7d8aa8b",
    "explain": "Le policy di password IAM definiscono i requisiti per le password degli utenti AWS: lunghezza minima, complessità, scadenza e riuso. Permettono agli amministratori di imporre standard di sicurezza. Si configurano nella console IAM e si applicano a tutti gli utenti dell'account."
  },
  {
    "q": "Quale servizio di storage AWS è progettato per trasferire petabyte di dati verso e dal cloud?",
    "opts": [
      "AWS Storage Gateway",
      "Amazon S3 Glacier Deep Archive",
      "Amazon Lightsail",
      "AWS Snowball"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ],
    "id": "a68afc1d1ba5",
    "explain": "AWS Snowball è un dispositivo fisico per migrare grandi quantità di dati verso AWS senza usare internet. Ideale quando la migrazione via rete richiederebbe settimane. Snowball Edge aggiunge capacità di calcolo locale."
  },
  {
    "q": "Quale servizio offre a un utente la possibilità di creare un data warehouse nel cloud AWS?",
    "opts": [
      "Amazon EFS",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon VPC"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC",
      "Storage",
      "Analytics"
    ],
    "id": "cd4278946b7c",
    "explain": "Amazon Redshift è un data warehouse cloud per analisi su petabyte di dati con archiviazione colonnare e query parallele. Performance superiori ai data warehouse tradizionali. Si integra con QuickSight e altri strumenti BI."
  },
  {
    "q": "In che modo i clienti beneficiano delle enormi economie di scala di Amazon?",
    "opts": [
      "Riduzioni periodiche dei prezzi come risultato dell'efficienza operativa di Amazon",
      "Nuovi tipi di istanza Amazon EC2 con l'hardware più recente",
      "La possibilità di scalare in su e in giù quando serve",
      "Maggiore affidabilità dell'hardware sottostante alle istanze Amazon EC2"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "id": "13b1cda4a020",
    "explain": "Le economie di scala di AWS derivano dall'aggregazione di migliaia di clienti, riducendo i costi per unità. Questi risparmi vengono trasferiti ai clienti con riduzioni periodiche dei prezzi. I clienti beneficiano di prezzi enterprise anche con utilizzi ridotti."
  },
  {
    "q": "Quali servizi AWS possono essere usati per raccogliere informazioni sull'attività di un account AWS? (Scegline DUE.)",
    "opts": [
      "Amazon CloudFront",
      "AWS Cloud9",
      "AWS CloudTrail",
      "AWS CloudHSM",
      "Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ],
    "id": "43f4138f126b",
    "explain": "Amazon CloudWatch monitora risorse AWS con metriche, log ed eventi. Crea allarmi che notificano o eseguono azioni automatiche. Centralizza i log da EC2, Lambda e altri servizi."
  },
  {
    "q": "Quali delle seguenti attività IT comuni può coprire AWS per liberare risorse IT dell'azienda? (Scegline DUE.)",
    "opts": [
      "Applicare le patch al software di database",
      "Testare i rilasci delle applicazioni",
      "Fare il backup dei database",
      "Creare lo schema del database",
      "Eseguire penetration test"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "404d33d55345"
  },
  {
    "q": "Per cosa possono essere usate le edge location di AWS? (Scegline DUE.)",
    "opts": [
      "Ospitare applicazioni",
      "Consegnare i contenuti più vicino agli utenti",
      "Eseguire servizi di cache per database NoSQL",
      "Ridurre il traffico sul server mettendo in cache le risposte",
      "Inviare messaggi di notifica agli utenti finali"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "DynamoDB"
    ],
    "id": "0a114055b019"
  },
  {
    "q": "Un amministratore deve distribuire rapidamente una soluzione IT molto diffusa e iniziare a usarla subito. Dove può trovare assistenza l'amministratore?",
    "opts": [
      "Nella documentazione dell'AWS Well-Architected Framework",
      "Amazon CloudFront",
      "AWS CodeCommit",
      "Nelle distribuzioni di riferimento AWS Quick Start"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Well-Architected"
    ],
    "id": "82cf1f487df3",
    "explain": "Gli AWS Quick Start automatizzano il deployment di soluzioni popolari usando CloudFormation. Permettono di deployare in pochi minuti architetture complesse. Sviluppati da AWS e partner certificati seguendo le best practice."
  },
  {
    "q": "Quali servizi AWS sono definiti globali invece che regionali? (Scegline DUE.)",
    "opts": [
      "Amazon Route 53",
      "Amazon EC2",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon DynamoDB"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "CloudFront",
      "Route 53",
      "DynamoDB"
    ],
    "id": "d5b61bfadb80",
    "explain": "Amazon Route 53 è un servizio DNS scalabile e altamente disponibile. Supporta routing Latency, Geolocation, Weighted e Failover. Offre registrazione domini e health check degli endpoint."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali delle seguenti attività sono responsabilità del cliente AWS? (Scegline DUE.)",
    "opts": [
      "Assicurarsi che i dati dell'applicazione siano cifrati a riposo",
      "Assicurarsi che i server NTP di AWS siano impostati sull'ora corretta",
      "Assicurarsi che gli utenti abbiano ricevuto una formazione sulla sicurezza nell'uso dei servizi AWS",
      "Assicurarsi che l'accesso ai data center sia limitato",
      "Assicurarsi che l'hardware sia smaltito correttamente"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "b7dd3a3ec216",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Un'azienda sta migrando un'applicazione che esegue carichi di lavoro non interrompibili per un periodo di tre anni. Quale formula di prezzo offrirebbe la soluzione PIÙ conveniente?",
    "opts": [
      "Istanze Spot Amazon EC2",
      "Istanze Dedicated Amazon EC2",
      "Istanze On-Demand Amazon EC2",
      "Istanze Reserved Amazon EC2"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ],
    "id": "5a9e02b10ed7",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "I vantaggi finanziari dell'uso di AWS sono: (Scegline DUE.)",
    "opts": [
      "riduzione del costo totale di proprietà (TCO).",
      "aumento delle spese in conto capitale (capex).",
      "riduzione delle spese operative (opex).",
      "piani di pagamento dilazionato per le startup.",
      "linee di credito aziendali per le startup."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "b0a6cf3c4eb0",
    "explain": "Il modello cloud AWS converte le spese CapEx in OpEx variabili. Si paga solo per le risorse usate senza impegni a lungo termine. Migliora il cash flow ed elimina il rischio di sovra-provisioning."
  },
  {
    "q": "Quale dei seguenti aspetti è interamente responsabilità di AWS, secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "L'applicazione delle patch al sistema operativo guest",
      "La consapevolezza e la formazione sulla sicurezza",
      "I controlli fisici e ambientali",
      "La definizione di una policy delle password IAM"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Shared Responsibility"
    ],
    "id": "d88a816632d8",
    "explain": "AWS è esclusivamente responsabile della sicurezza fisica e dei controlli ambientali dei data center: alimentazione, raffreddamento, controllo accessi fisici e distruzione dei dispositivi a fine vita. Nel modello Shared Responsibility, AWS gestisce tutta la sicurezza fisica dell'infrastruttura. Il cliente è responsabile della sicurezza a livello software, dati e configurazioni."
  },
  {
    "q": "Un'azienda vuole ridurre l'infrastruttura di calcolo fisica che gli sviluppatori usano per eseguire il codice. Quale servizio soddisfa questa esigenza permettendo architetture serverless?",
    "opts": [
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Lambda",
      "Amazon DynamoDB",
      "AWS CodeCommit"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "DynamoDB"
    ],
    "id": "6d6573c7a73e",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quale servizio AWS invia avvisi quando un evento AWS può avere impatto sulle risorse AWS di un'azienda?",
    "opts": [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Infrastructure Event Management"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "id": "c2f5bfbbc8e7",
    "explain": "AWS Health Dashboard fornisce informazioni personalizzate sulla salute dei servizi che impattano il tuo account. Mostra solo eventi rilevanti per le tue risorse."
  },
  {
    "q": "Quali delle seguenti sono categorie di AWS Trusted Advisor? (Scegline DUE.)",
    "opts": [
      "Tolleranza ai guasti",
      "Utilizzo delle istanze",
      "Infrastruttura",
      "Prestazioni",
      "Capacità di storage"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "id": "d02bb9ce15d1",
    "explain": "La fault tolerance è la capacità di continuare a funzionare con guasti di componenti. Si implementa con ridondanza multi-AZ, Auto Scaling ed ELB. Il principio 'design for failure' è fondamentale: assumere che ogni componente possa fallire."
  },
  {
    "q": "Per quale dei seguenti servizi è responsabilità del cliente mantenere la configurazione del sistema operativo, le patch di sicurezza e la rete? - A. Amazon RDS",
    "opts": [
      "Amazon EC2",
      "Amazon ElastiCache",
      "AWS Fargate"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "ECS / Fargate"
    ],
    "id": "4cfd9cf54803",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Un'azienda passerà da un data center on-premises al cloud AWS. Quale sarebbe una differenza finanziaria dopo il passaggio?",
    "opts": [
      "Passare da spese operative variabili (opex) a spese in conto capitale anticipate (capex).",
      "Passare da spese in conto capitale anticipate (capex) a spese in conto capitale variabili (capex).",
      "Passare da spese in conto capitale anticipate (capex) a spese operative variabili (opex).",
      "L'eliminazione delle spese in conto capitale anticipate (capex) e delle spese operative variabili (opex)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "id": "5da79dfaa2d9",
    "explain": "Il modello cloud AWS converte le spese CapEx in OpEx variabili. Si paga solo per le risorse usate senza impegni a lungo termine. Migliora il cash flow ed elimina il rischio di sovra-provisioning."
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, qual è la responsabilità esclusiva di AWS?",
    "opts": [
      "La sicurezza delle applicazioni",
      "La gestione delle edge location",
      "La gestione delle patch",
      "I dati lato client"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ],
    "id": "280d26d27366",
    "explain": "Le edge location di AWS ospitano CloudFront e Route 53 per avvicinare contenuti agli utenti finali. Ci sono più edge location che Availability Zones e Regioni. Riducono la latenza distribuendo i contenuti in tutto il mondo."
  },
  {
    "q": "Quale funzionalità di AWS IAM si usa per associare un insieme di permessi a più utenti?",
    "opts": [
      "L'autenticazione a più fattori",
      "I gruppi",
      "Le policy delle password",
      "Le chiavi di accesso"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "id": "fc6ad5b3bf96",
    "explain": "AWS IAM controlla l'accesso alle risorse usando il principio del minimo privilegio. Utenti, gruppi e ruoli ricevono solo le permission necessarie tramite policy JSON. Best practice: MFA, non usare root, ruotare le access key, usare ruoli IAM."
  },
  {
    "q": "Quali dei seguenti sono vantaggi del cloud AWS? (Scegline due.)",
    "opts": [
      "Uptime illimitato",
      "Elasticità",
      "Agilità",
      "Colocation",
      "Spese in conto capitale"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "88d4bc084a24",
    "explain": "L'elasticità cloud è la capacità di scalare automaticamente le risorse in risposta alla domanda, senza previsioni di capacità. Su AWS si implementa con Auto Scaling, Lambda e DynamoDB. Elimina sia il sovra-provisioning che il sotto-provisioning."
  },
  {
    "q": "Quale dei seguenti strumenti può usare un cliente per abilitare il single sign-on (SSO) alla console AWS?",
    "opts": [
      "Amazon Connect",
      "AWS Directory Service",
      "Amazon Pinpoint",
      "Amazon Rekognition"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "id": "a0d140f753bf"
  },
  {
    "q": "Come si chiamano i diversi luoghi isolati all'interno di una Regione AWS, collegati da reti a bassa latenza?",
    "opts": [
      "AWS Direct Connect",
      "Amazon VPC",
      "Edge location",
      "Availability Zone"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront",
      "Networking"
    ],
    "id": "3247e4cc4c21",
    "explain": "Le Availability Zone (AZ) sono datacenter fisicamente separati all'interno di una regione AWS con alimentazione e rete indipendenti. Distribuire le applicazioni su più AZ garantisce alta disponibilità in caso di guasto di una singola AZ. AWS raccomanda di utilizzare almeno 2 AZ per i workload in produzione."
  },
  {
    "q": "Quali dei seguenti vantaggi offre il programma AWS Compliance ai clienti AWS? (Scegline due.)",
    "opts": [
      "Verifica che i carichi di lavoro ospitati siano automaticamente conformi ai controlli dei framework di conformità supportati.",
      "AWS è responsabile della manutenzione della documentazione dei framework di conformità comuni.",
      "Garantisce ai clienti che AWS mantiene la sicurezza fisica e la protezione dei dati.",
      "Garantisce l'uso dei framework di conformità usati dagli altri fornitori cloud.",
      "Adotterà nuovi framework di conformità man mano che diventeranno rilevanti per i carichi di lavoro dei clienti."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "f7dd9ed0a270",
    "explain": "AWS supporta PCI DSS, HIPAA, SOC 1/2/3, ISO 27001 e FedRAMP. AWS Artifact fornisce report di conformità e accordi legali. I clienti ereditano i controlli AWS ma rimangono responsabili della conformità delle loro applicazioni."
  },
  {
    "q": "Quale dei seguenti servizi offre accesso su richiesta ai report di conformità di AWS?",
    "opts": [
      "AWS IAM",
      "AWS Artifact",
      "Amazon GuardDuty",
      "AWS KMS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Security"
    ],
    "id": "7b1beda4e747",
    "explain": "AWS Artifact fornisce accesso a report di conformità (SOC, ISO 27001, PCI DSS) e permette di firmare accordi come il BAA per HIPAA. Accessibile gratuitamente dalla console AWS."
  },
  {
    "q": "Nel modello di responsabilità condivisa di AWS, quale dei seguenti controlli operativi gli utenti ereditano completamente da AWS?",
    "opts": [
      "La gestione della sicurezza del data center",
      "La gestione delle patch",
      "La gestione della configurazione",
      "La gestione di utenti e accessi"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "bfce52f8334f",
    "explain": "Il modello Shared Responsibility divide la sicurezza: AWS è responsabile della sicurezza 'del' cloud (hardware fisico, datacenter, rete, hypervisor). Il cliente è responsabile della sicurezza 'nel' cloud (OS guest, applicazioni, dati, configurazione di rete, IAM). La divisione esatta dipende dal tipo di servizio: IaaS, PaaS o SaaS."
  },
  {
    "q": "Quando si confronta il costo totale di proprietà del cloud AWS con quello on-premises, quali spese vanno considerate? (Scegline due.)",
    "opts": [
      "Lo sviluppo software",
      "La gestione dei progetti",
      "L'hardware di storage",
      "I server fisici",
      "La licenza del software antivirus"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "id": "f66203008cd7"
  },
  {
    "q": "Secondo il modello di responsabilità condivisa, quali delle seguenti attività sono responsabilità del cliente? (Scegline due.)",
    "opts": [
      "Mantenere l'hardware sottostante di Amazon EC2.",
      "Gestire le network access control list del VPC.",
      "Cifrare i dati in transito e a riposo.",
      "Sostituire i dischi rigidi guasti.",
      "Distribuire l'hardware in Availability Zone diverse."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "Shared Responsibility"
    ],
    "id": "04a653f12084",
    "explain": "I controlli di accesso su AWS includono IAM per la gestione delle identità e permessi, Security Group e NACL per il traffico di rete, e bucket policy per S3. Il principio del minimo privilegio è fondamentale: concedere solo i permessi strettamente necessari. L'accesso può essere ulteriormente protetto con MFA."
  },
  {
    "q": "Quali scenari rappresentano il concetto di elasticità su AWS? (Scegline due.)",
    "opts": [
      "Variare il numero di istanze Amazon EC2 in base al traffico.",
      "Ridimensionare le istanze Amazon RDS al cambiare delle esigenze di business.",
      "Indirizzare automaticamente il traffico verso le istanze Amazon EC2 meno utilizzate.",
      "Usare i documenti di conformità AWS per accelerare il processo di conformità.",
      "Avere la possibilità di creare e governare gli ambienti usando il codice."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ],
    "id": "f88df07df38d",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quando è vantaggioso per un'azienda usare un'Istanza Spot?",
    "opts": [
      "Quando c'è flessibilità sul momento in cui l'applicazione deve girare.",
      "Quando ci sono carichi di lavoro mission-critical.",
      "Quando serve capacità dedicata.",
      "Quando un'istanza non deve essere arrestata."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "AI / ML"
    ],
    "id": "c3e5ad4eff52",
    "explain": "Le EC2 Spot Instance usano capacità inutilizzata a prezzi fino al 90% inferiori. Possono essere interrotte con 2 minuti di preavviso. Ideali per batch e rendering, non per workload critici."
  },
  {
    "q": "Un'azienda sta valutando di spostare il suo data center on-premises su AWS. Quali fattori vanno inclusi in un'analisi del costo totale di proprietà (TCO)? (Scegline due.)",
    "opts": [
      "La disponibilità delle istanze Amazon EC2",
      "Il consumo di energia del data center",
      "I costi del personale per sostituire i vecchi server",
      "Il tempo degli sviluppatori dell'applicazione",
      "La capacità del motore di database"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ],
    "id": "ef0c027db119"
  },
  {
    "q": "Come fattura AWS l'uso di AWS Lambda?",
    "opts": [
      "Gli utenti fanno un'offerta sul prezzo massimo che sono disposti a pagare all'ora.",
      "Gli utenti scelgono un periodo di pagamento anticipato di 1, 3 o 5 anni.",
      "Gli utenti pagano lo storage permanente necessario su un file system o in un database.",
      "Gli utenti pagano in base al numero di richieste e alle risorse di calcolo consumate."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "id": "e689d0861e0a",
    "explain": "AWS Lambda esegue codice in risposta a eventi senza gestire server. Si paga solo per invocazioni e tempo di esecuzione al millisecondo, con 1 milione di invocazioni gratuite al mese. Scala automaticamente da zero a migliaia di esecuzioni parallele."
  },
  {
    "q": "Quale funzione svolgono i security group per la sicurezza delle istanze Amazon Elastic Compute Cloud (Amazon EC2)?",
    "opts": [
      "Funzionano come firewall virtuale per l'istanza Amazon EC2.",
      "Proteggono gli account utente AWS con le policy di AWS Identity and Access Management (IAM).",
      "Forniscono protezione DDoS con AWS Shield.",
      "Usano Amazon CloudFront per proteggere l'istanza Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "VPC",
      "CloudFront",
      "Security"
    ],
    "id": "79a97626df40",
    "explain": "Amazon EC2 fornisce istanze di server virtuali nel cloud con controllo completo su CPU, RAM e sistema operativo. Supporta modelli On-Demand, Reserved (fino al 72% di sconto), Spot (fino al 90% di risparmio) e Dedicated Host. È il servizio IaaS principale di AWS per workload che richiedono controllo sull'infrastruttura."
  },
  {
    "q": "Quale pilastro dell'AWS Well-Architected Framework si concentra sulla riduzione dell'impatto ambientale dei carichi di lavoro nel cloud?",
    "opts": [
      "Efficienza delle prestazioni",
      "Eccellenza operativa",
      "Sostenibilità",
      "Ottimizzazione dei costi"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Il pilastro Sustainability riguarda la riduzione dell'impatto ambientale: massimizzare l'utilizzo delle risorse, usare hardware e servizi più efficienti, ridurre i dati inutili. Cost Optimization riguarda la spesa, Performance Efficiency l'uso efficiente delle risorse per le prestazioni, Operational Excellence i processi operativi.",
    "domain": "Cloud Concepts",
    "id": "502eff9e5896"
  },
  {
    "q": "Un'azienda vuole ridurre l'impronta di carbonio dei suoi carichi di lavoro su AWS. Quali azioni sono in linea con il pilastro della sostenibilità? (Scegline DUE.)",
    "opts": [
      "Massimizzare l'utilizzo delle risorse predisposte",
      "Replicare tutti i dati in ogni Regione AWS",
      "Usare servizi gestiti e tipi di istanza efficienti dal punto di vista energetico, come AWS Graviton",
      "Tenere gli ambienti di sviluppo accesi 24 ore su 24, 7 giorni su 7",
      "Sovradimensionare le istanze per gestire qualsiasi picco futuro"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Sustainability: massimizzare l'utilizzo (meno risorse inattive) e usare servizi managed e hardware più efficiente come Graviton. Sovradimensionare, tenere accesi ambienti inutilizzati e replicare dati ovunque aumentano consumi e impatto.",
    "domain": "Cloud Concepts",
    "id": "5cec65ca3335"
  },
  {
    "q": "Quale principio di progettazione appartiene al pilastro dell'eccellenza operativa dell'AWS Well-Architected Framework?",
    "opts": [
      "Usare architetture serverless",
      "Implementare una solida base per le identità",
      "Eseguire le operazioni come codice",
      "Adottare un modello a consumo"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "'Perform operations as code' (insieme a modifiche piccole, frequenti e reversibili) è un principio di Operational Excellence. Serverless è Performance Efficiency, identità solida è Security, modello a consumo è Cost Optimization.",
    "domain": "Cloud Concepts",
    "id": "572978c14b6e"
  },
  {
    "q": "Quale principio di progettazione fa parte del pilastro della sicurezza dell'AWS Well-Architected Framework?",
    "opts": [
      "Smettere di indovinare la capacità",
      "Abilitare la tracciabilità",
      "Misurare l'efficienza complessiva",
      "Andare globali in pochi minuti"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "'Enable traceability' (monitorare, registrare e verificare ogni azione) è un principio del pilastro Security. 'Go global in minutes' è Performance Efficiency, 'Stop guessing capacity' è Reliability, 'Measure overall efficiency' è Cost Optimization.",
    "domain": "Cloud Concepts",
    "id": "56d1a91a8727"
  },
  {
    "q": "Un'azienda simula regolarmente il guasto di componenti per verificare che il suo carico di lavoro si ripristini automaticamente. Quale pilastro Well-Architected sostiene questa pratica?",
    "opts": [
      "Sostenibilità",
      "Efficienza delle prestazioni",
      "Ottimizzazione dei costi",
      "Affidabilità"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Testare le procedure di ripristino e recuperare automaticamente dai guasti sono principi del pilastro Reliability.",
    "domain": "Cloud Concepts",
    "id": "1e300de90b16"
  },
  {
    "q": "Quale pilastro Well-Architected comprende il principio di progettazione \"Democratizzare le tecnologie avanzate\"?",
    "opts": [
      "Eccellenza operativa",
      "Sicurezza",
      "Efficienza delle prestazioni",
      "Affidabilità"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "'Democratize advanced technologies' significa usare tecnologie complesse (es. machine learning, database NoSQL) come servizi managed invece di costruirle: è un principio di Performance Efficiency.",
    "domain": "Cloud Concepts",
    "id": "3ccb36dc51dd"
  },
  {
    "q": "Quale servizio AWS offre un modo gratuito per esaminare i carichi di lavoro rispetto alle best practice dei sei pilastri Well-Architected e individuare i problemi ad alto rischio?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Security Hub",
      "AWS Well-Architected Tool"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Il Well-Architected Tool è un servizio gratuito: rispondi a domande sul tuo workload e ottieni un report dei rischi per ciascun pilastro. Trusted Advisor esegue controlli automatici sull'account, Config valuta le configurazioni delle risorse, Security Hub aggrega i finding di sicurezza.",
    "domain": "Cloud Concepts",
    "id": "e9db22df46c5"
  },
  {
    "q": "Smettere di spendere soldi in \"lavoro pesante indifferenziato\" (undifferentiated heavy lifting), come montare in rack e alimentare i server, è un principio di progettazione di quale pilastro Well-Architected?",
    "opts": [
      "Ottimizzazione dei costi",
      "Sostenibilità",
      "Affidabilità",
      "Sicurezza"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Smettere di spendere in lavori che non differenziano il business (gestire data center) è un principio di Cost Optimization: AWS se ne occupa e tu ti concentri sui clienti.",
    "domain": "Cloud Concepts",
    "id": "525fc8059cd9"
  },
  {
    "q": "Scalare in orizzontale usando più risorse piccole invece di una grande riduce l'impatto di un singolo guasto. A quale pilastro appartiene questo principio?",
    "opts": [
      "Ottimizzazione dei costi",
      "Affidabilità",
      "Eccellenza operativa",
      "Efficienza delle prestazioni"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ],
    "explain": "Scalare orizzontalmente per aumentare la disponibilità complessiva del workload è un principio del pilastro Reliability.",
    "domain": "Cloud Concepts",
    "id": "5cee644c16f5"
  },
  {
    "q": "Quale prospettiva dell'AWS Cloud Adoption Framework (AWS CAF) si concentra sulla gestione del cambiamento organizzativo, sulla cultura e sulle competenze del personale?",
    "opts": [
      "Operations",
      "People",
      "Platform",
      "Business"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "La prospettiva People riguarda cultura, struttura organizzativa, competenze e gestione del cambiamento. Business riguarda la strategia e il valore, Platform l'architettura tecnica, Operations l'erogazione dei servizi.",
    "domain": "Cloud Concepts",
    "id": "d51829f3d9de"
  },
  {
    "q": "Quale prospettiva dell'AWS CAF aiuta un'azienda a costruire una piattaforma di cloud ibrido scalabile e di livello enterprise, e a modernizzare i carichi di lavoro esistenti?",
    "opts": [
      "People",
      "Governance",
      "Security",
      "Platform"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "La prospettiva Platform riguarda architettura, piattaforma e ingegneria dei workload (CTO, architetti). Governance gestisce programma, rischi e costi; Security la protezione; People le persone.",
    "domain": "Cloud Concepts",
    "id": "49d8d37217d4"
  },
  {
    "q": "Quale prospettiva dell'AWS CAF si concentra sulla gestione e sul monitoraggio della spesa cloud, del rischio e del portafoglio di programmi per massimizzare il valore degli investimenti nel cloud?",
    "opts": [
      "Platform",
      "Business",
      "Governance",
      "Operations"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "La prospettiva Governance orchestra le iniziative cloud e gestisce rischi, costi (FinOps), portfolio e conformità. Business si concentra sul valore economico, Operations sul funzionamento quotidiano, Platform sull'architettura.",
    "domain": "Cloud Concepts",
    "id": "e13ed0d78264"
  },
  {
    "q": "Quale prospettiva dell'AWS CAF garantisce che i servizi cloud siano erogati a un livello che soddisfa le esigenze del business, compresi il monitoraggio e la gestione degli incidenti?",
    "opts": [
      "Operations",
      "Business",
      "Security",
      "People"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "La prospettiva Operations riguarda l'erogazione dei servizi cloud ai livelli concordati: osservabilità, gestione degli incidenti, delle patch e delle performance.",
    "domain": "Cloud Concepts",
    "id": "ea977d8c5826"
  },
  {
    "q": "Quali sono i risultati di business che l'AWS Cloud Adoption Framework indica come vantaggi dell'adozione del cloud? (Scegline DUE.)",
    "opts": [
      "L'eliminazione degli obblighi di conformità",
      "L'eliminazione di tutto il personale IT",
      "L'aumento dei ricavi",
      "Un uptime garantito del 100%",
      "La riduzione del rischio di business"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "explain": "Il CAF elenca quattro benefici di business: riduzione del rischio, miglioramento delle performance ESG, aumento dei ricavi e aumento dell'efficienza operativa. Le altre opzioni non sono promesse realistiche del cloud.",
    "domain": "Cloud Concepts",
    "id": "fabc2c1897ee"
  },
  {
    "q": "In quale ordine l'AWS CAF descrive le fasi di un percorso di trasformazione verso il cloud?",
    "opts": [
      "Discover, Design, Deploy, Decommission",
      "Assess, Mobilize, Migrate, Modernize",
      "Plan, Build, Run, Optimize",
      "Envision, Align, Launch, Scale"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Le fasi del CAF sono Envision (immaginare le opportunità), Align (allineare gli stakeholder), Launch (avviare i piloti), Scale (estenderli). 'Assess, Mobilize, Migrate' è il modello delle fasi di migrazione, non del CAF.",
    "domain": "Cloud Concepts",
    "id": "957b0e049780"
  },
  {
    "q": "Un'azienda sposta un'applicazione da server on-premises ad Amazon EC2 senza apportare alcuna modifica all'applicazione. Quale strategia di migrazione è questa?",
    "opts": [
      "Refactor",
      "Replatform",
      "Rehost",
      "Repurchase"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Rehost (lift and shift) sposta l'applicazione così com'è, per esempio su EC2. Replatform aggiunge piccole ottimizzazioni, Refactor riscrive l'app in modo cloud-native, Repurchase passa a un prodotto diverso (SaaS).",
    "domain": "Cloud Concepts",
    "id": "8bd83c3f92c5"
  },
  {
    "q": "Un'azienda migra il suo database autogestito su Amazon RDS per ridurre il lavoro amministrativo, senza cambiare l'architettura di base dell'applicazione. Quale strategia di migrazione è questa?",
    "opts": [
      "Rehost",
      "Replatform",
      "Retire",
      "Retain"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Replatform ('lift, tinker and shift') introduce ottimizzazioni cloud, come un database managed, senza cambiare l'architettura dell'applicazione.",
    "domain": "Cloud Concepts",
    "id": "cf418115d93a"
  },
  {
    "q": "Un'azienda decide di riprogettare un'applicazione monolitica come microservizi usando AWS Lambda e Amazon DynamoDB. Quale strategia di migrazione è questa?",
    "opts": [
      "Relocate",
      "Repurchase",
      "Rehost",
      "Refactor / re-architect"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Refactor/re-architect riprogetta l'applicazione con servizi cloud-native. È la strategia più costosa all'inizio ma con i maggiori benefici di scalabilità e agilità.",
    "domain": "Cloud Concepts",
    "id": "faa7805e6430"
  },
  {
    "q": "Durante la pianificazione della migrazione, un'azienda trova applicazioni che non vengono più usate. Qual è la strategia di migrazione consigliata per queste?",
    "opts": [
      "Relocate",
      "Rehost",
      "Retain",
      "Retire"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Retire significa dismettere ciò che non serve più: riduce costi e superficie di attacco. Retain significa lasciare l'applicazione on-premises per ora.",
    "domain": "Cloud Concepts",
    "id": "bc08023415b1"
  },
  {
    "q": "Un'azienda vuole spostare su AWS i suoi carichi di lavoro basati su VMware senza convertire le macchine virtuali né cambiare il modo di lavorare. Quale strategia di migrazione descrive questo caso?",
    "opts": [
      "Repurchase",
      "Relocate",
      "Refactor",
      "Retire"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Relocate sposta l'infrastruttura (per esempio VMware con VMware Cloud on AWS) senza acquistare nuovo hardware, riscrivere le app o cambiare le operazioni.",
    "domain": "Cloud Concepts",
    "id": "0e922a7260d9"
  },
  {
    "q": "Un'azienda sostituisce il suo server di posta on-premises con un prodotto email SaaS. Quale strategia di migrazione è questa?",
    "opts": [
      "Repurchase",
      "Rehost",
      "Replatform",
      "Retain"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Repurchase ('drop and shop') significa sostituire l'applicazione con un prodotto diverso, spesso SaaS.",
    "domain": "Cloud Concepts",
    "id": "88e6bc72c806"
  },
  {
    "q": "Quale servizio AWS aiuta a costruire un business case per la migrazione basato sui dati, analizzando l'utilizzo delle risorse on-premises e proiettando i costi su AWS?",
    "opts": [
      "AWS Migration Evaluator",
      "AWS Application Migration Service",
      "AWS DataSync",
      "AWS Database Migration Service"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Migration Evaluator analizza l'ambiente on-premises e crea il business case con la stima dei costi su AWS. Application Migration Service esegue il rehost, DataSync trasferisce file, DMS migra database.",
    "domain": "Cloud Concepts",
    "id": "9f3169e32dd3"
  },
  {
    "q": "Quale servizio AWS automatizza le migrazioni lift-and-shift di server fisici, virtuali e cloud verso Amazon EC2 con tempi di inattività minimi?",
    "opts": [
      "AWS Application Migration Service (AWS MGN)",
      "AWS Migration Hub",
      "AWS Transfer Family",
      "AWS Schema Conversion Tool"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "AWS MGN replica continuamente i server sorgente e li avvia su EC2 al cutover. Migration Hub traccia le migrazioni, SCT converte schemi di database, Transfer Family fornisce SFTP/FTP managed.",
    "domain": "Cloud Concepts",
    "id": "59b74b9fc93c"
  },
  {
    "q": "Quale servizio AWS offre un unico posto per seguire l'avanzamento delle migrazioni delle applicazioni tra più strumenti AWS e dei partner?",
    "opts": [
      "AWS Migration Hub",
      "AWS Control Tower",
      "AWS Service Catalog",
      "AWS Systems Manager"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Migration Hub offre una vista centrale dello stato delle migrazioni eseguite con diversi strumenti AWS e dei partner.",
    "domain": "Cloud Concepts",
    "id": "a0c87d63e372"
  },
  {
    "q": "Un'azienda deve raccogliere informazioni sui suoi server on-premises, comprese configurazione, utilizzo e dipendenze, per pianificare una migrazione. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Config",
      "AWS Application Discovery Service",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Application Discovery Service raccoglie inventario, utilizzo e dipendenze dei server on-premises per pianificare la migrazione. Inspector, Config e Trusted Advisor lavorano su risorse AWS.",
    "domain": "Cloud Concepts",
    "id": "cd8ea078cf2d"
  },
  {
    "q": "Un'azienda deve trasferire 500 TB di dati dal suo data center ad Amazon S3. Con la sua connessione Internet il trasferimento richiederebbe diversi mesi. Qual è la soluzione PIÙ efficiente?",
    "opts": [
      "AWS Site-to-Site VPN",
      "Dispositivi AWS Snowball Edge",
      "AWS DataSync via Internet",
      "Amazon S3 Transfer Acceleration"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Quando la rete richiederebbe settimane o mesi, la Snow Family trasferisce i dati offline spedendo dispositivi fisici. DataSync, Transfer Acceleration e VPN usano comunque la stessa connessione lenta.",
    "domain": "Cloud Concepts",
    "id": "5ef382f6249a"
  },
  {
    "q": "Quale servizio AWS automatizza e accelera i trasferimenti di dati online tra file server NFS o SMB on-premises e i servizi di storage AWS come Amazon S3, Amazon EFS e Amazon FSx?",
    "opts": [
      "AWS Storage Gateway Tape Gateway",
      "AWS Snowball Edge",
      "AWS Backup",
      "AWS DataSync"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "DataSync trasferisce online dati di file system (NFS, SMB, HDFS) verso S3, EFS e FSx, con crittografia e verifica dell'integrità. Snowball è offline, Tape Gateway emula librerie a nastro, AWS Backup gestisce backup.",
    "domain": "Cloud Concepts",
    "id": "3e7a69025f51"
  },
  {
    "q": "I partner commerciali di un'azienda caricano file tramite SFTP. L'azienda vuole conservare questi file direttamente in Amazon S3 senza gestire server. Quale servizio soddisfa questo requisito?",
    "opts": [
      "Amazon EFS",
      "AWS Transfer Family",
      "AWS DataSync",
      "AWS Storage Gateway"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Transfer Family fornisce endpoint SFTP, FTPS e FTP completamente gestiti che salvano i file su S3 o EFS, senza cambiare i processi dei partner.",
    "domain": "Cloud Concepts",
    "id": "5f42eaa8ab43"
  },
  {
    "q": "Un'azienda vuole migrare un database Oracle on-premises su Amazon Aurora PostgreSQL. Quale strumento converte lo schema e il codice del database verso il motore di destinazione?",
    "opts": [
      "AWS Schema Conversion Tool (AWS SCT)",
      "AWS DataSync",
      "AWS Glue",
      "AWS Application Migration Service"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "explain": "SCT converte schema e codice (stored procedure) tra motori diversi. I dati vengono poi migrati con AWS DMS.",
    "domain": "Cloud Concepts",
    "id": "850e2e2b378a"
  },
  {
    "q": "Quale affermazione su AWS Database Migration Service (AWS DMS) è corretta?",
    "opts": [
      "Il database di origine resta pienamente operativo durante la migrazione",
      "Può migrare solo tra motori di database identici",
      "Richiede che il database di origine venga fermato",
      "Supporta solo database che girano già su AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "explain": "Con DMS il database di origine resta operativo durante la migrazione, riducendo al minimo il downtime. Supporta migrazioni omogenee ed eterogenee e sorgenti on-premises.",
    "domain": "Cloud Concepts",
    "id": "b8f0daf1675b"
  },
  {
    "q": "Quale vantaggio del cloud AWS permette a un'azienda di distribuire un'applicazione in più Regioni nel mondo in pochi minuti?",
    "opts": [
      "Economie di scala",
      "Andare globali in pochi minuti",
      "Sostituire le spese fisse con spese variabili",
      "Smettere di spendere soldi per i data center"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "'Go global in minutes' è il beneficio che permette di distribuire applicazioni in più Regioni rapidamente e con pochi clic.",
    "domain": "Cloud Concepts",
    "id": "9cb8b9954194"
  },
  {
    "q": "Quale vantaggio del cloud computing permette ai clienti AWS di pagare prezzi variabili più bassi, perché AWS somma l'utilizzo di centinaia di migliaia di clienti?",
    "opts": [
      "Elasticità",
      "Agilità",
      "Economie di scala",
      "Alta disponibilità"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Economies of scale: aggregando l'uso di moltissimi clienti, AWS ottiene costi più bassi e li trasferisce con prezzi pay-as-you-go più bassi.",
    "domain": "Cloud Concepts",
    "id": "9d7688c222ff"
  },
  {
    "q": "Un'azienda non deve più indovinare la capacità dell'infrastruttura, perché le risorse possono essere aumentate e ridotte secondo necessità. Quale vantaggio del cloud descrive questo caso?",
    "opts": [
      "Beneficiare di enormi economie di scala",
      "Andare globali in pochi minuti",
      "Aumentare velocità e agilità",
      "Smettere di indovinare la capacità"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "'Stop guessing capacity' evita sia la capacità inutilizzata e costosa sia la capacità insufficiente: si scala in base alla domanda reale.",
    "domain": "Cloud Concepts",
    "id": "963a93d88a21"
  },
  {
    "q": "Qual è un vantaggio del passaggio da un modello a spese in conto capitale (CapEx) a un modello a spese operative (OpEx) nel cloud AWS?",
    "opts": [
      "Pagare la capacità con anni di anticipo",
      "Possedere l'hardware fisico",
      "Pagare solo le risorse IT effettivamente consumate",
      "Ammortizzare i server nel tempo"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Con l'OpEx (spesa variabile) si paga solo ciò che si usa, senza grandi investimenti iniziali in hardware da ammortizzare.",
    "domain": "Cloud Concepts",
    "id": "f880a58c371f"
  },
  {
    "q": "Cosa significa \"rightsizing\" nel contesto dell'ottimizzazione dei costi AWS?",
    "opts": [
      "Acquistare Istanze Reserved per tutti i carichi di lavoro",
      "Scegliere sempre l'istanza più grande disponibile",
      "Adeguare tipi e dimensioni delle istanze ai requisiti di prestazioni e capacità del carico di lavoro al costo più basso",
      "Spostare tutti i carichi di lavoro in una singola Availability Zone"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Rightsizing significa scegliere tipo e dimensione delle risorse in base al fabbisogno reale, al costo minimo. AWS Compute Optimizer e Cost Explorer forniscono raccomandazioni.",
    "domain": "Cloud Concepts",
    "id": "d15b9fd10bf8"
  },
  {
    "q": "Quale attività può essere svolta SOLO dall'utente root dell'account AWS?",
    "opts": [
      "Avviare un'istanza Amazon EC2",
      "Cambiare il piano di AWS Support",
      "Creare un gruppo IAM",
      "Abilitare AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Cambiare o annullare il piano di AWS Support è riservato all'utente root, come chiudere l'account o cambiarne l'email. Le altre azioni possono essere svolte da utenti IAM con i permessi adatti.",
    "domain": "Security and Compliance",
    "id": "6371d518d6f9"
  },
  {
    "q": "Quali attività richiedono le credenziali dell'utente root dell'account AWS? (Scegline DUE.)",
    "opts": [
      "Registrarsi come venditore nel Reserved Instance Marketplace",
      "Visualizzare AWS Cost Explorer",
      "Chiudere l'account AWS",
      "Collegare una policy a un ruolo IAM",
      "Creare un bucket Amazon S3"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "IAM"
    ],
    "explain": "Chiudere l'account e registrarsi come venditore nel Reserved Instance Marketplace richiedono l'utente root. Creare bucket, gestire policy e vedere Cost Explorer si può fare con utenti IAM autorizzati.",
    "domain": "Security and Compliance",
    "id": "adbdc8b30dd2"
  },
  {
    "q": "Qual è una best practice raccomandata da AWS per l'utente root?",
    "opts": [
      "Usare l'utente root per le attività amministrative quotidiane",
      "Condividere la password di root con il team operativo",
      "Creare chiavi di accesso per l'utente root da usare con la AWS CLI",
      "Abilitare l'MFA e non creare chiavi di accesso per l'utente root"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Best practice: proteggere root con MFA, non creare access key per root e usarlo solo per le poche operazioni che lo richiedono.",
    "domain": "Security and Compliance",
    "id": "1a5925d4ff2e"
  },
  {
    "q": "Un'azienda ha molti account AWS in AWS Organizations e vuole che i dipendenti accedano una sola volta con la loro identità aziendale per raggiungere tutti gli account e le applicazioni di business assegnati. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "Utenti IAM in ogni account",
      "AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "IAM Identity Center (successore di AWS SSO) fornisce single sign-on per la forza lavoro su più account AWS e applicazioni, anche collegandosi a un identity provider esistente.",
    "domain": "Security and Compliance",
    "id": "be8135fdb158"
  },
  {
    "q": "Un'app mobile deve permettere agli utenti di registrarsi e accedere, anche tramite provider di identità social come Google e Facebook. Quale servizio AWS dovrebbe essere usato?",
    "opts": [
      "AWS Organizations",
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS IAM Identity Center"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Cognito gestisce registrazione, login e controllo accessi per gli utenti finali di app web e mobile, con social login e federazione.",
    "domain": "Security and Compliance",
    "id": "c111be3fa515"
  },
  {
    "q": "Un'azienda vuole eseguire Microsoft Active Directory su AWS come servizio gestito. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "AWS License Manager",
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Directory Service for Microsoft Active Directory"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "AWS Directory Service (AWS Managed Microsoft AD) fornisce Active Directory managed su AWS e può creare trust con l'AD on-premises.",
    "domain": "Security and Compliance",
    "id": "7bf085dbc2c4"
  },
  {
    "q": "Quale funzionalità AWS individua le risorse, come bucket S3 o ruoli IAM, condivise con un'entità esterna all'account o all'organizzazione?",
    "opts": [
      "IAM credential report",
      "Amazon Inspector",
      "IAM Access Analyzer",
      "Controlli dei costi di AWS Trusted Advisor"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "IAM Access Analyzer analizza le policy basate sulle risorse e segnala quelle accessibili dall'esterno della zona di fiducia (account o organizzazione). Valida anche le policy e trova accessi inutilizzati.",
    "domain": "Security and Compliance",
    "id": "072293f2297f"
  },
  {
    "q": "Un team di sicurezza ha bisogno di un report che elenchi tutti gli utenti IAM di un account e lo stato delle loro password, chiavi di accesso e dispositivi MFA. Quale funzionalità dovrebbe usare?",
    "opts": [
      "IAM credential report",
      "IAM Access Advisor",
      "Conformance pack di AWS Config",
      "AWS CloudTrail Lake"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Il credential report è un file a livello di account con tutti gli utenti IAM e lo stato delle loro credenziali (password, access key, MFA, rotazione).",
    "domain": "Security and Compliance",
    "id": "90dbbac0d2f3"
  },
  {
    "q": "Un amministratore vuole vedere a quali servizi AWS un utente IAM ha il permesso di accedere e quando li ha usati l'ultima volta, per rimuovere i permessi inutilizzati. Quale funzionalità dovrebbe essere usata?",
    "opts": [
      "Amazon Detective",
      "IAM Access Advisor (informazioni sull'ultimo accesso)",
      "AWS Artifact",
      "IAM credential report"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Access Advisor mostra, per utente, gruppo o ruolo, i servizi consentiti e l'ultima data di utilizzo: utile per applicare il least privilege.",
    "domain": "Security and Compliance",
    "id": "5e0005d7e65c"
  },
  {
    "q": "Quale servizio AWS emette credenziali temporanee e con privilegi limitati quando un utente o un'applicazione assume un ruolo IAM?",
    "opts": [
      "AWS Key Management Service (AWS KMS)",
      "AWS Security Token Service (AWS STS)",
      "AWS Certificate Manager",
      "User pool di Amazon Cognito"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "AWS STS genera credenziali temporanee quando si assume un ruolo IAM o si usa la federazione.",
    "domain": "Security and Compliance",
    "id": "a6760e702942"
  },
  {
    "q": "Un'azienda vuole impedire a tutti gli account di un'unità organizzativa (OU) di usare servizi AWS fuori dalle Regioni approvate, anche agli amministratori di quegli account. Cosa dovrebbe usare?",
    "opts": [
      "AWS Shield Advanced",
      "Permissions boundary IAM in un account",
      "Service control policy (SCP) in AWS Organizations",
      "Security group"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Le SCP limitano il massimo dei permessi disponibili negli account membri di un'organizzazione, incluso l'utente root di quegli account. Non concedono permessi, li restringono.",
    "domain": "Security and Compliance",
    "id": "b1cdb85a4f9a"
  },
  {
    "q": "Quale servizio AWS offre una vista centralizzata dei risultati di sicurezza di Amazon GuardDuty, Amazon Inspector e Amazon Macie, ed esegue controlli automatici rispetto alle best practice di sicurezza?",
    "opts": [
      "AWS Audit Manager",
      "AWS Artifact",
      "AWS Security Hub",
      "Amazon Detective"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Security Hub aggrega i finding di diversi servizi e verifica l'account rispetto a standard come CIS e AWS Foundational Security Best Practices. Detective serve a indagare, Audit Manager a raccogliere prove, Artifact fornisce report di conformità.",
    "domain": "Security and Compliance",
    "id": "9fb95526b19c"
  },
  {
    "q": "Un analista di sicurezza deve indagare sulla causa principale di un potenziale problema di sicurezza analizzando le relazioni tra le risorse e l'attività nel tempo. Quale servizio AWS dovrebbe essere usato?",
    "opts": [
      "Amazon Macie",
      "Amazon Detective",
      "AWS Security Hub",
      "AWS Shield"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Detective raccoglie e collega dati di log (CloudTrail, VPC Flow Logs, GuardDuty) per facilitare l'indagine e trovare la causa dei problemi di sicurezza.",
    "domain": "Security and Compliance",
    "id": "778f13865b10"
  },
  {
    "q": "Quale servizio AWS raccoglie continuamente prove dall'utilizzo di AWS per semplificare il modo in cui un'azienda valuta rischi e conformità per gli audit?",
    "opts": [
      "Amazon Inspector",
      "AWS Audit Manager",
      "AWS Trusted Advisor",
      "AWS Artifact"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Audit Manager raccoglie automaticamente le prove dall'uso di AWS e le organizza secondo framework (es. GDPR, HIPAA, PCI) per preparare gli audit. Artifact invece fornisce i report di conformità di AWS stessa.",
    "domain": "Security and Compliance",
    "id": "958e64e077bd"
  },
  {
    "q": "Dove può un cliente scaricare su richiesta i report di conformità di AWS, come i report SOC e le attestazioni PCI DSS?",
    "opts": [
      "AWS Config",
      "AWS Health Dashboard",
      "AWS Audit Manager",
      "AWS Artifact"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "AWS Artifact è il portale self-service per i report di conformità di AWS e per accettare accordi come il BAA per HIPAA.",
    "domain": "Security and Compliance",
    "id": "b51e67b6bc3e"
  },
  {
    "q": "Un'azienda deve distribuire un firewall di rete gestito e con stato (stateful), con prevenzione delle intrusioni, per il traffico in entrata e in uscita dai suoi VPC. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Shield Standard",
      "Security group",
      "AWS WAF",
      "AWS Network Firewall"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "AWS Network Firewall è un firewall managed a livello di VPC con ispezione stateful e prevenzione delle intrusioni. WAF protegge applicazioni web (livello 7), i security group filtrano a livello di istanza, Shield protegge da DDoS.",
    "domain": "Security and Compliance",
    "id": "a363cb44ec91"
  },
  {
    "q": "Un'azienda vuole configurare e gestire in modo centralizzato le regole di AWS WAF, le protezioni di AWS Shield Advanced e i security group su tutti gli account della sua organizzazione. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Security Hub",
      "AWS Network Firewall",
      "AWS Config",
      "AWS Firewall Manager"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Firewall Manager gestisce centralmente regole di WAF, Shield Advanced, security group e Network Firewall su tutti gli account di AWS Organizations, applicandole anche alle nuove risorse.",
    "domain": "Security and Compliance",
    "id": "e9f83ac018ae"
  },
  {
    "q": "Quale servizio AWS fornisce certificati SSL/TLS pubblici gratuiti da usare con Elastic Load Balancing e Amazon CloudFront, e li rinnova automaticamente?",
    "opts": [
      "AWS Certificate Manager (ACM)",
      "AWS Key Management Service (AWS KMS)",
      "AWS Secrets Manager",
      "AWS CloudHSM"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "ACM fornisce certificati SSL/TLS pubblici gratuiti per i servizi integrati (ELB, CloudFront, API Gateway) e li rinnova automaticamente.",
    "domain": "Security and Compliance",
    "id": "09570d21edd5"
  },
  {
    "q": "Un'azienda deve conservare le sue chiavi di cifratura in hardware security module (HSM) dedicati, single-tenant, che controlla completamente. Quale servizio AWS soddisfa questo requisito?",
    "opts": [
      "AWS Certificate Manager",
      "AWS CloudHSM",
      "AWS KMS con chiavi gestite da AWS",
      "AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "CloudHSM fornisce HSM dedicati a un solo cliente, con chiavi gestite esclusivamente dal cliente. KMS è un servizio managed multi-tenant.",
    "domain": "Security and Compliance",
    "id": "85169e2a81e1"
  },
  {
    "q": "Un'applicazione deve conservare in modo sicuro le credenziali del database e ruotarle automaticamente secondo una pianificazione. Quale servizio AWS è il PIÙ adatto?",
    "opts": [
      "Amazon S3 con cifratura lato server",
      "AWS Secrets Manager",
      "Parametri standard di AWS Systems Manager Parameter Store",
      "AWS Certificate Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Secrets Manager conserva i segreti cifrati e offre la rotazione automatica integrata (per esempio per RDS). Parameter Store conserva configurazioni e segreti ma non ha la rotazione automatica nativa.",
    "domain": "Security and Compliance",
    "id": "ae12ab24bb14"
  },
  {
    "q": "Quale funzionalità di AWS Systems Manager offre uno storage sicuro e gerarchico per dati di configurazione come impostazioni delle applicazioni e codici di licenza, senza costi aggiuntivi per i parametri standard?",
    "opts": [
      "Run Command",
      "Parameter Store",
      "Patch Manager",
      "Session Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Parameter Store conserva configurazioni e segreti in modo gerarchico; i parametri standard non hanno costi aggiuntivi.",
    "domain": "Security and Compliance",
    "id": "c5fe11ac1310"
  },
  {
    "q": "Quale attività legata alla cifratura è responsabilità del cliente secondo il modello di responsabilità condivisa di AWS?",
    "opts": [
      "Scegliere se cifrare i dati a riposo in Amazon S3 e gestire l'accesso alle chiavi",
      "Cifrare i dischi fisici nei data center AWS",
      "Distruggere i supporti di storage a fine vita",
      "Proteggere l'hypervisor"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "explain": "Il cliente decide se e come cifrare i propri dati e gestisce gli accessi alle chiavi ('security IN the cloud'). Hardware, distruzione dei supporti e hypervisor sono responsabilità di AWS.",
    "domain": "Security and Compliance",
    "id": "9f14b5d1ac7b"
  },
  {
    "q": "Quale affermazione sui penetration test su AWS è corretta?",
    "opts": [
      "I clienti devono sempre chiedere l'approvazione di AWS prima di qualsiasi penetration test",
      "I clienti possono eseguire penetration test sulle proprie risorse, per i servizi approvati, senza approvazione preventiva",
      "I penetration test sono vietati su AWS",
      "Gli attacchi DDoS simulati sono consentiti senza restrizioni"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "AWS consente test di sicurezza sulle proprie risorse per un elenco di servizi (es. EC2, RDS, Lambda, CloudFront) senza approvazione preventiva. Sono vietati DoS/DDoS non autorizzati, flooding e altre attività elencate nella policy.",
    "domain": "Security and Compliance",
    "id": "809f1c5126f0"
  },
  {
    "q": "Un'azienda nota che un'istanza Amazon EC2 di proprietà di qualcun altro sta inviando spam ai suoi server di posta. Chi dovrebbe contattare l'azienda?",
    "opts": [
      "Il proprio Technical Account Manager",
      "Gli AWS Professional Services",
      "L'AWS Partner Network",
      "Il team AWS Trust & Safety"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Gli abusi che provengono da risorse AWS (spam, port scanning, DoS, malware) vanno segnalati al team AWS Trust & Safety tramite il modulo di segnalazione abusi.",
    "domain": "Security and Compliance",
    "id": "3244ed865a46"
  },
  {
    "q": "Quale attività è vietata dalla policy AWS sui penetration test senza un'approvazione aggiuntiva?",
    "opts": [
      "Analizzare le proprie istanze Amazon EC2 alla ricerca di vulnerabilità",
      "Testare la configurazione del proprio database Amazon RDS",
      "Testare le proprie funzioni AWS Lambda",
      "Simulare un attacco distributed denial of service (DDoS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Le simulazioni DoS/DDoS non sono consentite liberamente: richiedono il rispetto di una policy specifica. Testare le proprie istanze, database e funzioni è permesso.",
    "domain": "Security and Compliance",
    "id": "0bb3ee3adec8"
  },
  {
    "q": "Un'azienda deve garantire che i suoi dati siano conservati solo in un paese specifico, per rispettare requisiti di residenza dei dati. Come può aiutarla AWS?",
    "opts": [
      "AWS replica automaticamente tutti i dati in ogni Regione",
      "Le edge location conservano tutti i dati in modo permanente",
      "Su AWS la residenza dei dati non è possibile",
      "L'azienda sceglie la Regione AWS in cui conservare i dati, e AWS non sposta i dati fuori da quella Regione senza un'azione del cliente"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Il cliente sceglie la Regione in cui conservare i dati; AWS non li sposta in altre Regioni senza un'azione del cliente. Per esigenze più stringenti esistono anche Outposts e Local Zones.",
    "domain": "Security and Compliance",
    "id": "941e7d036570"
  },
  {
    "q": "Quale servizio AWS usa il machine learning per individuare e proteggere i dati sensibili, come i dati personali identificativi (PII), conservati in Amazon S3?",
    "opts": [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Shield"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Macie usa machine learning e pattern matching per trovare dati sensibili come PII in S3. GuardDuty rileva minacce, Inspector vulnerabilità, Shield protegge da DDoS.",
    "domain": "Security and Compliance",
    "id": "36747165e5e7"
  },
  {
    "q": "Quale servizio AWS analizza automaticamente le istanze Amazon EC2, le immagini di container in Amazon ECR e le funzioni AWS Lambda alla ricerca di vulnerabilità software?",
    "opts": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Config",
      "Amazon Macie"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Amazon Inspector scansiona continuamente EC2, immagini ECR e funzioni Lambda per vulnerabilità software (CVE) ed esposizione di rete.",
    "domain": "Security and Compliance",
    "id": "6dafcd1f5020"
  },
  {
    "q": "Quale servizio AWS analizza gli eventi di AWS CloudTrail, i VPC Flow Logs e i log DNS per rilevare minacce come istanze compromesse o chiamate API insolite?",
    "opts": [
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "AWS Artifact",
      "Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "GuardDuty è il servizio di rilevamento delle minacce che analizza CloudTrail, VPC Flow Logs e log DNS con machine learning e threat intelligence.",
    "domain": "Security and Compliance",
    "id": "8c737546f916"
  },
  {
    "q": "Quale funzionalità di AWS Shield Advanced NON è inclusa in AWS Shield Standard?",
    "opts": [
      "Nessun costo aggiuntivo",
      "Protezione automatica per tutti i clienti AWS",
      "Accesso 24/7 all'AWS Shield Response Team (SRT) e protezione dai costi dovuti ai DDoS",
      "Protezione dagli attacchi DDoS comuni a livello di rete e di trasporto"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "Shield Standard è gratuito e automatico contro gli attacchi DDoS più comuni. Shield Advanced aggiunge il Shield Response Team 24/7, la protezione dai costi dovuti ai picchi di un attacco e una visibilità più dettagliata.",
    "domain": "Security and Compliance",
    "id": "6e1bb5094f2d"
  },
  {
    "q": "Secondo il modello di responsabilità condivisa di AWS, cosa è responsabilità del cliente quando usa Amazon EC2?",
    "opts": [
      "Applicare le patch al sistema operativo guest",
      "Applicare le patch all'hypervisor",
      "Mantenere l'infrastruttura di rete fisica",
      "Sostituire i dischi rigidi guasti"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "explain": "Con EC2 (IaaS) il cliente gestisce il sistema operativo guest, le applicazioni, i security group e i dati. AWS gestisce hardware, rete fisica e hypervisor.",
    "domain": "Security and Compliance",
    "id": "6eaaf5d4f04a"
  },
  {
    "q": "Quando si usa un servizio gestito come Amazon DynamoDB, quale responsabilità resta al cliente?",
    "opts": [
      "Gestire i server sottostanti",
      "Applicare le patch al software del database",
      "Gestire l'accesso ai dati con le policy IAM",
      "Garantire l'alta disponibilità dell'infrastruttura"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "explain": "Con servizi managed AWS gestisce sistema operativo, software e infrastruttura; il cliente resta responsabile dei propri dati e di chi può accedervi (IAM, cifratura).",
    "domain": "Security and Compliance",
    "id": "4fba7aafae41"
  },
  {
    "q": "Uno sviluppatore vuole eseguire comandi della AWS CLI da un browser senza installare o configurare nulla in locale. Quale servizio AWS dovrebbe essere usato?",
    "opts": [
      "AWS Systems Manager Run Command",
      "AWS Cloud9",
      "AWS CloudShell",
      "Amazon WorkSpaces"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "CloudShell è un terminale nel browser, già autenticato con le credenziali della console e con la CLI preinstallata, senza costi aggiuntivi.",
    "domain": "Cloud Technology and Services",
    "id": "f7a929b2544e"
  },
  {
    "q": "Quale metodo di accesso ad AWS è il PIÙ adatto per un'applicazione scritta in Python che deve chiamare i servizi AWS in modo programmatico?",
    "opts": [
      "Un SDK AWS",
      "AWS CloudShell",
      "L'AWS Health Dashboard",
      "La AWS Management Console"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Gli SDK (per Python boto3, Java, JavaScript, ecc.) permettono alle applicazioni di chiamare le API AWS dal codice.",
    "domain": "Cloud Technology and Services",
    "id": "1dcc10518dde"
  },
  {
    "q": "Quali credenziali servono per fare chiamate programmatiche ad AWS con la AWS CLI usando un utente IAM?",
    "opts": [
      "Un access key ID e una secret access key",
      "Una coppia di chiavi SSH",
      "Nome utente e password",
      "Solo un dispositivo MFA"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "L'accesso programmatico (CLI, SDK, API) con un utente IAM usa una coppia access key ID e secret access key. Nome utente e password servono per la console.",
    "domain": "Cloud Technology and Services",
    "id": "efa9fb760663"
  },
  {
    "q": "Un team vuole definire l'infrastruttura AWS usando un linguaggio di programmazione familiare, come TypeScript o Python, e distribuirla tramite AWS CloudFormation. Quale strumento dovrebbe usare?",
    "opts": [
      "AWS CodeDeploy",
      "AWS Elastic Beanstalk",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS OpsWorks"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ],
    "explain": "Il CDK permette di scrivere l'infrastruttura in linguaggi di programmazione; il codice viene sintetizzato in template CloudFormation e distribuito.",
    "domain": "Cloud Technology and Services",
    "id": "e6340a40b641"
  },
  {
    "q": "Quali sono i vantaggi dell'infrastruttura come codice con AWS CloudFormation? (Scegline DUE.)",
    "opts": [
      "Poter versionare e rivedere le modifiche all'infrastruttura come il codice delle applicazioni",
      "Distribuzione delle risorse ripetibile e coerente",
      "Riduzione automatica della fattura AWS del 50%",
      "Eliminazione della necessità di permessi IAM",
      "Migrazione automatica dei server on-premises"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "CloudFormation"
    ],
    "explain": "L'IaC rende i deployment ripetibili e coerenti tra ambienti e permette di versionare e revisionare le modifiche. Non riduce automaticamente i costi né elimina i permessi.",
    "domain": "Cloud Technology and Services",
    "id": "696b5f9fa4ef"
  },
  {
    "q": "Un'azienda di media ha bisogno di una latenza di pochi millisecondi (a una cifra) per le postazioni di montaggio video in una grande città lontana dalla Regione AWS più vicina. Quale infrastruttura AWS dovrebbe usare?",
    "opts": [
      "AWS Wavelength Zones",
      "Availability Zone aggiuntive nella stessa Regione",
      "AWS Local Zones",
      "Edge location di Amazon CloudFront"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Le Local Zones estendono una Regione vicino a grandi centri abitati, offrendo latenza di pochi millisecondi per carichi come video editing, gaming e simulazioni.",
    "domain": "Cloud Technology and Services",
    "id": "3056aea737f2"
  },
  {
    "q": "Quale infrastruttura AWS integra i servizi di calcolo e storage AWS nelle reti 5G degli operatori di telecomunicazioni, per offrire una latenza bassissima ai dispositivi mobili?",
    "opts": [
      "AWS Global Accelerator",
      "AWS Outposts",
      "AWS Wavelength",
      "AWS Local Zones"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Wavelength porta i servizi AWS all'interno delle reti 5G degli operatori, così il traffico dai dispositivi mobili non deve lasciare la rete dell'operatore.",
    "domain": "Cloud Technology and Services",
    "id": "5735d4002f00"
  },
  {
    "q": "Per motivi normativi, un'azienda deve tenere alcuni dati ed elaborazioni nel proprio data center, ma vuole usare le stesse API e gli stessi servizi AWS, come Amazon EC2 e Amazon EBS. Quale soluzione dovrebbe usare?",
    "opts": [
      "AWS Outposts",
      "AWS Local Zones",
      "AWS Snowball Edge",
      "AWS Direct Connect"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Outposts installa infrastruttura AWS gestita da AWS nel data center del cliente, con gli stessi servizi e API. Le Local Zones sono strutture AWS, non nel tuo data center.",
    "domain": "Cloud Technology and Services",
    "id": "c88299ae20c3"
  },
  {
    "q": "Che cos'è una Availability Zone AWS?",
    "opts": [
      "Un'area geografica che contiene più Regioni",
      "Uno o più data center distinti, con alimentazione, rete e connettività ridondanti, all'interno di una Regione AWS",
      "Un punto di cache usato da Amazon CloudFront",
      "Un singolo rack di server nel data center di un cliente"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Una AZ è composta da uno o più data center isolati con alimentazione, rete e connettività ridondanti, all'interno di una Regione. Ogni Regione ha almeno 3 AZ.",
    "domain": "Cloud Technology and Services",
    "id": "95dd6b05f52f"
  },
  {
    "q": "Quali fattori dovrebbe considerare un'azienda nella scelta della Regione AWS per un carico di lavoro? (Scegline DUE.)",
    "opts": [
      "I colori della AWS Management Console",
      "Il numero di utenti IAM nell'account",
      "Il piano di AWS Support dell'account",
      "La vicinanza ai clienti per ridurre la latenza",
      "I requisiti di conformità e di residenza dei dati"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Networking"
    ],
    "explain": "Nella scelta della Regione contano conformità/residenza dei dati, vicinanza agli utenti (latenza), disponibilità dei servizi e prezzi. Utenti IAM e piano di supporto sono globali e non dipendono dalla Regione.",
    "domain": "Cloud Technology and Services",
    "id": "50aa823085d2"
  },
  {
    "q": "Una piccola impresa senza esperienza di cloud vuole lanciare un semplice sito web con un server virtuale preconfigurato, storage e rete, a un prezzo mensile basso e prevedibile. Quale servizio è il PIÙ adatto?",
    "opts": [
      "Amazon EKS",
      "AWS Batch",
      "Amazon Lightsail",
      "Amazon EC2 con Auto Scaling"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Lightsail offre server virtuali preconfigurati, storage e rete con un prezzo mensile fisso e una console semplificata. È pensato per siti e app semplici.",
    "domain": "Cloud Technology and Services",
    "id": "ae522526158a"
  },
  {
    "q": "Un team di ricerca deve eseguire centinaia di migliaia di job di calcolo batch e vuole che AWS predisponga automaticamente la quantità e il tipo ottimali di risorse di calcolo. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Batch",
      "Amazon EMR",
      "AWS Step Functions",
      "Amazon Lightsail"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "AWS Batch pianifica ed esegue job batch su larga scala, scegliendo e scalando automaticamente le risorse di calcolo (anche Spot).",
    "domain": "Cloud Technology and Services",
    "id": "a2a3bf8e10a4"
  },
  {
    "q": "Uno sviluppatore vuole distribuire un'applicazione web in container partendo dal codice sorgente o da un'immagine di container, senza gestire server, load balancer o configurazione della scalabilità. Qual è l'opzione PIÙ SEMPLICE?",
    "opts": [
      "Amazon EC2",
      "AWS App Runner",
      "AWS Outposts",
      "Amazon EKS con nodi autogestiti"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate"
    ],
    "explain": "App Runner distribuisce web app e API containerizzate gestendo automaticamente build, deploy, bilanciamento e scaling.",
    "domain": "Cloud Technology and Services",
    "id": "bfb295275789"
  },
  {
    "q": "Un'azienda vuole eseguire Kubernetes su AWS senza installare e gestire il proprio control plane Kubernetes. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "Amazon Elastic Container Registry (Amazon ECR)",
      "Amazon Elastic Kubernetes Service (Amazon EKS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EKS"
    ],
    "explain": "EKS è il servizio Kubernetes managed: AWS gestisce il control plane. ECR è un registro di immagini, Beanstalk è PaaS, Lightsail VPS semplici.",
    "domain": "Cloud Technology and Services",
    "id": "7e1696715ea1"
  },
  {
    "q": "Quale opzione di calcolo permette ai container di Amazon ECS o Amazon EKS di girare senza predisporre o gestire istanze EC2?",
    "opts": [
      "Dedicated Hosts Amazon EC2",
      "AWS Outposts",
      "AWS Fargate",
      "Amazon Lightsail"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EKS"
    ],
    "explain": "Fargate è il motore di calcolo serverless per container: si definiscono CPU e memoria per task o pod e AWS gestisce i server.",
    "domain": "Cloud Technology and Services",
    "id": "a2ac2aaf6830"
  },
  {
    "q": "Dove dovrebbe un'azienda conservare, gestire e distribuire le sue immagini di container Docker su AWS?",
    "opts": [
      "AWS CodeArtifact",
      "Amazon S3 Glacier",
      "Amazon EFS",
      "Amazon Elastic Container Registry (Amazon ECR)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate"
    ],
    "explain": "ECR è il registro managed di immagini container, integrato con ECS, EKS e Fargate e con scansione delle vulnerabilità.",
    "domain": "Cloud Technology and Services",
    "id": "ab2ed9bc2829"
  },
  {
    "q": "Quale famiglia di istanze Amazon EC2 è la PIÙ adatta a carichi di lavoro con molto calcolo, come elaborazione batch, web server ad alte prestazioni e modellazione scientifica?",
    "opts": [
      "Uso generico (general purpose)",
      "Ottimizzate per la memoria",
      "Ottimizzate per lo storage",
      "Ottimizzate per il calcolo"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Le istanze compute optimized (famiglia C) hanno processori ad alte prestazioni per carichi che dipendono dalla CPU. Memory optimized (R, X) per grandi dataset in memoria, storage optimized (I, D) per molte operazioni di I/O su disco locale.",
    "domain": "Cloud Technology and Services",
    "id": "528faa5f7af7"
  },
  {
    "q": "Quale famiglia di istanze Amazon EC2 è progettata per carichi di lavoro che elaborano grandi set di dati in memoria, come i database in memoria?",
    "opts": [
      "Ottimizzate per il calcolo",
      "Ottimizzate per la memoria",
      "Ottimizzate per lo storage",
      "Calcolo accelerato"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Le istanze memory optimized offrono molta RAM per database in memoria e analisi in tempo reale di grandi dataset.",
    "domain": "Cloud Technology and Services",
    "id": "e08be8844492"
  },
  {
    "q": "Quale famiglia di istanze Amazon EC2 usa acceleratori hardware come le GPU per l'addestramento di machine learning e l'elaborazione grafica?",
    "opts": [
      "Ottimizzate per lo storage",
      "Calcolo accelerato",
      "Uso generico (general purpose)",
      "Ottimizzate per la memoria"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Le istanze accelerated computing (es. P, G, Inf, Trn) usano GPU o chip dedicati per machine learning, grafica e calcolo intensivo.",
    "domain": "Cloud Technology and Services",
    "id": "0b08ed91134d"
  },
  {
    "q": "Un'azienda ha bisogno di un file system condiviso e completamente gestito per applicazioni Windows, che supporti il protocollo SMB e si integri con Microsoft Active Directory. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon S3",
      "Amazon FSx for Windows File Server",
      "Amazon EFS",
      "Amazon EBS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "FSx for Windows File Server fornisce file system Windows nativi (SMB, NTFS, Active Directory). EFS è un file system NFS per Linux, EBS è storage a blocchi per una istanza, S3 è object storage.",
    "domain": "Cloud Technology and Services",
    "id": "fa888d0d7ea1"
  },
  {
    "q": "Quale servizio di storage AWS è progettato per carichi di lavoro di calcolo ad alte prestazioni (HPC) e di machine learning che richiedono un file system parallelo veloce?",
    "opts": [
      "Amazon EBS Cold HDD",
      "AWS Storage Gateway",
      "Amazon S3 Glacier Deep Archive",
      "Amazon FSx for Lustre"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "FSx for Lustre è un file system parallelo ad alte prestazioni per HPC, ML e rendering, integrabile con S3.",
    "domain": "Cloud Technology and Services",
    "id": "b4a33c9185f3"
  },
  {
    "q": "Un'azienda vuole gestire e automatizzare in modo centralizzato i backup di Amazon EC2, Amazon EBS, Amazon RDS, Amazon DynamoDB e Amazon EFS tramite piani e policy di backup. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Storage Gateway",
      "Amazon S3 Lifecycle",
      "AWS Backup",
      "AWS DataSync"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "AWS Backup centralizza e automatizza i backup di molti servizi con piani, retention e policy, anche tra account e Regioni.",
    "domain": "Cloud Technology and Services",
    "id": "bf3c83740bb4"
  },
  {
    "q": "Un'azienda vuole ripristinare su AWS i suoi server on-premises entro pochi minuti da un disastro, usando la replica continua a livello di blocchi. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Backup",
      "Amazon S3 Cross-Region Replication",
      "AWS Snowball Edge",
      "AWS Elastic Disaster Recovery"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "AWS Elastic Disaster Recovery replica continuamente i server (on-premises o cloud) in un'area di staging economica e li avvia su AWS in pochi minuti in caso di disastro.",
    "domain": "Cloud Technology and Services",
    "id": "0bc01558f4b2"
  },
  {
    "q": "Quale strategia di disaster recovery ha il costo PIÙ BASSO ma il recovery time objective (RTO) PIÙ LUNGO?",
    "opts": [
      "Pilot light",
      "Multi-site active/active",
      "Backup and restore",
      "Warm standby"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Backup and restore costa meno perché non tiene risorse attive, ma il ripristino richiede ore. Pilot light, warm standby e multi-site riducono l'RTO aumentando i costi.",
    "domain": "Cloud Technology and Services",
    "id": "cb99402e45b4"
  },
  {
    "q": "In una strategia di disaster recovery pilot light, cosa gira nella Regione di ripristino prima che si verifichi un disastro?",
    "opts": [
      "Solo i componenti essenziali, come un database replicato, tenuti sempre accesi",
      "Una copia ridotta ma pienamente funzionante dell'ambiente che serve traffico",
      "Una copia a grandezza piena dell'ambiente di produzione",
      "Niente: vengono conservati solo i backup"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Nel pilot light restano accesi solo gli elementi essenziali (es. database replicato); il resto si avvia al bisogno. Un ambiente ridotto ma completo è il warm standby, una copia a piena capacità è il multi-site.",
    "domain": "Cloud Technology and Services",
    "id": "bc1b35a566e7"
  },
  {
    "q": "Che cosa misura il recovery point objective (RPO)?",
    "opts": [
      "Il costo dell'infrastruttura di ripristino",
      "Il numero di Availability Zone usate",
      "Il tempo massimo accettabile per ripristinare il servizio",
      "La quantità massima accettabile di dati persi, misurata in tempo"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "L'RPO indica quanti dati (misurati in tempo, es. ultimi 15 minuti) si possono perdere. L'RTO indica quanto tempo il servizio può restare fermo.",
    "domain": "Cloud Technology and Services",
    "id": "dae3ccd6dbe8"
  },
  {
    "q": "Quale tipo di storage fornisce uno storage a blocchi temporaneo, fisicamente collegato al computer host di un'istanza Amazon EC2, che va perso quando l'istanza si ferma?",
    "opts": [
      "Instance store",
      "Amazon S3",
      "Amazon EFS",
      "Amazon EBS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "L'instance store è storage temporaneo sul server fisico: velocissimo ma i dati si perdono quando l'istanza si ferma o termina. EBS invece è persistente.",
    "domain": "Cloud Technology and Services",
    "id": "c20eba21f0f9"
  },
  {
    "q": "Quale servizio di database AWS è compatibile con i carichi di lavoro MongoDB e conserva i dati come documenti simili a JSON?",
    "opts": [
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Keyspaces",
      "Amazon Redshift"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "DocumentDB è un database documentale managed compatibile con MongoDB. Neptune è a grafo, Keyspaces compatibile con Cassandra, Redshift è un data warehouse.",
    "domain": "Cloud Technology and Services",
    "id": "3c2d96beebb4"
  },
  {
    "q": "Un'azienda ha bisogno di un database per conservare e interrogare dati molto connessi tra loro, come le relazioni di un social network e gli schemi per il rilevamento delle frodi. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Neptune",
      "Amazon RDS for MySQL",
      "Amazon ElastiCache",
      "Amazon Timestream"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "Neptune è un database a grafo ottimizzato per relazioni molto connesse.",
    "domain": "Cloud Technology and Services",
    "id": "7789d50cc1ff"
  },
  {
    "q": "Un'azienda esegue carichi di lavoro Apache Cassandra e vuole un database serverless, gestito e compatibile con Cassandra. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Keyspaces (for Apache Cassandra)",
      "Amazon Aurora",
      "Amazon DocumentDB",
      "Amazon Neptune"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "Amazon Keyspaces è un servizio serverless compatibile con Apache Cassandra (CQL).",
    "domain": "Cloud Technology and Services",
    "id": "35e038310a62"
  },
  {
    "q": "Un'applicazione IoT raccoglie migliaia di miliardi di misurazioni dai sensori ogni giorno e deve conservarle e analizzarle nel tempo. Quale database specializzato è il PIÙ adatto?",
    "opts": [
      "Amazon RDS for Oracle",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Timestream"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "Timestream è un database per serie temporali, pensato per dati IoT, metriche operative e analisi nel tempo.",
    "domain": "Cloud Technology and Services",
    "id": "a9e7b04ad445"
  },
  {
    "q": "Quale servizio AWS offre un database in memoria durevole, compatibile con Redis OSS, che può essere usato come database principale con latenza di lettura nell'ordine dei microsecondi?",
    "opts": [
      "Amazon Aurora Serverless",
      "Amazon Redshift",
      "Amazon ElastiCache for Memcached",
      "Amazon MemoryDB"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "MemoryDB è un database in memoria compatibile con Redis, durevole (log transazionale Multi-AZ), utilizzabile come database primario. ElastiCache è usato soprattutto come cache.",
    "domain": "Cloud Technology and Services",
    "id": "239743bd7494"
  },
  {
    "q": "Un'azienda vuole migliorare le prestazioni di lettura della sua applicazione mettendo in cache in memoria i risultati delle query più frequenti al database. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon S3 Glacier",
      "Amazon ElastiCache",
      "Snapshot di Amazon EBS",
      "AWS Backup"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "explain": "ElastiCache (Redis OSS, Valkey o Memcached) mette in cache in memoria i dati letti spesso, riducendo latenza e carico sul database.",
    "domain": "Cloud Technology and Services",
    "id": "3f0fdfe9eda0"
  },
  {
    "q": "Quale funzionalità di Amazon RDS migliora la disponibilità mantenendo una replica di riserva sincrona in un'altra Availability Zone, con failover automatico?",
    "opts": [
      "Distribuzione Multi-AZ",
      "Amazon RDS Proxy",
      "Read replica",
      "Backup automatici"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "explain": "Multi-AZ mantiene uno standby sincrono in un'altra AZ con failover automatico (alta disponibilità). Le read replica servono a scalare le letture.",
    "domain": "Cloud Technology and Services",
    "id": "4e479b6f99d5"
  },
  {
    "q": "Un'azienda vuole togliere traffico di lettura al suo database Amazon RDS principale per migliorare le prestazioni. Cosa dovrebbe usare?",
    "opts": [
      "AWS Shield",
      "L'istanza di riserva Multi-AZ",
      "Amazon S3 Transfer Acceleration",
      "Read replica"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ],
    "explain": "Le read replica copiano i dati in modo asincrono e possono servire le letture, scaricando il database primario. Lo standby Multi-AZ non serve traffico.",
    "domain": "Cloud Technology and Services",
    "id": "abd8976a1012"
  },
  {
    "q": "Un gioco multiplayer globale usa UDP e ha bisogno di indirizzi IP statici e di prestazioni migliori, instradando gli utenti sulla rete globale AWS verso l'endpoint sano più vicino. Quale servizio dovrebbe essere usato?",
    "opts": [
      "AWS Direct Connect",
      "AWS Global Accelerator",
      "Instradamento per geolocalizzazione di Amazon Route 53",
      "Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Global Accelerator fornisce due IP statici anycast e instrada traffico TCP e UDP sulla rete AWS fino all'endpoint sano più vicino. CloudFront è una CDN che mette in cache contenuti HTTP.",
    "domain": "Cloud Technology and Services",
    "id": "224409893fa4"
  },
  {
    "q": "Qual è la differenza principale tra Amazon CloudFront e AWS Global Accelerator?",
    "opts": [
      "Global Accelerator mette in cache i file statici, mentre CloudFront si limita a instradare il traffico",
      "CloudFront funziona solo all'interno di una singola Regione",
      "Global Accelerator è un servizio DNS",
      "CloudFront mette in cache i contenuti nelle edge location, mentre Global Accelerator migliora le prestazioni del traffico TCP e UDP senza cache"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "CloudFront è una CDN che mette in cache contenuti vicino agli utenti. Global Accelerator non fa cache: usa la rete globale AWS e IP statici per migliorare la connessione verso gli endpoint.",
    "domain": "Cloud Technology and Services",
    "id": "c873775adc68"
  },
  {
    "q": "Un'azienda vuole che le istanze Amazon EC2 in una subnet privata accedano ad Amazon S3 senza che il traffico passi da Internet. Cosa dovrebbe usare?",
    "opts": [
      "Un internet gateway",
      "Un NAT gateway in una subnet pubblica",
      "AWS Global Accelerator",
      "Un VPC gateway endpoint per Amazon S3"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Un VPC endpoint (gateway endpoint per S3 e DynamoDB) permette di raggiungere il servizio sulla rete AWS senza passare da internet e senza NAT.",
    "domain": "Cloud Technology and Services",
    "id": "ac1545ef3983"
  },
  {
    "q": "Quale tecnologia AWS permette a un'azienda di esporre in modo privato un servizio del suo VPC ad altri VPC e account AWS, senza usare il VPC peering né la rete Internet pubblica?",
    "opts": [
      "AWS PrivateLink",
      "Internet gateway",
      "AWS Site-to-Site VPN",
      "Amazon CloudFront"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "PrivateLink espone servizi tramite interface endpoint privati, senza peering, internet gateway o NAT.",
    "domain": "Cloud Technology and Services",
    "id": "e6c683031c29"
  },
  {
    "q": "Un'azienda ha 50 VPC e diverse reti on-premises. Vuole collegarli tutti tramite un hub centrale invece di gestire molte connessioni punto-punto. Quale servizio dovrebbe usare?",
    "opts": [
      "Internet gateway",
      "Amazon Route 53",
      "VPC peering",
      "AWS Transit Gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Transit Gateway è un hub regionale che collega molte VPC e reti on-premises, evitando una rete di peering punto a punto difficile da gestire.",
    "domain": "Cloud Technology and Services",
    "id": "1b31f16d0cb8"
  },
  {
    "q": "Quale servizio AWS permette ai singoli dipendenti da remoto di collegarsi in modo sicuro dai loro portatili alle risorse di un VPC?",
    "opts": [
      "AWS Client VPN",
      "VPC peering",
      "AWS Site-to-Site VPN",
      "AWS Direct Connect"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Client VPN è una VPN managed per i singoli utenti remoti. Site-to-Site VPN collega un'intera rete on-premises, Direct Connect è una connessione fisica dedicata.",
    "domain": "Cloud Technology and Services",
    "id": "1b2fcbe9e25d"
  },
  {
    "q": "Un'azienda vuole creare, pubblicare e proteggere API REST che richiamano funzioni AWS Lambda, con limitazione del traffico (throttling) e autorizzazione. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Route 53",
      "Elastic Load Balancing",
      "Amazon API Gateway",
      "AWS AppSync con Amazon SQS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "explain": "API Gateway crea, pubblica e protegge API REST, HTTP e WebSocket, con throttling, autorizzazione e integrazione diretta con Lambda.",
    "domain": "Cloud Technology and Services",
    "id": "365436d131f7"
  },
  {
    "q": "Quale tipo di Elastic Load Balancing è il MIGLIORE per instradare le richieste HTTP e HTTPS in base al percorso dell'URL o all'host header?",
    "opts": [
      "Classic Load Balancer",
      "Gateway Load Balancer",
      "Application Load Balancer",
      "Network Load Balancer"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "L'Application Load Balancer lavora a livello 7 e instrada in base a percorso, host e header. Il Network Load Balancer lavora a livello 4 (TCP/UDP) con altissime prestazioni.",
    "domain": "Cloud Technology and Services",
    "id": "b0235503c833"
  },
  {
    "q": "Un'azienda vuole eseguire i framework di big data Apache Spark e Hadoop su un cluster gestito per elaborare grandi dataset. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Glue DataBrew",
      "Amazon Athena",
      "Amazon QuickSight",
      "Amazon EMR"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Amazon EMR esegue framework big data come Spark, Hadoop, Hive e Presto su cluster managed. Athena interroga S3 con SQL senza cluster, QuickSight crea dashboard.",
    "domain": "Cloud Technology and Services",
    "id": "5f7b95dab846"
  },
  {
    "q": "Un'azienda usa Apache Kafka per lo streaming di dati in tempo reale e vuole che AWS gestisca l'infrastruttura Kafka. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon SQS",
      "Amazon MQ",
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
      "Amazon Kinesis Data Firehose"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Amazon MSK è il servizio managed per Apache Kafka, compatibile con le applicazioni Kafka esistenti.",
    "domain": "Cloud Technology and Services",
    "id": "025cf28cde99"
  },
  {
    "q": "Quale servizio AWS aiuta a costruire, proteggere e gestire un data lake su Amazon S3, compresi permessi di accesso centralizzati e granulari?",
    "opts": [
      "AWS Data Exchange",
      "Amazon Redshift",
      "Amazon EMR",
      "AWS Lake Formation"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Lake Formation semplifica la creazione di un data lake su S3 e centralizza i permessi granulari (a livello di tabella, colonna, riga).",
    "domain": "Cloud Technology and Services",
    "id": "969b0bb4703e"
  },
  {
    "q": "Un'azienda vuole trovare, sottoscrivere e usare direttamente in AWS dataset di terze parti, come i dati dei mercati finanziari. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Data Exchange",
      "AWS Glue Data Catalog",
      "AWS Marketplace solo per AMI",
      "Amazon AppFlow"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "AWS Data Exchange è un catalogo per trovare, sottoscrivere e usare dati di terze parti nel cloud.",
    "domain": "Cloud Technology and Services",
    "id": "3cb8ca5aed57"
  },
  {
    "q": "Quale servizio AWS rende facile cercare, visualizzare e analizzare dati di log e query di ricerca di un sito web usando un motore di ricerca open source?",
    "opts": [
      "Amazon Athena",
      "Amazon Neptune",
      "Amazon OpenSearch Service",
      "Amazon Kendra"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "OpenSearch Service (successore di Amazon Elasticsearch Service) serve per ricerca full-text, analisi dei log e osservabilità. Kendra è una ricerca intelligente basata su ML per documenti aziendali.",
    "domain": "Cloud Technology and Services",
    "id": "cc7124a9b245"
  },
  {
    "q": "Quale servizio serverless permette agli utenti di eseguire query SQL standard direttamente sui dati conservati in Amazon S3, pagando solo le query eseguite?",
    "opts": [
      "Amazon EMR su EC2",
      "Amazon Athena",
      "Amazon RDS",
      "Cluster Amazon Redshift con provisioning"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Athena è serverless: interroga i dati in S3 con SQL e si paga per i dati scansionati.",
    "domain": "Cloud Technology and Services",
    "id": "a7eba10ed48e"
  },
  {
    "q": "Quale servizio AWS è un servizio ETL (estrazione, trasformazione, caricamento) serverless che può anche individuare e catalogare i metadati delle fonti di dati?",
    "opts": [
      "AWS Glue",
      "AWS DataSync",
      "Amazon QuickSight",
      "Amazon Kinesis Video Streams"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "AWS Glue è il servizio ETL serverless con un Data Catalog che scopre automaticamente gli schemi tramite i crawler.",
    "domain": "Cloud Technology and Services",
    "id": "f3caa474261a"
  },
  {
    "q": "Un'azienda vuole costruire applicazioni di AI generativa usando foundation model di Amazon e di importanti aziende di AI tramite un'unica API, senza gestire l'infrastruttura. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon SageMaker Ground Truth",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Bedrock"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Amazon Bedrock offre accesso via API a foundation model di Amazon e di altri fornitori, con funzioni per personalizzarli e costruire applicazioni di AI generativa in modo serverless.",
    "domain": "Cloud Technology and Services",
    "id": "6a62f11dd6e2"
  },
  {
    "q": "Quale servizio AWS è un assistente basato sull'AI generativa che può rispondere a domande, riassumere contenuti e aiutare i dipendenti usando i dati aziendali, e aiuta anche gli sviluppatori a scrivere codice?",
    "opts": [
      "Amazon Polly",
      "Amazon Q",
      "Amazon Textract",
      "Amazon Lex"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Amazon Q è l'assistente di AI generativa di AWS: Q Business per i dati aziendali, Q Developer per sviluppatori e operazioni su AWS.",
    "domain": "Cloud Technology and Services",
    "id": "f31fb309ffd4"
  },
  {
    "q": "Un team di data science deve costruire, addestrare e distribuire modelli di machine learning personalizzati su larga scala con un servizio completamente gestito. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Glue",
      "Amazon SageMaker AI",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "SageMaker AI copre tutto il ciclo del machine learning: preparazione dei dati, addestramento, tuning e deploy dei modelli personalizzati.",
    "domain": "Cloud Technology and Services",
    "id": "900f622b498d"
  },
  {
    "q": "Una compagnia assicurativa vuole estrarre automaticamente testo, scrittura a mano, tabelle e campi dei moduli da documenti scansionati. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Transcribe"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Textract estrae testo, scrittura a mano, tabelle e campi dei moduli dai documenti scansionati. Comprehend analizza il testo già digitale.",
    "domain": "Cloud Technology and Services",
    "id": "0d3c72ab0c72"
  },
  {
    "q": "Un'azienda vuole che i dipendenti possano cercare tra documenti conservati in molti archivi e ottenere risposte precise a domande in linguaggio naturale. Quale servizio basato sul machine learning dovrebbe usare?",
    "opts": [
      "Amazon Kendra",
      "Amazon Personalize",
      "Amazon Athena",
      "Amazon OpenSearch Service"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Kendra è un servizio di ricerca intelligente per l'impresa: comprende domande in linguaggio naturale e indicizza molte fonti di documenti.",
    "domain": "Cloud Technology and Services",
    "id": "796590a3ce4e"
  },
  {
    "q": "Un'azienda di e-commerce vuole aggiungere raccomandazioni di prodotti in tempo reale basate sul comportamento degli utenti, senza avere competenze di machine learning. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Lex",
      "Amazon Forecast",
      "Amazon Personalize",
      "Amazon Kendra"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Personalize crea raccomandazioni personalizzate in tempo reale con la stessa tecnologia usata su Amazon.com, senza competenze di ML.",
    "domain": "Cloud Technology and Services",
    "id": "3146ba6ce909"
  },
  {
    "q": "Un'azienda deve convertire in testo l'audio delle chiamate al servizio clienti per analizzarlo. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon Polly",
      "Amazon Translate"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Transcribe converte la voce in testo (speech-to-text). Polly fa l'opposto (text-to-speech), Translate traduce testo, Textract estrae testo da documenti.",
    "domain": "Cloud Technology and Services",
    "id": "7cd546db98f6"
  },
  {
    "q": "Quale servizio AWS converte il testo in un parlato realistico per applicazioni come audiolibri e assistenti vocali?",
    "opts": [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Polly trasforma il testo in voce realistica in molte lingue (text-to-speech).",
    "domain": "Cloud Technology and Services",
    "id": "7994909dd5b2"
  },
  {
    "q": "Un sito web deve tradurre automaticamente le descrizioni dei prodotti in più lingue. Quale servizio dovrebbe essere usato?",
    "opts": [
      "Amazon Polly",
      "Amazon Kendra",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Amazon Translate è il servizio di traduzione automatica neurale.",
    "domain": "Cloud Technology and Services",
    "id": "0dda19896edb"
  },
  {
    "q": "Quale servizio AWS usa l'elaborazione del linguaggio naturale per individuare sentiment, frasi chiave ed entità nelle recensioni dei clienti?",
    "opts": [
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Transcribe",
      "Amazon Rekognition"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Comprehend (NLP) estrae sentiment, frasi chiave, entità e lingua da un testo.",
    "domain": "Cloud Technology and Services",
    "id": "b072fdc28767"
  },
  {
    "q": "Un'azienda vuole costruire un chatbot conversazionale con interfacce vocali e testuali per il suo servizio clienti. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Kendra",
      "Amazon Personalize"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Lex crea interfacce conversazionali (chatbot) con riconoscimento vocale e comprensione del linguaggio, la stessa tecnologia di Alexa.",
    "domain": "Cloud Technology and Services",
    "id": "781f2d7ce43d"
  },
  {
    "q": "Un'azienda vuole instradare eventi provenienti da servizi AWS, dalle proprie applicazioni e da partner SaaS verso destinazioni come AWS Lambda, in base a regole che corrispondono al contenuto degli eventi. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon SQS",
      "Amazon SES",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "SNS",
      "SQS"
    ],
    "explain": "EventBridge è un bus di eventi serverless: riceve eventi da servizi AWS, app e partner SaaS e li instrada ai target in base a regole. Supporta anche la pianificazione (scheduler).",
    "domain": "Cloud Technology and Services",
    "id": "a6d4d0adf348"
  },
  {
    "q": "Un'azienda deve eseguire una funzione AWS Lambda ogni giorno a mezzanotte. Quale servizio può attivare la funzione secondo una pianificazione senza gestire server?",
    "opts": [
      "Amazon CloudFront",
      "Regole di AWS Config",
      "Coda FIFO di Amazon SQS",
      "Amazon EventBridge Scheduler"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "explain": "EventBridge (Scheduler o regole pianificate) può invocare Lambda e altri target secondo espressioni cron o rate.",
    "domain": "Cloud Technology and Services",
    "id": "190c5e97a639"
  },
  {
    "q": "Un flusso di elaborazione degli ordini deve coordinare diverse funzioni AWS Lambda in sequenza, con nuovi tentativi, gestione degli errori e rami paralleli. Quale servizio è progettato per questo?",
    "opts": [
      "Amazon SNS",
      "Amazon MQ",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "explain": "Step Functions orchestra workflow composti da più passaggi con stato, retry, gestione degli errori e rami paralleli, con una console visuale.",
    "domain": "Cloud Technology and Services",
    "id": "a85fd7af8912"
  },
  {
    "q": "Un'azienda sta migrando un'applicazione che usa Apache ActiveMQ e vuole un message broker gestito senza riscrivere il codice di messaggistica. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon SQS",
      "Amazon Kinesis Data Streams",
      "Amazon SNS",
      "Amazon MQ"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "SQS"
    ],
    "explain": "Amazon MQ è un broker di messaggi managed per ActiveMQ e RabbitMQ, compatibile con protocolli standard (JMS, AMQP, MQTT). SQS e SNS richiederebbero di modificare il codice.",
    "domain": "Cloud Technology and Services",
    "id": "8533b13963a8"
  },
  {
    "q": "Un'azienda deve inviare dalla sua applicazione grandi volumi di email transazionali e di marketing. Quale servizio AWS dovrebbe usare?",
    "opts": [
      "Amazon SQS",
      "Amazon Simple Email Service (Amazon SES)",
      "AWS AppSync",
      "Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "SNS"
    ],
    "explain": "Amazon SES è il servizio per inviare (e ricevere) email in grandi volumi, transazionali e di marketing.",
    "domain": "Cloud Technology and Services",
    "id": "e84dd30715f4"
  },
  {
    "q": "Un'azienda vuole configurare un contact center basato sul cloud, così che gli operatori possano gestire chiamate e chat dei clienti senza hardware di telefonia on-premises. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Lex",
      "Amazon Connect",
      "Amazon SNS",
      "Amazon Chime SDK"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Amazon Connect è un contact center omnicanale nel cloud, pagato a consumo.",
    "domain": "Cloud Technology and Services",
    "id": "d43d91f417c2"
  },
  {
    "q": "Quale servizio AWS aiuta gli sviluppatori front-end web e mobile a costruire, distribuire e ospitare rapidamente applicazioni full-stack?",
    "opts": [
      "AWS Batch",
      "Amazon EMR",
      "AWS Outposts",
      "AWS Amplify"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Amplify fornisce strumenti e hosting per costruire e distribuire rapidamente applicazioni web e mobile full-stack.",
    "domain": "Cloud Technology and Services",
    "id": "ae49fe6d709e"
  },
  {
    "q": "Quale servizio AWS fornisce API GraphQL gestite che permettono alle applicazioni di interrogare e aggiornare in modo sicuro dati provenienti da più fonti?",
    "opts": [
      "AWS AppSync",
      "Amazon Neptune",
      "API REST di Amazon API Gateway",
      "AWS Glue"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "AppSync crea API GraphQL managed, con aggiornamenti in tempo reale e accesso a più fonti dati.",
    "domain": "Cloud Technology and Services",
    "id": "5a24807d702e"
  },
  {
    "q": "Un produttore vuole collegare in modo sicuro al cloud milioni di dispositivi e instradare i messaggi dei dispositivi verso altri servizi AWS. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Connect",
      "Amazon SQS",
      "AWS IoT Core",
      "AWS Direct Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "AWS IoT Core collega in modo sicuro miliardi di dispositivi IoT al cloud e instrada i loro messaggi verso altri servizi.",
    "domain": "Cloud Technology and Services",
    "id": "5b999d6ddb62"
  },
  {
    "q": "Quali servizi fanno parte di una pipeline CI/CD su AWS? (Scegline DUE.)",
    "opts": [
      "AWS CodeBuild",
      "AWS Artifact",
      "Amazon Detective",
      "Amazon Macie",
      "AWS CodePipeline"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ],
    "explain": "CodePipeline orchestra il rilascio continuo (sorgente, build, test, deploy) e CodeBuild compila e testa il codice. Macie, Artifact e Detective sono servizi di sicurezza e conformità.",
    "domain": "Cloud Technology and Services",
    "id": "01902586cd7f"
  },
  {
    "q": "Quale servizio AWS automatizza la distribuzione del codice delle applicazioni su istanze Amazon EC2, server on-premises, funzioni AWS Lambda e servizi Amazon ECS?",
    "opts": [
      "AWS CloudShell",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodeArtifact"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "CodeDeploy automatizza i deployment su EC2, server on-premises, Lambda ed ECS, con strategie come blue/green.",
    "domain": "Cloud Technology and Services",
    "id": "9eb218214910"
  },
  {
    "q": "Quale servizio AWS aiuta gli sviluppatori ad analizzare e fare il debug di applicazioni distribuite tracciando le richieste mentre attraversano i microservizi?",
    "opts": [
      "Amazon Inspector",
      "AWS X-Ray",
      "AWS Config",
      "AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "X-Ray traccia le richieste attraverso i componenti di un'applicazione distribuita e mostra latenze ed errori di ciascun servizio. CloudTrail registra le chiamate API.",
    "domain": "Cloud Technology and Services",
    "id": "c56614993cb9"
  },
  {
    "q": "Un'azienda vuole un repository sicuro e gestito per conservare e condividere i pacchetti software, come le librerie npm, Maven e pip usate nelle sue build. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS CodeArtifact",
      "Amazon S3 Glacier",
      "Amazon ECR",
      "AWS Service Catalog"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "CodeArtifact è un repository managed di pacchetti software compatibile con npm, Maven, pip, NuGet e altri. ECR contiene immagini container.",
    "domain": "Cloud Technology and Services",
    "id": "0a4626f4e5f5"
  },
  {
    "q": "Un amministratore deve collegarsi alla shell delle istanze Amazon EC2 senza aprire porte SSH in entrata né gestire chiavi SSH. Quale funzionalità dovrebbe essere usata?",
    "opts": [
      "AWS Direct Connect",
      "AWS Systems Manager Session Manager",
      "Un bastion host con la porta 22 aperta",
      "Coppie di chiavi EC2"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Session Manager offre accesso shell sicuro e tracciato alle istanze tramite l'agente SSM, senza porte in ingresso aperte né chiavi SSH.",
    "domain": "Cloud Technology and Services",
    "id": "72e3a7b680c3"
  },
  {
    "q": "Quale funzionalità di AWS Systems Manager automatizza l'applicazione delle patch del sistema operativo a un insieme di istanze Amazon EC2?",
    "opts": [
      "Session Manager",
      "Patch Manager",
      "AWS Config",
      "Parameter Store"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Patch Manager automatizza l'applicazione delle patch di sistema operativo e applicazioni su istanze EC2 e server on-premises.",
    "domain": "Cloud Technology and Services",
    "id": "3ef7e0e8734a"
  },
  {
    "q": "Un'azienda vuole configurare rapidamente un ambiente AWS multi-account sicuro e ben progettato, con regole di controllo (guardrail) preconfigurate e un processo di creazione degli account. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Systems Manager",
      "AWS Service Catalog",
      "AWS Control Tower",
      "Solo AWS Organizations"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Control Tower crea e governa una landing zone multi-account basata su Organizations, con controlli (guardrail) e Account Factory per creare nuovi account.",
    "domain": "Cloud Technology and Services",
    "id": "28375be10e26"
  },
  {
    "q": "Un'azienda vuole che gli utenti avviino in self-service solo prodotti approvati dall'IT, come modelli CloudFormation preconfigurati, mantenendo la governance. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Control Tower",
      "AWS License Manager",
      "AWS Marketplace",
      "AWS Service Catalog"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Service Catalog permette di creare un catalogo di prodotti IT approvati che gli utenti possono avviare in autonomia rispettando le regole aziendali.",
    "domain": "Cloud Technology and Services",
    "id": "2145863c25a1"
  },
  {
    "q": "Quale servizio AWS aiuta un'azienda a gestire e tracciare le licenze software di fornitori come Microsoft e Oracle negli ambienti AWS e on-premises?",
    "opts": [
      "AWS Service Catalog",
      "AWS License Manager",
      "AWS Artifact",
      "AWS Marketplace"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "License Manager gestisce e controlla l'uso delle licenze software, applicando regole per evitare violazioni.",
    "domain": "Cloud Technology and Services",
    "id": "8d57c17ea2d5"
  },
  {
    "q": "Quale servizio AWS permette a un'azienda di condividere risorse, come subnet e AWS Transit Gateway, con altri account AWS della sua organizzazione?",
    "opts": [
      "AWS IAM Identity Center",
      "AWS Resource Access Manager (AWS RAM)",
      "VPC peering",
      "Fatturazione consolidata di AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "AWS RAM condivide in modo sicuro risorse (subnet, Transit Gateway, License Manager configurations, ecc.) tra account.",
    "domain": "Cloud Technology and Services",
    "id": "95eb684cfbc7"
  },
  {
    "q": "Quale servizio AWS fornisce avvisi personalizzati e indicazioni per la risoluzione quando AWS ha eventi, come manutenzioni programmate, che possono riguardare le tue risorse specifiche?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Health Dashboard (stato di salute del tuo account)",
      "Dashboard di Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "La vista dell'account di AWS Health Dashboard (ex Personal Health Dashboard) mostra eventi e manutenzioni che riguardano le tue risorse, con indicazioni operative.",
    "domain": "Cloud Technology and Services",
    "id": "6cef4903088b"
  },
  {
    "q": "Un'azienda vuole dare ai dipendenti da remoto un desktop Windows virtuale persistente nel cloud, accessibile da qualsiasi dispositivo. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon AppStream 2.0",
      "Amazon Lightsail",
      "Amazon WorkSpaces",
      "AWS Client VPN"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "WorkSpaces fornisce desktop virtuali persistenti (DaaS) Windows o Linux. AppStream 2.0 trasmette singole applicazioni, non un desktop completo.",
    "domain": "Cloud Technology and Services",
    "id": "7e801cac7b6d"
  },
  {
    "q": "Un'azienda di software vuole trasmettere in streaming un'applicazione desktop agli utenti tramite un browser web, senza che gli utenti debbano installarla. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon AppStream 2.0",
      "AWS Amplify",
      "Amazon WorkSpaces",
      "Amazon CloudFront"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "AppStream 2.0 trasmette applicazioni desktop a un browser, senza installazioni sul dispositivo dell'utente.",
    "domain": "Cloud Technology and Services",
    "id": "409abc9605fd"
  },
  {
    "q": "Un'azienda vuole ricevere una notifica quando l'utilizzo della CPU di un'istanza Amazon EC2 supera l'80% per 5 minuti. Cosa dovrebbe configurare?",
    "opts": [
      "Un controllo di AWS Trusted Advisor",
      "Una regola di AWS Config",
      "Un trail di AWS CloudTrail",
      "Un allarme di Amazon CloudWatch con una notifica Amazon SNS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "explain": "Un allarme CloudWatch monitora la metrica CPUUtilization e, superata la soglia, può inviare una notifica tramite SNS o avviare azioni automatiche.",
    "domain": "Cloud Technology and Services",
    "id": "123375f748b7"
  },
  {
    "q": "Quale affermazione descrive correttamente la differenza tra Amazon CloudWatch e AWS CloudTrail?",
    "opts": [
      "CloudTrail monitora l'utilizzo della CPU; CloudWatch registra le chiamate API",
      "Entrambi i servizi conservano solo dati di fatturazione",
      "CloudWatch monitora metriche di prestazione e log; CloudTrail registra le chiamate API e l'attività dell'account",
      "CloudWatch si usa solo per i risultati di sicurezza"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ],
    "explain": "CloudWatch = metriche, log e allarmi sulle prestazioni. CloudTrail = registro di chi ha fatto cosa, quando e da dove (chiamate API).",
    "domain": "Cloud Technology and Services",
    "id": "2aa29a259716"
  },
  {
    "q": "Quale servizio AWS usa il machine learning per analizzare l'utilizzo delle risorse e consigliare i tipi di istanza Amazon EC2, i volumi Amazon EBS e le dimensioni di memoria AWS Lambda ottimali?",
    "opts": [
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Compute Optimizer analizza le metriche di utilizzo con il machine learning e consiglia il rightsizing di EC2, Auto Scaling group, EBS, Lambda ed ECS su Fargate.",
    "domain": "Billing, Pricing, and Support",
    "id": "2c7e5aac47d8"
  },
  {
    "q": "Un'azienda vuole ricevere automaticamente un avviso quando il suo andamento di spesa AWS si discosta in modo imprevisto dal normale. Quale funzionalità dovrebbe usare?",
    "opts": [
      "AWS Pricing Calculator",
      "AWS Compute Optimizer",
      "AWS Cost Anomaly Detection",
      "AWS Artifact"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Cost Anomaly Detection usa il machine learning per individuare spese anomale e inviare avvisi, con l'analisi della causa principale.",
    "domain": "Billing, Pricing, and Support",
    "id": "009004fd2123"
  },
  {
    "q": "Quale report di fatturazione AWS fornisce i dati di costo e utilizzo PIÙ completi e dettagliati, consegnati in un bucket Amazon S3?",
    "opts": [
      "Report di AWS Trusted Advisor",
      "Report di AWS Budgets",
      "Vista mensile di AWS Cost Explorer",
      "AWS Cost and Usage Report (CUR)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Il Cost and Usage Report (oggi anche come Data Exports) è il dataset più dettagliato: riga per riga, anche orario, consegnato su S3 e analizzabile con Athena o QuickSight.",
    "domain": "Billing, Pricing, and Support",
    "id": "33cd2275c7d0"
  },
  {
    "q": "Un'azienda vuole tracciare i costi AWS per reparto e per progetto. Cosa dovrebbe fare?",
    "opts": [
      "Creare un utente IAM separato per ogni reparto",
      "Applicare tag alle risorse e attivarli come tag di allocazione dei costi nella console di fatturazione",
      "Abilitare AWS CloudTrail in ogni Regione",
      "Acquistare Istanze Reserved per ogni progetto"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "I tag (es. Department=Finance) attivati come cost allocation tags permettono di vedere e filtrare i costi per reparto o progetto in Cost Explorer e nei report.",
    "domain": "Billing, Pricing, and Support",
    "id": "7ed5a461de97"
  },
  {
    "q": "Un'azienda che rivende AWS ai propri clienti vuole personalizzare i dati di fatturazione e creare fatture pro forma con tariffe proprie per ogni gruppo di clienti. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Billing Conductor",
      "AWS Cost Explorer",
      "SCP di AWS Organizations",
      "AWS Budgets"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "AWS Billing Conductor personalizza la fatturazione (tariffe, gruppi di account, report pro forma) per rivenditori e chargeback interni.",
    "domain": "Billing, Pricing, and Support",
    "id": "ed7c756edc0e"
  },
  {
    "q": "Quale tipo di trasferimento dati è generalmente gratuito su AWS?",
    "opts": [
      "I dati trasferiti in AWS da Internet",
      "I dati trasferiti da Amazon S3 verso Internet",
      "I dati trasferiti da Amazon EC2 verso Internet",
      "I dati trasferiti tra Regioni AWS"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Il traffico in entrata da internet è generalmente gratuito. Si pagano i dati in uscita verso internet e quelli tra Regioni.",
    "domain": "Billing, Pricing, and Support",
    "id": "5f038fcdd55f"
  },
  {
    "q": "Quali servizi o funzionalità AWS possono essere usati senza costi aggiuntivi, pagando solo le risorse che si creano? (Scegline DUE.)",
    "opts": [
      "Amazon RDS",
      "Amazon Redshift",
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "AWS Shield Advanced"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "CloudFormation ed Elastic Beanstalk non hanno costi propri: si pagano le risorse create (EC2, ELB, ecc.). RDS, Shield Advanced e Redshift sono servizi a pagamento.",
    "domain": "Billing, Pricing, and Support",
    "id": "157d0a437498"
  },
  {
    "q": "Quali affermazioni sull'AWS Free Tier (piano gratuito) sono corrette? (Scegline DUE.)",
    "opts": [
      "Alcuni servizi offrono una quota di utilizzo sempre gratuita che non scade",
      "Il Free Tier richiede un piano Enterprise Support",
      "Alcuni servizi offrono prove gratuite di breve durata",
      "Tutti i servizi AWS sono gratuiti per 12 mesi",
      "Il Free Tier include un utilizzo illimitato di Amazon EC2"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Il Free Tier include offerte sempre gratuite (es. una quota di richieste Lambda) e prove gratuite di breve durata; per i nuovi account sono previsti anche crediti o quote iniziali. Non tutto è gratis e l'uso di EC2 è limitato.",
    "domain": "Billing, Pricing, and Support",
    "id": "9e55841c80be"
  },
  {
    "q": "Quale strumento AWS permette a un cliente di visualizzare, capire e gestire i costi nel tempo, e di prevedere la spesa fino ai prossimi 12 mesi?",
    "opts": [
      "AWS Cost Explorer",
      "AWS Service Quotas",
      "AWS Pricing Calculator",
      "AWS Artifact"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Cost Explorer mostra grafici dei costi storici, filtri per servizio e tag, previsioni fino a 12 mesi e raccomandazioni per Savings Plans e Reserved Instances.",
    "domain": "Billing, Pricing, and Support",
    "id": "2c6cbeb79848"
  },
  {
    "q": "Un'azienda vuole stimare il costo mensile di una nuova architettura PRIMA di distribuirla su AWS. Quale strumento dovrebbe usare?",
    "opts": [
      "AWS Cost and Usage Report",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost Explorer"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Pricing Calculator stima i costi di architetture non ancora create. Cost Explorer, CUR e Budgets lavorano su spese reali.",
    "domain": "Billing, Pricing, and Support",
    "id": "3467d149960b"
  },
  {
    "q": "Un'azienda vuole ricevere un avviso quando i suoi costi AWS mensili previsti dovrebbero superare un importo specifico, ed eventualmente applicare automaticamente un'azione. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Pricing Calculator",
      "AWS Cost Explorer"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "AWS Budgets invia avvisi su costi e utilizzo reali o previsti e supporta Budget Actions (es. applicare una policy che blocca nuove risorse).",
    "domain": "Billing, Pricing, and Support",
    "id": "4c114b0ead46"
  },
  {
    "q": "Quali sono i vantaggi della fatturazione consolidata in AWS Organizations? (Scegline DUE.)",
    "opts": [
      "Cifratura automatica di tutti i dati",
      "Free Tier illimitato per ogni account",
      "Utilizzo sommato tra gli account per ottenere sconti sui volumi",
      "Un'unica fattura per più account AWS",
      "AWS Enterprise Support gratuito"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "La fatturazione consolidata produce un'unica fattura e somma l'uso degli account per gli sconti a volume; condivide anche gli sconti di Reserved Instances e Savings Plans.",
    "domain": "Billing, Pricing, and Support",
    "id": "39f1f8762c00"
  },
  {
    "q": "Un'azienda ha un carico di lavoro costante che girerà in modo continuo per i prossimi 3 anni e vuole lo sconto PIÙ ALTO mantenendo la flessibilità tra famiglie di istanze e Regioni. Quale opzione di prezzo dovrebbe scegliere?",
    "opts": [
      "Istanze Spot",
      "Compute Savings Plans con durata di 3 anni",
      "Istanze On-Demand",
      "Dedicated Hosts On-Demand"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "I Compute Savings Plans offrono grandi sconti in cambio di un impegno di spesa oraria per 1 o 3 anni e si applicano a qualsiasi famiglia, dimensione e Regione (anche a Fargate e Lambda).",
    "domain": "Billing, Pricing, and Support",
    "id": "d2bbe8082917"
  },
  {
    "q": "Un carico di lavoro può essere interrotto in qualsiasi momento e riavviato senza problemi. Quale opzione di acquisto EC2 offre lo sconto PIÙ ALTO?",
    "opts": [
      "Istanze Dedicated",
      "Istanze Reserved",
      "Istanze Spot",
      "Istanze On-Demand"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Le istanze Spot usano capacità inutilizzata con sconti fino al 90%, ma AWS può interromperle con un preavviso di 2 minuti.",
    "domain": "Billing, Pricing, and Support",
    "id": "c308e8081e8f"
  },
  {
    "q": "Un'azienda deve usare le sue licenze software esistenti legate al server e ha bisogno di visibilità su socket e core fisici del server. Quale opzione EC2 dovrebbe usare?",
    "opts": [
      "Savings Plans",
      "Dedicated Hosts",
      "Istanze On-Demand",
      "Istanze Spot"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Gli EC2 Dedicated Host sono server fisici dedicati con visibilità su socket e core: permettono di usare licenze legate al server (BYOL).",
    "domain": "Billing, Pricing, and Support",
    "id": "704b2a71d750"
  },
  {
    "q": "Quale affermazione sui prezzi nelle diverse Regioni AWS è corretta?",
    "opts": [
      "I prezzi dello stesso servizio possono variare tra Regioni AWS",
      "Il trasferimento dati all'interno di una Regione è sempre gratuito",
      "Tutti i servizi hanno prezzi identici in ogni Regione",
      "I prezzi dipendono solo dal piano di AWS Support"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "I prezzi possono variare tra Regioni (costi locali di energia, terreni, tasse). Per questo la Regione è anche una scelta economica.",
    "domain": "Billing, Pricing, and Support",
    "id": "6da328bd5b53"
  },
  {
    "q": "Quale piano AWS Support è l'opzione PIÙ conveniente che offre un gruppo (pool) di Technical Account Manager (TAM) e un tempo di risposta di 30 minuti per i casi di sistema critico fermo?",
    "opts": [
      "Business",
      "Enterprise On-Ramp",
      "Enterprise",
      "Developer"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Enterprise On-Ramp offre risposta entro 30 minuti per sistemi critici fermi e un pool di TAM. Enterprise offre un TAM designato e 15 minuti, a costo maggiore. Business arriva a 1 ora per produzione ferma.",
    "domain": "Billing, Pricing, and Support",
    "id": "c227d750e958"
  },
  {
    "q": "Quale piano AWS Support offre un Technical Account Manager (TAM) designato e un tempo di risposta di 15 minuti per i casi di sistema critico fermo?",
    "opts": [
      "Enterprise",
      "Enterprise On-Ramp",
      "Developer",
      "Business"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Solo Enterprise include un TAM designato e risposta entro 15 minuti per sistemi critici per il business.",
    "domain": "Billing, Pricing, and Support",
    "id": "fe0ee89d31cf"
  },
  {
    "q": "Qual è il piano AWS Support MINIMO che offre accesso 24/7 via telefono, web e chat ai Cloud Support Engineer e un tempo di risposta inferiore a 1 ora per i casi di sistema di produzione fermo?",
    "opts": [
      "Enterprise On-Ramp",
      "Developer",
      "Business",
      "Basic"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Business è il piano minimo con supporto tecnico 24/7 via telefono, chat e web e risposta entro 1 ora per produzione ferma.",
    "domain": "Billing, Pricing, and Support",
    "id": "76ad7fe42ad4"
  },
  {
    "q": "Quale piano AWS Support offre accesso via email, in orario lavorativo, ai Cloud Support Associate ed è pensato per sperimentare o fare test in AWS?",
    "opts": [
      "Developer",
      "Business",
      "Enterprise",
      "Basic"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Developer offre supporto via email in orario lavorativo, adatto ad ambienti di test e sviluppo. Basic non include casi di supporto tecnico.",
    "domain": "Billing, Pricing, and Support",
    "id": "ca88fe7b2e6f"
  },
  {
    "q": "Quali risorse sono incluse gratuitamente nel piano AWS Basic Support? (Scegline DUE.)",
    "opts": [
      "Infrastructure Event Management",
      "Supporto telefonico 24/7 per problemi tecnici",
      "Un Technical Account Manager designato",
      "AWS re:Post e la documentazione",
      "I controlli di base di AWS Trusted Advisor e l'AWS Health Dashboard"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "explain": "Basic include documentazione, whitepaper, re:Post, i controlli Trusted Advisor principali e l'AWS Health Dashboard, oltre al supporto per fatturazione e account. TAM, telefono 24/7 e IEM richiedono piani superiori.",
    "domain": "Billing, Pricing, and Support",
    "id": "87a703972b28"
  },
  {
    "q": "Quali piani AWS Support danno accesso all'insieme completo dei controlli di AWS Trusted Advisor? (Scegline DUE.)",
    "opts": [
      "AWS Free Tier",
      "Basic",
      "Developer",
      "Enterprise",
      "Business"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "explain": "Tutti i controlli di Trusted Advisor sono disponibili con Business, Enterprise On-Ramp ed Enterprise. Basic e Developer hanno solo i controlli principali di sicurezza e le quote di servizio.",
    "domain": "Billing, Pricing, and Support",
    "id": "3d83f1e88294"
  },
  {
    "q": "Quali piani AWS Support includono il team Concierge Support per le domande su fatturazione e account? (Scegline DUE.)",
    "opts": [
      "Enterprise On-Ramp",
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "explain": "Il team Concierge (esperti di fatturazione e account) è incluso in Enterprise On-Ramp ed Enterprise.",
    "domain": "Billing, Pricing, and Support",
    "id": "39bcd2e261d7"
  },
  {
    "q": "Quali sono categorie dei controlli di AWS Trusted Advisor? (Scegline DUE.)",
    "opts": [
      "Qualità del codice delle applicazioni",
      "Ottimizzazione dei costi",
      "Tolleranza ai guasti",
      "Prestazioni del marketing",
      "Produttività dei dipendenti"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "explain": "Trusted Advisor controlla: cost optimization, performance, security, fault tolerance, service limits (quotas) e operational excellence.",
    "domain": "Billing, Pricing, and Support",
    "id": "f250d11e5cf0"
  },
  {
    "q": "Quale categoria di controlli di AWS Trusted Advisor avvisa un'azienda quando si avvicina al numero massimo di risorse consentito per un servizio?",
    "opts": [
      "Ottimizzazione dei costi",
      "Prestazioni",
      "Eccellenza operativa",
      "Limiti dei servizi"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "La categoria Service limits (Service Quotas) segnala quando l'uso si avvicina ai limiti del servizio, per esempio l'80% delle istanze consentite.",
    "domain": "Billing, Pricing, and Support",
    "id": "ca206625dbba"
  },
  {
    "q": "Dove possono i clienti AWS fare domande tecniche e ricevere risposte dalla community AWS e dagli esperti AWS, come sostituto degli AWS Forums?",
    "opts": [
      "AWS Professional Services",
      "AWS re:Post",
      "AWS Artifact",
      "AWS Marketplace"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "AWS re:Post è il servizio di domande e risposte della community, con risposte di esperti AWS. Ha sostituito i forum.",
    "domain": "Billing, Pricing, and Support",
    "id": "3a40ae07f001"
  },
  {
    "q": "Uno sviluppatore vuole trovare le risposte alle domande e alle richieste più frequenti che riceve l'AWS Support. Quale risorsa dovrebbe usare?",
    "opts": [
      "AWS Knowledge Center",
      "AWS Health Dashboard",
      "AWS Service Catalog",
      "AWS Artifact"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Il Knowledge Center (parte di re:Post) raccoglie articoli con le risposte alle domande più frequenti ricevute dal supporto AWS.",
    "domain": "Billing, Pricing, and Support",
    "id": "bb8f177b7f4a"
  },
  {
    "q": "Un'azienda senza competenze AWS al suo interno vuole incaricare una società di consulenza esterna, validata da AWS, che la aiuti a migrare i suoi carichi di lavoro. Dove dovrebbe cercare?",
    "opts": [
      "AWS Trust & Safety",
      "AWS Knowledge Center",
      "AWS Partner Network (APN)",
      "AWS Artifact"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "L'AWS Partner Network include società di consulenza e tecnologia validate da AWS, che possono essere ingaggiate per migrazioni e progetti.",
    "domain": "Billing, Pricing, and Support",
    "id": "daf5a96cb9cc"
  },
  {
    "q": "Un'azienda vuole acquistare software di terze parti, come un firewall virtuale, che gira su AWS e viene fatturato nella sua fattura AWS. Dove può trovare questo software?",
    "opts": [
      "AWS Service Catalog",
      "AWS Artifact",
      "AWS License Manager",
      "AWS Marketplace"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "AWS Marketplace è il catalogo digitale di software di terze parti (AMI, SaaS, container, dati), con fatturazione integrata nella bolletta AWS.",
    "domain": "Billing, Pricing, and Support",
    "id": "3027f1331aa6"
  },
  {
    "q": "Una grande azienda vuole un team di esperti dipendenti di AWS che la aiuti a raggiungere risultati di business specifici durante una trasformazione verso il cloud complessa. Quale offerta dovrebbe usare?",
    "opts": [
      "AWS Basic Support",
      "AWS re:Post",
      "AWS Professional Services",
      "AWS Knowledge Center"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "AWS Professional Services è un team di esperti di AWS che lavora con il cliente (spesso insieme ai partner) su progetti complessi di trasformazione.",
    "domain": "Billing, Pricing, and Support",
    "id": "d12dddae76e1"
  },
  {
    "q": "Un'azienda vuole che AWS gestisca in modo continuativo la sua infrastruttura AWS, compresi monitoraggio, gestione degli incidenti, patch e backup. Quale offerta dovrebbe usare?",
    "opts": [
      "AWS Health Dashboard",
      "AWS Managed Services (AMS)",
      "AWS Control Tower",
      "AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "AWS Managed Services gestisce le operazioni quotidiane dell'infrastruttura AWS del cliente secondo best practice.",
    "domain": "Billing, Pricing, and Support",
    "id": "2a777fb69808"
  },
  {
    "q": "Quale offerta di AWS Support fornisce indicazioni su architettura e scalabilità, oltre a supporto operativo, durante un evento pianificato come il lancio di un prodotto o una migrazione?",
    "opts": [
      "AWS Shield Standard",
      "AWS Personal Health Dashboard",
      "AWS Infrastructure Event Management (IEM)",
      "AWS Basic Support"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Infrastructure Event Management fornisce supporto per eventi pianificati (lanci, migrazioni, picchi). È incluso in Enterprise e disponibile negli altri piani superiori secondo le condizioni AWS.",
    "domain": "Billing, Pricing, and Support",
    "id": "448eb8c5eace"
  },
  {
    "q": "Come può un cliente chiedere un aumento di una quota di servizio AWS, come il numero di istanze On-Demand in esecuzione?",
    "opts": [
      "Le quote non possono mai essere modificate",
      "Contattare AWS Trust & Safety",
      "Usare la console Service Quotas o aprire un caso con l'AWS Support",
      "Passare automaticamente a Enterprise Support"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "Molte quote sono regolabili: si richiede l'aumento dalla console Service Quotas o aprendo un caso al supporto (anche con il piano Basic).",
    "domain": "Billing, Pricing, and Support",
    "id": "8374177fae9b"
  },
  {
    "q": "Un'azienda ha Istanze Reserved Standard che non le servono più. Cosa può fare per recuperare parte del costo?",
    "opts": [
      "Trasferirle nell'AWS Free Tier",
      "Venderle nel Reserved Instance Marketplace",
      "Restituirle ad AWS per un rimborso completo",
      "Convertirle in Istanze Spot"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Le Standard Reserved Instances non più necessarie si possono vendere ad altri clienti nel Reserved Instance Marketplace (registrandosi come venditore con l'utente root).",
    "domain": "Billing, Pricing, and Support",
    "id": "77e8d5eab77c"
  },
  {
    "q": "Un'azienda vuole convalidare le policy IAM rispetto alle best practice di AWS e trovare ruoli e permessi inutilizzati prima di concedere l'accesso. Quale funzionalità aiuta in questo?",
    "opts": [
      "Controlli di ottimizzazione dei costi di AWS Trusted Advisor",
      "IAM Access Analyzer",
      "Amazon GuardDuty",
      "AWS Artifact"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "IAM Access Analyzer valida le policy (errori e best practice), segnala gli accessi esterni e individua ruoli, chiavi e permessi inutilizzati.",
    "domain": "Security and Compliance",
    "id": "5bd826605a45"
  },
  {
    "q": "Quale funzionalità IAM dovrebbe usare un amministratore per restringere i permessi, esaminando i servizi che un ruolo non ha usato negli ultimi 90 giorni?",
    "opts": [
      "Le informazioni sull'ultimo accesso in IAM Access Advisor",
      "AWS Cost Explorer",
      "Fatturazione consolidata di AWS Organizations",
      "Amazon CloudWatch Logs Insights"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ],
    "explain": "Le informazioni 'last accessed' di Access Advisor mostrano quali servizi non sono stati usati di recente, così si possono rimuovere i permessi superflui (least privilege).",
    "domain": "Security and Compliance",
    "id": "2718f7ff998f"
  },
  {
    "q": "Un'azienda vuole personalizzare un foundation model con i propri dati e usare la Retrieval Augmented Generation (RAG) con i documenti aziendali tramite un servizio gestito. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon Bedrock",
      "AWS Glue",
      "Amazon Rekognition",
      "Amazon Translate"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Amazon Bedrock permette di personalizzare i foundation model (fine-tuning) e di collegarli ai dati aziendali con le Knowledge Bases (RAG), senza gestire infrastruttura.",
    "domain": "Cloud Technology and Services",
    "id": "c0b90c453d2e"
  },
  {
    "q": "Uno sviluppatore vuole suggerimenti di codice basati sull'AI nell'IDE e aiuto per risolvere problemi sulle risorse AWS. Quale servizio AWS offre questa capacità?",
    "opts": [
      "Amazon Q Developer",
      "AWS CodeBuild",
      "Amazon Kendra",
      "Amazon Comprehend"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ],
    "explain": "Amazon Q Developer è l'assistente di AI generativa per sviluppatori: suggerisce codice, spiega e trasforma codice e aiuta a operare su AWS.",
    "domain": "Cloud Technology and Services",
    "id": "4a8ce59a9870"
  },
  {
    "q": "Qual è il modo PIÙ SEMPLICE, per uno sviluppatore senza esperienza di infrastruttura, di distribuire un'API web partendo da un'immagine di container, con scalabilità automatica e HTTPS?",
    "opts": [
      "AWS Outposts",
      "AWS App Runner",
      "Amazon EKS",
      "Amazon EC2 Auto Scaling"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate"
    ],
    "explain": "App Runner prende un'immagine o un repository di codice e gestisce deploy, HTTPS, bilanciamento e scaling automaticamente.",
    "domain": "Cloud Technology and Services",
    "id": "d257967416f0"
  },
  {
    "q": "Quale servizio AWS permette al team finanziario di un'azienda di creare prezzi e gruppi di fatturazione personalizzati e generare Cost and Usage Report pro forma per il riaddebito interno (chargeback)?",
    "opts": [
      "AWS Cost Anomaly Detection",
      "AWS Compute Optimizer",
      "AWS Billing Conductor",
      "AWS Pricing Calculator"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Billing Conductor crea gruppi di fatturazione e tariffe personalizzate e produce report pro forma, utile per chargeback e rivenditori.",
    "domain": "Billing, Pricing, and Support",
    "id": "623c1bdbe27b"
  },
  {
    "q": "La fattura AWS di un'azienda è aumentata all'improvviso a causa di un picco inatteso in un singolo servizio. Quale strumento avrebbe potuto rilevare automaticamente questa spesa insolita e avvisare il team?",
    "opts": [
      "AWS Cost Anomaly Detection",
      "AWS Pricing Calculator",
      "AWS Artifact",
      "AWS Service Catalog"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Cost Anomaly Detection monitora la spesa con modelli di machine learning e avvisa quando rileva anomalie, indicando il servizio o l'account responsabile.",
    "domain": "Billing, Pricing, and Support",
    "id": "de86617a1f0a"
  },
  {
    "q": "Quale affermazione descrive AWS Elastic Disaster Recovery?",
    "opts": [
      "Spedisce dispositivi fisici per trasferire dati offline",
      "Pianifica i backup solo delle tabelle Amazon DynamoDB",
      "Riduce al minimo tempi di inattività e perdita di dati replicando continuamente i server su AWS e avviandoli rapidamente quando serve",
      "Mette in cache i contenuti nelle edge location"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Elastic Disaster Recovery replica in modo continuo i server e permette un ripristino rapido (RTO di minuti, RPO di secondi) su AWS.",
    "domain": "Cloud Technology and Services",
    "id": "74dabf4d8936"
  },
  {
    "q": "Quale servizio dovrebbe usare un'azienda per definire e imporre in modo centralizzato permessi di accesso a livello di tabella e di colonna per i servizi di analisi che interrogano il suo data lake su Amazon S3?",
    "opts": [
      "AWS Lake Formation",
      "Lifecycle policy di Amazon S3",
      "Amazon Macie",
      "AWS Shield"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Lake Formation centralizza la governance del data lake con permessi granulari applicati a servizi come Athena, Redshift Spectrum ed EMR.",
    "domain": "Cloud Technology and Services",
    "id": "5ecb71809e28"
  },
  {
    "q": "Quali affermazioni su Amazon MemoryDB sono corrette? (Scegline DUE.)",
    "opts": [
      "È progettato per data warehouse su scala petabyte",
      "È compatibile con Redis OSS",
      "È compatibile con Apache Cassandra",
      "Conserva i dati in modo durevole su più Availability Zone",
      "È un database a grafo"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "DynamoDB"
    ],
    "explain": "MemoryDB è un database in memoria compatibile con Redis OSS (e Valkey), durevole grazie a un log transazionale distribuito su più AZ. Grafo = Neptune, data warehouse = Redshift, Cassandra = Keyspaces.",
    "domain": "Cloud Technology and Services",
    "id": "4dfbd0ec7aad"
  },
  {
    "q": "Un'azienda sta iniziando il suo percorso di migrazione e vuole stimare quanto potrebbe risparmiare spostando su AWS i carichi di lavoro on-premises, comprese raccomandazioni sulle licenze. Quale servizio dovrebbe usare?",
    "opts": [
      "AWS DataSync",
      "AWS Migration Hub Refactor Spaces",
      "AWS Migration Evaluator",
      "AWS Snowball Edge"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Migration Evaluator raccoglie dati sull'ambiente attuale e produce un business case con proiezioni dei costi e opzioni di licenza su AWS.",
    "domain": "Cloud Technology and Services",
    "id": "313adecb4170"
  },
  {
    "q": "Quale affermazione su Amazon MSK è corretta?",
    "opts": [
      "È una coda di messaggi che garantisce la consegna FIFO",
      "È un servizio completamente gestito per eseguire applicazioni Apache Kafka",
      "È un data warehouse per analisi SQL",
      "Si usa per inviare notifiche push ai dispositivi mobili"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "Amazon MSK gestisce cluster Apache Kafka (anche in versione serverless). Code FIFO = SQS, data warehouse = Redshift, notifiche push = SNS.",
    "domain": "Cloud Technology and Services",
    "id": "bbdecd7ea96d"
  },
  {
    "q": "Un'istanza Amazon EC2 usa costantemente meno del 10% della CPU. Qual è l'azione consigliata per ottimizzare i costi?",
    "opts": [
      "Ridimensionare (rightsizing) l'istanza a un tipo più piccolo",
      "Spostare l'istanza su un Dedicated Host",
      "Acquistare un'Istanza Reserved più grande",
      "Aggiungere altre istanze all'Auto Scaling group"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ],
    "explain": "Un'istanza sottoutilizzata va ridimensionata (rightsizing) a un tipo più piccolo; Compute Optimizer e Trusted Advisor segnalano questi casi.",
    "domain": "Cloud Technology and Services",
    "id": "8b1f849d004a"
  },
  {
    "q": "Quale servizio AWS è pensato per gli sviluppatori front-end, per ospitare app web statiche e con rendering lato server, con un flusso CI/CD basato su Git?",
    "opts": [
      "Amazon Inspector",
      "AWS Amplify Hosting",
      "Amazon EMR",
      "AWS Direct Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Amplify Hosting pubblica web app statiche e SSR collegandosi a un repository Git, con build e deploy automatici a ogni commit.",
    "domain": "Cloud Technology and Services",
    "id": "fe0ecbb11e05"
  },
  {
    "q": "Un'azienda vuole trovare e acquistare servizi professionali, come valutazioni e aiuto nell'implementazione da parte di esperti AWS qualificati, con fatturazione tramite il suo account AWS. Dove dovrebbe cercare?",
    "opts": [
      "AWS Artifact",
      "AWS Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Marketplace (offerte di servizi professionali)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ],
    "explain": "AWS Marketplace include anche offerte di servizi professionali dei partner, acquistabili e fatturate tramite l'account AWS. Dopo la dismissione di AWS IQ (maggio 2026) è il canale indicato da AWS, insieme all'AWS Partner Network.",
    "domain": "Billing, Pricing, and Support",
    "id": "517c81fa8648"
  },
  {
    "q": "Quale affermazione sull'AWS Cloud Development Kit (AWS CDK) è corretta?",
    "opts": [
      "Permette agli sviluppatori di definire l'infrastruttura cloud con linguaggi di programmazione e genera (sintetizza) modelli AWS CloudFormation",
      "È un dispositivo fisico per trasferire dati",
      "Sostituisce IAM nella gestione dei permessi",
      "È un servizio per monitorare i log delle applicazioni"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ],
    "explain": "Il CDK è un framework open source per definire l'infrastruttura come codice in TypeScript, Python, Java, C# o Go; produce template CloudFormation.",
    "domain": "Cloud Technology and Services",
    "id": "8ea59f167b9b"
  },
  {
    "q": "Quali strumenti AWS forniscono raccomandazioni per ridurre i costi ridimensionando le risorse sottoutilizzate? (Scegline DUE.)",
    "opts": [
      "AWS Artifact",
      "AWS Shield Standard",
      "Amazon Inspector",
      "Raccomandazioni di rightsizing di AWS Cost Explorer",
      "AWS Compute Optimizer"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ],
    "explain": "Compute Optimizer e le raccomandazioni di rightsizing di Cost Explorer (oltre a Trusted Advisor) indicano le risorse sovradimensionate. Artifact, Shield e Inspector non riguardano i costi.",
    "domain": "Billing, Pricing, and Support",
    "id": "f963c1253cda"
  },
  {
    "q": "Quale servizio AWS permette a un'azienda di sottoscrivere prodotti di dati di terze parti e riceverne gli aggiornamenti direttamente in Amazon S3 o Amazon Redshift?",
    "opts": [
      "AWS Transfer Family",
      "Amazon Kinesis Data Streams",
      "AWS Data Exchange",
      "AWS DataSync"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ],
    "explain": "AWS Data Exchange permette di sottoscrivere dati di terze parti e riceverli o interrogarli direttamente in S3, Redshift e altri servizi.",
    "domain": "Cloud Technology and Services",
    "id": "76620aa9d056"
  },
  {
    "q": "Quale servizio di database AWS dovrebbe essere usato per migrare applicazioni Cassandra Query Language (CQL) verso un database serverless e gestito, con modifiche minime al codice?",
    "opts": [
      "Amazon Timestream",
      "Amazon Keyspaces",
      "Amazon DocumentDB",
      "Amazon Neptune"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "Keyspaces è compatibile con Apache Cassandra e CQL: le applicazioni esistenti funzionano con poche modifiche.",
    "domain": "Cloud Technology and Services",
    "id": "32b078f21d34"
  },
  {
    "q": "Quale affermazione confronta correttamente AWS WAF e AWS Network Firewall?",
    "opts": [
      "AWS WAF protegge le applicazioni web a livello HTTP, mentre AWS Network Firewall filtra il traffico di rete a livello di VPC",
      "Entrambi i servizi servono solo alla protezione DDoS",
      "AWS WAF cifra i dati a riposo",
      "AWS Network Firewall protegge solo le distribuzioni Amazon CloudFront"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "WAF filtra le richieste web (livello 7: SQL injection, XSS) su CloudFront, ALB, API Gateway. Network Firewall protegge il traffico di rete delle VPC (livelli 3-7).",
    "domain": "Security and Compliance",
    "id": "dc4e5bc08dca"
  },
  {
    "q": "Quale servizio AWS permette a un'organizzazione di condividere un AWS Transit Gateway gestito centralmente con altri account della sua organizzazione?",
    "opts": [
      "AWS Resource Access Manager (AWS RAM)",
      "AWS Service Catalog",
      "AWS License Manager",
      "AWS Artifact"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Con AWS RAM si condividono risorse come Transit Gateway e subnet con altri account, evitando di duplicarle.",
    "domain": "Cloud Technology and Services",
    "id": "5a6cec1490a6"
  },
  {
    "q": "Un'azienda conserva metriche di clickstream che devono essere interrogate per intervallo di tempo e spostate automaticamente dalla memoria a uno storage più economico man mano che invecchiano. Quale database è progettato per questo?",
    "opts": [
      "Amazon Timestream",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Aurora"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "DynamoDB"
    ],
    "explain": "Timestream è ottimizzato per serie temporali e sposta automaticamente i dati recenti in memoria e quelli storici su storage a basso costo.",
    "domain": "Cloud Technology and Services",
    "id": "9d75014871ea"
  },
  {
    "q": "Un'azienda sanitaria scambia file con i partner tramite FTPS e ha bisogno che i file siano conservati in Amazon EFS. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon S3 Transfer Acceleration",
      "AWS DataSync",
      "AWS Transfer Family",
      "Amazon SES"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "Transfer Family supporta SFTP, FTPS, FTP e AS2 con destinazione S3 o EFS, senza gestire server.",
    "domain": "Cloud Technology and Services",
    "id": "d30451c49d46"
  },
  {
    "q": "Quale opzione dell'infrastruttura AWS è la MIGLIORE per un'applicazione su dispositivi mobili 5G che ha bisogno di una latenza di pochi millisecondi (a una cifra)?",
    "opts": [
      "AWS Snowmobile",
      "Amazon S3 Glacier",
      "AWS Wavelength Zones",
      "Solo le Regioni AWS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "explain": "Le Wavelength Zones sono nelle reti 5G degli operatori: i dispositivi mobili raggiungono l'applicazione senza uscire dalla rete dell'operatore.",
    "domain": "Cloud Technology and Services",
    "id": "151f24939913"
  },
  {
    "q": "Quale affermazione confronta correttamente AWS CloudTrail e AWS Config?",
    "opts": [
      "CloudTrail si usa per stimare i costi",
      "Entrambi i servizi monitorano solo l'utilizzo della CPU",
      "Config registra le chiamate API; CloudTrail valuta le regole di conformità",
      "CloudTrail registra chi ha fatto quale chiamata API; Config registra come cambia nel tempo la configurazione delle risorse e la valuta rispetto a delle regole"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "CloudTrail = audit delle chiamate API (chi, cosa, quando). Config = storico delle configurazioni delle risorse e verifica di conformità con regole.",
    "domain": "Security and Compliance",
    "id": "fafb219f7843"
  },
  {
    "q": "Quale affermazione confronta correttamente Amazon GuardDuty e Amazon Inspector?",
    "opts": [
      "Entrambi i servizi individuano dati sensibili in Amazon S3",
      "Entrambi i servizi gestiscono chiavi di cifratura",
      "GuardDuty rileva minacce e attività malevole; Inspector analizza i carichi di lavoro alla ricerca di vulnerabilità software",
      "Inspector rileva chiamate API malevole; GuardDuty analizza i pacchetti software"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "explain": "GuardDuty rileva minacce e attività sospette analizzando i log. Inspector cerca vulnerabilità software ed esposizioni di rete. I dati sensibili in S3 sono compito di Macie.",
    "domain": "Security and Compliance",
    "id": "89780c6cbb85"
  },
  {
    "q": "Un'azienda ha bisogno di uno storage che più istanze Amazon EC2 Linux, in più Availability Zone, possano montare contemporaneamente come file system condiviso. Quale servizio dovrebbe usare?",
    "opts": [
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon EBS",
      "Amazon EFS",
      "Instance store"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "EFS è un file system NFS elastico e condiviso, montabile contemporaneamente da molte istanze in più AZ. EBS è collegato normalmente a una singola istanza in una AZ.",
    "domain": "Cloud Technology and Services",
    "id": "70afe32ef8e4"
  },
  {
    "q": "Quale affermazione confronta correttamente AWS Organizations e AWS Control Tower?",
    "opts": [
      "Control Tower si usa solo per la previsione dei costi",
      "Organizations crea automaticamente i VPC",
      "Organizations fornisce la gestione multi-account e le SCP; Control Tower automatizza la configurazione di una landing zone multi-account governata, costruita su Organizations",
      "Control Tower sostituisce la fatturazione consolidata"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "Organizations è la base (account, OU, SCP, fatturazione consolidata). Control Tower la usa per creare automaticamente una landing zone con best practice e guardrail.",
    "domain": "Cloud Technology and Services",
    "id": "7f2d2b3999f9"
  },
  {
    "q": "Quale affermazione confronta correttamente Amazon SQS e Amazon SNS?",
    "opts": [
      "Entrambi i servizi sono database relazionali",
      "SQS mette in coda i messaggi che i consumatori vanno a leggere (polling); SNS invia (push) ogni messaggio a tutti gli iscritti di un topic",
      "SQS consegna ogni messaggio a tutti gli iscritti contemporaneamente",
      "SNS conserva i messaggi fino a 14 giorni per una lettura successiva"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "SQS",
      "SNS"
    ],
    "explain": "SQS è una coda: i consumer leggono (pull) e ogni messaggio è elaborato da un consumer. SNS è pub/sub: un messaggio inviato (push) a tutti i subscriber del topic.",
    "domain": "Cloud Technology and Services",
    "id": "01180170f7bc"
  },
  {
    "q": "Quale classe di storage di Amazon S3 sposta automaticamente gli oggetti tra livelli di accesso in base ai cambiamenti nelle modalità di accesso, senza costi di recupero?",
    "opts": [
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage"
    ],
    "explain": "S3 Intelligent-Tiering sposta automaticamente gli oggetti tra livelli di accesso in base all'uso, senza costi di recupero. È ideale quando i pattern di accesso sono sconosciuti o variabili.",
    "domain": "Cloud Technology and Services",
    "id": "9462cf4f2497"
  },
  {
    "q": "Quale servizio AWS offre un desktop-as-a-service completamente gestito, così che i collaboratori esterni possano accedere in modo sicuro alle applicazioni aziendali dai propri dispositivi?",
    "opts": [
      "AWS Batch",
      "Amazon AppFlow",
      "AWS Outposts",
      "Amazon WorkSpaces"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ],
    "explain": "WorkSpaces fornisce desktop virtuali gestiti; i dati restano nel cloud e non sui dispositivi personali dei collaboratori.",
    "domain": "Cloud Technology and Services",
    "id": "90a64945036c"
  },
  {
    "q": "Un'azienda vuole articoli ufficiali AWS, video e risposte della community su uno specifico messaggio di errore. Quali risorse dovrebbe usare? (Scegline DUE.)",
    "opts": [
      "AWS Knowledge Center",
      "AWS re:Post",
      "AWS Budgets",
      "AWS Artifact",
      "AWS Shield Advanced"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Support"
    ],
    "explain": "re:Post (domande e risposte della community ed esperti AWS) e il Knowledge Center (articoli sui problemi più comuni) sono le risorse di self-service gratuite.",
    "domain": "Billing, Pricing, and Support",
    "id": "0cad462aae0d"
  }
];
