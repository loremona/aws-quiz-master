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
      "Shared Responsibility"
    ],
    "id": "2db30614282b",
    "explain": "Dopo la migrazione AWS resta responsabile della sicurezza DEL cloud: data center, controlli fisici e ambientali (accessi, alimentazione, raffreddamento). Le patch del sistema operativo guest e delle applicazioni restano al cliente, perché girano sulle sue istanze."
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
      "Elastic Beanstalk",
      "DevOps & Tools"
    ],
    "id": "7e5fdf61fe94",
    "explain": "Elastic Beanstalk (carichi il codice e lui crea e gestisce l'infrastruttura) e OpsWorks (gestione della configurazione con Chef/Puppet) servono entrambi a distribuire applicazioni. Config registra le configurazioni, Application Discovery Service raccoglie dati sui server on-premises da migrare, Kinesis elabora flussi di dati in tempo reale: nessuno dei tre fa deploy."
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
      "Altri servizi"
    ],
    "id": "11d09fe408ca",
    "explain": "Amazon Connect è il contact center omnicanale (voce e chat) in cloud, pagato a consumo. Attenzione al nome simile: Direct Connect è una linea di rete privata verso AWS; Support Center serve ad aprire ticket con AWS; Managed Services è un servizio di gestione operativa dell'infrastruttura."
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
    "explain": "AWS Pricing Calculator è uno strumento web pubblico: stima i costi di un'architettura prima di crearla, anche senza account. Cost Explorer e Budgets lavorano sui costi reali di un account esistente; il TCO Calculator è stato ritirato e confrontava on-premises e cloud, non stimava i singoli servizi."
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
    "explain": "L'Internet Gateway collegato al VPC permette il traffico in entrata e in uscita da Internet verso le subnet pubbliche. Il NAT gateway permette solo il traffico in uscita dalle subnet private; un VPC endpoint collega servizi AWS in modo privato; una VPN collega una rete on-premises, non Internet."
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
    "explain": "Un server che deve restare acceso un anno intero è il caso tipico delle Reserved Instances. Tra le opzioni Reserved, più paghi in anticipo più risparmi: Partial Upfront costa meno di No Upfront (All Upfront, non presente, sarebbe ancora più economico). Spot può essere interrotta, quindi non va bene per un database; On-Demand è la più cara."
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
      "RDS",
      "Database"
    ],
    "id": "737738c3d43c",
    "explain": "Amazon RDS Multi-AZ mantiene una copia standby sincrona in un'altra Availability Zone e fa failover automatico se la primaria si guasta. Un load balancer davanti a una sola istanza non aggiunge ridondanza, Auto Recovery recupera l'istanza nella stessa AZ, la termination protection impedisce solo la cancellazione accidentale."
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
      "IAM"
    ],
    "id": "059a8046ae76",
    "explain": "La password policy dell'account IAM imposta lunghezza minima, caratteri obbligatori, scadenza e riuso delle password per tutti gli utenti IAM. Una policy utente IAM concede permessi, non regole sulle password; le SCP limitano i permessi degli account di un'organizzazione; Security Hub aggrega risultati di sicurezza."
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
    "explain": "Il cliente è responsabile della sicurezza NEL cloud: sistema operativo guest, applicazioni, dati e configurazioni. Patch dell'infrastruttura, controlli fisici e ambientali e configurazione dei dispositivi di rete di AWS sono responsabilità di AWS (sicurezza DEL cloud)."
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
      "Shared Responsibility",
      "Security"
    ],
    "id": "be6d9fd38e90",
    "explain": "La conformità è condivisa: devi scegliere servizi AWS già certificati PCI DSS (in scope) e poi applicare tu i controlli PCI nella tua applicazione. Non esiste un ticket di supporto che 'attiva' la conformità, e un servizio fuori dall'ambito PCI non diventa conforme solo perché l'applicazione lo è."
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
      "SQS"
    ],
    "id": "5fd78ef2018d",
    "explain": "Amazon SQS invia, conserva e riceve messaggi tra componenti disaccoppiati; le code FIFO garantiscono l'ordine first-in, first-out e l'elaborazione una sola volta. SNS è pub/sub e spinge i messaggi senza conservarli; Step Functions orchestra flussi di lavoro; Kinesis è pensato per flussi di dati in streaming, non per lo scambio di messaggi tra componenti."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "c8a7c4a2c880",
    "explain": "Con AWS Organizations l'account di gestione (un tempo 'master') di AnyCompany invita l'account di Example Corp; quando l'invito è accettato, la Consolidated Billing produce un'unica fattura per tutti gli account, che restano separati. Non serve migrare le risorse e non serve chiedere a supporto, solutions architect o TAM: il cliente lo fa da solo."
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
    "explain": "AWS Budgets invia avvisi quando i costi o l'utilizzo, effettivi o previsti, superano una soglia che hai definito. Cost Explorer serve ad analizzare e visualizzare i costi passati (e fare previsioni), il Cost and Usage Report è il dettaglio più completo dei dati di fatturazione, CloudTrail registra le chiamate API."
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
      "Elastic Beanstalk"
    ],
    "id": "530638ab2413",
    "explain": "Elastic Beanstalk è un PaaS: carichi il codice Node.js e lui crea istanze, load balancer, Auto Scaling e monitoraggio. È la scelta giusta per chi conosce poco AWS. Con CloudFormation devi descrivere tu l'infrastruttura in un template, con EC2 devi gestire i server a mano, OpsWorks richiede di conoscere Chef o Puppet."
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
      "Support"
    ],
    "id": "5c6f6f11c32f",
    "explain": "Con i piani Basic e Developer, Trusted Advisor offre solo i controlli di base (core checks: alcuni controlli di sicurezza e sulle service quotas). L'elenco completo dei controlli, inclusi costi e tolleranza ai guasti, richiede almeno il piano Business."
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
      "Security",
      "CloudFront"
    ],
    "id": "bb2bc21f2f3f",
    "explain": "AWS Shield protegge dagli attacchi DDoS (Shield Standard è gratuito e sempre attivo); CloudFront assorbe il traffico sulla rete globale delle edge location e integra Shield e WAF, quindi è anche lui una difesa contro i DDoS. CloudTrail registra le chiamate API, il Support Center serve per i ticket, l'Health Dashboard mostra lo stato dei servizi: nessuno di questi blocca un attacco."
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
      "Security",
      "Governance"
    ],
    "id": "fb7760aa1894",
    "explain": "AWS Artifact è il portale self-service gratuito dove scarichi i report di conformità di AWS (SOC, ISO, PCI) e accetti accordi come il BAA. Config controlla la conformità delle TUE risorse, GuardDuty rileva minacce, Trusted Advisor dà raccomandazioni di best practice."
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
      "IAM"
    ],
    "id": "8686ab994274",
    "explain": "Per limitarsi a CLI e SDK serve un utente IAM con solo accesso programmatico (chiavi di accesso, senza password per la console). Per il privilegio minimo gli colleghi una policy che dà accesso solo ad Amazon RDS. L'accesso alla console non è richiesto e una policy da amministratore darebbe permessi eccessivi."
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
      "Governance"
    ],
    "id": "885f4dd5d4e6",
    "explain": "AWS Config registra la cronologia delle configurazioni delle risorse, le valuta con regole di conformità e può eseguire azioni di correzione automatica (remediation). CloudTrail registra CHI ha fatto quale chiamata API, non lo stato delle configurazioni; Secrets Manager conserva credenziali; Trusted Advisor dà consigli ma non corregge."
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
      "EC2",
      "Cloud Concepts"
    ],
    "id": "11c0a19b6046",
    "explain": "Le Availability Zone sono data center isolati tra loro: distribuire le istanze su più AZ elimina il single point of failure e quindi aumenta la disponibilità. Non riduce i costi (anzi, il traffico tra AZ si paga), non aiuta gli utenti di altre Regioni (per quello servono più Regioni o CloudFront) e non 'aumenta il carico'."
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
    "explain": "Un numero costante di istanze per un periodo lungo è il caso perfetto per le Reserved Instances: fino a circa il 72% di sconto e, se sono zonali, anche capacità riservata. On-Demand costa di più, Spot può essere interrotta e non garantisce la disponibilità, i Dedicated Hosts sono server fisici dedicati, molto più cari."
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
      "Support",
      "Governance"
    ],
    "id": "784576ac5a1a",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista del tuo account) mostra gli eventi che riguardano le tue risorse, incluse le manutenzioni programmate dell'infrastruttura AWS. Trusted Advisor dà raccomandazioni, il Billing Dashboard mostra i costi, Config registra le modifiche delle TUE risorse, non quelle di AWS."
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
      "Shared Responsibility"
    ],
    "id": "7d65faea3588",
    "explain": "RDS è un servizio gestito: AWS si occupa di patch del sistema operativo, backup automatici (incluso il point-in-time restore) e sostituzione delle istanze guaste. Al cliente restano la gestione degli accessi e della rete, per esempio i security group che controllano il traffico verso il database."
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
      "Shared Responsibility"
    ],
    "id": "378b4ddb5b89",
    "explain": "Con Lambda (serverless) AWS gestisce sistema operativo, runtime e piattaforma. Al cliente resta l'applicazione: il codice della funzione, le sue dipendenze, i permessi IAM e i dati. La cifratura del codice a riposo la fa AWS automaticamente."
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
      "Billing & Cost"
    ],
    "id": "8d7e6a01fb74",
    "explain": "AWS Budgets ti avvisa via email o SNS quando costi o utilizzo superano (o si prevede che superino) le soglie che hai definito. Cost Explorer serve all'analisi, non agli avvisi; CloudTrail registra le chiamate API; Macie trova dati sensibili in S3."
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
      "DynamoDB"
    ],
    "id": "f9e2459efc24",
    "explain": "DynamoDB è il database NoSQL chiave-valore e documentale di AWS, serverless e con latenza di pochi millisecondi. Aurora e RDS sono database relazionali (SQL), Redshift è un data warehouse per l'analisi."
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
    "explain": "Le istanze Spot usano la capacità EC2 inutilizzata con sconti fino al 90%, ma AWS può riprendersela con 2 minuti di preavviso. Reserved e On-Demand non sono capacità inutilizzata; le Dedicated Instances girano su hardware dedicato al cliente e costano di più."
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
      "Networking"
    ],
    "id": "29898d7c65df",
    "explain": "Direct Connect è una linea fisica privata tra la tua rete e AWS: si realizza in una struttura di colocation (una Direct Connect location), spesso tramite un partner o ISP. La VPN e l'Internet gateway passano su Internet pubblico; Amazon Connect è un contact center."
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
      "Lambda"
    ],
    "id": "7ef759af0c7c",
    "explain": "EC2 (server virtuali) e Lambda (funzioni serverless) sono servizi di calcolo. S3 ed EBS sono storage (a oggetti e a blocchi), Cognito gestisce l'autenticazione degli utenti delle app."
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
      "DevOps & Tools"
    ],
    "id": "82114d271e5e",
    "explain": "CodeCommit era il repository Git privato e gestito di AWS per conservare e versionare il codice sorgente (dal 2024 non è più disponibile per i nuovi clienti, ma all'esame compare ancora). CodeBuild compila e testa, CodePipeline automatizza la pipeline CI/CD, CodeStar era un'interfaccia per avviare progetti."
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
      "Support",
      "Security"
    ],
    "id": "0dd71e55bc33",
    "explain": "Trusted Advisor controlla il tuo account e segnala problemi di sicurezza come porte aperte nei security group, root senza MFA o bucket S3 pubblici. Secrets Manager conserva credenziali, Cognito gestisce i login degli utenti delle app, Macie cerca dati sensibili dentro S3 ma non verifica la sicurezza dell'account."
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
      "Cloud Concepts"
    ],
    "id": "b4a3f2ed7119",
    "explain": "Ogni Availability Zone è uno o più data center con alimentazione, rete e raffreddamento separati, distanti tra loro: replicare su più AZ protegge da incendi, alluvioni o blackout locali. Le edge location servono a CloudFront, Route 53 è il DNS. Anche più Regioni proteggerebbero, ma la risposta attesa per tolleranza ai guasti e continuità è la replica tra AZ."
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
      "SNS"
    ],
    "id": "53fd2097a602",
    "explain": "Amazon SNS è pub/sub: un messaggio pubblicato su un topic viene inviato a più destinatari, tra cui SMS, email, notifiche push, SQS e Lambda. SES invia solo email, gli allarmi CloudWatch usano proprio SNS per notificare, SQS è una coda e non invia SMS né email."
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
      "Well-Architected"
    ],
    "id": "dadbe0c79d48",
    "explain": "Nel pilastro Reliability del Well-Architected Framework ci sono due principi: testare le procedure di ripristino e ripristinare automaticamente dopo un guasto. Misurare l'efficienza e adottare un modello a consumo appartengono al pilastro Cost Optimization; un'architettura monolitica peggiora l'affidabilità."
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
      "CloudFront",
      "Networking"
    ],
    "id": "c17f90203286",
    "explain": "CloudFront mette in cache i contenuti nelle edge location vicine agli utenti; Global Accelerator instrada il traffico sulla rete globale di AWS fino alla Regione, riducendo latenza e variabilità. Un ALB distribuisce il traffico dentro una Regione, Direct Connect collega la tua sede ad AWS, Lambda esegue codice."
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
      "Networking"
    ],
    "id": "09cb638a1429",
    "explain": "Direct Connect è una connessione fisica dedicata e privata: bassa latenza costante e niente Internet pubblico. Una VPN è cifrata ma passa su Internet, quindi la latenza è variabile; il VPC peering collega VPC tra loro, non una sede on-premises."
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
      "Security",
      "Governance"
    ],
    "id": "5a91621947bc",
    "explain": "AWS Artifact fornisce on-demand i report di conformità di AWS (SOC, ISO, PCI). Secrets Manager conserva credenziali, Security Hub aggrega i risultati di sicurezza del tuo account, Certificate Manager gestisce i certificati SSL/TLS."
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
      "Security"
    ],
    "id": "b40ef19a0cd5",
    "explain": "AWS WAF è il web application firewall: si collega all'Application Load Balancer (o a CloudFront e API Gateway) e blocca le richieste HTTP malevole come SQL injection e cross-site scripting. GuardDuty rileva minacce analizzando i log, Inspector cerca vulnerabilità nelle istanze, Trusted Advisor dà consigli."
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
      "EC2",
      "Cloud Concepts"
    ],
    "id": "b44cd8fd97b4",
    "explain": "L'alta disponibilità richiede ridondanza su più Availability Zone, così il guasto di un data center non ferma l'applicazione. Più istanze in una sola AZ restano vulnerabili al guasto di quella AZ; un'unica istanza, anche in un gruppo di Auto Scaling, comporta comunque un'interruzione finché non viene sostituita."
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
    "explain": "Un database con carico costante per 3 anni è il caso ideale delle Reserved Instances con durata triennale, che danno lo sconto massimo. Spot può essere interrotta, On-Demand è la più cara, le Dedicated Instances costano di più (avrebbero senso solo per esigenze di licenza o conformità)."
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
      "IAM"
    ],
    "id": "668c40a238d4",
    "explain": "Il credential report di IAM è un file CSV scaricabile con tutti gli utenti IAM e lo stato di password, MFA e chiavi di accesso (età, ultimo utilizzo, rotazione). Dare permessi da amministratore al revisore viola il privilegio minimo, gli screenshot sono lenti e incompleti, Trusted Advisor non elenca le credenziali di ogni utente."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "a47a9dcb701e",
    "explain": "La Consolidated Billing di AWS Organizations dà un'unica fattura per tutti gli account e somma l'utilizzo per raggiungere prima gli sconti a scaglioni (volume discounts). È gratuita, non prevede rateizzazione e i budget si creano con AWS Budgets, non con la fatturazione consolidata."
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
      "Billing & Cost"
    ],
    "id": "b61c2151768d",
    "explain": "Per un picco breve, che non può essere interrotto e senza impegni, la scelta giusta è On-Demand: paghi al secondo solo finché ti serve. Spot può essere interrotta, Reserved richiede un impegno di 1 o 3 anni, i Dedicated Hosts sono costosi e non flessibili."
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
      "Governance"
    ],
    "id": "fb69d5f63be4",
    "explain": "Le regole di AWS Config tracciano le modifiche di configurazione delle risorse e ne valutano la conformità. Il Cost and Usage Report riguarda i costi, le SCP limitano i permessi degli account, i VPC Flow Logs registrano il traffico di rete."
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
      "CloudFront"
    ],
    "id": "382021485fe6",
    "explain": "CloudFront è la CDN di AWS: mette in cache immagini e video nelle edge location di tutto il mondo, riducendo latenza e costi di trasferimento. La replica tra Regioni di S3 duplica i dati (costa di più e non copre il mondo intero), una VPN non distribuisce contenuti, PrivateLink è per connessioni private tra VPC e servizi."
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
      "IAM"
    ],
    "id": "9d19bec146aa",
    "explain": "Privilegio minimo significa dare a ogni identità solo i permessi che le servono davvero: la policy va applicata solo agli utenti (o meglio ai gruppi o ruoli) che ne hanno bisogno. Limitare la dimensione di un gruppo non riduce i permessi, la MFA rafforza l'autenticazione ma non limita i permessi, più password per utente non esistono."
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
      "Cloud Concepts"
    ],
    "id": "64c165e8ec6b",
    "explain": "Economie di scala: AWS acquista hardware e servizi in volumi enormi per centinaia di migliaia di clienti, quindi i suoi costi unitari scendono e i prezzi variabili per il cliente sono più bassi. Il pay-as-you-go riguarda il pagare solo ciò che usi, non il motivo per cui il prezzo è basso."
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
      "Networking",
      "VPC"
    ],
    "id": "b946af33b775",
    "explain": "Transit Gateway è un hub centrale: ogni VPC (anche di account diversi) si collega una volta sola e tutti comunicano tra loro. Con migliaia di VPC il VPC peering sarebbe ingestibile, perché è punto-punto e non transitivo. Direct Connect collega l'on-premises, i VPC endpoint servono ad accedere ai servizi AWS."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "ece1ad8b6115",
    "explain": "Con l'elasticità (per esempio Auto Scaling) l'applicazione aggiunge o rimuove risorse in base alla domanda, quindi paghi solo quello che usi anche quando il carico è imprevedibile. AWS non rimborsa differenze, non passa da solo alle Spot e CloudWatch fornisce metriche ma non decide le risorse da solo."
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
      "Security"
    ],
    "id": "94139d022e46",
    "explain": "AWS WAF lavora sul livello 7 (HTTP) e ha regole gestite contro SQL injection e cross-site scripting. Security group e network ACL filtrano solo per IP, porta e protocollo e non guardano il contenuto delle richieste; le policy IAM controllano i permessi sulle API AWS."
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
      "Support"
    ],
    "id": "e899260a27b0",
    "explain": "Le AWS Quick Start (oggi Partner Solutions, nella AWS Solutions Library) sono distribuzioni di riferimento automatizzate per soluzioni diffuse, pronte in pochi clic secondo le best practice. Il Well-Architected Framework dà principi, non deploy pronti; CloudFront è una CDN; CodeCommit è un repository Git."
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
    "id": "7c0f98396f85",
    "explain": "RDS è un database relazionale gestito: AWS automatizza provisioning, patch, backup e Multi-AZ, quindi l'amministrazione diventa molto più semplice. La durabilità a 11 nove è di S3; RDS non scala automaticamente la potenza in base al carico (lo fa Aurora Serverless) e cambiare CPU e RAM richiede di modificare la classe dell'istanza."
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
      "Database"
    ],
    "id": "5387e2c9cf31",
    "explain": "Se il cliente vuole gestire lui stesso il database relazionale (installazione, patch, backup) deve installarlo su un'istanza EC2. Route 53 è il DNS, ElastiCache è una cache in memoria, DynamoDB è NoSQL e gestito da AWS."
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
      "Cloud Concepts"
    ],
    "id": "25d6848a8f9d",
    "explain": "Per aumentare la disponibilità le istanze vanno distribuite su più Availability Zone della stessa Regione. Il tipo di prezzo (Reserved o Spot) non cambia la disponibilità, anzi le Spot possono essere interrotte; 'più Regioni ma stessa AZ' è impossibile, perché ogni AZ appartiene a una sola Regione."
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
      "IAM"
    ],
    "id": "2ef0edd24de4",
    "explain": "Le policy IAM (e le bucket policy) definiscono quali utenti possono fare cosa su un bucket S3. Una coppia di chiavi serve per collegarsi in SSH a EC2, Inspector analizza vulnerabilità, i security group proteggono istanze e non i bucket S3."
  },
  {
    "q": "Quale servizio AWS permette alle aziende di collegare un Amazon VPC a un data center on-premises? (Scegline DUE)",
    "opts": [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "AWS Direct Connect."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Networking"
    ],
    "id": "0c519d2087a7",
    "explain": "Per collegare un VPC a un data center on-premises ci sono due opzioni: AWS Site-to-Site VPN (tunnel cifrato su Internet, rapido da attivare) e AWS Direct Connect (linea privata dedicata). Redshift è un data warehouse, API Gateway espone API."
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
      "CloudWatch"
    ],
    "id": "a176d1439fea",
    "explain": "CloudWatch raccoglie metriche come l'utilizzo della CPU delle istanze EC2 e può creare allarmi e dashboard. CloudTrail registra le chiamate API, i VPC Flow Logs registrano il traffico di rete, Config registra le configurazioni."
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
      "Shared Responsibility"
    ],
    "id": "000140f98eed",
    "explain": "Il firmware e l'hypervisor degli host fisici che fanno girare EC2 sono infrastruttura AWS, quindi responsabilità di AWS. Gestire gli accessi (IAM), cifrare i dati in transito e aggiornare il sistema operativo guest sono responsabilità del cliente."
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
      "Support"
    ],
    "id": "69b8c7fe43a6",
    "explain": "Forum (oggi AWS re:Post), blog, whitepaper e documentazione sono risorse gratuite. Il supporto tecnico richiede un piano a pagamento (Developer o superiore), i Professional Services sono consulenza a pagamento, i corsi universitari hanno un costo."
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
      "S3"
    ],
    "id": "3d773fbf7624",
    "explain": "S3 può ospitare un sito web statico (HTML, CSS, JS, immagini) direttamente da un bucket, a basso costo e senza server. Glacier è archiviazione con recupero lento, DynamoDB è un database, EFS è un file system per istanze e non serve contenuti web."
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
      "Shared Responsibility"
    ],
    "id": "a36327b2e493",
    "explain": "Le edge location fanno parte dell'infrastruttura globale di AWS: gestirle è solo compito di AWS. Sicurezza delle applicazioni e dati lato client sono del cliente; la gestione delle patch è un controllo condiviso (AWS sull'infrastruttura, il cliente sul sistema operativo guest e sulle applicazioni)."
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
      "Well-Architected"
    ],
    "id": "ea89e907471b",
    "explain": "I sei pilastri sono: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability. Più AZ, cifratura e alta disponibilità sono pratiche o obiettivi che compaiono dentro i pilastri, non pilastri."
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
      "Support",
      "Security"
    ],
    "id": "e47bcad25597",
    "explain": "Tra i controlli di sicurezza di Trusted Advisor c'è proprio 'Security Groups – Specific Ports Unrestricted', che segnala regole aperte a 0.0.0.0/0. Inspector cerca vulnerabilità software nelle istanze, CloudWatch raccoglie metriche, CloudTrail registra le chiamate API."
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
      "Well-Architected"
    ],
    "id": "6761183747ac",
    "explain": "Spezzare un monolite significa separare i componenti in modo che comunichino tramite code o API (loose coupling) e possano scalare in modo indipendente (design for scalability). Monitoraggio manuale, server fissi e dipendenza da singoli componenti sono anti-pattern del cloud."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "ee077f39425c",
    "explain": "L'elasticità (aggiungere e togliere risorse in base alla domanda) è un principio chiave del cloud: eviti di indovinare la capacità. Predisporre per il picco o usare istanze enormi è il modo di pensare on-premises e spreca denaro; Scrum è un metodo di sviluppo, non un principio di architettura."
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
      "Governance"
    ],
    "id": "36bd4ab13abf",
    "explain": "AWS Systems Manager Patch Manager applica automaticamente le patch alle istanze EC2 secondo una pianificazione (maintenance window), anche su molte istanze insieme. Farlo a mano non è efficiente, la console RDS gestisce solo database RDS (non database installati su EC2), Config segnala la non conformità ma non installa patch."
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
      "DevOps & Tools"
    ],
    "id": "fb8330afe9a1",
    "explain": "Gli SDK AWS (Python/boto3, Java, JavaScript…) sono librerie che permettono al codice di un'applicazione di chiamare le API AWS. La Management Console è l'interfaccia web per le persone, CodePipeline automatizza il rilascio, Config registra le configurazioni."
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
      "Cloud Concepts"
    ],
    "id": "2e85f97b0ebc",
    "explain": "Il calcolo elastico riduce il TCO perché paghi solo la capacità che usi davvero, invece di comprare server dimensionati per il picco. La single tenancy fa aumentare i costi; cifratura e responsabilità condivisa riguardano la sicurezza, non riducono direttamente il costo totale."
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
      "Cloud Concepts"
    ],
    "id": "e4f27d8df50f",
    "explain": "Uno dei sei vantaggi del cloud è smettere di spendere soldi per gestire data center e concentrarsi su ciò che differenzia il business. Nel cloud non controlli l'hardware di rete né scegli i fornitori di hardware, e la sicurezza permissiva non è mai un vantaggio."
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
    "explain": "Le categorie di Trusted Advisor sono: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits (Service Quotas) e Operational Excellence. 'Utilizzo delle istanze', 'Infrastruttura' e 'Capacità di storage' non sono categorie."
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
    "explain": "CloudWatch raccoglie metriche (e log), permette di impostare soglie con gli allarmi e di inviare notifiche (per esempio tramite SNS). Il repository di codice è CodeCommit, l'analisi delle minacce è GuardDuty, il web application firewall è WAF."
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
      "Shared Responsibility"
    ],
    "id": "79de2ac4714f",
    "explain": "Cifrare i dati lato client e configurare le network ACL sono attività del cliente (sicurezza NEL cloud). Le patch del sistema operativo di RDS le applica AWS perché è un servizio gestito; formazione del personale e controlli ambientali dei data center sono di AWS."
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
    "explain": "La gestione delle patch è un controllo condiviso: AWS corregge l'infrastruttura, il cliente corregge sistema operativo guest e applicazioni. Gli altri controlli condivisi sono la gestione della configurazione e la consapevolezza e formazione. I controlli fisici, la sicurezza della zona e l'audit dei data center sono solo di AWS."
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
      "Billing & Cost"
    ],
    "id": "4eccfd81d53c",
    "explain": "La console AWS Billing and Cost Management è il punto unico dove paghi le fatture, vedi i costi e usi strumenti come Budgets e Cost Explorer. La Consolidated Billing è una funzione di Organizations, CloudWatch monitora risorse, QuickSight crea dashboard di BI."
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
      "Cloud Concepts"
    ],
    "id": "d0c6d03422b9",
    "explain": "Grazie alle economie di scala AWS riduce periodicamente i prezzi (ha abbassato i prezzi oltre 100 volte dal lancio). Nuovi tipi di istanza, scalabilità e affidabilità sono vantaggi reali ma derivano da altro, non dalle economie di scala."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "2773cb8d4951",
    "explain": "Con la Consolidated Billing l'utilizzo di tutti gli account dell'organizzazione viene sommato, quindi si raggiungono prima le fasce di prezzo per volume (per esempio su S3 o sul trasferimento dati). Le SCP limitano permessi, le RI All Upfront danno sconto per impegno e non per volume, Cost Explorer analizza i costi."
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
      "Networking",
      "Storage"
    ],
    "id": "9250bbc2ea6c",
    "explain": "Storage Gateway dà alle applicazioni on-premises accesso a storage su AWS (S3 e altri), e Direct Connect collega con una linea privata il data center ad AWS: sono entrambi servizi per un'architettura ibrida. EBS è un disco per EC2, Connect è un contact center, CloudFront è una CDN."
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
      "EC2"
    ],
    "id": "0bf6b603ed6b",
    "explain": "Elastic Load Balancing è un servizio gestito che scala automaticamente la propria capacità all'aumentare del traffico e lo distribuisce sulle istanze. CodePipeline gestisce i rilasci, EBS è un disco, Direct Connect è una linea dedicata con banda fissa."
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
      "S3"
    ],
    "id": "3827aa21de85",
    "explain": "Amazon S3 è object storage con capacità praticamente illimitata e durabilità di 11 nove (99,999999999%). Redshift è un data warehouse, EFS è un file system (non object storage), ECS esegue container."
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
      "Cloud Concepts"
    ],
    "id": "52b8574bf540",
    "explain": "Le Availability Zone sono il mattone dell'alta disponibilità: distribuendo l'applicazione su più AZ resiste al guasto di un intero data center. Direct Connect è una linea di rete, i data center non si scelgono direttamente, un VPC è una rete isolata e da solo non dà alta disponibilità."
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
      "Security",
      "VPC"
    ],
    "id": "72258f99f7cc",
    "explain": "Le network ACL hanno regole di DENY esplicite, quindi possono bloccare un intervallo di IP a livello di subnet; AWS WAF può bloccare richieste da IP o reti specifiche (IP set) davanti all'applicazione web. I security group non hanno regole di deny; Trusted Advisor, Direct Connect e Organizations non bloccano traffico."
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
      "Well-Architected"
    ],
    "id": "95285c127982",
    "explain": "Accoppiare debolmente i componenti (loose coupling) fa sì che il guasto o il cambiamento di uno non blocchi gli altri. Nel cloud si preferisce scalare in orizzontale (più istanze) e non in verticale, si evitano i monoliti e non c'è alcun obbligo di usare database commerciali."
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
      "Governance"
    ],
    "id": "be0c276d9dc8",
    "explain": "CloudTrail registra ogni chiamata API dell'account (da console, CLI e SDK): chi, cosa, quando e da dove. È lo strumento di audit. CloudWatch monitora le prestazioni, Config registra le configurazioni delle risorse, AWS Health mostra eventi dei servizi AWS."
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
      "Security",
      "Governance"
    ],
    "id": "578e6bf9106c",
    "explain": "AWS Artifact è il portale self-service per scaricare i report di conformità e certificazione di AWS (SOC, ISO, PCI). Il Concierge è un team di supporto per fatturazione e account dell'Enterprise Support, Certificate Manager gestisce i certificati SSL/TLS, Trusted Advisor dà raccomandazioni."
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
      "Cloud Concepts"
    ],
    "id": "f0fbbfbfb913",
    "explain": "Il cloud riduce il TCO e trasforma le spese di capitale (capex) in spese operative variabili più basse: niente hardware da comprare in anticipo, si paga solo ciò che si usa. Il cloud riduce il capex invece di aumentarlo, e AWS non offre pagamenti dilazionati o linee di credito come vantaggio standard."
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
      "S3"
    ],
    "id": "1daf39d45d16",
    "explain": "S3 può servire un sito web statico direttamente da un bucket (static website hosting). Route 53 è il DNS (può puntare il dominio al bucket ma non ospita contenuti), QuickSight crea dashboard, X-Ray traccia le richieste delle applicazioni distribuite."
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
      "Cloud Concepts",
      "CloudFront"
    ],
    "id": "2375abead9b6",
    "explain": "Portata globale: puoi distribuire l'applicazione in più Regioni vicine ai clienti e usare le edge location di CloudFront per servire i contenuti con bassa latenza. Translate non traduce siti di terze parti, Comprehend analizza il testo ma non risponde alle domande, Elastic Load Balancing lavora dentro una sola Regione."
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
      "Cloud Concepts"
    ],
    "id": "c66fabfd5233",
    "explain": "L'infrastruttura globale AWS è fatta di Regioni, Availability Zone ed edge location (più Local Zones e Wavelength). Resource group, security group e AMI sono funzionalità dei servizi, non componenti dell'infrastruttura globale."
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
      "Shared Responsibility"
    ],
    "id": "0ad70664ac1c",
    "explain": "La cifratura dei dati è responsabilità del cliente: decide lui cosa cifrare e come gestire le chiavi. Controlli di accesso fisico, smaltimento sicuro dei dischi e gestione dei rischi ambientali riguardano i data center, quindi sono di AWS."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "eedfe07d5982",
    "explain": "La Consolidated Billing si attiva creando un'organizzazione in AWS Organizations dall'account che pagherà (management account) e invitando gli altri account. Budgets non unisce le fatture, il supporto non lo fa per te e caricare le fatture in Redshift produce solo un report, non una fatturazione consolidata."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "862376a8fbd8",
    "explain": "In un confronto di TCO si considerano i costi che il cloud elimina: data center fisico, sicurezza del data center, alimentazione, raffreddamento, hardware e personale per gestirli. Gestione dei progetti, licenze antivirus e sviluppo software restano uguali in entrambi i casi, quindi non incidono sul confronto."
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
      "Database",
      "RDS"
    ],
    "id": "301f5d8b62a0",
    "explain": "Con i servizi gestiti come RDS ed ElastiCache è AWS ad applicare le patch e ad aggiornare il sistema operativo e il motore, spesso in modo automatico durante la finestra di manutenzione. Non garantiscono prestazioni superiori e il cliente deve comunque scegliere tipo e dimensione dell'istanza; le istanze guaste le sostituisce AWS."
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
      "Networking",
      "Route 53"
    ],
    "id": "c944a1ff1066",
    "explain": "Il Virtual Private Gateway è il lato AWS di una VPN Site-to-Site (e di Direct Connect) e collega il VPC all'on-premises; Route 53 può risolvere i nomi sia per le risorse in cloud sia per quelle on-premises (anche con i Resolver endpoint). Load balancer, Auto Scaling e metriche predefinite di CloudWatch lavorano sulle risorse AWS."
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
      "EC2"
    ],
    "id": "463e0a7f3cdd",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più destinazioni (istanze EC2, container, IP), anche in più AZ, e controlla il loro stato di salute. Il DNS è Route 53, le metriche sono CloudWatch, cambiare il numero di istanze è compito di Auto Scaling."
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
      "DynamoDB"
    ],
    "id": "1a13814f97b5",
    "explain": "DynamoDB è il database NoSQL gestito e serverless di AWS, con latenza di pochi millisecondi a qualsiasi scala. Redshift è un data warehouse, RDS è relazionale, S3 è object storage."
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
      "Security",
      "Governance"
    ],
    "id": "76f2b5be1155",
    "explain": "AWS Artifact fornisce on-demand i report e le certificazioni di conformità di AWS. Attenzione alla trappola sul nome: Certificate Manager gestisce i certificati SSL/TLS, non i 'certificati' di conformità. Lambda esegue codice, Inspector cerca vulnerabilità."
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
      "Cloud Concepts",
      "Route 53",
      "CloudFront"
    ],
    "id": "5b0cda823e77",
    "explain": "Route 53 e CloudFront sono servizi globali, come IAM e WAF per CloudFront. EC2, DynamoDB e S3 sono regionali: i nomi dei bucket S3 sono unici a livello globale e la console li mostra tutti insieme, ma ogni bucket vive in una Regione."
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
      "IAM"
    ],
    "id": "1056e788d56a",
    "explain": "I gruppi IAM servono proprio a questo: metti gli utenti nel gruppo e la policy collegata vale per tutti. Collegare la stessa policy a ogni utente funziona ma è difficile da gestire; un ruolo si assume temporaneamente e non è un contenitore di utenti; i user pool di Cognito servono per gli utenti delle applicazioni."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "0153a2fd7f05",
    "explain": "Usare più Availability Zone è un principio fondamentale per affidabilità e alta disponibilità. Componenti strettamente accoppiati e capacità in eccesso vanno contro le best practice; usare open source è una scelta, non un principio di architettura."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "dede68db1659",
    "explain": "AWS Organizations, tramite la Consolidated Billing, somma l'utilizzo di tutti gli account per ottenere sconti sui volumi. Server Migration Service migrava server, Budgets invia avvisi, Trusted Advisor dà raccomandazioni."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "c9f5544727d1",
    "explain": "AWS Marketplace è il catalogo digitale dove trovi, compri e distribuisci software di terze parti (AMI, SaaS, container) nel tuo account, con la fattura che arriva insieme a quella AWS. Config registra le configurazioni, OpsWorks gestisce Chef e Puppet, l'SDK serve a programmare."
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
      "VPC"
    ],
    "id": "816d05dc5c6a",
    "explain": "Amazon VPC crea una rete virtuale isolata logicamente dentro AWS, con subnet, tabelle di routing e gateway. Config registra configurazioni, Route 53 è il DNS, Direct Connect collega la tua sede ad AWS."
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
    "explain": "L'hardware fisico (server, storage, rete dei data center) è responsabilità di AWS. Configurare le applicazioni, proteggere accessi e dati e gestire le AMI personalizzate che crei sono responsabilità del cliente."
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
      "CloudFront",
      "Cloud Concepts"
    ],
    "id": "d39d78b0b668",
    "explain": "CloudFront mette in cache i contenuti nelle edge location, punti di presenza molto più numerosi delle Regioni e vicini agli utenti finali. Regioni e Availability Zone ospitano le risorse, il VPC è una rete privata."
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
    "explain": "La MFA aggiunge un secondo fattore (codice dell'app, chiave di sicurezza) oltre alla password: anche se la password viene rubata, l'account resta protetto. Cloud Directory era un servizio di directory, verificare i ruoli non aggiunge un livello di autenticazione, CloudTrail registra ma non protegge l'accesso."
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
      "Governance"
    ],
    "id": "236e816ede84",
    "explain": "CloudTrail registra ogni chiamata API, compresa TerminateInstances, con l'identità di chi l'ha fatta, l'ora e l'IP di origine. CloudWatch vede che l'istanza si è fermata ma non chi l'ha terminata, X-Ray traccia le richieste delle applicazioni, IAM gestisce i permessi."
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
      "SNS",
      "CloudWatch"
    ],
    "id": "0c89e6255132",
    "explain": "Quando un allarme CloudWatch cambia stato può pubblicare su un topic SNS, che invia la notifica via email, SMS o ad altri sistemi. CloudTrail registra le API, Trusted Advisor dà raccomandazioni, Route 53 è il DNS."
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
      "Security"
    ],
    "id": "91a28c6cc625",
    "explain": "L'AWS Acceptable Use Policy elenca gli usi vietati dei servizi AWS (attività illegali, spam, attacchi, accesso non autorizzato a sistemi). Trusted Advisor, IAM e la Billing Console non contengono queste regole."
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
      "Cloud Concepts"
    ],
    "id": "73a0e7f7ec63",
    "explain": "È il primo vantaggio del cloud: sostituire grandi investimenti iniziali di capitale (capex) con costi variabili più bassi (opex) pagati in base all'uso. L'opzione A dice il contrario; predisporre capacità fissa per il picco e usare dimensioni fisse sono approcci on-premises."
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
      "Cloud Concepts"
    ],
    "id": "5fb0ac988513",
    "explain": "Auto Scaling sostituisce le istanze non sane e adegua la capacità, e distribuire le risorse su più Availability Zone protegge dal guasto di un data center: insieme aumentano la disponibilità. Le network ACL filtrano traffico e non controllano la salute dei servizi, spostare istanze in un'altra Regione non è alta disponibilità, i point of presence servono alla distribuzione di contenuti."
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
      "Well-Architected"
    ],
    "id": "cef1490faa6e",
    "explain": "Distribuire il carico su più risorse (scalabilità orizzontale) elimina i single point of failure e permette di scalare. Dipendenze fisse, una sola istanza o una sola Availability Zone creano punti unici di guasto."
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
      "IAM"
    ],
    "id": "9ce1a0a01a6f",
    "explain": "Una password policy robusta prevede la scadenza periodica delle password e il divieto di riusare quelle precedenti. Usare la stessa password altrove, conservarla in chiaro o disabilitare la MFA sono pratiche pericolose."
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
      "Support",
      "Migrazione & DR"
    ],
    "id": "a91be5588549",
    "explain": "Per un aiuto pratico alla migrazione puoi ingaggiare gli AWS Professional Services (consulenti di AWS che, per esempio, configurano una landing zone) oppure un partner dell'AWS Partner Network (APN). Il supporto tecnico risolve problemi ma non esegue progetti, il Marketplace vende software, Amazon Connect è un contact center."
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
      "Support"
    ],
    "id": "cefaea904e78",
    "explain": "Il Concierge Support Team (incluso nell'Enterprise Support) è composto da esperti di fatturazione e gestione degli account. Le indicazioni sull'architettura le dà il Technical Account Manager, i problemi tecnici si gestiscono con i casi di supporto, AWS non sviluppa le applicazioni per te."
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
      "Cloud Concepts"
    ],
    "id": "12774a794110",
    "explain": "Un'applicazione distribuita su più Availability Zone continua a funzionare anche se una AZ si guasta: è altamente disponibile. La portata globale riguarda più Regioni, l'elasticità riguarda adattare la capacità alla domanda, le economie di scala riguardano i prezzi."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "fa2de906fca1",
    "explain": "Il vincolo di un'unica area geografica impone una sola Regione; l'alta disponibilità si ottiene distribuendo le istanze su almeno due Availability Zone di quella Regione. Più Regioni violerebbero il requisito normativo; subnet e placement group da soli non garantiscono separazione fisica tra data center."
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
      "Billing & Cost"
    ],
    "id": "1cb958f002bf",
    "explain": "Il Pricing Calculator ha sostituito sia il Simple Monthly Calculator sia il TCO Calculator, oggi ritirati: stimi il costo su AWS e lo confronti con i tuoi costi on-premises. Trusted Advisor e Cost Explorer lavorano su risorse e costi già esistenti in AWS."
  },
  {
    "q": "Un'azienda ha più account AWS dentro AWS Organizations e vuole applicare il vantaggio delle Istanze Reserved Amazon EC2 a un solo account. Quale azione deve intraprendere?",
    "opts": [
      "Acquistare le Istanze Reserved dall'account master pagante e disattivare la condivisione delle Istanze Reserved.",
      "Abilitare gli avvisi di fatturazione nella console AWS Billing and Cost Management.",
      "Acquistare le Istanze Reserved nei singoli account collegati e disattivare la condivisione delle Istanze Reserved a livello dell'account pagante.",
      "Abilitare la condivisione delle Istanze Reserved nella console AWS Billing and Cost Management."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "EC2"
    ],
    "id": "a352b278144d",
    "explain": "In un'organizzazione lo sconto delle Reserved Instances è condiviso per default tra tutti gli account. Per applicarlo a un solo account si acquistano le RI in quell'account collegato e, dall'account di gestione (pagante), si disattiva la condivisione delle RI per quell'account. Comprandole nell'account pagante con condivisione disattivata, lo sconto andrebbe all'account pagante e non al reparto voluto; gli avvisi di fatturazione non c'entrano."
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
      "Security",
      "Support"
    ],
    "id": "d50e6cb9183f",
    "explain": "Il team AWS Trust & Safety (Abuse) riceve segnalazioni di abusi provenienti da risorse AWS: tentativi di intrusione, spam, malware, DDoS da IP di AWS. Le interruzioni di una AZ si vedono sull'AWS Health Dashboard, i problemi di accesso a S3 e di pagamento si gestiscono con il supporto o con l'assistenza alla fatturazione."
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
      "Lambda"
    ],
    "id": "4202f7c9ba8b",
    "explain": "AWS Lambda è serverless: carichi il codice e AWS gestisce server, scalabilità e disponibilità, e paghi solo per invocazioni e durata. EC2 e Lightsail sono server virtuali che gestisci tu; ElastiCache (nella forma classica a nodi) richiede di scegliere tipo e numero di nodi."
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
      "VPC"
    ],
    "id": "fe0c5725a777",
    "explain": "Subnet e Internet gateway sono componenti di un VPC, insieme a tabelle di routing, NAT gateway, security group e network ACL. Oggetti e bucket appartengono a S3, le chiavi di accesso a IAM."
  },
  {
    "q": "AWS Budgets può essere usato per:",
    "opts": [
      "impedire a un determinato utente di creare una risorsa",
      "inviare un avviso quando l'utilizzo delle Istanze Reserved scende sotto una certa percentuale",
      "impostare limiti alle risorse negli account AWS per evitare spese eccessive",
      "dividere una fattura AWS su più metodi di pagamento"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "8bf90d1a88b5",
    "explain": "Oltre ai budget di costo e di utilizzo, AWS Budgets permette budget di utilizzo e copertura delle Reserved Instances (e dei Savings Plans): ti avvisa se l'utilizzo delle RI scende sotto la percentuale che hai scelto. Budgets non è un sistema di limiti: non blocca la creazione di risorse (per quello servono IAM o SCP; le Budgets actions possono al massimo applicare una policy dopo l'avviso) e non divide la fattura su più metodi di pagamento."
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
      "IAM"
    ],
    "id": "c6e67ecf1d0f",
    "explain": "MFA (secondo fattore oltre alla password) e una password policy robusta rendono più sicuro l'accesso alla console. Secrets Manager conserva credenziali per le applicazioni, Certificate Manager gestisce certificati SSL/TLS, i security group filtrano il traffico verso le istanze."
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
      "Support",
      "Security"
    ],
    "id": "c5237fa6708b",
    "explain": "Tra i controlli di sicurezza di Trusted Advisor ci sono i permessi dei bucket S3 (bucket aperti al pubblico) e la MFA sull'utente root. Le interruzioni dei servizi si vedono sull'AWS Health Dashboard, le patch software si gestiscono con Systems Manager, il numero di utenti non è un controllo."
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
      "Security"
    ],
    "id": "1ff1ff2abdb5",
    "explain": "AWS KMS crea e gestisce le chiavi crittografiche usate per cifrare e decifrare i dati, integrandosi con S3, EBS, RDS e altri servizi. Le chiavi di accesso (access key) di utenti IAM o root si gestiscono in IAM e non hanno a che fare con KMS, e nemmeno i dispositivi MFA."
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
      "Support"
    ],
    "id": "f00e2bcbd68c",
    "explain": "Trusted Advisor analizza l'account e dà raccomandazioni, tra cui risparmi sui costi (istanze poco usate, IP elastici inutilizzati) e rischi di sicurezza dovuti ai permessi (bucket S3 aperti, security group troppo permissivi). Non analizza il codice delle applicazioni (lo fa Inspector), non corregge da solo e non rileva istanze compromesse (lo fa GuardDuty)."
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
      "Cloud Concepts"
    ],
    "id": "6a1aa9fe8696",
    "explain": "Nel cloud AWS mantiene l'infrastruttura fisica e si occupa della pianificazione della capacità dei server fisici: tu smetti di indovinare la capacità. La sicurezza delle applicazioni, lo sviluppo e la pianificazione dei costi dei server virtuali restano responsabilità del cliente."
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
      "Well-Architected",
      "RDS"
    ],
    "id": "a42595dd06d3",
    "explain": "RDS Multi-AZ fa failover automatico su un'altra Availability Zone in caso di guasto: è una scelta del pilastro Reliability (resistere ai guasti e ripristinarsi). Non migliora le prestazioni (la standby non riceve letture), costa di più e non riguarda la sicurezza."
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
      "Networking"
    ],
    "id": "5f0e38cf48d9",
    "explain": "AWS VPN (tunnel cifrato su Internet) e AWS Direct Connect (linea privata dedicata) collegano la rete on-premises ad AWS. Amazon Connect è un contact center, Cognito gestisce gli utenti delle app, Managed Services è un servizio di gestione operativa."
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
      "Cloud Concepts"
    ],
    "id": "d489d6d892c8",
    "explain": "È la definizione di Availability Zone: uno o più data center distinti con alimentazione, rete e connettività ridondanti, in strutture separate. Una Regione è un'area geografica che contiene più AZ; le edge location sono punti di presenza per CloudFront e Route 53."
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
      "VPC"
    ],
    "id": "89b1cdf61245",
    "explain": "I VPC Flow Logs registrano le informazioni sul traffico IP (IP di origine e destinazione, porte, ACCEPT/REJECT) verso e da interfacce di rete, subnet o VPC. Security group e network ACL filtrano il traffico ma non lo registrano, l'interfaccia di rete è la scheda virtuale dell'istanza."
  },
  {
    "q": "Quale servizio AWS può essere usato per scalare automaticamente un'applicazione in su e in giù senza dover prendere decisioni di pianificazione della capacità?",
    "opts": [
      "AWS Auto Scaling",
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
      "EC2"
    ],
    "id": "460da45fe025",
    "explain": "AWS Auto Scaling (ed EC2 Auto Scaling) aggiunge e rimuove capacità automaticamente in base alla domanda, con politiche come il target tracking: non devi pianificare la capacità. Redshift è un data warehouse, CloudTrail registra le API. Lambda scala da sola le proprie funzioni, ma il servizio pensato per scalare un'applicazione esistente è Auto Scaling."
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
    "explain": "Il Concierge Support Team (esperti di fatturazione e account) è incluso solo nei piani Enterprise (Enterprise On-Ramp ed Enterprise): tra le opzioni, è l'unico vantaggio non disponibile negli altri piani. Trusted Advisor (almeno i controlli di base) e i casi di supporto sono disponibili anche negli altri piani, Amazon Connect è un servizio di contact center."
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
      "RDS"
    ],
    "id": "00599cbd0f1f",
    "explain": "Amazon RDS for MySQL è un database relazionale gestito: AWS si occupa di provisioning, patch, backup automatici e failover, quindi non servono amministratori per le attività di routine. DynamoDB e DocumentDB sono NoSQL (richiederebbero di riscrivere l'applicazione), ElastiCache è una cache in memoria."
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
      "Cloud Concepts"
    ],
    "id": "a226727d966b",
    "explain": "Le Regioni sono già disponibili nel tuo account: basta selezionarle e iniziare a creare risorse (alcune Regioni più recenti vanno solo abilitate con un clic). Non servono nuovi contratti, le AZ non si spostano e la console è la stessa per tutte le Regioni."
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
    "explain": "Un Dedicated Host è un server fisico intero assegnato a te, con visibilità su socket e core: permette di usare licenze legate al server fisico (BYOL) e soddisfa i requisiti di conformità. Le Dedicated Instances girano su hardware dedicato ma senza controllo né visibilità sul server fisico; Spot e Reserved sono modelli di prezzo su hardware condiviso."
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
    "explain": "KMS (chiavi gestite da AWS su HSM condivisi) e CloudHSM (HSM hardware dedicati a te) generano chiavi di cifratura. Macie trova dati sensibili, Certificate Manager emette certificati SSL/TLS, Secrets Manager conserva password e chiavi API ma non genera chiavi crittografiche per cifrare dati."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "0e3e37d904fa",
    "explain": "Il TCO Calculator produceva report dettagliati sui risparmi stimati spostando l'infrastruttura on-premises su AWS. Oggi è stato ritirato e sostituito da Migration Evaluator e dal Pricing Calculator, ma all'esame la risposta 'TCO' resta valida. Cost Explorer e Budgets lavorano su costi già sostenuti in AWS, Migration Hub traccia l'avanzamento delle migrazioni."
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
      "Support",
      "Migrazione & DR"
    ],
    "id": "dc51d374e2cc",
    "explain": "AWS Professional Services (consulenti di AWS) e i partner dell'AWS Partner Network possono valutare le tue applicazioni e pianificare la migrazione. Trusted Advisor analizza risorse già su AWS, Systems Manager gestisce istanze, Secrets Manager conserva credenziali."
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
    "explain": "AWS CloudHSM fornisce moduli di sicurezza hardware (HSM) dedicati a un solo cliente, validati FIPS 140-2 livello 3: le chiavi le controlli solo tu. KMS usa HSM gestiti e condivisi da AWS, Secrets Manager conserva credenziali, Directory Service fornisce Active Directory gestito."
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
      "Shared Responsibility"
    ],
    "id": "72046ae944d8",
    "explain": "Il cliente configura security group e network ACL e applica le patch al sistema operativo delle sue istanze EC2 (IaaS). Su RDS le patch del sistema operativo le applica AWS; dismissione dei dischi e accesso fisico ai data center sono responsabilità di AWS."
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
      "Lambda"
    ],
    "id": "26d881bb48b6",
    "explain": "Lambda è nato per l'event-driven: la funzione parte in risposta a un evento (upload su S3, messaggio SQS, chiamata API Gateway, modifica DynamoDB) e paghi solo l'esecuzione. EC2 e Beanstalk tengono server sempre accesi, Lumberyard era un motore per videogiochi."
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
      "Cloud Concepts"
    ],
    "id": "039f53fdd34a",
    "explain": "AWS è pay-as-you-go: niente contratti a lungo termine né impegni minimi, puoi smettere quando vuoi. AWS è responsabile della sicurezza DEL cloud (quella NEL cloud è del cliente), i server si creano in minuti e non in giorni, e le applicazioni le gestisce il cliente."
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
    "explain": "La replica tra Regioni (CRR) copia automaticamente gli oggetti in un bucket di un'altra Regione, nello stesso account o in un account diverso. Richiede il versioning ATTIVO su entrambi i bucket, e il fatto che le Regioni siano diverse è proprio lo scopo della funzione."
  },
  {
    "q": "Di cosa è responsabile un utente quando esegue un'applicazione nel cloud AWS?",
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
      "Shared Responsibility"
    ],
    "id": "e5fdd1867397",
    "explain": "Il software applicativo e i suoi aggiornamenti sono responsabilità del cliente (sicurezza NEL cloud). Hypervisor, hardware fisico e controllo degli accessi ai data center sono di AWS: i clienti non visitano i data center e non forniscono elenchi di persone autorizzate."
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
      "Cloud Concepts"
    ],
    "id": "66ec892fc602",
    "explain": "L'agilità è la capacità di sperimentare e rilasciare in fretta, perché le risorse sono disponibili in minuti: riduce il time to market. Elasticità significa adattare la capacità alla domanda, alta disponibilità e affidabilità riguardano la resistenza ai guasti."
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
      "Billing & Cost",
      "CloudWatch"
    ],
    "id": "315a5f3db2b4",
    "explain": "Il Cost and Usage Report contiene il dettaglio più completo di costi e utilizzo dell'account; gli avvisi di fatturazione con gli allarmi CloudWatch sulla metrica EstimatedCharges ti avvisano quando la spesa supera una soglia. Pagine prodotto e Price List API mostrano i listini, non la tua spesa; il Simple Monthly Calculator stimava costi futuri."
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
      "Route 53"
    ],
    "id": "d6fe7d565f91",
    "explain": "Route 53 è il DNS di AWS: registra nomi di dominio, risolve i nomi in indirizzi IP e fa routing (latency, geolocation, failover) con health check. La cifratura in transito e i certificati SSL sono compito di ACM, la connessione dedicata è Direct Connect."
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
      "Storage"
    ],
    "id": "5065bacb653d",
    "explain": "EFS (file system condiviso NFS) ed EBS (dischi a blocchi per EC2) servono a conservare file, come anche S3. SNS invia notifiche, ECS esegue container, EMR elabora big data: nessuno dei tre è uno storage."
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
      "SQS"
    ],
    "id": "aff99b230663",
    "explain": "Amazon SQS conserva in modo durevole i messaggi in coda finché un consumatore non li elabora: è lo strumento per disaccoppiare sistemi distribuiti. Storage Gateway collega lo storage on-premises a AWS, SES invia email, S3 conserva oggetti (non messaggi in coda)."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "8de9b4b048b8",
    "explain": "'Risparmi quando prenoti' (save when you reserve) descrive l'impegno di 1 o 3 anni con Reserved Instances o Savings Plans. 'Paghi a consumo' è il pay-as-you-go, 'paghi meno usando di più' sono gli sconti per volume, 'paghi meno man mano che AWS cresce' sono le riduzioni di prezzo dovute alle economie di scala."
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
    "explain": "Il right-sizing (scegliere la dimensione adatta all'uso reale e verificarla di nuovo dopo la migrazione) evita di pagare istanze sovradimensionate. Le architetture Multi-Region aumentano i costi; le On-Demand Capacity Reservations si applicano a EC2 e i Savings Plans non coprono RDS."
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
      "RDS",
      "Storage"
    ],
    "id": "ee19a6c53f48",
    "explain": "Lo storage delle istanze RDS è basato su volumi Amazon EBS (gp2/gp3, io1/io2), dischi a blocchi. I backup automatici e gli snapshot vengono salvati su S3, ma lo storage primario del database è EBS. Glacier serve per archiviare, EFS è un file system condiviso."
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
      "DevOps & Tools"
    ],
    "id": "897e156958df",
    "explain": "AWS X-Ray traccia le richieste mentre attraversano i microservizi e mostra dove si accumula la latenza o dove avvengono gli errori (service map). CodePipeline gestisce i rilasci, Inspector cerca vulnerabilità, CloudTrail registra le chiamate API ma non misura le prestazioni."
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
      "DynamoDB"
    ],
    "id": "5be9c3b65928",
    "explain": "S3 (classi Standard) e DynamoDB replicano automaticamente i dati su più Availability Zone di una Regione, senza configurazione. Un volume EBS vive in una sola AZ, Redshift (nella configurazione classica) gira in una sola AZ e Snowball è un dispositivo fisico."
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
      "RDS"
    ],
    "id": "4677fa3a8f82",
    "explain": "Multi-AZ crea una standby sincrona in un'altra AZ con failover automatico; le Read Replica, che si possono promuovere a database principale (anche in un'altra Regione), migliorano disponibilità e scalabilità delle letture. Le patch automatiche non aumentano la disponibilità, Regioni ed edge location non sono funzionalità di RDS."
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
      "CloudFront"
    ],
    "id": "0708a9c1aa68",
    "explain": "CloudFront mette in cache i contenuti nelle edge location in Asia e vicino all'Asia, così gli utenti asiatici li ricevono con meno latenza senza spostare l'applicazione. Più AZ nella stessa Regione restano in California; cambiare provider o rifare il sito non risolve il problema in modo efficiente."
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
      "IAM"
    ],
    "id": "2bed8188bbb2",
    "explain": "IAM controlla chi (utenti, gruppi, ruoli) può fare quali azioni su quali risorse di tutti i servizi AWS. RDS è un database, le network ACL filtrano il traffico di rete, EMR elabora big data."
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
      "EC2",
      "Cloud Concepts"
    ],
    "id": "c29065ad9adf",
    "explain": "EC2 è IaaS (Infrastructure as a Service): AWS fornisce server virtuali, rete e storage e tu gestisci sistema operativo e applicazioni. Elastic Beanstalk è un esempio di PaaS, un'applicazione web pronta come Gmail è SaaS."
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
      "Well-Architected"
    ],
    "id": "7ad8b0de1cc9",
    "explain": "Disaccoppiare i componenti (loose coupling, per esempio con SQS o SNS) fa sì che possano scalare, guastarsi ed evolvere in modo indipendente. La sicurezza fisica e l'hardware sono responsabilità di AWS, le policy IAM regolano i permessi e non le prestazioni."
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
      "S3"
    ],
    "id": "a2bf4a0ae9b8",
    "explain": "S3 è lo storage a oggetti ideale per foto e video: capacità illimitata, durabilità di 11 nove e accesso via HTTP. EBS e Instance Store sono dischi legati a un'istanza (l'Instance Store perde i dati quando l'istanza si ferma), SQS è una coda di messaggi."
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
    "explain": "Le classi Glacier sono pensate per dati a lungo termine poco consultati: archivi 'attivi' (Glacier Instant Retrieval permette accesso in millisecondi a dati letti raramente) e dati analitici storici. Siti dinamici, database attivi e cache richiedono accessi frequenti e veloci."
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
      "Elastic Beanstalk"
    ],
    "id": "ca93e40b3892",
    "explain": "Elastic Beanstalk è PaaS: carichi il codice e lui automatizza il deploy creando istanze, load balancer e Auto Scaling. Il motore di calcolo per ECS è Fargate (o EC2), il file storage per AWS e on-premises è EFS, il NoSQL è DynamoDB."
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
      "Security"
    ],
    "id": "d613603f733c",
    "explain": "Amazon Inspector valuta automaticamente le istanze EC2 (e le immagini dei container e le funzioni Lambda) per vulnerabilità software e raggiungibilità di rete non voluta. Kinesis elabora flussi di dati; security group e network ACL filtrano il traffico ma non valutano vulnerabilità."
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
    "explain": "I clienti ereditano completamente da AWS i controlli fisici e ambientali dei data center. Gestione delle patch e consapevolezza e formazione sono controlli condivisi; i controlli del database (accessi, configurazione) restano almeno in parte al cliente."
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
    "explain": "Un database che resta acceso per tre anni è il caso tipico delle Reserved Instances di RDS; tra le opzioni proposte Partial Upfront risparmia più di No Upfront (All Upfront risparmierebbe ancora di più). On-Demand costa di più e RDS non offre istanze Spot."
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
      "Cloud Concepts"
    ],
    "id": "4dec61149b6e",
    "explain": "Portata globale: puoi distribuire l'applicazione in Regioni vicine agli utenti internazionali e usare la rete di edge location (CloudFront) in pochi minuti, riducendo la latenza. Elasticità, durabilità e alta disponibilità non risolvono la distanza fisica dagli utenti."
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
      "Billing & Cost"
    ],
    "id": "2b143d0dac1b",
    "explain": "I Compute Savings Plans si applicano a EC2, Lambda e Fargate (gli EC2 Instance Savings Plans solo a EC2; esistono anche Savings Plans per SageMaker). Batch è gratuito e si paga solo l'EC2 o il Fargate sottostante, Outposts e Lightsail hanno prezzi propri."
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
      "Migrazione & DR"
    ],
    "id": "4b16256f87ad",
    "explain": "Nessun tempo di inattività accettabile, anche per un disastro che colpisce un'intera area, richiede la strategia DR più forte: multi-site active-active su un'altra Regione, con entrambe le Regioni che servono traffico. Più AZ proteggono da guasti locali ma non regionali; le edge location non eseguono workload; i backup in un'altra subnet stanno nella stessa AZ o Regione e richiedono tempo per il ripristino."
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
      "Support"
    ],
    "id": "65ff8248e2ec",
    "explain": "I limiti dei servizi (oggi Service Quotas) esistono e per molti si può chiedere un aumento al supporto (o tramite la console Service Quotas); Trusted Advisor ha controlli dedicati che mostrano quando ti avvicini a un limite. I limiti valgono per account e Regione, non per utente IAM, e le notifiche non le invia SES."
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
      "DevOps & Tools"
    ],
    "id": "fa13908b3f2f",
    "explain": "La AWS CLI permette di gestire servizi e risorse da riga di comando e quindi di automatizzare tutto con script. La console è grafica, Service Catalog pubblica prodotti approvati, OpsWorks gestisce configurazioni con Chef e Puppet."
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
    "explain": "Direct Connect (linea privata) e VPN (Site-to-Site su Internet) sono le due opzioni di connettività per il cloud ibrido. Artifact fornisce report di conformità, Cloud9 era un IDE, CloudTrail registra le chiamate API."
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
    "explain": "L'Application Load Balancer lavora a livello 7 (HTTP/HTTPS) e distribuisce le richieste in modo uniforme tra le istanze, con routing per percorso o host. Il Network Load Balancer è di livello 4 (TCP/UDP), adatto a prestazioni estreme ma non specifico per HTTP; Auto Scaling cambia il numero di istanze ma non distribuisce traffico; Auto Recovery recupera un'istanza guasta."
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
      "RDS",
      "Database"
    ],
    "id": "d1f6513524b5",
    "explain": "Amazon Aurora è il database relazionale di AWS compatibile con MySQL e PostgreSQL; con Aurora Serverless la capacità scala automaticamente in base alla domanda (e lo storage cresce da solo fino a 128 TiB). Neptune è un database a grafo, RDS for SQL Server e RDS for PostgreSQL non sono compatibili con MySQL."
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
      "Security",
      "VPC"
    ],
    "id": "16cd728d156a",
    "explain": "Security group e network ACL riducono la superficie d'attacco lasciando passare solo il traffico su IP e porte consentiti, quindi aiutano contro alcuni DDoS. Il servizio dedicato ai DDoS resta AWS Shield (Standard è gratuito). CloudHSM gestisce chiavi, Batch esegue job, IAM controlla i permessi sulle API."
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
      "Analytics"
    ],
    "id": "e38152e0f9ea",
    "explain": "Amazon Redshift è il data warehouse colonnare e gestito di AWS: query SQL veloci su petabyte di dati per analisi e BI. Kinesis elabora dati in streaming, DynamoDB è NoSQL per carichi transazionali, RDS è un database relazionale transazionale (OLTP)."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "6846064b26d3",
    "explain": "Nel TCO si confrontano i costi che cambiano tra on-premises e cloud: hardware fisico, data center, energia, raffreddamento, rete e personale IT. Sviluppo dell'applicazione, ricerche di mercato e analisi di business costano uguale in entrambi i casi."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "54b5eb029014",
    "explain": "EC2 Linux (e Windows) On-Demand è fatturato al secondo, con un minimo di 60 secondi. Alcuni sistemi operativi con licenze specifiche (per esempio alcune distribuzioni commerciali) sono ancora fatturati all'ora, ma Linux standard no."
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
      "Billing & Cost"
    ],
    "id": "df4e8be1e795",
    "explain": "Il prezzo di un'istanza dipende dal tipo di istanza (vCPU, memoria) e dalla località in cui la avvii (i prezzi cambiano da Regione a Regione; la risposta vecchia dice 'Availability Zone' perché indica dove gira l'istanza). Il bilanciamento del carico è un servizio separato con costo proprio, i bucket sono di S3 e gli IP privati sono gratuiti."
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
      "EC2"
    ],
    "id": "6a8260326391",
    "explain": "Una AMI (Amazon Machine Image) cattura sistema operativo, software e configurazione di un'istanza: da essa puoi avviare quante istanze identiche vuoi. Uno snapshot EBS copia un solo volume (andrebbe poi trasformato in AMI), Config non crea modelli di avvio, Aurora è un database."
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
      "Governance"
    ],
    "id": "b223019955bf",
    "explain": "Le Service Control Policy (SCP) di AWS Organizations fissano il massimo dei permessi consentiti in un account o in una OU: anche l'amministratore dell'account non può superarli. Una policy IAM concede permessi dentro un account ma non la applica l'organizzazione; un principal è un'identità; Fargate esegue container."
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
      "Cloud Concepts"
    ],
    "id": "0eaa586b15fd",
    "explain": "Agilità significa avere le risorse in pochi minuti invece che in settimane, così sperimenti e innovi più in fretta. Più Regioni nel mondo è la portata globale, pagare in anticipo per risparmiare riguarda le Reserved Instances, e AWS non fornisce hardware personalizzabile."
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
      "RDS"
    ],
    "id": "9dee4e9f5c57",
    "explain": "RDS riduce il lavoro amministrativo (patch, backup, failover li gestisce AWS) e la capacità di calcolo si può ridimensionare cambiando classe di istanza. Non dà accesso all'host sottostante, non cambia da solo il tipo di istanza in base al carico e non supporta modelli documento o chiave-valore (quelli sono di DynamoDB)."
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
      "Networking"
    ],
    "id": "74e834dda5b5",
    "explain": "AWS Site-to-Site VPN crea tunnel IPsec cifrati su Internet tra la tua rete e il VPC. Direct Connect è una linea privata e di per sé non è cifrata con IPsec; l'Internet Gateway collega il VPC a Internet; AWS IQ è un marketplace di esperti freelance."
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
      "Support"
    ],
    "id": "4d63ccc9c6ff",
    "explain": "Il Business Support è il piano più economico con accesso 24/7 agli ingegneri del supporto via telefono, chat ed email. Il Developer offre solo email in orario lavorativo, il Basic non ha supporto tecnico, l'Enterprise ha anche il 24/7 ma costa di più."
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
      "VPC",
      "Security"
    ],
    "id": "3d86542d597c",
    "explain": "Le network ACL (a livello di subnet, stateless, con regole allow e deny) e i security group (a livello di istanza, stateful, solo allow) controllano il traffico di rete. Coppie di chiavi e chiavi di accesso sono credenziali, le policy IAM controllano i permessi sulle API."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "af9e51f9a57e",
    "explain": "Un'applicazione che si riprende rapidamente dai guasti tollera anche le interruzioni delle Spot, che costano fino al 90% in meno: la transcodifica è un esempio classico di lavoro adatto alle Spot. Reserved richiede un impegno, On-Demand costa di più, Dedicated è la più cara."
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
      "Support"
    ],
    "id": "50574b52f30d",
    "explain": "La Service Health Dashboard (oggi AWS Health Dashboard, vista pubblica) mostra lo stato generale di tutti i servizi in tutte le Regioni. Il Personal Health Dashboard mostra solo gli eventi che riguardano le tue risorse; CloudWatch monitora le tue risorse, non lo stato dei servizi AWS."
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
      "DevOps & Tools"
    ],
    "id": "a86ce9a81785",
    "explain": "Gli SDK AWS esistono per molti linguaggi (Python, Java, JavaScript, Go, .NET…) e permettono di chiamare i servizi dal codice. La CLI è uno strumento da riga di comando, CodeDeploy distribuisce applicazioni, la console è l'interfaccia web."
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
      "Route 53"
    ],
    "id": "91e117974319",
    "explain": "Route 53 è anche un registrar: puoi registrare o trasferire domini e poi gestirne il DNS. Personalize crea raccomandazioni con il machine learning, KMS gestisce chiavi di cifratura, Config registra configurazioni."
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
      "CloudFormation",
      "Elastic Beanstalk"
    ],
    "id": "0c5eebd3c603",
    "explain": "CloudFormation crea l'infrastruttura automaticamente da un template (infrastructure as code) ed Elastic Beanstalk distribuisce automaticamente l'applicazione: entrambi accelerano il rilascio. Migration Hub traccia migrazioni, IAM gestisce permessi, Macie trova dati sensibili in S3."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "8effe565e398",
    "explain": "Trusted Advisor analizza l'account e fornisce raccomandazioni di ottimizzazione dei costi (istanze poco usate, volumi non collegati, IP elastici inutilizzati). Il Pricing Calculator stima i costi futuri, QuickSight crea dashboard, X-Ray analizza le prestazioni delle applicazioni."
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
      "Networking",
      "VPC"
    ],
    "id": "001c6c4474b8",
    "explain": "Transit Gateway è un hub di rete centrale che collega centinaia di VPC e reti on-premises, anche tra Regioni (inter-Region peering tra Transit Gateway). Il VPC peering è punto-punto e non transitivo, quindi con centinaia di VPC diventa ingestibile; Connect è un contact center, i security group filtrano traffico."
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
    "explain": "Vantaggio: le Reserved Instances costano molto meno delle On-Demand (fino a circa il 72%). Svantaggio: richiedono un impegno di 1 o 3 anni. Le Spot (non le Reserved) possono essere interrotte da AWS; le RI convengono per carichi costanti, non periodici; le istanze dedicate costano di più."
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
      "Cloud Concepts"
    ],
    "id": "f4927307f3d1",
    "explain": "Più AZ isolate tra loro in una Regione permettono architetture resilienti e altamente disponibili: se una AZ si guasta le altre continuano a funzionare. Non riducono i costi (il traffico tra AZ si paga), la portata globale viene dalle Regioni e non aumentano la capacità di storage."
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
    "explain": "Per due mesi le Reserved Instances non convengono, perché l'impegno minimo è di un anno. Le istanze devono essere sempre disponibili, quindi niente Spot (possono essere interrotte): On-Demand è la scelta più conveniente."
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
      "Cloud Concepts"
    ],
    "id": "cd430c76915c",
    "explain": "Più Availability Zone significano ridondanza: se un data center si guasta l'applicazione continua sulle altre AZ, quindi aumenta la disponibilità. Non superano i limiti dei servizi, non riducono la latenza per gli utenti globali (servono Regioni o CloudFront) e non aumentano la capacità di per sé."
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
      "Shared Responsibility",
      "Security"
    ],
    "id": "c27e9a7d2c7f",
    "explain": "A fine vita AWS distrugge i dispositivi di storage secondo procedure standard del settore (smagnetizzazione e distruzione fisica, NIST 800-88): è parte della sicurezza DEL cloud. I dischi non vengono mai venduti, rigenerati o conservati."
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
      "DevOps & Tools"
    ],
    "id": "bef6841a79b5",
    "explain": "La AWS Management Console è l'interfaccia web grafica per gestire le risorse. CLI (riga di comando), API (chiamate HTTP) e SDK (librerie per il codice) sono gli altri modi per usare AWS."
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
      "EC2",
      "Cloud Concepts"
    ],
    "id": "984593b7409e",
    "explain": "Scalare in orizzontale (scale out) significa aggiungere altre istanze della stessa dimensione. Sostituire l'istanza con una più grande, aumentarne la potenza o aggiungere RAM è scalabilità verticale (scale up)."
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
      "Governance"
    ],
    "id": "e4631f6a4b8d",
    "explain": "CloudTrail registra ogni chiamata API, compresa TerminateInstances, con l'utente o il ruolo che l'ha eseguita. Inspector cerca vulnerabilità, Trusted Advisor dà raccomandazioni, l'EC2 Instance Usage Report mostrava l'utilizzo e i costi, non chi ha fatto cosa."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "453e657c9e3f",
    "explain": "Il pilastro Reliability riguarda la capacità di riprendersi rapidamente dai guasti e di acquisire risorse automaticamente per soddisfare la domanda. Il privilegio minimo appartiene al pilastro Security; non tutti i servizi sono globali; i rimborsi degli SLA non rendono un sistema affidabile."
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
    "explain": "La divisione delle responsabilità cambia con il servizio: con EC2 (IaaS) il cliente gestisce sistema operativo e patch; con servizi gestiti come RDS o Lambda se ne occupa AWS. Per questo le altre opzioni, con 'sempre' o con un'unica regola per tutti, sono sbagliate."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "e9cb4420ef64",
    "explain": "Con la Consolidated Billing lo sconto delle Reserved Instances viene condiviso per default tra tutti gli account dell'organizzazione: se l'account che le ha comprate non le usa, lo sconto orario si applica alle istanze corrispondenti negli altri account. Le RI non migliorano le prestazioni e la fatturazione consolidata dà vantaggi economici reali."
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
      "Cloud Concepts",
      "Migrazione & DR"
    ],
    "id": "9456021e611d",
    "explain": "Il massimo livello di disponibilità si ottiene con più Regioni (protezione da guasti regionali) e più Availability Zone in ciascuna Regione. Le edge location non eseguono l'applicazione, e subnet e VPC sono costrutti logici che non aggiungono ridondanza fisica."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "662a2d99f493",
    "explain": "Snowball è un dispositivo fisico rinforzato per trasferire in modo sicuro grandi quantità di dati (decine di TB) verso e da AWS, e ha capacità di calcolo integrate (Snowball Edge) per elaborare i dati sul posto. Il trasferimento su scala exabyte era Snowmobile (il camion), lo storage ibrido è Storage Gateway, il catalogo di software è il Marketplace."
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
      "Support"
    ],
    "id": "770120316364",
    "explain": "Il Concierge Support Team, incluso nell'Enterprise Support, è il punto di riferimento per domande su fatturazione e account. L'Health Dashboard mostra eventi dei servizi; il Customer Service è disponibile a tutti ma non è il servizio dedicato e prioritario dell'Enterprise; 'Operations Support' non è un servizio AWS."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "c0ae4e4434c9",
    "explain": "Distribuire istanze in una Regione negli Stati Uniti avvicina l'applicazione agli utenti americani e si fa in pochi minuti, pagando solo ciò che si usa. Amazon Connect è un contact center (il routing basato sulla latenza è di Route 53), un nuovo dominio non sposta i server, costruire un data center è lento e costoso."
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
    "explain": "I gruppi IAM raccolgono più utenti (per esempio un team): colleghi la policy al gruppo e tutti ricevono i permessi. I ruoli danno permessi temporanei da assumere, gli utenti sono singole identità, Organizations organizza account e non persone."
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
      "Migrazione & DR",
      "Database"
    ],
    "id": "25c710afd084",
    "explain": "AWS Database Migration Service (DMS) migra i database mentre il database di origine resta pienamente operativo, replicando anche le modifiche in corso (CDC). Supporta migrazioni omogenee (Oracle→Oracle) ed eterogenee (con lo Schema Conversion Tool). Server Migration Service migrava server interi, Application Discovery raccoglie informazioni, OpsWorks gestisce configurazioni."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "712171208b3d",
    "explain": "Regolare automaticamente la capacità in base alla domanda per non pagare risorse inutilizzate è l'elasticità. Integrare la sicurezza a ogni livello e parallelizzare sono altre best practice, l'architettura monolitica è un anti-pattern."
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
      "Cloud Concepts",
      "Shared Responsibility"
    ],
    "id": "a51b0822d27a",
    "explain": "Con AWS ottieni velocità e agilità (risorse in minuti) e deleghi ad AWS tutta la sicurezza fisica e gran parte di quella dell'infrastruttura di rete. La sicurezza resta in parte tua (responsabilità condivisa), non controlli l'infrastruttura fisica e AWS non gestisce le tue applicazioni."
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
      "Well-Architected"
    ],
    "id": "f15f184887a0",
    "explain": "Disaccoppiare (per esempio con code SQS) riduce le dipendenze tra componenti: se uno si guasta o rallenta, gli altri continuano a funzionare e possono scalare in modo indipendente. Trattare l'applicazione come un'unica unità è il contrario; tracciare le chiamate API è compito di CloudTrail."
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
      "Billing & Cost"
    ],
    "id": "982434f0ed5d",
    "explain": "Gli AWS Cost and Usage Reports contengono il dettaglio di costi e utilizzo (per servizio, risorsa, ora) dei mesi passati, compreso EC2. Budgets serve per gli avvisi, il Pricing Calculator per stime future, Systems Manager per gestire le istanze."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "bc4821b4205d",
    "explain": "La Consolidated Billing somma l'utilizzo dei cinque account, quindi si raggiungono prima gli scaglioni di prezzo più bassi e tutti beneficiano degli sconti sui volumi. Non dimezza i prezzi e non moltiplica il Free Tier (anzi, in un'organizzazione il Free Tier vale una sola volta per tutti gli account)."
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
      "Storage",
      "Security"
    ],
    "id": "42783274f4b1",
    "explain": "Gli snapshot EBS (salvati su S3) permettono di ripristinare il volume, e la cifratura a riposo (con KMS) protegge i dati: sono entrambe responsabilità del cliente. Firmware e data center sono gestiti da AWS e non puoi collegare dischi esterni a EBS."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "d97e767987a6",
    "explain": "Elasticità significa predisporre e rilasciare automaticamente risorse AWS in base alla domanda (per esempio con Auto Scaling). Non riguarda le risorse on-premises; ELB distribuisce traffico ma non crea risorse; ridurre le interdipendenze è il loose coupling."
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
      "Billing & Cost",
      "CloudWatch"
    ],
    "id": "0b2ce4f8c05d",
    "explain": "Un allarme di fatturazione CloudWatch sulla metrica EstimatedCharges, con notifica SNS, e un budget in AWS Budgets con soglia a 2000 $ inviano entrambi un avviso. SES non legge la fattura, CloudTrail non elimina risorse e Connect è un contact center."
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
      "CloudFront"
    ],
    "id": "0a4d60fea177",
    "explain": "CloudFront mette in cache i contenuti nelle edge location, centinaia di punti di presenza vicini agli utenti. Global Accelerator è un servizio diverso, che usa anch'esso la rete di edge ma per instradare il traffico verso la Regione; Regioni e AZ ospitano le risorse di origine."
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
    "explain": "Privilegio minimo significa dare a ogni utente solo i permessi di cui ha bisogno, quando ne ha bisogno, e niente di più. Dare permessi 'di base' a tutti o l'accesso completo agli utenti fidati lo viola, mentre nessun permesso impedirebbe di lavorare."
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
      "Cloud Concepts"
    ],
    "id": "e3c044710353",
    "explain": "I tre modelli di servizio del cloud sono IaaS, PaaS e SaaS. 'Networking as a Service' non è uno dei modelli standard."
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
    "explain": "Video da conservare a lungo e da recuperare solo in casi eccezionali: S3 Glacier Deep Archive è la classe più economica in assoluto, con recupero in 12-48 ore. Intelligent-Tiering costa di più ed è per accessi imprevedibili, EBS è un disco per istanze (costoso per archiviare), il Marketplace vende software."
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
      "Route 53"
    ],
    "id": "c6d6f5c60022",
    "explain": "Amazon Route 53 è il servizio DNS di AWS, altamente disponibile e scalabile, con registrazione domini e health check. Config registra configurazioni, CloudFront è la CDN, EMR elabora big data."
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
    "explain": "AWS Shield protegge dagli attacchi DDoS di rete e trasporto (Standard gratuito, Advanced a pagamento); AWS WAF blocca gli attacchi di livello applicativo, compresi i flood HTTP, con regole di rate limiting. Config, Cognito e KMS non proteggono dai DDoS."
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
      "Database"
    ],
    "id": "293ffeac2508",
    "explain": "Amazon ElastiCache (Redis o Memcached) è una cache in memoria: i dati letti più spesso vengono serviti in microsecondi, alleggerendo il database. OpsWorks gestisce configurazioni, Storage Gateway collega l'on-premises, EBS è un disco e non una cache."
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
    "explain": "Per un solo giorno e senza interruzioni la scelta giusta è On-Demand: nessun impegno e paghi solo il tempo d'uso. Reserved richiede 1 o 3 anni, Spot può essere interrotta, Dedicated costa di più senza motivo."
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
    "explain": "Creare miniature è un lavoro batch che può essere interrotto e ripreso: le Spot sono perfette e costano fino al 90% in meno. Reserved richiede un impegno lungo, On-Demand costa di più, Dedicated è la più cara."
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
      "CloudFront"
    ],
    "id": "af3b1e2530ca",
    "explain": "Amazon CloudFront è la CDN globale di AWS, con centinaia di edge location. VPN e Direct Connect sono connessioni di rete verso AWS, le Regioni sono aree geografiche dell'infrastruttura."
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
      "Security",
      "Governance"
    ],
    "id": "bd96af449f60",
    "explain": "In AWS Artifact, oltre a scaricare i report di conformità, puoi esaminare, accettare e gestire gli accordi con AWS (per esempio il BAA per HIPAA), per un account o per tutta l'organizzazione. Certificate Manager gestisce certificati SSL/TLS, Systems Manager gestisce istanze, Organizations gestisce account."
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
      "DynamoDB",
      "Analytics"
    ],
    "id": "69ec913c06a9",
    "explain": "DynamoDB ed EMR (Elastic MapReduce) sono servizi gestiti: AWS si occupa di server, patch, provisioning e manutenzione. Con EC2 gestisci tu il sistema operativo; VPC e IAM sono funzionalità che configuri tu e non 'servizi gestiti' nel senso di lavoro operativo delegato."
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
      "DynamoDB"
    ],
    "id": "cd06f391181a",
    "explain": "DynamoDB è il database NoSQL gestito di AWS. Aurora è relazionale, EBS è un disco a blocchi e non un database, Redshift è un data warehouse relazionale per l'analisi."
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
      "Support"
    ],
    "id": "e74b16f7e2c6",
    "explain": "Il Technical Account Manager (TAM) dell'Enterprise Support è il punto di contatto dedicato e continuativo: conosce il tuo ambiente, dà indicazioni su architettura e operatività e coordina il supporto. L'Infrastructure Event Management assiste per eventi specifici (un lancio, un picco), i partner sono consulenti esterni, un utente IAM è un'identità."
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
      "Billing & Cost"
    ],
    "id": "a9f45d6e5b83",
    "explain": "Cost Explorer mostra la spesa con grafici e filtri per servizio, account, tag o Regione, con fino a 12 mesi di storico e previsioni. La console VPC gestisce reti; supporto e team finanziario non sono il modo per analizzare la tua spesa."
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
      "IAM",
      "DevOps & Tools"
    ],
    "id": "3e1dda242617",
    "explain": "La CLI si autentica con le chiavi di accesso: Access Key ID e Secret Access Key, configurate con aws configure (oppure con credenziali temporanee). Nome utente e password servono per la console; 'token segreto' e UserID non sono il meccanismo di accesso."
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
      "Security",
      "Support"
    ],
    "id": "51bce8a02b09",
    "explain": "Se risorse AWS vengono usate in modo malevolo (attacchi, spam, intrusioni) si segnala al team AWS Trust & Safety (Abuse), con qualsiasi piano di supporto. Il Concierge (piani Enterprise) si occupa di fatturazione e account; il Customer Service gestisce account e fatture."
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
      "Shared Responsibility"
    ],
    "id": "b5063cca97f2",
    "explain": "I controlli condivisi sono gestione delle patch, gestione della configurazione e consapevolezza e formazione: ognuno se ne occupa per la propria parte. IAM e VPC li gestisce il cliente, le operazioni del data center AWS."
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
    "explain": "ELB controlla lo stato di salute delle istanze e smette di mandare traffico a quelle guaste (rilevamento); Auto Scaling sostituisce automaticamente le istanze non sane (reazione). Athena interroga dati su S3, ECR conserva immagini di container, EC2 da solo non rileva né reagisce ai guasti."
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
      "CloudFront"
    ],
    "id": "70c7efd937e6",
    "explain": "CloudFront distribuisce i video in streaming dalle edge location vicine agli spettatori, con alte velocità di trasferimento in tutto il mondo. SNS invia notifiche, Kinesis Video Streams acquisisce video da dispositivi (per analisi) e non li distribuisce al pubblico, CloudFormation crea infrastruttura."
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
      "RDS",
      "Database"
    ],
    "id": "b944e53532f6",
    "explain": "Amazon Aurora (compatibile MySQL) è gestito e fa backup automatici continui su S3 con ripristino point-in-time. MySQL su EC2 richiede di organizzare tu i backup; DynamoDB e Neptune non sono database MySQL."
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
      "CloudFormation"
    ],
    "id": "137206d9d497",
    "explain": "CloudFormation è il servizio di infrastructure as code: descrivi le risorse in un template YAML o JSON e lui le crea, aggiorna e cancella come uno stack. Config registra configurazioni, SES invia email, EMR elabora big data."
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
      "Shared Responsibility"
    ],
    "id": "90015f2f5417",
    "explain": "La configurazione dei dispositivi dell'infrastruttura (router, switch, hardware di rete dei data center) spetta ad AWS. Cifratura lato client, scelta della cifratura lato server e regole dei security group sono decisioni del cliente."
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
      "Support",
      "Governance"
    ],
    "id": "c77ad7df3743",
    "explain": "L'AWS Health Dashboard offre una vista personalizzata dello stato dei servizi AWS che usi e, per gli eventi che toccano le tue risorse, indicazioni dettagliate su come rimediare. I controlli di stato di Auto Scaling sono di EC2 ed ELB, le raccomandazioni sui costi vengono da Trusted Advisor, le vulnerabilità da Inspector."
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
      "CloudWatch"
    ],
    "id": "5a9013364380",
    "explain": "CloudWatch raccoglie le metriche delle istanze (CPU, rete, status check) e i log, quindi aiuta a capire perché l'applicazione a volte non risponde. Lambda esegue codice, Config registra configurazioni, CloudTrail registra chiamate API."
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
      "Support",
      "Security"
    ],
    "id": "515950f9e62c",
    "explain": "Trusted Advisor analizza l'account e fornisce raccomandazioni di sicurezza (security group aperti, MFA sul root, bucket pubblici, chiavi esposte). Shield protegge dai DDoS ma non dà raccomandazioni, la console è l'interfaccia di gestione, Secrets Manager conserva credenziali."
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
    "explain": "S3 è storage a oggetti: non esegue applicazioni o backend (B è falsa) e scala automaticamente senza interventi manuali (D è falsa). Sono invece vere la capacità illimitata, i limiti per singolo oggetto (fino a 5 TB) e la durabilità a 11 nove."
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
      "Shared Responsibility"
    ],
    "id": "f656c35ce4ae",
    "explain": "Le regole sulle password (password policy IAM) e le regole di accesso alla rete (security group, network ACL) le configura il cliente. Smaltimento dei dischi, accesso fisico e patch dell'infrastruttura di rete sono responsabilità di AWS."
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
      "Support"
    ],
    "id": "07e1fef544f3",
    "explain": "Le AWS Quick Start (oggi Partner Solutions nella AWS Solutions Library) sono distribuzioni di riferimento automatizzate con CloudFormation per tecnologie diffuse come IBM MQ: le avvii in pochi clic. Aurora è un database, CloudWatch monitora, OpsWorks richiede di scrivere le ricette Chef o Puppet."
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
    "explain": "Le Convertible Reserved Instances si possono scambiare con altre RI di famiglia, sistema operativo o tenancy diversi (purché di valore uguale o superiore): danno flessibilità in cambio di uno sconto un po' più basso (fino a circa il 66%). Le Standard RI danno lo sconto massimo ma non si scambiano; 'Elastic RI' e 'Premium RI' non esistono."
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
    "id": "2da3d31a3adb",
    "explain": "Amazon Rekognition analizza immagini e video con il machine learning: riconosce automaticamente oggetti, persone, testo, scene e contenuti inappropriati, senza doverli etichettare a mano. Non applica filigrane né ridimensiona immagini, e non usa Mechanical Turk."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "ff867323f703",
    "explain": "In un confronto di TCO si includono i costi che con il cloud spariscono o cambiano, come la sicurezza fisica del data center. Analisi di business e gestione dei progetti restano uguali; anche l'amministrazione del sistema operativo resta in gran parte al cliente su EC2."
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
      "Shared Responsibility"
    ],
    "id": "acfb1b9d520d",
    "explain": "L'infrastruttura di rete fisica (cavi, router, switch dei data center) è gestita da AWS. Configurare il proprio VPC, scrivere il codice dell'applicazione e gestire il suo traffico (security group, routing) sono compiti del cliente."
  },
  {
    "q": "Quale servizio dovrebbe essere usato per stimare i costi di un nuovo progetto su AWS?",
    "opts": [
      "AWS TCO Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Cost Explorer API",
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
    "id": "bbc2d552c0fb",
    "explain": "Per stimare i costi di un progetto nuovo serviva il Simple Monthly Calculator, oggi sostituito dall'AWS Pricing Calculator. La Cost Explorer API lavora sui costi già sostenuti (e fa previsioni solo partendo dallo storico), quindi non può stimare un progetto che ancora non esiste. Il TCO Calculator confrontava on-premises e AWS, Budgets imposta soglie e avvisi."
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
      "Support",
      "Security"
    ],
    "id": "7ecf25131b7c",
    "explain": "Il controllo di Trusted Advisor 'Security Groups – Specific Ports Unrestricted' segnala i security group che permettono accesso da 0.0.0.0/0 a porte sensibili (per esempio 22, 3389, 3306). Organizations gestisce account, l'Usage Report mostra consumi, la dashboard EC2 non fa questa analisi."
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
      "CloudWatch",
      "Billing & Cost"
    ],
    "id": "e6df934fe014",
    "explain": "Dopo aver attivato gli avvisi di fatturazione, CloudWatch pubblica la metrica EstimatedCharges (nella Regione us-east-1) e puoi creare un allarme che ti avvisa via SNS quando la spesa stimata supera una soglia. Config, X-Ray e CloudTrail non lavorano sui costi."
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
    "explain": "Lo sconto delle Reserved Instances cresce con la durata (3 anni più di 1) e con il pagamento anticipato (All Upfront più di Partial, che è più di No Upfront). Quindi la combinazione più conveniente è All Upfront per 3 anni."
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
      "Shared Responsibility"
    ],
    "id": "79d0e03cb76b",
    "explain": "La distruzione fisica dei supporti di storage a fine vita è compito di AWS (sicurezza DEL cloud). Utenti e gruppi IAM, patch del sistema operativo guest e impostazioni di sicurezza delle istanze sono del cliente."
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
      "Cloud Concepts"
    ],
    "id": "101ff8f8feef",
    "explain": "'Smettere di indovinare la capacità' è uno dei sei vantaggi del cloud: con l'elasticità usi le risorse che servono e scali quando serve. AWS non verifica i tuoi dati, i dati non sono sicuri in automatico (la sicurezza NEL cloud è tua) e la conformità è condivisa."
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
      "CloudFront"
    ],
    "id": "ba10b3311aa8",
    "explain": "CloudFront mette in cache il sito statico nelle edge location vicine agli utenti: latenza più bassa e trasferimenti più veloci. Lambda esegue codice, DynamoDB Accelerator (DAX) è una cache solo per DynamoDB, Route 53 risolve il DNS ma non distribuisce contenuti."
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
      "Elastic Beanstalk",
      "CloudFormation"
    ],
    "id": "82d378cf8e94",
    "explain": "Elastic Beanstalk (deploy automatico dell'applicazione su un'infrastruttura gestita) e CloudFormation (provisioning automatico dell'infrastruttura da template) automatizzano la distribuzione. CodeCommit conserva il codice, Data Pipeline sposta dati, Config registra configurazioni."
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
      "Migrazione & DR"
    ],
    "id": "d6afee9ae873",
    "explain": "Il TCO Calculator stimava i risparmi di una migrazione dall'on-premises ad AWS (oggi sostituito da Migration Evaluator, ma all'esame la risposta resta valida). Budgets e Cost Explorer lavorano su costi AWS già esistenti; il Well-Architected Tool valuta l'architettura secondo i sei pilastri."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "1abbd8ff8d66",
    "explain": "Per l'affidabilità si progetta per il ripristino automatico dai guasti e si usano più Availability Zone. Gestire le modifiche con processi documentati è un'idea on-premises (nel cloud le modifiche si automatizzano); si testa con carichi di picco, non moderati; il ripristino on-premises non è un principio del cloud."
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
      "Security",
      "IAM"
    ],
    "id": "1af1387c0e69",
    "explain": "Se sospetti una compromissione devi cambiare subito password e chiavi di accesso (ruotare o revocare le credenziali) e contattare l'AWS Support. Rimuovere la MFA indebolisce la sicurezza, spostare risorse non risolve e cancellare i log di CloudTrail distrugge le prove che servono all'indagine."
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
      "Cloud Concepts"
    ],
    "id": "278926b59a04",
    "explain": "Alta disponibilità significa che l'applicazione resta accessibile anche se un componente (un'istanza, una AZ) si guasta, grazie alla ridondanza. Il supporto 24/7 non è una proprietà dell'architettura, il pay-as-you-go è un modello di prezzo, distribuire nel mondo è la portata globale."
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
      "Security"
    ],
    "id": "67d0a76962fb",
    "explain": "AWS Shield offre rilevamento sempre attivo e mitigazioni automatiche in linea contro i DDoS (Standard gratuito per tutti, Advanced con protezione e supporto in più). Inspector cerca vulnerabilità, WAF filtra le richieste web secondo regole, ELB distribuisce traffico."
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
      "CloudWatch"
    ],
    "id": "8e07a21d75fa",
    "explain": "CloudWatch raccoglie automaticamente la metrica CPUUtilization delle istanze EC2 e permette di creare allarmi. CloudTrail registra chiamate API, il Cost and Usage Report riguarda i costi, SNS invia notifiche (che un allarme CloudWatch può usare)."
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
    "explain": "Un ruolo IAM è un'identità con un insieme di permessi che può essere assunta temporaneamente da un servizio AWS (per esempio un'istanza EC2), da un utente o da un'identità esterna, senza credenziali permanenti. Non è un utente, non è un gruppo e non è una credenziale MFA."
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
    "explain": "Le Reserved Instances offrono uno sconto rispetto al prezzo On-Demand e, se acquistate per una specifica Availability Zone (RI zonali), riservano anche la capacità in quella AZ. Non danno accesso a tipi di istanza o capacità di rete aggiuntive e le Standard RI non si aggiornano a nuovi tipi."
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
    "id": "139ea9f5808c",
    "explain": "Un gruppo di Auto Scaling distribuito su più Availability Zone sostituisce automaticamente le istanze non sane e aggiunge istanze quando serve, mantenendo l'applicazione disponibile. Opera dentro una Regione (non su più Regioni), non avvicina i contenuti agli utenti (lo fa CloudFront) e non distribuisce le richieste (lo fa ELB)."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "43ce80bf76a5",
    "explain": "Con la Consolidated Billing di AWS Organizations lo sconto delle Reserved Instances acquistate da un account si applica anche alle istanze corrispondenti degli altri account dell'organizzazione. Dedicated Instances, Cost Explorer e Budgets non condividono RI."
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
    "explain": "Le istanze EC2 Linux On-Demand sono fatturate al secondo (minimo 60 secondi), quindi si paga esattamente 3 ore, 5 minuti e 6 secondi."
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
      "ECS / Fargate"
    ],
    "id": "fc919b3337c8",
    "explain": "Lambda (funzioni serverless) ed ECS (container, su EC2 o Fargate) forniscono capacità di calcolo. CodeDeploy automatizza i rilasci, Glacier è storage di archivio, Organizations gestisce account."
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
      "CloudFormation"
    ],
    "id": "6511986a3506",
    "explain": "CloudFormation è il servizio di infrastructure as code: un template descrive le risorse e il servizio le crea automaticamente. GameLift ospita server di videogiochi, Data Pipeline spostava dati, Glue è un servizio ETL."
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
      "Networking",
      "Storage"
    ],
    "id": "0f269d34963a",
    "explain": "Direct Connect (connessione privata dedicata) e Storage Gateway (storage ibrido che collega l'on-premises a S3 e altri servizi) estendono l'architettura on-premises nel cloud. EBS è un disco per EC2, CloudFront è una CDN, Connect un contact center."
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
    "explain": "Direct Connect fornisce una connessione di rete fisica dedicata tra la tua rete e AWS. La VPN passa su Internet pubblico (cifrata ma non dedicata), CloudHSM gestisce chiavi, Amazon Connect è un contact center."
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
      "CloudFront",
      "Security"
    ],
    "id": "7aa6f37b0b08",
    "explain": "CloudFront usa le edge location per la cache dei contenuti, e AWS Shield protegge le edge (insieme a Route 53 e Global Accelerator) assorbendo gli attacchi lontano dalle tue risorse. EC2, RDS ed ElastiCache girano nelle Regioni e nelle Availability Zone."
  },
  {
    "q": "Quale servizio fornirebbe connettività di rete in un'architettura ibrida che include il cloud AWS?",
    "opts": [
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Directory Service",
      "Amazon API Gateway"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ],
    "id": "8e5bf3467d21",
    "explain": "In un'architettura ibrida la connettività di rete tra la sede on-premises e il cloud AWS la fornisce AWS Direct Connect (o in alternativa una VPN). Amazon VPC è la rete virtuale dentro AWS a cui ci si collega, ma da solo non collega l'on-premises; Directory Service fornisce Active Directory, API Gateway espone API."
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
    "explain": "Il TCO Calculator confrontava il costo di un'applicazione in un data center o hosting tradizionale con quello su AWS (oggi ritirato e sostituito da Migration Evaluator e Pricing Calculator). Cost Explorer, Budgets e Cost and Usage Report lavorano solo su costi AWS già sostenuti."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "3abfdec42132",
    "explain": "Con AWS Marketplace il software di terze parti si paga a consumo (a ore, a mese o all'anno) direttamente nella fattura AWS e si avvia con un clic, già preconfigurato. La cifratura resta configurabile da te, gli aggiornamenti vanno comunque gestiti e il software va comunque testato."
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
      "Shared Responsibility"
    ],
    "id": "db9d79176a2c",
    "explain": "Il cliente applica le patch al sistema operativo delle sue istanze e configura i security group. Firmware dell'infrastruttura di rete, hypervisor e sicurezza fisica dei data center sono responsabilità di AWS."
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
      "Governance"
    ],
    "id": "6c41556d0b4b",
    "explain": "AWS Config registra continuamente le configurazioni delle risorse e le loro modifiche nel tempo, e ne verifica la conformità con le regole. Trusted Advisor dà raccomandazioni, GuardDuty rileva minacce, Inspector trova vulnerabilità."
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
      "Support",
      "Security"
    ],
    "id": "577f4283b976",
    "explain": "Trusted Advisor ha un controllo di sicurezza dedicato ai security group con accesso senza restrizioni (0.0.0.0/0) su porte specifiche. CloudTrail registra le API, CloudWatch le metriche, Inspector le vulnerabilità del software."
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
    "explain": "La gestione della configurazione è un controllo condiviso: AWS configura i dispositivi dell'infrastruttura, il cliente configura sistemi operativi guest, database e applicazioni. Gli altri controlli condivisi sono la gestione delle patch e la consapevolezza e formazione."
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
      "CloudFront"
    ],
    "id": "2af4188149e9",
    "explain": "Amazon CloudFront è la CDN di AWS: consegna in modo sicuro (HTTPS, integrazione con Shield e WAF) dati, video e applicazioni con bassa latenza dalle edge location. CloudFormation crea infrastruttura, Direct Connect è una linea privata, Pinpoint invia campagne di marketing."
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
      "Cloud Concepts"
    ],
    "id": "b5354d92b58c",
    "explain": "L'elasticità adegua automaticamente le risorse alla domanda variabile, in aumento e in diminuzione. Sicurezza, affidabilità e alta disponibilità riguardano altri aspetti."
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
      "Security",
      "Support"
    ],
    "id": "a6f94af64743",
    "explain": "Le attività malevole provenienti da indirizzi IP di AWS (DDoS, spam, intrusioni) vanno segnalate per prime al team AWS Trust & Safety (Abuse), tramite il modulo dedicato. Premium Support, TAM e Solutions Architect non sono il canale per le segnalazioni di abuso."
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
      "Cloud Concepts"
    ],
    "id": "ef9c646594b9",
    "explain": "Nel cloud AWS non ci sono impegni o investimenti iniziali e le risorse si predispongono su richiesta in pochi minuti. La sicurezza NEL cloud è del cliente, lo storage si paga e il cliente non controlla l'infrastruttura fisica."
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
      "Governance"
    ],
    "id": "7fecb96b7780",
    "explain": "AWS Organizations gestisce in modo centralizzato più account, e con le SCP applica policy di accesso a tutti gli account o a singole OU. Service Catalog pubblica prodotti approvati, Config valuta la conformità delle risorse, Trusted Advisor dà raccomandazioni."
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
      "Support"
    ],
    "id": "c17fc337f024",
    "explain": "Trusted Advisor è uno strumento online che esegue controlli automatici sull'account e dà raccomandazioni su costi, prestazioni, sicurezza, tolleranza ai guasti, limiti dei servizi ed eccellenza operativa. Non è una persona: i TAM fanno parte dell'Enterprise Support, i partner fanno parte dell'APN."
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
    "explain": "Cost Explorer permette di visualizzare, capire e gestire costi e utilizzo nel tempo, con grafici, filtri e previsioni. Budgets serve per le soglie e gli avvisi, Organizations e la fatturazione consolidata riguardano la gestione di più account."
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
      "Security",
      "Governance"
    ],
    "id": "80d22114c089",
    "explain": "AWS Artifact dà accesso su richiesta ai report di sicurezza e conformità di AWS (SOC, ISO, PCI). CloudTrail registra le API, AWS Health mostra eventi dei servizi, CloudWatch monitora le risorse."
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
      "Cloud Concepts",
      "CloudFront"
    ],
    "id": "31c170bef8e9",
    "explain": "Per clienti in tutto il mondo il cloud offre portata globale: distribuisci l'applicazione in più Regioni vicine agli utenti e usi le edge location di CloudFront per ridurre la latenza. Translate non traduce siti altrui in automatico, Comprehend analizza testi ma non risponde alle domande, ELB lavora dentro una sola Regione."
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
      "Elastic Beanstalk"
    ],
    "id": "1db5a178b51f",
    "explain": "Elastic Beanstalk gestisce automaticamente provisioning della capacità, bilanciamento del carico, Auto Scaling e monitoraggio dello stato dell'applicazione: tu carichi solo il codice. Config registra configurazioni, Route 53 è il DNS, CloudFront è la CDN."
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
      "VPC"
    ],
    "id": "b540804d5e71",
    "explain": "Le network ACL (regole in entrata e in uscita a livello di subnet) sono una funzionalità di Amazon VPC. IAM controlla i permessi sulle API, Amazon Connect è un contact center, API Gateway espone API."
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
      "Cloud Concepts"
    ],
    "id": "4f503c8dc8ec",
    "explain": "Web server in più Regioni aumentano la disponibilità: se un'intera Regione ha problemi l'applicazione continua dalle altre (e gli utenti lontani hanno anche meno latenza). Non aumenta l'accoppiamento né, di per sé, la sicurezza; la durabilità riguarda la conservazione dei dati."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "dcf7afafe953",
    "explain": "Con il pay-as-you-go non compri hardware in anticipo, quindi riduci le spese in conto capitale (capex), sostituite da costi variabili. Non richiede pagamenti anticipati, vale per quasi tutti i servizi AWS e non 'riduce le spese operative': anzi, i costi diventano proprio spese operative."
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
      "Shared Responsibility"
    ],
    "id": "317ea0ac3497",
    "explain": "La sicurezza fisica dell'infrastruttura globale (Regioni, AZ, edge location) è responsabilità di AWS. Ciclo di vita delle credenziali IAM, cifratura dei volumi EBS e configurazione dei firewall (security group) sono del cliente."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "7d500536d76b",
    "explain": "AWS Organizations offre la Consolidated Billing: un'unica fattura per tutti gli account dell'organizzazione. QuickSight crea dashboard, Budgets invia avvisi, Forecast fa previsioni su serie temporali con il machine learning."
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
      "Cloud Concepts"
    ],
    "id": "ef2390625794",
    "explain": "Una Availability Zone è formata da uno o più data center distinti, collegati alle altre AZ della Regione con reti ridondanti a bassa latenza. La Regione contiene più AZ, le edge location servono alla distribuzione dei contenuti."
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
    "explain": "Con On-Demand paghi solo il tempo di utilizzo effettivo (al secondo per Linux), senza impegni. Fare offerte era il vecchio modello delle Spot, pagare in anticipo per una tariffa più bassa è il modello Reserved, e non esiste una tariffa giornaliera fissa."
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
      "Support",
      "Migrazione & DR"
    ],
    "id": "6c395dc4ea5d",
    "explain": "AWS Professional Services (consulenti di AWS) e i partner dell'AWS Partner Network aiutano a valutare le applicazioni e a pianificare la migrazione. Trusted Advisor, Systems Manager e Secrets Manager lavorano su risorse già in AWS."
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
      "CloudFront",
      "Cloud Concepts"
    ],
    "id": "a8a318af0319",
    "explain": "Le edge location portano i contenuti (con CloudFront) e il DNS (con Route 53) vicino agli utenti, riducendo la latenza e migliorando le prestazioni. Non ospitano istanze EC2; la cache è utile per contenuti che cambiano poco, e gli aggiornamenti dipendono dal TTL, non da un ciclo giornaliero."
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
      "DevOps & Tools"
    ],
    "id": "0f59ec92f188",
    "explain": "Con AWS si interagisce tramite Management Console, CLI (riga di comando), SDK (librerie per il codice) e API. On-premises e ibrido sono modelli di distribuzione, SaaS è un modello di servizio."
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
    "explain": "Carichi non interrompibili per tre anni: le Reserved Instances (o i Savings Plans) con durata triennale offrono lo sconto più alto. Spot può essere interrotta, On-Demand costa di più, Dedicated è ancora più cara."
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
      "Governance"
    ],
    "id": "73c71bf0fd75",
    "explain": "AWS Config registra la configurazione delle risorse e le sue modifiche nel tempo e permette di verificarne la conformità con regole. Shield protegge dai DDoS, IAM gestisce i permessi, Inspector trova vulnerabilità."
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
      "Cloud Concepts"
    ],
    "id": "74e1dad237eb",
    "explain": "La portata globale permette di distribuire le applicazioni in Regioni vicine ai clienti e di usare le edge location: è così che si ottiene bassa latenza in tutto il mondo. Tolleranza ai guasti e alta disponibilità riguardano la resistenza ai guasti, il pay-as-you-go il modo di pagare."
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
      "Cloud Concepts"
    ],
    "id": "d526b95a044a",
    "explain": "AWS rende facile l'alta disponibilità (più AZ e servizi gestiti già ridondanti) e si adatta ai cambiamenti della domanda grazie all'elasticità. AWS non sposta i tuoi dati in giro per il mondo (restano nella Regione che scegli), non gestisce l'applicazione e non applica patch alla tua applicazione."
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
      "Shared Responsibility"
    ],
    "id": "16e4d559b1c0",
    "explain": "EC2 è IaaS: sistema operativo, patch di sicurezza e configurazione di rete (security group, firewall del sistema operativo) li gestisce il cliente. RDS, ElastiCache e Fargate sono servizi gestiti, e il sistema operativo sottostante lo gestisce AWS."
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
      "IAM"
    ],
    "id": "bb915e37b5c5",
    "explain": "Per proteggere gli utenti IAM si usano la MFA e una password policy che impone robustezza e scadenza. Rekognition analizza immagini, Shield protegge dai DDoS, i security group filtrano il traffico di rete e non proteggono le identità."
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
      "Storage"
    ],
    "id": "72e050876054",
    "explain": "AWS Storage Gateway è il servizio di storage ibrido: le applicazioni on-premises usano condivisioni file, volumi o librerie a nastro locali, e i dati finiscono in modo trasparente su S3, Glacier o EBS. Snowball trasferisce dati fisicamente, Glacier archivia, EBS è un disco per EC2."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "4a68ab2592cf",
    "explain": "AWS Marketplace è il catalogo dei fornitori di software indipendenti (ISV): puoi trovare, provare, comprare e distribuire software che gira su AWS. Lumberyard era un motore per videogiochi, Artifact fornisce report di conformità, CloudSearch è un motore di ricerca gestito."
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
      "Cloud Concepts"
    ],
    "id": "525cd8cd536a",
    "explain": "Le Regioni AWS sono uno dei componenti dell'infrastruttura globale, insieme ad Availability Zone ed edge location. Alexa è un assistente vocale, Lightsail un servizio di server semplici, Organizations gestisce account."
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
    "explain": "Il prezzo delle Spot varia gradualmente in base a domanda e offerta di capacità inutilizzata (non si fanno più offerte). On-Demand e Reserved hanno prezzi fissi pubblicati; le Convertible sono un tipo di Reserved."
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
      "Networking"
    ],
    "id": "29884f889d4b",
    "explain": "Per far raggiungere alle applicazioni nel VPC le risorse on-premises serve connettività ibrida: una VPN Site-to-Site tra il dispositivo on-premises e un virtual private gateway del VPC, oppure Direct Connect. Service Catalog, Athena e CloudFront non creano un collegamento di rete con l'on-premises."
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
      "Support",
      "Security"
    ],
    "id": "07937aea79f0",
    "explain": "Trusted Advisor ha già un controllo pronto che segnala i security group con accesso illimitato su porte specifiche: basta eseguirlo e leggere i risultati. Controllare ogni security group a mano o scrivere una regola Config con Lambda funziona ma è molto più lento; IAM non gestisce i security group."
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
      "Security",
      "Support"
    ],
    "id": "06ea60cb6dd7",
    "explain": "AWS offre i controlli di sicurezza di Trusted Advisor e la cifratura dei dati (KMS, cifratura lato server di S3, EBS, RDS). I token MFA fisici si comprano da produttori terzi, i penetration test li esegue il cliente (AWS non li fa per te) e non esiste un servizio che rileva contenuti protetti da copyright in S3."
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
      "Security",
      "CloudFront"
    ],
    "id": "3a5797047bae",
    "explain": "AWS WAF blocca gli attacchi di livello applicativo, compresi i flood HTTP, con regole di rate limiting; CloudFront assorbe gli attacchi sulla rete globale delle edge location e include Shield Standard. DynamoDB ed EC2 non mitigano DDoS di per sé, Inspector cerca vulnerabilità."
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
      "EC2"
    ],
    "id": "8ee73f873d02",
    "explain": "Una Amazon Machine Image (AMI) contiene sistema operativo, software e configurazione: avvii un'istanza già preconfigurata. EBS è un disco, Systems Manager gestisce istanze già esistenti, AppStream 2.0 trasmette applicazioni desktop in streaming."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "d3fddce701c4",
    "explain": "Sostenere la crescita di utenti, traffico o dati senza cali di prestazioni è scalabilità ed elasticità: aggiungere risorse quando serve. Pensare in parallelo velocizza l'elaborazione, disaccoppiare riduce le dipendenze, progettare per i guasti riguarda la resilienza."
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
      "Cloud Concepts"
    ],
    "id": "9313e2a3cd12",
    "explain": "Grazie all'elasticità non devi stimare in anticipo l'utilizzo futuro: aumenti o riduci le risorse quando la domanda cambia. La distribuzione globale, la sicurezza e le economie di scala sono vantaggi diversi."
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
      "Security",
      "Governance"
    ],
    "id": "93ebe6f194a6",
    "explain": "AWS Artifact dà accesso ai documenti di sicurezza e conformità di AWS (report SOC, certificazioni ISO, attestazioni PCI) e agli accordi. Le configurazioni delle risorse sono in Config, la formazione è su AWS Skill Builder, la valutazione di sicurezza delle applicazioni la fa Inspector."
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
      "Cloud Concepts"
    ],
    "id": "c5e6147d6784",
    "explain": "AWS ha costi iniziali più bassi (nessun hardware da comprare) e costi variabili più bassi (grazie alle economie di scala). Le altre combinazioni descrivono il modello on-premises o sono contraddittorie."
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
      "CloudFront"
    ],
    "id": "248716365753",
    "explain": "CloudFront mette in cache il sito statico nelle edge location vicine agli utenti: latenza più bassa e trasferimenti veloci. Lambda esegue codice, DAX è una cache solo per DynamoDB, Route 53 risolve i nomi ma non distribuisce contenuti."
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
    "id": "139ea9f5808c-2",
    "explain": "Un gruppo di Auto Scaling distribuito su più Availability Zone sostituisce automaticamente le istanze non sane e ne aggiunge quando serve, mantenendo l'applicazione disponibile. Lavora dentro una Regione, non avvicina i contenuti agli utenti (CloudFront) e non distribuisce le richieste (ELB)."
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
      "Billing & Cost"
    ],
    "id": "93dbf2298a53",
    "explain": "Per prevedere i costi di un'applicazione nuova si usava il Simple Monthly Calculator, oggi sostituito dall'AWS Pricing Calculator. Aurora Backtrack riporta indietro un database, gli allarmi di fatturazione e il Cost and Usage Report lavorano su costi già sostenuti."
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
      "Security",
      "Governance"
    ],
    "id": "d89595ab71f9",
    "explain": "I documenti di conformità di AWS, come i report SOC 1, SOC 2 e SOC 3, si scaricano da AWS Artifact. Inspector trova vulnerabilità, CloudTrail registra API, Certificate Manager gestisce i certificati SSL/TLS."
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
      "Shared Responsibility"
    ],
    "id": "5ba9360fe9c3",
    "explain": "L'hypervisor che fa girare le istanze EC2 fa parte dell'infrastruttura: proteggerlo è compito di AWS. Cifratura lato client, ruoli IAM e password policy sono configurati dal cliente."
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
      "Shared Responsibility"
    ],
    "id": "b05432fea23f",
    "explain": "Il cliente applica le patch al sistema operativo guest e configura i security group. Firmware della rete, hypervisor e sicurezza fisica dei data center spettano ad AWS."
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
      "Analytics"
    ],
    "id": "94f210ca4279",
    "explain": "Amazon Redshift è il data warehouse scalabile e gestito di AWS, pensato per query analitiche su grandi volumi. S3 può fare da data lake ma non è un data warehouse, DynamoDB è NoSQL transazionale, Kinesis gestisce flussi in tempo reale."
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
      "Networking",
      "Storage"
    ],
    "id": "9da6ea8a0736",
    "explain": "Direct Connect (connessione privata dedicata) e Storage Gateway (storage ibrido) estendono l'architettura on-premises nel cloud. EBS è un disco per EC2, CloudFront è una CDN, Connect è un contact center."
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
      "Cloud Concepts"
    ],
    "id": "41ae8a723e43",
    "explain": "Due dei sei vantaggi del cloud: smettere di indovinare la capacità e aumentare velocità e agilità (time to market più breve). Il cloud non ha tariffe fisse mensili, riduce le spese di capitale iniziali e non dà accesso fisico ai data center."
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
      "Cloud Concepts"
    ],
    "id": "3999cda1481f",
    "explain": "Nel cloud le risorse si ottengono in minuti, quindi il personale non aspetta settimane per avere server: è l'agilità. L'hardware non è necessariamente più veloce, la configurazione delle applicazioni resta del cliente e sicurezza e conformità sono condivise."
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
      "DevOps & Tools"
    ],
    "id": "3f07e3a4e9d8",
    "explain": "CodeDeploy distribuisce applicazioni sia su istanze EC2 sia su server on-premises (con un agente), e lo stesso vale per OpsWorks (Chef e Puppet). Elastic Beanstalk e Batch lavorano solo su AWS, X-Ray traccia le richieste."
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
      "Cloud Concepts"
    ],
    "id": "6e75dc861b36",
    "explain": "Agilità significa ridurre il tempo per ottenere nuove risorse da settimane a minuti, così puoi sperimentare e innovare in fretta. Tanti tipi di istanza, servizi gestiti e fattura unica sono vantaggi ma non sono la definizione di agilità."
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
      "Governance"
    ],
    "id": "be1e30241263",
    "explain": "La Consolidated Billing dà un'unica fattura per tutti gli account e somma l'utilizzo, così si raggiungono sconti sui volumi. Non aumenta i limiti dei servizi, non applica uno sconto fisso e il piano di supporto si sottoscrive per ogni account (non si estende da solo)."
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
      "Storage"
    ],
    "id": "27dd22eb2b45",
    "explain": "Un database autogestito che si spegne ogni notte richiede EC2 (per installarlo e gestirlo tu) con volumi EBS, che sono persistenti e conservano i dati quando l'istanza viene fermata. L'instance store perde i dati allo stop; Redshift e DynamoDB sono servizi gestiti, non autogestiti."
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
      "RDS",
      "CloudFormation"
    ],
    "id": "4f804190201d",
    "explain": "Un database RDS si crea dalla Management Console (oppure dalla CLI o dalle API) o in modo automatico con un template CloudFormation. Il Concierge si occupa di fatturazione, S3 conserva oggetti, EC2 Auto Scaling gestisce istanze EC2 e non database RDS."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "409be3ca61bc",
    "explain": "Lo sconto massimo si ha con la combinazione più rigida: RI Standard (non scambiabile), durata 3 anni, pagamento All Upfront, fino a circa il 72%. Le Convertible scontano meno in cambio della flessibilità, 1 anno meno di 3, No Upfront meno di All Upfront."
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
      "CloudWatch"
    ],
    "id": "daa1b648120f",
    "explain": "CloudWatch Logs raccoglie i log in tempo reale (con metric filter e allarmi) e permette di regolare la conservazione da 1 giorno a 10 anni, oppure per sempre. Non invia riepiloghi via SNS in modo nativo, l'integrazione con OpenSearch non è gratuita e il servizio si paga per GB acquisito e conservato."
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
      "Lambda"
    ],
    "id": "b29fa27151a4",
    "explain": "AWS Lambda è un servizio di calcolo completamente gestito (serverless): AWS gestisce server, sistema operativo e scalabilità. EC2 è calcolo che gestisci tu, SWF coordina flussi di lavoro, Aurora è un database."
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
      "Lambda"
    ],
    "id": "4ae9027aa13c",
    "explain": "AWS Lambda permette architetture serverless: gli sviluppatori eseguono codice senza predisporre o gestire server. EC2 richiede di gestire istanze, DynamoDB è un database (serverless, ma non esegue codice), CodeCommit conserva codice sorgente."
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
      "Shared Responsibility"
    ],
    "id": "d52452519e33",
    "explain": "Le patch del sistema operativo delle istanze EC2 sono del cliente, perché EC2 è IaaS. Infrastruttura sottostante, sicurezza fisica e infrastruttura di rete sono responsabilità di AWS."
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
    "explain": "La gestione della configurazione è un controllo condiviso: AWS configura i dispositivi dell'infrastruttura, il cliente configura sistemi operativi guest, database e applicazioni."
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
    "explain": "Amazon Macie usa il machine learning per riconoscere e classificare dati sensibili (dati personali, numeri di carte, credenziali) nei bucket S3. GuardDuty rileva minacce, Inspector vulnerabilità, Shield protegge dai DDoS."
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
      "Billing & Cost",
      "Cloud Concepts"
    ],
    "id": "ff5fe5c7b195",
    "explain": "Il modello di prezzo di AWS è pay-as-you-go: paghi solo ciò che usi, quindi un costo variabile che segue l'utilizzo. Durata fissa, colocation e pianificazione sono tipici dei modelli tradizionali."
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
    "explain": "Il cliente si occupa della cifratura a riposo dei propri dati e della formazione sulla sicurezza dei propri dipendenti (consapevolezza e formazione è un controllo condiviso). NTP dell'infrastruttura, accesso ai data center e smaltimento dell'hardware sono di AWS."
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
      "Governance"
    ],
    "id": "8d1d87235529",
    "explain": "La Consolidated Billing di AWS Organizations somma l'utilizzo degli account per ottenere sconti sui volumi senza spostare nessuna risorsa. Spostare tutto in un unico account ha un impatto enorme, le RI danno sconti per impegno e non per volume, e l'Enterprise Support non dà sconti sui volumi."
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
    "explain": "Lo sconto delle Reserved Instances cresce con la durata (3 anni più di 1) e con il pagamento anticipato (All Upfront più di Partial, più di No Upfront). La combinazione più conveniente è quindi All Upfront per 3 anni."
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
      "Storage"
    ],
    "id": "ccc5531b27ff",
    "explain": "RDS (database transazionale) ed EFS (file system condiviso) sono progettati per letture e scritture continue. Glacier archivia dati poco consultati, Snowball trasferisce dati fisicamente, Redshift è ottimizzato per analisi (molte letture, caricamenti a blocchi) e non per aggiornamenti continui."
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
      "Governance"
    ],
    "id": "8dcb1b5cffbd",
    "explain": "AWS Config mantiene una cronologia delle configurazioni di ogni risorsa: puoi vedere com'era in un dato momento e cosa è cambiato. Inspector trova vulnerabilità, Service Catalog distribuisce prodotti approvati, IAM gestisce i permessi."
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
      "Well-Architected"
    ],
    "id": "3e5194dc6baf",
    "explain": "Le best practice prevedono componenti debolmente accoppiati (loose coupling), che comunicano tramite code, eventi o API e possono guastarsi o scalare in modo indipendente. 'Accoppiati raramente' o 'frequentemente' non sono termini di architettura."
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
    "explain": "Il piano Business include supporto 24/7 via telefono, chat ed email e un numero illimitato di casi e di contatti. Il TAM dedicato, la risposta in 15 minuti per sistemi critici fuori servizio e le revisioni operative sono dell'Enterprise (il Business risponde in meno di 1 ora per un sistema in produzione fuori servizio)."
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
      "Route 53"
    ],
    "id": "b431a0d72319",
    "explain": "Amazon Route 53 è il servizio DNS gestito di AWS. Neptune è un database a grafo, SageMaker è la piattaforma di machine learning, Lightsail offre server virtuali semplici."
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
    "explain": "Un Dedicated Host è un server fisico interamente dedicato a te, con visibilità su socket e core: permette licenze legate al server fisico (BYOL) e soddisfa i requisiti di conformità. Le Dedicated Instances usano hardware dedicato ma non danno controllo né visibilità sul server; Spot e Reserved sono modelli di prezzo."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "541378a84e81",
    "explain": "Le Convertible RI si possono scambiare con RI di attributi diversi (famiglia, sistema operativo, tenancy), purché la nuova prenotazione abbia valore uguale o superiore. Le Standard non si scambiano (si possono solo modificare alcuni attributi o rivendere sul Marketplace); le Scheduled RI non sono più offerte."
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
      "Database"
    ],
    "id": "e0a0ae22e922",
    "explain": "Amazon ElastiCache (Redis o Memcached) mette in cache in memoria i risultati delle query più frequenti, riducendo il carico sul database e la latenza. SQS è una coda, Amazon Machine Learning era un servizio di ML, l'Instance Store è un disco temporaneo di una singola istanza."
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
      "Billing & Cost"
    ],
    "id": "ad0676071b4a",
    "explain": "Le Spot convengono per applicazioni flessibili e tolleranti ai guasti e per ambienti non di produzione (test, sviluppo, batch), perché possono essere interrotte con 2 minuti di preavviso. Carichi con stato, applicazioni che non tollerano interruzioni e database sensibili non sono adatti."
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
    "explain": "Per stimare i costi c'erano il Simple Monthly Calculator e il TCO Calculator (oggi entrambi sostituiti dal Pricing Calculator); i tag di allocazione dei costi aiutano ad attribuire e quindi a stimare i costi per progetto o reparto. Il report di fatturazione dettagliato mostra costi già sostenuti, e 'Cost Estimator' non esiste come strumento."
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
      "EC2"
    ],
    "id": "fe89fdced341",
    "explain": "EC2 Auto Scaling aggiunge e rimuove automaticamente istanze in base alla domanda, così non devi gestire la capacità. ELB distribuisce il traffico, Route 53 è il DNS, CloudFront è la CDN."
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
    "explain": "L'Infrastructure Event Management (assistenza per lanci, migrazioni o eventi di picco) è incluso senza costi aggiuntivi a partire dall'Enterprise On-Ramp; tra le opzioni proposte quindi Enterprise. Con il Business si può acquistare a parte; Developer e Basic non lo prevedono."
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
      "IAM"
    ],
    "id": "94412610a30e",
    "explain": "Le chiavi di accesso (Access Key ID e Secret Access Key) servono per le chiamate programmatiche alle API AWS: CLI, SDK, script. La console usa nome utente e password; alle istanze EC2 si accede con coppie di chiavi SSH; per CodeCommit si usano credenziali Git o chiavi SSH dedicate."
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
      "Analytics"
    ],
    "id": "5cb3b3360d17",
    "explain": "Amazon Athena è serverless: interroghi con SQL standard i file su S3 (CSV, JSON, Parquet) senza caricarli altrove e paghi per i dati scansionati. Glue prepara e cataloga i dati (ETL), Data Pipeline li spostava, CloudSearch è un motore di ricerca."
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
      "Cloud Concepts",
      "DevOps & Tools"
    ],
    "id": "e5ed2b8a261f",
    "explain": "Su AWS le risorse si predispongono in modo programmatico (API, CLI, SDK, CloudFormation) in pochi minuti, senza ordini né attese. AWS non offre un sistema di ticket per chiedere risorse, la validazione del codice non c'entra e non gestisce l'elenco dei tuoi fornitori."
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
      "Governance",
      "CloudWatch"
    ],
    "id": "2a9b364ddcf2",
    "explain": "CloudTrail registra le chiamate API (chi ha fatto cosa) e CloudWatch raccoglie metriche, log ed eventi: insieme danno il quadro dell'attività dell'account. CloudFront è una CDN, Cloud9 era un IDE, CloudHSM gestisce chiavi crittografiche."
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
      "S3"
    ],
    "id": "9001dbaa7bf8",
    "explain": "S3 è un object store (salva oggetti con chiave e metadati, non file in cartelle) con durabilità di 11 nove. Non è un file system: per un file system di rete ci sono EFS o FSx; non è uno storage locale e i bucket vivono in una Regione."
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
      "Migrazione & DR"
    ],
    "id": "bcc3b3a4662c",
    "explain": "Il TCO Calculator stimava i risparmi di una migrazione dall'on-premises ad AWS (oggi sostituito da Migration Evaluator, ma all'esame la risposta resta valida). Budgets e Cost Explorer lavorano su costi AWS già esistenti, il Well-Architected Tool valuta l'architettura."
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
      "Lambda"
    ],
    "id": "fd3070f6275d",
    "explain": "AWS Lambda è il cuore della piattaforma serverless: esegue codice senza server da gestire. EMR richiede cluster di istanze; ELB è un servizio gestito ma non fa parte della categoria 'calcolo serverless'; Mobile Hub era uno strumento per app mobili (oggi Amplify)."
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
    "explain": "I tag di allocazione dei costi (per esempio Progetto=X, Reparto=Y), una volta attivati, permettono di tracciare e raggruppare la spesa nel dettaglio in Cost Explorer e nei report. La fatturazione consolidata unisce le fatture, Budgets avvisa sulle soglie, il Marketplace vende software."
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
      "Support"
    ],
    "id": "1589e7324c9b",
    "explain": "Trusted Advisor esamina l'account e suggerisce sia risparmi (risorse inutilizzate o sottoutilizzate) sia miglioramenti di prestazioni, sicurezza e tolleranza ai guasti. Cost Explorer analizza solo i costi; fatturazione consolidata e dettagliata riguardano le fatture."
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
      "Cloud Concepts",
      "Networking"
    ],
    "id": "7a4c6e0bca3c",
    "explain": "Quando parte dell'applicazione gira nel cloud e parte nel data center aziendale si parla di architettura ibrida. Cloud-native indica applicazioni costruite interamente per il cloud, IaaS è un modello di servizio."
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
    "explain": "L'Auto Scaling aggiunge e rimuove capacità di calcolo al variare del carico. Il bilanciamento del carico e il round robin distribuiscono il traffico sulle risorse esistenti senza crearne di nuove; il failover passa a una risorsa di riserva in caso di guasto."
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
      "DynamoDB"
    ],
    "id": "713ba57f80d4",
    "explain": "DynamoDB è il database NoSQL gestito (e serverless) di AWS. Redshift è un data warehouse, Aurora e RDS for MariaDB sono database relazionali."
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
      "Cloud Concepts"
    ],
    "id": "0c55bb7f1c5e",
    "explain": "Ogni Regione contiene più Availability Zone (almeno tre per le Regioni nuove), e ogni AZ è fatta di uno o più data center. Le edge location sono separate: sono molto più numerose e stanno anche in città che non hanno una Regione."
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
      "Well-Architected",
      "EC2"
    ],
    "id": "f09d8ed41572",
    "explain": "Tanti file indipendenti si elaborano meglio in parallelo su molte istanze: il tempo totale si riduce e, nel cloud, dieci istanze per un'ora costano quanto un'istanza per dieci ore. Una sola istanza grande, l'hardware dedicato o una GPU grande non sfruttano questo principio."
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
      "RDS",
      "EC2"
    ],
    "id": "fb6702eab8dd",
    "explain": "SQL Server può girare su RDS (gestito, motore RDS for SQL Server) oppure installato su un'istanza EC2 (autogestito). Aurora è compatibile solo con MySQL e PostgreSQL, Redshift è un data warehouse, S3 è object storage."
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
      "DevOps & Tools"
    ],
    "id": "0ff1c1d6aaa7",
    "explain": "La CLI usa le chiavi di accesso IAM (Access Key ID e Secret Access Key). Nome utente e password servono per la console, le chiavi SSH per collegarsi alle istanze; le 'chiavi API' sono un concetto di API Gateway, non di IAM."
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
      "Shared Responsibility"
    ],
    "id": "9e934b43de06",
    "explain": "Instradare il traffico dell'applicazione (tabelle di routing, security group, load balancer) è configurazione del cliente. Patch e manutenzione dell'infrastruttura e i controlli fisici e ambientali sono di AWS."
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
    "explain": "Il Technical Account Manager dedicato è incluso nell'Enterprise Support (l'Enterprise On-Ramp ha invece un gruppo di TAM condivisi). Developer, Business e Basic non hanno un TAM."
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
    "id": "2da3d31a3adb-2",
    "explain": "Amazon Rekognition analizza immagini e video con il machine learning e rileva automaticamente oggetti, persone, testo e scene, senza etichettature manuali. Non applica filigrane, non ridimensiona immagini e non usa Mechanical Turk."
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
      "RDS"
    ],
    "id": "c846fc13e901",
    "explain": "Con RDS AWS gestisce la manutenzione del sistema operativo e del motore (patch), oltre a backup e failover. I dati nelle tabelle restano del cliente, il tipo di istanza non aumenta da solo e il motore di database lo scegli tu."
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
      "Well-Architected"
    ],
    "id": "1dedf2bed728",
    "explain": "Il problema è l'accoppiamento stretto: la soluzione è disaccoppiare i componenti (per esempio con code o API) così che ognuno possa continuare a funzionare quando un altro si guasta. Elasticità, parallelismo o più risorse non eliminano la dipendenza tra componenti."
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
      "Support"
    ],
    "id": "773807172dec",
    "explain": "I Consulting Partner dell'APN (oggi Services Partner) sono società di consulenza che progettano, costruiscono e migrano carichi di lavoro su AWS per conto del cliente. I Technology Partner vendono software, il Marketplace è un catalogo di prodotti, Service Catalog gestisce prodotti approvati internamente."
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
      "S3"
    ],
    "id": "f68903293523",
    "explain": "S3 conserva oggetti con accesso immediato, versioning (più versioni dello stesso oggetto) e regole di ciclo di vita (passaggio automatico ad altre classi o cancellazione). Glacier archivia con recupero non immediato, Storage Gateway collega l'on-premises, EBS è storage a blocchi."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "5b6b47424be3",
    "explain": "Distribuire su più AZ significa progettare per i guasti (design for failure): dai per scontato che un componente o un data center possa guastarsi e fai in modo che il sistema continui a funzionare. Automazione, agilità ed elasticità sono principi diversi."
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
      "Governance"
    ],
    "id": "0f6c0a8d83a7",
    "explain": "AWS Organizations consolida più account in un'organizzazione, con gestione centralizzata, OU, SCP e fatturazione unica. IAM gestisce identità dentro un account, lo Schema Conversion Tool converte schemi di database, Config registra configurazioni."
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
      "Shared Responsibility"
    ],
    "id": "01667a3ba056",
    "explain": "La sicurezza NEL cloud è quella del cliente, come la configurazione del firewall (security group, network ACL, firewall del sistema operativo). Edge location, sicurezza fisica e infrastruttura globale sono sicurezza DEL cloud, cioè di AWS."
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
    "explain": "Con il Basic Support non c'è supporto tecnico diretto: si usano forum (oggi AWS re:Post), documentazione e whitepaper, più il servizio clienti per account e fatturazione. TAM e ingegneri di supporto richiedono piani a pagamento; Trusted Advisor è uno strumento, non assistenza."
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
      "Well-Architected"
    ],
    "id": "41e42c2bac54",
    "explain": "I sei pilastri sono Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization e Sustainability. Più AZ, cifratura e alta disponibilità sono pratiche all'interno dei pilastri, non pilastri."
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
    "explain": "Come per le Reserved Instances, la prenotazione di un Dedicated Host dà lo sconto più alto pagando tutto in anticipo (All Upfront), poi Partial e poi No Upfront. Il pagamento orario On-Demand non ha sconti."
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
      "Cloud Concepts"
    ],
    "id": "62d67fed4db7",
    "explain": "Le AZ sono isolate tra loro: un'applicazione distribuita su più AZ resiste al guasto di una di esse. Un disastro che colpisce un'intera Regione richiede più Regioni; le AZ di una Regione sono relativamente vicine (non coprono aree più ampie) e non riducono la latenza per gli utenti."
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
      "Billing & Cost"
    ],
    "id": "847ea29a96c8",
    "explain": "Per stimare il costo di un'applicazione nuova si usava il Simple Monthly Calculator, oggi sostituito dall'AWS Pricing Calculator. 'Si paga On-Demand' non è una stima, QuickSight analizza dati esistenti, AppStream 2.0 trasmette applicazioni desktop."
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
      "Networking"
    ],
    "id": "6871d5c380c5",
    "explain": "Per raggiungere dal VPC le risorse on-premises serve connettività ibrida: una VPN Site-to-Site verso un virtual private gateway del VPC, oppure Direct Connect. Service Catalog, Athena e CloudFront non creano collegamenti di rete con l'on-premises."
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
      "Security"
    ],
    "id": "88ee1246d338",
    "explain": "AWS WAF permette di bloccare le richieste provenienti da un insieme di IP (IP set) o di limitarle con regole di rate limiting, proteggendo l'applicazione web. GuardDuty rileva minacce ma non le blocca, IAM gestisce i permessi, SNS invia notifiche."
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
    "explain": "Con l'infrastructure as code descrivi l'infrastruttura in file (per esempio template CloudFormation) e il provisioning diventa automatico, ripetibile e versionabile. Non migra hardware, non è un audit di terze parti e non significa consegnare il codice dell'applicazione ad AWS."
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
    "explain": "AWS Direct Connect fornisce una connessione di rete dedicata e privata tra i server on-premises e AWS. La VPN passa su Internet pubblico, API Gateway espone API, Amazon Connect è un contact center."
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
      "CloudFormation"
    ],
    "id": "3a669fe78d3f",
    "explain": "CloudFormation serve a modellare l'infrastruttura in un template e a predisporre automaticamente le risorse come uno stack. Il codice applicativo si distribuisce con strumenti come CodeDeploy, i data lake si costruiscono con Lake Formation, i report di fatturazione vengono dai servizi di billing."
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
      "Analytics",
      "Database"
    ],
    "id": "94dce0c11f1e",
    "explain": "Amazon Redshift è un database: un data warehouse relazionale e colonnare per l'analisi. EBS è storage a blocchi, S3 Glacier è storage di archivio, Snowball è un dispositivo per trasferire dati."
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
      "Support",
      "Security"
    ],
    "id": "993447f26931",
    "explain": "Il modo più semplice è eseguire Trusted Advisor: ha già un controllo che segnala i security group con accesso illimitato su porte specifiche. Controllare a mano o scrivere una regola Config con Lambda richiede molto più lavoro; IAM non gestisce i security group."
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
      "Cloud Concepts"
    ],
    "id": "29fe7df37a8f",
    "explain": "AWS rende facile l'alta disponibilità (più AZ, servizi gestiti già ridondanti) e si adatta ai cambiamenti della domanda grazie all'elasticità. I dati restano nella Regione che scegli, e gestione e patch dell'applicazione restano al cliente."
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
      "Security"
    ],
    "id": "daf3a1892886",
    "explain": "Amazon Inspector produce valutazioni automatiche di sicurezza: vulnerabilità software note (CVE) e raggiungibilità di rete non prevista delle istanze EC2. I security group filtrano il traffico ma non producono report, Config verifica configurazioni, Macie cerca dati sensibili in S3."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "3e9a4f5a15cb",
    "explain": "Usare account separati (per esempio in AWS Organizations) per produzione e non produzione separa in modo netto costi, permessi e limiti; la fatturazione consolidata mostra poi la spesa per account. I ruoli IAM non separano i costi, la scelta del servizio non è un criterio sensato, CloudWatch monitora l'uso e non attribuisce costi."
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
      "Support",
      "Security"
    ],
    "id": "b758ab822c40",
    "explain": "AWS Marketplace ha una categoria dedicata alla sicurezza con soluzioni di fornitori terzi (firewall, antivirus, SIEM) pronte da distribuire su AWS. Service Catalog contiene prodotti approvati dalla tua organizzazione, le Quick Start sono distribuzioni di riferimento, CodeDeploy distribuisce codice."
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
      "Storage"
    ],
    "id": "e5ed93fa4302",
    "explain": "Dati da conservare 7 anni per obblighi normativi e consultati raramente: S3 Glacier (in particolare Deep Archive) è la soluzione più economica. S3 Standard costa di più, Snowball serve a trasferire dati, Redshift è un data warehouse costoso."
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
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Cloud Concepts"
    ],
    "id": "45133293f983",
    "explain": "I vantaggi immediati del cloud sono sostituire le spese in conto capitale con spese variabili (si paga solo ciò che si usa) e una maggiore agilità (risorse in minuti). Il cloud non aumenta il personale IT; l'utente non controlla l'infrastruttura fisica (la controlla AWS) e la sicurezza NEL cloud resta al cliente."
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
      "Storage"
    ],
    "id": "e447fd41ead3",
    "explain": "Storage Gateway collega lo storage on-premises al cloud AWS: le applicazioni locali vedono file, volumi o nastri, e i dati vengono salvati su S3, Glacier o EBS. La durabilità di 11 nove è di S3, i petabyte si trasportano con la Snow Family, i dischi per EC2 sono EBS."
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
      "Cloud Concepts"
    ],
    "id": "16a9ecbfad95",
    "explain": "Le Regioni AWS sono aree geografiche separate e isolate: per installare l'applicazione in luoghi geograficamente isolati si distribuisce in più Regioni. Internet gateway, VPC e NAT gateway sono componenti di rete dentro una sola Regione."
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
      "Cloud Concepts"
    ],
    "id": "dd1566c57eca",
    "explain": "Un sistema che resiste al guasto di uno o più componenti continuando a funzionare è altamente disponibile (e tollerante ai guasti). Elasticità e scalabilità riguardano l'adattamento alla domanda, l'agilità la velocità di innovazione."
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
    "explain": "AWS Direct Connect offre una connessione costante e dedicata tra on-premises e AWS, con banda e latenza prevedibili. La VPN passa su Internet, Amazon Connect è un contact center, Data Pipeline spostava dati."
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
    "explain": "Sicurezza e conformità sono condivise: AWS è responsabile della sicurezza DEL cloud (infrastruttura), il cliente della sicurezza NEL cloud (dati, identità, configurazioni). Gli enti regolatori non fanno parte del modello."
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
      "IAM",
      "DevOps & Tools"
    ],
    "id": "52d8b505fa29",
    "explain": "Per usare la CLI serve una chiave di accesso (Access Key ID) con la relativa chiave segreta (Secret Access Key), configurate con aws configure. La password policy e le managed policy non sono credenziali, e la 'chiave API' è un concetto di API Gateway."
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
    "explain": "La cifratura dei volumi EBS usa chiavi gestite da AWS KMS (la chiave predefinita aws/ebs o una chiave tua). Certificate Manager gestisce i certificati per la cifratura in transito, Systems Manager gestisce istanze, Config registra configurazioni."
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
    "explain": "Lambda si paga per numero di richieste (invocazioni) e per durata dell'esecuzione (in GB-secondi, cioè tempo moltiplicato per la memoria assegnata). Il numero di funzioni o di versioni e il linguaggio non incidono sul prezzo."
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
      "Cloud Concepts"
    ],
    "id": "d5c47bec5a89",
    "explain": "Ogni Regione ha più AZ, quindi ci sono più AZ che Regioni; e ci sono molte più edge location (centinaia) che Regioni (qualche decina). Una edge location non è una AZ: serve a CloudFront e Route 53, non ospita le tue istanze."
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
      "Security"
    ],
    "id": "0287cea16cb3",
    "explain": "AWS Shield Standard offre protezione automatica e gratuita contro gli attacchi DDoS più comuni di rete e trasporto (livelli 3 e 4). Le regole WAF sono di AWS WAF, i permessi di IAM e la cifratura di KMS."
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
      "Cloud Concepts"
    ],
    "id": "813a81c34ce3",
    "explain": "Nel cloud non devi comprare server e infrastruttura: il costo dell'hardware per le nuove applicazioni sparisce. Il codice, i penetration test (responsabilità del cliente) e i casi di test restano a tuo carico."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "16c946bc0d57",
    "explain": "AWS Marketplace permette sia di comprare software di terze parti che gira su AWS sia di vendere le proprie soluzioni ad altri clienti AWS. Le Spot non si rivendono (si rivendono le RI Standard, sul Reserved Instance Marketplace), i documenti di conformità sono gratuiti su Artifact, Snowball si ordina dalla console."
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
      "Cloud Concepts"
    ],
    "id": "ea8060e7f52b",
    "explain": "Un'architettura di cloud ibrido unisce risorse on-premises e risorse nel cloud AWS, collegate tra loro (VPN o Direct Connect). Tutto on-premises o tutto in cloud non è ibrido, e on-premises più colocation non coinvolge il cloud."
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
      "Cloud Concepts"
    ],
    "id": "c68df82d910a",
    "explain": "AWS riduce il TCO eliminando o riducendo le grandi spese in conto capitale (server, data center): paghi solo ciò che usi. Le licenze di terze parti restano a tuo carico, le spese operative esistono (sono i costi del cloud) e le applicazioni le gestisci tu."
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
      "Shared Responsibility",
      "Storage"
    ],
    "id": "0be64d6ef9e2",
    "explain": "Fare il backup dei volumi EBS (snapshot) è responsabilità del cliente, come tutto ciò che riguarda i suoi dati. Connettività di AWS verso Internet, patch dell'infrastruttura cloud e sicurezza fisica dei data center sono di AWS."
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
      "Cloud Concepts"
    ],
    "id": "8a83e27bb56a",
    "explain": "Due dei sei vantaggi del cloud: smettere di indovinare la capacità e aumentare velocità e agilità (arrivare prima sul mercato). Il cloud non ha tariffe mensili fisse, riduce le spese di capitale e non dà accesso fisico ai data center."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "71d52c936a7b",
    "explain": "Nel TCO on-premises vanno contati acquisto e installazione dei server e il costo di amministrarli (installazioni, patch, backup, ripristino dai guasti), costi che nel cloud spariscono o si riducono. Commissioni delle carte, penetration test e pubblicità sono uguali in entrambi i casi o non c'entrano con l'infrastruttura."
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
    "explain": "La sicurezza delle applicazioni che il cliente esegue su AWS (codice, autenticazione, dati) è sua. Virtualizzazione, infrastruttura di rete e sicurezza fisica dell'hardware sono di AWS."
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
    "id": "822d17312c83",
    "explain": "Le edge location (usate da CloudFront) mettono in cache i contenuti vicino agli utenti di tutto il mondo, riducendo la latenza. Una Regione 'centrale' resta lontana da molti utenti, una seconda AZ è nella stessa zona geografica e una cache nella Regione non avvicina i contenuti."
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
      "Governance"
    ],
    "id": "932c253e69bb",
    "explain": "AWS Organizations permette di creare nuovi account in modo programmatico e di gestirli centralmente (per automatizzare ancora di più c'è Control Tower con l'Account Factory). QuickSight crea dashboard, Lightsail offre server semplici, Connect è un contact center."
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
      "RDS"
    ],
    "id": "9cafbb161b9e",
    "explain": "Con il deployment Multi-AZ RDS mantiene una standby in un'altra Availability Zone e fa failover automatico: è la funzione di alta disponibilità. Le Reserved Instances riducono i costi, i Provisioned IOPS migliorano le prestazioni di storage, l'Enhanced Monitoring dà metriche più dettagliate."
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
      "Security",
      "Support"
    ],
    "id": "3073420b8727",
    "explain": "Le risorse AWS usate per scopi malevoli (spam, attacchi, malware) si segnalano al team AWS Trust & Safety (Abuse). Shield è un servizio anti-DDoS e non riceve segnalazioni; il Support e i forum non sono il canale previsto."
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
      "Governance"
    ],
    "id": "21d498c3a50e",
    "explain": "CloudTrail registra tutte le chiamate API, comprese quelle fatte dalla console che modificano utenti e account (per esempio CreateUser o AttachUserPolicy). SNS invia notifiche, i VPC Flow Logs registrano traffico di rete, CloudHSM gestisce chiavi."
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
      "Well-Architected"
    ],
    "id": "54c55625305a",
    "explain": "Progettare per l'alta disponibilità (più AZ, componenti ridondanti) è una best practice. Accoppiamento stretto, single point of failure e sovradimensionamento sono anti-pattern del cloud."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "f80edab3a1ec",
    "explain": "Con carichi variabili il vantaggio è avviare le istanze solo quando servono e spegnerle dopo, pagando solo l'uso effettivo. In un data center devi comprare capacità per il picco. La fatturazione è al secondo, non mensile; l'accesso amministrativo non riduce i costi; tenere istanze accese per il picco è proprio lo spreco da evitare."
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
      "Migrazione & DR",
      "Database"
    ],
    "id": "35a68c057851",
    "explain": "AWS Database Migration Service migra i database verso AWS con downtime minimo, mantenendo operativo il database di origine e replicando le modifiche in corso. Storage Gateway collega lo storage on-premises, EC2 è calcolo, AppStream 2.0 trasmette applicazioni desktop."
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
    "explain": "Gli AWS Online Tech Talks (webinar condotti da esperti AWS) e l'AWS Classroom Training (corsi con istruttore, in aula o virtuali) permettono di imparare con un docente. Trusted Advisor è uno strumento, blog e forum sono risorse da consultare da soli."
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
      "IAM"
    ],
    "id": "cab3c2b84825",
    "explain": "MFA e una password policy robusta rendono più sicuro l'accesso alla console. Secrets Manager conserva credenziali delle applicazioni, Certificate Manager gestisce certificati SSL/TLS, i security group proteggono le istanze, non l'accesso alla console."
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
      "VPC"
    ],
    "id": "41dbede721af",
    "explain": "Dalla dashboard VPC si configurano subnet, tabelle di routing, gateway, network ACL e anche i security group (che appartengono a un VPC). CloudFront e Route 53 hanno console proprie, i load balancer si gestiscono dalla console EC2."
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
      "Shared Responsibility"
    ],
    "id": "0e998290b88c",
    "explain": "L'audit della sicurezza fisica dei data center spetta solo ad AWS (i clienti non possono visitarli e consultano i report su Artifact). Le policy IAM, le bucket policy S3 e la revisione dei log CloudTrail sono responsabilità del cliente."
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
      "Governance"
    ],
    "id": "d50fa7972fd8",
    "explain": "La Consolidated Billing dà un'unica fattura per più account e somma l'utilizzo per raggiungere sconti sui volumi. Non aumenta i limiti dei servizi, non dà uno sconto fisso e non estende il piano di supporto agli altri account."
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
      "Database",
      "Cloud Concepts"
    ],
    "id": "2b6ac877dc21",
    "explain": "Con servizi gestiti come RDS, AWS si occupa delle patch del software di database e dei backup automatici. Testare i rilasci, progettare lo schema del database e fare penetration test restano compiti del cliente."
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
      "Cloud Concepts"
    ],
    "id": "e2bb56ec037b",
    "explain": "Le Regioni sono già disponibili nel tuo account: selezioni la Regione e inizi a creare risorse (alcune Regioni più recenti vanno solo abilitate). Non servono contratti nuovi, le AZ non si spostano e la console è la stessa per tutte le Regioni."
  },
  {
    "q": "Perché è vantaggioso usare gli Elastic Load Balancer con le applicazioni?",
    "opts": [
      "Permettono la conversione da Application Load Balancer a Classic Load Balancer.",
      "Sono in grado di gestire i continui cambiamenti negli andamenti del traffico di rete.",
      "Aggiungono e rimuovono automaticamente istanze EC2 in base alla domanda.",
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
    "id": "f7db82395903",
    "explain": "Elastic Load Balancing scala automaticamente la propria capacità e gestisce i continui cambiamenti del traffico, distribuendolo sulle destinazioni sane. Aggiungere e rimuovere istanze è compito di Auto Scaling, i load balancer si pagano a ore e per capacità usata, e la conversione da ALB a CLB non è un vantaggio."
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
    "explain": "Il Business è il piano più economico con risposta entro 1 ora per un sistema di produzione fuori servizio. Il Developer risponde in 12 ore lavorative per un sistema compromesso (24 ore per domande generali), il Basic non ha supporto tecnico; l'Enterprise scende fino a 15 minuti ma costa di più."
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
      "S3"
    ],
    "id": "972b3ca2bbf9",
    "explain": "Per backup durevoli e recuperabili subito, S3 (per esempio Standard-IA) è la scelta più economica, con durabilità di 11 nove. Glacier costa meno ma il recupero non è immediato (tranne Glacier Instant Retrieval, che qui non è indicato); EBS costa di più; l'instance store è effimero."
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
      "Support"
    ],
    "id": "2b5bfed74379",
    "explain": "AWS Professional Services è il team di consulenti di AWS che, con incarichi a pagamento, aiuta i clienti ad adottare il cloud in aree specialistiche (migrazione, sicurezza, dati). L'Enterprise Support è un piano di supporto, i Solutions Architect e gli Account Manager danno indicazioni ma non svolgono progetti a pagamento."
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
    "explain": "Accesso 24/7 via telefono, email e chat e risposta in meno di 1 ora per un sistema di produzione fuori servizio: è il piano Business, il più economico che lo offre. Developer (solo email in orario lavorativo) e Basic non bastano, l'Enterprise costa di più."
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
      "Governance"
    ],
    "id": "9fb07db06871",
    "explain": "AWS Config registra la cronologia delle configurazioni e delle modifiche di ogni risorsa e ne valuta la conformità: è lo strumento per verificare la gestione delle modifiche. Trusted Advisor dà raccomandazioni, CloudWatch monitora metriche, Inspector cerca vulnerabilità."
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
      "Support"
    ],
    "id": "0d9971250bfc",
    "explain": "Trusted Advisor dà raccomandazioni di risparmio basate sull'utilizzo reale e segnala rischi di sicurezza dovuti ai permessi (bucket S3 aperti, security group troppo permissivi). Non analizza il codice delle applicazioni (lo fa Inspector), non corregge da solo e non rileva istanze compromesse (lo fa GuardDuty)."
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
    "explain": "Amazon RDS è il servizio gestito per ospitare database relazionali. Batch esegue lavori di calcolo, Artifact fornisce report di conformità, Data Pipeline spostava dati."
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
    "explain": "Access key ID e secret access key sono credenziali a lungo termine di un utente IAM (o del root, cosa sconsigliata). I gruppi e le policy non hanno credenziali; i ruoli usano credenziali temporanee generate da STS."
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
    "explain": "La cifratura a riposo dei dati è responsabilità del cliente. Cancellazione dei dischi, firmware dell'hardware e cablaggio dei data center sono responsabilità di AWS."
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
      "Storage"
    ],
    "id": "409d506c9aa3",
    "explain": "Amazon EFS è un file system condiviso (NFS), semplice e scalabile, che più server Linux su AWS e on-premises possono montare contemporaneamente. S3 è object storage, Glacier archivia, EBS si collega in genere a una sola istanza."
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
      "IAM"
    ],
    "id": "8badbb649975",
    "explain": "L'accesso programmatico usa una coppia di credenziali: access key ID e secret access key. 'Chiave primaria' e 'chiave secondaria' non sono credenziali AWS, e lo user ID non basta per autenticarsi."
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
      "Shared Responsibility"
    ],
    "id": "067b7c448732",
    "explain": "Consapevolezza e formazione (awareness and training) è un controllo condiviso: AWS forma i propri dipendenti, il cliente i suoi. La chiave per la cifratura lato client e la configurazione dell'istanza EC2 sono del cliente, i controlli ambientali di AWS."
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
      "Storage",
      "EC2"
    ],
    "id": "aa6ce2aca47e",
    "explain": "L'instance store è un disco fisicamente collegato all'host: è veloce ma effimero, e i dati si perdono quando l'istanza viene arrestata o terminata. EBS, EFS e S3 sono storage persistenti."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "3b9c7ea6a7a1",
    "explain": "La fatturazione consolidata somma l'utilizzo degli account, quindi dà accesso ai prezzi per volume (scaglioni più bassi). Non condivide permessi, produce una sola fattura (non più fatture) e non elimina la necessità dei tag per attribuire i costi."
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
      "Lambda",
      "Integration"
    ],
    "id": "d52d73aae76a",
    "explain": "Step Functions (orchestrazione), DynamoDB (database) e SNS (notifiche) sono serverless: niente server da gestire e scalabilità automatica. EC2 ed EMR richiedono di gestire istanze o cluster, quindi le altre combinazioni contengono almeno un servizio non serverless."
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
    "explain": "I Dedicated Hosts danno un server fisico dedicato con visibilità su socket e core, quindi puoi usare licenze legate al server (per esempio Windows Server, SQL Server, Oracle) in modalità BYOL. Spot, Reserved e On-Demand girano su hardware condiviso e senza questa visibilità."
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
      "IAM"
    ],
    "id": "43bf27354ff1",
    "explain": "Il privilegio minimo limita i danni se un utente viene compromesso, e la MFA protegge gli accessi degli utenti privilegiati. CloudTrail registra ma non protegge, CloudFront è una CDN e condividere un utente tra più persone è una pessima pratica."
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
      "CloudFormation"
    ],
    "id": "bbebe519ba21",
    "explain": "AWS CloudFormation è il servizio di infrastructure as code: descrivi le risorse in un template e lui le crea. CodePipeline e CodeDeploy automatizzano rilasci e distribuzione del codice, Direct Connect è una linea di rete."
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
      "Cloud Concepts"
    ],
    "id": "62d67fed4db7-2",
    "explain": "Le AZ sono isolate tra loro: un'applicazione distribuita su più AZ resiste al guasto di una di esse. Un disastro che colpisce un'intera Regione richiede più Regioni; le AZ di una Regione sono vicine (non coprono un'area più ampia) e non riducono la latenza."
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
      "Database"
    ],
    "id": "9e57b631ae24",
    "explain": "Amazon Aurora è compatibile con MySQL ed è progettato per scalare facilmente: storage che cresce da solo, fino a 15 repliche di lettura, Aurora Serverless. Redshift è un data warehouse, DynamoDB è NoSQL, ElastiCache è una cache."
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
      "Well-Architected"
    ],
    "id": "3f80d744d061",
    "explain": "Il loose coupling è un principio chiave: componenti indipendenti che comunicano tramite interfacce, code o eventi. Single point of failure e progettazione monolitica sono anti-pattern, e nel cloud si preferisce la scalabilità orizzontale."
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
      "Cloud Concepts"
    ],
    "id": "070854e36a96",
    "explain": "Con il cloud si passa da spese in conto capitale anticipate (capex, comprare server) a spese operative variabili (opex, pagare a consumo). Le altre opzioni invertono o confondono i due concetti; le spese operative non spariscono."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "82ae330b0c81",
    "explain": "L'isolamento fisico del carico di lavoro su un server dedicato si ottiene con i Dedicated Hosts, quindi nel TCO va considerato quel costo. Reserved e On-Demand sono modelli di pagamento su hardware condiviso e non garantiscono isolamento fisico."
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
      "S3",
      "Storage"
    ],
    "id": "e69cb9dbb6de",
    "explain": "Amazon S3 Glacier è pensato per backup e archivi a lungo termine al costo più basso. RDS è un database, Snowball trasferisce dati, EBS è un disco per istanze e costa di più."
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
    "explain": "Il supporto tecnico via telefono parte dal piano Business (24/7 via telefono, chat ed email). Il Developer offre solo email in orario lavorativo, il Basic nessun supporto tecnico."
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
    "explain": "Le istanze Spot offrono sconti fino al 90% rispetto a On-Demand, perché usano capacità inutilizzata che AWS può riprendersi. Le Reserved arrivano a circa il 72%, i Dedicated Hosts sono più cari."
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
      "CloudFront",
      "S3"
    ],
    "id": "f2ade26eca04",
    "explain": "S3 conserva i file video in modo durevole e scalabile, e CloudFront li distribuisce dalle edge location con la latenza più bassa. 'appGateway' non è un servizio AWS, EFS è un file system per server e Glacier è archiviazione con recupero lento."
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
      "CloudFront"
    ],
    "id": "993edc38c061",
    "explain": "Le edge location consegnano i contenuti vicino agli utenti e, mettendo in cache le risposte, riducono il traffico verso il server di origine. Non ospitano applicazioni, non fanno da cache per database NoSQL (quello è DAX o ElastiCache) e non inviano notifiche."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "b2d7ae2bb0ca",
    "explain": "Il TCO Calculator produceva report dettagliati sui risparmi stimati della migrazione dall'on-premises ad AWS (oggi sostituito da Migration Evaluator e Pricing Calculator). Cost Explorer e Budgets lavorano su costi AWS già esistenti, Migration Hub traccia lo stato delle migrazioni."
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
      "Support"
    ],
    "id": "83a8f79a9372",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista dell'account) mostra in modo personalizzato lo stato dei servizi da cui dipendono le tue risorse, con avvisi e indicazioni. La Service Health Dashboard mostra lo stato generale per tutti, X-Ray traccia le richieste, CloudWatch monitora le tue risorse."
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
      "Cloud Concepts"
    ],
    "id": "8484e9d9b9d6",
    "explain": "Spostandosi nel cloud l'azienda smette di gestire data center e può concentrarsi sulle attività che fanno crescere il business. I costi IT non spariscono (diventano a consumo), non si mettono server dai clienti e le patch dei sistemi guest restano necessarie."
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
      "Migrazione & DR",
      "Cloud Concepts"
    ],
    "id": "fe7465f41649",
    "explain": "Se un disastro colpisce un'intera area geografica serve un'altra area: si distribuisce su più Regioni. Le AZ della stessa Regione sono nella stessa area, un cloud ibrido nella stessa area non protegge e AWS Artifact serve per i report di conformità, non per gli artefatti delle applicazioni."
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
      "Billing & Cost"
    ],
    "id": "e88bd37d1e81",
    "explain": "Le Spot sono ideali per lavori saltuari e interrompibili, che oggi costano di più su On-Demand: possono risparmiare fino al 90%. Un sito web principale, servizi con SLA del 99,999% e un database molto usato non tollerano le interruzioni con 2 minuti di preavviso."
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
      "Cloud Concepts"
    ],
    "id": "b90d5d2692b7",
    "explain": "La Regione si sceglie in base a latenza verso gli utenti, conformità e sovranità dei dati (leggi che impongono dove possono stare i dati), disponibilità dei servizi e prezzo. La lingua dell'applicazione non dipende dalla Regione, il raffreddamento è un costo di AWS e i data center non si visitano."
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
      "Support",
      "Governance"
    ],
    "id": "8e9e94fae4a2",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista dell'account) invia avvisi proattivi quando un evento AWS, come una manutenzione o un guasto, può avere impatto sulle tue risorse. La Service Health Dashboard mostra lo stato generale, Trusted Advisor dà raccomandazioni, l'IEM è assistenza per eventi pianificati."
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
      "Migrazione & DR"
    ],
    "id": "691e12661411",
    "explain": "Le strategie di DR, dalla più economica alla più rapida: backup and restore, pilot light, warm standby e multi-site active-active. Con l'active-active entrambe le sedi servono traffico, quindi il downtime è praticamente nullo, ma è anche la soluzione più costosa."
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
      "DevOps & Tools"
    ],
    "id": "3e97dd90637c",
    "explain": "AWS CodeCommit era il servizio di controllo di versione (repository Git privati e gestiti). CodeStar era un'interfaccia per avviare progetti, la CLI è uno strumento da riga di comando, Cognito gestisce l'autenticazione degli utenti delle app."
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
      "IAM"
    ],
    "id": "366893c0a4db",
    "explain": "MFA e una password policy robusta aumentano la sicurezza degli accessi all'account. Certificate Manager gestisce certificati SSL/TLS, Cognito gestisce gli utenti delle applicazioni (non gli accessi all'account AWS), Organizations organizza più account."
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
      "Support"
    ],
    "id": "f99fa5cfc85d",
    "explain": "AWS Professional Services è il team di consulenti di AWS che, con incarichi a pagamento, accelera l'adozione del cloud in aree specialistiche. Enterprise Support è un piano di supporto, i Solutions Architect e gli Account Manager danno indicazioni ma non svolgono progetti a pagamento."
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
      "Support"
    ],
    "id": "a2e234f51829",
    "explain": "I Consulting Partner dell'APN (oggi Services Partner) sono società di consulenza che progettano e costruiscono carichi di lavoro su AWS per il cliente. I Technology Partner vendono software, il Marketplace è un catalogo, Service Catalog gestisce prodotti approvati internamente."
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
      "Support"
    ],
    "id": "23664041434b",
    "explain": "Trusted Advisor esamina l'account e suggerisce risparmi (risorse inutilizzate o sottoutilizzate) e miglioramenti di prestazioni, sicurezza e tolleranza ai guasti. Cost Explorer analizza solo i costi; fatturazione consolidata e dettagliata riguardano le fatture."
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
    "explain": "I Dedicated Hosts danno un server fisico dedicato con visibilità su socket e core, così puoi usare licenze legate al server (BYOL). Spot, Reserved e On-Demand girano su hardware condiviso."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "23adcdd22991",
    "explain": "Con una domanda variabile convengono l'elasticità (le risorse seguono la domanda) e il pay-as-you-go (paghi solo quelle che usi). Alta disponibilità, sicurezza condivisa e affidabilità sono vantaggi reali ma non riducono i costi di un carico variabile."
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
      "S3"
    ],
    "id": "3be3db32779e",
    "explain": "S3 è un object store (oggetti con chiave e metadati, non file in cartelle) e uno storage durevole (11 nove). Non è un file system: per un file system di rete ci sono EFS o FSx; non è uno storage locale e i bucket vivono in una Regione."
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
      "Networking",
      "Route 53"
    ],
    "id": "c436f9b28bb6",
    "explain": "Il Virtual Private Gateway è il lato AWS di una VPN Site-to-Site e collega il VPC all'on-premises; Route 53 può risolvere i nomi sia per le risorse cloud sia per quelle on-premises. Load balancer, Auto Scaling e metriche predefinite di CloudWatch lavorano sulle risorse AWS."
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
      "Storage"
    ],
    "id": "bfdff71e57cc",
    "explain": "Un database autogestito che si spegne ogni notte richiede EC2 (lo installi e gestisci tu) con volumi EBS, che conservano i dati quando l'istanza è ferma. L'instance store perde i dati allo stop; Redshift e DynamoDB sono servizi gestiti."
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
    "explain": "Per stimare i costi c'erano il Simple Monthly Calculator e il TCO Calculator (oggi entrambi sostituiti dal Pricing Calculator); i tag di allocazione dei costi aiutano ad attribuire e quindi a stimare la spesa per progetto o reparto. Il report di fatturazione dettagliato mostra costi passati, e 'Cost Eliminator' non esiste."
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
      "Governance"
    ],
    "id": "4c63ba857ea4",
    "explain": "La Consolidated Billing dà un'unica fattura per più account e somma l'utilizzo per raggiungere sconti sui volumi. Non aumenta i limiti dei servizi, non applica sconti fissi e non estende il piano di supporto agli altri account."
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
      "IAM"
    ],
    "id": "baf1db039fcd",
    "explain": "Le policy IAM (e le bucket policy) definiscono quali utenti possono accedere a un bucket S3 e con quali azioni. Le coppie di chiavi servono per SSH su EC2, Inspector analizza vulnerabilità, i security group proteggono istanze e non bucket."
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
      "Cloud Concepts"
    ],
    "id": "f6d8a9e63172",
    "explain": "Il calcolo elastico riduce il TCO perché paghi solo la capacità che usi, invece di comprare server dimensionati per il picco. La single tenancy costa di più; cifratura e responsabilità condivisa riguardano la sicurezza, non riducono direttamente i costi."
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
      "Shared Responsibility"
    ],
    "id": "aaeb713be690",
    "explain": "Cifrare i dati lato client e configurare le network ACL sono attività del cliente. Le patch del sistema operativo di RDS le applica AWS (servizio gestito); formazione del personale e controlli ambientali dei data center sono di AWS."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "ef334f5d629c",
    "explain": "Alta disponibilità significa progettare l'applicazione perché sopporti il guasto di qualsiasi singolo componente (nessun single point of failure, più AZ). La bassa latenza riguarda le prestazioni, dimensionare per il picco è uno spreco e un'applicazione monolitica è essa stessa un punto unico di guasto."
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
      "IAM"
    ],
    "id": "dac1e0f7c960",
    "explain": "Per proteggere gli utenti IAM si usano la MFA e una password policy con robustezza e scadenza. Rekognition analizza immagini, Shield protegge dai DDoS, i security group filtrano il traffico di rete e non proteggono le identità."
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
      "Storage"
    ],
    "id": "d24f013c0cf3",
    "explain": "RDS (database transazionale) ed EFS (file system condiviso) sono pensati per letture e scritture continue. Glacier archivia dati poco consultati, Snowball trasferisce dati fisicamente, Redshift è ottimizzato per l'analisi e non per aggiornamenti continui."
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
    "id": "7c0f98396f85-2",
    "explain": "RDS è un database relazionale gestito: AWS automatizza provisioning, patch, backup e Multi-AZ, semplificando l'amministrazione. La durabilità a 11 nove è di S3; RDS non scala la potenza da solo in base al carico (lo fa Aurora Serverless) e cambiare CPU e RAM richiede di modificare la classe dell'istanza."
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
      "Database"
    ],
    "id": "42fd6c8fa2a8",
    "explain": "Aurora è compatibile con MySQL e scala facilmente: storage che cresce da solo, fino a 15 repliche di lettura, Aurora Serverless. Redshift è un data warehouse, DynamoDB è NoSQL, ElastiCache è una cache."
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
      "Shared Responsibility"
    ],
    "id": "067b7c448732-2",
    "explain": "Consapevolezza e formazione è un controllo condiviso: AWS forma i propri dipendenti, il cliente i suoi. La chiave per la cifratura lato client e la configurazione dell'istanza EC2 sono del cliente, i controlli ambientali sono di AWS."
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
      "Cloud Concepts"
    ],
    "id": "0902767c723a",
    "explain": "Per l'alta disponibilità servono almeno due Availability Zone: se una si guasta, l'altra continua a servire. Con una sola AZ c'è un single point of failure; tre o più aumentano la resilienza ma il minimo è due."
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
      "Cloud Concepts"
    ],
    "id": "c8786480d845",
    "explain": "La portata globale (Regioni in tutto il mondo ed edge location) permette di servire con bassa latenza clienti in ogni continente. Tolleranza ai guasti e alta disponibilità riguardano la resistenza ai guasti, il pay-as-you-go il modo di pagare."
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
      "Shared Responsibility"
    ],
    "id": "a89afc3d41bf",
    "explain": "Le patch del sistema operativo delle istanze EC2 sono del cliente, perché EC2 è IaaS. Infrastruttura sottostante, sicurezza fisica e infrastruttura di rete sono di AWS."
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
      "Governance"
    ],
    "id": "50c61eb760a8",
    "explain": "La Consolidated Billing di AWS Organizations somma l'utilizzo degli account per ottenere sconti sui volumi senza spostare risorse. Spostare tutto in un account ha un impatto enorme, le RI danno sconti per impegno e non per volume, e l'Enterprise Support non dà sconti sui volumi."
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
      "CloudWatch"
    ],
    "id": "7ab72b378a1d",
    "explain": "CloudWatch Logs offre monitoraggio dei log in tempo reale (con metric filter e allarmi) e conservazione regolabile, da 1 giorno a 10 anni o per sempre. Non invia riepiloghi via SNS in modo nativo, l'analisi con OpenSearch non è gratuita e il servizio si paga per GB acquisito e conservato."
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
      "Cloud Concepts"
    ],
    "id": "18f5951fab69",
    "explain": "La Regione si sceglie in base a latenza verso gli utenti, conformità e sovranità dei dati, disponibilità dei servizi e prezzo. La lingua dell'applicazione non dipende dalla Regione, il raffreddamento è un costo di AWS e i data center non si visitano."
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
      "Cloud Concepts",
      "CloudFront"
    ],
    "id": "d6ed8efbbc05",
    "explain": "Una Availability Zone è un luogo isolato (uno o più data center) dentro una Regione; le edge location sono punti di presenza distribuiti in molte città del mondo, anche dove non ci sono Regioni. Le edge location non stanno dentro le AZ né viceversa."
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
    "explain": "Il Business include servizio clienti 24/7 (incluso in tutti i piani) e la possibilità di acquistare l'Infrastructure Event Management a pagamento. L'email solo in orario lavorativo è del Developer, il TAM è dell'Enterprise, e il Business ha tutti i controlli di Trusted Advisor, non solo quelli di base."
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
      "Security",
      "IAM"
    ],
    "id": "3125916dc3e2",
    "explain": "Amazon Cognito gestisce registrazione e accesso degli utenti delle app web e mobile, anche con identità federate (Amazon, Apple, Facebook, Google). IAM gestisce le identità che amministrano AWS, non i clienti dell'app; GuardDuty rileva minacce, Personalize fa raccomandazioni."
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
      "CloudFormation"
    ],
    "id": "b10e6f879538",
    "explain": "CloudFormation descrive risorse e configurazioni in un template (YAML o JSON) riutilizzabile per creare gli stessi ambienti in più progetti o account. Config registra configurazioni, CloudTrail registra API, Auto Scaling regola il numero di istanze."
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
      "Cloud Concepts"
    ],
    "id": "4bd85b87b04f",
    "explain": "AWS elimina la necessità di indovinare la capacità e sostituisce le spese di capitale con spese operative variabili. Il monitoraggio resta necessario, la conformità è condivisa e AWS non costruisce hardware personalizzato per ogni cliente."
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
      "RDS",
      "EC2"
    ],
    "id": "bf9d2de1706b",
    "explain": "SQL Server può girare su RDS (gestito) o su EC2 (installato e gestito da te). DMS serve a migrare il database ma non a eseguirlo, mentre Fargate e Lambda eseguono container e funzioni, non database SQL Server."
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
      "Route 53"
    ],
    "id": "bc9ec4cca17c",
    "explain": "Route 53 esegue health check sugli endpoint (come le istanze EC2) e, con il routing di failover, sposta il traffico su risorse sane. Anche ELB fa health check, ma tra le opzioni c'è solo Route 53. CloudFormation crea risorse, Chime è un servizio di comunicazione, Aurora è un database."
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
      "AI / ML"
    ],
    "id": "62c8f95e8755",
    "explain": "Amazon Rekognition analizza immagini e video e fa riconoscimento e confronto facciale, utile per il tagging automatico delle foto. Comprehend analizza il testo, Polly trasforma testo in voce, IAM gestisce i permessi."
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
      "Database",
      "RDS"
    ],
    "id": "43814502b98f",
    "explain": "Amazon Neptune (database a grafo) e Amazon RDS for MySQL sono database gestiti da AWS. SQL Server o MySQL installati su EC2 li gestisci tu; CloudSearch è un servizio di ricerca, non un database."
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
    "explain": "Lavori periodici, dove il tempo non è critico e conta solo il costo, sono perfetti per le Spot (fino al 90% di sconto): se vengono interrotti si riprendono dopo. On-Demand costa di più e le Reserved richiedono un impegno continuo che non serve per lavori periodici."
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
    "id": "a90d627de2b4",
    "explain": "I permessi nel proprio account li concede il cliente: il proprietario dell'account (o un amministratore IAM) assegna le policy al team. TAM, team di sicurezza e support engineer di AWS non gestiscono i permessi dentro il tuo account."
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
      "Migrazione & DR"
    ],
    "id": "5b9e13fdf7dd",
    "explain": "AWS Server Migration Service automatizzava la migrazione di molti server on-premises (oggi sostituito da AWS Application Migration Service, MGN). DMS migra database, Application Discovery Service raccoglie informazioni per pianificare la migrazione, il File Transfer Acceleration non è un servizio di migrazione."
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
      "CloudFormation"
    ],
    "id": "1b37bcb9cb10",
    "explain": "CloudFormation permette di modellare l'intera infrastruttura in un file di testo (template) e ne automatizza il provisioning e gli aggiornamenti in modo sicuro e controllato (change set, rollback). Distribuire applicazioni senza pensare all'infrastruttura è Elastic Beanstalk, compilare il codice è CodeBuild, e non applica IAM avanzato in automatico."
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
      "Cloud Concepts"
    ],
    "id": "f4894241441b",
    "explain": "Il modello ibrido collega infrastruttura e applicazioni tra risorse nel cloud e risorse on-premises esistenti. Cloud (tutto nel cloud) e on-premises (tutto in sede) sono gli altri due modelli; 'misto' non è un termine ufficiale."
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
      "Migrazione & DR"
    ],
    "id": "7c8ab51d6f76",
    "explain": "CloudEndure Disaster Recovery (oggi AWS Elastic Disaster Recovery) replica continuamente i server in un'altra Regione e permette di avviarli in pochi minuti in caso di disastro. CloudEndure Migration serve alle migrazioni, AWS Backup fa backup (il ripristino richiede più tempo), Glue è un servizio ETL."
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
      "S3"
    ],
    "id": "7ccb68dffe68",
    "explain": "Risorse statiche molto richieste e con accesso stabile vanno su S3 Standard: bassa latenza e nessun costo di recupero. Standard-IA conviene per dati letti raramente (si paga ogni recupero), Intelligent-Tiering serve per pattern di accesso imprevedibili, Deep Archive è per archivi."
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
      "Cloud Concepts",
      "Migrazione & DR"
    ],
    "id": "3c6fe7531802",
    "explain": "Per un backup in un altro luogo geografico si usa un'altra Regione, che si trova in un'area diversa. Le AZ sono nella stessa area, un VPC è una rete logica e le edge location non conservano backup."
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
      "Shared Responsibility"
    ],
    "id": "8133e1af00ec",
    "explain": "Su EC2 sistema operativo e applicazioni sono responsabilità del cliente, quindi le patch vanno applicate regolarmente. L'instance store è effimero (inadatto a dati importanti), i componenti critici vanno distribuiti su più AZ (non su quella 'di fiducia') e le chiamate API si tracciano con CloudTrail, non con Athena."
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
    "explain": "Cost Explorer analizza la spesa passata e offre previsioni dei costi futuri basate sull'andamento storico (fino a 12 mesi nella domanda, oggi fino a 18). I confronti on-premises erano del TCO Calculator, le stime per nuovi progetti del Pricing Calculator, la fatturazione consolidata è di Organizations."
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
    "explain": "RDS Multi-AZ mantiene una standby sincrona in un'altra AZ e, se il primario non risponde, fa failover automatico aggiornando il DNS. Single-AZ non ha standby, le 'Write Replica' non esistono e gli snapshot sono backup da ripristinare a mano."
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
      "Billing & Cost"
    ],
    "id": "a081e2b8c408",
    "explain": "Arrestando (stop) le istanze non paghi più il calcolo, paghi solo lo storage EBS, e puoi riavviarle quando servono. Terminare le distrugge, eliminare i volumi EBS cancellerebbe i dati e non è vero che i costi On-Demand non si possono ridurre."
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
      "IAM"
    ],
    "id": "b033cb588fb9",
    "explain": "Se non servono, le chiavi di accesso del root vanno eliminate: sono credenziali potentissime e a lungo termine. L'MFA sul root va abilitata, ma il root non va usato per il lavoro quotidiano; accedere solo dal telefono non è una protezione e le credenziali non si condividono mai."
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
      "Storage",
      "Billing & Cost"
    ],
    "id": "48370c606074",
    "explain": "EBS si paga per i GB predisposti ogni mese (anche se non li usi tutti, più IOPS e throughput per alcuni tipi) e per i dati salvati negli snapshot. La capacità e il tempo di calcolo riguardano EC2, Snowball è un altro servizio."
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
      "IAM"
    ],
    "id": "88cc355d3aa8",
    "explain": "AWS raccomanda il privilegio minimo: dare a ogni utente solo i permessi che servono (meglio tramite un gruppo IAM). Policy separate per ogni utente sono difficili da gestire, zero permessi impedisce di lavorare e le password diverse sono ovvie ma non riguardano i permessi."
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
      "Billing & Cost"
    ],
    "id": "53b54adc0848",
    "explain": "I fattori di costo principali su AWS sono calcolo, storage e trasferimento dati in uscita. Il trasferimento in entrata è in genere gratuito, il numero di servizi di per sé non costa e i ruoli IAM sono gratuiti."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "08d1ccd4353b",
    "explain": "Lo sconto massimo arriva con le Reserved Standard pagate tutto in anticipo (All Upfront). Le Convertible scontano meno in cambio della flessibilità, No Upfront sconta meno di All Upfront e 'On-Demand Convertible' non esiste."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "661053506cd9",
    "explain": "Con le Reserved Instances (e i Savings Plans) puoi pagare in anticipo per avere costi orari più bassi. Le offerte (bid) sulle Spot non esistono più, gli sconti per volume non si ottengono 'registrando' istanze e le Dedicated Instances non hanno sconti del 90% (quelli sono delle Spot)."
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
      "Cloud Concepts"
    ],
    "id": "0afffe9ff742",
    "explain": "Economie di scala: grazie all'enorme volume di utilizzo di tutti i clienti AWS riduce i propri costi e abbassa continuamente i prezzi. 'Risparmi di più consumando di più' sono gli sconti per volume, il pay-as-you-go è il modello di pagamento."
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
      "EC2"
    ],
    "id": "7863736661d1",
    "explain": "AWS Auto Scaling adegua dinamicamente la capacità di calcolo (per esempio il numero di istanze EC2) ai picchi delle vendite lampo, e la riduce dopo. EC2 fornisce le istanze ma non le scala da solo, EFS è un file system, ElastiCache è una cache."
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
    "explain": "Con Amazon VPC il cliente ha il pieno controllo della propria rete virtuale: intervalli IP, subnet, tabelle di routing, gateway e regole di sicurezza. Le interazioni degli utenti con le risorse si controllano con IAM, la configurazione del VPC è del cliente e la revisione dell'architettura si fa con il Well-Architected Tool."
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
    "explain": "Il TCO Calculator era uno strumento pubblico (non serviva un account) per confrontare il costo di un ambiente on-premises con AWS. Oggi è stato ritirato e sostituito da Migration Evaluator e dal Pricing Calculator, ma all'esame la risposta per 'confronto on-premises vs AWS' resta TCO. Cost Explorer e Budgets richiedono un account."
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
      "Governance",
      "Support"
    ],
    "id": "83ca1a326756",
    "explain": "AWS Config valuta continuamente la conformità delle risorse con le regole, e Trusted Advisor segnala in modo continuo problemi di sicurezza e best practice. Redshift è un data warehouse, Amazon MQ un message broker, Cognito gestisce gli utenti delle app."
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
      "DevOps & Tools"
    ],
    "id": "1e6bb2a35eda",
    "explain": "AWS OpsWorks offre istanze gestite di Chef e di Puppet per automatizzare la configurazione dei server (OpsWorks for Puppet Enterprise). CloudFormation usa template propri, le Quick Start sono distribuzioni di riferimento, CloudTrail registra le API."
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
      "DevOps & Tools"
    ],
    "id": "2db1d706617a",
    "explain": "AWS CodeDeploy automatizza la distribuzione delle applicazioni su istanze EC2, Lambda, ECS e su server on-premises: perfetto per un ambiente ibrido. Kinesis gestisce flussi di dati, QuickSight crea dashboard, Athena interroga dati su S3."
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
      "Analytics"
    ],
    "id": "a4630a50ba22",
    "explain": "RDS ed EMR (nella forma classica) sono basati su server: scegli tipo e numero di istanze o nodi. DynamoDB, Lambda e Fargate sono serverless: non gestisci né scegli server."
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
      "Security"
    ],
    "id": "c8cb578f681a",
    "explain": "Il penetration testing simula un attacco per trovare vulnerabilità di sicurezza che un attaccante potrebbe sfruttare. Su AWS il cliente può farlo sulle proprie risorse senza approvazione preventiva per molti servizi. Testare tempi di risposta, istanze guaste o bug sono altri tipi di test."
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
      "Analytics"
    ],
    "id": "11dddd019425",
    "explain": "Amazon EMR esegue e scala framework di big data come Apache Spark e Hadoop, per elaborare rapidamente enormi quantità di dati. Il backup economico è S3 Glacier, lo spostamento su scala exabyte era Snowmobile, i container Docker si gestiscono con ECS o EKS."
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
      "Support"
    ],
    "id": "cae570e6d581",
    "explain": "Il supporto tecnico via chat (e telefono) parte dal piano Business. Con Basic e Developer c'è solo il servizio clienti o il supporto via email, quindi passare al Developer non basta, e la chat non si compra separatamente."
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
      "Elastic Beanstalk"
    ],
    "id": "25ad6f4e907d",
    "explain": "Elastic Beanstalk è pensato per chi vuole distribuire e gestire rapidamente un'applicazione senza conoscere l'infrastruttura: carichi il codice e lui fa il resto. Fargate richiede di conoscere i container, Batch esegue lavori batch, Personalize crea raccomandazioni."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "786955383d96",
    "explain": "Il pay-as-you-go sostituisce grandi spese in conto capitale anticipate (comprare server) con piccoli pagamenti variabili legati all'uso. Le altre opzioni invertono il concetto o parlano di pagamenti fissi, che non sono il modello a consumo."
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
      "RDS",
      "Shared Responsibility"
    ],
    "id": "c26f532470e0",
    "explain": "Con RDS AWS installa e configura il motore di database (setup, patch, backup) e gestisce il sistema operativo sottostante. Protezione del traffico di rete, gestione degli accessi e regole del firewall (security group) restano al cliente."
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
      "Billing & Cost"
    ],
    "id": "c930a0d5024e",
    "explain": "I tag (per esempio Progetto, Reparto, Ambiente), attivati come tag di allocazione dei costi, permettono di raggruppare le risorse e analizzare la spesa per gruppo in Cost Explorer. CloudFormation automatizza i deploy, distribuire risorse in più Regioni non aiuta l'analisi e Inspector cerca vulnerabilità, non analizza costi."
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
      "Networking"
    ],
    "id": "aec57ddfc6f8",
    "explain": "Per grandi trasferimenti quotidiani su una connessione costante serve Direct Connect: banda dedicata e prestazioni prevedibili. La VPN passa su Internet (prestazioni variabili), Snowmobile è un camion per un trasferimento unico su scala exabyte, Comprehend analizza testi."
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
    "explain": "Storage Gateway integra gli ambienti IT on-premises con lo storage cloud: le applicazioni locali vedono file, volumi o nastri e i dati vanno su AWS. I job ETL sono di Glue, i dispositivi fisici della Snow Family, l'archivio hardware delle chiavi è CloudHSM."
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
      "S3"
    ],
    "id": "3978d6edc6db",
    "explain": "S3 Standard-IA costa meno di Standard per dati letti raramente, ma il recupero è immediato (in millisecondi): perfetto per i backup. Glacier e Glacier Deep Archive costano meno ma il recupero richiede da minuti a ore; l'instance store è effimero."
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
    "explain": "AWS Global Accelerator fornisce IP statici e instrada il traffico sulla rete globale di AWS verso l'endpoint più vicino e sano, con le prestazioni migliori. Data Pipeline spostava dati, DAX è una cache per DynamoDB, S3 Transfer Acceleration velocizza solo i caricamenti su S3."
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
    "explain": "Con i server paghi le risorse anche quando restano inattive; con il serverless paghi solo quando il codice è in esecuzione. Lo scaling automatico è un vantaggio anche dei server con Auto Scaling, e il serverless non usa hardware 'più potente' né si prenota in anticipo come le RI."
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
    "explain": "Route 53 serve per configurare e gestire il DNS e per gestire il traffico globale con diverse politiche di instradamento (latenza, geolocalizzazione, failover, ponderato). La connettività con l'on-premises è Direct Connect, le modifiche di configurazione sono di Config, le raccomandazioni di sicurezza di Trusted Advisor."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "07b98c8a44ca",
    "explain": "Per 200 TB la soluzione economica è AWS Snowball: più dispositivi (circa 80 TB l'uno) spediti fisicamente. Snowmobile ha senso oltre i 10 PB; Import/Export è il predecessore ritirato; DMS migra database su rete."
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
      "Database"
    ],
    "id": "b500418134ad",
    "explain": "ElastiCache for Redis conserva i dati in memoria e risponde in meno di un millisecondo, ideale per applicazioni in tempo reale. Redshift e Athena sono per l'analisi (secondi o minuti), Cloud9 era un IDE."
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
      "Well-Architected"
    ],
    "id": "990336b4c301",
    "explain": "La tolleranza ai guasti progetta il sistema perché continui a funzionare anche se un componente si rompe (più istanze, più AZ, load balancer). Il privilegio minimo riguarda la sicurezza, il pilot light è una strategia di DR (con tempo di ripristino), il multi-threading è una tecnica di programmazione."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "b71ea84de8ec",
    "explain": "A parità di durata, pagare tutto in anticipo (All Upfront) dà lo sconto più alto, poi Partial Upfront, poi No Upfront. Le opzioni di pagamento non danno lo stesso sconto."
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
    "explain": "AWS offre controllo degli accessi (IAM, bucket policy) e cifratura dei dati (KMS, cifratura lato server) per proteggere i dati. I dispositivi MFA fisici sono venduti da terzi; storage illimitato e bilanciamento del carico non sono funzioni di protezione dei dati."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "325adcd93adc",
    "explain": "Amazon Linux è fatturato al secondo (minimo 60 secondi), quindi si paga esattamente 2h 5m 9s. Nella risposta d'esame CentOS è considerato un'AMI con tariffa oraria (come molte AMI del Marketplace), quindi 4h 23m vengono arrotondate a 5 ore."
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
    "id": "7f4176e3f6d3",
    "explain": "L'AWS Support API permette di creare, gestire e chiudere i casi di supporto in modo programmatico (e di leggere i risultati di Trusted Advisor); richiede almeno il piano Business. Trusted Advisor dà raccomandazioni, il Personal Health Dashboard mostra eventi, 'Operations Support' non esiste."
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
      "DevOps & Tools"
    ],
    "id": "160ef11f2a70",
    "explain": "IAM si usa come tutti i servizi: tramite console, AWS CLI, SDK e API. Security group e network ACL filtrano traffico di rete, CodeCommit è un repository Git."
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
    "explain": "Le identità IAM sono utenti, gruppi di utenti e ruoli. Le policy non sono identità (definiscono i permessi che si collegano alle identità); Resource Groups e Organizations organizzano risorse e account."
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
    "explain": "Le Read Replica ricevono copie asincrone dei dati e servono le query di lettura, scaricando il database principale. Multi-AZ serve all'alta disponibilità (la standby non serve letture); snapshot e backup automatici servono al ripristino."
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
      "Security"
    ],
    "id": "c6934be8470c",
    "explain": "AWS pubblica i Security Bulletin (bollettini di sicurezza) per informare i clienti sulle vulnerabilità e sugli eventi di sicurezza e privacy che riguardano i servizi AWS. ACM gestisce certificati, la console non è un canale di avvisi di sicurezza, le Compliance Resources sono documentazione di conformità."
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
    "explain": "I ruoli IAM forniscono credenziali temporanee (tramite STS) a chi li assume: servizi AWS, utenti, account esterni o identità federate. Gli utenti IAM hanno credenziali a lungo termine, le coppie di chiavi servono per SSH, i gruppi raccolgono utenti."
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
      "EC2"
    ],
    "id": "fc57403435fd",
    "explain": "L'Application Load Balancer distribuisce in modo uniforme il traffico HTTP/HTTPS tra le tre istanze (scalabilità orizzontale) e smette di inviarlo a quelle non sane. Global Accelerator instrada tra Regioni, CloudFront è una CDN, Transit VPC collega reti."
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
      "CloudFormation"
    ],
    "id": "b509fc615ee9",
    "explain": "L'infrastructure as code (per esempio CloudFormation) descrive l'ambiente in modo dichiarativo: creazioni e aggiornamenti diventano automatici, ripetibili e senza errori manuali. I test software non creano infrastruttura, CodeDeploy distribuisce applicazioni e non l'ambiente, un host dedicato non automatizza nulla."
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
      "IAM"
    ],
    "id": "faf5620ee81c",
    "explain": "Richiedere la MFA per tutti gli utenti IAM aggiunge un secondo fattore: anche con una password rubata l'accesso viene bloccato. Bloccare CLI e SDK impedisce di lavorare, gli account condivisi violano le best practice e non esistono 'due password'."
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
      "Billing & Cost"
    ],
    "id": "aecce632d603",
    "explain": "S3 ha prezzi a scaglioni: più dati conservi, minore è il prezzo per GB (sconti sui volumi). VPC non ha questo modello, Lightsail ha piani a prezzo fisso, Cost Explorer è uno strumento di analisi."
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
      "Cloud Concepts"
    ],
    "id": "44a05d940663",
    "explain": "La Regione si sceglie in base a sovranità e conformità dei dati, costo (i prezzi cambiano tra Regioni), latenza verso gli utenti e servizi disponibili. Tutte le Regioni hanno lo stesso livello di sicurezza, il numero di VPC non conta e conta la vicinanza agli utenti, non alla sede."
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
      "Database"
    ],
    "id": "1659c87aca4a",
    "explain": "Amazon ElastiCache (Redis o Memcached) mette in cache in memoria i dati letti più spesso dal database MySQL, migliorando le prestazioni. DAX è una cache solo per DynamoDB, EFS è un file system, Neptune è un database a grafo."
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
      "EC2"
    ],
    "id": "fa13f0f1b4a9",
    "explain": "Un Auto Scaling Group distribuisce e sostituisce le istanze su più Availability Zone, aumentando disponibilità e tolleranza ai guasti. Non fa cache (CloudFront), non lavora su più Regioni e non distribuisce il traffico (ELB)."
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
      "Cloud Concepts"
    ],
    "id": "a397b4036743",
    "explain": "Grazie alle economie di scala AWS abbassa continuamente i prezzi, quindi il vantaggio rispetto all'infrastruttura tradizionale cresce nel tempo. AWS riduce le spese di capitale (non le aumenta), non automatizza tutte le operazioni e la sicurezza NEL cloud resta al cliente."
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
      "Shared Responsibility"
    ],
    "id": "eb573d06ebcf",
    "explain": "La sicurezza NEL cloud è del cliente: progettare lo schema dell'applicazione e cifrare il file system sono esempi. Sostituire l'hardware, creare l'hypervisor e applicare patch all'infrastruttura sottostante sono attività di AWS (sicurezza DEL cloud)."
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
      "IAM"
    ],
    "id": "4c6783b8b5f3",
    "explain": "AWS supporta come MFA le chiavi di sicurezza FIDO/U2F, i dispositivi MFA virtuali (app) e i token hardware TOTP. CloudHSM gestisce chiavi crittografiche, le chiavi di accesso sono credenziali programmatiche, le coppie di chiavi servono per SSH."
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
      "Elastic Beanstalk"
    ],
    "id": "86c3b06b9250",
    "explain": "Elastic Beanstalk supporta .NET su Windows e Linux: carichi l'applicazione e lui crea l'ambiente in pochi minuti. SNS invia notifiche, Systems Manager gestisce istanze esistenti, Trusted Advisor dà raccomandazioni."
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
      "Billing & Cost"
    ],
    "id": "3a29c4a32a20",
    "explain": "I security group sono gratuiti e le hosted zone sono di Route 53, quindi nessuno dei due entra nel costo di EC2. Contano invece il tempo di esecuzione, il numero di istanze e gli Elastic IP (oggi si paga ogni IPv4 pubblico)."
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
      "Storage"
    ],
    "id": "a3c0c38baf12",
    "explain": "AWS Storage Gateway estende lo storage on-premises su AWS: i dati vengono salvati su S3 o Glacier mantenendo un accesso locale veloce tramite cache. Data Pipeline spostava dati, Aurora è un database, EFS è un file system cloud (montabile on-premises, ma non nasce come estensione dello storage locale)."
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
      "S3"
    ],
    "id": "b3ca418b5678",
    "explain": "Amazon S3 scala automaticamente la capacità senza limiti e si paga solo ciò che si conserva: perfetto per una piattaforma di storage online. EBS richiede di predisporre la dimensione dei volumi, ECS esegue container, Storage Gateway collega l'on-premises."
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
      "IAM"
    ],
    "id": "0ba69c050c54",
    "explain": "In IAM ogni nuovo utente parte senza permessi: c'è un rifiuto implicito finché una policy non concede esplicitamente le azioni (per esempio ec2:CreateSnapshot e s3:CreateBucket). Non serve attivazione dal supporto, EBS e S3 non sono riservati al root e S3 non ha limiti di spazio."
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
      "Governance"
    ],
    "id": "d10206168f48",
    "explain": "AWS CloudTrail registra ogni chiamata API all'account (chi, cosa, quando, da dove): è il registro degli accessi alle risorse che serve a un revisore. CloudFront è una CDN, CloudFormation crea infrastruttura, CloudWatch monitora metriche e log."
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
      "Altri servizi"
    ],
    "id": "1d9a5a79ffd7",
    "explain": "Amazon Cloud Directory permetteva di creare directory flessibili che organizzano dati in gerarchie su più dimensioni (per esempio un organigramma per sede e per reparto). L'analisi di flussi video e dati è di Kinesis, l'accesso con credenziali Active Directory è di Directory Service, i domini sono di Route 53."
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
      "Support"
    ],
    "id": "ac4ddbd9b46f",
    "explain": "Per un caso 'Production System Down' il tempo di risposta obiettivo è 1 ora (piano Business e superiori). 12 ore è il tempo del Developer per un sistema compromesso, 24 ore per le domande generali, 15 minuti è per 'Business-critical system down' con l'Enterprise."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "dd67cde830f7",
    "explain": "La best practice per l'alta disponibilità è distribuire l'applicazione in almeno due Availability Zone. Un ELB lavora dentro una Regione, due server nella stessa AZ restano esposti al guasto di quella AZ e riscrivere il codice non crea ridondanza."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "a40695abcaaf",
    "explain": "Un'analisi TCO considera i costi del data center che con AWS cambiano: personale e IT, raffreddamento ed energia, hardware, spazio. Architettura e compatibilità del software non sono voci di costo dell'infrastruttura; 'potenza di calcolo di EBS' non ha senso, perché EBS è storage."
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
    "explain": "Il tempo di risposta di 15 minuti per un sistema critico fuori servizio (business-critical system down) è previsto solo dall'Enterprise Support (l'Enterprise On-Ramp arriva a 30 minuti). Business risponde in meno di 1 ora, Developer in 12 ore lavorative, Basic non ha supporto tecnico."
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
      "Lambda",
      "DynamoDB"
    ],
    "id": "9543a710e3b7",
    "explain": "Lambda (calcolo) e DynamoDB (database) sono serverless: niente server da scegliere o gestire, scalabilità automatica. EC2, EMR e RDS richiedono di scegliere e gestire istanze o nodi."
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
    "id": "aabc6d8660cc",
    "explain": "AWS Certificate Manager (ACM) emette e distribuisce certificati SSL/TLS (quelli pubblici gratis per i servizi integrati) e li rinnova automaticamente. GuardDuty rileva minacce, Detective indaga sugli incidenti, WAF filtra il traffico web."
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
      "DevOps & Tools"
    ],
    "id": "54d400cc51f1",
    "explain": "AWS OpsWorks offre istanze gestite di Chef (OpsWorks for Chef Automate e Stacks) per automatizzare la configurazione dei server. Config registra configurazioni, Auto Scaling scala istanze, CloudFormation usa template propri."
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
      "S3"
    ],
    "id": "fe10a2cf7da5",
    "explain": "S3 conserva oggetti e li rende scaricabili via HTTP(S) da Internet, con URL pubblici o prefirmati. EBS e instance store sono dischi delle istanze, EFS è un file system montato dai server."
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
      "CloudWatch",
      "CloudFront"
    ],
    "id": "d813728e5e0f",
    "explain": "CloudFront pubblica in CloudWatch metriche sulle richieste HTTP e HTTPS (numero di richieste, byte, tassi di errore 4xx e 5xx). WAF filtra le richieste ma non è lo strumento di monitoraggio, Cloud9 era un IDE, CloudTrail registra le chiamate API di gestione e non le richieste degli utenti."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "78cec97d301a",
    "explain": "Capacità usata in modo continuo tutto l'anno: le Reserved Instances (o i Savings Plans) con impegno annuale sono la soluzione più conveniente. On-Demand costa di più, Spot può essere interrotta, Dedicated Hosts è la più cara."
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
      "IAM"
    ],
    "id": "8fa64295db89",
    "explain": "Per un dipendente con accesso a lungo termine si crea un utente IAM (oggi AWS consiglia anche IAM Identity Center) con una policy limitata a DynamoDB, rispettando il privilegio minimo. I ruoli servono per accessi temporanei; i permessi da amministratore violano il privilegio minimo."
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
      "IAM",
      "EC2"
    ],
    "id": "41fc06610c2f",
    "explain": "Le applicazioni su EC2 devono usare un ruolo IAM collegato all'istanza (instance profile): ricevono credenziali temporanee ruotate automaticamente. Chiavi a lungo termine nel codice sono un grave rischio; generare chiavi nuove ogni volta non risolve; le applicazioni hanno bisogno di permessi per chiamare altri servizi."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "73dbd98c1a65",
    "explain": "Portare su AWS le licenze che già possiedi (BYOL, Bring Your Own License) evita di ricomprarle. I servizi gestiti di solito riducono i costi totali, le edge location non eseguono carichi di produzione e Outposts serve a portare AWS on-premises, non a risparmiare."
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
      "SQS"
    ],
    "id": "d1797cd849eb",
    "explain": "Amazon SQS mette una coda tra i componenti: chi produce e chi consuma messaggi lavorano in modo indipendente, quindi l'applicazione viene disaccoppiata. Il Virtual Private Gateway è un componente VPN, Artifact fornisce report di conformità, CloudFront è una CDN."
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
      "IAM"
    ],
    "id": "23a2d1f6f668",
    "explain": "Un dispositivo MFA virtuale si abilita e si associa a un utente dalla console IAM oppure con la AWS CLI (o le API). Connect, SNS e VPC non gestiscono l'autenticazione degli utenti IAM."
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
      "Well-Architected",
      "EC2"
    ],
    "id": "a34948f5a91c",
    "explain": "Tanti file indipendenti si elaborano meglio in parallelo su più istanze EC2 (scalabilità orizzontale): più veloce e allo stesso costo totale. Scalare in verticale ha un limite, e RDS è un database, non un ambiente per elaborare file."
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
      "Billing & Cost"
    ],
    "id": "3d8a63751d65",
    "explain": "L'AWS Pricing Calculator stima i costi di servizi che non usi ancora, come S3 e CloudFront per un nuovo progetto. Cost Explorer, Budgets e Cost and Usage Report lavorano su costi già sostenuti."
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
      "Security",
      "IAM"
    ],
    "id": "3f550b4efd8c",
    "explain": "Davanti a risorse sconosciute: apri un'indagine (anche con i log di CloudTrail), elimina o disabilita le credenziali potenzialmente compromesse e cambia la password del root e degli utenti IAM. Fermare tutti i servizi è eccessivo, la password del root non si dà mai a nessuno, nemmeno al supporto, ed eliminare tutti gli utenti indiscriminatamente blocca anche quelli legittimi."
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
      "Well-Architected"
    ],
    "id": "d14cccb46d6e",
    "explain": "Ridurre al minimo le dipendenze perché il guasto di un componente non abbia impatto sugli altri si chiama loose coupling (accoppiamento debole). Il tight coupling è il contrario; 'accoppiamento elastico' e 'scalabile' non sono termini usati."
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
      "Storage"
    ],
    "id": "9e88a6d8d6d8",
    "explain": "Amazon EFS è un file system NFS gestito che più istanze EC2 (anche in AZ diverse) possono montare contemporaneamente. S3 è object storage, EBS si collega di norma a una sola istanza (Multi-Attach solo per casi particolari), Storage Gateway collega l'on-premises."
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
      "Cloud Concepts"
    ],
    "id": "d1234723bec3",
    "explain": "Le connessioni a bassa latenza tra le AZ di una Regione permettono la replica sincrona dei dati, per esempio RDS Multi-AZ, senza rallentare troppo le scritture. Non sono connessioni verso il tuo data center, non danno alta disponibilità globale (serve più di una Regione) e non automatizzano il provisioning."
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
    "explain": "Lambda supporta in modo nativo Node.js, Python, Java, .NET, Ruby e altri runtime, e con la Runtime API (runtime personalizzati) si può usare qualsiasi linguaggio. Lambda non è un linguaggio e non è limitato a Python e Node.js."
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
      "DevOps & Tools"
    ],
    "id": "b14c6f8e91fb",
    "explain": "AWS X-Ray traccia le richieste mentre attraversano i servizi dell'applicazione, mostra dove nascono errori e latenza e quindi aiuta a migliorare le prestazioni. Non disaccoppia componenti (SQS) e non distribuisce applicazioni (CodeDeploy)."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "e126b4c0ed7b",
    "explain": "AWS Organizations gestisce centralmente più account: fatturazione consolidata e policy di sicurezza (SCP) applicate a tutti gli account o a gruppi (OU). Trusted Advisor dà raccomandazioni, i gruppi IAM valgono dentro un solo account, Config valuta la conformità delle risorse."
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
      "S3"
    ],
    "id": "721689b4e852",
    "explain": "Amazon S3 è lo storage a oggetti di AWS. EBS e instance store sono storage a blocchi (dischi), EFS è storage a file."
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
    "explain": "AWS Auto Scaling aggiunge capacità quando la domanda sale e la toglie quando scende: niente risorse sottoutilizzate pagate inutilmente. ELB distribuisce il traffico, Budgets e Cost Explorer controllano i costi ma non cambiano la capacità."
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
      "S3"
    ],
    "id": "874747fcafc3",
    "explain": "S3 Intelligent-Tiering sposta automaticamente gli oggetti tra livelli di accesso in base all'uso reale, senza costi di recupero: è la classe per pattern di accesso imprevedibili. Standard è per accessi frequenti, Standard-IA per accessi rari ma noti, Glacier Flexible Retrieval per archivi."
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
      "DynamoDB"
    ],
    "id": "331669b4808d",
    "explain": "DynamoDB è un database NoSQL chiave-valore e documentale. Aurora e RDS sono relazionali (tabelle e SQL), Redshift è un data warehouse colonnare."
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
    "explain": "L'affermazione falsa è A: le On-Demand non hanno costi di attivazione. Sono vere le altre: sono pay-as-you-go, senza impegni né pagamenti anticipati, e le istanze Linux sono fatturate al secondo sulla base di una tariffa oraria."
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
      "Security",
      "Support"
    ],
    "id": "b5a07c0bbad0",
    "explain": "Trusted Advisor controlla le impostazioni di sicurezza dell'account (security group aperti, MFA sul root, bucket pubblici), e Inspector verifica vulnerabilità e accessi di rete non previsti sulle istanze. SNS invia notifiche, CloudWatch monitora metriche, il Concierge si occupa di fatturazione."
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
      "IAM"
    ],
    "id": "d9f1e948cf90",
    "explain": "La MFA (Multi-Factor Authentication) aggiunge un secondo fattore, come un codice da app o una chiave fisica, oltre a nome utente e password. KMS gestisce chiavi di cifratura, e la verifica via email o le 'chiavi cifrate' non sono il meccanismo di AWS."
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
    "explain": "L'Infrastructure Event Management (incluso nell'Enterprise) fornisce indicazioni su architettura e scalabilità e supporto in tempo reale durante eventi pianificati, come il lancio di un prodotto. Il Knowledge Center è una raccolta di articoli, l'Health Dashboard mostra eventi dei servizi, il Concierge si occupa di fatturazione."
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
      "RDS"
    ],
    "id": "d74c8884d2f3",
    "explain": "Amazon RDS automatizza configurazione, backup, patch e (con Multi-AZ) il disaster recovery di MySQL, quindi il DBA può concentrarsi su modello dei dati e prestazioni. Redshift è un data warehouse, DynamoDB è NoSQL (andrebbe riscritta l'applicazione), CloudWatch monitora."
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
      "Well-Architected"
    ],
    "id": "d1c5cbe3529e",
    "explain": "Nel cloud l'automazione rende facile creare e distruggere ambienti, quindi puoi sperimentare architetture diverse a basso costo. L'architettura nel cloud si può cambiare facilmente, le prenotazioni non hanno senso per test brevi e predisporre capacità per il picco è uno spreco."
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
      "Security"
    ],
    "id": "f321dc5cec5e",
    "explain": "I clienti possono eseguire penetration test sulle proprie risorse (come le istanze EC2 e molti altri servizi) senza chiedere prima l'autorizzazione ad AWS, purché rispettino la policy (niente DoS e niente test sull'infrastruttura AWS). AWS non li esegue per te e sono consentiti anche su EC2."
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
      "SQS"
    ],
    "id": "6bfed599a3a5",
    "explain": "SQS conserva i messaggi in coda in modo durevole: se il componente che li elabora si guasta, i messaggi restano lì finché non vengono elaborati. SES invia email, Direct Connect è una linea di rete, Amazon Connect è un contact center."
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
      "Well-Architected",
      "EC2"
    ],
    "id": "0ff9b51cbd2a",
    "explain": "Progettare per i guasti significa avere ridondanza: più Availability Zone e Elastic Load Balancing, che sposta il traffico sulle istanze sane quando una si guasta. MFA e penetration test riguardano la sicurezza, la scalabilità verticale mantiene un singolo punto di guasto."
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
    "explain": "Amazon VPC fornisce una rete virtuale isolata e dedicata al tuo account, in cui definisci IP, subnet e routing. La VPN collega reti, le subnet sono parti di un VPC, i Dedicated Hosts sono server fisici."
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
      "Shared Responsibility"
    ],
    "id": "1bba2e4954e9",
    "explain": "Il cliente protegge i propri dati in transito (per esempio usando HTTPS verso S3) e applica le patch alle applicazioni installate su EC2. Eventi ambientali, accesso fisico alle Regioni e configurazione degli host EC2 sono responsabilità di AWS."
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
      "Lambda"
    ],
    "id": "697e07b64ea8",
    "explain": "EC2 (server virtuali) e Lambda (funzioni serverless) forniscono capacità di calcolo. VPC è rete, CloudWatch è monitoraggio, S3 è storage."
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
      "IAM"
    ],
    "id": "2e9f5c2b8dbd",
    "explain": "Le chiavi di accesso (Access Key ID e Secret Access Key) sono l'equivalente di nome utente e password per le chiamate programmatiche (CLI, SDK, API). Le coppie di chiavi servono per SSH sulle istanze, la MFA è un secondo fattore, la 'password dell'istanza' non c'entra con le API AWS."
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
      "Database"
    ],
    "id": "61003527ff1a",
    "explain": "Amazon ElastiCache offre cache in memoria (Redis, Valkey o Memcached) per accelerare le applicazioni con molte letture. Non è compatibile con Ehcache, il negozio di software è il Marketplace e il DNS è Route 53."
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
      "Governance"
    ],
    "id": "0e18fa3273f1",
    "explain": "AWS Organizations permette di gestire tutti gli account da un unico account di gestione (un tempo 'master'), con OU, SCP e fatturazione consolidata. WAF filtra il traffico web, Trusted Advisor dà raccomandazioni, Config registra le configurazioni."
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
    "explain": "I Dedicated Hosts danno visibilità su socket fisici e core e controllo sul posizionamento delle istanze, quindi supportano il BYOL in quasi tutti gli scenari di licenza. Le Dedicated Instances non danno questa visibilità; On-Demand e Reserved sono modelli di pagamento su hardware condiviso."
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
      "Cloud Concepts"
    ],
    "id": "dd7eb10c564f",
    "explain": "Passando ad AWS non compri più server e data center, quindi riduci le spese in conto capitale (CapEx). Il supporto Enterprise si paga, la protezione dei dati resta (in parte) del cliente e le applicazioni le gestisce il cliente."
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
      "Well-Architected"
    ],
    "id": "38e88e1d5ff8",
    "explain": "Due principi chiave: automatizzare dove possibile ed eliminare i single point of failure. I servizi globali non sono sempre preferibili, il pay-as-you-go non è sempre la scelta più economica (per carichi stabili convengono le prenotazioni) e i server vanno trattati come risorse usa e getta, non fisse."
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
      "Networking"
    ],
    "id": "335a9ef5d63d",
    "explain": "AWS Direct Connect stabilisce una connessione di rete privata e dedicata tra il tuo data center e AWS. CloudFront è una CDN, Snowball trasferisce dati fisicamente, Route 53 è il DNS."
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
      "VPC"
    ],
    "id": "89ff46226e30",
    "explain": "Un VPC per progetto isola completamente risorse e configurazioni di rete: intervalli IP, subnet, routing e gateway indipendenti. Internet gateway e security group sono componenti di un VPC, CloudFront è una CDN."
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
      "Security"
    ],
    "id": "a70bd9bb0104",
    "explain": "AWS WAF ispeziona le richieste HTTP e blocca schemi d'attacco come SQL injection e cross-site scripting prima che raggiungano l'applicazione. Cognito gestisce l'autenticazione, IAM i permessi, Aurora è un database."
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
      "Analytics"
    ],
    "id": "a18ef41e1a14",
    "explain": "Amazon EMR esegue framework di big data (Spark, Hadoop) per analizzare ed elaborare grandi set di dati. Amazon MQ è un message broker, SNS invia notifiche, SQS è una coda di messaggi."
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
      "Shared Responsibility"
    ],
    "id": "79b57033dc33",
    "explain": "Creare (e proteggere) gli hypervisor e mantenere l'hardware sono responsabilità esclusive di AWS. Il monitoraggio delle prestazioni delle proprie applicazioni, l'installazione di software su EC2 e la configurazione delle ACL sono del cliente."
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
      "EC2"
    ],
    "id": "6f94c08badd9",
    "explain": "EC2 è IaaS: scegli sistema operativo, tipo di istanza, storage e rete, e hai accesso amministrativo al server virtuale. Redshift, DynamoDB e RDS sono servizi gestiti in cui AWS controlla l'infrastruttura sottostante."
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
    "explain": "Per entrare nella console un utente IAM usa nome utente e password (più l'ID o alias dell'account). La MFA è un fattore aggiuntivo consigliato ma non predefinito, le chiavi di accesso servono per CLI e API."
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
      "EC2"
    ],
    "id": "a76cbcd6990d",
    "explain": "Una AMI è il modello da cui avviare quante istanze EC2 identiche vuoi. IAM gestisce i permessi, l'internet gateway collega a Internet, uno snapshot EBS copia un singolo volume (da trasformare in AMI per avviare istanze)."
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
      "Cloud Concepts"
    ],
    "id": "b034da5b7f64",
    "explain": "Il cloud offre un'infrastruttura distribuita (Regioni e AZ) che rende facile eliminare i single point of failure. Capacità riservata, risorse virtualizzate e hosting dedicato esistono anche nei data center tradizionali."
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
      "Shared Responsibility"
    ],
    "id": "4ba47ab75f3e",
    "explain": "AWS gestisce le patch dell'hardware e la protezione fisica dell'infrastruttura globale. Cifratura dei volumi EBS, sicurezza dei VPC (security group, NACL) e permessi di accesso sono del cliente."
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
    "explain": "Operational Excellence riguarda eseguire e monitorare i sistemi e migliorare continuamente processi e procedure (operations as code, piccole modifiche frequenti, imparare dagli errori). Riprendersi dai guasti è Reliability, usare bene le risorse è Performance Efficiency, e le operazioni del data center sono di AWS."
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
    "explain": "Distribuire il traffico su più istanze è il lavoro di Elastic Load Balancing, non delle edge location (quindi C è l'affermazione falsa). Le edge location mettono in cache le risposte, velocizzano anche i caricamenti verso l'origine e distribuiscono contenuti con bassa latenza."
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
      "Governance"
    ],
    "id": "9e70c7202c44",
    "explain": "AWS Config registra le modifiche alle configurazioni delle risorse e CloudTrail registra chi ha fatto ogni chiamata API: insieme permettono di verificare e monitorare tutte le modifiche. Comprehend analizza testi, Transit Gateway collega reti, X-Ray traccia le richieste."
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
      "ECS / Fargate"
    ],
    "id": "34def4150d6f",
    "explain": "Amazon ECS orchestra i container e può eseguirli su un cluster di istanze EC2 (launch type EC2) o su Fargate. Data Pipeline spostava dati, Cloud9 era un IDE, il Personal Health Dashboard mostra eventi."
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
      "Governance"
    ],
    "id": "f48fed5e09d2",
    "explain": "CloudTrail registra tutte le attività dell'account e fornisce la traccia di audit richiesta dalle verifiche di conformità (chi ha fatto cosa e quando). CloudFront è una CDN, CloudEndure Migration migra server, CloudWatch monitora prestazioni."
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
      "Billing & Cost"
    ],
    "id": "e6b88d168ffe",
    "explain": "Usare la classe di storage giusta per ogni caso (Standard, Standard-IA, Intelligent-Tiering, Glacier), anche con regole di ciclo di vita, riduce i costi di S3. Import/Export era un servizio di trasferimento fisico e non sposta file in Glacier; i bucket non si mettono in una AZ; EBS costa di più di S3."
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
      "EC2"
    ],
    "id": "efd1ec3a995b",
    "explain": "Auto Scaling sostituisce le istanze guaste e adegua la capacità, ed Elastic Load Balancer sposta il traffico sulle istanze sane, anche tra più AZ: insieme danno alta disponibilità e tolleranza ai guasti. Direct Connect è una linea di rete, CloudFormation automatizza il deploy, le NACL filtrano traffico."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "2371562f9e47",
    "explain": "Con Auto Scaling le istanze si riducono quando la domanda cala, quindi non paghi capacità inutilizzata. L'NLB non riduce i costi (e per HTTP si usa l'ALB), togliere i tag peggiora l'analisi dei costi e distribuire su più AZ aumenta la disponibilità ma non riduce la spesa."
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
      "CloudFront"
    ],
    "id": "3060afafc048",
    "explain": "S3 Transfer Acceleration fa entrare i caricamenti nella rete AWS dalla edge location più vicina e poi li porta a S3 sulla rete interna, più veloce di Internet pubblico. WAF filtra il traffico web; Snowball e Snowmobile sono trasferimenti fisici."
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
      "VPC",
      "Security"
    ],
    "id": "b36a95e951a7",
    "explain": "Il security group è associato all'istanza (alla sua interfaccia di rete) e filtra il traffico in entrata e in uscita, ed è stateful. La network ACL è associata alla subnet, i Flow Logs registrano il traffico, X-Ray traccia le richieste."
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
      "Networking",
      "CloudFront"
    ],
    "id": "91a93c3db861",
    "explain": "Global Accelerator instrada il traffico sulla rete globale AWS verso l'endpoint migliore, e CloudFront mette in cache i contenuti vicino agli utenti: entrambi riducono la latenza per un pubblico globale. KMS gestisce chiavi, Direct Connect collega la tua sede, Glue fa ETL."
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
    "explain": "Su RDS il cliente progetta lo schema del database e gestisce le impostazioni (parameter group, utenti del database, accessi). Backup automatici, patch e installazione del software del database li gestisce AWS."
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
      "RDS"
    ],
    "id": "982fa7ff940d",
    "explain": "Grandi quantità di dati strutturati (relazionali, con schema) si portano naturalmente su Amazon RDS. DynamoDB è NoSQL (richiederebbe di cambiare il modello dei dati), SNS invia notifiche, ElastiCache è una cache."
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
      "Support"
    ],
    "id": "1cf305b80883",
    "explain": "Nella risposta d'esame sono gli APN Consulting Partner (oggi Services Partner), le società che offrono servizi per progettare, revisionare e migliorare le architetture dei clienti (per esempio con il Well-Architected Partner Program). I Technology Partner vendono software, TAM e Professional Services sono team interni di AWS e non 'supportano' un'azienda esterna."
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
      "Lambda"
    ],
    "id": "2bd91ab70785",
    "explain": "AWS Lambda esegue codice senza server da gestire: niente provisioning, patch o scalabilità da configurare. Lightsail, RDS ed EC2 si basano su istanze che devi scegliere e in parte gestire."
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
      "Well-Architected",
      "Cloud Concepts"
    ],
    "id": "4ff049414708",
    "explain": "Il sistema ha continuato a funzionare nonostante il guasto di metà delle istanze: è tolleranza ai guasti (ridondanza). Elasticità e scalabilità riguardano l'adattamento al carico, la cifratura la protezione dei dati."
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
      "VPC"
    ],
    "id": "8d4548697370",
    "explain": "Il security group di un'istanza RDS funziona da firewall: decide quali IP o quali altri security group possono collegarsi alla porta del database. Le chiavi di cifratura sono in KMS, i certificati in ACM e la distribuzione del traffico la fa ELB."
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
      "ECS / Fargate"
    ],
    "id": "d2f6a542e5f4",
    "explain": "Con il launch type EC2 i container girano su istanze EC2 del tuo account: hai visibilità e controllo completi sui server del cluster. Con Fargate i server li gestisce AWS e non li vedi; 'Lightsail' e 'Lambda' non sono launch type di ECS."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "c72de45da83c",
    "explain": "Unire gli account in AWS Organizations con la fatturazione consolidata somma l'utilizzo (sconti sui volumi) e condivide gli sconti di RI e Savings Plans. Eliminare account o tracciare i costi non li riduce, e i prezzi a scaglioni non si 'abilitano'."
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
      "VPC",
      "Security"
    ],
    "id": "c1202582b172",
    "explain": "Il traffico consentito verso le istanze dipende da due livelli: i security group (sull'istanza) e le network ACL (sulla subnet). Traffic Manager non è un servizio AWS; subnet e internet gateway non definiscono regole di traffico consentito."
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
    "explain": "Il piano Business dà accesso a tutti i controlli di Trusted Advisor e all'AWS Support API. Il Concierge, la risposta in 15 minuti per sistemi critici e il TAM sono dell'Enterprise."
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
      "Elastic Beanstalk"
    ],
    "id": "9745adee470d",
    "explain": "Elastic Beanstalk automatizza distribuzione, bilanciamento del carico e scalabilità: carichi il codice e lui gestisce l'ambiente. S3 ed EFS sono storage, CodeCommit conserva il codice."
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
      "Shared Responsibility"
    ],
    "id": "cf2805c5c2ce",
    "explain": "Un database installato su EC2 è software del cliente, quindi le sue patch sono responsabilità del cliente. Su EC2 il sistema operativo è del cliente, la scelta e la gestione della cifratura lato server è del cliente e la sicurezza dell'applicazione è del cliente."
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
      "EC2",
      "Cloud Concepts"
    ],
    "id": "1a5cdd677229",
    "explain": "Rispetto ai server tradizionali, le istanze EC2 si sostituiscono e si distribuiscono su più AZ facilmente (maggiore tolleranza ai guasti) e si scalano in minuti invece che in settimane. L'accesso remoto, la protezione della rete e i backup automatici non sono garantiti dalla sola istanza EC2."
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
      "Billing & Cost",
      "Cloud Concepts"
    ],
    "id": "a2bd8f710814",
    "explain": "Con il pay-as-you-go non ci sono costi iniziali e paghi solo i servizi che usi, senza contratti a lungo termine. Le licenze di terze parti restano a tuo carico, non ci sono costi di attivazione ed esistono prenotazioni (Reserved Instances, Savings Plans)."
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
      "Governance"
    ],
    "id": "fc6761af1f7f",
    "explain": "AWS Control Tower configura e gestisce automaticamente una landing zone multi-account sicura secondo le best practice (con Organizations, guardrail e account di log e audit). Macie cerca dati sensibili, Patch Manager applica patch, Security Hub aggrega risultati di sicurezza."
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
      "CloudWatch"
    ],
    "id": "42a95caa6a67",
    "explain": "Un allarme CloudWatch sulla metrica CPUUtilization con soglia del 60% invia un avviso (per esempio tramite SNS) quando viene superata. CloudFront è una CDN, Config non monitora la CPU e SNS invia notifiche ma non monitora."
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
      "Storage",
      "EC2"
    ],
    "id": "2b0101c1b58f",
    "explain": "Per un database installato su EC2 serve storage a blocchi persistente e a bassa latenza: Amazon EBS. RDS e DynamoDB sono database gestiti, non storage per EC2; e un database su EC2 si può eseguire senza problemi."
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
    "explain": "Amazon CloudWatch monitora applicazioni e risorse con metriche, log, allarmi e dashboard: è lo strumento base di un SRE su AWS. CloudSearch è un motore di ricerca, EMR elabora big data, CloudHSM gestisce chiavi."
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
      "Lambda",
      "Billing & Cost"
    ],
    "id": "7ec2e5cb1ac0",
    "explain": "Lambda si paga per numero di richieste e per tempo di calcolo (durata moltiplicata per la memoria configurata, in GB-secondi). Volumi e placement group sono concetti di EC2; lo storage non è il fattore di costo principale."
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
    "explain": "Un utente IAM corrisponde a una persona o applicazione e ha credenziali permanenti (password, chiavi di accesso). Un ruolo viene assunto da chi ne ha bisogno (utenti, servizi, account esterni) e fornisce credenziali temporanee. Sono entrambi gratuiti."
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
      "Storage",
      "Billing & Cost"
    ],
    "id": "f2e3868e9a68",
    "explain": "I costi di EBS si riducono eliminando gli snapshot che non servono e scegliendo il tipo di volume giusto (per esempio da io1 a gp3). I bucket sono di S3, EBS non ha prenotazioni e distribuire le richieste su più volumi non riduce la spesa."
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
      "Security"
    ],
    "id": "8ee2af84ca3a",
    "explain": "GuardDuty analizza continuamente CloudTrail, VPC Flow Logs e log DNS con il machine learning e rileva minacce come ricognizione, istanze compromesse o account compromessi. Trovare la causa principale è il compito di Detective, controllare i security group aperti quello di Trusted Advisor."
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
      "Database"
    ],
    "id": "6cd9bc08882a",
    "explain": "Join e transazioni complesse sono il punto di forza dei database relazionali come Amazon RDS. DocumentDB e DynamoDB sono NoSQL (pensati per altri modelli di dati), Outposts porta l'infrastruttura AWS on-premises."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "80584b14fee4",
    "explain": "I tag sono etichette chiave-valore che permettono di classificare, gestire, filtrare le risorse e attribuire i costi. CloudWatch monitora, Service Catalog distribuisce prodotti approvati, Directory Service fornisce Active Directory."
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
      "S3",
      "Storage"
    ],
    "id": "5740c2cd8819",
    "explain": "Le classi Glacier classiche (Flexible Retrieval, Deep Archive) non permettono il recupero immediato: servono da minuti a ore (Glacier Instant Retrieval è l'eccezione, recente). Accettano qualsiasi formato, sono per dati poco consultati e non richiedono un'istanza EC2."
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
      "EC2"
    ],
    "id": "3ba10001c3dc",
    "explain": "AWS Batch gestisce code di job e predispone automaticamente la capacità (EC2 o Fargate, anche Spot) per eseguire migliaia di job batch. EC2 e Fargate forniscono calcolo ma senza la gestione dei job, Lambda@Edge esegue codice nelle edge location."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "a58b2bfd58d9",
    "explain": "Distribuire l'applicazione su più Availability Zone la protegge dal guasto di un intero data center. Più istanze o più subnet nella stessa AZ restano esposte al guasto di quella AZ; un'unica istanza potente è un single point of failure."
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
    "id": "37a43ae694c3",
    "explain": "L'accesso 24/7 ai Cloud Support Engineer via telefono, chat ed email è incluso in Business ed Enterprise (anche Enterprise On-Ramp). Il Developer ha solo email in orario lavorativo; 'Premium' e 'Standard' non sono nomi di piani."
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
    "explain": "Le chiavi di accesso a lungo termine appartengono a utenti IAM e all'utente root (per il root è sconsigliato crearle). Gruppi e ruoli non hanno chiavi a lungo termine (i ruoli usano credenziali temporanee), e il TAM è una persona di AWS."
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
      "Well-Architected"
    ],
    "id": "e7ee5b8c188b",
    "explain": "Con il loose coupling i componenti comunicano tramite interfacce stabili (code, API, eventi), quindi puoi modificarne uno senza influire sugli altri. Non elimina la gestione delle modifiche, non c'entra con la replica tra Regioni e non riguarda gli accessi privilegiati."
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
      "Storage"
    ],
    "id": "2c3cb1fd77b6",
    "explain": "Amazon EFS è un file system condiviso che più istanze montano insieme e il cui throughput cresce automaticamente con il carico: adatto ai nodi di calcolo di un'applicazione big data. EBS si collega a una sola istanza, Storage Gateway serve all'ibrido, S3 è object storage e non un file system montabile."
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
      "Cloud Concepts"
    ],
    "id": "e0fa0396eccf",
    "explain": "Nel modello di distribuzione cloud tutto gira nel cloud: non gestisci data center fisici. On-premises è il contrario; IaaS e PaaS sono modelli di servizio, non modelli di distribuzione."
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
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support",
      "Billing & Cost"
    ],
    "id": "b608642ba465",
    "explain": "AWS Marketplace esegue controlli di sicurezza periodici sui prodotti (per esempio scansioni delle AMI alla ricerca di vulnerabilità note) e offre opzioni di prezzo flessibili: gratis, a ore, a mese, annuali, BYOL o a contratto. Il software del Marketplace è pensato per girare su AWS, non su altri cloud; la fatturazione al secondo è di EC2 e non offre istanze On-Demand più economiche."
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
    "explain": "EBS replica automaticamente ogni volume all'interno della sua Availability Zone, così il guasto di un singolo componente non fa perdere i dati: è un vantaggio di durabilità. Non riguarda elasticità, tracciabilità o accessibilità."
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
    "explain": "Per un picco di un weekend che non può essere interrotto, la scelta giusta è On-Demand: nessun impegno e paghi solo quelle ore. Savings Plans e Reserved richiedono 1 o 3 anni, le Spot possono essere interrotte."
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
      "Security"
    ],
    "id": "6d21f9fa9365",
    "explain": "Amazon CloudFront si integra con AWS Shield (protezione DDoS a livello di rete e trasporto) e con AWS WAF (protezione a livello applicativo). EFS è un file system, Secrets Manager conserva credenziali, Systems Manager gestisce istanze."
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
    "explain": "La cifratura dei volumi EBS usa chiavi gestite da AWS KMS. WAF filtra il traffico web, Macie trova dati sensibili, GuardDuty rileva minacce."
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
      "Security",
      "IAM"
    ],
    "id": "c1ad8fb879d9",
    "explain": "Le priorità sono togliergli ogni accesso: ruotare tutte le chiavi di accesso che potrebbe conoscere e proteggere il root cambiando email e password e attivando la MFA. Scaricare le policy non protegge niente, ricreare tutti gli account è eccessivo e le chiamate API si controllano con CloudTrail, non con CloudWatch."
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
      "Database"
    ],
    "id": "ec3db45d905f",
    "explain": "ElastiCache fornisce un archivio dati in memoria (Redis, Valkey, Memcached) che migliora le prestazioni delle applicazioni web riducendo le letture dal database. Le edge location sono di CloudFront, Chef non c'entra, la distribuzione delle richieste è di ELB."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "8573e4c8b616",
    "explain": "Per sfruttare l'elasticità si usa EC2 Auto Scaling (istanze che seguono la domanda) e il calcolo serverless, che scala automaticamente e si paga solo quando gira. Più AZ e più Regioni riguardano la disponibilità, ELB distribuisce il traffico."
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
    "explain": "Le On-Demand eliminano la necessità di comprare capacità 'di riserva' per i picchi e permettono di aumentare o ridurre la capacità quando serve. Non sono gratuite (esiste solo il Free Tier), non sono le più economiche (lo sono Spot e Reserved) e si avviano in minuti, non in giorni."
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
      "Cloud Concepts"
    ],
    "id": "065cca637add",
    "explain": "Una Availability Zone è un luogo distinto dentro una Regione, con alimentazione e rete proprie, isolato dai guasti delle altre AZ; può contenere uno o più data center. Non attraversa più paesi, e la rete logicamente isolata è il VPC."
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
      "Migrazione & DR",
      "Cloud Concepts"
    ],
    "id": "073c6f509348",
    "explain": "Il disaster recovery su AWS si basa sulla possibilità di distribuire l'infrastruttura in più Regioni, lontane tra loro. I dispositivi di trasporto (Snow) spostano dati, i piani di supporto non sono infrastruttura e le edge location non ospitano carichi di lavoro."
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
      "Shared Responsibility",
      "Security"
    ],
    "id": "565c0ed940ce",
    "explain": "Per la conformità PCI il cliente deve configurare correttamente i servizi AWS e governare l'accesso ai dati dei titolari delle carte (incluse le policy di sicurezza per il personale). Non tutti i servizi sono in scope PCI; l'infrastruttura sottostante e la sicurezza fisica sono responsabilità di AWS."
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
    "explain": "S3 offre storage praticamente illimitato per account. Il limite che esiste riguarda il singolo oggetto (5 TB), non la quantità totale di dati."
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
    "explain": "Il pilastro Performance Efficiency riguarda la scelta dei tipi e delle dimensioni di risorse adatti al carico e il loro uso efficiente al variare della domanda. Operational Excellence, Security e Reliability si occupano di operatività, protezione e resistenza ai guasti."
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
      "CloudFront"
    ],
    "id": "2905870fc954",
    "explain": "Amazon CloudFront è la CDN che consegna dati, video, applicazioni e API in tutto il mondo con bassa latenza. Route 53 è il DNS, Connect è un contact center, EC2 fornisce server."
  },
  {
    "q": "Quali dei seguenti passaggi dovrebbe seguire un cliente quando esegue penetration test su AWS?",
    "opts": [
      "Eseguire i penetration test con Amazon Inspector e poi avvisare l'AWS Support.",
      "Chiedere e attendere l'approvazione del team di sicurezza interno del cliente, poi eseguire i test.",
      "Avvisare l'AWS Support e poi eseguire subito i test.",
      "Chiedere e attendere l'approvazione dell'AWS Support, poi eseguire i test."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ],
    "id": "868b767ac472",
    "explain": "Dal 2019 AWS non richiede più un'approvazione preventiva per i penetration test sui servizi consentiti (EC2, RDS, Lambda e altri): basta seguire la policy di AWS e i processi interni, cioè ottenere l'approvazione del proprio team di sicurezza. La vecchia risposta 'chiedere l'approvazione al supporto AWS' non è più valida; Inspector cerca vulnerabilità ma non è un penetration test."
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
    "explain": "Il Cost and Usage Report (CUR) contiene i dati più dettagliati: ogni voce per servizio, risorsa, tag e ora, consegnati in un bucket S3. Cost Explorer e la dashboard mostrano viste aggregate, Budgets gestisce soglie e avvisi."
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
      "Cloud Concepts"
    ],
    "id": "2e28838415e4",
    "explain": "È la definizione di Availability Zone: uno o più data center distinti con alimentazione, rete e connettività ridondanti, in strutture separate. Una Regione contiene più AZ; le edge location servono a CloudFront e Route 53."
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
      "Cloud Concepts"
    ],
    "id": "89031c773461",
    "explain": "Le tante Regioni sparse nel mondo sono l'infrastruttura globale di AWS, che permette la portata globale. Agilità, elasticità e pay-as-you-go sono altri vantaggi del cloud."
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
      "EC2"
    ],
    "id": "62954b6e9caf",
    "explain": "Con Amazon EC2 avvii manualmente istanze scegliendo tipo, CPU, memoria e storage in base ai requisiti. EBS e S3 sono storage, ECS orchestra container."
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
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Security"
    ],
    "id": "b4346beec591",
    "explain": "I certificati SSL/TLS si distribuiscono con AWS Certificate Manager (il metodo consigliato) oppure caricandoli in IAM come server certificate, utile nelle Regioni dove ACM non è disponibile. Route 53 gestisce il DNS ma non i certificati; Directory Service e Data Pipeline non c'entrano."
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
      "S3",
      "Lambda"
    ],
    "id": "3998eb40f76d",
    "explain": "S3 e Lambda scalano automaticamente senza configurazione: S3 accoglie qualsiasi quantità di dati, Lambda esegue tutte le invocazioni in parallelo necessarie. EC2 ed EMR richiedono Auto Scaling o configurazione, EBS ha una dimensione predisposta."
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
      "Lambda",
      "Shared Responsibility"
    ],
    "id": "2e628e31d476",
    "explain": "Con Lambda AWS gestisce la capacità (scalabilità automatica) e il sistema operativo (patch e runtime). Restano al cliente il codice dell'applicazione, il controllo degli accessi (IAM) e i dati."
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
      "EC2"
    ],
    "id": "d73d26efe3ea",
    "explain": "ELB esegue health check e manda traffico solo alle destinazioni sane: se un'istanza si guasta gli utenti non se ne accorgono. Non lavora con i bucket S3, non replica dati e non crea Read Replica."
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
      "Security"
    ],
    "id": "1bcf239d191c",
    "explain": "Le Dedicated Instances girano su hardware dedicato a un solo cliente, non condiviso con altri account. On-Demand, Spot e Reserved sono modelli di prezzo che di default usano hardware condiviso (i Dedicated Hosts sarebbero un'altra opzione valida, ma qui non sono proposti)."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "d97c1ec0da3e",
    "explain": "Per 60 petabyte la scelta è Snowmobile, un container su camion da 100 PB pensato per migrazioni oltre i 10 PB (oggi AWS consiglia più dispositivi Snowball per queste quantità). Con Snowball servirebbero centinaia di dispositivi, Transfer Acceleration passa sulla rete e richiederebbe anni, VPC è una rete."
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
    "explain": "S3 Glacier (Flexible Retrieval) costa poco e permette il recupero in 3-5 ore con il recupero standard, quindi rispetta il requisito delle 5 ore. Deep Archive costerebbe ancora meno ma richiede fino a 12 ore; EFS, S3 Standard ed EBS sono molto più costosi per un archivio."
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
      "IAM"
    ],
    "id": "aeb87f44b5d9",
    "explain": "AWS IAM gestisce utenti, gruppi, ruoli e i loro permessi. I security group filtrano traffico di rete, ECS esegue container, AWS Support è assistenza."
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
    "explain": "Il Concierge Support Team è incluso solo nei piani Enterprise (Enterprise ed Enterprise On-Ramp). Business non lo prevede; 'Premium' e 'Standard' non sono nomi di piani AWS."
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
      "Governance"
    ],
    "id": "28f8497229a2",
    "explain": "CloudTrail conserva la cronologia delle chiamate API, che mostra chi ha modificato quale risorsa e quando. Config registra lo stato delle configurazioni (non le chiamate API), CloudWatch monitora metriche, CloudFormation crea infrastruttura."
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
      "Cloud Concepts"
    ],
    "id": "affb07c4b533",
    "explain": "Con i servizi gestiti AWS si occupa di infrastruttura, patch e scalabilità: la complessità operativa si riduce e puoi rilasciare nuove soluzioni più in fretta. Proprio per questo non hai il controllo completo né gestisci tu le patch, e cifrare i dati resta necessario."
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
      "S3",
      "CloudFront"
    ],
    "id": "dc9dab1ca455",
    "explain": "S3 ospita siti web statici ed è spesso l'origine (archivio dei contenuti) di CloudFront. Non esegue calcolo (CPU), non è lo storage per un database attivo e non elabora flussi di dati (lo fa Kinesis)."
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
      "IAM"
    ],
    "id": "335f43fa4149",
    "explain": "AWS raccomanda di ruotare regolarmente le chiavi di accesso (e di preferire credenziali temporanee con i ruoli). Le chiavi non vanno condivise né scritte nel codice; le password servono solo per la console e non sostituiscono le chiavi."
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
    "explain": "La MFA aggiunge un secondo fattore (codice o chiave fisica) oltre a nome utente e password. Coppie di chiavi e chiavi di accesso sono altri tipi di credenziali, l'SDK è una libreria per programmare."
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
      "DevOps & Tools"
    ],
    "id": "6643db33e1de",
    "explain": "Le API permettono di gestire le risorse AWS in modo programmatico: automazione, script, integrazione con altri sistemi. Non migliorano le prestazioni delle risorse e non riducono di per sé il personale; il tempo di provisioning dipende dal servizio."
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
      "Storage"
    ],
    "id": "8413d92f5145",
    "explain": "Un database con molte letture e scritture ha bisogno di storage a blocchi a bassa latenza, cioè Amazon EBS (per esempio io2 o gp3). S3 e Glacier sono storage a oggetti, Storage Gateway serve all'ibrido."
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
      "Billing & Cost"
    ],
    "id": "3186fcdfc7bd",
    "explain": "AWS Budgets permette di creare budget di utilizzo delle Reserved Instances e avvisa quando l'utilizzo scende sotto la soglia scelta. Disattivare la condivisione delle RI peggiora l'utilizzo, Neptune è un database a grafo e CloudTrail registra API, non analizza prenotazioni."
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
      "Database"
    ],
    "id": "01797b9d4960",
    "explain": "Amazon Aurora offre fino a 5 volte il throughput di MySQL standard (e 3 volte quello di PostgreSQL), con piena compatibilità. Redshift è un data warehouse, DynamoDB è NoSQL, Neptune è un database a grafo."
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
      "Governance"
    ],
    "id": "3e8141f1947c",
    "explain": "AWS Service Catalog permette di creare un catalogo di prodotti IT approvati (template CloudFormation) che gli utenti possono distribuire in autonomia rispettando le regole aziendali: semplifica organizzazione e governance. Non è un catalogo dei servizi AWS, e distribuire infrastruttura con linguaggi di programmazione è il compito del CDK."
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
      "DynamoDB",
      "Shared Responsibility"
    ],
    "id": "5728317627e4",
    "explain": "Per un servizio gestito come DynamoDB AWS applica le patch al software e gestisce il sistema operativo. Protezione delle credenziali, registrazione degli accessi (abilitando CloudTrail) e policy di accesso restano al cliente."
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
      "Migrazione & DR"
    ],
    "id": "75e43f4e3b41",
    "explain": "AWS Application Discovery Service raccoglie dati sui server on-premises (configurazione, utilizzo, dipendenze) per pianificare la migrazione. Migration Hub traccia l'avanzamento delle migrazioni in corso, DMS migra database; 'Snowball Migration Service' non esiste."
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
      "Billing & Cost"
    ],
    "id": "41f43f7be276",
    "explain": "Il Cost and Usage Report fornisce i dati più dettagliati su costi e utilizzo (per risorsa, ora e tag). Cost Explorer mostra viste aggregate, CloudWatch monitora metriche, l'AMI è un'immagine per avviare istanze."
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
      "Cloud Concepts"
    ],
    "id": "dc53d45ead6a",
    "explain": "Una Regione AWS è un'area geografica che contiene più Availability Zone isolate. Le edge location sono un'infrastruttura separata, la rete virtuale dedicata è il VPC e un paese può avere più Regioni (o nessuna)."
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
      "Governance"
    ],
    "id": "33f767366532",
    "explain": "I log di CloudTrail registrano la chiamata DeleteBucket con l'identità (utente o ruolo) che l'ha eseguita. I log di SNS e SQS non esistono in questa forma, e CloudWatch Logs raccoglie log ma non registra chi ha eseguito un'operazione di gestione se non riceve gli eventi di CloudTrail."
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
      "Database"
    ],
    "id": "d3bf97f85984",
    "explain": "Il database giusto si sceglie guardando al carico: quante letture e scritture al secondo deve reggere e che tipo di query servono (join complessi, accessi per chiave, analisi, grafi). Availability Zone e sovranità dei dati riguardano dove distribuire, non quale tecnologia scegliere; i bug non sono un criterio."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "81875873d0e6",
    "explain": "I tag permettono di trovare subito le risorse di un progetto (con Resource Groups e Tag Editor) e di tracciare la spesa per progetto o reparto (tag di allocazione dei costi). Le soluzioni software si cercano nel Marketplace, le chiamate API si tracciano con CloudTrail, le risorse eliminate non hanno più tag consultabili."
  },
  {
    "q": "Cosa sono i controlli condivisi di AWS?",
    "opts": [
      "Controlli che sono responsabilità esclusiva del cliente, in base all'applicazione che distribuisce nei servizi AWS.",
      "Controlli che il cliente eredita da AWS.",
      "Controlli che si applicano sia al livello dell'infrastruttura sia ai livelli del cliente.",
      "Controlli su cui il cliente e AWS collaborano per proteggere l'infrastruttura."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "d2e81fd0dd5b",
    "explain": "Secondo la definizione di AWS, i controlli condivisi sono quelli che si applicano sia al livello dell'infrastruttura sia a quello del cliente, ma in contesti separati: per esempio le patch (AWS corregge l'infrastruttura, il cliente il sistema operativo guest), la gestione della configurazione e la formazione. Non è una collaborazione sulla stessa cosa: ognuno fa la sua parte. I controlli 'ereditati' sono quelli fisici e ambientali, quelli 'solo del cliente' sono specifici dell'applicazione."
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
      "Well-Architected"
    ],
    "id": "ebe42140e175",
    "explain": "Due principi del pilastro Performance Efficiency sono 'diventare globali in pochi minuti' (architetture multi-regione vicine agli utenti) e 'usare architetture serverless'. Sicurezza a tutti i livelli, controlli forti su identità e accessi e log di audit (tracciabilità) sono principi del pilastro Security."
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
      "EC2",
      "Shared Responsibility"
    ],
    "id": "b23354f6a372",
    "explain": "Con EC2 il cliente protegge i propri dati sensibili e installa e configura il software, anche di terze parti, sulle istanze. Patch dell'infrastruttura e hardware sono di AWS; i database gestiti (RDS) non fanno parte di EC2."
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
      "Cloud Concepts"
    ],
    "id": "9df8a9ce61aa",
    "explain": "Le ragioni principali sono le risorse elastiche (che seguono la domanda) e il risparmio sui costi (niente investimenti iniziali, economie di scala). Licenze commerciali e supporto tecnico non sono gratuiti, e i data center AWS non si visitano."
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
      "Security",
      "Governance"
    ],
    "id": "0e522f08d18e",
    "explain": "Amazon Inspector esegue valutazioni di sicurezza (vulnerabilità ed esposizione di rete), e AWS Config verifica la conformità delle configurazioni con regole e conformance pack. Il Virtual Private Gateway è un componente VPN, Batch esegue job, ECS esegue container."
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
      "EC2"
    ],
    "id": "7124b0a4d5ab",
    "explain": "EC2 non è serverless: devi scegliere, avviare e gestire le istanze (questa è l'affermazione falsa). Sono invece vere le altre: niente investimenti iniziali in hardware, tutte le istanze che servono e capacità scalabile."
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
      "Lambda"
    ],
    "id": "6614877a9ecb",
    "explain": "AWS Lambda esegue il codice solo quando un evento lo attiva (una richiesta API, un file su S3, un messaggio in coda) e paghi solo per l'esecuzione. EC2 resta acceso, CloudWatch monitora, Transit Gateway collega reti."
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
      "EC2"
    ],
    "id": "48995110da0e",
    "explain": "In AWS i server virtuali si chiamano istanze Amazon EC2. Gli snapshot EBS sono backup di volumi, il VPC è una rete, 'AWS Managed Servers' non esiste."
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
      "CAF"
    ],
    "id": "839f9771f611",
    "explain": "L'AWS Cloud Adoption Framework (CAF), nato dall'esperienza degli AWS Professional Services, aiuta le organizzazioni a costruire una roadmap per l'adozione del cloud, organizzata in sei prospettive: Business, People, Governance, Platform, Security, Operations. Secrets Manager, WAF ed EFS sono servizi, non framework."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "ce969ee7b0bc",
    "explain": "Per un'analisi costi-benefici del passaggio di un intero data center ad AWS si usava il TCO Calculator, che confrontava i costi on-premises con quelli su AWS (oggi sostituito da Migration Evaluator). Cost Explorer e Budgets lavorano su costi AWS esistenti; il Pricing Calculator stima i costi AWS ma non fa il confronto con l'on-premises."
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
      "Well-Architected",
      "CloudFormation"
    ],
    "id": "3d2e3102dac6",
    "explain": "Gestire l'infrastruttura come codice ('perform operations as code') è un principio del pilastro Operational Excellence. Trovare risorse sottoutilizzate è Cost Optimization, registrare le attività (tracciabilità) è Security, più Availability Zone è Reliability."
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
      "Cloud Concepts"
    ],
    "id": "22751d9b66b1",
    "explain": "Le startup scelgono AWS perché riducono il time to market concentrandosi sul business invece che sui data center, e perché sostituiscono grandi spese di capitale con bassi costi variabili. AWS non permette di pagare 'più tardi', non costruisce data center per te e le spese operative restano."
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
    "explain": "DynamoDB scala automaticamente il throughput (in modalità on-demand o con auto scaling) e ha latenza di pochi millisecondi a una cifra. Non ha istanze da ridimensionare, non è relazionale e non esegue CouchDB o MongoDB (per la compatibilità MongoDB c'è DocumentDB)."
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
      "S3",
      "Security"
    ],
    "id": "77cb7cf16d1a",
    "explain": "Il versioning protegge i dati dalla cancellazione o sovrascrittura accidentale (puoi recuperare le versioni precedenti), e i permessi (IAM, bucket policy, ACL) limitano chi può accedere ai dati. Deduplicazione, decifratura e conversione non sono strumenti di protezione."
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
      "Migrazione & DR"
    ],
    "id": "ab40d12a87aa",
    "explain": "Il Migration Acceleration Program (MAP) mette a disposizione partner AWS e AWS Professional Services, oltre a metodologia, strumenti e crediti, per accelerare le grandi migrazioni. Artifact, Athena e Pinpoint sono servizi che non fanno parte del programma."
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
      "Billing & Cost"
    ],
    "id": "211dce88ded4",
    "explain": "Le launch configuration di Auto Scaling sono gratuite, quindi eliminarle non evita addebiti: questa NON è una delle pratiche consigliate. Volumi EBS rimasti dopo aver terminato un'istanza, load balancer inutilizzati ed Elastic IP non associati invece costano."
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
    "explain": "Cost Explorer visualizza con grafici la spesa degli ultimi mesi (fino a 13 mesi di storico più previsioni). Il Pricing Calculator stima costi futuri, Budgets imposta soglie, la fatturazione consolidata unisce le fatture."
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
      "Shared Responsibility"
    ],
    "id": "2d2c60ba1a8a",
    "explain": "Le operazioni del data center e la sicurezza dell'infrastruttura sono di AWS. Penetration test, prenotazione della capacità (RI, Savings Plans) e audit e conformità del proprio carico di lavoro restano al cliente."
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
      "SNS"
    ],
    "id": "10eb76845b84",
    "explain": "Amazon SNS invia SMS (anche promozionali) in oltre 200 paesi, oltre a email e notifiche push. SES invia solo email, S3 conserva oggetti, SQS è una coda di messaggi. Oggi gli SMS si gestiscono anche con AWS End User Messaging."
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
    "explain": "Le istanze RDS si creano dalla Management Console (o da CLI e API) oppure con un template CloudFormation. CodeDeploy distribuisce applicazioni, le Quick Start sono distribuzioni di riferimento (che usano CloudFormation), DMS migra dati verso un database già esistente."
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
    "explain": "La fatturazione al secondo (per Linux, Windows e altri) fa pagare esattamente il tempo d'uso, senza arrotondare all'ora. Non esistono costi di attivazione o di manutenzione mensile delle istanze, e i tag sono gratuiti."
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
    "explain": "AWS Professional Services è il team di consulenti AWS che lavora con i clienti per raggiungere risultati di business attraverso il cloud. Il team di sicurezza protegge l'infrastruttura AWS, Trusted Advisor è uno strumento, il Concierge si occupa di fatturazione."
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
    "explain": "AWS KMS crea, gestisce e ruota le chiavi usate per cifrare i dati dei clienti, con controllo degli accessi tramite policy e registrazione in CloudTrail. Le SCP limitano permessi, la MFA protegge gli accessi, Macie trova dati sensibili."
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
      "Security",
      "Governance"
    ],
    "id": "17b99d909b79",
    "explain": "AWS Artifact permette di scaricare i report di conformità di AWS come SOC 1, SOC 2 e PCI DSS. Il Well-Architected Tool valuta le architetture, Glue fa ETL, Chime è un servizio di comunicazione."
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
      "Security"
    ],
    "id": "46aaec21ef47",
    "explain": "I dati sensibili in S3 si proteggono attivando la cifratura lato server (SSE-S3, SSE-KMS; oggi attiva di default) e/o cifrando i dati prima del caricamento (cifratura lato client). Eliminare le chiavi renderebbe i dati illeggibili, la cifratura è responsabilità del cliente e togliere tutti gli accessi impedisce di lavorare."
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
      "DevOps & Tools"
    ],
    "id": "ec008a431145",
    "explain": "AWS CodeBuild compila il codice sorgente, esegue i test e produce pacchetti pronti al rilascio. CodeDeploy distribuisce, CodeCommit conserva il codice, CloudEndure si occupa di migrazione e disaster recovery."
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
      "Billing & Cost"
    ],
    "id": "8d15b157bd89",
    "explain": "Il costo di S3 dipende dalla classe di storage (Standard, IA, Glacier…) e dalla quantità di GB conservati, oltre che da richieste e trasferimento dati in uscita. La cifratura predefinita SSE-S3 è gratuita, i volumi EBS non c'entrano e creare o eliminare bucket non costa."
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
    "explain": "CloudFront consegna contenuti con bassa latenza dalle edge location e, grazie alla cache e a più origini (origin failover), aumenta la disponibilità dell'applicazione. Tracciare le API è compito di CloudTrail, il DR di altri servizi, l'archiviazione di Glacier."
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
      "Altri servizi"
    ],
    "id": "cee4cd1dc6f4",
    "explain": "Amazon Connect è il contact center in cloud, omnicanale, che si configura in pochi minuti e si paga a consumo. Lightsail offre server semplici, Direct Connect è una linea di rete, Elastic Beanstalk distribuisce applicazioni."
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
      "Billing & Cost"
    ],
    "id": "81604d875dc5",
    "explain": "Il Cost and Usage Report mostra nel dettaglio i costi addebitati sull'account (anche Cost Explorer e la console di fatturazione li mostrano). Il TCO Calculator stimava risparmi prima della migrazione, i log di CloudWatch non contengono i costi e la dashboard VPC gestisce reti."
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
    "explain": "Le Reserved Instances di EC2 sono di due tipi: Standard (sconto maggiore) e Convertible (scambiabili). Spot è un modello di acquisto diverso; 'Expedited' e 'Bulk' sono opzioni di recupero di Glacier, non tipi di RI."
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
      "Security",
      "Governance"
    ],
    "id": "ca6a277cfa5b",
    "explain": "AWS Artifact dà accesso ai report e alle certificazioni rilasciati dai revisori esterni di AWS. Config valuta le tue risorse, CloudWatch monitora, CloudTrail registra le API."
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
      "Governance"
    ],
    "id": "077f32a216e0",
    "explain": "AWS Resource Groups raggruppa le risorse in base ai tag (per esempio Ambiente=Produzione) e offre una vista unica per vederle e gestirle insieme. I placement group servono al posizionamento delle istanze, il Tag Editor serve ad applicare i tag e la console da sola non crea viste per ambiente."
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
      "CloudWatch"
    ],
    "id": "fc3cb0073946",
    "explain": "CloudWatch raccoglie automaticamente le metriche delle istanze EC2 in esecuzione (CPU, rete, disco, status check). Inspector cerca vulnerabilità, CloudFormation crea risorse, CloudTrail registra chiamate API."
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
      "DevOps & Tools"
    ],
    "id": "4d09fb8973f2",
    "explain": "AWS X-Ray traccia le richieste attraverso i componenti dell'applicazione e mostra dove si perde tempo, quindi aiuta a trovare la causa dei rallentamenti. Detective indaga su incidenti di sicurezza, Security Hub aggrega risultati di sicurezza, Shield protegge dai DDoS."
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
      "Lambda",
      "ECS / Fargate"
    ],
    "id": "a6ee134ca754",
    "explain": "Fargate (container senza server da gestire) e Lambda (funzioni) sono serverless. EC2 è IaaS, ECS è l'orchestratore (serverless solo se usato con Fargate), EMR nella forma classica usa cluster di istanze."
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
      "Security"
    ],
    "id": "2ec4159d7351",
    "explain": "I Dedicated Hosts assegnano un server fisico interamente dedicato al cliente, come richiesto dalla norma. Reserved, Spot e On-Demand sono modelli di prezzo che di default usano hardware condiviso."
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
      "Billing & Cost",
      "Well-Architected"
    ],
    "id": "4559e5869956",
    "explain": "L'ottimizzazione dell'architettura significa rivedere e affinare regolarmente i carichi di lavoro (right-sizing, servizi gestiti, tipi di istanza più recenti) per usare al meglio le risorse e ridurre i costi. Tagging, budgeting e controlli sulle risorse sono altre pratiche di governance dei costi."
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
      "RDS"
    ],
    "id": "1e1a45323040",
    "explain": "Le transazioni ACID (atomicità, coerenza, isolamento, durabilità) sono tipiche dei database relazionali come RDS, adatti alle applicazioni finanziarie. Redshift è ottimizzato per l'analisi, CloudHSM gestisce chiavi, DMS migra database."
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
    "explain": "I permessi si definiscono con le policy IAM, che si possono collegare direttamente a un utente (oltre che a gruppi e ruoli). Il gruppo assegna permessi indirettamente, il ruolo si assume e 'IAM Identity' non è un meccanismo per assegnare permessi."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "a0ead0971281",
    "explain": "Con una domanda molto variabile il risparmio viene dal poter avviare e terminare istanze in base alla domanda, pagando solo ciò che serve. Istanze potenti per il picco, pagamenti anticipati o istanze più economiche non sfruttano la variabilità."
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
    "explain": "RDS supporta MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Db2 e Aurora. Teradata (un data warehouse commerciale) non è un motore di RDS."
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
      "Migrazione & DR",
      "Database"
    ],
    "id": "8a300f6e9706",
    "explain": "AWS Database Migration Service migra database on-premises verso AWS mantenendo operativo il database di origine. Transfer Acceleration velocizza i caricamenti su S3, Directory Service fornisce Active Directory, Transit Gateway collega reti."
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
      "EC2"
    ],
    "id": "453423677e6e",
    "explain": "Amazon Lightsail offre server virtuali semplici con un prezzo mensile fisso e modelli pronti come WordPress: è il modo più facile per i principianti. EC2 richiede più configurazione, S3 ospita solo siti statici (WordPress è dinamico) e il CDK è uno strumento di infrastructure as code."
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
    "explain": "Le chiavi di cifratura si gestiscono con AWS KMS (servizio gestito) o con CloudHSM (HSM hardware dedicati). Certificate Manager gestisce certificati SSL/TLS, CodeDeploy e CodeCommit sono strumenti di sviluppo."
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
      "Database"
    ],
    "id": "3452062089d2",
    "explain": "Su EC2 puoi installare ed eseguire qualsiasi software di database relazionale, anche personalizzato, con pieno controllo. RDS supporta solo i motori previsti, Cognito gestisce gli utenti, Inspector cerca vulnerabilità."
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
      "EC2"
    ],
    "id": "5f95b28f188d",
    "explain": "Auto Scaling adegua dinamicamente la capacità (numero di istanze, e quindi CPU e RAM complessive) al carico. ELB distribuisce traffico, Route 53 è il DNS, ECS orchestra container."
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
      "IAM"
    ],
    "id": "3cd674cb6442",
    "explain": "AWS IAM gestisce identità e accessi in AWS, il ruolo del team che oggi gestisce le identità on-premises (con IAM Identity Center per l'accesso dei dipendenti). Outposts porta AWS on-premises, 'AWS Federation' non è un servizio e Redshift è un data warehouse."
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
      "Well-Architected"
    ],
    "id": "57d7785a218c",
    "explain": "Due principi chiave del cloud: componenti debolmente accoppiati e risorse usa e getta (disposable) invece di server fissi da 'curare'. Capacità riservata e server al posto di servizi gestiti non sono principi; Multi-AZ e multi-regione sono scelte che dipendono dai requisiti."
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
    "explain": "L'IAM Credential Report elenca tutti gli utenti dell'account con lo stato di password, MFA e chiavi di accesso. CloudTrail registra attività, Artifact contiene i report di conformità di AWS, il Cost and Usage Report contiene i costi."
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
    "explain": "AWS CloudHSM fornisce HSM dedicati con cui generi e usi le tue chiavi di cifratura, sotto il tuo controllo esclusivo (anche KMS genera chiavi, ma qui non è tra le opzioni). Shield protegge dai DDoS, Certificate Manager gestisce certificati, WAF filtra il traffico web."
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
      "Cloud Concepts",
      "Migrazione & DR"
    ],
    "id": "03d3db09b187",
    "explain": "La massima ridondanza si ottiene distribuendo l'applicazione su più AZ in più Regioni: resiste anche al guasto di un'intera Regione. AWS non rende ridondanti in automatico le tue applicazioni; una sola AZ o una sola Regione proteggono meno."
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
      "DynamoDB"
    ],
    "id": "adc3bf2418bb",
    "explain": "S3 (classi Standard) e DynamoDB replicano automaticamente i dati su più Availability Zone della Regione. L'instance store è locale all'host, Route 53 è un servizio DNS globale (non replica i tuoi dati tra AZ), la VPN è una connessione."
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
      "CloudFront",
      "Billing & Cost"
    ],
    "id": "e7f7f8df5a31",
    "explain": "Il costo di CloudFront dipende dal numero di richieste HTTP/HTTPS e dal trasferimento dati in uscita, con prezzi diversi per area geografica (distribuzione del traffico). Volumi, tipi di istanza e classi di storage riguardano EBS, EC2 e S3."
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
      "Security"
    ],
    "id": "bf2acd828039",
    "explain": "L'AWS Acceptable Use Policy descrive gli usi vietati dei servizi AWS. Le SCP limitano i permessi in Organizations, Artifact contiene i report di conformità, Budgets gestisce i costi."
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
      "Security",
      "Support"
    ],
    "id": "4fcb6b7d785b",
    "explain": "I bollettini di sicurezza AWS e l'AWS Security Blog sono gratuiti per chiunque. Il TAM è dell'Enterprise Support, la Support API richiede almeno il Business e i corsi in aula sono a pagamento."
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
    "explain": "Con il versioning S3 conserva tutte le versioni di un oggetto: una cancellazione aggiunge solo un 'delete marker' e puoi recuperare la versione precedente (per una protezione ancora maggiore si aggiunge la MFA Delete). Le bucket policy limitano gli accessi, le lifecycle policy spostano o eliminano oggetti, disabilitare la CRR non protegge."
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
      "Shared Responsibility"
    ],
    "id": "d9876fa00fd7",
    "explain": "Proteggere l'infrastruttura globale (Regioni, AZ, edge location) è responsabilità di AWS. Le attività di audit sui propri carichi di lavoro, il monitoraggio dell'uso delle risorse e la protezione degli accessi sono del cliente."
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
    "explain": "Con i piani Basic e Developer Trusted Advisor offre solo i controlli di base (core checks: alcuni controlli di sicurezza e sulle service quotas). Business ed Enterprise danno accesso a tutti i controlli."
  },
  {
    "q": "Quale dei seguenti NON è un vantaggio dell'uso di AWS Lambda?",
    "opts": [
      "AWS Lambda esegue il codice senza dover predisporre o gestire server.",
      "AWS Lambda fornisce capacità di calcolo ridimensionabile nel cloud.",
      "Non si paga nulla quando il codice AWS Lambda non è in esecuzione.",
      "AWS Lambda può essere chiamato direttamente da qualsiasi app mobile."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ],
    "id": "5aa6db11fdb5",
    "explain": "'Fornisce capacità di calcolo ridimensionabile nel cloud' è la definizione di EC2, non di Lambda: con Lambda non scegli né ridimensioni la capacità, la gestisce AWS (quindi B è l'affermazione che NON descrive un vantaggio di Lambda). Sono invece vere le altre: niente server da gestire, nessun costo quando il codice non gira e la possibilità di invocarlo dalle app mobili tramite SDK o API Gateway."
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
      "Security",
      "Shared Responsibility"
    ],
    "id": "dd511f46d4d0",
    "explain": "AWS ottiene molte certificazioni e attestazioni (ISO 27001, ISO 9001, SOC, PCI) e supporta programmi come HIPAA, che i clienti possono usare come base per la propria conformità (report su Artifact). La conformità nel cloud è possibile, ma AWS non è responsabile del rispetto delle leggi che si applicano al cliente: la conformità è condivisa."
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
    "explain": "DynamoDB è un servizio gestito e serverless: la scalabilità dell'infrastruttura (partizioni, capacità) la gestisce AWS, per esempio in modalità on-demand. Il cliente definisce tabelle, dati e accessi."
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
      "Altri servizi"
    ],
    "id": "7ddcf5db3872",
    "explain": "Amazon Elastic Transcoder (oggi sostituito da AWS Elemental MediaConvert) converte file audio e video in formati adatti a smartphone, tablet e browser. Pinpoint invia campagne di marketing, S3 conserva i file ma non li converte, Rekognition analizza immagini e video."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "95bd7db04e86",
    "explain": "AWS Organizations permette di controllare l'accesso ai servizi AWS negli account (con le SCP) e di consolidare la fatturazione. Il percorso di adozione del cloud è il CAF, i risultati di business sono il lavoro dei Professional Services, e i metodi di pagamento si gestiscono nella console di fatturazione."
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
      "Analytics"
    ],
    "id": "badfdad1f98f",
    "explain": "Amazon Redshift è il data warehouse gestito di AWS. Shield protegge dai DDoS, RDS è un database transazionale (OLTP), Comprehend analizza testi."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "edffa77741e0",
    "explain": "AWS Marketplace è il catalogo dove compri software e servizi di terze parti che girano su AWS. Application Discovery Service raccoglie dati per le migrazioni, DevPay era un vecchio sistema di pagamento per sviluppatori, Resource Groups organizza risorse."
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
      "DevOps & Tools"
    ],
    "id": "ed7a88a628f6",
    "explain": "AWS CodeCommit era il repository Git gestito per conservare, versionare e gestire il codice. CodePipeline orchestra il rilascio, X-Ray traccia le richieste, Inspector cerca vulnerabilità."
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
      "Route 53"
    ],
    "id": "2f28510ee883",
    "explain": "Route 53 con il routing basato sulla latenza (o geoprossimità) indirizza ogni utente verso la Regione che gli risponde più in fretta. Cognito gestisce gli utenti, Systems Manager le istanze, Cloud9 era un IDE."
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
      "IAM"
    ],
    "id": "c859f8de30ad",
    "explain": "La federazione permette di accedere ad AWS con le identità aziendali già esistenti (Active Directory, SAML, OIDC), per esempio tramite IAM Identity Center, senza creare utenti IAM. Le chiavi di accesso sono credenziali AWS, i permessi IAM definiscono cosa puoi fare, le regole WAF filtrano il traffico web."
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
    "explain": "I clienti ereditano completamente da AWS i controlli fisici e di sicurezza del data center e i controlli ambientali. Consapevolezza e formazione e gestione della configurazione sono controlli condivisi; i controlli sulle comunicazioni (cifratura, rete) sono in gran parte del cliente."
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
      "Support"
    ],
    "id": "e96c2ae885f2",
    "explain": "status.aws.amazon.com era l'indirizzo della Service Health Dashboard, che mostra lo stato pubblico di tutti i servizi AWS in tutte le Regioni (oggi health.aws.amazon.com, nell'AWS Health Dashboard). Non esistono una 'Cost Dashboard' o una 'Security Dashboard' a quell'indirizzo."
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
      "CloudFront",
      "Cloud Concepts"
    ],
    "id": "23a29a5149cf",
    "explain": "La latenza dipende dalla distanza: conservare i contenuti nella Regione più vicina agli utenti, o metterli su S3 e distribuirli con CloudFront dalle edge location, la riduce. Più capacità sul server o più AZ non accorciano la distanza, e ridurre la dimensione dei file aiuta il trasferimento ma non è la risposta prevista."
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
      "Well-Architected",
      "Security"
    ],
    "id": "330b6b96fb70",
    "explain": "Tra i sette principi di sicurezza del Well-Architected ci sono 'implementare una base solida per le identità' (ruoli e credenziali temporanee, privilegio minimo) e 'abilitare la tracciabilità' (monitoraggio e log in tempo reale). Il monitoraggio va automatizzato, non fatto a mano; scalare in orizzontale riguarda Reliability e i dati sensibili si possono conservare nel cloud proteggendoli."
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
      "Billing & Cost"
    ],
    "id": "c336d05ace2f",
    "explain": "I tag di allocazione dei costi (per esempio Reparto=Marketing) permettono di classificare e tracciare la spesa per reparto o progetto in Cost Explorer e nel CUR. Il Pricing Calculator fa stime, Aurora è un database, la Price List API fornisce i listini e non la tua spesa."
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
      "DynamoDB"
    ],
    "id": "8efe50308895",
    "explain": "DynamoDB è un database non relazionale (NoSQL) completamente gestito: niente hardware o software da gestire e si crea in pochi secondi. RDS e Aurora sono relazionali, Redshift è un data warehouse."
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
      "Migrazione & DR",
      "Cloud Concepts"
    ],
    "id": "9c98e4302f0c",
    "explain": "Per replicare i dati tra aree geografiche diverse servono più Regioni AWS. Le AZ sono nella stessa area, un account AWS non è un luogo e le edge location non conservano dati in modo durevole."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "8d61e3fa9faa",
    "explain": "AWS Organizations offre la fatturazione consolidata e la governance centralizzata degli account (OU, SCP, policy). Le comunicazioni in tempo reale sono di Chime, i database NoSQL di DynamoDB e i controlli di sicurezza automatici di Security Hub o Trusted Advisor."
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
      "DevOps & Tools"
    ],
    "id": "8a82d3a89d72",
    "explain": "AWS OpsWorks automatizza la gestione della configurazione con istanze gestite di Chef e Puppet. Config registra configurazioni, CloudFormation crea infrastruttura da template, Systems Manager gestisce istanze con strumenti propri."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "2da333fffe7e",
    "explain": "La fatturazione consolidata (in AWS Organizations) unisce le fatture di account prima indipendenti in un'unica fattura. Il report dettagliato, il Cost and Usage Report e il report di allocazione dei costi analizzano i costi ma non uniscono le fatture."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "35b00efea897",
    "explain": "Il TCO Calculator stimava i risparmi confrontando il costo di un ambiente on-premises con lo stesso ambiente su AWS (oggi ritirato, sostituito da Migration Evaluator). I report per durata, risorsa o tag sono di Cost Explorer e CUR, la stima mensile è del Pricing Calculator, gli avvisi di Budgets e CloudWatch."
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
      "Networking"
    ],
    "id": "fbcb36c965cc",
    "explain": "La connettività tra rete on-premises e VPC si realizza con AWS Direct Connect (linea dedicata) o AWS VPN (tunnel cifrato su Internet). Route 53 è il DNS, Data Pipeline spostava dati, Amazon Connect è un contact center."
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
      "Shared Responsibility"
    ],
    "id": "76d8871cc604",
    "explain": "Il cliente configura la cifratura lato server dei suoi bucket S3 e le configurazioni di rete e firewall (security group, NACL). Le patch di RDS, la sicurezza fisica dei data center e la disponibilità di capacità di calcolo sono di AWS."
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
    "explain": "L'AWS Support API (gestione programmatica dei casi e accesso ai controlli di Trusted Advisor) è disponibile a partire dal piano Business. Developer e Basic non la includono."
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
      "Governance"
    ],
    "id": "96e047035f8b",
    "explain": "AWS Systems Manager Patch Manager automatizza l'applicazione delle patch alle istanze EC2 secondo una pianificazione. Collegarsi a ogni istanza è lento, la console RDS gestisce solo database RDS (non software installato su EC2), Config segnala ma non applica patch."
  },
  {
    "q": "Un'azienda vuole usare Amazon Elastic Compute Cloud (Amazon EC2) per distribuire un'applicazione commerciale globale. La soluzione di distribuzione deve avere la massima ridondanza e tolleranza ai guasti. In questa situazione, le istanze Amazon EC2 dovrebbero essere distribuite:",
    "opts": [
      "in una singola Availability Zone di una Regione AWS",
      "con più Elastic Network Interface appartenenti a subnet diverse",
      "su più Availability Zone di una Regione AWS",
      "su più Availability Zone di due Regioni AWS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Cloud Concepts",
      "Migrazione & DR"
    ],
    "id": "0630fddab965",
    "explain": "Per un'applicazione globale con la massima ridondanza e tolleranza ai guasti le istanze vanno distribuite su più Availability Zone in due Regioni: resiste anche al guasto di un'intera Regione. Più AZ in una sola Regione danno alta disponibilità ma non la ridondanza massima; una sola AZ o più interfacce di rete non bastano."
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
      "Cloud Concepts"
    ],
    "id": "19dd71c3223d",
    "explain": "Per ridurre la latenza degli utenti brasiliani si predispongono risorse nella Regione di San Paolo, vicina a loro. Direct Connect è per collegare sedi aziendali, Transit Gateway collega reti e non accorcia la distanza, più istanze a Sydney non riducono la latenza."
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
    "explain": "Uso saltuario ma senza interruzioni: On-Demand, perché paghi solo quando gira e AWS non la interrompe. Le Spot possono essere interrotte, le Reserved richiedono un impegno continuativo, le Dedicated costano di più."
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
      "Support",
      "Governance"
    ],
    "id": "d81bb94daf42",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista dell'account) mostra informazioni tempestive sugli eventi che toccano le tue risorse e notifiche proattive sulle manutenzioni programmate. La Service Health Dashboard mostra lo stato generale, Trusted Advisor dà raccomandazioni, CloudWatch mostra metriche."
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
      "Storage"
    ],
    "id": "bb50ff826503",
    "explain": "AWS Storage Gateway è il servizio di storage ibrido: le applicazioni on-premises usano file, volumi o nastri locali e i dati finiscono su AWS in modo trasparente. AWS Backup centralizza i backup, Connect è un contact center, Direct Connect è una linea di rete."
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
      "VPC",
      "Security"
    ],
    "id": "db1aa71b5a8f",
    "explain": "Il security group è il firewall virtuale a livello di istanza: regole di permesso per il traffico in entrata e in uscita, stateful. Le ACL di rete lavorano a livello di subnet, il virtual private gateway è il lato AWS della VPN, le chiavi di accesso sono credenziali."
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
      "Networking",
      "VPC"
    ],
    "id": "fb95811dab24",
    "explain": "Transit Gateway è un hub centrale: l'on-premises si collega una volta (con VPN o Direct Connect) e raggiunge tutti i VPC, anche in Regioni diverse grazie al peering tra Transit Gateway. Direct Connect o VPN da soli richiederebbero una connessione per ogni VPC; Client VPN serve ai singoli utenti remoti."
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
    "explain": "Le revisioni architetturali e operative (con il TAM) e l'accesso 24/7 ai senior Cloud Support Engineer sono dell'Enterprise Support. Business ha il supporto 24/7 ma non le revisioni con TAM; Developer e Basic offrono molto meno."
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
      "Governance"
    ],
    "id": "93e643b63591",
    "explain": "AWS Organizations, con le Service Control Policy, limita i servizi, le risorse e le azioni API disponibili a utenti e ruoli di ogni account membro. Cognito gestisce gli utenti delle app, Shield protegge dai DDoS, Firewall Manager gestisce centralmente le regole WAF e dei security group."
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
      "Security",
      "Governance"
    ],
    "id": "b2e802beb5b1",
    "explain": "AWS Artifact è il portale self-service per i report e le informazioni di conformità di AWS. Il Marketplace vende software, Inspector cerca vulnerabilità e il Support non è la fonte dei report di conformità."
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
      "S3"
    ],
    "id": "a996ceee8726",
    "explain": "S3 One Zone-IA conserva i dati in una sola AZ (meno resilienza) a un costo più basso, ma con accesso in millisecondi: adatta a copie secondarie di backup o a dati ricreabili. Standard costa di più, Glacier e Deep Archive non danno accesso rapido."
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
      "Cloud Concepts"
    ],
    "id": "aa6de9d344cd",
    "explain": "Una Availability Zone è formata da uno o più data center fisici con alimentazione, rete e connettività ridondanti. Il luogo geografico isolato è la Regione, le edge location sono altra cosa, e una AZ non ha una sola fonte di alimentazione."
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
      "CloudFormation",
      "DevOps & Tools"
    ],
    "id": "610c257188f4",
    "explain": "CloudFormation (infrastructure as code) e OpsWorks (gestione della configurazione con Chef e Puppet) automatizzano l'infrastruttura. CloudFront è una CDN, Batch esegue job, QuickSight crea dashboard."
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
    "explain": "Con CloudFormation lo stesso template crea copie identiche delle risorse in più Regioni o account (anche con StackSets). ElastiCache è una cache, CloudTrail registra le API, Systems Manager gestisce istanze già esistenti."
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
      "Security",
      "Governance"
    ],
    "id": "018d6f563e79",
    "explain": "I file di log di CloudTrail si possono cifrare con chiavi AWS KMS (SSE-KMS); di default sono cifrati con SSE-S3. Secrets Manager conserva credenziali, Systems Manager gestisce istanze, Certificate Manager gestisce i certificati per la cifratura in transito."
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
      "IAM"
    ],
    "id": "33eb8f1458dd",
    "explain": "L'accesso programmatico usa access key ID e secret access key. 'Chiave primaria' e 'chiave secondaria' non sono credenziali AWS, e lo user ID non basta per autenticarsi."
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
      "EC2"
    ],
    "id": "9eed16b4dcd4",
    "explain": "Amazon Lightsail (server virtuali semplici) e AWS Batch (job batch su EC2 o Fargate) sono servizi di calcolo. Systems Manager e CloudFormation sono di gestione, Inspector è di sicurezza."
  },
  {
    "q": "Come può un'azienda separare per reparto i costi del traffico di rete, di Amazon EC2, di Amazon S3 e degli altri servizi AWS?",
    "opts": [
      "Aggiungere a ogni risorsa tag specifici del reparto",
      "Creare un VPC separato per ogni reparto",
      "Creare un account AWS separato per ogni reparto",
      "Usare AWS Organizations"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ],
    "id": "7103976f7ed7",
    "explain": "Il modo previsto per separare i costi per reparto, su tutti i servizi, è applicare a ogni risorsa tag specifici del reparto e attivarli come tag di allocazione dei costi: Cost Explorer e il CUR mostrano poi la spesa per reparto (anche il traffico di rete delle risorse taggate). Account separati sono un'alternativa più pesante; un VPC per reparto non separa i costi di S3; Organizations da solo non attribuisce i costi ai reparti."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "0c926a3e9fa1",
    "explain": "Il vantaggio economico della fatturazione consolidata sono gli sconti sui volumi ottenuti sommando l'utilizzo di tutti gli account. Non dà il Personal Health Dashboard, non aumenta la sicurezza e non centralizza IAM."
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
      "Billing & Cost"
    ],
    "id": "3616bf45d15c",
    "explain": "AWS Budgets permette di impostare soglie personalizzate di costo e di utilizzo e invia avvisi quando vengono superate (o si prevede che lo saranno). Organizations gestisce account, Cost Explorer analizza la spesa, Trusted Advisor dà raccomandazioni."
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
    "explain": "Amazon Macie usa il machine learning per scoprire dati sensibili, come PII e credenziali, nei bucket S3 e segnalarne l'esposizione. GuardDuty rileva minacce, Inspector vulnerabilità, Shield protegge dai DDoS."
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
    "explain": "Trusted Advisor ha la categoria Service Limits (Service Quotas), che segnala quando l'utilizzo si avvicina ai limiti dei servizi. Il TCO Calculator stimava costi, il Personal Health Dashboard mostra eventi, il CUR mostra i costi."
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
      "Cloud Concepts"
    ],
    "id": "23cf1cd90144",
    "explain": "Un carico di lavoro distribuito in parte su AWS e in parte su server on-premises è un'architettura di cloud ibrido. VPN e VPC sono componenti di rete, il cloud privato è un'infrastruttura dedicata a una sola organizzazione."
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
      "IAM"
    ],
    "id": "d0afde3d8b7b",
    "explain": "La best practice è il privilegio minimo: concedere i permessi solo a chi deve svolgere quell'attività. Disabilitare la console a tutti impedisce di lavorare, non tutti hanno bisogno di chiavi e le credenziali non vanno salvate sulle istanze (si usano i ruoli)."
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
      "Governance"
    ],
    "id": "ebffeb51c791",
    "explain": "AWS Control Tower automatizza la creazione e la gestione di un ambiente multi-account sicuro e ben progettato (landing zone, guardrail, Account Factory). Il modello di responsabilità condivisa è un concetto, Security Hub aggrega risultati di sicurezza, il Well-Architected Tool valuta i carichi di lavoro."
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
      "Networking",
      "VPC"
    ],
    "id": "0c781ca9feb5",
    "explain": "Transit Gateway scala la connettività fino a migliaia di VPC con un modello hub-and-spoke. Il VPC peering è punto-punto e non scala, Direct Connect collega l'on-premises, Global Accelerator ottimizza il traffico degli utenti verso le applicazioni."
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
      "Security"
    ],
    "id": "d016b8b1dbe5",
    "explain": "AWS Shield Advanced offre protezione avanzata dai DDoS di grandi dimensioni, accesso 24/7 al Shield Response Team (gli esperti AWS) durante gli attacchi e protezione dai costi dovuti all'attacco. Firewall Manager gestisce regole centralmente, WAF filtra il traffico web, GuardDuty rileva minacce."
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
      "Billing & Cost"
    ],
    "id": "ea7f8ed39f5b",
    "explain": "Orari di inizio e fine flessibili significano che il lavoro tollera di essere interrotto o spostato: le Spot sono le più convenienti (fino al 90% di sconto). On-Demand costa di più, Reserved richiede un impegno, i Dedicated Hosts sono i più cari."
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
    "explain": "Il cliente protegge i dati in transito (TLS, VPN) e garantisce l'integrità dei dati (autenticazione, firme, hash). La sicurezza fisica e ambientale, i dispositivi di rete fisici e la dismissione dei dischi sono di AWS."
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
    "explain": "Un carico eseguito raramente e che può essere interrotto è perfetto per le Spot, con sconti fino al 90%. On-Demand costa di più, le Reserved richiedono un uso continuativo per convenire, i Dedicated Hosts sono i più cari."
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
      "ECS / Fargate"
    ],
    "id": "347c554a72b4",
    "explain": "Amazon ECS è il servizio di orchestrazione dei container: si occupa di installare, gestire e scalare la gestione del cluster. ECR conserva le immagini dei container, Elastic Beanstalk distribuisce applicazioni, EBS è storage."
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
      "IAM",
      "EC2"
    ],
    "id": "17866a9db057",
    "explain": "Un ruolo IAM collegato all'istanza fornisce credenziali temporanee ruotate automaticamente, con cui l'applicazione può scrivere su S3 senza chiavi a lungo termine. Le chiavi di un utente IAM sono proprio le credenziali a lungo termine da evitare; Cognito serve agli utenti delle app, Shield protegge dai DDoS."
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
      "Support"
    ],
    "id": "2c3663e8cfb0",
    "explain": "Con il piano Developer si apre un caso di supporto tecnico (via email, in orario lavorativo). I Professional Services e i consulting partner sono a pagamento per progetti, e il TAM è solo nell'Enterprise."
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
      "VPC"
    ],
    "id": "bfab229009dd",
    "explain": "L'Internet Gateway permette la comunicazione tra il VPC e Internet, in entrata e in uscita, per le risorse con IP pubblico. La VPN usa un virtual private gateway, i limiti di banda non sono il suo scopo e il bilanciamento del traffico è compito di ELB."
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
      "RDS"
    ],
    "id": "84b2fde12522",
    "explain": "Con RDS Multi-AZ, in caso di guasto della AZ primaria, il failover sulla standby è automatico e l'endpoint DNS resta lo stesso: l'applicazione riprende senza interventi manuali. Storage Gateway non ospita database, e load balancer e CloudFront non servono a rendere ridondante un database."
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
      "EC2"
    ],
    "id": "7b56b73cca81",
    "explain": "Elastic Load Balancing è il servizio gestito che distribuisce il traffico in entrata su una o più istanze EC2 (e altre destinazioni). Il NAT gateway dà alle subnet private accesso a Internet in uscita, Athena interroga dati su S3, PrivateLink espone servizi in modo privato."
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
      "Support"
    ],
    "id": "c2a7a147eb7f",
    "explain": "Trusted Advisor dà raccomandazioni in sei categorie: ottimizzazione dei costi, prestazioni, sicurezza, tolleranza ai guasti, limiti dei servizi ed eccellenza operativa. Audit, architettura serverless e scalabilità non sono categorie."
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
      "IAM"
    ],
    "id": "ff3dde81e4e1",
    "explain": "Chiudere l'account e cambiare il piano di AWS Support sono tra le poche attività riservate all'utente root (come cambiare l'email del root o ripristinare permessi IAM). Policy IAM, ruoli per EC2 e chiavi di accesso per gli utenti si gestiscono con un utente IAM che ha i permessi giusti."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "d8ae741df686",
    "explain": "La tolleranza ai guasti è la ridondanza integrata nei componenti dell'applicazione, che le permette di continuare a funzionare se uno di essi si guasta. Sostenere la crescita è scalabilità, ripristinare i dati è disaster recovery, la protezione è sicurezza."
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
      "Analytics"
    ],
    "id": "55b40eade4b4",
    "explain": "Amazon Redshift è il data warehouse scalabile di AWS. S3 è object storage (può fare da data lake), DynamoDB è NoSQL transazionale, Kinesis gestisce flussi in tempo reale."
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
      "EC2"
    ],
    "id": "463e0a7f3cdd-2",
    "explain": "Elastic Load Balancing distribuisce il traffico in entrata su più destinazioni (istanze EC2, container, IP), anche in più AZ, e ne controlla lo stato di salute. Il DNS è Route 53, le metriche sono CloudWatch, il numero di istanze lo regola Auto Scaling."
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
      "DevOps & Tools"
    ],
    "id": "737715ba517f",
    "explain": "Con AWS si interagisce tramite Management Console, CLI, SDK e API. On-premises e ibrido sono modelli di distribuzione, SaaS è un modello di servizio."
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
      "Cloud Concepts"
    ],
    "id": "8e5b77ea114a",
    "explain": "Le tante Regioni sparse nel mondo sono l'infrastruttura globale di AWS. Agilità, elasticità e pay-as-you-go sono altri vantaggi del cloud."
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
      "CloudFront",
      "S3"
    ],
    "id": "c4917a339e5a",
    "explain": "S3 conserva i video in modo durevole e scalabile e CloudFront li distribuisce dalle edge location con la latenza più bassa. Storage Gateway serve all'ibrido, EFS è un file system per server, Glacier è archiviazione con recupero lento."
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
      "Cloud Concepts",
      "Networking"
    ],
    "id": "f6ffa2fbf26a",
    "explain": "Quando parte dell'applicazione gira nel cloud e parte nel data center aziendale si parla di architettura ibrida. Cloud-native indica applicazioni costruite interamente per il cloud, IaaS è un modello di servizio."
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
      "Security",
      "Support"
    ],
    "id": "137920b94df0",
    "explain": "AWS offre i controlli di sicurezza di Trusted Advisor e la cifratura dei dati (KMS, cifratura lato server). I token MFA fisici si comprano da terzi, i penetration test li esegue il cliente e non esiste un rilevamento automatico del copyright in S3."
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
      "DevOps & Tools"
    ],
    "id": "3b65e46f4775",
    "explain": "CodeDeploy distribuisce applicazioni anche su server on-premises (con un agente), e lo stesso vale per OpsWorks (Chef e Puppet). Elastic Beanstalk e Batch lavorano solo su AWS, X-Ray traccia le richieste."
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
      "Well-Architected"
    ],
    "id": "1867c5fee706",
    "explain": "Per riprogettare un monolite si separano i componenti in modo che comunichino tramite code o API (loose coupling) e possano scalare in modo indipendente (design for scalability). Monitoraggio manuale, server fissi e dipendenza da singoli componenti sono anti-pattern."
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
      "Support",
      "Governance"
    ],
    "id": "fdf854c5b51d",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista dell'account) mostra in modo personalizzato lo stato dei servizi da cui dipendono le tue risorse. La Service Health Dashboard mostra lo stato generale per tutti, X-Ray traccia le richieste, CloudWatch monitora le tue risorse."
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
      "RDS",
      "CloudFormation"
    ],
    "id": "c193da8ee27c",
    "explain": "Un database RDS si crea dalla Management Console (o da CLI e API) o in modo automatico con CloudFormation. Il Concierge si occupa di fatturazione, S3 conserva oggetti, EC2 Auto Scaling gestisce istanze EC2."
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
      "IAM"
    ],
    "id": "3fed72b424b2",
    "explain": "Il privilegio minimo limita i danni se un utente viene compromesso, e la MFA protegge gli accessi degli utenti privilegiati. CloudTrail registra ma non protegge, CloudFront è una CDN e condividere un utente tra più persone è una pessima pratica."
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
    "explain": "L'audit delle risorse fisiche dei data center è gestito interamente da AWS (i clienti consultano i report su Artifact). Patch del sistema operativo guest, cifratura dei dati e MFA sono responsabilità del cliente."
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
    "explain": "Gli AWS Online Tech Talks (webinar condotti da esperti AWS) e l'AWS Classroom Training (corsi con istruttore) permettono di imparare con un docente. Trusted Advisor è uno strumento, blog e forum si consultano da soli."
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
      "VPC"
    ],
    "id": "f0b40f83d2cb",
    "explain": "Dalla dashboard VPC si configurano subnet, tabelle di routing, gateway, network ACL e security group. CloudFront e Route 53 hanno console proprie, i load balancer si gestiscono dalla console EC2."
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
      "Migrazione & DR"
    ],
    "id": "c15a0b8a152f",
    "explain": "Il TCO Calculator serviva proprio all'analisi costi-benefici della migrazione, confrontando i costi on-premises con quelli su AWS (oggi sostituito da Migration Evaluator). Cost Explorer analizza costi AWS esistenti, il Simple Monthly Calculator stimava solo i costi AWS, Trusted Advisor ottimizza un account esistente."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "d3323f76ac87",
    "explain": "Con gli account collegati e la fatturazione consolidata (AWS Organizations) lo sconto delle Reserved Instances si condivide tra gli account. Cost Explorer e i report di utilizzo mostrano dati ma non condividono sconti."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "0e579b17dbab",
    "explain": "AWS Organizations consolida la fatturazione di più account in un'unica fattura. Il Cost and Usage Report, Cost Explorer e Budgets analizzano e controllano i costi ma non consolidano le fatture."
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
      "CloudFront"
    ],
    "id": "9611bfa39187",
    "explain": "CloudFront mette in cache i dati dell'applicazione nelle edge location vicine agli utenti di tutto il mondo, riducendo la latenza anche se l'applicazione sta in una sola Regione. Direct Connect collega la tua sede, Route 53 risolve il DNS ma non avvicina i dati, Transfer Acceleration velocizza solo i caricamenti su S3."
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
      "Cloud Concepts"
    ],
    "id": "b09a1e77989b",
    "explain": "Nel modello cloud tutta l'infrastruttura è nel cloud, quindi le spese IT in conto capitale diventano completamente spese operative. On-premises e ibrido mantengono almeno in parte investimenti in hardware; PaaS è un modello di servizio, non di distribuzione."
  },
  {
    "q": "Perché la gestione degli asset su AWS è più facile della gestione degli asset in un data center fisico?",
    "opts": [
      "AWS fornisce un Configuration Management Database che gli utenti possono mantenere.",
      "AWS esegue scansioni di individuazione dell'infrastruttura per conto del cliente.",
      "Amazon EC2 genera automaticamente un report degli asset e lo mette nel bucket Amazon S3 indicato dal cliente.",
      "Gli utenti possono raccogliere in modo affidabile i metadati degli asset con poche chiamate API."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Governance"
    ],
    "id": "ea19b805c93c",
    "explain": "Su AWS ogni risorsa è accessibile tramite API: con poche chiamate (o con strumenti come Config e Resource Groups) ottieni in modo affidabile l'inventario e i metadati di tutti gli asset. AWS non esegue scansioni di individuazione per te, non fornisce un CMDB da mantenere e EC2 non genera da solo report degli asset in S3."
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
    "explain": "Le Read Replica tra Regioni (Cross-Region) copiano il database in un'altra Regione: ridondanza globale, letture vicine agli utenti e possibilità di promuoverle in caso di disastro. Snapshot e patch non creano database ridondanti, i Provisioned IOPS riguardano le prestazioni."
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
    "explain": "Concedere solo l'accesso alle risorse necessarie per un'attività si chiama privilegio minimo (least privilege). Gli altri termini non sono quelli usati da AWS."
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
      "Billing & Cost",
      "Governance"
    ],
    "id": "1cd987f0439a",
    "explain": "I costi per reparto si individuano con account separati per reparto (magari in un'organizzazione) oppure con tag che associano ogni risorsa al reparto. MFA, Reserved Instances e ordini di acquisto non attribuiscono i costi."
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
    "explain": "Il cliente configura sistema operativo, rete e firewall delle proprie risorse. Proteggere hardware e strutture, fornire report sotto NDA e ottenere certificazioni di terze parti sono attività di AWS."
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
      "Support",
      "Security"
    ],
    "id": "4f0a834c9f6a",
    "explain": "Trusted Advisor controlla continuamente l'account e fornisce indicazioni sulle best practice di sicurezza (security group aperti, MFA sul root, bucket pubblici, chiavi esposte). X-Ray traccia le richieste, CloudWatch monitora metriche, Systems Manager gestisce istanze."
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
    "explain": "EC2 Auto Scaling aggiunge elasticità aumentando o riducendo il numero di istanze al variare della domanda. I resource group organizzano risorse, le lifecycle policy gestiscono snapshot o oggetti S3, l'ALB distribuisce il traffico ma non crea istanze."
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
      "Shared Responsibility"
    ],
    "id": "95dc3e01738c",
    "explain": "Nel cloud il cliente gestisce la cifratura dei propri dati e le regole del firewall (security group, NACL). Virtualizzazione, hardware e strutture fisiche sono gestiti da AWS."
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
      "Storage"
    ],
    "id": "80bd802299f3",
    "explain": "Storage Gateway (per esempio File Gateway) espone protocolli standard come NFS e SMB alle applicazioni on-premises e salva i dati su S3 in modo trasparente. Direct Connect è una linea di rete, Snowball e Snowball Edge sono dispositivi per trasferimenti fisici."
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
      "Shared Responsibility"
    ],
    "id": "83af84458845",
    "explain": "Aggiornare il firmware degli host fisici che fanno girare EC2 è responsabilità di AWS. Network ACL, security group e patch del sistema operativo delle istanze sono del cliente."
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
      "Well-Architected"
    ],
    "id": "a88b6cba5093",
    "explain": "RDS Multi-AZ applica il principio 'progettare per i guasti': c'è sempre una standby pronta a subentrare se la primaria o la sua AZ si guasta. Non riguarda l'accoppiamento debole, l'automazione in generale o l'uso di servizi al posto dei server."
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
    "explain": "Privilegio minimo significa concedere solo i permessi necessari per una determinata attività. Non c'entra il numero di utenti, e dare AdministratorAccess anche agli utenti fidati lo viola."
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
      "Well-Architected"
    ],
    "id": "bd7d3240eca7",
    "explain": "Con il loose coupling, se un componente si guasta gli altri continuano a funzionare: si evitano i guasti a cascata. Non riguarda la latenza, i flussi dipendenti sono il contrario e il data center fisico non c'entra."
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
      "Networking"
    ],
    "id": "a877f7bd88fe",
    "explain": "AWS Direct Connect fornisce una connessione privata e dedicata tra la sede e AWS, senza passare da Internet pubblico. Il NAT gateway serve all'uscita su Internet, Transfer Acceleration velocizza S3, WAF filtra il traffico web."
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
      "Well-Architected"
    ],
    "id": "a29485dd2ebd",
    "explain": "Il problema è l'accoppiamento stretto: la soluzione è disaccoppiare i componenti, isolandoli in modo che ognuno funzioni anche quando un altro si guasta. Elasticità, parallelismo o più risorse non eliminano la dipendenza tra componenti."
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
      "IAM"
    ],
    "id": "7bab10044cc8",
    "explain": "MFA e una password policy robusta aumentano la sicurezza degli accessi all'account. Certificate Manager gestisce certificati SSL/TLS, Cognito gestisce gli utenti delle applicazioni, Organizations organizza più account."
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
      "Governance"
    ],
    "id": "58b884016100",
    "explain": "AWS Organizations gestisce centralmente più account e i relativi accessi con le SCP (e, insieme a IAM Identity Center, l'accesso degli utenti a tutti gli account). Service Catalog pubblica prodotti approvati, Config valuta la conformità, Trusted Advisor dà raccomandazioni."
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
      "Billing & Cost"
    ],
    "id": "ea19a19053ae",
    "explain": "AWS Budgets invia un avviso quando la spesa reale o prevista si avvicina o supera l'importo che hai impostato. Il CUR e Cost Explorer analizzano i costi, Trusted Advisor dà raccomandazioni."
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
    "explain": "Il Technical Account Manager designato è incluso nell'Enterprise Support (l'Enterprise On-Ramp ha invece un gruppo di TAM condivisi). Business, Developer e Basic non hanno un TAM."
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
    "explain": "Il pilastro Reliability include il principio 'ripristinare automaticamente dopo un guasto'. Una sola AZ è un single point of failure, l'ottimizzazione dei costi è un altro pilastro, 'operations as code' appartiene a Operational Excellence."
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
      "Storage",
      "EC2"
    ],
    "id": "8058e4b9bf8a",
    "explain": "L'instance store è un disco fisicamente collegato all'host: veloce ma effimero, e i dati si perdono quando l'istanza viene arrestata o terminata. EBS, EFS e S3 sono storage persistenti."
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
      "Cloud Concepts"
    ],
    "id": "62678a1a543c",
    "explain": "Nel cloud non serve indovinare la capacità futura: si scala quando serve. I contratti hardware non si usano per AWS, i costi seguono l'utilizzo (non sono fissi) e i report di AWS non sostituiscono i tuoi audit."
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
      "Well-Architected"
    ],
    "id": "9ecbe7969861",
    "explain": "Progettare per i guasti (design for failure) è un principio fondamentale: si dà per scontato che i componenti si guastino e si costruisce la ridondanza. Backup nella stessa Regione dei dati, componenti strettamente accoppiati ed evitare il multi-threading non sono principi consigliati."
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
    "explain": "Un carico di 24 ore all'anno, non interrompibile: On-Demand, perché paghi solo quelle ore senza impegni. Le Reserved non convengono per un uso così raro, le Spot possono essere interrotte, le Dedicated costano di più."
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
      "RDS",
      "Database"
    ],
    "id": "169c603d0b8b",
    "explain": "Amazon Aurora è compatibile con MySQL e il suo storage cresce automaticamente a blocchi fino a 128 TiB. RDS for MySQL ha uno storage autoscaling opzionale ma la risposta tipica dell'esame è Aurora; EC2 e Lightsail non sono database."
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
      "VPC",
      "Networking"
    ],
    "id": "3470a1592f32",
    "explain": "Il VPC peering collega direttamente due VPC (anche di account o Regioni diversi) con IP privati. Gli endpoint VPC collegano servizi AWS, ClassicLink collegava le vecchie istanze EC2-Classic, Direct Connect collega l'on-premises."
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
      "DevOps & Tools"
    ],
    "id": "157b2a725032",
    "explain": "AWS CodeCommit era il servizio di controllo di versione (repository Git gestiti). CodeStar era un'interfaccia per avviare progetti, la CLI è uno strumento da riga di comando, Cognito gestisce l'autenticazione degli utenti delle app."
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
      "Billing & Cost",
      "Migrazione & DR"
    ],
    "id": "42d8cf229238",
    "explain": "Il TCO Calculator confrontava il costo di un carico di lavoro on-premises con quello equivalente su AWS (oggi sostituito da Migration Evaluator e Pricing Calculator). Il Simple Monthly Calculator stimava solo i costi AWS; la console di fatturazione e Cost Explorer mostrano costi già sostenuti."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "17344b034a26",
    "explain": "AWS Snowmobile era il camion con container da 100 PB per trasferire dataset su scala exabyte (oggi non più offerto, ma compare all'esame). Snowball gestisce decine di TB per dispositivo, Batch esegue job, Migration Hub traccia le migrazioni."
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
      "Billing & Cost",
      "Cloud Concepts"
    ],
    "id": "0287a80af759",
    "explain": "Il modello di prezzo di AWS è pay-as-you-go: paghi solo ciò che usi, quindi un costo variabile. Durata fissa, colocation e pianificazione sono tipici dei modelli tradizionali."
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
    "explain": "Elastic Load Balancing offre Application Load Balancer (livello 7), Network Load Balancer (livello 4), Gateway Load Balancer e il vecchio Classic Load Balancer. F5 e NetScaler sono prodotti di terze parti; 'pubblici con Application Auto Scaling' e 'cross-zone con IP pubblici e privati' non sono tipi di load balancer."
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
      "Cloud Concepts"
    ],
    "id": "66bd47f18e6b",
    "explain": "AWS non richiede contratti a lungo termine e si paga a consumo. Non dà il controllo completo dell'infrastruttura sottostante, non ha edge location in ogni paese e ha limiti (quote) sui servizi."
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
      "CloudFront"
    ],
    "id": "1528fdfc6144",
    "explain": "CloudFront mette in cache i dati letti più spesso nelle edge location vicine agli utenti, dando i tempi di risposta più rapidi. CloudTrail registra le API, CloudFormation crea infrastruttura, un virtual private gateway su Direct Connect collega l'on-premises."
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
      "Security",
      "Governance"
    ],
    "id": "39951896ab33",
    "explain": "AWS Artifact è il portale self-service per scaricare su richiesta i report di conformità di AWS. Config valuta le tue risorse, Certificate Manager gestisce certificati SSL/TLS, Inspector cerca vulnerabilità."
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
      "Database"
    ],
    "id": "e71b0e33ab6c",
    "explain": "Un database autogestito si esegue installandolo su un'istanza EC2, dove controlli e gestisci tutto tu. Route 53 è il DNS, X-Ray traccia le richieste, Snowmobile trasferiva dati."
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
      "Support"
    ],
    "id": "38edf450f54c",
    "explain": "Il Technical Account Manager (TAM) designato è riservato all'Enterprise Support: un riferimento tecnico che conosce il tuo ambiente e dà indicazioni proattive. I Cloud Support Engineer sono disponibili anche negli altri piani a pagamento, i Solutions Architect lavorano con molti clienti, il 'Technical Project Manager' non esiste."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "2b5af6594531",
    "explain": "Per una startup in crescita il risparmio maggiore viene dal pagare risorse on-demand solo quando servono, per esempio nei picchi, invece di comprare capacità in anticipo. Automatizzare gli ambienti o il CRM non riduce il costo del calcolo, e AWS non impone budget mensili fissi."
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
      "Cloud Concepts"
    ],
    "id": "2cbe7fd88da7",
    "explain": "Arrivare velocemente sul mercato e cambiare in fretta i requisiti è l'agilità: risorse in minuti, sperimentazione rapida, basso costo del fallimento. Elasticità, affidabilità e prestazioni riguardano altri aspetti."
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
    "explain": "L'insieme completo dei controlli di Trusted Advisor è incluso nei piani Business ed Enterprise (anche Enterprise On-Ramp). Basic e Developer hanno solo i controlli di base."
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
      "Security",
      "CloudFront"
    ],
    "id": "cabe1222a507",
    "explain": "AWS WAF blocca gli attacchi di livello applicativo (anche flood HTTP con il rate limiting), e CloudFront assorbe il traffico sulla rete globale di edge location con Shield Standard incluso. DynamoDB ed EC2 non mitigano DDoS di per sé, Inspector cerca vulnerabilità."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "f7be3901eba8",
    "explain": "Per i carichi su AWS le voci di costo sono calcolo, storage e trasferimento dati. Strutture, infrastruttura di rete fisica e ciclo di vita dell'hardware sono costi on-premises che con AWS spariscono (li sostiene AWS e sono inclusi nel prezzo)."
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
      "Security"
    ],
    "id": "33ac104d9e49",
    "explain": "Amazon GuardDuty rileva in modo continuo attività malevole o non autorizzate (accessi anomali, istanze compromesse, mining di criptovalute) analizzando log e traffico. Rekognition analizza immagini, Trusted Advisor dà raccomandazioni di configurazione, CloudWatch monitora metriche."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "eb0a212d2751",
    "explain": "Su AWS Marketplace molti prodotti di terze parti offrono prove gratuite (free trial), così puoi provarli prima di acquistarli a lungo termine. L'APN è la rete dei partner, Managed Services gestisce l'infrastruttura per te, Service Catalog contiene prodotti approvati internamente."
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
      "DynamoDB"
    ],
    "id": "713ba57f80d4-2",
    "explain": "DynamoDB è il database NoSQL gestito (e serverless) di AWS. Redshift è un data warehouse, Aurora e RDS for MariaDB sono relazionali."
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
      "Billing & Cost"
    ],
    "id": "7d492cf6a7b8",
    "explain": "Gli allarmi di fatturazione si creano in Amazon CloudWatch sulla metrica EstimatedCharges (dopo aver attivato gli avvisi di fatturazione). Trusted Advisor dà raccomandazioni, CloudTrail registra le API, QuickSight crea dashboard."
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
      "Shared Responsibility"
    ],
    "id": "047fab6227de",
    "explain": "Con Docker su EC2 AWS si occupa solo dell'hardware e delle strutture fisiche. Scalare l'applicazione, pianificare i container sul cluster e gestire il sistema operativo guest (patch comprese) sono responsabilità del cliente, perché usa EC2 e non un servizio gestito."
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
      "CloudFront"
    ],
    "id": "eb6d42d70c50",
    "explain": "CloudFront serve i contenuti dalle edge location vicine ai clienti di tutto il mondo, riducendo la latenza. Direct Connect collega la tua sede, Auto Scaling aggiunge capacità ma non riduce la distanza, Transit Gateway collega reti."
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
    "explain": "Due best practice di IAM: una password policy robusta e la rotazione regolare delle chiavi di accesso. Le credenziali non si condividono mai, le chiavi di accesso non servono per la console e i ruoli vanno usati proprio per delegare permessi."
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
      "VPC"
    ],
    "id": "84916f3cf983",
    "explain": "I VPC Flow Logs registrano le informazioni sul traffico IP in entrata e in uscita da VPC, subnet e interfacce di rete. Config registra configurazioni, Trusted Advisor dà raccomandazioni, CloudTrail registra le chiamate API (non il traffico di rete)."
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
      "Networking"
    ],
    "id": "3e8c9a20804a",
    "explain": "AWS Global Accelerator controlla continuamente lo stato degli endpoint e instrada il traffico verso gli endpoint regionali sani più vicini, migliorando la disponibilità. Inspector cerca vulnerabilità, CloudWatch monitora ma non instrada il traffico, CloudFront è una CDN per contenuti."
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
      "Well-Architected",
      "Governance"
    ],
    "id": "132de0bb64f5",
    "explain": "Per gestire le modifiche (pilastro Reliability) servono visibilità e tracciabilità: Config genera l'inventario e la cronologia delle risorse, CloudTrail registra le chiamate API in log verificabili (con validazione dell'integrità). I limiti dei servizi non sono controlli di permesso, ACM gestisce certificati, GuardDuty rileva minacce."
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
      "CloudWatch",
      "Security"
    ],
    "id": "132777a8fdf0",
    "explain": "Con CloudTrail che invia gli eventi a CloudWatch (o EventBridge) puoi creare un allarme che ti avvisa a ogni accesso dell'utente root alla console. Config valuta configurazioni, Trusted Advisor dà raccomandazioni, IAM gestisce identità ma non invia avvisi."
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
      "Well-Architected"
    ],
    "id": "1dcac21146c4",
    "explain": "Il principio da applicare è progettare componenti debolmente accoppiati. I server vanno trattati come risorse usa e getta, l'integrazione asincrona (code, eventi) è preferita a quella sincrona; la D (regole meno permissive) è una buona pratica di sicurezza, ma la risposta attesa è il principio architetturale del loose coupling."
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
      "Migrazione & DR"
    ],
    "id": "603a2cfab3cf",
    "explain": "Snowball (trasferimento fisico di grandi volumi) e DMS (migrazione di database via rete) spostano dati dall'on-premises ad AWS. Lambda esegue codice, ElastiCache è una cache, API Gateway espone API."
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
      "Well-Architected",
      "EC2"
    ],
    "id": "28894d7f66b9",
    "explain": "Se i dati raddoppiano ogni mese, un'istanza più grande prima o poi non basterà più: conviene distribuire il lavoro su più istanze in parallelo (scalabilità orizzontale). Cambiare famiglia o usare bare metal migliora una volta sola ma non scala con la crescita."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "63e767226d22",
    "explain": "Si crea (o si sceglie) un account di gestione, si configura AWS Organizations e si invitano gli account esistenti: governance centralizzata (SCP) e fatturazione consolidata. Un'organizzazione si crea in un solo account, non in ognuno; inoltrare fatture o sommare i costi in Cost Explorer non consolida i pagamenti."
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
      "Cloud Concepts",
      "EC2"
    ],
    "id": "9efeec46f275",
    "explain": "Aggiungere o togliere istanze in base alla domanda è l'elasticità. L'economia di scala riguarda i prezzi, l'alta disponibilità la ridondanza, l'agilità la velocità di innovazione."
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
    "explain": "EC2 Auto Scaling regola dinamicamente il numero di istanze in base alla domanda (anche con scaling pianificato o predittivo per eventi noti come le giornate di shopping). CloudTrail registra API, Forecast fa previsioni ma non scala risorse, Config registra configurazioni."
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
      "Networking"
    ],
    "id": "1162d100fc3a",
    "explain": "AWS VPN (Site-to-Site o Client VPN) crea tunnel cifrati attraverso Internet pubblico verso le risorse AWS. Il VPC peering collega VPC, Direct Connect è una linea privata che non passa da Internet, Pinpoint invia campagne di marketing."
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
      "Billing & Cost"
    ],
    "id": "13c91f5f1b54",
    "explain": "Cost Explorer prevede la spesa futura in base all'andamento storico (forecast). Trusted Advisor dà raccomandazioni di risparmio ma non previsioni, Organizations gestisce account, Inspector cerca vulnerabilità."
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
      "CloudFront"
    ],
    "id": "3c11456253e2",
    "explain": "CloudFront mette in cache i contenuti statici nelle edge location vicine agli utenti di tutto il mondo. ElastiCache fa cache in memoria per i database all'interno della Regione, EFS ed EBS sono storage."
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
      "CloudWatch"
    ],
    "id": "2ab06080b778",
    "explain": "CloudWatch mostra la metrica CPUUtilization dell'istanza e permette di capire se la CPU è sufficiente (e di impostare allarmi). Config registra configurazioni, CloudTrail registra le API, Inspector cerca vulnerabilità."
  },
  {
    "q": "Perché è vantaggioso usare gli Elastic Load Balancer con le applicazioni?",
    "opts": [
      "Permettono la conversione da Application Load Balancer a Classic Load Balancer.",
      "Sono in grado di gestire i continui cambiamenti negli andamenti del traffico di rete.",
      "Aggiungono e rimuovono automaticamente istanze EC2 in base alla domanda.",
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
    "id": "f7db82395903-2",
    "explain": "Elastic Load Balancing scala automaticamente la propria capacità e gestisce i continui cambiamenti del traffico, distribuendolo sulle destinazioni sane. Aggiungere e rimuovere istanze è compito di Auto Scaling, i load balancer si pagano e la conversione da ALB a CLB non è un vantaggio."
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
      "Shared Responsibility"
    ],
    "id": "039e2ab65116",
    "explain": "Il cliente gestisce la configurazione delle proprie applicazioni e dei security group. Accessi alle strutture, ciclo di vita dell'hardware e protezione dell'infrastruttura di rete sono di AWS."
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
      "Well-Architected"
    ],
    "id": "85c23d60d227",
    "explain": "Ridurre le interdipendenze perché un guasto non si propaghi a cascata è il loose coupling (accoppiamento debole). Scalabilità e automazione sono principi diversi."
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
      "Security",
      "VPC"
    ],
    "id": "d664157a52ba",
    "explain": "Le network ACL hanno regole di DENY che bloccano un intervallo di IP a livello di subnet, e AWS WAF blocca richieste da reti specifiche (IP set) davanti all'applicazione web. I security group non hanno deny; Trusted Advisor, Direct Connect e Organizations non bloccano traffico."
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
      "Storage"
    ],
    "id": "0fda884b5b6e",
    "explain": "Amazon EFS è un file system condiviso che più istanze EC2 montano contemporaneamente. EBS si collega di norma a una sola istanza, S3 è object storage e non un file system, Artifact contiene report di conformità."
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
      "Shared Responsibility"
    ],
    "id": "4928b6e60727",
    "explain": "AWS protegge la rete dall'IP spoofing e dal packet sniffing e, essendo RDS gestito, installa le patch sull'istanza RDS. Antivirus sulle istanze EC2, cifratura tra EC2 ed ELB e configurazione di security group e NACL sono del cliente."
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
      "Cloud Concepts"
    ],
    "id": "65c061fe7962",
    "explain": "L'elasticità regola automaticamente la capacità di calcolo per mantenere prestazioni costanti al variare della domanda (e i costi bassi quando cala). Non distribuisce traffico tra Regioni, non archivia log e non sceglie i servizi per te."
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
      "Cloud Concepts"
    ],
    "id": "f26c020b6dc7",
    "explain": "I prezzi scendono grazie alle economie di scala: con l'aumento dei clienti i costi di AWS diminuiscono e i risparmi passano ai clienti. Pay-as-you-go e infrastruttura globale sono altri vantaggi, lo 'storage riservato' non c'entra."
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
      "S3",
      "Security"
    ],
    "id": "a3ead6468c24",
    "explain": "S3 Block Public Access (a livello di bucket o di account) impedisce qualsiasi accesso pubblico, anche se qualcuno prova a renderlo pubblico con ACL o policy. Riunioni, approvazioni manuali o servizi personalizzati non danno una garanzia tecnica."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "926d75b13618",
    "explain": "Per un problema di fatturazione si apre un caso di supporto di tipo 'fatturazione e account', disponibile gratuitamente per tutti i piani. Salvarlo su S3, creare applicazioni o dashboard non risolve il problema."
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
    "explain": "Il Simple Monthly Calculator stimava la fattura mensile in base all'utilizzo previsto dei servizi (oggi è sostituito dall'AWS Pricing Calculator). Non confronta on-premises e colocation, non stima consumi energetici né l'uso della CPU."
  },
  {
    "q": "Chi è responsabile di applicare le patch al sistema operativo guest di Amazon RDS?",
    "opts": [
      "Il team di prodotto AWS",
      "L'amministratore di database del cliente",
      "I partner gestiti",
      "L'AWS Support"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ],
    "id": "c5d44b2e746e",
    "explain": "RDS è un servizio gestito: le patch del sistema operativo sottostante le applica AWS (durante la finestra di manutenzione), non il DBA del cliente. Il cliente gestisce schema, utenti del database, impostazioni e accessi di rete."
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
      "DynamoDB"
    ],
    "id": "3ca1e0054ca6",
    "explain": "AWS Auto Scaling scala gruppi di istanze EC2 (e flotte Spot), tabelle e indici DynamoDB, repliche Aurora e servizi ECS. S3 e Route 53 scalano da soli senza Auto Scaling, Redshift ha un proprio meccanismo di ridimensionamento."
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
    "explain": "Global Accelerator migliora la disponibilità (failover automatico tra endpoint sani) e riduce la latenza instradando il traffico sulla rete globale di AWS. Non riduce i costi e non riguarda durabilità o sicurezza dei dati conservati."
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
      "Support",
      "Billing & Cost"
    ],
    "id": "11413f218749",
    "explain": "Per fatturazione e riattivazione di un account sospeso si apre una richiesta all'AWS Support (casi di account e fatturazione, gratuiti con tutti i piani). Il forum non gestisce i dati del tuo account, AWS Abuse gestisce segnalazioni di abusi, un Solutions Architect si occupa di architettura."
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
      "Cloud Concepts",
      "Well-Architected"
    ],
    "id": "a6a9128c63c8",
    "explain": "Scalare in modo dinamico e predittivo in base alla domanda sfrutta insieme elasticità e agilità del cloud. Predisporre in base ai picchi teorici è un approccio on-premises, l'accesso fisico ai data center non è possibile e il loose coupling è un principio diverso."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "22f00a91b50c",
    "explain": "Nel cloud ottimizzi i costi pagando solo ciò che usi. Comprare hardware in anticipo, predisporre a mano e dimensionare per il carico massimo sono abitudini on-premises che fanno spendere di più."
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
      "Shared Responsibility"
    ],
    "id": "f2af3d63c46b",
    "explain": "Su un database installato su EC2 le patch del sistema operativo sono del cliente. Hypervisor, sistema operativo di DynamoDB e sistema operativo delle istanze RDS sono gestiti da AWS."
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
      "Billing & Cost"
    ],
    "id": "d9c7f92a7366",
    "explain": "Gli strumenti di Cost Management permettono di suddividere i costi per giorno, servizio e account collegato (Cost Explorer) e di creare budget con notifiche (Budgets). Non terminano automaticamente tutte le risorse, non passano da soli a Reserved o Spot e non spostano i dati di S3 (lo fanno le lifecycle policy o Intelligent-Tiering)."
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
    "explain": "Sicurezza e patch del sistema operativo guest (per esempio su EC2) sono responsabilità del cliente. Systems Manager e Config sono strumenti che il cliente può usare per farlo, non soggetti responsabili."
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
      "IAM"
    ],
    "id": "14017a110bfa",
    "explain": "AWS IAM permette di creare e gestire utenti e gruppi e di dare loro accesso sicuro alle risorse, ed è gratuito. Direct Connect è una linea di rete, Amazon Connect è un contact center, Firewall Manager gestisce regole di sicurezza."
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
      "Security",
      "Governance"
    ],
    "id": "75310cc3b5e1",
    "explain": "AWS Artifact fornisce su richiesta la documentazione di sicurezza e conformità di AWS. Directory Service fornisce Active Directory, Trusted Advisor dà raccomandazioni, Inspector cerca vulnerabilità."
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
    "explain": "Amazon Polly trasforma il testo in parlato realistico (text-to-speech). Transcribe fa il contrario (speech-to-text), Rekognition analizza immagini, Lex crea chatbot conversazionali."
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
      "Well-Architected"
    ],
    "id": "ba77db49c01c",
    "explain": "Il principio chiave dell'alta disponibilità è presumere che qualsiasi componente possa guastarsi e progettare di conseguenza (design for failure). Serverless, Auto Scaling e open source possono aiutare ma non sono il principio fondamentale."
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
      "Support",
      "Security"
    ],
    "id": "ab713ebbbf80",
    "explain": "Il report di Trusted Advisor riunisce in un unico posto i controlli di sicurezza principali: permessi dei bucket S3, MFA sul root e security group con accesso illimitato. QuickSight crea dashboard, CloudTrail registra API, il credential report IAM riguarda solo le credenziali degli utenti."
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
    "explain": "Le licenze per core o per socket richiedono visibilità sull'hardware fisico: i Dedicated Hosts la forniscono. On-Demand, Spot e Reserved non danno questa visibilità."
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
    "explain": "Le edge location mettono in cache copie dei contenuti (con CloudFront) e li consegnano più velocemente agli utenti vicini. Regioni e AZ ospitano le risorse, i data center sono dentro le AZ."
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
      "Well-Architected",
      "Governance"
    ],
    "id": "e267642de653",
    "explain": "'Abilitare la tracciabilità' (monitorare, registrare e verificare le modifiche in tempo reale) è un principio del pilastro Security, e AWS Config ne è un esempio. Operational Excellence, Performance Efficiency e Cost Optimization hanno altri principi."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "a6d44e2fc780",
    "explain": "Per avere fatture separate per sviluppo, test e produzione si usano account AWS separati (eventualmente nella stessa organizzazione). I tag e Cost Explorer suddividono i costi in un'unica fattura, i VPC non separano la fatturazione."
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
      "DevOps & Tools"
    ],
    "id": "496f2ab5eccc",
    "explain": "AWS CodePipeline automatizza il processo di rilascio (build, test, deploy) delle applicazioni. AppSync crea API GraphQL, Batch esegue job, DataSync trasferisce dati."
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
      "Billing & Cost"
    ],
    "id": "2080dde6386d",
    "explain": "I costi di EC2 si riducono con le Spot per carichi stateless e flessibili e con le Reserved per carichi continuativi. Le On-Demand sono le più care per carichi continui, le istanze ottimizzate per la memoria non sono adatte ai carichi di calcolo e Budgets avvisa ma non impone limiti di spesa."
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
      "Security",
      "Governance"
    ],
    "id": "596344e95062",
    "explain": "AWS Artifact offre su richiesta i report di conformità (come l'attestazione PCI DSS di AWS) e permette di gestire gli accordi con AWS. Certificate Manager gestisce certificati SSL/TLS, Config valuta le tue risorse, CloudTrail registra le API."
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
      "Route 53"
    ],
    "id": "4f03a095cd1a",
    "explain": "Route 53 gestisce il traffico tra Regioni con politiche di routing (latenza, geolocalizzazione, failover, ponderato) e health check. AppStream trasmette applicazioni, VPC è una rete regionale, Elastic Load Balancer lavora dentro una Regione."
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
      "Governance",
      "Security"
    ],
    "id": "401d2f143c4a",
    "explain": "CloudTrail registra tutte le chiamate API, comprese quelle rifiutate per mancanza di permessi (errore AccessDenied), con identità, ora e IP di origine. Config registra configurazioni, Trusted Advisor dà raccomandazioni, Inspector cerca vulnerabilità."
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
      "Governance"
    ],
    "id": "936703d5906a",
    "explain": "AWS Config valuta continuamente la configurazione delle risorse con regole, individua quelle non conformi (anche su più account con un aggregatore) e notifica le modifiche tramite SNS. Trusted Advisor dà raccomandazioni, Resource Access Manager condivide risorse tra account, Systems Manager gestisce le istanze."
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
      "Cloud Concepts"
    ],
    "id": "898e16bdbeca",
    "explain": "Per aumentare la disponibilità le istanze vanno distribuite su più Availability Zone della stessa Regione. Il tipo di prezzo non cambia la disponibilità (le Spot possono perfino essere interrotte) e 'più Regioni ma stessa AZ' è impossibile, perché ogni AZ appartiene a una sola Regione."
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
      "Migrazione & DR"
    ],
    "id": "b469335cd502",
    "explain": "La replica tra Regioni di S3 (CRR) copia automaticamente gli oggetti in un bucket di un'altra Regione: è il modo standard per avere un backup in un'altra Regione. CloudFront mette in cache ma non fa backup, S3 non ha 'snapshot dei bucket'; AWS Backup oggi supporta S3, ma la risposta attesa è la CRR."
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
    "explain": "AWS Budgets invia avvisi quando la spesa (reale o prevista) supera soglie personalizzate. Cost Explorer analizza la spesa, i tag di allocazione dei costi la classificano, Organizations gestisce gli account."
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
      "Security"
    ],
    "id": "6a4f397acff9",
    "explain": "Nella versione d'esame la risposta è il modulo di richiesta (Penetration Testing Request Form). Attenzione però: oggi per i servizi consentiti (EC2, RDS, Lambda e altri) i penetration test non richiedono più alcuna approvazione di AWS, e un modulo serve solo per eventi simulati particolari, come red team o simulazioni DDoS. Casi di supporto, TAM e referenti commerciali non sono il canale previsto."
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
      "Security"
    ],
    "id": "c890cc770818",
    "explain": "Amazon Macie individua e classifica automaticamente i dati sensibili (PII, dati finanziari, credenziali) nei bucket S3 e segnala i rischi, come bucket pubblici o non cifrati. Inspector cerca vulnerabilità, GuardDuty rileva minacce, Secrets Manager conserva credenziali."
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
      "Networking",
      "VPC"
    ],
    "id": "f9377eb38d26",
    "explain": "Una VPN Site-to-Site collega un customer gateway (il dispositivo o la sua rappresentazione sul lato on-premises) a un virtual private gateway collegato al VPC (in alternativa al VGW si può usare un Transit Gateway). Internet gateway e NAT gateway servono per l'accesso a Internet."
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
    "explain": "Carichi brevi, a picchi o imprevedibili e non interrompibili: On-Demand, senza impegni e pagando solo ciò che usi. Le Spot possono essere interrotte, le Reserved richiedono un uso costante per 1-3 anni, i Dedicated Hosts sono costosi."
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
      "Well-Architected"
    ],
    "id": "a6eabcdabcc4",
    "explain": "Ridurre le interdipendenze tra i componenti è il principio del loose coupling. 'Servizi, non server' significa preferire i servizi gestiti, eliminare i single point of failure riguarda la ridondanza, la scalabilità riguarda la crescita."
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
      "Security"
    ],
    "id": "a3296e5a1b2a",
    "explain": "Gli AWS Security Bulletins sono il canale ufficiale con cui AWS pubblica avvisi e annunci su vulnerabilità ed eventi di sicurezza. Il Personal Health Dashboard riguarda gli eventi che toccano le tue risorse, Secrets Manager conserva credenziali, Inspector analizza le tue istanze."
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
      "Storage"
    ],
    "id": "e527b703389e",
    "explain": "EBS fornisce volumi a blocchi persistenti su cui creare un file system per un'istanza EC2 (anche EFS è persistente, ma non è tra le opzioni). L'instance store è effimero, S3 è object storage, ElastiCache è una cache in memoria."
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
    "explain": "I tag sulle risorse, attivati come tag di allocazione dei costi, permettono di attribuire i costi in fattura a progetti, reparti o ambienti. Limitare chi crea risorse, aggiungere metodi di pagamento o usare un unico account non aiuta l'allocazione."
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
      "Security",
      "Governance"
    ],
    "id": "752bc51f7e95",
    "explain": "AWS Artifact permette di scaricare su richiesta i report di sicurezza e conformità sull'infrastruttura AWS. GuardDuty rileva minacce, Security Hub aggrega i risultati di sicurezza del tuo account, Shield protegge dai DDoS."
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
      "DynamoDB"
    ],
    "id": "3b7c6a3c93c1",
    "explain": "Lambda e DynamoDB sono serverless. Elasticsearch Service (oggi OpenSearch), Elastic Beanstalk e Redshift (nella forma classica) si basano su istanze o nodi che scegli tu; oggi esistono versioni serverless di OpenSearch e Redshift, ma la risposta d'esame resta Lambda e DynamoDB."
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
      "Networking"
    ],
    "id": "a7a265c0515e",
    "explain": "AWS VPN (tunnel cifrato su Internet) e AWS Direct Connect (linea privata) estendono il data center on-premises nella rete AWS. Il NAT gateway dà accesso a Internet in uscita, Amazon Connect è un contact center, Route 53 è il DNS."
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
      "Governance"
    ],
    "id": "2bcdbf34321d",
    "explain": "Per lasciare un'organizzazione l'account membro deve avere tutto ciò che serve a un account indipendente: metodo di pagamento, informazioni di contatto, piano di supporto e accettazione del contratto. Non servono attestazioni SOC né casi di supporto, e la rimozione può essere fatta anche dall'account membro stesso (se le policy lo consentono)."
  },
  {
    "q": "Quale vantaggio di AWS indica la capacità di un cliente di distribuire applicazioni che scalano in su e in giù per soddisfare una domanda variabile?",
    "opts": [
      "Elasticità",
      "Agilità",
      "Sicurezza",
      "Scalabilità"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Cloud Concepts"
    ],
    "id": "33408ab951db",
    "explain": "Scalare automaticamente in su e in giù seguendo una domanda variabile è l'elasticità. La scalabilità indica la capacità di crescere per gestire un carico maggiore (non necessariamente di ridursi), l'agilità è la velocità di innovazione, la sicurezza è un'altra cosa. All'esame 'su e giù al variare della domanda' indica quasi sempre l'elasticità."
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
      "Security",
      "Governance"
    ],
    "id": "56d12209edf3",
    "explain": "Il report SOC 2 di AWS si scarica da AWS Artifact (dopo aver accettato i termini di riservatezza). Il Personal Health Dashboard mostra eventi, Trusted Advisor dà raccomandazioni, S3 è storage."
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
      1
    ],
    "multi": false,
    "tags": [
      "Migrazione & DR",
      "Cloud Concepts"
    ],
    "id": "6f0242f31552",
    "explain": "Per l'alta disponibilità si gira su due Availability Zone, e per riprendersi da un'interruzione di un'intera Regione serve un sito di DR in un'altra Regione. Usare altre AZ della stessa Regione non protegge da un guasto regionale; una 'Regione locale' non esiste; tre Regioni sono possibili ma eccessive rispetto ai requisiti (la risposta è una sola)."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "d7079bab0171",
    "explain": "Per 500 TB la soluzione più conveniente è AWS Snowball: alcuni dispositivi spediti fisicamente, molto più rapidi di un trasferimento via rete. Direct Connect e VPN richiederebbero settimane o mesi e costi di linea; S3 è la destinazione, non il mezzo di trasporto."
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
      "RDS"
    ],
    "id": "61ed708f9a09",
    "explain": "Amazon RDS for PostgreSQL (o Aurora PostgreSQL) è un database relazionale gestito per carichi transazionali (OLTP). DynamoDB è NoSQL, Athena ed EMR servono all'analisi."
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
      "Governance"
    ],
    "id": "4c1d1eb008f0",
    "explain": "I costi per reparto si individuano con i tag sulle risorse oppure con un account AWS per ogni reparto. L'account manager non attribuisce costi, Trusted Advisor ottimizza e la fatturazione consolidata unisce le fatture (mostra i costi per account, ma da sola non separa i reparti)."
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
    "explain": "In una bucket policy l'elemento Principal indica a chi (utente, ruolo, account) si applica la regola. Action indica le operazioni consentite, Resource il bucket o gli oggetti, Statement è il blocco che contiene tutto."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "edd3f3167f2b",
    "explain": "AWS Organizations, con la fatturazione consolidata, permette di gestire in modo efficace i costi di più account (fattura unica, sconti sui volumi, condivisione delle RI). Trusted Advisor dà raccomandazioni, Direct Connect è una linea di rete, Amazon Connect è un contact center."
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
    "explain": "Un esperimento di un mese su un'applicazione rivolta ai clienti richiede istanze affidabili e senza impegni: On-Demand. Reserved richiede 1-3 anni, Spot può interrompere il servizio ai clienti, Dedicated Hosts costano troppo."
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
    "explain": "Cost Explorer prevede automaticamente i costi futuri in base all'utilizzo storico. Il Support Center serve per i ticket, TCO e Simple Monthly Calculator stimavano costi in base a dati inseriti a mano, non con previsioni automatiche."
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
      "Shared Responsibility"
    ],
    "id": "6d8afe40ca09",
    "explain": "Aggiornare l'hypervisor è responsabilità di AWS. Abilitare la cifratura lato server su S3, applicare le policy IAM e le patch del sistema operativo delle istanze EC2 sono del cliente."
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
      "Governance",
      "Billing & Cost"
    ],
    "id": "5dfa06eba1fe",
    "explain": "Configurando AWS Organizations l'account di gestione (pagante) vede la fatturazione consolidata di tutti gli account. Budgets invia avvisi, Macie trova dati sensibili, QuickSight crea dashboard."
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
    "explain": "'Eseguire le operazioni come codice' (perform operations as code) è un principio del pilastro Operational Excellence: infrastruttura e procedure definite come codice per evitare errori umani. Gli altri pilastri hanno principi diversi."
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
    "explain": "'Testare le procedure di ripristino' è un principio del pilastro Reliability (insieme a ripristino automatico, scalabilità orizzontale e gestione delle modifiche con l'automazione). Scalabilità verticale, ripristino manuale e modifiche manuali vanno contro i principi."
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
      "Billing & Cost",
      "EC2"
    ],
    "id": "bea374a224cb",
    "explain": "Le Convertible RI si scambiano con altre Convertible RI di famiglia, sistema operativo o tenancy diversi, purché di valore uguale o superiore. Non si scambiano tra Regioni, non si vendono sul Reserved Instance Marketplace (lì si vendono solo le Standard) e la durata non si accorcia."
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
      "Billing & Cost"
    ],
    "id": "87b9e8829e16",
    "explain": "Per stimare il costo mensile di un'architettura nuova si usava il Simple Monthly Calculator, oggi sostituito dall'AWS Pricing Calculator. Il supporto non fa stime, calcolare a mano è lento e soggetto a errori, il TCO Calculator confrontava on-premises e AWS."
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
      "RDS"
    ],
    "id": "1d882062e8c0",
    "explain": "Rispetto a un database su EC2, RDS gestisce per te i backup automatici e le patch del software del database. Schema, indici ed ETL restano compiti del cliente in entrambi i casi."
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
      "S3"
    ],
    "id": "2e9fb78a2f7e",
    "explain": "S3 Intelligent-Tiering sposta automaticamente gli oggetti tra livelli di accesso (frequente, infrequente, archivio) in base all'uso reale, facendoti risparmiare senza costi di recupero. Non si prenota capacità, non copia dati su EBS e la classe più economica per archiviare è Glacier Deep Archive."
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
      "Analytics"
    ],
    "id": "171b038fd8c0",
    "explain": "Amazon Redshift consolida dati da più fonti in un data warehouse centrale per l'analisi. DynamoDB è un database operativo NoSQL, Athena interroga dati su S3 senza consolidarli, QuickSight visualizza i dati."
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
      "Governance"
    ],
    "id": "3d36d93d8ec7",
    "explain": "AWS Config traccia le modifiche alle risorse e ne verifica la conformità con regole. CloudWatch monitora metriche, CloudTrail registra chi ha fatto le chiamate API (non valuta la conformità), Trusted Advisor dà raccomandazioni."
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
      "Cloud Concepts"
    ],
    "id": "656eeaebc63a",
    "explain": "Le risorse sottoutilizzate sono il problema tipico del dimensionamento per il picco: con l'elasticità usi (e paghi) solo le risorse che servono in ogni momento. Alta disponibilità, sicurezza e loose coupling non risolvono il sottoutilizzo."
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
    "explain": "Un carico stateful e continuo per 3 anni è il caso ideale delle Reserved Instances (o dei Savings Plans) di durata triennale. On-Demand costa di più, le Dedicated costano di più, le Spot non vanno bene per carichi stateful che non possono essere interrotti."
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
    "explain": "7 ore senza interruzioni: On-Demand, che paghi solo per quelle ore senza impegni. Le Reserved richiedono 1-3 anni, i Dedicated Hosts sono costosi, le Spot possono essere interrotte."
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
      "Support"
    ],
    "id": "d8badc9cb089",
    "explain": "Trusted Advisor rileva risorse sottoutilizzate per farti risparmiare e migliora la sicurezza controllando in modo proattivo l'ambiente (permessi, porte aperte, MFA). L'orchestrazione dei container è di ECS ed EKS, le chiavi di KMS, l'imposizione dei tag delle tag policy di Organizations."
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
    "explain": "Le best practice sono dare allo sviluppatore solo i permessi necessari (privilegio minimo) e avere una password policy con lunghezza minima. Le credenziali root non si condividono mai, il gruppo degli amministratori dà troppi permessi e l'utente deve poter cambiare la propria password."
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
      "Migrazione & DR",
      "Storage"
    ],
    "id": "a68afc1d1ba5",
    "explain": "La Snow Family (Snowball) è progettata per trasferire fisicamente da terabyte a petabyte di dati verso e dal cloud. Storage Gateway collega lo storage on-premises via rete, Glacier Deep Archive è una classe di archiviazione, Lightsail offre server semplici."
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
      "Analytics"
    ],
    "id": "cd4278946b7c",
    "explain": "Amazon Redshift è il servizio per creare un data warehouse nel cloud AWS. EFS è un file system, RDS è un database transazionale, VPC è una rete."
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
      "Cloud Concepts"
    ],
    "id": "13b1cda4a020",
    "explain": "Grazie alle economie di scala AWS riduce periodicamente i prezzi (oltre 100 riduzioni dal lancio). Nuovi tipi di istanza, scalabilità e affidabilità sono vantaggi reali ma non derivano dalle economie di scala."
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
      "Governance",
      "CloudWatch"
    ],
    "id": "43f4138f126b",
    "explain": "CloudTrail registra le chiamate API (chi ha fatto cosa) e CloudWatch raccoglie metriche, log ed eventi: insieme raccolgono informazioni sull'attività dell'account. CloudFront è una CDN, Cloud9 era un IDE, CloudHSM gestisce chiavi."
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
      "Database",
      "Cloud Concepts"
    ],
    "id": "404d33d55345",
    "explain": "Con servizi gestiti come RDS, AWS si occupa delle patch del software di database e dei backup automatici. Testare i rilasci, progettare lo schema e fare penetration test restano compiti del cliente."
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
      "CloudFront"
    ],
    "id": "0a114055b019",
    "explain": "Le edge location consegnano i contenuti vicino agli utenti e, mettendo in cache le risposte, riducono il traffico sul server di origine. Non ospitano applicazioni, non fanno da cache per database NoSQL e non inviano notifiche."
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
      "Support"
    ],
    "id": "82cf1f487df3",
    "explain": "Le AWS Quick Start (oggi Partner Solutions nella AWS Solutions Library) sono distribuzioni di riferimento automatizzate per soluzioni diffuse, pronte in pochi clic. Il Well-Architected Framework dà principi, CloudFront è una CDN, CodeCommit è un repository Git."
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
      "Cloud Concepts",
      "Route 53",
      "CloudFront"
    ],
    "id": "d5b61bfadb80",
    "explain": "Route 53 e CloudFront sono servizi globali (come IAM). EC2, DynamoDB e S3 sono regionali: i nomi dei bucket S3 sono unici a livello globale e la console li mostra tutti insieme, ma ogni bucket vive in una Regione."
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
    "explain": "Il cliente si occupa della cifratura a riposo dei propri dati e della formazione sulla sicurezza dei propri dipendenti (consapevolezza e formazione è un controllo condiviso). NTP dell'infrastruttura, accesso ai data center e smaltimento dell'hardware sono di AWS."
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
    "explain": "Carichi non interrompibili per tre anni: le Reserved Instances (o i Savings Plans) triennali offrono lo sconto più alto. Spot può essere interrotta, On-Demand costa di più, Dedicated è ancora più cara."
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
      "Cloud Concepts"
    ],
    "id": "b0a6cf3c4eb0",
    "explain": "Il cloud riduce il TCO e trasforma le spese di capitale in spese operative variabili più basse. Il cloud riduce il capex invece di aumentarlo, e AWS non offre pagamenti dilazionati o linee di credito come vantaggio standard."
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
      "Shared Responsibility"
    ],
    "id": "d88a816632d8",
    "explain": "I controlli fisici e ambientali sono interamente di AWS (il cliente li eredita). Le patch del sistema operativo guest e la password policy IAM sono del cliente; consapevolezza e formazione è un controllo condiviso."
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
      "Lambda"
    ],
    "id": "6d6573c7a73e",
    "explain": "AWS Lambda permette architetture serverless: gli sviluppatori eseguono codice senza predisporre o gestire server. EC2 richiede di gestire istanze, DynamoDB è un database, CodeCommit conserva codice sorgente."
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
      "Support",
      "Governance"
    ],
    "id": "c2f5bfbbc8e7",
    "explain": "Il Personal Health Dashboard (oggi AWS Health Dashboard, vista dell'account) invia avvisi proattivi quando un evento AWS può avere impatto sulle tue risorse. La Service Health Dashboard mostra lo stato generale, Trusted Advisor dà raccomandazioni, l'IEM è assistenza per eventi pianificati."
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
    "explain": "Le categorie di Trusted Advisor sono: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits e Operational Excellence. 'Utilizzo delle istanze', 'Infrastruttura' e 'Capacità di storage' non sono categorie."
  },
  {
    "q": "Per quale dei seguenti servizi è responsabilità del cliente mantenere la configurazione del sistema operativo, le patch di sicurezza e la rete?",
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
      "Shared Responsibility"
    ],
    "id": "4cfd9cf54803",
    "explain": "EC2 è IaaS: sistema operativo, patch di sicurezza e configurazione di rete li gestisce il cliente. ElastiCache e Fargate (come RDS) sono servizi gestiti, e il sistema operativo sottostante lo gestisce AWS."
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
      "Cloud Concepts"
    ],
    "id": "5da79dfaa2d9",
    "explain": "Con il cloud si passa da spese in conto capitale anticipate (capex, comprare server) a spese operative variabili (opex, pagare a consumo). Le altre opzioni invertono o confondono i due concetti."
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
      "Shared Responsibility"
    ],
    "id": "280d26d27366",
    "explain": "Le edge location fanno parte dell'infrastruttura globale di AWS: gestirle è compito esclusivo di AWS. La sicurezza delle applicazioni e i dati lato client sono del cliente, la gestione delle patch è un controllo condiviso."
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
    "explain": "I gruppi IAM associano lo stesso insieme di permessi a più utenti: colleghi la policy al gruppo e vale per tutti i membri. MFA, password policy e chiavi di accesso riguardano l'autenticazione, non l'assegnazione di permessi."
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
      "Cloud Concepts"
    ],
    "id": "88d4bc084a24",
    "explain": "Elasticità (le risorse seguono la domanda) e agilità (risorse in minuti, innovazione rapida) sono vantaggi del cloud. Nessun servizio ha uptime illimitato, la colocation è un modello tradizionale e il cloud riduce le spese in conto capitale invece di richiederle."
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
      "IAM"
    ],
    "id": "a0d140f753bf",
    "explain": "Con AWS Directory Service (Active Directory gestito, o AD Connector verso quello aziendale) si può abilitare il single sign-on alla console con le credenziali aziendali. Oggi il servizio consigliato per l'SSO è AWS IAM Identity Center (ex AWS SSO). Connect è un contact center, Pinpoint invia campagne, Rekognition analizza immagini."
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
      "Cloud Concepts"
    ],
    "id": "3247e4cc4c21",
    "explain": "I luoghi isolati di una Regione, collegati da reti a bassa latenza, sono le Availability Zone. Direct Connect è una linea di rete, il VPC è una rete virtuale, le edge location servono alla distribuzione dei contenuti."
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
    "id": "f7dd9ed0a270",
    "explain": "Il programma AWS Compliance dà ai clienti la garanzia che AWS mantiene la sicurezza fisica e la protezione dei dati della propria infrastruttura (verificate da revisori esterni), e AWS aggiunge nuovi programmi e framework man mano che diventano rilevanti per i carichi dei clienti. Non rende conformi in automatico i carichi di lavoro dei clienti (la conformità è condivisa), non mantiene la documentazione dei framework (la scrivono gli enti di standard) e non riguarda gli altri fornitori cloud."
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
      "Security",
      "Governance"
    ],
    "id": "7b1beda4e747",
    "explain": "AWS Artifact offre accesso su richiesta ai report di conformità di AWS. IAM gestisce le identità, GuardDuty rileva minacce, KMS gestisce chiavi."
  },
  {
    "q": "Nel modello di responsabilità condivisa di AWS, quale dei seguenti controlli operativi gli utenti ereditano completamente da AWS?",
    "opts": [
      "La gestione della sicurezza del data center",
      "La gestione delle patch",
      "La gestione della configurazione",
      "La gestione di utenti e accessi"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ],
    "id": "bfce52f8334f",
    "explain": "Il cliente eredita completamente da AWS i controlli fisici e ambientali, cioè la gestione della sicurezza del data center. Gestione delle patch e della configurazione sono controlli condivisi; la gestione di utenti e accessi (IAM) è responsabilità del cliente."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "f66203008cd7",
    "explain": "Nel TCO si confrontano i costi dell'infrastruttura: server fisici e hardware di storage (più energia, spazio, rete, personale). Sviluppo software, gestione dei progetti e licenze antivirus restano uguali con o senza cloud."
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
      "Shared Responsibility"
    ],
    "id": "04a653f12084",
    "explain": "Il cliente gestisce le network ACL del suo VPC e cifra i dati in transito e a riposo. Hardware di EC2, sostituzione dei dischi guasti e distribuzione dell'hardware nelle AZ sono responsabilità di AWS."
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
      "Cloud Concepts"
    ],
    "id": "f88df07df38d",
    "explain": "L'elasticità è adattare le risorse alla domanda: cambiare il numero di istanze EC2 in base al traffico o ridimensionare le istanze RDS quando cambiano le esigenze. Instradare il traffico è compito del load balancer, i documenti di conformità riguardano Artifact, l'infrastruttura come codice riguarda l'automazione."
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
      "EC2",
      "Billing & Cost"
    ],
    "id": "c3e5ad4eff52",
    "explain": "Le Spot convengono quando c'è flessibilità su quando l'applicazione gira e il lavoro tollera interruzioni. Carichi mission-critical, capacità dedicata o istanze che non devono mai fermarsi richiedono On-Demand, Reserved o Dedicated."
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
      "Cloud Concepts",
      "Billing & Cost"
    ],
    "id": "ef0c027db119",
    "explain": "Nel TCO di un data center si includono energia, raffreddamento, spazio, hardware e il personale che gestisce e sostituisce i server: costi che con AWS spariscono. La disponibilità delle istanze EC2, il tempo degli sviluppatori e la capacità del database non sono voci di costo dell'infrastruttura."
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
      "Lambda",
      "Billing & Cost"
    ],
    "id": "e689d0861e0a",
    "explain": "Lambda si paga in base al numero di richieste e alle risorse di calcolo consumate (durata moltiplicata per la memoria, in GB-secondi). Le offerte erano il vecchio modello Spot, i pagamenti anticipati sono delle RI e dei Savings Plans (Lambda è coperta dai Compute Savings Plans, ma per 1 o 3 anni, non 5), e lo storage permanente non è il modello di prezzo di Lambda."
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
      "VPC",
      "Security"
    ],
    "id": "79a97626df40",
    "explain": "I security group funzionano come firewall virtuale dell'istanza EC2: regole di permesso per il traffico in entrata e in uscita, stateful. Le policy IAM proteggono gli account, Shield fornisce protezione DDoS, CloudFront è una CDN."
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
      "CAF"
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
      "CAF"
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
      "CAF"
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
      "CAF"
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
      "CAF"
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
      "CAF"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR",
      "Billing & Cost"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR",
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
      "Migrazione & DR",
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
      "Storage",
      "Migrazione & DR"
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
      "Migrazione & DR",
      "Database"
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
      "Migrazione & DR",
      "Database"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Billing & Cost",
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
      "Security",
      "IAM"
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
      "Security",
      "IAM"
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
      "Governance",
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
      "Security",
      "Cloud Concepts"
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
      "DevOps & Tools"
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
      "DevOps & Tools"
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
      "IAM",
      "DevOps & Tools"
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
      "CloudFormation",
      "DevOps & Tools"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "Cloud Concepts"
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
      "ECS / Fargate",
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
      "Storage",
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Migrazione & DR"
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
      "Database"
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
      "Database"
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
      "Database"
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
      "Database"
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
      "Database"
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
      "Database"
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
      "VPC"
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
      "VPC",
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
      "Lambda",
      "Integration"
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
      "Integration"
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
      "Integration",
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
      "Integration",
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
      "Integration",
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
      "Altri servizi"
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
      "Altri servizi"
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
      "Altri servizi"
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
      "Altri servizi"
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
      "Altri servizi"
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
      "DevOps & Tools"
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
      "DevOps & Tools"
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
      "DevOps & Tools"
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
      "DevOps & Tools"
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
      "Governance"
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
      "Governance"
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
      "Governance"
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
      "Governance"
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
      "Governance"
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
      "Governance"
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
      "Support",
      "Governance"
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
      "Altri servizi"
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
      "Altri servizi"
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
      "CloudWatch",
      "Governance"
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
      "EC2",
      "Billing & Cost"
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
      "EC2",
      "Billing & Cost"
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
      "EC2",
      "Billing & Cost"
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
      "Billing & Cost",
      "Cloud Concepts"
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
      "EC2",
      "Billing & Cost"
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
      "Migrazione & DR"
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
      "Database"
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
      "Migrazione & DR",
      "Billing & Cost"
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
      "EC2",
      "Billing & Cost"
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
      "Altri servizi"
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
      "CloudFormation",
      "DevOps & Tools"
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
      "Database"
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
      "Governance",
      "Networking"
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
      "Database"
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
      "Cloud Concepts"
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
      "Governance",
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
      "Governance"
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
      "S3"
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
      "Altri servizi"
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
