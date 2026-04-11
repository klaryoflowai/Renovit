import { useState } from "react";

const C = {
  stone: "#f5f0e8",
  stoneDark: "#e8e0d0",
  ink: "#1a1814",
  inkMid: "#4a4540",
  inkLight: "#8a857e",
  accent: "#8B6914",
  accentLight: "#c8a84b",
  green: "#4a7c59",
  red: "#8B3A3A",
  border: "#d8d0c4",
};

const TABS = ["Formulare", "Parametri tehnici", "Aplicare", "Laborator", "Ambalaj & cost"];

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: C.accent, fontFamily: "'DM Mono', monospace", marginBottom: 12, paddingBottom: 6, borderBottom: `1px solid ${C.border}` }}>{title}</div>
    {children}
  </div>
);

const Row = ({ label, value, note, highlight }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "8px 0", borderBottom: `1px solid ${C.stoneDark}`, gap: 12 }}>
    <span style={{ fontSize: 13, color: highlight ? C.ink : C.inkMid, fontFamily: "'DM Mono', monospace", flex: 1 }}>{label}</span>
    <div style={{ textAlign: "right" }}>
      <span style={{ fontSize: 13, color: highlight ? C.accent : C.ink, fontWeight: highlight ? 500 : 400, fontFamily: "'DM Mono', monospace" }}>{value}</span>
      {note && <div style={{ fontSize: 11, color: C.inkLight, marginTop: 2 }}>{note}</div>}
    </div>
  </div>
);

const Badge = ({ label, color }) => (
  <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", background: color + "18", color, border: `1px solid ${color}44`, padding: "3px 8px", borderRadius: 3, fontFamily: "'DM Mono', monospace" }}>{label}</span>
);

const IngredientBar = ({ name, source, pct, color, note }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
      <div>
        <span style={{ fontSize: 13, color: C.ink, fontFamily: "'DM Mono', monospace" }}>{name}</span>
        <span style={{ fontSize: 11, color: C.inkLight, marginLeft: 8 }}>{source}</span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 500, color, fontFamily: "'DM Mono', monospace" }}>{pct}%</span>
    </div>
    <div style={{ height: 6, background: C.stoneDark, borderRadius: 3, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 3, transition: "width 0.6s ease" }} />
    </div>
    {note && <div style={{ fontSize: 11, color: C.inkLight, marginTop: 4 }}>{note}</div>}
  </div>
);

const Step = ({ n, title, detail }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
    <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#fff", fontWeight: 500 }}>{n}</div>
    <div style={{ paddingTop: 4 }}>
      <div style={{ fontSize: 13, color: C.ink, fontFamily: "'DM Mono', monospace", marginBottom: 3 }}>{title}</div>
      <div style={{ fontSize: 12, color: C.inkMid, lineHeight: 1.6 }}>{detail}</div>
    </div>
  </div>
);

