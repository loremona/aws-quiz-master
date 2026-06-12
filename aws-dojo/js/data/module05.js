'use strict';
const MODULE05 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '🌐',
    title: 'VPC & Networking',
    text: `La rete è la spina dorsale di AWS. Questo modulo copre:<br><br>
• <strong>VPC</strong> — la tua rete privata virtuale in AWS<br>
• <strong>Subnet pubblica vs privata</strong><br>
• <strong>Security Group vs NACL</strong> — la trappola più frequente<br>
• <strong>Route 53</strong> — DNS di AWS<br>
• <strong>CloudFront</strong> — CDN globale<br>
• Connessioni ibride: <strong>VPN</strong> e <strong>Direct Connect</strong>`,
    analogy: `VPC è come costruire il tuo ufficio privato dentro un grattacielo (AWS). Tu decidi le stanze (subnet), chi può entrare (Security Group), e i corridoi (routing).`,
  },

  /* ── LEZIONE: VPC ── */
  {
    type: 'lesson',
    emoji: '🏗️',
    title: 'VPC: la tua Rete Privata su AWS',
    text: `Una <strong>VPC (Virtual Private Cloud)</strong> è una rete virtuale isolata che crei nel tuo account AWS. È simile a una rete aziendale tradizionale, ma nel cloud.<br><br>
Ogni account AWS ha una <strong>Default VPC</strong> già pronta in ogni regione — puoi usarla subito senza configurazione.<br><br>
Dentro la VPC crei le <strong>subnet</strong>:<br>
• <strong>Subnet pubblica</strong> — ha un <em>Internet Gateway</em>, le risorse sono raggiungibili da internet (es. web server)<br>
• <strong>Subnet privata</strong> — non raggiungibile direttamente da internet (es. database, backend)`,
    analogy: `La VPC è il palazzo della tua azienda. Le subnet pubbliche sono gli uffici al piano terra con porta su strada. Le subnet private sono i server room al piano -1, accessibili solo dall'interno.`,
  },

  /* ── LEZIONE: Internet Gateway e NAT ── */
  {
    type: 'lesson',
    emoji: '🚪',
    title: 'Internet Gateway e NAT Gateway',
    text: `<strong>Internet Gateway (IGW)</strong> — il cancello che collega la tua VPC a internet. Senza IGW, nessuna risorsa nella VPC può comunicare con l'esterno. Si attacca alla VPC e si configura nelle route table delle subnet pubbliche.<br><br>
<strong>NAT Gateway</strong> — permette alle istanze in <em>subnet private</em> di accedere a internet (per scaricare aggiornamenti) senza essere raggiungibili dall'esterno.<br><br>
Schema del flusso:<br>
• Subnet pubblica → Internet Gateway → Internet<br>
• Subnet privata → NAT Gateway (nella subnet pubblica) → Internet Gateway → Internet`,
    analogy: `IGW = portone principale del palazzo con citofono. NAT Gateway = il fattorino interno: le stanze private (server) possono mandare lui a fare commissioni fuori, ma nessuno da fuori può entrare direttamente.`,
  },

  /* ── LEZIONE: Security Group vs NACL ── */
  {
    type: 'lesson',
    emoji: '🛡️',
    title: 'Security Group vs NACL: la Trappola',
    text: `Due livelli di firewall in AWS — l'esame li confonde spesso:<br><br>
<strong>Security Group</strong> — firewall a livello di <em>istanza EC2</em>:<br>
• Solo regole Allow (nessun Deny esplicito)<br>
• <strong>Stateful</strong>: se permetti il traffico in entrata, la risposta è automaticamente permessa in uscita<br>
• Si applica alle singole risorse<br><br>
<strong>NACL (Network ACL)</strong> — firewall a livello di <em>subnet</em>:<br>
• Regole Allow e Deny<br>
• <strong>Stateless</strong>: devi configurare esplicitamente sia il traffico in entrata che in uscita<br>
• Si applica a tutta la subnet`,
    analogy: `Security Group = guardia del corpo personale (segue la singola persona, ricorda chi ha già passato). NACL = metal detector all'ingresso del palazzo (controlla chiunque entri E esca, non ricorda nessuno).`,
  },

  /* ── QUIZ: Security Group vs NACL ── */
  {
    type: 'quiz',
    q: "Qual è la differenza principale tra un Security Group e una Network ACL (NACL) in AWS?",
    opts: [
      'I Security Group operano a livello di subnet; le NACL a livello di istanza',
      'I Security Group sono stateful e operano a livello di istanza; le NACL sono stateless e operano a livello di subnet',
      'Entrambi sono stateless ma operano a livelli diversi',
      'Le NACL supportano solo regole Allow; i Security Group supportano Allow e Deny',
    ],
    a: 1,
    explain: `✅ Security Group = stateful (ricorda le connessioni) + livello istanza + solo Allow. NACL = stateless (ogni pacchetto valutato singolarmente) + livello subnet + Allow e Deny. È esattamente al contrario di come molti si aspettano: le NACL hanno Deny esplicito, i Security Group no.`,
  },

  /* ── FUN FACT ── */
  {
    type: 'fact',
    emoji: '📡',
    title: 'AWS ha più Edge Location che Regioni',
    text: `AWS ha oltre <strong>30 Regioni</strong> ma più di <strong>400 Edge Location</strong> nel mondo.<br><br>
Le Edge Location servono <strong>CloudFront</strong> (CDN) e <strong>Route 53</strong> (DNS). Sono molto più capillari delle regioni perché devono portare i contenuti vicino agli utenti finali.<br><br>
Quando un utente in Milano apre un sito hostato su S3 in Virginia, CloudFront serve i contenuti dalla Edge Location più vicina (probabilmente Milano o Francoforte), riducendo la latenza da centinaia di ms a pochi ms.`,
  },

  /* ── LEZIONE: Route 53 ── */
  {
    type: 'lesson',
    emoji: '🔍',
    title: 'Route 53: DNS di AWS',
    text: `<strong>Amazon Route 53</strong> è il servizio DNS di AWS — traduce nomi di dominio (es. <code>miosito.com</code>) in indirizzi IP.<br><br>
Funzionalità principali:<br>
• <strong>Registrazione domini</strong> — acquisti domini direttamente su AWS<br>
• <strong>Hosted Zone</strong> — gestisci i record DNS del tuo dominio<br>
• <strong>Health Check</strong> — monitora la disponibilità delle risorse<br>
• <strong>Routing policies</strong>: Simple, Weighted, Latency-based, Geolocation, Failover<br><br>
Route 53 è un servizio <strong>globale</strong> (non regionale). Il nome viene da "Route 66" e dalla porta DNS standard (53).`,
    analogy: `Il centralino telefonico: quando chiami "miosito.com", Route 53 consulta la sua rubrica e ti dice qual è il numero IP corretto da chiamare.`,
  },

  /* ── LEZIONE: CloudFront ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'CloudFront: CDN Globale',
    text: `<strong>Amazon CloudFront</strong> è la CDN (Content Delivery Network) di AWS. Distribuisce contenuti statici e dinamici da <strong>Edge Location</strong> vicine agli utenti.<br><br>
Come funziona:<br>
1. Utente richiede un file<br>
2. CloudFront verifica se la Edge Location locale ha il file in cache<br>
3. Se sì: risposta immediata (pochi ms)<br>
4. Se no: recupera dall'<em>origin</em> (S3, EC2, ALB), lo mette in cache e risponde<br><br>
Vantaggi: <strong>latenza ridotta</strong>, <strong>protezione DDoS</strong> (integrazione AWS Shield), <strong>HTTPS obbligatorio</strong>.<br><br>
Uso tipico: siti web statici, video streaming, API globali.`,
    analogy: `CloudFront è come avere magazzini Amazon in ogni città. Invece di spedire tutto da un unico centro in Virginia, il prodotto è già nel magazzino locale — consegna in un'ora invece di 3 giorni.`,
  },

  /* ── LEZIONE: connettività ibrida ── */
  {
    type: 'lesson',
    emoji: '🔗',
    title: 'VPN e Direct Connect: Cloud Ibrido',
    text: `Per collegare la rete on-premises ad AWS:<br><br>
<strong>Site-to-Site VPN</strong> — tunnel cifrato via internet. Rapido da configurare (ore), costo basso, ma dipende dalla qualità della connessione internet.<br><br>
<strong>AWS Direct Connect</strong> — connessione fisica dedicata tra il data center on-premises e AWS. Latenza costante e bassa, banda garantita. Richiede mesi per l'installazione.<br><br>
<strong>VPC Peering</strong> — collega due VPC tra loro (anche in account diversi) senza passare per internet.<br><br>
<strong>Transit Gateway</strong> — hub centrale che collega molte VPC e reti on-premises. Semplifica la gestione quando hai decine di VPC.`,
    analogy: `VPN = chiamata cifrata su rete pubblica (conveniente ma dipende dal segnale). Direct Connect = linea telefonica dedicata (costosa, ma stabile e velocissima).`,
  },

  /* ── QUIZ: CloudFront vs S3 ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole distribuire un sito web statico con bassa latenza a utenti in tutto il mondo. Qual è la soluzione ottimale?",
    opts: [
      'Hostare il sito su EC2 in una singola regione AWS',
      'Usare S3 Static Website Hosting senza CloudFront',
      'Usare S3 come origin con CloudFront davanti per la distribuzione globale',
      'Usare Route 53 con routing latency-based verso più EC2',
    ],
    a: 2,
    explain: `✅ S3 + CloudFront è la combinazione classica per siti statici globali: S3 ospita i file (economico), CloudFront li distribuisce da Edge Location vicine agli utenti (bassa latenza ovunque). Solo EC2 in una regione ha latenza alta per utenti lontani. S3 statico senza CDN ha latenza variabile. Route 53 + EC2 multi-regione è più costoso e complesso per contenuti statici.`,
  },

  /* ── QUIZ: VPN vs Direct Connect ── */
  {
    type: 'quiz',
    q: "Un'azienda ha bisogno di una connessione stabile e a bassa latenza tra il proprio data center e AWS per applicazioni mission-critical. Quale servizio scegliere?",
    opts: [
      'Site-to-Site VPN — rapido da configurare e sicuro',
      'AWS Direct Connect — connessione fisica dedicata con latenza garantita',
      'Internet Gateway — per connettività ad alte prestazioni',
      'VPC Peering — per connettere reti on-premises ad AWS',
    ],
    a: 1,
    explain: `✅ AWS Direct Connect offre una connessione fisica dedicata (non via internet pubblico): latenza prevedibile, banda garantita, ideale per workload mission-critical. VPN è valida ma dipende dalla qualità di internet. Internet Gateway serve per accesso internet delle risorse VPC, non per connettività ibrida. VPC Peering collega VPC tra loro, non on-premises ad AWS.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — VPC & Networking',
    text: `<strong>VPC:</strong> rete privata virtuale · subnet pubblica (IGW) vs privata (NAT)<br><br>
<strong>IGW:</strong> collega VPC a internet · <strong>NAT Gateway:</strong> subnet private → internet (outbound only)<br><br>
<strong>Security Group:</strong> stateful · livello istanza · solo Allow<br>
<strong>NACL:</strong> stateless · livello subnet · Allow + Deny<br><br>
<strong>Route 53:</strong> DNS globale · registrazione domini · health check · routing policies<br><br>
<strong>CloudFront:</strong> CDN globale · Edge Location · cache · DDoS protection<br><br>
<strong>Connettività ibrida:</strong> VPN (rapido, via internet) · Direct Connect (dedicato, latenza garantita)<br>
<strong>VPC Peering:</strong> due VPC · <strong>Transit Gateway:</strong> hub per molte VPC`,
    analogy: `VPC = tuo ufficio nel grattacielo AWS. IGW = portone principale. NAT = fattorino. Security Group = guardia personale. NACL = metal detector all'ingresso piano. CloudFront = magazzini locali. Direct Connect = linea dedicata.`,
  },

];
