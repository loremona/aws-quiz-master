'use strict';
const MODULE02 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🔐',
    title: 'IAM & Shared Responsibility',
    text: `Questo è il modulo <strong>più pesante dell'esame CLF-C02</strong>: circa il 30% delle domande tocca sicurezza, IAM o Shared Responsibility.<br><br>
Imparerai:<br>
• <strong>Shared Responsibility Model</strong> — chi gestisce cosa tra AWS e te<br>
• <strong>IAM</strong> — utenti, gruppi, ruoli, policy<br>
• <strong>MFA</strong> e protezione dell'account root<br>
• <strong>Least privilege</strong> — il principio fondamentale della sicurezza AWS<br><br>
Non affrettarlo: ogni concetto qui vale punti sull'esame.`,
    analogy: `IAM è il sistema di badge di un grattacielo: AWS costruisce il palazzo e mette le serrature, tu decidi chi ha le chiavi e per quali stanze.`,
  },

  /* ── LEZIONE: Shared Responsibility Model ── */
  {
    type: 'lesson',
    emoji: '🤝',
    title: 'Shared Responsibility Model',
    text: `AWS e il cliente si dividono la responsabilità della sicurezza:<br><br>
<strong>AWS è responsabile di</strong> — sicurezza <em>del</em> cloud:<br>
• Hardware fisico, data center, rete globale<br>
• Hypervisor e virtualizzazione<br>
• Sicurezza dei servizi managed (RDS, S3 infrastruttura…)<br><br>
<strong>Il cliente è responsabile di</strong> — sicurezza <em>nel</em> cloud:<br>
• Sistema operativo sulle EC2 (patch, aggiornamenti)<br>
• Configurazione di firewall, security group<br>
• Cifratura dei dati, gestione delle chiavi<br>
• Gestione degli accessi (IAM, MFA)<br>
• Dati applicativi e backup`,
    analogy: `Il proprietario dell'appartamento (AWS) garantisce che il palazzo sia solido, le porte abbiano serrature e ci sia l'impianto elettrico. L'inquilino (tu) decide chi ha le chiavi di casa, non lascia finestre aperte e non perde il portafoglio.`,
  },

  /* ── QUIZ: Shared Responsibility ── */
  {
    type: 'quiz',
    q: "Di quale delle seguenti attività è responsabile AWS nel modello Shared Responsibility?",
    opts: [
      'Patching del sistema operativo sulle istanze EC2',
      'Configurazione dei Security Group',
      'Manutenzione fisica dei server nel data center',
      'Gestione degli utenti IAM e delle loro password',
    ],
    a: 2,
    explain: `✅ AWS è responsabile dell'hardware fisico e dei data center — questa è la sicurezza "del" cloud. Il patching dell'OS su EC2 è responsabilità del cliente (EC2 = IaaS, gestisci il sistema operativo). I Security Group e gli utenti IAM sono sempre responsabilità del cliente. Trappola: per RDS e Lambda (servizi managed), AWS gestisce anche l'OS — lì la responsabilità si divide diversamente.`,
  },

  /* ── QUIZ: trappola servizi managed ── */
  {
    type: 'quiz',
    q: "Un'azienda usa Amazon RDS. Di chi è la responsabilità di applicare le patch al database engine?",
    opts: [
      'Del cliente, che deve aggiornare manualmente il motore del database',
      'Di AWS, che gestisce il patching del database engine nei servizi managed',
      'Condivisa: AWS fa il patching, il cliente lo approva',
      'Di terze parti certificate AWS',
    ],
    a: 1,
    explain: `✅ RDS è un servizio managed: AWS gestisce hardware, OS e il patching del database engine. Il cliente è responsabile dei dati nel database, delle impostazioni di accesso e della configurazione delle security rule. Confronto chiave: EC2 = il cliente gestisce l'OS; RDS = AWS gestisce l'OS e il DB engine.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '🔑',
    title: "L'account root: la chiave del regno",
    text: `L'account <strong>root</strong> è l'account creato alla registrazione AWS. Ha accesso illimitato a tutto — non può essere limitato da nessuna policy IAM.<br><br>
Le best practice AWS dicono: <strong>non usare mai il root per le attività quotidiane</strong>. Cosa fare con il root:<br>
• Attivare <strong>MFA</strong> immediatamente<br>
• Creare un utente IAM admin e usare quello<br>
• Usare il root solo per task che richiedono esplicitamente root (es. cambiare piano supporto, chiudere l'account)<br><br>
<strong>Trappola esame:</strong> "quale azione richiede le credenziali root?" → chiudere l'account AWS.`,
  },

  /* ── LEZIONE: IAM — concetti base ── */
  {
    type: 'lesson',
    emoji: '👤',
    title: 'IAM: Utenti, Gruppi, Ruoli',
    text: `<strong>IAM (Identity and Access Management)</strong> è il servizio AWS per gestire chi può fare cosa.<br><br>
<strong>Utente IAM</strong> — persona o applicazione con credenziali proprie (username+password o access key). Rappresenta un'identità permanente.<br><br>
<strong>Gruppo IAM</strong> — insieme di utenti che condividono le stesse policy. Es: gruppo "Developers" con permessi di lettura su S3. Non si possono nidificare gruppi.<br><br>
<strong>Ruolo IAM (Role)</strong> — identità temporanea senza credenziali fisse. Viene "assunto" da servizi AWS (es. EC2 che accede a S3) o da utenti esterni. È la soluzione corretta per dare permessi ad applicazioni.`,
    analogy: `Utente = badge nominale del dipendente; Gruppo = reparto (tutti in Marketing hanno gli stessi accessi); Ruolo = tesserino visitatore temporaneo che scade e non appartiene a nessuno.`,
  },

  /* ── LEZIONE: IAM Policy ── */
  {
    type: 'lesson',
    emoji: '📋',
    title: 'IAM Policy: il linguaggio dei permessi',
    text: `Una <strong>policy IAM</strong> è un documento JSON che definisce cosa è permesso o negato.<br><br>
Struttura base:<br>
<code>Effect</code>: Allow o Deny<br>
<code>Action</code>: quale operazione (es. <code>s3:GetObject</code>)<br>
<code>Resource</code>: su quale risorsa (es. ARN di un bucket S3)<br><br>
<strong>Regole chiave:</strong><br>
• Default: tutto è <strong>negato</strong> implicitamente<br>
• Un Deny esplicito sovrascrive sempre qualsiasi Allow<br>
• Le policy si allegano a utenti, gruppi o ruoli<br><br>
<strong>Principio del Least Privilege:</strong> dai solo i permessi minimi necessari — niente di più.`,
    analogy: `La policy è come un regolamento di condominio: definisce cosa puoi fare (allow) e cosa non puoi (deny). Il silenzio del regolamento = vietato. Un divieto esplicito vince sempre.`,
  },

  /* ── QUIZ: IAM componenti ── */
  {
    type: 'quiz',
    q: "Un'applicazione su EC2 deve leggere file da S3. Qual è il modo corretto per configurare l'accesso?",
    opts: [
      'Creare un utente IAM, generare access key e inserirle nel codice',
      'Usare le credenziali root nel codice per massima semplicità',
      'Creare un IAM Role e assegnarlo alla EC2 instance',
      'Rendere il bucket S3 pubblico così non servono credenziali',
    ],
    a: 2,
    explain: `✅ Il IAM Role è la soluzione corretta per applicazioni su EC2: fornisce credenziali temporanee automaticamente ruotate, senza hardcoding nel codice. Inserire access key nel codice è un rischio di sicurezza (possono finire su GitHub). Le credenziali root non si usano mai nelle applicazioni. Rendere S3 pubblico espone i dati a chiunque.`,
  },

  /* ── FUN FACT: MFA ── */
  {
    type: 'fact',
    emoji: '📱',
    title: 'MFA: il secondo lucchetto',
    text: `<strong>Multi-Factor Authentication (MFA)</strong> aggiunge un secondo fattore oltre alla password. AWS supporta:<br><br>
• App authenticator (Google Authenticator, Authy) — <strong>Virtual MFA</strong><br>
• Chiavi hardware (YubiKey) — <strong>Hardware MFA</strong><br>
• SMS (deprecato per root)<br><br>
Best practice: attiva MFA su <strong>tutti gli utenti IAM privilegiati</strong> e obbligatoriamente sull'account root.<br><br>
Puoi anche forzare l'uso di MFA tramite una <strong>IAM policy condition</strong> che nega tutto se MFA non è attivo.`,
  },

  /* ── LEZIONE: strumenti di sicurezza IAM ── */
  {
    type: 'lesson',
    emoji: '🔍',
    title: 'Strumenti di Sicurezza IAM',
    text: `<strong>IAM Credentials Report</strong> — report a livello di account: lista tutti gli utenti e lo stato delle loro credenziali (ultima rotazione password, MFA attivo, access key usate). Utile per audit.<br><br>
<strong>IAM Access Advisor</strong> — mostra i permessi concessi a un utente e l'<em>ultimo accesso</em> a ciascun servizio. Permette di ridurre i permessi inutilizzati (least privilege in pratica).<br><br>
<strong>AWS Artifact</strong> — non è un tool IAM, ma compare spesso: è il portale per scaricare report di conformità e accordi legali AWS (SOC, PCI, ISO).`,
    analogy: `Credentials Report = registro presenze annuale; Access Advisor = orologio marcatempo che mostra chi ha aperto quale stanza e quando; Artifact = certificati di agibilità del palazzo.`,
  },

  /* ── QUIZ: least privilege ── */
  {
    type: 'quiz',
    q: "Un nuovo sviluppatore ha bisogno di accedere solo a un bucket S3 specifico. Quale approccio segue il principio del Least Privilege?",
    opts: [
      'Assegnare la policy AdministratorAccess per semplicità',
      'Creare una policy custom che permette solo le azioni necessarie sul bucket specifico',
      'Condividere le credenziali di un utente già esistente con accesso S3',
      'Usare le credenziali root per garantire accesso completo',
    ],
    a: 1,
    explain: `✅ Least privilege = permessi minimi necessari. Una policy custom che specifica solo le azioni richieste (es. s3:GetObject, s3:PutObject) su quel bucket specifico è la best practice. AdministratorAccess dà accesso a TUTTO AWS. Condividere credenziali viola la responsabilità individuale. Le credenziali root non si usano mai per lavoro quotidiano.`,
  },

  /* ── LEZIONE: differenze chiave per l'esame ── */
  {
    type: 'lesson',
    emoji: '⚠️',
    title: 'Le Trappole IAM più Frequenti',
    text: `<strong>Utente vs Ruolo:</strong> l'utente ha credenziali fisse; il ruolo ha credenziali temporanee. Per applicazioni → sempre ruolo.<br><br>
<strong>Gruppi non contengono gruppi:</strong> i gruppi IAM non si possono nidificare — solo utenti dentro i gruppi.<br><br>
<strong>Un utente può stare in più gruppi</strong> e riceve l'unione dei permessi (salvo Deny espliciti).<br><br>
<strong>IAM è globale:</strong> utenti e policy si applicano a tutto l'account AWS, non a una sola regione.<br><br>
<strong>Deny esplicito batte tutto:</strong> se una policy dice Deny su un'azione, nessun Allow altrove può sbloccarla.`,
    analogy: `I Deny sono come il cartello "VIETATO" in rosso: neanche il direttore generale può ignorarlo. Gli Allow sono il permesso normale — basta uno in tutta la catena.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — IAM & Shared Responsibility',
    text: `<strong>Shared Responsibility:</strong> AWS = sicurezza DEL cloud (hardware, DC, hypervisor); Cliente = sicurezza NEL cloud (OS EC2, IAM, dati, cifratura)<br><br>
<strong>Eccezione managed:</strong> RDS/Lambda → AWS gestisce anche OS e engine<br><br>
<strong>IAM:</strong> Utente (credenziali fisse) · Gruppo (solo utenti, non nidificato) · Ruolo (temporaneo, per servizi/app)<br><br>
<strong>Policy:</strong> JSON, default DENY, Deny esplicito > Allow, Least Privilege<br><br>
<strong>Root:</strong> mai usarlo quotidianamente · MFA obbligatorio · solo per task root-only<br><br>
<strong>IAM è globale</strong> (non regionale)<br><br>
<strong>Strumenti:</strong> Credentials Report (audit account) · Access Advisor (ottimizza permessi)`,
    analogy: `IAM è la reception del palazzo: gestisce chi entra, con quale badge, in quale stanza. AWS costruisce il palazzo e mette le serrature — tu gestisci le chiavi.`,
  },

  /* ── QUIZ FINALE ── */
  {
    type: 'quiz',
    q: "Quale affermazione descrive correttamente il principio del Shared Responsibility Model per Amazon EC2?",
    opts: [
      'AWS gestisce sia l\'infrastruttura fisica che il sistema operativo installato',
      'Il cliente gestisce sia l\'hardware fisico che il sistema operativo',
      'AWS gestisce l\'infrastruttura fisica; il cliente gestisce il sistema operativo e le applicazioni',
      'La responsabilità è interamente del cliente incluso l\'hardware',
    ],
    a: 2,
    explain: `✅ EC2 è IaaS: AWS fornisce il server fisico virtuale (hardware, rete, hypervisor), il cliente è responsabile di tutto sopra: OS, patch, middleware, runtime, applicazioni, dati. È la divisione classica del Shared Responsibility per i servizi IaaS. Nei servizi managed (RDS, Lambda) la linea si sposta verso AWS.`,
  },

];