const TestRow = ({ test, metoda, target, critic }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, padding: "9px 0", borderBottom: `1px solid ${C.stoneDark}`, flexWrap: "wrap" }}>
    <span style={{ fontSize: 12, color: C.ink, fontFamily: "'DM Mono', monospace", flex: 2, minWidth: 130 }}>{test}</span>
    <span style={{ fontSize: 11, color: C.inkLight, flex: 2, minWidth: 120 }}>{metoda}</span>
    <span style={{ fontSize: 12, color: C.accent, fontFamily: "'DM Mono', monospace", flex: 2, minWidth: 100 }}>{target}</span>
    {critic && <Badge label="Critic" color={C.red} />}
  </div>
);

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ background: C.stone, minHeight: "100vh", fontFamily: "'Libre Baskerville', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.stoneDark}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; }
      `}</style>

      <div style={{ padding: "28px 20px 0", maxWidth: 660, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 4, color: C.inkLight, fontFamily: "'DM Mono', monospace", marginBottom: 6 }}>RENOVIT · FISA TEHNICA PRODUS</div>
            <div style={{ fontSize: 26, color: C.ink, fontWeight: 700, lineHeight: 1.1 }}>Mineral Interior</div>
            <div style={{ fontSize: 14, color: C.accent, marginTop: 4, fontStyle: "italic" }}>Tencuiala minerala respirabila de interior</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 9, letterSpacing: 2, color: C.inkLight, fontFamily: "'DM Mono', monospace" }}>VERSIUNE MVP</div>
            <div style={{ fontSize: 11, color: C.inkLight, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>v1.0 · 2025</div>
            <div style={{ marginTop: 8, display: "flex", gap: 6, justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Badge label="100% Mineral" color={C.green} />
              <Badge label="Materie prima proprie" color={C.accent} />
            </div>
          </div>
        </div>

        <div style={{ background: C.ink, color: C.stone, padding: "12px 16px", marginTop: 16, marginBottom: 20, fontSize: 13, fontStyle: "italic", lineHeight: 1.6, borderLeft: `3px solid ${C.accentLight}` }}>
          "Produs din calcar alb moldovenesc si argila bentonitica naturala - fara chimicale sintetice. Respira. Nu face mucegai. Costa mai putin decat importul."
        </div>

        <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.border}`, overflowX: "auto", marginBottom: 24 }}>
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 14px",
                whiteSpace: "nowrap",
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: tab === i ? C.accent : C.inkLight,
                borderBottom: tab === i ? `2px solid ${C.accent}` : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 0 && (
          <div>
            <Section title="Compozitie - Formulare MVP">
              <IngredientBar name="Calcar micronizat Volodeni" source="Mina din Cupcini · sector Volodeni" pct={82} color={C.accent} note="Albul premium - cel mai alb calcar din Moldova. Fractie 0-0.2mm. Confera culoarea alba naturala fara pigmenti." />
              <IngredientBar name="Bentonita Ocnita" source="Mina din Cupcini · sector Ocnita" pct={10} color={C.green} note="Inlocuieste polimerii sintetici de aderenta (cost EUR2.000-4.000/t). Proprietati tixotropice naturale - nu curge, nu fisureaza." />
              <IngredientBar name="Ciment Portland CEM I 42.5" source="Import / furnizor local" pct={5} color={C.inkMid} note="Liant hidraulic. Asigura rezistenta mecanica. Disponibil local la EUR80-100/t." />
              <IngredientBar name="Gips - optional" source="Cariera terta (la cerere)" pct={3} color={C.inkLight} note="OPTIONAL. Se adauga doar daca testele de piata indica nevoia de priza mai rapida (<60 min). Fara el, priza e 120-180 min." />
            </Section>

            <Section title="Argumentul de cost vs. concurenta">
              <Row label="Cost materie prima proprie (calcar + bentonita)" value="EUR12-18/tona" highlight />
              <Row label="Cost calcar de import (echivalent, fara bentonit)" value="EUR35-55/tona" />
              <Row label="Cost aditivi sintetici inlocuiti de bentonita" value="EUR200-400/tona produs" />
              <Row label="Cost total productie estimat RENOVIT" value="EUR45-65/tona" highlight />
              <Row label="Pret vanzare en-gros target" value="EUR100-130/tona" />
              <Row label="Marja bruta estimata" value="50-60%" highlight />
            </Section>

            <Section title="Avantajul competitiv unic">
              <div style={{ fontSize: 13, color: C.inkMid, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 10 }}><span style={{ color: C.accent }}>Bentonita Ocnita</span> - singurul ingredient care face produsul imposibil de replicat de concurenta la acelasi cost. Este aditivul natural de aderenta si plasticitate care in formulele Knauf sau Supraten este inlocuit cu polimeri sintetici costisitori.</p>
                <p><span style={{ color: C.accent }}>Calcarul Volodeni</span> - pH natural 8.5-9.2 inhiba dezvoltarea fungilor si mucegaiului fara biocide adaugate. Argument certificabil medical.</p>
              </div>
            </Section>
          </div>
        )}

        {tab === 1 && (
          <div>
            <Section title="Parametri fizico-chimici tinta">
              <Row label="Culoare" value="Alb natural" note="fara pigmenti, din calcar Volodeni" />
              <Row label="Granulometrie maxima" value="<= 0.5 mm" note="D90 fractie calcitica" />
              <Row label="Densitate in vrac" value="900-1100 kg/m3" />
              <Row label="Continut apa la amestec" value="28-32%" note="raport apa/pulbere" />
              <Row label="Consistenta (spread)" value="165-185 mm" note="conform EN 1015-3" highlight />
              <Row label="Timp de priza initial" value=">= 90 min" note="fara gips / >= 45 min cu gips 3%" />
              <Row label="Timp de priza final" value="<= 300 min" />
              <Row label="pH amestec" value="11.5-12.5" note="inhiba fungi si bacterii" />
            </Section>

            <Section title="Parametri mecanici dupa 28 zile">
              <Row label="Rezistenta la compresiune" value=">= 2.0 MPa" note="conform EN 1015-11" highlight />
              <Row label="Rezistenta la incovoiere" value=">= 0.5 MPa" />
              <Row label="Aderenta suport (bond strength)" value=">= 0.3 MPa" note="pe beton si BCA - target EN 1015-12" highlight />
              <Row label="Absorbtie apa prin capilaritate" value="<= 0.5 kg/(m2·min0.5)" note="material respirabil" />
              <Row label="Permeabilitate vaporii apa (u)" value="5-15" note="respirabil - fata de gips u=5-10" />
              <Row label="Rezistenta la inghet-dezghet" value=">= 25 cicluri" note="relevant pentru aplicare exterioara viitoare" />
            </Section>

            <Section title="Performanta vs. concurenta">
              <Row label="Supraten Orizont (gips 100%)" value="Comparabil rezistenta" note="cost lor: EUR60-80/t material" />
              <Row label="Knauf Rotband (gips import)" value="Comparabil lucrabilitate" note="cost lor: EUR80-120/t material" />
              <Row label="RENOVIT Mineral Interior" value="Superior ecologic + cost" note="materie prima proprie >=90%" highlight />
            </Section>
          </div>
        )}

        {tab === 2 && (
          <div>
            <Section title="Domeniu de aplicare">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {["Pereti interiori BCA", "Pereti beton", "Caramida", "Blocuri calcar", "Suprafete vechi"].map((s) => (
                  <span key={s} style={{ fontSize: 11, background: C.stoneDark, padding: "5px 10px", borderRadius: 4, fontFamily: "'DM Mono', monospace", color: C.inkMid }}>{s}</span>
                ))}
              </div>
              <div style={{ fontSize: 12, color: C.inkLight, fontStyle: "italic" }}>Nu se aplica pe: suprafete cu umiditate activa, tencuieli sulfoaluminate, gresie, faianta.</div>
            </Section>

            <Section title="Instructiuni de aplicare">
              <Step n="1" title="Pregatirea suportului" detail="Suportul trebuie sa fie curat, fara praf, grasimi sau eflorescente. Suprafetele absorbante (BCA, caramida) se amorseaza cu solutie de amorsa acrilica diluata 1:3. Timp de asteptare: 2-4 ore." />
              <Step n="2" title="Prepararea amestecului" detail="Se adauga 28-32% apa rece curata in recipient. Se adauga pudra RENOVIT treptat, amestecand continuu cu malaxorul la 400-600 rpm. Timp de amestecare: 3-4 minute. Se lasa in repaus 5 minute, se remalaxeaza 1 minut." />
              <Step n="3" title="Aplicarea primului strat" detail="Grosime strat: 5-8 mm. Se aplica cu drisca de inox, tractionand de jos in sus. Timp deschis: 45-60 minute. NU se aplica la temperaturi sub +5C sau peste +35C." />
              <Step n="4" title="Aplicarea stratului finit (daca grosime >10mm)" detail="Al doilea strat se aplica dupa 24 ore (suportul trebuie sa fie prizeit dar nu uscat complet). Grosime totala maxima recomandata: 15 mm per aplicare." />
              <Step n="5" title="Driscuire si finisare" detail="La 60-90 minute dupa aplicare, suprafata se driscuiește cu drisca de spuma sau plastic umeda. Rezultat: suprafata neteda gata pentru glet sau vopsea." />
              <Step n="6" title="Maturare" detail="Priza completa: 24-48 ore. Rezistenta completa (28 zile). Se protejeaza de inghet minimum 48 ore si de curenti puternici de aer in primele 24 ore." />
            </Section>

            <Section title="Consum orientativ">
              <Row label="Strat 10 mm grosime" value="13-15 kg/m2" highlight />
              <Row label="Strat 15 mm grosime" value="18-22 kg/m2" />
              <Row label="Sac 30 kg acopera (10mm)" value="2.0-2.3 m2" />
              <Row label="Camera standard 20m2 pereti (10mm)" value="10-12 saci 30kg" />
            </Section>
          </div>
        )}

        {tab === 3 && (
          <div>
            <Section title="Testele obligatorii pentru MVP - laborator">
              <div style={{ fontSize: 11, color: C.inkLight, fontFamily: "'DM Mono', monospace", display: "flex", gap: 16, marginBottom: 12 }}>
                <span>Test</span><span style={{ marginLeft: "auto" }}>Metoda · Target · Critic</span>
              </div>
              <TestRow test="Granulometrie calcar" metoda="Cernere laser / EN 933-1" target="D90 <= 0.5mm" critic />
              <TestRow test="Activitate bentonita" metoda="Gonflare Enslin" target=">= 20 ml/2g" critic />
              <TestRow test="Consistenta amestec" metoda="EN 1015-3 (flow table)" target="165-185 mm" critic />
              <TestRow test="Timp de priza initial" metoda="Vicat / EN 196-3" target=">= 90 min" critic />
              <TestRow test="Rezistenta compresiune" metoda="EN 1015-11 (28 zile)" target=">= 2.0 MPa" critic />
              <TestRow test="Aderenta suport BCA" metoda="EN 1015-12 (pull-off)" target=">= 0.3 MPa" critic />
              <TestRow test="Aderenta suport beton" metoda="EN 1015-12 (pull-off)" target=">= 0.3 MPa" critic />
              <TestRow test="Absorbtie capilara" metoda="EN 1015-18" target="<= 0.5 kg/m2·min0.5" />
              <TestRow test="pH amestec" metoda="Electrometric / ISO 4316" target="11.5-12.5" />
              <TestRow test="Rezistenta inghet-dezghet" metoda="EN 539-2 (25 cicluri)" target="Fara fisuri" />
              <TestRow test="Continut cloruri" metoda="EN 196-2" target="<= 0.01%" />
            </Section>

            <Section title="Laborator recomandat pentru testare">
              <Row label="INCERC Iasi (Romania)" value="Cel mai apropiat lab acreditat" note="~EUR800-1.500 pachet complet" highlight />
              <Row label="Centrul de Metrologie Moldova" value="Chisinau - testare partiala" note="pH, granulometrie, rezistenta" />
              <Row label="Knauf / Baumit lab (RO)" value="Nu recomandat" note="concurenta directa" />
            </Section>

            <Section title="Secventa de testare MVP recomandata">
              <Row label="Faza 1 - Formulare preliminara" value="Saptamanile 1-2" note="Laborator propriu minimal: mixer, Vicat, rigla flow" />
              <Row label="Faza 2 - Validare parametri fizici" value="Saptamanile 3-4" note="Lab extern: granulometrie, priza, pH" highlight />
              <Row label="Faza 3 - Testare mecanica 28 zile" value="Lunile 2-3" note="Lab extern: compresiune, aderenta - obligatoriu inainte de vanzare" />
              <Row label="Faza 4 - Test santier real" value="Luna 3" note="3-5 mesteri cu feedback structurat" highlight />
              <Row label="Faza 5 - Certificare EN 998-1" value="Lunile 4-6" note="Obligatorie pentru export Romania / UE" />
            </Section>
          </div>
        )}

        {tab === 4 && (
          <div>
            <Section title="Specificatii ambalaj">
              <Row label="Format sac" value="30 kg" note="standard piata Moldova/Romania" highlight />
              <Row label="Tip ambalaj MVP" value="Sac PP laminat + polietilena" note="bariera dubla anti-umiditate - critic pentru produs mineral" />
              <Row label="Dimensiuni sac" value="60 x 35 cm approx." />
              <Row label="Imprimare" value="2 culori minimum" note="logo RENOVIT, cod lot, data productie, instructiuni" />
              <Row label="Etichetare obligatorie" value="CE mark, EN 998-1 clasa" note="pentru export Romania" />
              <Row label="Paletizare" value="42 saci / palet = 1.26 tone" />
              <Row label="Stretch wrap palet" value="Obligatoriu" note="protectie transport si depozitare" />
            </Section>

            <Section title="Estimare cost de productie / tona">
              <Row label="Calcar Volodeni (820 kg)" value="EUR8-12" note="cost extractie + transport uzina" />
              <Row label="Bentonita Ocnita (100 kg)" value="EUR2-4" note="cost extractie + procesare" />
              <Row label="Ciment Portland (50 kg)" value="EUR4-6" note="~EUR80-100/tona piata" />
              <Row label="Gips optional (30 kg)" value="EUR2-4" note="daca se decide adaugarea" />
              <Row label="Energie (amestecare, macinare)" value="EUR5-8" note="estimat 15-20 kWh/tona" />
              <Row label="Ambalaje (34 saci x 30kg)" value="EUR8-12" note="sac PP laminat EUR0.25-0.35/buc" />
              <Row label="Manopera directa" value="EUR4-7" />
              <Row label="Overhead / amortizare" value="EUR5-10" />
              <Row label="TOTAL COST / TONA" value="EUR38-63" highlight />
            </Section>

            <Section title="Preturi de vanzare target">
              <Row label="En-gros depozite (palet+)" value="EUR95-110/tona" note="= EUR2.85-3.30 / sac 30kg" highlight />
              <Row label="Semi-angro (10+ saci)" value="EUR115-130/tona" note="= EUR3.45-3.90 / sac 30kg" />
              <Row label="Retail (magazin)" value="EUR140-160/tona" note="= EUR4.20-4.80 / sac 30kg" />
              <Row label="Marja bruta estimata (en-gros)" value="~50-55%" highlight />
            </Section>

            <Section title="Scalare - volume necesare pentru break-even MVP">
              <Row label="Cost fix linie amestecare minima" value="EUR15-30k" note="mixer continuu second-hand + siloz" />
              <Row label="Cost ambalaj + primele loturi" value="EUR5-10k" />
              <Row label="Cost certificare lab" value="EUR2-4k" />
              <Row label="TOTAL investitie MVP" value="EUR22-44k" highlight />
              <Row label="Volume break-even (en-gros EUR100/t)" value="~600-800 tone" note="= 20.000-27.000 saci 30kg" />
              <Row label="Break-even la 50t/luna" value="12-16 luni" />
              <Row label="Break-even la 100t/luna" value="6-8 luni" highlight />
            </Section>

            <div style={{ marginTop: 24, padding: 16, background: C.stoneDark, borderLeft: `3px solid ${C.accent}`, fontSize: 12, color: C.inkMid, lineHeight: 1.8 }}>
              <strong style={{ color: C.ink, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 1 }}>NOTA MVP</strong>
              <br />
              Aceasta fisa este un document de lucru pentru faza de testare. Parametrii tehnici sunt valori-tinta bazate pe formulare standard pentru tencuieli minerale EN 998-1. Valorile finale se stabilesc dupa testele de laborator din Fazele 1-3. Nu se utilizeaza pentru certificare sau declaratie de conformitate inainte de finalizarea testelor.
            </div>
          </div>
        )}

        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
