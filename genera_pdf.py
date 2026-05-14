"""
Converte note_aws_complete.json in un PDF di studio leggibile.
"""
import json, os, re
from fpdf import FPDF

CARTELLA = os.path.dirname(os.path.abspath(__file__))
INPUT    = os.path.join(CARTELLA, "note_aws_complete.json")
OUTPUT   = os.path.join(CARTELLA, "note_aws_complete.pdf")

FONT_REG  = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

class PDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("Liberation", "", FONT_REG)
        self.add_font("Liberation", "B", FONT_BOLD)

    def header(self):
        self.set_font("Liberation", "B", 9)
        self.set_text_color(150, 150, 150)
        self.cell(0, 8, "AWS Cloud Practitioner - Note Complete", align="R")
        self.ln(2)
        self.set_draw_color(200, 200, 200)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def footer(self):
        self.set_y(-12)
        self.set_font("Liberation", "", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 8, f"Pagina {self.page_no()}", align="C")


def pulisci(testo):
    testo = re.sub(r'\s+', ' ', testo).strip()
    # Sostituisci caratteri speciali comuni
    testo = testo.replace('–', '-').replace('—', '-')
    testo = testo.replace('‘', "'").replace('’', "'")
    testo = testo.replace('“', '"').replace('”', '"')
    testo = testo.replace('•', '-').replace('…', '...')
    testo = testo.replace('â', "'")
    return testo


def main():
    with open(INPUT, 'r', encoding='utf-8') as f:
        sezioni = json.load(f)

    print(f"Sezioni da convertire: {len(sezioni)}")

    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_margins(15, 20, 15)

    # Copertina
    pdf.add_page()
    pdf.set_font("Liberation", "B", 28)
    pdf.set_text_color(255, 153, 0)  # arancione AWS
    pdf.ln(40)
    pdf.cell(0, 15, "AWS Cloud Practitioner", align="C")
    pdf.ln(12)
    pdf.set_font("Liberation", "B", 20)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(0, 12, "Note Complete di Studio", align="C")
    pdf.ln(10)
    pdf.set_font("Liberation", "", 12)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, f"{len(sezioni)} sezioni | Fonte: p1grezzo + noteawsokokok", align="C")
    pdf.ln(6)

    # Indice argomenti principali
    pdf.ln(20)
    pdf.set_font("Liberation", "B", 14)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(0, 10, "Argomenti principali:", align="L")
    pdf.ln(6)

    # Raggruppa per prima lettera/parola chiave
    capitoli = {}
    for s in sezioni:
        prima = s['titolo'].split()[0].rstrip('.').upper() if s['titolo'].split() else "ALTRO"
        # Raggruppa numeri
        if prima.isdigit():
            prima = "CAPITOLI NUMERATI"
        capitoli.setdefault(prima, 0)
        capitoli[prima] += 1

    pdf.set_font("Liberation", "", 10)
    pdf.set_text_color(80, 80, 80)
    chiavi = sorted(capitoli.keys())[:40]
    for i, k in enumerate(chiavi):
        if i % 3 == 0 and i > 0:
            pdf.ln(5)
        pdf.cell(60, 6, f"• {k[:25]} ({capitoli[k]})")
    pdf.ln(15)

    # Contenuto
    pdf.add_page()
    titolo_corrente = None

    for s in sezioni:
        titolo = pulisci(s['titolo'])
        contenuto = pulisci(s['contenuto'])

        if not contenuto.strip():
            continue

        # Titolo sezione
        pdf.set_font("Liberation", "B", 12)
        pdf.set_text_color(255, 153, 0)  # arancione AWS
        pdf.set_fill_color(245, 245, 245)

        # Linea separatrice se cambia argomento principale
        prima_parola = titolo.split()[0] if titolo.split() else ""
        if prima_parola != titolo_corrente:
            if titolo_corrente is not None:
                pdf.ln(2)
                pdf.set_draw_color(230, 230, 230)
                pdf.line(15, pdf.get_y(), 195, pdf.get_y())
                pdf.ln(3)
            titolo_corrente = prima_parola

        pdf.set_font("Liberation", "B", 11)
        pdf.set_text_color(200, 100, 0)
        pdf.multi_cell(0, 7, titolo, fill=False)
        pdf.ln(1)

        # Contenuto
        pdf.set_font("Liberation", "", 10)
        pdf.set_text_color(40, 40, 40)
        pdf.multi_cell(0, 6, contenuto)
        pdf.ln(4)

    pdf.output(OUTPUT)
    print(f"✅ PDF generato: {OUTPUT}")
    import os
    size = os.path.getsize(OUTPUT) / 1024 / 1024
    print(f"   Dimensione: {size:.1f} MB")


if __name__ == "__main__":
    main()
