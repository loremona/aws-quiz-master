"""
Genera spiegazioni in italiano per ogni domanda del quiz AWS.
Esegui una volta: python genera_spiegazioni.py
Richiede: pip install anthropic
"""

import anthropic
import json
import os
import hashlib
import time

API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
if not API_KEY:
    API_KEY = input("Incolla la tua Anthropic API key: ").strip()

client = anthropic.Anthropic(api_key=API_KEY)

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
FILE_DB      = os.path.join(SCRIPT_DIR, "database_domande.json")
FILE_OUTPUT  = os.path.join(SCRIPT_DIR, "spiegazioni.json")

def sr_key(domanda):
    return hashlib.md5(domanda.encode()).hexdigest()[:12]

def genera_spiegazione(domanda, opzioni, risposta_corretta):
    opzioni_testo = "\n".join(f"{k}) {v}" for k, v in opzioni.items())
    corr_keys     = [r.strip() for r in risposta_corretta.split(",")]
    corr_testo    = " | ".join(opzioni.get(k, k) for k in corr_keys)

    prompt = f"""Sei un esperto certificato AWS. Spiega in italiano, in modo conciso (massimo 4 frasi), \
perché la risposta corretta è quella indicata. Concentrati sul concetto AWS chiave, non ripetere la domanda.

Domanda: {domanda}

Opzioni:
{opzioni_testo}

Risposta corretta: {risposta_corretta} — {corr_testo}"""

    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=350,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.content[0].text.strip()

def main():
    with open(FILE_DB, "r", encoding="utf-8") as f:
        db = json.load(f)

    if os.path.exists(FILE_OUTPUT):
        with open(FILE_OUTPUT, "r", encoding="utf-8") as f:
            spiegazioni = json.load(f)
        print(f"Riprendendo: {len(spiegazioni)}/{len(db)} già generate.")
    else:
        spiegazioni = {}

    da_fare = [q for q in db if sr_key(q["domanda"]) not in spiegazioni]
    print(f"Da generare: {len(da_fare)} domande.")

    for i, q in enumerate(da_fare, 1):
        k = sr_key(q["domanda"])
        try:
            spieg = genera_spiegazione(q["domanda"], q["opzioni"], q["risposta_corretta"])
            spiegazioni[k] = spieg
            with open(FILE_OUTPUT, "w", encoding="utf-8") as f:
                json.dump(spiegazioni, f, indent=2, ensure_ascii=False)
            print(f"[{i}/{len(da_fare)}] ✓")
            time.sleep(0.15)
        except Exception as e:
            print(f"[{i}/{len(da_fare)}] Errore: {e}")
            time.sleep(2)

    print(f"\nDone! {len(spiegazioni)} spiegazioni salvate in {FILE_OUTPUT}")

if __name__ == "__main__":
    main()
