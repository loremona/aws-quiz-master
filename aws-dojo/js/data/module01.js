'use strict';
const MODULE01 = [

  /* ── BENVENUTO ── */
  {
    type: 'lesson',
    emoji: '☁️',
    title: 'Benvenuto in Cloud Fundamentals',
    text: `In questo modulo impari le basi del cloud computing: <strong>cos'è</strong>, perché esiste, e come AWS organizza la propria infrastruttura globale.<br><br>
Alla fine saprai rispondere alle domande più frequenti dell'esame CLF-C02 su:<br>
• Benefici del cloud vs on-premises<br>
• Modelli IaaS / PaaS / SaaS<br>
• Regioni, Availability Zone, Edge Location<br>
• Economies of scale e TCO`,
    analogy: `Sei il nuovo arrivato in un condominio enorme (AWS). Non compri casa — paghi l'affitto solo per i mesi che usi e puoi cambiare appartamento in un click.`,
  },

  /* ── LEZIONE: cos'è il cloud ── */
  {
    type: 'lesson',
    emoji: '🏢',
    title: "Cos'è il Cloud Computing",
    text: `Il <strong>cloud computing</strong> è l'erogazione di servizi IT (server, storage, database, rete, software) <strong>via internet</strong>, con pagamento a consumo (<em>pay-as-you-go</em>).<br><br>
Prima del cloud, le aziende dovevano comprare hardware in anticipo (<strong>CapEx</strong> — Capital Expenditure), aspettare mesi per l'installazione, e tenere il tutto in un data center interno. Con il cloud si paga solo quello che si usa (<strong>OpEx</strong> — Operational Expenditure) e le risorse sono disponibili in minuti.`,
    analogy: `La corrente elettrica: non costruisci una centrale in giardino. Attacchi la spina e paghi il consumo a fine mese. Il cloud è la stessa cosa, ma per i server.`,
  },

  /* ── QUIZ: CapEx vs OpEx ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole passare da un data center on-premises al cloud. Come cambia il modello di spesa?",
    opts: [
      'Da CapEx (spese in conto capitale) a OpEx (spese operative)',
      'Da OpEx a CapEx',
      'Rimane CapEx perché si acquistano istanze Reserved',
      'Nessuna differenza: entrambi i modelli richiedono contratti pluriennali',
    ],
    a: 0,
    explain: `✅ Il cloud converte le spese fisse di hardware (CapEx) in spese variabili (OpEx) pagate a consumo. Le istanze Reserved comportano un impegno economico, ma non si acquista hardware fisico, quindi rimane OpEx. L'esame chiede spesso questa distinzione.`,
  },

  /* ── LEZIONE: 6 benefici del cloud ── */
  {
    type: 'lesson',
    emoji: '🚀',
    title: 'I 6 Benefici del Cloud AWS',
    text: `AWS identifica <strong>6 vantaggi</strong> chiave del cloud computing:<br><br>
<strong>1. Trading CapEx for variable expense</strong> — paghi solo quello che usi<br>
<strong>2. Economies of scale</strong> — AWS compra hardware per milioni di clienti → costi minori per tutti<br>
<strong>3. Stop guessing capacity</strong> — scala su/giù in tempo reale<br>
<strong>4. Increase speed and agility</strong> — nuovi ambienti in minuti, non mesi<br>
<strong>5. Stop spending money on data centers</strong> — AWS gestisce l'infrastruttura<br>
<strong>6. Go global in minutes</strong> — deploy in tutto il mondo con pochi click`,
    analogy: `Ordinare la pizza invece di costruire una pizzeria. Non compri il forno, non assumi il pizzaiolo, non gestisci la consegna. Paghi solo la pizza che mangi.`,
  },

  /* ── FUN FACT: economies of scale ── */
  {
    type: 'fact',
    emoji: '📊',
    title: 'AWS ha abbassato i prezzi oltre 100 volte',
    text: `Amazon Web Services gestisce una delle infrastrutture fisiche più grandi del mondo. Le <strong>economies of scale</strong> permettono ad AWS di ridurre continuamente i prezzi: dal 2006 ha abbassato i prezzi oltre <strong>100 volte</strong>.<br><br>
Per l'esame ricorda: le economies of scale significano che <em>più clienti usano AWS, minori diventano i costi unitari</em>, e questi risparmi vengono trasferiti ai clienti.`,
  },

  /* ── LEZIONE: modelli IaaS / PaaS / SaaS ── */
  {
    type: 'lesson',
    emoji: '🧱',
    title: 'IaaS, PaaS, SaaS: i 3 Modelli di Servizio',
    text: `<strong>IaaS (Infrastructure as a Service)</strong><br>
Controllo massimo: gestisci OS, middleware, runtime. AWS fornisce solo hardware virtuale.<br>
Esempio: <strong>EC2</strong> — tu installi e configuri tutto sopra.<br><br>
<strong>PaaS (Platform as a Service)</strong><br>
AWS gestisce l'infrastruttura, tu gestisci solo il codice.<br>
Esempio: <strong>Elastic Beanstalk</strong> — carichi il codice, AWS fa il resto.<br><br>
<strong>SaaS (Software as a Service)</strong><br>
Usi l'applicazione finita, zero gestione tecnica.<br>
Esempio: <strong>Gmail, Salesforce</strong> — apri e usi.`,
    analogy: `Pizza: IaaS = compri ingredienti e cucini; PaaS = kit con ingredienti già misurati; SaaS = pizza già consegnata a casa.`,
  },

  /* ── QUIZ: modelli di servizio ── */
  {
    type: 'quiz',
    q: "Un team vuole deployare un'app web senza gestire l'infrastruttura sottostante (OS, server, scaling). Quale modello è più adatto?",
    opts: [
      'IaaS — per il massimo controllo sul sistema operativo',
      'PaaS — il provider gestisce infrastruttura e runtime',
      'SaaS — il software è già pronto da usare',
      'On-premises — per sicurezza e conformità',
    ],
    a: 1,
    explain: `✅ PaaS è la risposta giusta: il provider gestisce OS, runtime e scaling. Il team si concentra solo sul codice. IaaS richiede gestione dell'OS (troppo lavoro). SaaS è per software già pronto da consumare, non da sviluppare. On-premises è l'opposto del cloud.`,
  },

  /* ── LEZIONE: infrastruttura globale ── */
  {
    type: 'lesson',
    emoji: '🌍',
    title: 'Infrastruttura Globale AWS',
    text: `AWS organizza la propria infrastruttura in tre livelli:<br><br>
<strong>Regione (Region)</strong> — area geografica con almeno 2 data center. Es: <code>eu-west-1</code> (Irlanda). Scegli la regione per leggi locali, latenza e disponibilità servizi.<br><br>
<strong>Availability Zone (AZ)</strong> — data center fisicamente separato dentro una regione. Ogni regione ha 2-6 AZ. Usa più AZ per <strong>alta disponibilità</strong>: se una fallisce, le altre continuano.<br><br>
<strong>Edge Location</strong> — server distribuiti globalmente per servizi CDN (<strong>CloudFront</strong>) e DNS (<strong>Route 53</strong>). Portano i contenuti vicino agli utenti finali.`,
    analogy: `La catena di supermercati: Regione = catena in Italia; AZ = filiali in città diverse (se chiude Napoli, Roma è aperta); Edge Location = scaffali automatici sotto casa per consegne in 30 minuti.`,
  },

  /* ── QUIZ: Regioni / AZ / Edge ── */
  {
    type: 'quiz',
    q: "Un'azienda vuole garantire che la propria app web rimanga disponibile anche se un data center fisico va offline. Quale soluzione AWS è più appropriata?",
    opts: [
      'Deployare su più Edge Location',
      'Usare una singola Availability Zone di grande dimensione',
      "Distribuire l'app su più Availability Zone nella stessa Regione",
      'Replicare i dati su più Regioni AWS',
    ],
    a: 2,
    explain: `✅ Le Availability Zone sono data center fisicamente separati nella stessa regione. Se una AZ fallisce, le altre continuano. Le Edge Location servono per CDN, non per alta disponibilità applicativa. Una singola AZ è un single point of failure. Multi-regione è corretto per disaster recovery globale, ma la risposta più semplice ed economica per HA è multi-AZ.`,
  },

  /* ── FUN FACT: servizi globali ── */
  {
    type: 'fact',
    emoji: '🗺️',
    title: 'Servizi globali vs regionali: la trappola dell\'esame',
    text: `La maggior parte dei servizi AWS è <strong>regionale</strong> (EC2, S3, RDS…). Ma alcuni sono <strong>globali</strong> e non si seleziona la regione nella console:<br><br>
• <strong>IAM</strong> — utenti e policy sono globali<br>
• <strong>Route 53</strong> — DNS globale<br>
• <strong>CloudFront</strong> — CDN globale<br>
• <strong>Billing / Cost Explorer</strong> — visione globale dei costi<br><br>
Questa distinzione appare spesso nelle domande d'esame!`,
  },

  /* ── LEZIONE: modelli di deployment ── */
  {
    type: 'lesson',
    emoji: '🔧',
    title: 'Cloud, Ibrido, On-Premises',
    text: `<strong>Cloud pubblico</strong> — tutto su AWS, zero infrastruttura propria. Massima agilità, pagamento a consumo.<br><br>
<strong>Ibrido (Hybrid)</strong> — parte dell'infrastruttura on-premises, parte su AWS, collegate tramite VPN o <strong>Direct Connect</strong>. Usato quando ci sono dati sensibili o requisiti legali che impongono presenza locale.<br><br>
<strong>On-Premises (Private Cloud)</strong> — tutto nei propri data center, usando tecnologie cloud-like (es. VMware). AWS offre <strong>AWS Outposts</strong> per portare hardware AWS fisicamente in loco.`,
    analogy: `Affitto vs mutuo vs costruire casa: cloud = affitto puro; ibrido = compri un appartamento ma ne affitti altri su Airbnb per coprire le spese; on-premises = possiedi e gestisci tutto.`,
  },

  /* ── RIPASSO LAMPO ── */
  {
    type: 'lesson',
    emoji: '⚡',
    title: 'Ripasso Lampo — Cloud Fundamentals',
    text: `<strong>CapEx vs OpEx:</strong> cloud = OpEx (paghi mentre usi, non in anticipo)<br><br>
<strong>6 benefici:</strong> CapEx→OpEx · economies of scale · no capacity guessing · velocità/agilità · no data center · global in minutes<br><br>
<strong>Modelli:</strong> IaaS (EC2) = gestisci OS | PaaS (Beanstalk) = gestisci codice | SaaS = usi e basta<br><br>
<strong>Infrastruttura:</strong> Regione ≥2 AZ · AZ = data center isolato · Edge Location = CDN/DNS<br><br>
<strong>Servizi globali:</strong> IAM · Route 53 · CloudFront · Billing<br><br>
<strong>Deployment:</strong> cloud pubblico · ibrido (VPN/Direct Connect) · on-premises (Outposts)`,
    analogy: `Il cloud è come Netflix: paghi mensile, guardi su qualsiasi schermo, Netflix gestisce i server. Tu non compri DVD (CapEx), non gestisci il data center.`,
  },

  /* ── QUIZ FINALE ── */
  {
    type: 'quiz',
    q: "Cosa significa 'economies of scale' nel contesto AWS?",
    opts: [
      'AWS offre sconti solo alle grandi aziende enterprise',
      "Man mano che più clienti usano AWS, i costi per cliente diminuiscono grazie agli acquisti in volume",
      "I prezzi aumentano all'aumentare dell'utilizzo",
      'Le piccole aziende pagano più delle grandi per gli stessi servizi',
    ],
    a: 1,
    explain: `✅ Le economies of scale: AWS acquista hardware per milioni di clienti → costo unitario minimo → risparmio trasferito a tutti i clienti. NON è solo per grandi aziende. La riduzione dei costi avviene automaticamente con la crescita della base clienti AWS.`,
  },

];
