/* Generato automaticamente da convert_quiz.py — non modificare a mano */
const QUIZ_BANK = [
  {
    "q": "A user is planning to migrate an application workload to the AWS Cloud.   Which control becomes the responsibility of AWS once the migration is complete?",
    "opts": [
      "Patching the guest operating system",
      "Maintaining physical and environmental controls",
      "Protecting communications and maintaining zone security",
      "Patching specific applications"
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
    "q": "Which services can be used to deploy applications on AWS? (Choose two.)",
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
    "q": "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
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
    "q": "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
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
    "q": "Which component must be attached to a VPC to enable inbound Internet access?",
    "opts": [
      "NAT gateway",
      "VPC endpoint",
      "VPN connection",
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
    "q": "Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?",
    "opts": [
      "Spot Instance",
      "On-Demand Instance",
      "Partial Upfront Reserved Instance",
      "No Upfront Reserved Instance"
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
    "q": "A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage.   Which set of tasks would meet this requirement?",
    "opts": [
      "Add an Application Load Balancer in front of the EC2 instance",
      "Configure EC2 Auto Recovery to move the instance to another Availability Zone",
      "Migrate to Amazon RDS and enable Multi-AZ",
      "Enable termination protection for the EC2 instance to avoid outages"
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
    "q": "A company wants to ensure that AWS Management Console users are meeting password complexity requirements.   How can the company configure password complexity?",
    "opts": [
      "Using an AWS IAM user policy",
      "Using an AWS Organizations service control policy (SCP)",
      "Using an AWS IAM account password policy",
      "Using an AWS Security Hub managed insight"
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
    "q": "Under the AWS shared responsibility model, which of the following is the customer's responsibility?",
    "opts": [
      "Patching guest OS and applications",
      "Patching and fixing flaws in the infrastructure",
      "Physical and environmental controls",
      "Configuration of AWS infrastructure devices"
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
    "q": "Which of the following tasks is required to deploy a PCI-compliant workload on AWS?",
    "opts": [
      "Use any AWS service and implement PCI controls at the application layer",
      "Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer",
      "Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service",
      "Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer"
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
    "q": "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order.   Which AWS service should the company use?",
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
    "q": "AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill.    Which option allows AnyCompany to receive a single bill?",
    "opts": [
      "Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.",
      "AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.",
      "Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.",
      "Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account."
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
    "q": "Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?",
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
    "q": "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud.   Which service should be used to deploy the application?",
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
    "q": "Which AWS Trusted Advisor check is available to all AWS users?",
    "opts": [
      "Core checks",
      "All checks",
      "Cost optimization checks",
      "Fault tolerance checks"
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
    "q": "A web developer is concerned that a DDoS attack could target an application.   Which AWS services or features can help protect against such an attack? (Choose two.)",
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
    "q": "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
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
    "q": "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs).   Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
    "opts": [
      "Create an IAM user and provide AWS Management Console access only.",
      "Create an IAM user and provide programmatic access only.",
      "Create an IAM role and provide AWS Management Console access only.",
      "Create an IAM policy with administrator access and attach it to the IAM user.",
      "Create an IAM policy with Amazon RDS access and attach it to the IAM user."
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
    "q": "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources.   Which AWS service should the company use?",
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
    "q": "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)",
    "opts": [
      "Preventing a single point of failure",
      "Reducing the operational costs of the application",
      "Allowing the application to serve cross-region users with low latency",
      "Increasing the availability of the application",
      "Increasing the load of the application"
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
    "q": "A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances.   What pricing model will minimize cost while ensuring that compute resources remain available?",
    "opts": [
      "Dedicated Hosts",
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances"
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
    "q": "Which tool can be used to identify scheduled changes to the AWS infrastructure?",
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
    "q": "Which of the following is the customer's responsibility when using Amazon RDS?",
    "opts": [
      "Patching the operating system of underlying hardware",
      "Controlling traffic to and from the database through security groups",
      "Running backups that enable point-in-time recovery of a DB instance",
      "Replacing failed DB instances"
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
    "q": "What is the customer's responsibility when using AWS Lambda?",
    "opts": [
      "Operating system configuration",
      "Application management",
      "Platform management",
      "Code encryption"
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
    "q": "A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds.   Which AWS service will support these requirements?",
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
    "q": "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
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
    "q": "Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",
    "opts": [
      "Reserved Instances",
      "On-Demand Instances",
      "Dedicated Instances",
      "Spot Instances"
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
    "q": "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
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
    "q": "Which AWS services offer compute capabilities? (Choose two.)",
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
    "q": "Which AWS service can be used to privately store and manage versions of source code?",
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
    "q": "Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?",
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
    "q": "A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption.   Which AWS infrastructure component should the company replicate across?",
    "opts": [
      "Edge locations",
      "Availability Zones",
      "Regions",
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
    "q": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    "opts": [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon CloudWatch alerts",
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
    "q": "Which AWS Cloud design principles can help increase reliability? (Choose two.)",
    "opts": [
      "Using monolithic architecture",
      "Measuring overall efficiency",
      "Testing recovery procedures",
      "Adopting a consumption model",
      "Automatically recovering from failure"
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
    "q": "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base.   Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
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
    "q": "A company wants to connect to AWS over a private, low-latency connection from its remote office.   What is the recommended method to meet these requirements?",
    "opts": [
      "Create a VPN tunnel",
      "Connect across the public internet",
      "Use VPC peering to create a connection.",
      "Use AWS Direct Connect."
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
    "q": "Which AWS service can be used to retrieve compliance reports on demand?",
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
    "q": "A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting.   Which AWS service should the company use?",
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
    "q": "How should a web application be deployed to ensure high availability in the AWS Cloud?",
    "opts": [
      "Deploy multiple instances of the application in multiple Availability Zones.",
      "Deploy multiple instances of the application in a single Availability Zone.",
      "Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.",
      "Deploy the application in one Amazon EC2 instance in an Auto Scaling group."
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
    "q": "A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs.   Which option should the company use to maximize savings over a 3-year term?",
    "opts": [
      "EC2 Dedicated Instances",
      "EC2 Spot Instances",
      "EC2 Reserved Instances",
      "EC2 On-Demand Instances"
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
    "q": "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys.   What it the SIMPLEST way to provide this information?",
    "opts": [
      "Create an IAM user account for the auditor, granting the auditor administrator permissions.",
      "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.",
      "Download the IAM credential report, then provide the report to the auditor.",
      "Download the AWS Trusted Advisor report, then provide the report to the auditor."
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
    "q": "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
    "opts": [
      "Volume discounts",
      "A minimal additional fee for use",
      "One bill for multiple accounts",
      "Installment payment options",
      "Custom cost and usage budget creation"
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
    "q": "A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility.   Which Amazon EC2 instance type should the company use to meet these requirements?",
    "opts": [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
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
    "q": "A company wants to track AWS resource configuration changes for compliance reasons.   Which AWS feature can be used to meet this requirement?",
    "opts": [
      "AWS Cost and Usage Report",
      "AWS Organizations service control policies (SCPs)",
      "AWS Config rules",
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
    "q": "A company is building an application that needs to deliver images and videos globally with minimal latency.   Which approach can the company use to accomplish this in a cost effective manner?",
    "opts": [
      "Deliver the content through Amazon CloudFront.",
      "Store the content on Amazon S3 and enable S3 cross-region replication.",
      "Implement a VPN across multiple AWS Regions.",
      "Deliver the content through AWS PrivateLink."
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
    "q": "The AWS IAM best practice for granting least privilege is to:",
    "opts": [
      "apply an IAM policy to an IAM group and limit the size of the group.",
      "require multi-factor authentication (MFA) for all IAM users.",
      "require each IAM user who has different permissions to have multiple passwords.",
      "apply an IAM policy only to IAM users who require it."
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
    "q": "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
    "opts": [
      "Pay-as-you-go pricing",
      "High availability",
      "Global reach",
      "Economies of scale"
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
    "q": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect.   Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
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
    "q": "How can AWS enable a company to control expenses as an application's usage changes unpredictably?",
    "opts": [
      "AWS will refund the cost difference if a customer moves to larger servers.",
      "The application can be built to scale up or down automatically as resources are needed",
      "Spot instances will automatically be used if the price is lower than on-demand instances.",
      "Amazon CloudWatch will automatically predict what resources are needed."
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
    "q": "Which AWS service or feature can be used to prevent SQL injection attacks?",
    "opts": [
      "Security groups",
      "Network ACLs",
      "AWS WAF",
      "IAM policy"
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
    "q": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    "opts": [
      "AWS Well-Architected Framework documentation.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "AWS Quick Start reference deployments."
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
    "q": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources."
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
    "q": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
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
    "q": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    "opts": [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
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
    "q": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A public and private key-pair.",
      "Amazon Inspector.",
      "AWS Identity and Access Management (IAM) policies.",
      "Security Groups."
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
    "q": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
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
    "q": "Which AWS service or feature can be used to monitor CPU usage?",
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
    "q": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    "opts": [
      "Granting access to individuals and services.",
      "Encrypting data in transit.",
      "Updating Amazon EC2 host firmware.",
      "Updating operating systems."
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
    "q": "Which of the following security-related actions are available at no cost?",
    "opts": [
      "Calling AWS Support.",
      "Contacting AWS Professional Services to request a workshop.",
      "Accessing forums, blogs, and whitepapers.",
      "Attending AWS classes at a local university."
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
    "q": "Which storage service can be used as a low-cost option for hosting static websites?",
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
    "q": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    "opts": [
      "Application security.",
      "Edge location management.",
      "Patch management.",
      "Client-side data."
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
    "q": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    "opts": [
      "Multiple Availability Zones.",
      "Performance efficiency.",
      "Security.",
      "Encryption usage.",
      "High availability."
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
    "q": "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
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
    "q": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    "opts": [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability."
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
    "q": "When architecting cloud applications, which of the following are a key design principle?",
    "opts": [
      "Use the largest instance possible.",
      "Provision capacity for peak load.",
      "Use the Scrum development process.",
      "Implement elasticity."
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
    "q": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    "opts": [
      "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "Enable automate patching for the instances using the Amazon RDS console.",
      "In AWS Config. configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule."
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
    "q": "Which mechanism allows developers to access AWS services from application code?",
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
    "q": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    "opts": [
      "Shared responsibility security model.",
      "Single tenancy.",
      "Elastic computing.",
      "Encryption."
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
    "q": "Which of the following is a benefit of using the AWS Cloud?",
    "opts": [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors."
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
    "q": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    "opts": [
      "Fault Tolerance.",
      "Instance Usage.",
      "Infrastructure.",
      "Performance.",
      "Storage Capacity."
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
    "q": "What is Amazon CloudWatch?",
    "opts": [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features."
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
    "q": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
    "opts": [
      "Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
      "Encrypting data on the client-side.",
      "Training the data center staff.",
      "Configuring Network Access Control Lists (ACL).",
      "Maintaining environmental controls within a data center."
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
    "q": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    "opts": [
      "Physical controls.",
      "Patch management.",
      "Zone security.",
      "Data center auditing."
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
    "q": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    "opts": [
      "AWS Billing and Cost Management.",
      "Consolidated billing.",
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
    "q": "How do customers benefit from Amazon’s massive economies of scale?",
    "opts": [
      "Periodic price reductions as the result of Amazon’s operational efficiencies.",
      "New Amazon EC2 instance types providing the latest hardware.",
      "The ability to scale up and down when needed.",
      "Increased reliability in the underlying hardware of Amazon EC2 instances."
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
    "q": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    "opts": [
      "Service control policies (SCPs).",
      "Consolidated billing.",
      "All Upfront Reserved Instances.",
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
    "q": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
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
    "q": "Which of the following services will automatically scale with an expected increase in web traffic?",
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
    "q": "Which service provides a virtually unlimited amount of online highly durable object storage?",
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
    "q": "Which AWS feature should a customer leverage to achieve high availability of an application?",
    "opts": [
      "AWS Direct Connect.",
      "Availability Zones.",
      "Data centers.",
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
    "q": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    "opts": [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Direct Connect.",
      "AWS Organizations.",
      "Network ACLs."
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
    "q": "Which of the following is a cloud architectural design principle?",
    "opts": [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software."
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
    "q": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
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
    "q": "Where can AWS compliance and certification reports be downloaded?",
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
    "q": "The financial benefits of using AWS are: (Select TWO)",
    "opts": [
      "Reduced Total Cost of Ownership (TCO).",
      "Increased capital expenditure (capex).",
      "Reduced operational expenditure ( opex ).",
      "Deferred payment plans for startups.",
      "Business credit lines for startups."
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
    "q": "Which AWS service can serve a static website?",
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
    "q": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
    "opts": [
      "Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency."
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
    "q": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    "opts": [
      "Resource groups.",
      "Availability Zones.",
      "Security groups.",
      "Regions.",
      "Amazon Machine Images (AMIS)."
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
    "q": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    "opts": [
      "Physical access controls.",
      "Data encryption.",
      "Secure disposal of storage devices.",
      "Environmental risk management."
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
    "q": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    "opts": [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
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
    "q": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    "opts": [
      "Project management.",
      "Antivirus software licensing.",
      "Data center security.",
      "Software development."
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
    "q": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections."
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
    "q": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    "opts": [
      "Amazon Route 53.",
      "Virtual Private Gateway.",
      "Classic Load Balancer.",
      "Auto Scaling.",
      "Amazon CloudWatch default metrics."
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
    "q": "Which statement best describes Elastic Load Balancing?",
    "opts": [
      "It translates a domain name into an IP address using DNC.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
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
    "q": "Which of the following is a fast and reliable NoSQL database service?",
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
    "q": "Which AWS service would you use to obtain compliance reports and certificates?",
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
    "q": "Which AWS services are defined as global instead of regional? (Select TWO)",
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
    "q": "How would an AWS customer easily apply common access controls to a large set of users?",
    "opts": [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool."
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
    "q": "Which of the following is an important architectural design principle when designing cloud applications?",
    "opts": [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity."
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
    "q": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
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
    "q": "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
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
    "q": "Which AWS networking service enables a company to create a virtual network within AWS?",
    "opts": [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC."
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
    "q": "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
    "opts": [
      "Configuring third-party applications",
      "Maintaining physical hardware",
      "Securing application access and data",
      "Managing custom Amazon Machine Images (AMIs)"
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
    "q": "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    "opts": [
      "AWS Regions",
      "AWS edge locations",
      "AWS Availability Zones",
      "Amazon Virtual Private Cloud (Amazon VPC."
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
    "q": "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    "opts": [
      "Use AWS Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable Multi-Factor Authentication",
      "Enable AWS CloudTrail"
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
    "q": "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
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
    "q": "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
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
    "q": "Where can a customer find information about prohibited actions on AWS infrastructure?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
      "AWS Acceptable Use Policy"
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
    "q": "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
    "opts": [
      "By replacing large variable costs with lower capital investments",
      "By replacing large capital investments with lower variable costs",
      "By allowing the provisioning of compute and storage at a fixed level to meet peak demand",
      "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model"
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
    "q": "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)",
    "opts": [
      "AWS Auto Scaling for Amazon EC2 instances",
      "Amazon VPC subnet ACLs to check the health of a service",
      "Distributed resources across multiple Availability Zones",
      "AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region",
      "Distributed resources across multiple AWS points of presence"
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
    "q": "Which cloud design principle aligns with AWS Cloud best practices?",
    "opts": [
      "Create fixed dependencies among application components",
      "Aggregate services on a single instance",
      "Deploy applications in a single Availability Zone",
      "Distribute the compute load across multiple resources"
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
    "q": "Which of the following are recommended practices for managing IAM users? (Choose two.)",
    "opts": [
      "Require IAM users to change their passwords after a specified period of time",
      "Prevent IAM users from reusing previous passwords",
      "Recommend that the same password be used on AWS and other sites",
      "Require IAM users to store their passwords in raw text",
      "Disable multi-factor authentication (MFA) for IAM users"
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
    "q": "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project.   How can the company get this support? (Choose two.)",
    "opts": [
      "Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.",
      "Contact AWS Support and open a case for assistance",
      "Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account",
      "Select a partner from the AWS Partner Network (APN) to assist with the migration",
      "Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud."
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
    "q": "How does the AWS Enterprise Support Concierge team help users?",
    "opts": [
      "Supporting application development",
      "Providing architecture guidance",
      "Answering billing and account inquires",
      "Answering questions regarding technical support cases"
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
    "q": "An application designed to span multiple Availability Zones is described as:",
    "opts": [
      "being highly available",
      "having global reach",
      "using an economy of scale",
      "having elasticity"
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
    "q": "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area.   According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
    "opts": [
      "AWS Regions",
      "Availability Zones",
      "subnets",
      "placement groups"
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
    "q": "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
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
    "q": "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only.   Which action should be taken?",
    "opts": [
      "Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.",
      "Enable billing alerts in the AWS Billing and Cost Management console.",
      "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.",
      "Enable Reserved Instance sharing in the AWS Billing and Cost Management console."
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
    "q": "Which situation should be reported to the AWS Abuse team?",
    "opts": [
      "In Availability Zone has a service disruption",
      "An intrusion attempt is made from an AWS IP address",
      "A user has trouble accessing an Amazon S3 bucket from an AWS IP address",
      "A user needs to change payment methods due to a compromise"
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
    "q": "Which AWS service or resource is serverless?",
    "opts": [
      "AWS Lambda",
      "Amazon EC2 instances",
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
    "q": "Which of the following are components of Amazon VPC? (Choose two.)",
    "opts": [
      "Objects",
      "Subnets",
      "Buckets",
      "Internet gateways",
      "Access key"
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
    "q": "AWS Budgets can be used to:",
    "opts": [
      "prevent a given user from creating a resource",
      "send an alert when the utilization of Reserved Instances drops below a certain percentage",
      "set resource limits in AWS accounts to prevent overspending",
      "split an AWS bill across multiple forms of payment"
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
    "q": "Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)",
    "opts": [
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS Multi-Factor Authentication (AWS MFA)",
      "Security groups",
      "Password policies"
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
    "q": "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)",
    "opts": [
      "Information on Amazon S3 bucket permissions",
      "AWS service outages",
      "Multi-factor authentication enabled on the AWS account root user",
      "Available software patches",
      "Number of users in the account"
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
    "q": "Which functions can users perform using AWS KMS?",
    "opts": [
      "Create and manage AWS access keys for the AWS account root user",
      "Create and manage AWS access keys for an AWS account IAM user",
      "Create and manage keys for encryption and decryption of data",
      "Create and manage keys for multi-factor authentication"
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
    "q": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)",
    "opts": [
      "It identifies software vulnerabilities in applications running on AWS",
      "It provides a list of cost optimization recommendations based on current AWS usage",
      "It detects potential security vulnerabilities caused by permissions settings on account resources",
      "It automatically corrects potential security issues caused by permissions settings on account resources",
      "It provides proactive alerting whenever an Amazon EC2 instance has been compromised"
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
    "q": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    "opts": [
      "AWS manages the maintenance of the cloud infrastructure",
      "AWS manages the security of applications built on AWS",
      "AWS manages capacity planning for physical servers",
      "AWS manages the development of applications on AWS",
      "AWS manages cost planning for virtual servers"
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
    "q": "A user deploys an Amazon RDS DB instance in multiple Availability Zones.   This strategy involves which pillar of the AWS Well-Architected Framework?",
    "opts": [
      "Performance efficiency",
      "Reliability",
      "Cost optimization",
      "Security"
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
    "q": "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)",
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
    "q": "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
    "opts": [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
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
    "q": "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
    "opts": [
      "Security groups",
      "Elastic network interfaces",
      "Network ACLs",
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
    "q": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
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
    "q": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    "opts": [
      "AWS Trusted Advisor",
      "AWS Support case",
      "Concierge team",
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
    "q": "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups.   Which AWS service will support this use case?",
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
    "q": "A company wants to expand from one AWS Region into a second AWS Region.   What does the company need to do to start supporting the new Region?",
    "opts": [
      "Contact an AWS Account Manager to sign a new contract",
      "Move an Availability Zone to the new Region",
      "Begin deploying resources in the second Region",
      "Download the AWS Management Console for the new Region"
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
    "q": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server.   Which Amazon EC2 instance pricing option will meet these requirements?",
    "opts": [
      "Dedicated Hosts",
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances"
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
    "q": "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)",
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
    "q": "A company is planning to migrate from on-premises to the AWS Cloud.   Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
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
    "q": "What can assist in evaluating an application for migration to the cloud? (Choose two.)",
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
    "q": "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
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
    "q": "Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)",
    "opts": [
      "Decommissioning of physical storage devices",
      "Security group and ACL configuration",
      "Patch management of an Amazon RDS instance operating system",
      "Controlling physical access to data centers",
      "Patch management of an Amazon EC2 instance operating system"
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
    "q": "Which AWS service is suitable for an event-driven workload?",
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
    "q": "What is a value proposition of the AWS Cloud?",
    "opts": [
      "AWS is responsible for security in the AWS Cloud",
      "No long-term contract is required",
      "Provision new servers in days",
      "AWS manages user applications in the AWS Cloud"
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
    "q": "What is a characteristic of Amazon S3 cross-region replication?",
    "opts": [
      "Both source and destination S3 buckets must have versioning disabled",
      "The source and destination S3 buckets cannot be in different AWS Regions",
      "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts",
      "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account"
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
    "q": "What is a user responsible for when running an application in the AWS Cloud?   - A. Managing physical hardware",
    "opts": [
      "Updating the underlying hypervisor",
      "Providing a list of users approved for data center access",
      "Managing application software updates"
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
    "q": "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market.   Which AWS Cloud feature can provide this?",
    "opts": [
      "Elasticity",
      "High availability",
      "Agility",
      "Reliability"
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
    "q": "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)",
    "opts": [
      "AWS Cost and Usage report",
      "AWS product pages",
      "AWS Simple Monthly Calculator",
      "Billing alerts and Amazon CloudWatch alarms",
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
    "q": "Amazon Route 53 enables users to:",
    "opts": [
      "encrypt data in transit",
      "register DNS domain names",
      "generate and manage SSL certificates",
      "establish a dedicated network connection to AWS"
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
    "q": "Where can you store files in AWS? (Choose TWO)",
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
    "q": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
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
    "q": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    "opts": [
      "Pay less as AWS grows.",
      "Pay as you go.",
      "Pay less by using more.",
      "Save when you reserve."
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
    "q": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    "opts": [
      "Right-size before and after migration.",
      "Use a Multi-Region Active-Passive architecture.",
      "Combine On-demand Capacity Reservations with Saving Plans.",
      "Use a Multi-Region Active-Active architecture."
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
    "q": "What is the primary storage service used by Amazon RDS database instances?",
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
    "q": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
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
    "q": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
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
    "q": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    "opts": [
      "AWS Regions.",
      "Multi-AZ Deployment.",
      "Automatic patching.",
      "Read Replicas.",
      "Edge Locations."
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
    "q": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    "opts": [
      "Replicate the current resources across multiple Availability Zones within the same region.",
      "Migrate the application to a hosting provider in Asia.",
      "Recreate the website content.",
      "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
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
    "q": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    "opts": [
      "AWS Identity and Access Management.",
      "Amazon RDS.",
      "Network Access Control Lists.",
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
    "q": "Using Amazon EC2 falls under which of the following cloud computing models?",
    "opts": [
      "Iaas & SaaS.",
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
    "q": "Which of the below is a best-practice when building applications on AWS?",
    "opts": [
      "Strengthen physical security by applying the principle of least privilege.",
      "Ensure that the application runs on hardware from trusted vendors.",
      "Use IAM policies to maintain performance.",
      "Decouple the components of the application so that they run independently."
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
    "q": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
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
    "q": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    "opts": [
      "Active archives.",
      "Dynamic websites’ assets.",
      "Long-term analytic data.",
      "Active databases.",
      "Cached data."
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
    "q": "What does Amazon Elastic Beanstalk provide?",
    "opts": [
      "A PaaS solution to automate application deployment.",
      "A compute engine for Amazon ECS.",
      "A scalable file storage solution for use with AWS and on-premises servers.",
      "A NoSQL database service."
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
    "q": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    "opts": [
      "Amazon Kinesis.",
      "Security groups.",
      "Amazon Inspector.",
      "AWS Network Access Control Lists."
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
    "q": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    "opts": [
      "Patch management controls.",
      "Database controls.",
      "Awareness & Training.",
      "Environmental controls.",
      "Physical controls."
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
    "q": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    "opts": [
      "Reserved instances     - No Upfront.",
      "Reserved instances     - Partial Upfront.",
      "On-Demand instances.",
      "Spot Instances."
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
    "q": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
    "opts": [
      "Elasticity.",
      "Global reach.",
      "Data durability.",
      "High availability."
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
    "q": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
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
    "q": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    "opts": [
      "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
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
    "q": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    "opts": [
      "You can contact AWS support to increase the service limits.",
      "Each IAM user has the same service limit.",
      "There are no service limits on AWS.",
      "You can use the AWS Trusted Advisor to monitor your service limits.",
      "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
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
    "q": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
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
    "q": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
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
    "q": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
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
    "q": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
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
    "q": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    "opts": [
      "AWS CloudHSM.",
      "Security Groups.",
      "AWS Batch.",
      "AWS IAM.",
      "Network Access Control Lists (Network ACLs)."
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
    "q": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
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
    "q": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    "opts": [
      "Application development.",
      "Market research.",
      "Business analysis.",
      "Physical hardware."
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
    "q": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    "opts": [
      "EC2 instances will be billed on one second increments, with a minimum of one minute.",
      "EC2 instances will be billed on one hour increments, with a minimum of one day.",
      "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      "EC2 instances will be billed on one day increments, with a minimum of one month."
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
    "q": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    "opts": [
      "Instance type.",
      "The Availability Zone where the instance is provisioned.",
      "Load balancing.",
      "Number of buckets.",
      "Number of private IPs."
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
    "q": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    "opts": [
      "By creating an AWS Config template from the old instance and launching a new instance from it.",
      "By creating an EBS Snapshot of the old instance.",
      "By installing Aurora on EC2 and launching a new instance from it.",
      "By creating an AMI from the old instance and launching a new instance from it."
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
    "q": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    "opts": [
      "IAM Principals.",
      "AWS Service Control Policies (SCPs).",
      "IAM policies.",
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
    "q": "Which of the following statements describes the AWS Cloud’s agility?",
    "opts": [
      "AWS allows you to host your applications in multiple regions around the world.",
      "AWS provides customizable hardware at the lowest possible cost.",
      "AWS allows you to provision resources in minutes.",
      "AWS allows you to pay upfront to reduce costs."
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
    "q": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    "opts": [
      "Lower administrative burden.",
      "Complete control over the underlying host.",
      "Resizable compute capacity.",
      "Scales automatically to larger or smaller instance types.",
      "Supports the document and key-value data structure."
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
    "q": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
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
    "q": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
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
    "q": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    "opts": [
      "Network Access Control Lists (NACLs).",
      "Key Pairs.",
      "Access Keys.",
      "IAM Policies.",
      "Security Groups."
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
    "q": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    "opts": [
      "Reserved instances.",
      "Spot Instances.",
      "On-Demand instances.",
      "Dedicated instances."
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
    "q": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
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
    "q": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
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
    "q": "Which AWS Service can be used to register a new domain name?",
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
    "q": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
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
    "q": "Which AWS service provides cost-optimization recommendations?",
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
    "q": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    "opts": [
      "VPC Peering.",
      "AWS Transit Gateway.",
      "Amazon Connect.",
      "Security Groups."
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
    "q": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    "opts": [
      "Instances can be shut down by AWS at any time with no notification.",
      "Reserved instances require at least a one-year pricing commitment.",
      "There is no additional charge for using dedicated instances.",
      "Reserved instances provide a significant discount compared to on-demand instances.",
      "Reserved instances are best suited for periodic workloads."
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
    "q": "Why does every AWS Region contain multiple Availability Zones?",
    "opts": [
      "Multiple Availability Zones allows you to build resilient and highly available architectures.",
      "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      "Multiple Availability Zones allows for data replication and global reach.",
      "Multiple Availability Zones within a region increases the storage capacity available in that region."
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
    "q": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    "opts": [
      "On-Demand Instances.",
      "Spot Instances.",
      "Reserved Instances     - All Upfront.",
      "Reserved Instances     - No Upfront."
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
    "q": "Which of the following is a benefit of running an application in multiple Availability Zones?",
    "opts": [
      "Allows you to exceed AWS service limits.",
      "Reduces application response time between servers and global users.",
      "Increases available compute capacity.",
      "Increases the availability of your application."
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
    "q": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    "opts": [
      "AWS sells the old devices to other hosting providers.",
      "AWS destroys the old devices in accordance with industry-standard practices.",
      "AWS sends the old devices for remanufacturing.",
      "AWS stores the old devices in a secure place."
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
    "q": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
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
    "q": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    "opts": [
      "Replacing an existing EC2 instance with a larger, more powerful one.",
      "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
      "Adding more RAM capacity to an EC2 instance.",
      "Adding more EC2 instances of the same size to handle an increase in traffic."
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
    "q": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
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
    "q": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    "opts": [
      "Applying the principle of least privilege to all AWS resources.",
      "Automatically provisioning new resources to meet demand.",
      "All AWS services are considered Global Services, and this design helps customers serve their international users.",
      "Providing compensation to customers if issues occur.",
      "Ability to recover quickly from failures."
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
    "q": "Which statement is true regarding the AWS Shared Responsibility Model?",
    "opts": [
      "Responsibilities vary depending on the services used.",
      "Security of the IaaS services is the responsibility of AWS.",
      "Patching the guest OS is always the responsibility of AWS.",
      "Security of the managed services is the responsibility of the customer."
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
    "q": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    "opts": [
      "The Reserved Instance discounts can only be shared with the master account.",
      "All accounts can receive the hourly cost benefit of the Reserved Instances.",
      "The purchased instances will have better performance than On-demand instances.",
      "There are no cost benefits from using consolidated billing; It is for informational purposes only."
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
    "q": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    "opts": [
      "Deploy the application across multiple Availability Zones and Edge locations.",
      "Deploy the application across multiple Availability Zones and subnets.",
      "Deploy the application across multiple Regions and Availability Zones.",
      "Deploy the application across multiple VPC’s and subnets."
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
    "q": "What does AWS Snowball provide? (Choose TWO)",
    "opts": [
      "Built-in computing capabilities that allow customers to process data locally.",
      "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
      "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
      "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
      "Secure transfer of large amounts of data into and out of the AWS."
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
    "q": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
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
    "q": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    "opts": [
      "Applying the Amazon Connect latency-based routing policy.",
      "Registering a new US domain name to serve the users in the US.",
      "Building a new data center in the US and implementing a hybrid model.",
      "Deploying new Amazon EC2 instances in a Region located in the US."
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
    "q": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    "opts": [
      "IAM roles.",
      "IAM users.",
      "IAM user groups.",
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
    "q": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
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
    "q": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    "opts": [
      "Build security in every layer.",
      "Parallelize tasks.",
      "Implement elasticity.",
      "Adopt monolithic architecture."
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
    "q": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    "opts": [
      "Increasing speed and agility.",
      "There is no need to worry about security.",
      "Gaining complete control over the physical infrastructure.",
      "Operating applications on behalf of customers.",
      "All of the physical security and most of the data/network security are taken care of for you."
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
    "q": "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
    "opts": [
      "Allows treating an application as a single, cohesive unit.",
      "Reduces inter-dependencies so that failures do not impact other components of the application.",
      "Allows updates of any monolithic application quickly and easily.",
      "Allows tracking of any API call made to any AWS service."
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
    "q": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
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
    "q": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    "opts": [
      "AWS services’ costs will be reduced to half the original price.",
      "The consolidated billing feature is just for organizational purpose.",
      "Each AWS account gets volume discounts.",
      "Each AWS account gets five times the free-tier services capacity."
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
    "q": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    "opts": [
      "Regularly update firmware on EBS devices.",
      "Create EBS snapshots.",
      "Ensure that EBS data is encrypted at rest.",
      "Store a backup daily in an external drive.",
      "Prevent any unauthorized access to AWS data centers."
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
    "q": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
    "opts": [
      "By automatically scaling your on-premises resources based on changes in demand.",
      "By automatically scaling your AWS resources using an Elastic Load Balancer.",
      "By reducing interdependencies between application components wherever possible.",
      "By automatically provisioning the required AWS resources based on changes in demand."
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
    "q": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    "opts": [
      "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
      "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
      "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
      "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
      "Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
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
    "q": "What does Amazon CloudFront use to distribute content to global users with low latency?",
    "opts": [
      "AWS Global Accelerator.",
      "AWS Regions.",
      "AWS Edge Locations.",
      "AWS Availability Zones."
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
    "q": "What does the \"Principle of Least Privilege\" refer to?",
    "opts": [
      "You should grant your users only the permissions they need when they need them and nothing more.",
      "All IAM users should have at least the necessary permissions to access the core AWS services.",
      "All trusted IAM users should have access to any AWS service in the respective AWS account.",
      "IAM users should not be granted any permissions; to keep your account safe."
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
    "q": "Which of the following does NOT belong to the AWS Cloud Computing models?",
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
    "q": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
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
    "q": "Which service provides DNS in the AWS cloud?",
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
    "q": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
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
    "q": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
    "opts": [
      "AWS OpsWorks.",
      "AWS Storage Gateway.",
      "Amazon EBS volume.",
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
    "q": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    "opts": [
      "Reserved instances.",
      "Spot instances.",
      "Dedicated instances.",
      "On-demand instances."
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
    "q": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    "opts": [
      "Reserved Instances.",
      "On-demand Instances.",
      "Dedicated Instances.",
      "Spot Instances."
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
    "q": "Which of the following can be described as a global content delivery network (CDN) service?",
    "opts": [
      "AWS VPN.",
      "AWS Direct Connect.",
      "AWS Regions.",
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
    "q": "Which of the following services allows customers to manage their agreements with AWS?",
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
    "q": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
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
    "q": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
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
    "q": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    "opts": [
      "AWS Identity and Access Management (IAM) user.",
      "Infrastructure Event Management (IEM) engineer.",
      "AWS Consulting Partners.",
      "Technical Account Manager (TAM)."
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
    "q": "How can you view the distribution of AWS spending in one of your AWS accounts?",
    "opts": [
      "By using Amazon VPC console.",
      "By contacting the AWS Support team.",
      "By using AWS Cost Explorer.",
      "By contacting the AWS Finance team."
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
    "q": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "Access keys.",
      "Secret token.",
      "UserID.",
      "User name and password."
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
    "q": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    "opts": [
      "Contact the AWS Customer Service team.",
      "Contact the AWS Abuse team.",
      "Contact the AWS Concierge team.",
      "Contact the AWS Security team."
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
    "q": "Select TWO examples of the AWS shared controls.",
    "opts": [
      "Patch Management.",
      "IAM Management.",
      "VPC Management.",
      "Configuration Management.",
      "Data Center operations."
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
    "q": "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    "opts": [
      "ELB.",
      "Auto Scaling.",
      "Amazon Athen.",
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
    "q": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
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
    "q": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    "opts": [
      "A MySQL database installed on an EC2 instance.",
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
    "q": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
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
    "q": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    "opts": [
      "Client-side encryption.",
      "Configuring infrastructure devices.",
      "Server-side encryption.",
      "Filtering traffic with Security Groups."
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
    "q": "What does the AWS Health Dashboard provide? (Choose TWO)",
    "opts": [
      "Detailed troubleshooting guidance to address AWS events impacting your resources.",
      "Health checks for Auto Scaling instances.",
      "Recommendations for Cost Optimization.",
      "A dashboard detailing vulnerabilities in your applications.",
      "Personalized view of AWS service health."
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
    "q": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
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
    "q": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
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
    "q": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    "opts": [
      "Amazon S3 provides unlimited storage for any type of data.",
      "Amazon S3 can run any type of application or backend system.",
      "Amazon S3 stores any number of objects, but with object size limits.",
      "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
      "Amazon S3 provides 99.999999999% (11 9’s) of data durability."
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
    "q": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    "opts": [
      "Disk disposal.",
      "Controlling physical access to compute resources.",
      "Patching the Network infrastructure.",
      "Setting password complexity rules.",
      "Configuring network access rules."
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
    "q": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    "opts": [
      "Amazon Aurora.",
      "Amazon CloudWatch.",
      "AWS Quick Start reference deployments.",
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
    "q": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
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
    "q": "What time-savings advantage is offered with the use of Amazon Rekognition?",
    "opts": [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Rekognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
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
    "q": "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
    "opts": [
      "Data center security",
      "Business analysis",
      "Project management",
      "Operating system administration"
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
    "q": "According to the AWS shared responsibility model, what is AWS responsible for?",
    "opts": [
      "Configuring Amazon VPC",
      "Managing application code",
      "Maintaining application traffic",
      "Managing the network infrastructure"
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
    "q": "Which service should be used to estimate the costs of running a new project on AWS?",
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
    "q": "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
    "opts": [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Usage Report",
      "Amazon EC2 dashboard"
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
    "q": "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
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
    "q": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    "opts": [
      "Partial Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 3-year term",
      "No Upfront Reserved Instances for a 3-year term"
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
    "q": "Which of the following is the responsibility of AWS?",
    "opts": [
      "Setting up AWS Identity and Access Management (IAM) users and groups",
      "Physically destroying storage media at end of life",
      "Patching guest operating systems",
      "Configuring security settings on Amazon EC2 instances"
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
    "q": "Which of the following is an advantage of using AWS?",
    "opts": [
      "AWS audits user data.",
      "Data is automatically secure.",
      "There is no guessing on capacity needs.",
      "AWS manages compliance needs."
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
    "q": "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
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
    "q": "Which services manage and automate application deployments on AWS? (Choose two.)",
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
    "q": "A user wants guidance on possible savings when migrating from on-premises to AWS.   Which tool is suitable for this scenario?",
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
    "q": "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)",
    "opts": [
      "Design for automated failure recovery",
      "Use multiple Availability Zones",
      "Manage changes via documented processes",
      "Test for moderate demand to ensure reliability",
      "Backup recovery to an on-premises environment"
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
    "q": "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)",
    "opts": [
      "Rotate passwords and access keys.",
      "Remove MFA tokens.",
      "Move resources to a different AWS Region.",
      "Delete AWS CloudTrail Resources.",
      "Contact AWS Support."
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
    "q": "What is an example of high availability in the AWS Cloud?",
    "opts": [
      "Consulting AWS technical support at any time day or night",
      "Ensuring an application remains accessible, even if a resource fails",
      "Making any AWS service available for use by paying on demand",
      "Deploying in any part of the world using AWS Regions"
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
    "q": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
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
    "q": "A company wants to monitor the CPU usage of its Amazon EC2 resources.   Which AWS service should the company use?",
    "opts": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Cost and Usage report",
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
    "q": "What is an AWS Identity and Access Management (IAM) role?",
    "opts": [
      "A user associated with an AWS resource",
      "A group associated with an AWS resource",
      "An entity that defines a set of permissions for use with an AWS resource",
      "An authentication credential associated with a multi-factor authentication (MFA) token"
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
    "q": "What are the advantages of Reserved Instances? (Choose two.)",
    "opts": [
      "They provide a discount over on-demand pricing.",
      "They provide access to additional instance types.",
      "They provide additional networking capability.",
      "Customers can upgrade instances as new types become available.",
      "Customers can reserve capacity in an Availability Zone."
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
    "q": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    "opts": [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "They enable the application's static content to reside closer to end users.",
      "They are able to distribute incoming requests across a tier of web server instances."
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
    "q": "How can one AWS account use Reserved Instances from another AWS account?",
    "opts": [
      "By using Amazon EC2 Dedicated Instances",
      "By using AWS Organizations consolidated billing",
      "By using the AWS Cost Explorer tool",
      "By using AWS Budgets"
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
    "q": "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds.   For how much time will the customer be billed?",
    "opts": [
      "3 hours, 5 minutes",
      "3 hours, 5 minutes, and 6 seconds",
      "3 hours, 6 minutes",
      "4 hours"
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
    "q": "Which of the following AWS services provide compute resources? (Choose two.)",
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
    "q": "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
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
    "q": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)",
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
    "q": "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
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
    "q": "Which services use AWS edge locations? (Choose two.)",
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
    "q": "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
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
    "q": "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
    "opts": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
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
    "q": "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)",
    "opts": [
      "Users pay for software by the hour or month depending on licensing.",
      "AWS Marketplace enables the user to launch applications with 1-Click.",
      "AWS Marketplace data encryption is managed by a third-party vendor.",
      "AWS Marketplace eliminates the need to upgrade to newer software versions.",
      "Users can deploy third-party software without testing."
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
    "q": "Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)",
    "opts": [
      "Firmware upgrades of network infrastructure",
      "Patching of operating systems",
      "Patching of the underlying hypervisor",
      "Physical security of data centers",
      "Configuration of the security group"
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
    "q": "Which service enables customers to audit and monitor changes in AWS resources?",
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
    "q": "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
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
    "q": "According to the AWS shared responsibility model, who is responsible for configuration management?",
    "opts": [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model."
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
    "q": "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
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
    "q": "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
    "opts": [
      "Security",
      "Reliability",
      "Elasticity",
      "High availability"
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
    "q": "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack.   Who should the user contact FIRST about this situation?",
    "opts": [
      "AWS Premium Support",
      "AWS Technical Account Manager",
      "AWS Solutions Architect",
      "AWS Abuse team"
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
    "q": "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)",
    "opts": [
      "There are no upfront commitments.",
      "AWS manages all security in the cloud.",
      "Users have the ability to provision resources on demand.",
      "Users have access to free and unlimited storage.",
      "Users have control over the physical infrastructure."
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
    "q": "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
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
    "q": "What is AWS Trusted Advisor?",
    "opts": [
      "It is an AWS staff member who provides recommendations and best practices on how to use AWS.",
      "It is a network of AWS partners who provide recommendations and best practices on how to use AWS.",
      "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.",
      "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security."
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
    "q": "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
    "opts": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Organizations",
      "Consolidated billing"
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
    "q": "Which AWS service offers on-demand access to AWS security and compliance reports?",
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
    "q": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)",
    "opts": [
      "Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency."
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
    "q": "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
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
    "q": "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
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
    "q": "When a company provisions web servers in multiple AWS Regions, what is being increased?",
    "opts": [
      "Coupling",
      "Availability",
      "Security",
      "Durability"
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
    "q": "The pay-as-you-go pricing model for AWS services:",
    "opts": [
      "reduces capital expenditures.",
      "requires payment up front for AWS services.",
      "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.",
      "reduces operational expenditures."
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
    "q": "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
    "opts": [
      "Lifecycle management of IAM credentials",
      "Physical security of global infrastructure",
      "Encryption of Amazon EBS volumes",
      "Firewall configuration"
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
    "q": "Which AWS service enables users to consolidate billing across multiple accounts?",
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
    "q": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    "opts": [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking"
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
    "q": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    "opts": [
      "The ability to bid for a lower hourly cost.",
      "Paying a daily rate regardless of time used.",
      "Paying only for time used.",
      "Pre-paying for instances and paying a lower hourly rate."
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
    "q": "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
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
    "q": "A characteristic of edge locations is that they:",
    "opts": [
      "Host Amazon EC2 instances closer to users.",
      "Help lower latency and improve performance for users.",
      "Cache frequently changing data without reaching the origin server.",
      "Refresh data changes daily."
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
    "q": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
    "opts": [
      "Command line interface.",
      "On-premises.",
      "Software Development Kits.",
      "Software-as-a-service.",
      "Hybrid."
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
    "q": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    "opts": [
      "Amazon EC2 Spot Instances.",
      "Amazon EC2 Dedicated Instances.",
      "Amazon EC2 On-Demand Instances.",
      "Amazon EC2 Reserved Instances."
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
    "q": "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
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
    "q": "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
    "opts": [
      "Fault tolerance.",
      "Global reach.",
      "Pay-as-you-go pricing.",
      "High availability."
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
    "q": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
    "opts": [
      "AWS automatically distributes the data globally for higher durability.",
      "AWS will take care of operating the application.",
      "AWS makes it easy to architect for high availability.",
      "AWS can easily accommodate application demand changes.",
      "AWS takes care of application security patching."
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
    "q": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
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
    "q": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
    "opts": [
      "Implementing Amazon Rekognition.",
      "Using AWS Shield-protected resources.",
      "Blocking access with Security Groups.",
      "Using Multi-Factor Authentication (MFA).",
      "Enforcing password strength and expiration."
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
    "q": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
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
    "q": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
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
    "q": "Which of the following is a component of the AWS Global Infrastructure?",
    "opts": [
      "Amazon Alexa.",
      "AWS Regions.",
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
    "q": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    "opts": [
      "On-Demand Instances.",
      "Reserved Instances.",
      "Spot Instances.",
      "Convertible Reserved Instances."
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
    "q": "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
    "opts": [
      "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
      "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
      "Use Amazon Athena to query data from the on-premises database servers",
      "Connect the company’s on-premises data center to AWS using AWS Direct Connect",
      "Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers"
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
    "q": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    "opts": [
      "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "Run AWS Trusted Advisor and review the findings.",
      "Open the AWS IAM console and check the inbound rule filters for open access.",
      "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
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
    "q": "Which of the following security-related services does AWS offer? (Select TWO)",
    "opts": [
      "Multi-factor authentication physical tokens.",
      "AWS Trusted Advisor security checks.",
      "Data encryption.",
      "Automated penetration testing.",
      "Amazon S3 copyrighted content detection."
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
    "q": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
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
    "q": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
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
    "q": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    "opts": [
      "Think parallel.",
      "Implement elasticity.",
      "Decouple your components.",
      "Design for failure."
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
    "q": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    "opts": [
      "Easy and fast deployment of applications in multiple Regions around the world.",
      "Security of the AWS Cloud.",
      "Elasticity of the AWS Cloud.",
      "Lower variable costs due to massive economies of scale."
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
    "q": "What can users access from AWS Artifact?",
    "opts": [
      "AWS security and compliance documents.",
      "A download of configuration management details for all AWS resources.",
      "Training materials for AWS services.",
      "A security assessment of the applications deployed in the AWS Cloud."
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
    "q": "Compared with costs in traditional and virtualized data centers, AWS has:",
    "opts": [
      "Greater variable costs and greater upfront costs.",
      "Fixed usage costs and lower upfront costs.",
      "Lower variable costs and greater upfront costs.",
      "Lower variable costs and lower upfront costs."
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
    "q": "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
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
    "q": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    "opts": [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "They enable the application’s stalk: content to reside closer to end users.",
      "They are able to distribute incoming requests across a tier of web server instances."
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
    "q": "How should a customer forecast the future costs for running a new web application?",
    "opts": [
      "Amazon Aurora Backtrack.",
      "Amazon CloudWatch Billing Alarms.",
      "AWS Simple Monthly Calculator.",
      "AWS Cost and Usage report."
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
    "q": "Where are AWS compliance documents, such as an SOC 1 report, located?",
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
    "q": "Which of the following tasks is the responsibility of AWS?",
    "opts": [
      "Encrypting client-side data.",
      "Configuring AWS Identity and Access Management (IAM) roles.",
      "Securing the Amazon EC2 hypervisor.",
      "Setting user password policies."
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
    "q": "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
    "opts": [
      "Firmware upgrades of network infrastructure.",
      "Patching of operating systems.",
      "Patching of the underlying hypervisor.",
      "Physical security of data centers.",
      "Configuration of the security group."
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
    "q": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
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
    "q": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
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
    "q": "What are the advantages of the AWS Cloud (Select TWO)",
    "opts": [
      "Fixed rate monthly cost.",
      "No need to guess capacity requirements.",
      "Increased speed to market.",
      "Increased upfront capital expenditure.",
      "Physical access to cloud data centers."
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
    "q": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    "opts": [
      "Users do not have to wait for infrastructure provisioning.",
      "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      "AWS takes over application configuration management on behalf of users.",
      "Users do not need to address security and compliance issues."
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
    "q": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
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
    "q": "What is an example of agility in the AWS Cloud?",
    "opts": [
      "Access to multiple instance types.",
      "Access to managed services.",
      "Using Consolidated Billing to produce one bill.",
      "Decreased acquisition time for new compute resources."
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
    "q": "Which of the following are advantages of AWS consolidated billing? (Choose two)",
    "opts": [
      "The ability to receive one bill for multiple accounts.",
      "Service limits increasing by default in all accounts.",
      "A fixed discount on the monthly bill.",
      "Potential volume discounts, as usage in all accounts is combined.",
      "The automatic extension of the master account’s AWS support plan to all accounts."
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
    "q": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    "opts": [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
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
    "q": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
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
    "q": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    "opts": [
      "One-year, No Upfront, Standard RI pricing.",
      "One-year, All Upfront, Convertible RI pricing.",
      "Three-year, All Upfront, Standard RI pricing.",
      "Three-year, No Upfront, Convertible RI pricing."
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
    "q": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
    "opts": [
      "Summaries by Amazon Simple Notification Service (Amazon SNS).",
      "Free Amazon Elasticsearch Service analytics.",
      "Provided at no charge.",
      "Real-time monitoring.",
      "Adjustable retention."
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
    "q": "Which of the following is an AWS-managed compute service?",
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
    "q": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
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
    "q": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
    "opts": [
      "Patching underlying infrastructure",
      "Physical security",
      "Patching Amazon EC2 instances",
      "Patching network infrastructure"
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
    "q": "According to the AWS shared responsibility model who is responsible for configuration management?",
    "opts": [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model."
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
    "q": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
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
    "q": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
    "opts": [
      "Fixed-term.",
      "Pay-as-you-go.",
      "Colocation.",
      "Planned.",
      "Variable cost."
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
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
    "opts": [
      "Ensuring that application data is encrypted at rest.",
      "Ensuring that AWS NTP servers are set to the correct time.",
      "Ensuring that users have received security training in the use of AWS services.",
      "Ensuring that access to data centers is restricted.",
      "Ensuring that hardware is disposed of properly."
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
    "q": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    "opts": [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts."
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
    "q": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
    "opts": [
      "A Partial Upfront Reserved Instances for a 1-year term.",
      "All Upfront Reserved instances for a 1 year form.",
      "All Upfront Reserved Instances for a 3 year term.",
      "No Upfront Reserved Instances for a 3 year term."
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
    "q": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
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
    "q": "Which AWS service allows users to identify the changes made to a resource over time?",
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
    "q": "According to best practices, how should an application be designed to run in the AWS Cloud?",
    "opts": [
      "Use tightly coupled components.",
      "Use loosely coupled components.",
      "Use infrequently coupled components.",
      "Use frequently coupled components."
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
    "q": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
    "opts": [
      "24/7 assistance by way of live chat or a telephone call.",
      "Support from a dedicated AWS Technical Account Manager.",
      "An unlimited number of cases and contacts.",
      "15-minute response time for production system interruption cases.",
      "Annual operational reviews with AWS Solutions Architects."
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
    "q": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
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
    "q": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    "opts": [
      "Dedicated Hosts.",
      "Dedicated Instances.",
      "Spot Instances.",
      "Reserved Instances."
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
    "q": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    "opts": [
      "Dedicated RIs.",
      "Scheduled RIs.",
      "Convertible RIs.",
      "Standard RIs."
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
    "q": "Which service is best for storing common database query results, which helps to alleviate database access load?",
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
    "q": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
    "opts": [
      "For non-production applications.",
      "For stateful workloads.",
      "For applications that cannot have interruptions.",
      "For fault-tolerant flexible applications.",
      "For sensitive database applications."
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
    "q": "Which AWS tools assist with estimating costs? (Select three)",
    "opts": [
      "Detailed billing report.",
      "Cost allocation tags.",
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
    "q": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
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
    "q": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
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
    "q": "Access keys in AWS Identity and Access Management (IM1) are used to:",
    "opts": [
      "Log in to the AWS Management Console.",
      "Make programmatic calls to AWS from AWS APIs.",
      "Log in to Amazon EC2 instances.",
      "Authenticate to AWS CodeCommit repositories."
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
    "q": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
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
    "q": "How does AWS shorten the time to provision IT resources?",
    "opts": [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company’s IT vendor list."
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
    "q": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
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
    "q": "Which of the following are characteristics of Amazon S3? (Select TWO)",
    "opts": [
      "A global file system.",
      "An object store.",
      "A local file store.",
      "A network file system.",
      "A durable storage system."
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
    "q": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
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
    "q": "Which of the following services is in the category of AWS serverless platform?",
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
    "q": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    "opts": [
      "Cost allocation tags.",
      "Consolidated billing.",
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
    "q": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Trusted Advisor.",
      "Consolidated billing.",
      "Detailed billing."
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
    "q": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    "opts": [
      "Cloud-native.",
      "Partner network.",
      "Hybrid architecture.",
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
    "q": "What technology enables compute capacity to adjust as loads change?",
    "opts": [
      "Load balancing.",
      "Automatic failover.",
      "Round robin.",
      "Auto Scaling."
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
    "q": "Which AWS service is a managed NoSQL database?",
    "opts": [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon RDS for ManaDB."
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
    "q": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    "opts": [
      "Data centers contain regions.",
      "Regions contain Availability Zones.",
      "Availability Zones contain edge locations.",
      "Edge locations contain regions."
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
    "q": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    "opts": [
      "Using many instances in parallel.",
      "Using a single large instance during off-peak hours.",
      "Using dedicated hardware.",
      "Using a large GPU instance type."
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
    "q": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
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
    "q": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    "opts": [
      "API keys.",
      "Access keys.",
      "User names/Passwords.",
      "SSH keys."
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
    "q": "The user is fully responsible for which action when running workloads on AWS?",
    "opts": [
      "Patching the infrastructure components.",
      "Maintaining the underlying infrastructure components.",
      "Maintaining physical and environmental controls.",
      "Implementing controls to route application traffic."
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
    "q": "Which AWS support plan includes a dedicated Technical Account Manager?",
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
    "q": "What time-savings advantage is offered with the use of Amazon Rekognition?",
    "opts": [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Recognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
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
    "q": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    "opts": [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type."
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
    "q": "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    "opts": [
      "Implementing elasticity enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
      "Doubling EC2 computing resources to increase system fault tolerance."
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
    "q": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    "opts": [
      "AWS Partner Network Technology Partners.",
      "AWS Marketplace.",
      "AWS Partner Network Consulting Partners.",
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
    "q": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
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
    "q": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    "opts": [
      "Implement automation.",
      "Design for agility.",
      "Design for failure.",
      "Implement elasticity."
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
    "q": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
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
    "q": "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
    "opts": [
      "Managing edge locations",
      "Physical security",
      "Firewall configuration",
      "Global infrastructure"
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
    "q": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    "opts": [
      "AWS Senior Support Engineers",
      "AWS Technical Account Managers",
      "AWS Trusted Advisor",
      "AWS Discussion Forums"
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
    "q": "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    "opts": [
      "Multiple Availability Zones",
      "Performance efficiency",
      "Security",
      "Encryption usage",
      "High availability"
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
    "q": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    "opts": [
      "No upfront payment",
      "Hourly on-demand payment",
      "Partial upfront payment",
      "All upfront payment"
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
    "q": "What is an advantage of deploying an application across multiple Availability Zones?",
    "opts": [
      "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
      "There will be decreased application latency that will improve the user experience."
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
    "q": "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS.   What is the MOST appropriate response?",
    "opts": [
      "Inform the user that AWS pricing allows for on-demand pricing.",
      "Direct the user to the AWS Simple Monthly Calculator for an estimate.",
      "Use Amazon QuickSight to analyze current spending on-premises.",
      "Use Amazon AppStream 2.0 for real-time pricing analytics."
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
    "q": "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources.   What combination of actions will enable the company to accomplish this goal? (Choose two.)",
    "opts": [
      "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
      "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.",
      "Use Amazon Athena to query data from the on-premises database servers.",
      "Connect the company's on-premises data center to AWS using AWS Direct Connect.",
      "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers."
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
    "q": "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses.   Which AWS service can help secure the application and block the malicious traffic?",
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
    "q": "Treating infrastructure as code in the AWS Cloud allows users to:",
    "opts": [
      "automate migration of on-premises hardware to AWS data centers.",
      "let a third party automate an audit of the AWS infrastructure.",
      "turn over application code to AWS so it can run on the AWS infrastructure.",
      "automate the infrastructure provisioning process."
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
    "q": "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud.   Which AWS service should be used?",
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
    "q": "AWS CloudFormation is designed to help the user:",
    "opts": [
      "model and provision resources.",
      "update application code.",
      "set up data lakes.",
      "create reports for billing."
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
    "q": "Which of the following is an AWS database service?",
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
    "q": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports.   What is the SIMPLEST way to do this?",
    "opts": [
      "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "Run AWS Trusted Advisor and review the findings.",
      "Open the AWS IAM console and check the inbound rule filters for open access.",
      "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access."
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
    "q": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)",
    "opts": [
      "AWS automatically distributes the data globally for higher durability.",
      "AWS will take care of operating the application.",
      "AWS makes it easy to architect for high availability.",
      "AWS can easily accommodate application demand changes.",
      "AWS takes care application security patching."
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
    "q": "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances.   Which AWS service will provide this assessment report?",
    "opts": [
      "EC2 security groups",
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
    "q": "How can a company isolate the costs of production and non-production workloads on AWS?",
    "opts": [
      "Create Identity and Access Management (IAM) roles for production and non-production workloads.",
      "Use different accounts for production and non-production expenses.",
      "Use Amazon EC2 for non-production workloads and other services for production workloads.",
      "Use Amazon CloudWatch to monitor the use of services."
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
    "q": "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
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
    "q": "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements.   Which AWS service will meet this requirement at the LOWEST cost?",
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
    "q": "What are the immediate benefits of using the AWS Cloud? (Choose two.)",
    "opts": [
      "Increased IT staff.",
      "Capital expenses are replaced with variable expenses.",
      "User control of infrastructure.",
      "Increased agility.",
      "AWS holds responsibility for security in the cloud."
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
    "q": "What is the purpose of AWS Storage Gateway?",
    "opts": [
      "It ensures on-premises data storage is 99.999999999% durable.",
      "It transports petabytes of data to and from AWS.",
      "It connects to multiple Amazon EC2 instances.",
      "It connects on-premises data storage to the AWS Cloud."
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
    "q": "What should users do if they want to install an application in geographically isolated locations?",
    "opts": [
      "Install the application using multiple internet gateways.",
      "Deploy the application to an Amazon VPC.",
      "Deploy the application to multiple AWS Regions.",
      "Configure the application using multiple NAT gateways."
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
    "q": "A system in the AWS Cloud is designed to withstand the failure of one or more components.   What is this an example of?",
    "opts": [
      "Elasticity",
      "High Availability",
      "Scalability",
      "Agility"
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
    "q": "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system.   Which AWS service can fulfill this requirement?",
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
    "q": "Within the AWS shared responsibility model, who is responsible for security and compliance?",
    "opts": [
      "The customer is responsible.",
      "AWS is responsible.",
      "AWS and the customer share responsibility.",
      "AWS shares responsibility with the relevant governing body."
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
    "q": "To use the AWS CLI, users are required to generate:",
    "opts": [
      "a password policy.",
      "an access/secret key.",
      "a managed policy.",
      "an API key."
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
    "q": "Which AWS service is used to provide encryption for Amazon EBS?",
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
    "q": "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)",
    "opts": [
      "By the time it takes for the Lambda function to execute.",
      "By the number of versions of a specific Lambda function.",
      "By the number of requests made for a given Lambda function.",
      "By the programming language that is used for the Lambda function.",
      "By the total number of Lambda functions in an AWS account."
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
    "q": "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)",
    "opts": [
      "There are more AWS Regions than Availability Zones.",
      "There are more edge locations than AWS Regions.",
      "An edge location is an Availability Zone.",
      "There are more AWS Regions than edge locations.",
      "There are more Availability Zones than AWS Regions."
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
    "q": "What does AWS Shield Standard provide?",
    "opts": [
      "WAF rules",
      "DDoS protection",
      "Identity and Access Management (IAM) permissions and access to resources",
      "Data encryption"
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
    "q": "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources.   What expense can be reduced using the AWS Cloud?",
    "opts": [
      "The cost of writing custom-built Java or Node .js code",
      "Penetration testing for security",
      "hardware required to support new applications",
      "Writing specific test cases for third-party applications."
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
    "q": "What does AWS Marketplace allow users to do? (Choose two.)",
    "opts": [
      "Sell unused Amazon EC2 Spot Instances.",
      "Sell solutions to other AWS users.",
      "Buy third-party software that runs on AWS.",
      "Purchase AWS security and compliance documents.",
      "Order AWS Snowball."
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
    "q": "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
    "opts": [
      "All resources run using on-premises infrastructure.",
      "Some resources run on-premises and some run in a colocation center.",
      "All resources run in the AWS Cloud.",
      "Some resources run on-premises and some run in the AWS Cloud."
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
    "q": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    "opts": [
      "By minimizing large capital expenditures",
      "By having no responsibility for third-party license costs",
      "By having no operational expenditures",
      "By having AWS manage applications"
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
    "q": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    "opts": [
      "Ensuring network connectivity from AWS to the internet",
      "Patching and fixing flaws within the AWS Cloud infrastructure",
      "Ensuring the physical security of cloud data centers",
      "Ensuring Amazon EBS volumes are backed up"
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
    "q": "What are the advantages of the AWS Cloud? (Choose two.)",
    "opts": [
      "Fixed rate monthly cost",
      "No need to guess capacity requirements",
      "Increased speed to market",
      "Increased upfront capital expenditure",
      "Physical access to cloud data centers"
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
    "q": "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)",
    "opts": [
      "The credit card processing fees for application transactions in the cloud.",
      "The cost of purchasing and installing server hardware in the on-premises data.",
      "The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.",
      "The costs of third-party penetration testing.",
      "The advertising costs associated with an ongoing enterprise-wide campaign."
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
    "q": "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
    "opts": [
      "Virtualization infrastructure",
      "Network infrastructure",
      "Application security",
      "Physical security of hardware"
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
    "q": "What helps a company provide a lower latency experience to its users globally?",
    "opts": [
      "Using an AWS Region that is central to all users",
      "Using a second Availability Zone in the AWS Region that is using used",
      "Enabling caching in the AWS Region that is being used",
      "Using edge locations to put content closer to all users"
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
    "q": "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
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
    "q": "Which Amazon RDS feature can be used to achieve high availability?",
    "opts": [
      "Multiple Availability Zones",
      "Amazon Reserved Instances",
      "Provisioned IOPS storage",
      "Enhanced monitoring"
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
    "q": "Where should users report that AWS resources are being used for malicious purposes?",
    "opts": [
      "AWS Abuse team",
      "AWS Shield",
      "AWS Support",
      "AWS Developer Forums"
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
    "q": "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
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
    "q": "What is an AWS Cloud design best practice?",
    "opts": [
      "Tight coupling of components",
      "Single point of failure",
      "High availability",
      "Overprovisioning of resources"
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
    "q": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    "opts": [
      "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.",
      "Customers retain full administrative access to their Amazon EC2 instances.",
      "Amazon EC2 instances can be launched on-demand when needed.",
      "Customers can permanently run enough instances to handle peak workloads."
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
    "q": "Which AWS service would simplify migration of a database to AWS?",
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
    "q": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
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
    "q": "Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)",
    "opts": [
      "AWS Secrets Manager.",
      "AWS Certificate Manager.",
      "AWS Multi-Factor Authentication (AWS MFA).",
      "Security groups.",
      "Password policies."
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
    "q": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
    "opts": [
      "Amazon CloudFront distributions.",
      "Amazon Route 53.",
      "Security Groups.",
      "Subnets.",
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
    "q": "For which auditing process does AWS have sole responsibility?",
    "opts": [
      "AWS IAM policies.",
      "Physical security.",
      "Amazon S3 bucket policies.",
      "AWS CloudTrail Logs."
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
    "q": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
    "opts": [
      "The ability to receive one bill for multiple accounts.",
      "Service limits increasing by default in all accounts.",
      "A fixed discount on the monthly bill.",
      "Potential volume discounts, as usage in all accounts is combined.",
      "The automatic extension of the master account’s AWS support plan to all accounts."
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
    "q": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
    "opts": [
      "Patching databases software.",
      "Testing application releases.",
      "Backing up databases.",
      "Creating database schema.",
      "Running penetration tests."
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
    "q": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    "opts": [
      "Contact an AWS Account Manager to sign a new contract.",
      "Move an Availability Zone to the new Region.",
      "Begin deploying resources in the second Region.",
      "Download the AWS Management Console for the new Region."
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
    "q": "Why is it beneficial to use Elastic Load Balancers with applications?",
    "opts": [
      "They allow for the conversion from Application Load.",
      "Balancers to Classic Load Balancers.",
      "They are capable of handling constant changes in network traffic patterns.",
      "They automatically adjust capacity. They are provided at no charge to users."
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
    "q": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
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
    "q": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
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
    "q": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    "opts": [
      "AWS Enterprise Support.",
      "AWS Solutions Architects.",
      "AWS Professional Services.",
      "AWS Account Managers."
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
    "q": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
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
    "q": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
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
    "q": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
    "opts": [
      "It identifies software vulnerabilities in applications running on AWS.",
      "It provides a list of cost optimization recommendations based on current AWS usage.",
      "It detects potential security vulnerabilities caused by permissions settings on account resources.",
      "It automatically corrects potential security issues caused by permissions settings on account resources.",
      "It provides proactive alerting whenever an Amazon EC2 instance has been compromised."
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
    "q": "Which AWS managed service is used to host databases?",
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
    "q": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "IAM group.",
      "IAM user.",
      "IAM role.",
      "IAM policy."
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
    "q": "Under the shared responsibility model, which of the following is the customer responsible for?",
    "opts": [
      "Ensuring that disk drives are wiped after use.",
      "Ensuring that firmware is updated on hardware devices.",
      "Ensuring that data is encrypted at rest.",
      "Ensuring that network cables are category six or higher."
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
    "q": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
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
    "q": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
    "opts": [
      "An access key ID.",
      "A primary key.",
      "A secret access key.",
      "A user ID.",
      "A secondary key."
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
    "q": "Which of the following is a shared control between the customer and AWS?",
    "opts": [
      "Providing a key for Amazon S3 client-side encryption.",
      "Configuration of an Amazon EC2 instance.",
      "Environmental controls of physical AWS data centers.",
      "Awareness."
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
    "q": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
    "opts": [
      "Amazon EBS.",
      "Amazon EC2 instance store.",
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
    "q": "Which of the following is an advantage of consolidated billing on AWS?",
    "opts": [
      "Volume pricing qualification.",
      "Shared access permissions.",
      "Multiple bills per account.",
      "Eliminates the need for tagging."
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
    "q": "Which services are parts of the AWS serverless platform?",
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
    "q": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    "opts": [
      "Spot Instances.",
      "Reserved Instances.",
      "Dedicated Hosts.",
      "On-Demand Instances."
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
    "q": "Which of the following security measures protect access to an AWS account? (Select TWO)",
    "opts": [
      "Enable AWS CloudTrail.",
      "Grant least privilege access to IAM users.",
      "Create one IAM user and share with many developers and users.",
      "Enable Amazon CloudFront.",
      "Activate multi-factor authentication (MFA) for privileged users."
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
    "q": "Which AWS service provides the ability to manage infrastructure as code?",
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
    "q": "What is an advantage of deploying an application across multiple Availability Zones?",
    "opts": [
      "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
      "There will be decreased application latency that will improve the user experience."
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
    "q": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
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
    "q": "Which of the following is an AWS Cloud architecture design principle?",
    "opts": [
      "Implement single points of failure.",
      "Implement loose coupling.",
      "Implement monolithic design.",
      "Implement vertical scaling."
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
    "q": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    "opts": [
      "Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
      "Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
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
    "q": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    "opts": [
      "Dedicated Hosts",
      "Reserved Instances",
      "On-Demand Instances",
      "No Upfront Reserved Instances"
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
    "q": "Which AWS service should be used for long-term, low-cost storage of data backups?",
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
    "q": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
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
    "q": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    "opts": [
      "Reserved Instances.",
      "On-Demand.",
      "Dedicated Hosts.",
      "Spot Instances."
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
    "q": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
    "opts": [
      "appGateway.",
      "Amazon S3.",
      "Amazon Elastic File System (EFS).",
      "Amazon Glacier.",
      "Amazom CloudFront."
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
    "q": "What can AWS edge locations be used for? (Select TWO)",
    "opts": [
      "Hosting applications.",
      "Delivering content closer to users.",
      "Running NoSQL database caching services.",
      "Reducing traffic on the server by caching responses.",
      "Sending notification messages to end users."
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
    "q": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
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
    "q": "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
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
    "q": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    "opts": [
      "It allows the business to eliminate IT bills.",
      "It allows the business to put a server in each customer’s data center.",
      "It allows the business to focus on business activities.",
      "It allows the business to leave servers unpatched."
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
    "q": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    "opts": [
      "Deploy applications across multiple Availability Zones within an AWS Region.",
      "Use a hybrid cloud computing deployment model within the geographic area.",
      "Deploy applications across multiple AWS Regions.",
      "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
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
    "q": "In which scenario should Amazon EC2 Spot Instances be used?",
    "opts": [
      "A company wants to move its main website to AWS from an on-premises web server.",
      "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "A company’s heavily used legacy database is currently running on-premises.",
      "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
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
    "q": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)",
    "opts": [
      "Reduced latency to users.",
      "The application’s presentation in the local language.",
      "Data sovereignty compliance.",
      "Cooling costs in hotter climates.",
      "Proximity to the customer’s office for on-site visits."
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
    "q": "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
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
    "q": "Which disaster recovery scenario offers the lowest probability of down time?",
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
    "q": "Which service’s PRIMARY purpose is software version control?",
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
    "q": "How can a customer increase security to AWS account logons? (Select TWO)",
    "opts": [
      "Configure AWS Certificate Manager",
      "Enable Multi-Factor Authentication (MFA)",
      "Use Amazon Cognito to manage access",
      "Configure a strong password policy",
      "Enable AWS Organizations"
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
    "q": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice area ?",
    "opts": [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Professional Services",
      "AWS Account Managers"
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
    "q": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house.  Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    "opts": [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partners",
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
    "q": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance ?",
    "opts": [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Consolidated billing",
      "Detailed billing"
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
    "q": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?",
    "opts": [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances"
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
    "q": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    "opts": [
      "High availability",
      "Shared security model",
      "Elasticity",
      "Pay-as-you-go pricing",
      "Reliability"
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
    "q": "Which of the following are characteristics of Amazon S3? (Select TWO.)",
    "opts": [
      "A global file system",
      "An object store",
      "A local file store",
      "A network file system",
      "A durable storage system"
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
    "q": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
    "opts": [
      "Amazon Route 53",
      "Virtual Private Gateway",
      "Classic Load Balancer",
      "Auto Scaling",
      "Amazon CloudWatch default metrics"
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
    "q": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes.   Which service should the company use?",
    "opts": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
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
    "q": "Which AWS tools assist with estimating costs? (Select three.)",
    "opts": [
      "Detailed billing report",
      "Cost allocation tags",
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
    "q": "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
    "opts": [
      "The ability to receive one bill for multiple accounts",
      "Service limits increasing by default in all accounts",
      "A fixed discount on the monthly bill",
      "Potential volume discounts, as usage in all accounts is combined",
      "The automatic extension of the master account's AWS support plan to all accounts"
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
    "q": "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups"
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
    "q": "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    "opts": [
      "Shared responsibility security model",
      "Single tenancy",
      "Elastic computing",
      "Encryption"
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
    "q": "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO.)",
    "opts": [
      "Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
      "Encrypting data on the client-side",
      "Training the data center staff",
      "Configuring Network Access Control Lists (ACL)",
      "Maintaining environmental controls within a data center"
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
    "q": "Which is a recommended pattern for designing a highly available architecture on AWS?",
    "opts": [
      "Ensure that components have low-latency network connectivity.",
      "Run enough Amazon EC2 instances to operate at peak load.",
      "Ensure that the application is designed to accommodate failure of any single component.",
      "Use a monolithic application that handles all operations."
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
    "q": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
    "opts": [
      "Implementing Amazon Rekognition",
      "Using AWS Shield-protected resources",
      "Blocking access with Security Groups",
      "Using Multi-Factor Authentication (MFA)",
      "Enforcing password strength and expiration"
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
    "q": "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
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
    "q": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enabled users to dynamically adjust CPU and RAM resources."
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
    "q": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
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
    "q": "Which of the following is a shared control between the customer and AWS?",
    "opts": [
      "Providing a key for Amazon S3 client-side encryption",
      "Configuration of an Amazon EC2 instance",
      "Environmental controls of physical AWS data centers",
      "Awareness and training"
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
    "q": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    "opts": [
      "A minimum of one",
      "A minimum of two",
      "A minimum of three",
      "A minimum of four or more"
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
    "q": "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
    "opts": [
      "Fault tolerance",
      "Global reach",
      "Pay-as-you-go pricing",
      "High availability"
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
    "q": "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
    "opts": [
      "Patching underlying infrastructure",
      "Physical security",
      "Patching Amazon EC2 instances",
      "Patching network infrastructure"
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
    "q": "A customer is using multiple AWS accounts with separate billing.  How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    "opts": [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts."
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
    "q": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
    "opts": [
      "Summaries by Amazon Simple Notification Service (Amazon SNS)",
      "Free Amazon Elasticsearch Service analytics",
      "Provided at no charge",
      "Real-time monitoring",
      "Adjustable retention"
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
    "q": "A customer is deploying a new application and needs to choose an AWS Region.  Which of the following factors could influence the customer's decision? (Select TWO.)",
    "opts": [
      "Reduced latency to users",
      "The application's presentation in the local language",
      "Data sovereignty compliance",
      "Cooling costs in hotter climates",
      "Proximity to the customer's office for on-site visits"
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
    "q": "Which of the following is true regarding the AWS availability zones and edge locations?",
    "opts": [
      "Edge locations are located in separate Availability Zones worldwide to serve global customers.",
      "An availability zone exists within an edge location to distribute content globally with low latency.",
      "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
      "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
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
    "q": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
    "opts": [
      "24x7 access to customer service.",
      "Access to Cloud Support Engineers via email only during business hours.",
      "Access to the Infrastructure Event Management (IEM) feature for additional fee.",
      "24x7 access to the TAM feature.",
      "Partial access to the core Trusted Advisor checks."
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
    "q": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
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
    "q": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
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
    "q": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    "opts": [
      "Eliminates the need to monitor servers and applications.",
      "Manages all the compliance and auditing tasks.",
      "Provides custom hardware to meet any specification.",
      "Eliminates the need to guess on infrastructure capacity needs.",
      "Enables customers to trade their capital expenses for operational expenses."
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
    "q": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
    "opts": [
      "AWS Fargate.",
      "Amazon Elastic Compute Cloud.",
      "Amazon RDS.",
      "AWS Database Migration service (DMS).",
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
    "q": "Which AWS Service can perform health checks on Amazon EC2 instances?",
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
    "q": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
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
    "q": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
    "opts": [
      "Amazon Neptune.",
      "Amazon CloudSearch.",
      "Microsoft SQL Server on Amazon EC2.",
      "MySQL on Amazon EC2.",
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
    "q": "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    "opts": [
      "EC2 On-Demand Instances.",
      "EC2 Reserved Instances     - No Upfront.",
      "EC2 Spot Instances.",
      "EC2 Reserved Instances     - All Upfront."
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
    "q": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
    "opts": [
      "AWS account owner.",
      "AWS technical account manager.",
      "AWS security team.",
      "AWS cloud support engineers."
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
    "q": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
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
    "q": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
    "opts": [
      "It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
      "It applies advanced IAM security features automatically.",
      "It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
      "It allows you to model your entire infrastructure in just a text file.",
      "It compiles and builds application code in a timely manner."
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
    "q": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
    "opts": [
      "On-premises.",
      "Mixed.",
      "Hybrid.",
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
    "q": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
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
    "q": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
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
    "q": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
    "opts": [
      "In another Edge location.",
      "In another Region.",
      "In another VPC.",
      "In another Availability Zone."
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
    "q": "Which statement is true in relation to the security of Amazon EC2?",
    "opts": [
      "You should use instance store volumes to store login data.",
      "You should regularly patch the operating system and applications on your EC2 instances.",
      "You should deploy critical components of your application in the Availability Zone that you trust.",
      "You can track all API calls using Amazon Athena."
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
    "q": "What does AWS Cost Explorer provide to help manage your AWS spend?",
    "opts": [
      "Cost comparisons between AWS Cloud environments and on-premises environments.",
      "Accurate estimates of AWS service costs based on your expected usage.",
      "Consolidated billing.",
      "Highly accurate cost forecasts for up to 12 months ahead."
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
    "q": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
    "opts": [
      "RDS Single-AZ.",
      "RDS Write Replica.",
      "RDS Snapshots.",
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
    "q": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
    "opts": [
      "Deleting all EBS volumes attached to the instances.",
      "You cannot minimize charges for on-demand instances.",
      "Terminating the instances.",
      "Stopping the instances."
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
    "q": "Which of the following strategies helps protect your AWS root account?",
    "opts": [
      "Delete root user access keys if you do not need them.",
      "Apply MFA for the root account and use it for all of your work.",
      "Access the root account only from your personal Mobile Phone.",
      "Only share your AWS account password or access keys with trusted persons."
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
    "q": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
    "opts": [
      "The size of volumes provisioned per month.",
      "The compute capacity you consume.",
      "The amount of data you have stored in snapshots.",
      "The compute time you consume.",
      "The number of Snowball storage devices you request."
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
    "q": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
    "opts": [
      "Attach a separate IAM policy for each individual account.",
      "Apply the Principle of Least Privilege.",
      "For security purposes, you should not grant any permission to the DevOps team.",
      "Create six different IAM passwords."
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
    "q": "Which of the following has the greatest impact on cost? (Choose TWO)",
    "opts": [
      "Compute charges.",
      "The number of services used.",
      "Data Transfer In charges.",
      "Data Transfer Out charges.",
      "The number of IAM roles provisioned."
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
    "q": "Who from the following will get the largest discount?",
    "opts": [
      "A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
      "A user who chooses to buy Reserved, Convertible, All upfront instances.",
      "A user who chooses to buy Reserved, Standard, No upfront instances.",
      "A user who chooses to buy Reserved, Standard, All upfront instances."
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
    "q": "Which of the following is an available option when purchasing Amazon EC2 instances?",
    "opts": [
      "The ability to bid to get the lowest possible prices.",
      "The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
      "The ability to buy Dedicated Instances for up to 90% discount.",
      "The ability to pay upfront to get lower hourly costs."
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
    "q": "What does the term “Economies of scale” mean?",
    "opts": [
      "It means that you save more when you consume more.",
      "It means as more time passes using AWS, you pay more for its services.",
      "It means that AWS will continuously lower costs as it grows.",
      "It means that you have the ability to pay as you go."
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
    "q": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
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
    "q": "Which of the below options is true of Amazon VPC?",
    "opts": [
      "Amazon VPC allows customers to control user interactions with all other AWS resources.",
      "AWS Customers have complete control over their Amazon VPC virtual networking environment.",
      "AWS is responsible for all the management and configuration details of Amazon VPC.",
      "Amazon VPC helps customers to review their AWS architecture and adopt best practices."
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
    "q": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
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
    "q": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
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
    "q": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
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
    "q": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
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
    "q": "Select the services that are server-based: (Choose TWO)",
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
    "q": "What best describes penetration testing?",
    "opts": [
      "Testing your application’s response time from different locations.",
      "Testing your network to find security vulnerabilities that an attacker could exploit.",
      "Testing your instances to check for the unhealthy ones.",
      "Testing your software for bugs and errors."
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
    "q": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
    "opts": [
      "Enables you to backup extremely large amounts of data at very low costs.",
      "Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
      "Enables you to analyze and process extremely large amounts of data in a timely manner.",
      "Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
      "Enables you to easily run and manage Docker containers."
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
    "q": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
    "opts": [
      "There is no chat feature in AWS support.",
      "The chat feature is available for all plans for an additional fee, but you have to request it first.",
      "At a minimum, upgrade to Business support plan.",
      "Upgrade from the Basic Support plan to Developer Support."
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
    "q": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
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
    "q": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
    "opts": [
      "With AWS, you replace low upfront expenses with large variable payments.",
      "With AWS, you replace low upfront expenses with large fixed payments.",
      "With AWS, you replace large upfront expenses with low fixed payments.",
      "With AWS, you replace large capital expenses with low variable payments."
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
    "q": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
    "opts": [
      "Database setup.",
      "Network traffic protection.",
      "Management of the operating system.",
      "Access management.",
      "Management of firewall rules."
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
    "q": "Which of the following strategies help analyze costs in AWS?",
    "opts": [
      "Using tags to group resources.",
      "Using AWS CloudFormation to automate the deployment of resources.",
      "Deploying resources of the same type in different regions.",
      "Configuring Amazon Inspector to automatically analyze costs and email reports."
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
    "q": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
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
    "q": "What is the main benefit of the AWS Storage Gateway service?",
    "opts": [
      "It automates the process of building, maintaining, and running ETL jobs.",
      "It provides physical devices to migrate data from on premises to AWS.",
      "It allows integration of on-premises IT environments with Cloud Storage.",
      "It provides hardware-based key storage for regulatory compliance."
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
    "q": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
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
    "q": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
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
    "q": "Why are Serverless Architectures more economical than Server-based Architectures?",
    "opts": [
      "Serverless Architectures use new powerful computing devices.",
      "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
      "When you reserve serverless capacity, you will get large discounts compared to server reservation.",
      "With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
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
    "q": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
    "opts": [
      "Point-to-point connectivity between an on-premises data center and AWS.",
      "Detects configuration changes in the AWS environment.",
      "DNS configuration and management.",
      "Manages global application traffic through a variety of routing types.",
      "Provides infrastructure security optimization recommendations."
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
    "q": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
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
    "q": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
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
    "q": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    "opts": [
      "Least Privilege.",
      "Pilot Light.",
      "Fault Tolerance.",
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
    "q": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    "opts": [
      "All up-front reservation.",
      "All reserved instance payment options provide the same discount level.",
      "Partial up-front reservation.",
      "No up-front reservation."
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
    "q": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    "opts": [
      "Access control.",
      "Physical MFA devices.",
      "Data encryption.",
      "Unlimited storage.",
      "Load balancing."
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
    "q": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    "opts": [
      "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
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
    "q": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
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
    "q": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    "opts": [
      "AWS CLI.",
      "AWS Security Groups.",
      "AWS SDKs.",
      "AWS Network Access Control Lists.",
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
    "q": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    "opts": [
      "AWS Resource Groups.",
      "IAM Policies.",
      "IAM Roles.",
      "IAM Users.",
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
    "q": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    "opts": [
      "Database Snapshots.",
      "Multi-AZ Deployments.",
      "Automated Backups.",
      "Read Replicas."
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
    "q": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    "opts": [
      "Using the AWS ACM service.",
      "Using Security Bulletins.",
      "Using the AWS Management Console.",
      "Using Compliance Resources."
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
    "q": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    "opts": [
      "IAM Users.",
      "Key Pair.",
      "IAM Roles.",
      "IAM Groups."
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
    "q": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
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
    "q": "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    "opts": [
      "Use Software test automation tools.",
      "Use AWS CodeDeploy to build and automate your AWS environment.",
      "Use code to provision and operate your AWS infrastructure.",
      "Migrate all of your applications to a dedicated host."
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
    "q": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    "opts": [
      "Restrict any API call made through SDKs or CLI.",
      "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      "Require Multi-Factor Authentication (MFA) for all IAM User access.",
      "Set up two login passwords."
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
    "q": "Which AWS Service offers volume discounts based on usage?",
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
    "q": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    "opts": [
      "The AWS Region’s security level.",
      "Data sovereignty.",
      "Cost.",
      "The planned number of VPCs.",
      "Geographic proximity to the company's location."
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
    "q": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
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
    "q": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    "opts": [
      "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
      "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
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
    "q": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    "opts": [
      "AWS helps customers invest more in capital expenditures.",
      "AWS automates all infrastructure operations, so customers save more on human resources costs.",
      "AWS continues to lower the cost of cloud computing for its customers.",
      "AWS secures AWS resources at no additional charge."
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
    "q": "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
    "opts": [
      "Building a schema for an application.",
      "Replacing physical hardware.",
      "Creating a new hypervisor.",
      "Patch management of the underlying infrastructure.",
      "File system encryption."
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
    "q": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    "opts": [
      "AWS CloudHSM.",
      "U2F Security Key.",
      "AWS Access Keys.",
      "AWS Key Pair."
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
    "q": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
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
    "q": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    "opts": [
      "The amount of time the instances will be running.",
      "Number of security groups.",
      "Allocated Elastic IP Addresses.",
      "Number of Hosted Zones.",
      "Number of instances."
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
    "q": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
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
    "q": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
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
    "q": "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    "opts": [
      "EBS and S3 are accessible only to the root account owner.",
      "The systems administrator must contact AWS Support first to activate his new IAM account.",
      "There is not enough space in S3 to store the snapshots.",
      "There is a non-explicit deny to all new users."
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
    "q": "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
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
    "q": "Which of the below options is true of Amazon Cloud Directory?",
    "opts": [
      "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
      "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      "Amazon Cloud Directory allows for registration and management of domain names."
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
    "q": "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    "opts": [
      "12 hours.",
      "15 minutes.",
      "24 hours.",
      "One hour."
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
    "q": "Which of the below options is a best practice for making your application on AWS highly available?",
    "opts": [
      "Deploy the application to at least two Availability Zones.",
      "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      "Deploy the application code on at least two servers in the same Availability Zone.",
      "Rewrite the application code to handle all incoming requests."
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
    "q": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    "opts": [
      "Labor and IT costs.",
      "Cooling and power consumption.",
      "Amazon EBS computing power.",
      "Software architecture.",
      "Software compatibility."
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
    "q": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
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
    "q": "Which of the following AWS offerings are serverless services? (Choose TWO)",
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
    "q": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
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
    "q": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
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
    "q": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
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
    "q": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
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
    "q": "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    "opts": [
      "On-demand Instances.",
      "Dedicated Hosts.",
      "Spot Instances.",
      "Reserved Instances."
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
    "q": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    "opts": [
      "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM role and attach a policy with Administrator access permissions.",
      "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM user and attach a policy with Administrator access permissions."
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
    "q": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    "opts": [
      "Generate new IAM access keys every time you delegate permissions.",
      "Store the required AWS credentials directly within the application code.",
      "Use temporary security credentials (IAM roles) instead of long-term access keys.",
      "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
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
    "q": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    "opts": [
      "Use servers instead of managed services.",
      "Use existing third-party software licenses on AWS.",
      "Migrate production workloads to AWS edge locations instead of AWS Regions.",
      "Use AWS Outposts to run all workloads in a cost-optimized environment."
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
    "q": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
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
    "q": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
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
    "q": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    "opts": [
      "Vertically scaling EC2 instances.",
      "Running RDS instances in parallel.",
      "Vertically scaling RDS instances.",
      "Running EC2 instances in parallel."
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
    "q": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
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
    "q": "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
    "opts": [
      "Stop all running services and open an investigation.",
      "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
      "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
      "Open an investigation and delete any potentially compromised IAM users.",
      "Change your AWS root account password and the passwords of any IAM users."
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
    "q": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    "opts": [
      "Elastic coupling.",
      "Loosely coupling.",
      "Scalable coupling.",
      "Tightly coupling."
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
    "q": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
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
    "q": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    "opts": [
      "Create private connection to your data center.",
      "Achieve global high availability.",
      "Automate the process of provisioning new compute resources.",
      "Make synchronous replication of your data possible."
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
    "q": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    "opts": [
      "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
      "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
      "Lambda is AWS’ proprietary programming language for microservices.",
      "Lambda doesn’t support programming languages; it is a serverless compute service.",
      "Lambda can support any programming language using an API."
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
    "q": "What are the capabilities of AWS X-Ray? (Choose TWO)",
    "opts": [
      "Automatically decouples application components.",
      "Facilitates tracking of user requests to identify application issues.",
      "Helps improve application performance.",
      "Deploys applications to Amazon EC2 instances.",
      "Deploys applications to on-premises servers."
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
    "q": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    "opts": [
      "AWS Organizations.",
      "AWS Trusted Advisor.",
      "IAM User Groups.",
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
    "q": "Which service provides object-level storage in AWS?",
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
    "q": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
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
    "q": "Which S3 storage class is best for data with unpredictable access patterns?",
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
    "q": "What is the AWS database service that allows you to upload data structured in key-value format?",
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
    "q": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    "opts": [
      "You have to pay a start-up fee when launching a new instance for the first time.",
      "The on-demand instances follow the AWS pay-as-you-go pricing model.",
      "With on-demand instances, no longer-term commitments or upfront payments are needed.",
      "When using on-demand Linux instances, you are charged per second based on an hourly rate."
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
    "q": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
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
    "q": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    "opts": [
      "Encrypted keys.",
      "Email verification.",
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
    "q": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
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
    "q": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
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
    "q": "Which of the below is a best-practice when designing solutions on AWS?",
    "opts": [
      "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "Use AWS reservations to reduce costs when testing your production environment.",
      "Automate wherever possible to make architectural (© ) experimentation easier.",
      "Provision a large compute capacity to handle any spikes in load"
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
    "q": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    "opts": [
      "Penetration testing is not allowed in AWS.",
      "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "The AWS customers are only allowed to perform penetration testing on services managed by AWS."
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
    "q": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
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
    "q": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    "opts": [
      "Multi-factor authentication.",
      "Availability Zones.",
      "Elastic Load Balancing.",
      "Penetration testing.",
      "Vertical Scaling."
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
    "q": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
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
    "q": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    "opts": [
      "Managing environmental events of AWS data centers.",
      "Protecting the confidentiality of data in transit in Amazon S3.",
      "Controlling physical access to AWS Regions.",
      "Ensuring that the underlying EC2 host is configured properly.",
      "Patching applications installed on Amazon EC2."
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
    "q": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
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
    "q": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    "opts": [
      "Instance Password.",
      "Key pairs.",
      "Access Keys.",
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
    "q": "What does Amazon ElastiCache provide?",
    "opts": [
      "In-memory caching for read-heavy applications.",
      "An Ehcache compatible in-memory data store.",
      "An online software store that allows Customers to launch pre-configured software with just few clicks.",
      "A domain name system in the cloud."
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
    "q": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
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
    "q": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    "opts": [
      "Dedicated Instances.",
      "Dedicated Hosts.",
      "On-demand Instances.",
      "Reserved Instances."
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
    "q": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    "opts": [
      "Free support for all enterprise customers.",
      "Automatic data protection.",
      "Reduced Capital Expenditure (CapEx).",
      "AWS holds responsibility for managing customer applications."
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
    "q": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    "opts": [
      "Always use Global Services in your architecture rather than Regional Services.",
      "Always choose to pay as you go.",
      "Treat servers as fixed resources.",
      "Automate wherever possible.",
      "Remove single points of failure."
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
    "q": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
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
    "q": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    "opts": [
      "Internet gateways.",
      "Virtual Private Cloud.",
      "Security Groups.",
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
    "q": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
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
    "q": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
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
    "q": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    "opts": [
      "Monitoring network performance.",
      "Installing software on EC2 instances.",
      "Creating hypervisors.",
      "Configuring Access Control Lists (ACLs).",
      "Hardware maintenance."
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
    "q": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
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
    "q": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    "opts": [
      "MFA.",
      "Security tokens.",
      "A user name and password.",
      "Access keys."
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
    "q": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    "opts": [
      "IAM.",
      "An internet gateway.",
      "EBS Snapshot.",
      "AMI."
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
    "q": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    "opts": [
      "Reserved Compute capacity.",
      "Eliminating Single Points of Failure (SPOFs).",
      "Distributed infrastructure.",
      "Virtualized compute resources.",
      "Dedicated hosting."
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
    "q": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    "opts": [
      "Encryption of EBS volumes.",
      "VPC security.",
      "Access permissions.",
      "Hardware patching.",
      "Securing global physical infrastructure."
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
    "q": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    "opts": [
      "The ability of a system to recover gracefully from failure.",
      "The efficient use of computing resources to meet requirements.",
      "The ability to monitor systems and improve supporting processes and procedures.",
      "The ability to manage datacenter operations more efficiently."
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
    "q": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    "opts": [
      "Edge locations are used by CloudFront to cache the most recent responses.",
      "Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
      "Edge locations are used by CloudFront to distribute content to global users with low latency."
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
    "q": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
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
    "q": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
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
    "q": "Which of the following services will help businesses ensure compliance in AWS?",
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
    "q": "Which of the following procedures will help reduce your Amazon S3 costs?",
    "opts": [
      "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      "Use the right combination of storage classes based on different use cases.",
      "Pick the right Availability Zone for your S3 bucket.",
      "Move all the data stored in S3 standard to EBS."
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
    "q": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    "opts": [
      "AWS Direct Connect.",
      "Amazon EC2 Auto Scaling.",
      "Elastic Load Balancer.",
      "CloudFormation.",
      "Network ACLs."
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
    "q": "Which of the following activities may help reduce your AWS monthly costs?",
    "opts": [
      "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
      "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      "Removing all of your Cost Allocation Tags.",
      "Deploying your AWS resources across multiple Availability Zones."
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
    "q": "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
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
    "q": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    "opts": [
      "AWS X-Ray.",
      "Network ACL.",
      "Security Groups.",
      "VPC Flow logs."
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
    "q": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    "opts": [
      "AWS KMS.",
      "AWS Global accelerator.",
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
    "q": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    "opts": [
      "Building the relational database schema.",
      "Performing backups.",
      "Managing the database settings.",
      "Patching the database software.",
      "Installing the database software."
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
    "q": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
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
    "q": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    "opts": [
      "APN Consulting Partners.",
      "AWS TAM.",
      "APN Technology Partners.",
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
    "q": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    "opts": [
      "Amazon LightSail.",
      "AWS Lambda.",
      "Amazon RDS instances.",
      "Amazon EC2 instances."
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
    "q": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    "opts": [
      "She has properly built an elastic system.",
      "She has properly built a fault tolerant system.",
      "She has properly built an encrypted system.",
      "She has properly built a scalable system."
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
    "q": "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    "opts": [
      "Manages user access and encryption keys.",
      "Controls what IP address ranges can connect to your database instance.",
      "Deploys SSL/TLS certificates for use with your database instance.",
      "Distributes incoming traffic across multiple targets."
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
    "q": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    "opts": [
      "EC2 launch type.",
      "Fargate launch type.",
      "Lightsail launch type.",
      "Lambda launch type."
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
    "q": "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    "opts": [
      "Try to remove unnecessary AWS accounts.",
      "Add the accounts to an AWS Organization and use Consolidated Billing.",
      "Track the AWS charges that are incurred by the member accounts.",
      "Enable AWS tiered-pricing before provisioning resources."
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
    "q": "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    "opts": [
      "Network ACLs and Traffic Manager.",
      "Network ACLs and Subnets.",
      "Security Groups and Internet Gateways.",
      "Security Groups and Network ACLs."
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
    "q": "What does the AWS \"Business\" support plan provide? (Choose TWO)",
    "opts": [
      "Access to the full set of Trusted Advisor checks.",
      "Support Concierge Service.",
      "Less than 15 minutes response-time support if your business critical system goes down.",
      "AWS Support API.",
      "Proactive Technical Account Management."
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
    "q": "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
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
    "q": "Which statement is true in relation to security in AWS?",
    "opts": [
      "AWS manages everything related to EC2 operating systems.",
      "AWS customers are responsible for patching any database software running on Amazon EC2.",
      "Server side encryption is the responsibility of AWS.",
      "AWS is responsible for the security of your application."
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
    "q": "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
    "opts": [
      "Improves Fault-Tolerance.",
      "Provides your business with a seamless remote accessibility.",
      "Prevents unauthorized users from getting into your network.",
      "Provides automatic data backups.",
      "Can be scaled manually in a shorter period of time."
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
    "q": "Which statement is true regarding AWS pricing? (Choose TWO)",
    "opts": [
      "With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.",
      "You have no responsibility for third-party software license costs.",
      "You only pay for the individual services that you need with no long-term contracts.",
      "For some services, you have to pay a startup fee in order to get the service running.",
      "There are no reservations on AWS, you only pay for what you use."
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
    "q": "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
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
    "q": "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    "opts": [
      "Use CloudFront to monitor the CPU usage.",
      "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
      "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
      "Use SNS to monitor the utilization of the server."
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
    "q": "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    "opts": [
      "Amazon EBS.",
      "Amazon RDS.",
      "You can't run a database inside an Amazon EC2 instance.",
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
    "q": "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
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
    "q": "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
    "opts": [
      "Storage consumed.",
      "Number of requests to your functions.",
      "Number of volumes.",
      "Placement groups.",
      "Compute time consumed."
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
    "q": "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
    "opts": [
      "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
      "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
      "IAM users are more cost effective than IAM roles.",
      "A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
      "An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it."
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
    "q": "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
    "opts": [
      "Deleting unused buckets.",
      "Using reservations.",
      "Deleting unnecessary snapshots.",
      "Changing the type of the volume.",
      "Distributing requests to multiple volumes."
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
    "q": "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    "opts": [
      "Notifies AWS customers about abuse events once they are reported.",
      "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
      "Helps AWS customers identify the root cause of potential security issues.",
      "Checks security groups for rules that allow unrestricted access to AWS. resources."
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
    "q": "Which database service should you use if your application and data schema require \"joins\" or complex transactions?",
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
    "q": "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    "opts": [
      "Amazon CloudWatch.",
      "AWS Service Catalog.",
      "AWS Directory Service.",
      "AWS Tagging."
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
    "q": "What should you consider when storing data in Amazon Glacier?",
    "opts": [
      "Amazon Glacier only accepts data in a compressed format.",
      "Glacier can only be used to store frequently accessed data and data archives.",
      "Amazon Glacier does not provide immediate retrieval of data.",
      "Attach Glacier to an EC2 Instance to be able to store data."
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
    "q": "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
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
    "q": "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
    "opts": [
      "Deploy your application across multiple EC2 instances.",
      "Deploy your application across multiple Availability Zones.",
      "Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
      "Deploy the underlying application resources across multiple subnets."
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
    "q": "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
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
    "q": "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
    "opts": [
      "IAM group.",
      "IAM user.",
      "IAM role.",
      "AWS account root user.",
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
    "q": "Which of the following is a benefit of the \"Loose Coupling\" architecture principle?",
    "opts": [
      "It eliminates the need for change management.",
      "It allows for Cross-Region Replication.",
      "It helps AWS customers reduce Privileged Access to AWS resources.",
      "It allows individual application components or services to be modified without affecting other components."
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
    "q": "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
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
    "q": "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
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
    "q": "What are the benefits of the AWS Marketplace service? (Choose TWO)",
    "opts": [
      "Protects customers by performing periodic security checks on listed products.",
      "Per-second billing.",
      "Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
      "Provides flexible pricing options that suit most customer needs.",
      "Provides software solutions that run on AWS or any other Cloud vendor."
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
    "q": "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    "opts": [
      "Elasticity.",
      "Durability.",
      "Traceability.",
      "Accessibility."
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
    "q": "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    "opts": [
      "Savings Plans.",
      "Spot Instances.",
      "Reserved Instances.",
      "On-Demand Instances."
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
    "q": "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
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
    "q": "Which of the following services is used when encrypting EBS volumes?",
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
    "q": "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
    "opts": [
      "Download all the attached policies in a safe place.",
      "Delete all IAM accounts and recreate them.",
      "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
      "Rotate all access keys.",
      "Change the email address and password of the root user account and enable MFA."
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
    "q": "What is the Amazon ElastiCache service used for? (Choose TWO)",
    "opts": [
      "Provide an in-memory data storage service.",
      "Reduce delivery costs using Edge Locations.",
      "Improve web application performance.",
      "Provide a Chef-compatible cache to speed up application response.",
      "Distribute requests to multiple instances."
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
    "q": "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
    "opts": [
      "Deploy your resources across multiple Availability Zones.",
      "Use Amazon EC2 Auto Scaling.",
      "Deploy your resources in another region.",
      "Use Elastic Load Balancing.",
      "Use Serverless Computing whenever possible."
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
    "q": "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
    "opts": [
      "They provide free capacity when testing your new applications.",
      "They are cheaper than all other EC2 options.",
      "They remove the need to buy “safety net” capacity to handle periodic traffic spikes.",
      "They only require 1-2 days for setup and configuration.",
      "You can increase or decrease your compute capacity depending on the demands of your application."
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
    "q": "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    "opts": [
      "It is a data center designed to be completely isolated from other data centers in the same region.",
      "It is a collection of data centers distributed in multiple countries.",
      "It is a logically isolated network of the AWS Cloud.",
      "It is a distinct location within a region that is insulated from « failures in other Availability Zones."
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
    "q": "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    "opts": [
      "Regions.",
      "Transportation devices.",
      "Support plans.",
      "Edge locations."
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
    "q": "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
    "opts": [
      "Start the migration process immediately as all AWS services are PCI compliant.",
      "Ensure that AWS services are configured properly to meet all PCI DSS standards.",
      "Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
      "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
      "Ensure that all PCI DSS physical security requirements are met."
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
    "q": "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    "opts": [
      "100 PetaBytes.",
      "Virtually unlimited storage.",
      "5TeraBytes.",
      "10 Exabytes."
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
    "q": "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    "opts": [
      "Operational Excellence.",
      "Security.",
      "Performance Efficiency.",
      "Reliability."
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
    "q": "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
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
    "q": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    "opts": [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customer’s internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing."
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
    "q": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    "opts": [
      "AWS Cost Explorer.",
      "AWS Budgets.",
      "AWS Cost and Usage report.",
      "AWS Billing dashboard."
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
    "q": "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    "opts": [
      "AWS Regions.",
      "Availability Zones.",
      "Edge locations.",
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
    "q": "The AWS Cloud’s multiple Regions are an example of:",
    "opts": [
      "Agility.",
      "Global infrastructure.",
      "Elasticity.",
      "Pay-as-you-go pricing."
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
    "q": "Which AWS service can be used to manually launch instances based on resource requirements?",
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
    "q": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
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
    "q": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
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
    "q": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    "opts": [
      "Application management.",
      "Capacity management.",
      "Access control.",
      "Operating system maintenance.",
      "Data management."
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
    "q": "How do ELBs improve the reliability of your application?",
    "opts": [
      "By distributing traffic across multiple S3 buckets.",
      "By replicating data to multiple availability zones.",
      "By creating database Read Replicas.",
      "By ensuring that only healthy targets receive traffic."
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
    "q": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    "opts": [
      "On-demand instances.",
      "Spot instances.",
      "Dedicated instances.",
      "Reserved instances."
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
    "q": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
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
    "q": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
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
    "q": "Which AWS Service is used to manage user permissions?",
    "opts": [
      "Security Groups.",
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
    "q": "Which support plan includes AWS Support Concierge Service?",
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
    "q": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
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
    "q": "What are the benefits of using an AWS-managed service? (Choose TWO)",
    "opts": [
      "Provides complete control over the virtual infrastructure.",
      "Allows customers to deliver new solutions faster.",
      "Lowers operational complexity.",
      "Eliminates the need to encrypt data.",
      "Allows developers to control all patching related activities."
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
    "q": "Which of the following are use cases for Amazon S3? (Choose TWO)",
    "opts": [
      "Hosting static websites.",
      "Hosting websites that require sustained high CPU utilization.",
      "Cost-effective database and log storage.",
      "A media store for the CloudFront service.",
      "Processing data streams at any scale."
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
    "q": "What is the AWS’ recommendation regarding access keys?",
    "opts": [
      "Delete all access keys and use passwords instead.",
      "Only share them with trusted people.",
      "Rotate them regularly.",
      "Save them within your application code."
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
    "q": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    "opts": [
      "Key Pair.",
      "Access Keys.",
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
    "q": "What is the benefit of using an API to access AWS Services?",
    "opts": [
      "It improves the performance of AWS resources.",
      "It reduces the time needed to provision AWS resources.",
      "It reduces the number of developers necessary.",
      "It allows for programmatic management of AWS resources."
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
    "q": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
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
    "q": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    "opts": [
      "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
      "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
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
    "q": "What is the AWS service that provides five times the performance of a standard MySQL database?",
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
    "q": "What does AWS Service Catalog provide?",
    "opts": [
      "It enables customers to quickly find descriptions and use cases for AWS services.",
      "It enables customers to explore the different catalogs of AWS services.",
      "It simplifies organizing and governing commonly deployed IT services.",
      "It allows developers to deploy infrastructure on AWS using familiar programming languages."
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
    "q": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    "opts": [
      "Protecting credentials.",
      "Logging access activity.",
      "Patching the database software.",
      "Operating system maintenance.",
      "Creating access policies."
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
    "q": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
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
    "q": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
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
    "q": "Which statement best describes the concept of an AWS region?",
    "opts": [
      "An AWS Region is a geographical location with a collection of Edge locations.",
      "An AWS Region is a virtual network dedicated only to a single AWS customer.",
      "An AWS Region is a geographical location with a collection of Availability Zones.",
      "An AWS Region represents the country where the AWS infrastructure exist."
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
    "q": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    "opts": [
      "SNS logs.",
      "SQS logs.",
      "CloudWatch Logs.",
      "CloudTrail logs."
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
    "q": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    "opts": [
      "Availability Zones.",
      "Data sovereignty.",
      "The number of reads and writes per second.",
      "The nature of the queries.",
      "Software bugs."
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
    "q": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    "opts": [
      "Quickly identify resources that belong to a specific project.",
      "Quickly identify software solutions on AWS.",
      "Track API calls in your AWS account.",
      "Quickly identify deleted resources and their metadata.",
      "Track AWS spending across multiple resources."
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
    "q": "What are AWS shared controls?",
    "opts": [
      "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      "Controls that a customer inherits from AWS.",
      "Controls that apply to both the infrastructure layer and customer layers.",
      "Controls that the customer and AWS collaborate together upon to secure the infrastructure."
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
    "q": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    "opts": [
      "Build multi-region architectures to better serve global customers.",
      "Apply security at all layers.",
      "Implement strong Identity and Access controls.",
      "Use serverless architectures.",
      "Enable audit logging."
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
    "q": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    "opts": [
      "Protecting sensitive data.",
      "Patching of the underlying infrastructure.",
      "Setup and operation of managed databases.",
      "Maintaining consistent hardware components.",
      "Installing and configuring third-party software."
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
    "q": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    "opts": [
      "Free commercial software licenses.",
      "Free technical support.",
      "Elastic resources.",
      "On-site visits for auditing.",
      "Cost Savings."
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
    "q": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
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
    "q": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    "opts": [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing."
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
    "q": "What is the AWS Compute service that executes code only when triggered by events?",
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
    "q": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
    "opts": [
      "Amazon EBS Snapshots.",
      "Amazon VPC.",
      "AWS Managed Servers.",
      "Amazon EC2 Instances."
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
    "q": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
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
    "q": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
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
    "q": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    "opts": [
      "Using AWS Trusted Advisor to find underutilized resources.",
      "Using AWS CloudTrail to record user activities.",
      "Using AWS CloudFormation to manage infrastructure as code.",
      "Deploying an application in multiple Availability Zones."
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
    "q": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    "opts": [
      "AWS allows them to pay later when their business succeed.",
      "AWS can build complete data centers faster than any other Cloud provider.",
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "AWS removes the need to invest in operational expenditure.",
      "Using AWS allows companies to replace large capital expenditure with low variable costs."
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
    "q": "What are the benefits of using DynamoDB? (Choose TWO)",
    "opts": [
      "Automatically scales to meet required throughput capacity.",
      "Provides resizable instances to match the current demand.",
      "Supports both relational and non-relational data models.",
      "Offers extremely low (single-digit millisecond) latency.",
      "Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
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
    "q": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    "opts": [
      "Versioning.",
      "Deduplication.",
      "Permissions.",
      "Decryption.",
      "Conversion."
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
    "q": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    "opts": [
      "AWS Partners.",
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
    "q": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    "opts": [
      "Deleting unused EBS volumes after terminating an EC2instance.",
      "Deleting unused AutoScaling launch configuration.",
      "Deleting unused Elastic Load Balancers.",
      "Releasing unused Elastic IPs after terminating an EC2instance."
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
    "q": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
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
    "q": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    "opts": [
      "Running penetration tests.",
      "Reserving capacity.",
      "Data center operations.",
      "Auditing and regulatory compliance.",
      "Infrastructure security."
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
    "q": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
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
    "q": "Which of the following allows you to create new RDS instances? (Choose TWO)",
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
    "q": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    "opts": [
      "Low monthly instance maintenance costs.",
      "Low-cost instance tagging.",
      "Per-second instance billing.",
      "Low instance start-up fees."
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
    "q": "Which AWS Group assists customers in achieving their desired business outcomes?",
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
    "q": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    "opts": [
      "AWS KMS.",
      "AWS Service Control Policies (SCPs).",
      "Multi-Factor Authentication (MFA).",
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
    "q": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
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
    "q": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
    "opts": [
      "Delete the encryption keys once your data is encrypted.",
      "With AWS you do not need to worry about encryption.",
      "Enable S3 Encryption.",
      "Encrypt the data prior to uploading it.",
      "Delete all IAM users that have access to S3."
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
    "q": "Which AWS service helps developers compile and test their code?",
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
    "q": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
    "opts": [
      "Using default encryption for any number of S3 buckets.",
      "The number of EBS volumes attached to your instances.",
      "The storage class used for the objects stored.",
      "Creating and deleting S3 buckets.",
      "The total size in gigabytes of all objects stored."
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
    "q": "What does the Amazon CloudFront service provide? (Choose TWO)",
    "opts": [
      "Tracks user activity and APl usage.",
      "Increases application availability by caching at the edge.",
      "Enables faster disaster recovery.",
      "Stores archived data at very low costs.",
      "Delivers content to end users with low latency."
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
    "q": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
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
    "q": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    "opts": [
      "Using the AWS Cost & Usage Report.",
      "Using the AWS Total Cost of Ownership (TCO) dashboard.",
      "Using the AWS CloudWatch logs dashboard.",
      "Using the Amazon VPC dashboard."
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
    "q": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
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
    "q": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
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
    "q": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
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
    "q": "Which AWS service collects metrics from running EC2 instances?",
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
    "q": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
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
    "q": "Which of the following compute resources are serverless? (Choose TWO)",
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
    "q": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    "opts": [
      "Use EC2 Dedicated Hosts.",
      "Use EC2 Reserved Instances.",
      "Use EC2 Spot Instances.",
      "Use EC2 On-demand Instances."
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
    "q": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    "opts": [
      "Tagging Enforcement.",
      "Architecture Optimization.",
      "Budgeting Processes.",
      "Resource Controls."
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
    "q": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
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
    "q": "What can you use to assign permissions directly to an IAM user?",
    "opts": [
      "IAM Identity.",
      "IAM Group.",
      "IAM Role.",
      "IAM Policy."
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
    "q": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    "opts": [
      "AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
      "AWS allows customers to pay upfront to get bigger discounts.",
      "AWS allows customers to launch and terminate EC2 instances based on demand.",
      "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
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
    "q": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
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
    "q": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
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
    "q": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    "opts": [
      "Run WordPress on an Amazon Lightsail instance.",
      "Install WordPress on an Amazon EC2 instance.",
      "Use the Amazon S3 Web hosting feature.",
      "Host the website directly on AWS Cloud Development Kit (AWS CDK)."
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
    "q": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
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
    "q": "Which of the following services allows you to install and run custom relational database software?",
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
    "q": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
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
    "q": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
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
    "q": "What are some key design principles for designing public cloud systems? (Choose TWO)",
    "opts": [
      "Reserved capacity instead of on demand.",
      "Loose coupling over tight coupling.",
      "Servers instead of managed services.",
      "Disposable resources instead of fixed servers.",
      "Multi-AZ deployments instead of multi-region deployments."
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
    "q": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    "opts": [
      "AWS CloudTrail Trails.",
      "IAM Credential Report.",
      "AWS Artifact reports.",
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
    "q": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
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
    "q": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
    "opts": [
      "There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
      "Deploy the application in a single Availability Zone.",
      "Deploy the application in multiple Availability Zones in a single AWS region.",
      "Deploy the application in multiple Availability Zones in multiple AWS regions."
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
    "q": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
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
    "q": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
    "opts": [
      "Number of Requests.",
      "Traffic Distribution.",
      "Number of Volumes.",
      "Instance type.",
      "Storage Class."
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
    "q": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    "opts": [
      "AWS Service Control Policies (SCPs).",
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
    "q": "Which of the following security resources are available to any user for free? (Choose TWO)",
    "opts": [
      "AWS Bulletins.",
      "AWS TAM.",
      "AWS Support APl.",
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
    "q": "How can you protect data stored on Amazon S3 from accidental deletion?",
    "opts": [
      "By enabling S3 Versioning.",
      "By configuring S3 Bucket Policies.",
      "By configuring S3 Lifecycle Policies.",
      "By disabling S3 Cross-Region Replication (CRR)."
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
    "q": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
    "opts": [
      "Securing regions and edge locations.",
      "Performing auditing tasks.",
      "Monitoring AWS resources usage.",
      "Securing access to AWS resources."
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
    "q": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
    "opts": [
      "Business & Enterprise Support.",
      "Basic & Developer Support.",
      "Developer & Enterprise Support.",
      "Developer & Business Support."
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
    "q": "Which of the following is NOT a benefit of using AWS Lambda?",
    "opts": [
      "AWS Lambda runs code without provisioning or managing servers.",
      "AWS Lambda provides resizable compute capacity in the cloud.",
      "There is no charge when your AWS Lambda code is not running.",
      "AWS Lambda can be called directly from any mobile app."
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
    "q": "How does AWS help customers achieve compliance in the cloud?",
    "opts": [
      "It's not possible to meet regulatory compliance requirements in the Cloud.",
      "AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.",
      "AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
      "Many AWS services are assessed regularly to comply with local laws and regulations."
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
    "q": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    "opts": [
      "Your security team.",
      "Your development team.",
      "AWS.",
      "Your internal DevOps team."
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
    "q": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    "opts": [
      "Amazon Elastic Transcoder.",
      "Amazon Pinpoint.",
      "AmazonS3.",
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
    "q": "What are the benefits of the AWS Organizations service? (Choose TWO)",
    "opts": [
      "Control access to AWS services.",
      "Help organizations design and maintain an accelerated path to successful cloud adoption.",
      "Manage your organization’s payment methods.",
      "Help organization achieve their desired business outcomes with AWS.",
      "Consolidate billing across multiple AWS accounts."
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
    "q": "Which AWS service allows you to build a data warehouse in the cloud?",
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
    "q": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
    "opts": [
      "AWS Application Discovery service.",
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
    "q": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
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
    "q": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
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
    "q": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
    "opts": [
      "Federation.",
      "Access keys.",
      "IAM Permissions.",
      "WAF rules."
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
    "q": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
    "opts": [
      "Awareness and Training.",
      "Communications controls.",
      "Data center security controls.",
      "Environmental controls.",
      "Resource Configuration Management."
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
    "q": "What can you access by visiting the URL: <http://status.aws.amazon.com>?",
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
    "q": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
    "opts": [
      "Store media assets in the region closest to your end users.",
      "Store media assets on an additional EBS volume and increase the capacity of your server.",
      "Replicate media assets to at least two availability zones.",
      "Reduce the size of media assets using the Amazon Elastic Transcoder.",
      "Store media assets in S3 and use CloudFront to distribute these assets."
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
    "q": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
    "opts": [
      "Use manual monitoring techniques to protect your AWS resources.",
      "Use IAM roles to grant temporary access instead of long-term credentials.",
      "Scale horizontally to protect from failures.",
      "Enable real-time traceability.",
      "Never store sensitive data in the cloud."
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
    "q": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
    "opts": [
      "Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
      "Use Amazon Aurora to forecast AWS spending based on usage.",
      "Apply cost allocation tags to segment AWS costs by different e projects and departments.",
      "Configure AWS Price List API to receive billing updates for each department automatically."
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
    "q": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software.   Which AWS service can be used to accomplish this?",
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
    "q": "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas.  Which of the following meets these requirements?",
    "opts": [
      "AWS Accounts",
      "AWS Regions",
      "Availability Zones",
      "Edge locations"
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
    "q": "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
    "opts": [
      "Establishing real-time communications between members of an internal team",
      "Facilitating the use of NoSQL databases",
      "Providing automated security checks",
      "Implementing consolidated billing",
      "Enforcing the governance of AWS accounts"
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
    "q": "Which AWS service is used to automate configuration management using Chef and Puppet?",
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
    "q": "Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?",
    "opts": [
      "Detailed billing report",
      "Consolidated billing",
      "AWS Cost and Usage report",
      "Cost allocation report"
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
    "q": "The AWS Total Cost of Ownership (TCO) Calculator is used to:",
    "opts": [
      "receive reports that break down AWS Cloud compute costs by duration, resource, or tags",
      "estimate savings when comparing the AWS Cloud to an on-premises environment",
      "estimate a monthly bill for the AWS Cloud resources that will be used",
      "enable billing alerts to monitor actual AWS costs compared to estimated costs"
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
    "q": "Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)",
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
    "q": "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)",
    "opts": [
      "Setting up server-side encryption on an Amazon S3 bucket",
      "Amazon RDS instance patching",
      "Network and firewall configurations",
      "Physical security of data center facilities",
      "Compute capacity availability"
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
    "q": "What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?",
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
    "q": "A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases.   What is the MOST efficient way to apply the security patches?",
    "opts": [
      "Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.",
      "Enable automatic patching for the instances using the Amazon RDS console.",
      "In AWS Config, configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule."
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
    "q": "A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance.   Based on this situation, the Amazon EC2 instances should be deployed:",
    "opts": [
      "in a single Availability Zone in one AWS Region",
      "with multiple Elastic Network Interfaces belonging to different subnets",
      "across multiple Availability Zones in one AWS Region",
      "across multiple Availability Zones in two AWS Regions"
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
    "q": "A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency.   What should the company do to reduce latency?",
    "opts": [
      "Implement AWS Direct Connect for users in Brazil",
      "Provision resources in the South America (São Paulo) Region in Brazil.",
      "Use AWS Transit Gateway to quickly route users from Brazil to the application",
      "Launch additional Amazon EC2 instances in Sydney to handle the demand"
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
    "q": "An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process.   What is the most appropriate purchasing option?",
    "opts": [
      "Dedicated Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances"
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
    "q": "Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?",
    "opts": [
      "AWS Service Health Dashboard",
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor dashboard",
      "Amazon CloudWatch dashboard"
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
    "q": "Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?",
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
    "q": "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
    "opts": [
      "Access keys",
      "Virtual private gateways",
      "Security groups",
      "Access Control Lists (ACL)"
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
    "q": "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
    "opts": [
      "Use AWS Direct Connect",
      "Use AWS VPN",
      "Use AWS Client VPN",
      "Use an AWS Transit Gateway"
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
    "q": "Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?",
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
    "q": "Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?",
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
    "q": "What is the best resource for a user to find compliance-related information and reports about AWS?",
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
    "q": "Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?",
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
    "q": "What is an Availability Zone in AWS?",
    "opts": [
      "One or more physical data centers",
      "A completely isolated geographic location",
      "One or more edge locations based around the world",
      "A data center location with a single source of power and networking"
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
    "q": "Which AWS services can be used as infrastructure automation tools? (Choose two.)",
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
    "q": "Which AWS service enables users to create copies of resources across AWS Regions?",
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
    "q": "A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail.   Which AWS service will provide this capability?",
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
    "q": "What credential components are required to gain programmatic access to an AWS account? (Choose two.)",
    "opts": [
      "An access key ID",
      "A primary key",
      "A secret access key",
      "A user ID",
      "A secondary key"
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
    "q": "Which of the following are AWS compute services? (Select two.)",
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
    "q": "How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?",
    "opts": [
      "Add department-specific tags to each resource",
      "Create a separate VPC for each department",
      "Create a separate AWS account for each department",
      "Use AWS Organizations"
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
    "q": "What is a benefit of consolidated billing for AWS accounts?",
    "opts": [
      "Access to AWS Personal Health Dashboard",
      "Combined usage volume discounts",
      "Improved account security",
      "Centralized AWS IAM"
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
    "q": "Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?",
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
    "q": "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
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
    "q": "Which tool can be used to monitor AWS service limits?",
    "opts": [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Trusted Advisor",
      "AWS Personal Health Dashboard",
      "AWS Cost and Usage report"
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
    "q": "A company has distributed its workload on both the AWS Cloud and some on-premises servers.   What type of architecture is this?",
    "opts": [
      "Virtual private network",
      "Virtual private cloud",
      "Hybrid cloud",
      "Private cloud"
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
    "q": "Which of the following describes a security best practice that can be implemented using AWS IAM?",
    "opts": [
      "Disable AWS Management Console access for all users",
      "Generate secret keys for every IAM user",
      "Grant permissions to users who are required to perform a given task only",
      "Store AWS credentials within Amazon EC2 instances"
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
    "q": "What can be used to automate and manage secure, well-architected, multi-account AWS environments?",
    "opts": [
      "AWS shared responsibility model",
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
    "q": "Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?",
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
    "q": "A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events.   Which AWS managed service will meet these requirements?",
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
    "q": "A company's application has flexible start and end times.   Which Amazon EC2 pricing model will be the MOST cost-effective?",
    "opts": [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
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
    "q": "Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)",
    "opts": [
      "Physical and environmental security",
      "Physical network devices including firewalls",
      "Storage device decommissioning",
      "Security of data in transit",
      "Data integrity authentication"
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
    "q": "A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?",
    "opts": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
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
    "q": "Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?",
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
    "q": "Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?",
    "opts": [
      "Amazon Cognito",
      "AWS Shield",
      "AWS IAM role",
      "AWS IAM user access key"
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
    "q": "A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it.   Who should the developer contact for this level of support?",
    "opts": [
      "AWS Support using a support case",
      "AWS Professional Services",
      "AWS technical account manager",
      "AWS consulting partners"
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
    "q": "What is the purpose of having an internet gateway within a VPC?",
    "opts": [
      "To create a VPN connection to the VPC",
      "To allow communication between the VPC and the Internet",
      "To impose bandwidth constraints on internet traffic",
      "To load balance traffic from the Internet across Amazon EC2 instances"
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
    "q": "A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention.   How can these requirements be met?",
    "opts": [
      "Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.",
      "Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.",
      "Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.",
      "Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins."
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
    "q": "Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?",
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
    "q": "AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)",
    "opts": [
      "Cost optimization",
      "Auditing",
      "Serverless architecture",
      "Performance",
      "Scalability"
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
    "q": "Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)",
    "opts": [
      "Closing an AWS account",
      "Creating a new IAM policy",
      "Changing AWS Support plans",
      "Attaching a role to an Amazon EC2 instance",
      "Generating access keys for IAM users"
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
    "q": "Fault tolerance refers to:",
    "opts": [
      "the ability of an application to accommodate growth without changing design",
      "how well and how quickly an application's environment can have lost data restored",
      "how secure your application is",
      "the built-in redundancy of an application's components"
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
    "q": "A company is looking for a scalable data warehouse solution.   Which of the following AWS solutions would meet the company's needs?",
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
    "q": "Which statement best describes Elastic Load Balancing?",
    "opts": [
      "It translates a domain name into an IP address using DNS.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
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
    "q": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
    "opts": [
      "Command line interface",
      "On-premises",
      "Software Development Kits",
      "Software-as-a-service",
      "Hybrid"
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
    "q": "The AWS Cloud's multiple Regions are an example of:",
    "opts": [
      "agility.",
      "global infrastructure.",
      "elasticity.",
      "pay-as-you-go pricing."
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
    "q": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
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
    "q": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center.   What term would describe this model?",
    "opts": [
      "Cloud-native",
      "Partner network",
      "Hybrid architecture",
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
    "q": "Which of the following security-related services does AWS offer? (Select TWO.)",
    "opts": [
      "Multi-factor authentication physical tokens",
      "AWS Trusted Advisor security checks",
      "Data encryption",
      "Automated penetration testing",
      "Amazon S3 copyrighted content detection"
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
    "q": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
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
    "q": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
    "opts": [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability."
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
    "q": "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
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
    "q": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
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
    "q": "Which of the following security measures protect access to an AWS account? (Select TWO.)",
    "opts": [
      "Enable AWS CloudTrail.",
      "Grant least privilege access to IAM users.",
      "Create one IAM user and share with many developers and users.",
      "Enable Amazon CloudFront.",
      "Activate multi-factor authentication (MFA) for privileged users."
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
    "q": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
    "opts": [
      "Patching operating system software",
      "Encrypting data",
      "Enforcing multi-factor authentication",
      "Auditing physical data center assets"
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
    "q": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
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
    "q": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
    "opts": [
      "Amazon CloudFront distributions",
      "Amazon Route 53",
      "Security Groups",
      "Subnets",
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
    "q": "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
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
    "q": "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
    "opts": [
      "AWS Cost Explorer between AWS accounts",
      "Linked accounts and consolidated billing",
      "Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report",
      "Amazon EC2 Instance Usage Report between AWS accounts"
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
    "q": "A company has multiple AWS accounts and wants to simplify and consolidate its billing process.  Which AWS service will achieve this?",
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
    "q": "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data.   Which of the following services will help fulfill this requirement?",
    "opts": [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53 global DNS",
      "Amazon Simple Storage Service (Amazon S3) transfer acceleration"
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
    "q": "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
    "opts": [
      "On-premises",
      "Hybrid",
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
    "q": "How is asset management on AWS easier than asset management in a physical data center?",
    "opts": [
      "AWS provides a Configuration Management Database that users can maintain.",
      "AWS performs infrastructure discovery scans on the customer's behalf.",
      "Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.",
      "Users can gather asset metadata reliably with a few API calls."
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
    "q": "What feature of Amazon RDS helps to create globally redundant databases?",
    "opts": [
      "Snapshots",
      "Automatic patching and updating",
      "Cross-Region read replicas",
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
    "q": "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    "opts": [
      "restricted access.",
      "as-needed access.",
      "least privilege access.",
      "token access."
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
    "q": "Which methods can be used to identify AWS costs by departments? (Choose two.)",
    "opts": [
      "Enable multi-factor authentication for the AWS account root user.",
      "Create separate accounts for each department.",
      "Use Reserved Instances whenever possible.",
      "Use tags to associate each instance with a particular department.",
      "Pay bills using purchase orders."
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
    "q": "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
    "opts": [
      "Securing the hardware, software, facilities, and networks that run all products and services.",
      "Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
      "Configuring the operating system, network, and firewall.",
      "Obtaining industry certifications and independent third-party attestations."
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
    "q": "Which managed AWS service provides real-time guidance on AWS security best practices?",
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
    "q": "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
    "opts": [
      "Resource groups",
      "Lifecycle policies",
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
    "q": "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
    "opts": [
      "Visualization management",
      "Hardware management",
      "Encryption management",
      "Facilities management",
      "Firewall management"
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
    "q": "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
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
    "q": "What is a responsibility of AWS in the shared responsibility model?",
    "opts": [
      "Updating the network ACLs to block traffic to vulnerable ports.",
      "Patching operating systems running on Amazon EC2 instances.",
      "Updating the firmware on the underlying EC2 hosts.",
      "Updating the security group rules to block traffic to the vulnerable ports."
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
    "q": "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
    "opts": [
      "Implement loose coupling.",
      "Design for failure.",
      "Automate everything that can be automated.",
      "Use services, not servers."
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
    "q": "What does it mean to grant least privilege to AWS IAM users?",
    "opts": [
      "It is granting permissions to a single user only.",
      "It is granting permissions using AWS IAM policies only.",
      "It is granting AdministratorAccess policy permissions to trustworthy users.",
      "It is granting only the permissions required to perform a given task."
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
    "q": "What is a benefit of loose coupling as a principle of cloud architecture design?",
    "opts": [
      "It facilitates low-latency request handling.",
      "It allows applications to have dependent workflows.",
      "It prevents cascading failures between different components.",
      "It allows companies to focus on their physical data center operations."
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
    "q": "A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet. Which service will facilitate private hybrid connectivity?",
    "opts": [
      "Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway",
      "AWS Direct Connect",
      "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration",
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
    "q": "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails.   Applying which AWS Cloud design principle will address the current design issue?",
    "opts": [
      "Implementing elasticity, enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.",
      "Doubling EC2 computing resources to increase system fault tolerance."
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
    "q": "How can a customer increase security to AWS account logons? (Choose two.)",
    "opts": [
      "Configure AWS Certificate Manager",
      "Enable Multi-Factor Authentication (MFA)",
      "Use Amazon Cognito to manage access",
      "Configure a strong password policy",
      "Enable AWS Organizations"
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
    "q": "What AWS service would be used to centrally manage AWS access across multiple accounts?",
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
    "q": "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
    "opts": [
      "AWS Cost and Usage reports",
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
    "q": "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
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
    "q": "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
    "opts": [
      "Deployment to a single Availability Zone",
      "Ability to recover from failure",
      "Design for cost optimization",
      "Perform operations as code"
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
    "q": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
    "opts": [
      "Amazon EBS",
      "Amazon EC2 instance store",
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
    "q": "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
    "opts": [
      "Users do not have to guess about future capacity needs.",
      "Users can utilize existing hardware contracts for purchases.",
      "Users can fix costs no matter what their traffic is.",
      "Users can avoid audits by using reports from AWS."
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
    "q": "Which of the following is an important architectural principle when designing cloud applications?",
    "opts": [
      "Store data and backups in the same region.",
      "Design tightly coupled system components.",
      "Avoid multi-threading.",
      "Design for failure"
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
    "q": "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
    "opts": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Instances"
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
    "q": "Which of the following services is a MySQL-compatible database that automatically grows storage as needed?",
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
    "q": "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
    "opts": [
      "Amazon VPC endpoints",
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
    "q": "Which service's PRIMARY purpose is software version control?",
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
    "q": "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform.  Which tool can be used to perform this comparison?",
    "opts": [
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Billing and Cost Management console",
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
    "q": "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
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
    "q": "Which of the following BEST describe the AWS pricing model? (Choose two.)",
    "opts": [
      "Fixed-term",
      "Pay-as-you-go",
      "Colocation",
      "Planned",
      "Variable cost"
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
    "q": "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)",
    "opts": [
      "Public load balancers with AWS Application Auto Scaling capabilities",
      "F5 Big-IP and Citrix NetScaler load balancers",
      "Classic Load Balancers",
      "Cross-zone load balancers with public and private IPs",
      "Application Load Balancers"
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
    "q": "Why should a company choose AWS instead of a traditional data center?",
    "opts": [
      "AWS provides users with full control over the underlying resources.",
      "AWS does not require long-term contracts and provides a pay-as-you-go model.",
      "AWS offers edge locations in every country, supporting global reach.",
      "AWS has no limits on the number of resources that can be created."
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
    "q": "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
    "opts": [
      "AWS CloudTrail across multiple Availability Zones",
      "Amazon CloudFront to edge locations",
      "AWS CloudFormation in multiple regions",
      "A virtual private gateway over AWS Direct Connect"
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
    "q": "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
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
    "q": "Which of the following AWS services can be used to run a self-managed database?",
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
    "q": "What exclusive benefit is provided to users with Enterprise Support?",
    "opts": [
      "Access to a Technical Project Manager",
      "Access to a Technical Account Manager",
      "Access to a Cloud Support Engineer",
      "Access to a Solutions Architect"
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
    "q": "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
    "opts": [
      "It provides on-demand resources for peak usage.",
      "It automates the provisioning of individual developer environments.",
      "It automates customer relationship management.",
      "It implements a fixed monthly computing budget."
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
    "q": "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future.   Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
    "opts": [
      "Elasticity",
      "Reliability",
      "Performance",
      "Agility"
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
    "q": "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
    "opts": [
      "Business and Developer Support",
      "Business and Basic Support",
      "Enterprise and Developer Support",
      "Enterprise and Business Support"
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
    "q": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)",
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
    "q": "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)",
    "opts": [
      "Compute costs",
      "Facilities costs",
      "Storage costs",
      "Data transfer costs",
      "Network infrastructure costs",
      "Hardware lifecycle costs"
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
    "q": "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
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
    "q": "A company wants to try a third-party ecommerce solution before deciding to use it long term.   Which AWS service or tool will support this effort?",
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
    "q": "Which AWS service is a managed NoSQL database?",
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
    "q": "Which AWS service should be used to create a billing alarm?",
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
    "q": "A company is hosting a web application in a Docker container on Amazon EC2.   AWS is responsible for which of the following tasks?",
    "opts": [
      "Scaling the web application and services developed with Docker",
      "Provisioning or scheduling containers to run on clusters and maintain their availability",
      "Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
      "Managing the guest operating system, including updates and security patches"
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
    "q": "Users are reporting latency when connecting to a website with a global customer base.   Which AWS service will improve the customer experience by reducing latency?",
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
    "q": "Which actions represent best practices for using AWS IAM? (Choose two.)",
    "opts": [
      "Configure a strong password policy",
      "Share the security credentials among users of AWS accounts who are in the same Region",
      "Use access keys to log in to the AWS Management Console",
      "Rotate access keys on a regular basis",
      "Avoid using IAM roles to delegate permissions"
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
    "q": "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
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
    "q": "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability.   Which service will support these requirements?",
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
    "q": "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
    "opts": [
      "Use AWS Config to generate an inventory of AWS resources",
      "Use service limits to prevent users from creating or making changes to AWS resources",
      "Use AWS CloudTrail to record AWS API calls into an auditable log file",
      "Use AWS Certificate Manager to whitelist approved AWS resources and services",
      "Use Amazon GuardDuty to validate configuration changes made to AWS resources"
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
    "q": "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
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
    "q": "Which design principle should be considered when architecting in the AWS Cloud?",
    "opts": [
      "Think of servers as non-disposable resources",
      "Use synchronous integration of services",
      "Design loosely coupled components",
      "Implement the least permissive rules for security groups"
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
    "q": "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
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
    "q": "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional.   What is the best cloud architecture to address this consistently growing demand?",
    "opts": [
      "Run the application on a bigger EC2 instance size.",
      "Switch to an EC2 instance family that better matches batch requirements.",
      "Distribute the application across multiple EC2 instances and run the workload in parallel.",
      "Run the application on a bare metal EC2 instance."
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
    "q": "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments.   How can this be achieved using AWS services or features?",
    "opts": [
      "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
      "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
      "Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
      "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."
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
    "q": "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
    "opts": [
      "Economy of scale",
      "Elasticity",
      "High availability",
      "Agility"
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
    "q": "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays.   Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
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
    "q": "Which AWS service enables users to securely connect to AWS resources over the public internet?",
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
    "q": "Which tool is used to forecast AWS spending?",
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
    "q": "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users.   Which AWS service will support these requirements?",
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
    "q": "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
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
    "q": "Why is it beneficial to use Elastic Load Balancers with applications?",
    "opts": [
      "They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
      "They are capable of handling constant changes in network traffic patterns.",
      "They automatically adjust capacity.",
      "They are provided at no charge to users."
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
    "q": "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
    "opts": [
      "Infrastructure facilities access management",
      "Cloud infrastructure hardware lifecycle management",
      "Configuration management of user's applications",
      "Networking infrastructure protection",
      "Security groups configuration"
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
    "q": "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components.   This is an example of which principle of cloud architecture design?",
    "opts": [
      "Scalability",
      "Loose coupling",
      "Automation",
      "Automatic scaling"
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
    "q": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
    "opts": [
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Direct Connect",
      "AWS Organizations",
      "Network ACLs"
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
    "q": "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously.   Which AWS storage service should be used?",
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
    "q": "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS.   Which security measures fall under the responsibility of AWS? (Choose two.)",
    "opts": [
      "Running a virus scan on EC2 instances",
      "Protecting against IP spoofing and packet sniffing",
      "Installing the latest security patches on the RDS instance",
      "Encrypting communication between the EC2 instances and the Elastic Load Balancer",
      "Configuring a security group and a network access control list (NACL) for EC2"
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
    "q": "What is the benefit of elasticity in the AWS Cloud?",
    "opts": [
      "Ensure web traffic is automatically spread across multiple AWS Regions.",
      "Minimize storage costs by automatically archiving log data.",
      "Enable AWS to automatically select the most cost-effective services.",
      "Automatically adjust the required compute capacity to maintain consistent performance."
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
    "q": "The continual reduction of AWS Cloud pricing is due to:",
    "opts": [
      "pay-as-you go pricing",
      "the AWS global infrastructure",
      "economies of scale",
      "reserved storage pricing"
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
    "q": "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements.   How can this be accomplished?",
    "opts": [
      "Enable S3 Block Public Access from the AWS Management Console.",
      "Hold a team meeting to discuss the importance if only uploading private S3 objects.",
      "Require all S3 objects to be manually approved before uploading.",
      "Create a service to monitor all S3 uploads and remove any public uploads."
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
    "q": "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console.   Which action can be taken to resolve this?",
    "opts": [
      "Open a detailed case related to billing and submit it to AWS Support for help.",
      "Upload data describing the issue to a new object in a private Amazon S3 bucket.",
      "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
      "Proceed with creating a new dashboard in Amazon QuickSight."
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
    "q": "What does the AWS Simple Monthly Calculator do?",
    "opts": [
      "Compares on-premises costs to colocation environments",
      "Estimates monthly billing based on projected usage",
      "Estimates power consumption at existing data centers",
      "Estimates CPU utilization"
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
    "q": "Who is responsible for patching the guest operating system for Amazon RDS?",
    "opts": [
      "The AWS Product team",
      "The customer Database Administrator",
      "Managed partners",
      "AWS Support"
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
    "q": "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
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
    "q": "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
    "opts": [
      "Reduced cost to run services on AWS",
      "Improved availability of applications deployed on AWS",
      "Higher durability of data stored on AWS",
      "Decreased latency to reach applications deployed on AWS",
      "Higher security of data stored on AWS"
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
    "q": "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
    "opts": [
      "the AWS Support forum",
      "AWS Abuse",
      "an AWS Solutions Architect",
      "AWS Support"
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
    "q": "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
    "opts": [
      "Provision capacity based on past usage and theoretical peaks",
      "Dynamically and predictively scale to meet usage demands",
      "Build the application and infrastructure in a data center that grants physical access",
      "Break apart the application into loosely coupled components"
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
    "q": "Which method helps to optimize costs of users moving to the AWS Cloud?",
    "opts": [
      "Paying only for what is used",
      "Purchasing hardware before it is needed",
      "Manually provisioning cloud resources",
      "Purchasing for the maximum possible load"
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
    "q": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
    "opts": [
      "Installing security patches for the Xen and KVM hypervisors",
      "Installing operating system patches for Amazon DynamoDB",
      "Installing operating system security patches for Amazon EC2 database instances",
      "Installing operating system security patches for Amazon RDS database instances"
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
    "q": "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
    "opts": [
      "Terminate all AWS resources automatically if budget thresholds are exceeded.",
      "Break down AWS costs by day, service, and linked AWS account.",
      "Create budgets and receive notifications if current of forecasted usage exceeds the budgets.",
      "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.",
      "Move data stored in Amazon S3 to a more cost-effective storage class."
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
    "q": "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
    "opts": [
      "AWS Support",
      "the customer",
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
    "q": "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
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
    "q": "Which AWS service provides on-demand of AWS security and compliance documentation?",
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
    "q": "Which AWS service can be used to turn text into life-like speech?",
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
    "q": "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
    "opts": [
      "Design using a serverless architecture",
      "Assume that all components within an application can fail",
      "Design AWS Auto Scaling into every application",
      "Design all components using open-source code"
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
    "q": "A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:       (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.)   Where can all this information be found in one location?",
    "opts": [
      "Amazon QuickSight dashboard",
      "AWS CloudTrail trails",
      "AWS Trusted Advisor report",
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
    "q": "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
    "opts": [
      "Dedicated Hosts",
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances"
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
    "q": "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
    "opts": [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
      "Data centers"
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
    "q": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    "opts": [
      "Security",
      "Operational excellence",
      "Performance efficiency",
      "Cost optimization"
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
    "q": "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production.   How can this be achieved?",
    "opts": [
      "Use multiple AWS accounts",
      "Use resource tagging",
      "Use multiple VPCs",
      "Use Cost Explorer"
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
    "q": "Which AWS service can be used in the application deployment process?",
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
    "q": "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
    "opts": [
      "Spot Instances for stateless and flexible workloads",
      "Memory optimized instances for high-compute workloads",
      "On-Demand Instances for high-cost and sustained workloads",
      "Reserved Instances for sustained workloads",
      "Spend limits set using AWS Budgets"
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
    "q": "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements.   Which AWS service provides on-demand access to these items?",
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
    "q": "Which AWS service or feature allows the user to manage cross-region application traffic?",
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
    "q": "Which AWS service can be used to track unauthorized API calls?",
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
    "q": "A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes.   Which AWS service can be used to meet these requirements?",
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
    "q": "A user is planning to launch two additional Amazon EC2 instances to increase availability.   Which action should the user take?",
    "opts": [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions, but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones."
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
    "q": "A company must store critical business data in Amazon S3 with a backup to another AWS Region.   How can this be achieved?",
    "opts": [
      "Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally",
      "Set up Amazon S3 cross-region replication to another AWS Region",
      "Configure the AWS Backup service to back up to the data to another AWS Region",
      "Take Amazon S3 bucket snapshots and copy that data to another AWS Region"
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
    "q": "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
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
    "q": "What is the recommended method to request penetration testing on AWS resources?",
    "opts": [
      "Open a support case",
      "Fill out the Penetration Testing Request Form",
      "Request a penetration test from your technical account manager",
      "Contact your AWS sales representative"
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
    "q": "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3.   Which AWS service can meet these requirements?",
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
    "q": "Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)",
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
    "q": "Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?",
    "opts": [
      "Spot Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
      "Reserved Instances"
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
    "q": "Which AWS cloud architecture principle states that systems should reduce interdependencies?",
    "opts": [
      "Scalability",
      "Services, not servers",
      "Removing single points of failure",
      "Loose coupling"
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
    "q": "What is the MOST effective resource for staying up to date on AWS security announcements?",
    "opts": [
      "AWS Personal Health Dashboard",
      "AWS Secrets Manager",
      "AWS Security Bulletins",
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
    "q": "Which AWS service offers persistent storage for a file system?",
    "opts": [
      "Amazon S3",
      "Amazon EC2 instance store",
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
    "q": "Which of the following allows AWS users to manage cost allocations for billing?",
    "opts": [
      "Tagging resources",
      "Limiting who can create resources",
      "Adding a secondary payment method",
      "Running all operations on a single AWS account"
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
    "q": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
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
    "q": "Which of the following AWS services are serverless? (Choose two.)",
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
    "q": "Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)",
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
    "q": "Which requirement must be met for a member account to be unlinked from an AWS Organizations account?",
    "opts": [
      "The linked account must be actively compliant with AWS System and Organization Controls (SOC).",
      "The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.",
      "The member account must meet the requirements of a standalone account.",
      "The payer account must be used to remove the linked account from the organization."
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
    "q": "What AWS benefit refers to a customer's ability to deploy applications that scale up and down the meet variable demand?",
    "opts": [
      "Elasticity",
      "Agility",
      "Security",
      "Scalability"
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
    "q": "During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report.   Which service should be used to submit this request?",
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
    "q": "A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption.   Which configuration will meet these requirements?",
    "opts": [
      "Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.",
      "Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.",
      "Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.",
      "Run across two AWS Regions, using a third AWS Region for the disaster recovery site."
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
    "q": "A company has a 500 TB image repository that needs to be transported to AWS for processing.   Which AWS service can import this data MOST cost-effectively?",
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
    "q": "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
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
    "q": "Which of the following assist in identifying costs by department? (Choose two.)",
    "opts": [
      "Using tags on resources",
      "Using multiple AWS accounts",
      "Using an account manager",
      "Using AWS Trusted Advisor",
      "Using Consolidated Billing"
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
    "q": "A company wants to allow full access to an Amazon S3 bucket for a particular user.   Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?",
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
    "q": "Which AWS service allows for effective cost management of multiple AWS accounts?",
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
    "q": "A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month.   What pricing model is appropriate?",
    "opts": [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
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
    "q": "Which AWS tools automatically forecast future AWS costs?",
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
    "q": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
    "opts": [
      "Enabling server-side encryption for objects stored in S3",
      "Applying AWS IAM security policies",
      "Patching the operating system on an Amazon EC2 instance",
      "Applying updates to the hypervisor"
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
    "q": "A user is able to set up a master payer account to view consolidated billing reports through:",
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
    "q": "Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?",
    "opts": [
      "Performance efficiency",
      "Operational excellence",
      "Reliability",
      "Security"
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
    "q": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
    "opts": [
      "Vertical scaling",
      "Manual failure recovery",
      "Testing recovery procedures",
      "Changing infrastructure manually"
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
    "q": "What is a characteristic of Convertible Reserved Instances (RIs)?",
    "opts": [
      "Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.",
      "Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.",
      "Users can sell and buy Convertible RIs on the AWS Marketplace.",
      "Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs."
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
    "q": "An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS.   What is the BEST way to get a monthly cost estimation for this architecture?",
    "opts": [
      "Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.",
      "Collect the published prices of the AWS services and calculate the monthly estimate.",
      "Use the AWS Simple Monthly Calculator to estimate the monthly cost.",
      "Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost."
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
    "q": "Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)",
    "opts": [
      "Automated backups",
      "Schema management",
      "Indexing of tables",
      "Software patching",
      "Extract, transform, and load (ETL) management"
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
    "q": "What does the Amazon S3 Intelligent-Tiering storage class offer?",
    "opts": [
      "Payment flexibility by reserving storage capacity",
      "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
      "Automatic cost savings by moving objects between tiers based on access pattern changes",
      "Secure, durable, and lowest cost storage for data archival"
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
    "q": "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse.   Which AWS service can be used to meet this requirement?",
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
    "q": "Which AWS service can be used to track resource changes and establish compliance?",
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
    "q": "A user has underutilized on-premises resources.   Which AWS Cloud concept can BEST address this issue?",
    "opts": [
      "High availability",
      "Elasticity",
      "Security",
      "Loose coupling"
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
    "q": "A user has a stateful workload that will run on Amazon EC2 for the next 3 years.   What is the MOST cost-effective pricing model for this workload?",
    "opts": [
      "On-Demand Instances",
      "Reserved Instances",
      "Dedicated Instances",
      "Spot Instances"
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
    "q": "A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions.   What is the most suitable and cost-effective option for this task?",
    "opts": [
      "On-Demand Instance",
      "Reserved Instance",
      "Dedicated Host",
      "Spot Instance"
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
    "q": "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    "opts": [
      "Providing high-performance container orchestration",
      "Creating and rotating encryption keys",
      "Detecting underutilized resources to save costs",
      "Improving security by proactively monitoring the AWS environment",
      "Implementing enforced tagging across AWS resources"
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
    "q": "A developer has been hired by a large company and needs AWS credentials.   Which are security best practices that should be followed? (Choose two.)",
    "opts": [
      "Grant the developer access to only the AWS resources needed to perform the job.",
      "Share the AWS account root user credentials with the developer.",
      "Add the developer to the administrator's group in AWS IAM.",
      "Configure a password policy that ensures the developer's password cannot be changed.",
      "Ensure the account password policy requires a minimum length."
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
    "q": "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
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
    "q": "Which service provides a user the ability to warehouse data in the AWS Cloud?",
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
    "q": "How do customers benefit from Amazon's massive economies of scale?",
    "opts": [
      "Periodic price reductions as the result of Amazon's operational efficiencies",
      "New Amazon EC2 instance types providing the latest hardware",
      "The ability to scale up and down when needed",
      "Increased reliability in the underlying hardware of Amazon EC2 instances"
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
    "q": "Which AWS services can be used to gather information about AWS account activity? (Select TWO.)",
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
    "q": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)",
    "opts": [
      "Patching databases software",
      "Testing application releases",
      "Backing up databases",
      "Creating database schema",
      "Running penetration tests"
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
    "q": "What can AWS edge locations be used for? (Select TWO.)",
    "opts": [
      "Hosting applications",
      "Delivering content closer to users",
      "Running NoSQL database caching services",
      "Reducing traffic on the server by caching responses",
      "Sending notification messages to end users"
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
    "q": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately.   Where can the administrator find assistance?",
    "opts": [
      "AWS Well-Architected Framework documentation",
      "Amazon CloudFront",
      "AWS CodeCommit",
      "AWS Quick Start reference deployments"
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
    "q": "Which AWS services are defined as global instead of regional? (Select TWO.)",
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
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
    "opts": [
      "Ensuring that application data is encrypted at rest",
      "Ensuring that AWS NTP servers are set to the correct time",
      "Ensuring that users have received security training in the use of AWS services",
      "Ensuring that access to data centers is restricted",
      "Ensuring that hardware is disposed of properly"
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
    "q": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame.   Which pricing construct would provide the MOST cost-effective solution?",
    "opts": [
      "Amazon EC2 Spot Instances",
      "Amazon EC2 Dedicated Instances",
      "Amazon EC2 On-Demand Instances",
      "Amazon EC2 Reserved Instances"
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
    "q": "The financial benefits of using AWS are: (Select TWO.)",
    "opts": [
      "reduced Total Cost of Ownership (TCO).",
      "increased capital expenditure (capex).",
      "reduced operational expenditure (opex).",
      "deferred payment plans for startups.",
      "business credit lines for stratups."
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
    "q": "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
    "opts": [
      "Patching of the guest operating system",
      "Security awareness and training",
      "Physical and environmental controls",
      "Development of an IAM password policy"
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
    "q": "A company wants to reduce the physical compute footprint that developers use to run code.   Which service would meet that need by enabling serverless architectures?",
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
    "q": "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
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
    "q": "Which of the following are categories of AWS Trusted Advisor? (Select TWO.)",
    "opts": [
      "Fault Tolerance",
      "Instance Usage",
      "Infrastructure",
      "Performance",
      "Storage Capacity"
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
    "q": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?    - A. Amazon RDS",
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
    "q": "A company will be moving from an on-premises data center to the AWS Cloud.   What would be one financial difference after the move?",
    "opts": [
      "Moving from variable operational expense (opex) to upfront capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable operational expense (opex).",
      "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"
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
    "q": "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
    "opts": [
      "Application security",
      "Edge location management",
      "Patch management",
      "Client-side data"
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
    "q": "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
    "opts": [
      "Multi-factor authentication",
      "Groups",
      "Password policies",
      "Access keys"
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
    "q": "Which of the following are benefits of the AWS Cloud? (Choose two.)",
    "opts": [
      "Unlimited uptime",
      "Elasticity",
      "Agility",
      "Colocation",
      "Capital expenses"
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
    "q": "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
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
    "q": "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
    "opts": [
      "AWS Direct Connects",
      "Amazon VPCs",
      "Edge locations",
      "Availability Zones"
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
    "q": "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
    "opts": [
      "It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.",
      "AWS is responsible for the maintenance of common compliance framework documentation.",
      "It assures customers that AWS is maintaining physical security and data protection.",
      "It ensures the use of compliance frameworks that are being used by other cloud providers.",
      "It will adopt new compliance frameworks as they become relevant to customer workloads."
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
    "q": "Which of the following services provides on-demand access to AWS compliance reports?",
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
    "q": "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
    "opts": [
      "Security management of data center",
      "Patch management",
      "Configuration management",
      "User and access management"
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
    "q": "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
    "opts": [
      "Software development",
      "Project management",
      "Storage hardware",
      "Physical servers",
      "Antivirus software license"
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
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
    "opts": [
      "Maintaining the underlying Amazon EC2 hardware.",
      "Managing the VPC network access control lists.",
      "Encrypting data in transit and at rest.",
      "Replacing failed hard disk drives.",
      "Deploying hardware in different Availability Zones."
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
    "q": "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
    "opts": [
      "Scaling the number of Amazon EC2 instances based on traffic.",
      "Resizing Amazon RDS instances as business needs change.",
      "Automatically directing traffic to less-utilized Amazon EC2 instances.",
      "Using AWS compliance documents to accelerate the compliance process.",
      "Having the ability to create and govern environments using code."
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
    "q": "When is it beneficial for a company to use a Spot Instance?",
    "opts": [
      "When there is flexibility in when an application needs to run.",
      "When there are mission-critical workloads.",
      "When dedicated capacity is needed.",
      "When an instance should not be stopped."
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
    "q": "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
    "opts": [
      "Amazon EC2 instance availability",
      "Power consumption of the data center",
      "Labor costs to replace old servers",
      "Application developer time",
      "Database engine capacity"
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
    "q": "How does AWS charge for AWS Lambda?",
    "opts": [
      "Users bid on the maximum price they are willing to pay per hour.",
      "Users choose a 1-, 3- or 5-year upfront payment term.",
      "Users pay for the required permanent storage on a file system or in a database.",
      "Users pay based on the number of requests and consumed compute resources."
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
    "q": "What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
    "opts": [
      "Act as a virtual firewall for the Amazon EC2 instance.",
      "Secure AWS user accounts with AWS identity and Access Management (IAM) policies.",
      "Provide DDoS protection with AWS Shield.",
      "Use Amazon CloudFront to protect the Amazon EC2 instance."
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
  }
];
