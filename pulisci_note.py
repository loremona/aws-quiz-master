"""
Genera note_aws_complete.json combinando p1grezzo.pdf e noteawsokokok.pdf,
rimuovendo il rumore e mantenendo tutto il contenuto utile per AWS CCP.
"""
import pdfplumber, re, json, os

CARTELLA = os.path.dirname(os.path.abspath(__file__))
GREZZO   = os.path.expanduser("~/p1grezzo.pdf")
PULITO   = os.path.join(CARTELLA, "noteawsokokok.pdf")
OUTPUT   = os.path.join(CARTELLA, "note_aws_complete.json")

# Pattern da rimuovere (rumore)
RUMORE = [
    r'\d{2}[-_]\d{2}[-_]\d{2,4}\.(?:jpg|png|jpeg|gif|img)',  # riferimenti immagini
    r'(?i)^traduzione dei contenuti',
    r'(?i)^spiegazione extra',
    r'(?i)^posso farti una domanda',
    r'(?i)^ecco l.analisi dettagliata basata sulle slide',
    r'(?i)^analisi dettagliata basata sulle slide',
    r'(?i)^come mostrato nel diagramma',
    r'(?i)^come si può vedere dalla slide',
    r'(?i)^la slide (mostra|presenta|introduce|descrive)',
    r'(?i)^questa slide',
    r'(?i)^nell.immagine si (nota|vede|trova)',
    r'(?i)^basandomi sulle slide',
    r'(?i)^note del corso',
    r'AWS Cloud Practitioner – Note del Corso',
    r'(?i)^appunti di le',
]

RUMORE_RE = [re.compile(p) for p in RUMORE]


def e_rumore(riga):
    riga = riga.strip()
    if not riga:
        return True
    if len(riga) < 8:
        return True
    for pattern in RUMORE_RE:
        if pattern.search(riga):
            return True
    return False


def estrai_testo_pulito(path):
    """Estrae testo da PDF rimuovendo il rumore riga per riga."""
    with pdfplumber.open(path) as pdf:
        righe_pulite = []
        for page in pdf.pages:
            testo = page.extract_text()
            if not testo:
                continue
            for riga in testo.split('\n'):
                if not e_rumore(riga):
                    righe_pulite.append(riga.strip())
    return righe_pulite


def righe_a_sezioni(righe):
    """Divide le righe in sezioni basandosi sui titoli."""
    sezioni = []
    titolo = "Introduzione"
    blocco = []

    for riga in righe:
        # Riconosce titoli: corta, inizia maiuscola o numero, no punteggiatura finale
        is_titolo = (
            5 < len(riga) < 90 and
            not riga.endswith(('.', ',', ';', ':', '?', '!')) and
            len(riga.split()) <= 12 and
            re.match(r'^(\d+[\.\s–\-]|[A-ZÀÈÉÌÒÙ])', riga)
        )

        if is_titolo and len(blocco) > 0:
            contenuto = ' '.join(blocco).strip()
            if len(contenuto) > 50:
                sezioni.append({
                    "titolo": titolo,
                    "contenuto": contenuto,
                    "parole": len(contenuto.split())
                })
            titolo = riga
            blocco = []
        else:
            blocco.append(riga)

    if blocco:
        contenuto = ' '.join(blocco).strip()
        if len(contenuto) > 50:
            sezioni.append({
                "titolo": titolo,
                "contenuto": contenuto,
                "parole": len(contenuto.split())
            })

    return sezioni


def normalizza(testo):
    return re.sub(r'\s+', ' ', testo.lower().strip())


def main():
    print("Estrazione p1grezzo.pdf...")
    righe_grezzo = estrai_testo_pulito(GREZZO)
    sezioni_grezzo = righe_a_sezioni(righe_grezzo)
    print(f"  → {len(sezioni_grezzo)} sezioni, {sum(s['parole'] for s in sezioni_grezzo):,} parole")

    print("Estrazione noteawsokokok.pdf...")
    righe_pulito = estrai_testo_pulito(PULITO)
    sezioni_pulito = righe_a_sezioni(righe_pulito)
    print(f"  → {len(sezioni_pulito)} sezioni, {sum(s['parole'] for s in sezioni_pulito):,} parole")

    # Unisci: parti dal pulito come base, aggiungi dal grezzo ciò che manca
    contenuti_pulito = set(normalizza(s['contenuto'])[:80] for s in sezioni_pulito)
    titoli_pulito    = set(normalizza(s['titolo']) for s in sezioni_pulito)

    aggiunte = 0
    sezioni_combinate = list(sezioni_pulito)

    for s in sezioni_grezzo:
        chiave_c = normalizza(s['contenuto'])[:80]
        # Aggiungi solo se il contenuto non è già presente (ignora titolo)
        if chiave_c not in contenuti_pulito:
            sezioni_combinate.append(s)
            contenuti_pulito.add(chiave_c)
            aggiunte += 1

    print(f"\nSezioni nel pulito:     {len(sezioni_pulito)}")
    print(f"Sezioni aggiunte dal grezzo: {aggiunte}")
    print(f"Totale sezioni combinate:    {len(sezioni_combinate)}")
    print(f"Parole totali: {sum(s['parole'] for s in sezioni_combinate):,}")

    # Dedup finale sul contenuto completo
    visti = set()
    uniche = []
    for s in sezioni_combinate:
        chiave = normalizza(s['contenuto'])[:120]
        if chiave not in visti:
            visti.add(chiave)
            uniche.append(s)
    sezioni_combinate = uniche
    print(f"Dopo dedup finale: {len(sezioni_combinate)} sezioni")

    # Ordina per titolo per coerenza
    sezioni_combinate.sort(key=lambda x: x['titolo'].lower())

    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(sezioni_combinate, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Salvato in: {OUTPUT}")
    print("\nTop 20 sezioni per contenuto:")
    for s in sorted(sezioni_combinate, key=lambda x: -x['parole'])[:20]:
        print(f"  {s['parole']:4d} parole | {s['titolo']}")


if __name__ == "__main__":
    main()
