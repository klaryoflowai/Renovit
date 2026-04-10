import { useState } from "react";

const SECTIONS = [
  {
    id: "meta", label: "00 — Informații Vizită", color: "#c8a84b",
    fields: [
      { id: "data", label: "Data vizitei", type: "text", placeholder: "ex: 15 aprilie 2025" },
      { id: "participanti", label: "Participanți prezenți", type: "text", placeholder: "Numele proprietarilor / persoanelor întâlnite" },
      { id: "durata", label: "Durata vizitei", type: "text", placeholder: "ex: 3 ore" },
      { id: "locatie", label: "Locație exactă / GPS", type: "text", placeholder: "Sat, raion, coordonate GPS dacă ai" },
    ]
  },
  {
    id: "resursa", label: "01 — Resursa & Calitate", color: "#7eb8c9",
    fields: [
      { id: "rezerve", label: "Rezerve estimate (tone)", type: "text", placeholder: "ex: 50.000 tone confirmate geologic" },
      { id: "puritate", label: "Puritate gips (%)", type: "text", placeholder: "ex: 85% CaSO₄·2H₂O — există analiză?" },
      { id: "strat", label: "Grosime strat exploatabil", type: "text", placeholder: "ex: 4–6 metri uniformi" },
      { id: "tip_gips", label: "Tip gips (selenitic / masiv)", type: "text", placeholder: "Observații vizuale la fața locului" },
      { id: "impuritati", label: "Impurități observate", type: "textarea", placeholder: "Argilă, calcar, nisip — vizual sau din analize" },
      { id: "raport_geologic", label: "Raport geologic există?", type: "select", options: ["Da — am văzut / copie obținută", "Da — există dar nu l-am văzut", "Nu există", "Neclar"] },
    ]
  },
  {
    id: "extractie", label: "02 — Extracție & Operațiuni", color: "#a87ec9",
    fields: [
      { id: "activa", label: "Cariera e activă acum?", type: "select", options: ["Da — extracție activă", "Parțial activ / sezonier", "Inactivă momentan", "Niciodată exploatată comercial"] },
      { id: "tone_luna", label: "Tone extrase / lună (actual)", type: "text", placeholder: "ex: 300 tone/lună sau 0 dacă inactivă" },
      { id: "cost_extractie", label: "Cost extracție / tonă (€)", type: "text", placeholder: "ex: €8/tonă — combustibil + manoperă" },
      { id: "utilaje", label: "Utilaje existente", type: "textarea", placeholder: "Excavator, buldozer, încărcător — marcă, an, stare tehnică" },
      { id: "angajati", label: "Nr. angajați actuali", type: "text", placeholder: "ex: 3 oameni" },
      { id: "program", label: "Program lucru", type: "select", options: ["Tot anul", "Sezonier (primăvară–toamnă)", "La cerere / neregulat", "Inactiv"] },
    ]
  },
  {
    id: "juridic", label: "03 — Juridic & Autorizații", color: "#c97e7e",
    fields: [
      { id: "titular", label: "Titular licență exploatare", type: "text", placeholder: "Persoană fizică sau juridică (SRL, SA)" },
      { id: "valabilitate", label: "Valabilitate licență", type: "text", placeholder: "ex: valabilă până în 2031" },
      { id: "transferabila", label: "Licența e transferabilă?", type: "select", options: ["Da — confirmat", "Da — probabil dar neverificat", "Nu", "Neclar"] },
      { id: "litigii", label: "Litigii / pretenții terțe?", type: "select", options: ["Nu există", "Există — detalii mai jos", "Neclar / nu au răspuns clar"] },
      { id: "taxa_stat", label: "Taxa extracție plătită statului (€/t)", type: "text", placeholder: "ex: €1.5/tonă" },
      { id: "note_juridic", label: "Note juridice importante", type: "textarea", placeholder: "Proprietate, servituți, obligații de mediu, avize ecologice" },
    ]
  },
  {
    id: "infrastructura", label: "04 — Infrastructură & Acces", color: "#7ec98a",
    fields: [
      { id: "curent", label: "Curent electric trifazic (380V)?", type: "select", options: ["Da — putere notată mai jos", "Doar monofazic (220V)", "Nu există", "Necesită extindere"] },
      { id: "putere_kw", label: "Putere instalată (kW)", type: "text", placeholder: "ex: 50 kW disponibili" },
      { id: "cladiri", label: "Clădiri existente", type: "textarea", placeholder: "Tipul, dimensiunea, starea tehnică" },
      { id: "suprafata_platf", label: "Suprafață disponibilă pentru fabrică (m²)", type: "text", placeholder: "ex: ~500 m² lângă carieră" },
      { id: "drum_acces", label: "Calitatea drumului de acces", type: "select", options: ["Drum asfaltat până la carieră", "Drum pietruit — practicabil tot anul", "Drum de pământ — probleme iarna", "Acces dificil"] },
      { id: "distante", label: "Distanțe (km)", type: "textarea", placeholder: "Edineț: __ km | Bălți: __ km | Chișinău: __ km | DN: __ km" },
      { id: "gaz", label: "Gaz natural disponibil?", type: "select", options: ["Da — rețea publică în zonă", "Nu — doar motorină / peleți", "Neclar"] },
      { id: "cantar", label: "Există cântar camioane?", type: "select", options: ["Da", "Nu", "În plan"] },
    ]
  },
  {
    id: "financiar", label: "05 — Financiar & Parteneriat", color: "#c8a84b",
    fields: [
      { id: "asociati", label: "Structura de ownership", type: "textarea", placeholder: "Câți asociați, ce procente, cine ia decizii" },
      { id: "capital_cash", label: "Capital cash disponibil pentru investiție (€)", type: "text", placeholder: "ex: €80.000 disponibili pentru linie procesare" },
      { id: "datorii", label: "Există datorii ale entității?", type: "select", options: ["Nu", "Da — detalii mai jos", "Nu au răspuns"] },
      { id: "model_parteneriat", label: "Model parteneriat propus de ei", type: "textarea", placeholder: "Ce au spus concret — equity %, salariu, SRL nou etc." },
      { id: "alte_oferte", label: "Au alte oferte / parteneri în discuție?", type: "select", options: ["Nu", "Da", "Nu au spus"] },
      { id: "motivatie", label: "Motivul real pentru care caută partener acum", type: "textarea", placeholder: "Presiune financiară, lipsă know-how, oportunitate etc." },
    ]
  },
  {
    id: "piata", label: "06 — Piață & Vânzări", color: "#7eb8c9",
    fields: [
      { id: "vandut_deja", label: "Au vândut gips brut deja?", type: "select", options: ["Da — cui și la ce preț", "Nu", "Ocazional"] },
      { id: "pret_brut", label: "Preț vânzare gips brut (€/t)", type: "text", placeholder: "ex: €15/tonă gips brut neprocesat" },
      { id: "clienti_existenti", label: "Clienți sau contacte existente", type: "textarea", placeholder: "Firme de construcții, distribuitori cu care au vorbit" },
      { id: "cerere_locala", label: "Cerere locală observată", type: "textarea", placeholder: "Construcții în zonă, proiecte mari, cerere sezonieră" },
    ]
  },
  {
    id: "oameni", label: "07 — Oamenii & Dinamica", color: "#a87ec9",
    fields: [
      { id: "cine_conduce", label: "Cine ar conduce operațional zi de zi?", type: "text", placeholder: "Nume, experiență, disponibilitate" },
      { id: "experienta", label: "Experiența echipei în producție / business", type: "textarea", placeholder: "Ce au mai construit / condus — sincer" },
      { id: "nivel_structurare", label: "Nivelul de structurare al echipei", type: "select", options: ["Foarte structurați — au plan, cifre, strategie", "Parțial structurați — idei dar fără plan", "Nestructurați — au resursa dar zero business plan", "Neclar"] },
      { id: "chimie", label: "Impresia generală despre parteneri", type: "textarea", placeholder: "Onești? Deschiși? Ascund ceva? Primul instinct — notează sincer" },
    ]
  },
  {
    id: "documente", label: "08 — Documente Obținute", color: "#7ec98a",
    fields: [
      { id: "docs_obtinute", label: "Documente obținute / fotografiate", type: "textarea", placeholder: "Licență exploatare, studiu geologic, acte proprietate teren" },
      { id: "docs_lipsa", label: "Documente lipsă / de cerut ulterior", type: "textarea", placeholder: "Ce nu au putut sau nu au vrut să arate" },
      { id: "mostra_gips", label: "Mostră gips brut luată?", type: "select", options: ["Da — trimisă la laborator", "Da — de analizat", "Nu — de luat data viitoare"] },
    ]
  },
  {
    id: "concluzii", label: "09 — Concluzii & Next Steps", color: "#c8a84b",
    fields: [
      { id: "verdict_initial", label: "Verdict inițial după vizită", type: "select", options: ["GO — continuă due diligence aprofundat", "GO CONDIȚIONAT — necesită clarificări cheie", "INCERT — prea multe necunoscute", "NO-GO — riscuri majore identificate"] },
      { id: "top3_pozitiv", label: "Top 3 lucruri pozitive observate", type: "textarea", placeholder: "Ce te-a convins sau impresionat" },
      { id: "top3_risc", label: "Top 3 riscuri sau semne de întrebare", type: "textarea", placeholder: "Ce te îngrijorează sau necesită verificare" },
      { id: "next_steps", label: "Next steps concrete (cu deadline)", type: "textarea", placeholder: "1. Trimite mostră la lab până vineri\n2. Solicită copie licență până luni\n3. Calculează Unit Economics cu cifrele reale" },
    ]
  }
];

const C = { bg: "#0a0a0a", surface: "#111", border: "#222", text: "#e0e0e0", muted: "#555", accent: "#c8a84b" };

function Field({ field, value, onChange }) {
  const base = {
    fontFamily: "'DM Mono', monospace", fontSize: "13px", color: C.text,
    background: "#161616", border: `1px solid ${C.border}`,
    padding: "8px 12px", width: "100%", outline: "none",
    boxSizing: "border-box", resize: "vertical",
  };
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: C.muted, marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea rows={3} placeholder={field.placeholder} value={value} onChange={e => onChange(e.target.value)} style={{ ...base, minHeight: "72px" }} />
      ) : field.type === "select" ? (
        <select value={value} onChange={e => onChange(e.target.value)} style={{ ...base, cursor: "pointer" }}>
          <option value="">— selectează —</option>
          {field.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type="text" placeholder={field.placeholder} value={value} onChange={e => onChange(e.target.value)} style={base} />
      )}
    </div>
  );
}

function ExportModal({ data, onClose }) {
  const [copied, setCopied] = useState(false);
  const lines = ["═══════════════════════════════════════════════════", "   RAPORT VIZITĂ CARIERĂ GIPS — EDINEȚ, MOLDOVA", "═══════════════════════════════════════════════════", "   KlaryoFlow AI — Instrument Analiză Fezabilitate", "═══════════════════════════════════════════════════\n"];
  SECTIONS.forEach(s => {
    lines.push(`\n▌ ${s.label.toUpperCase()}`);
    lines.push("─".repeat(48));
    s.fields.forEach(f => {
      const val = data[s.id]?.[f.id] || "—";
      lines.push(`${f.label}:\n  ${val}\n`);
    });
  });
  const text = lines.join("\n");
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div style={{ position: "fixed", inset: 0, background: "#000c", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
      <div style={{ background: "#111", border: `1px solid ${C.accent}`, width: "100%", maxWidth: "560px", maxHeight: "80vh", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "10px", letterSpacing: "3px", color: C.accent, fontFamily: "'DM Mono', monospace" }}>EXPORT RAPORT TEXT</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: "20px", lineHeight: 1 }}>×</button>
        </div>
        <textarea readOnly value={text} style={{ flex: 1, background: "#0a0a0a", border: "none", color: "#bbb", fontFamily: "'DM Mono', monospace", fontSize: "11px", padding: "14px", resize: "none", outline: "none", lineHeight: 1.7 }} />
        <div style={{ padding: "12px 18px", borderTop: `1px solid ${C.border}`, display: "flex", gap: "8px" }}>
          <button onClick={copy} style={{ flex: 1, padding: "10px", background: copied ? "#4caf7d" : C.accent, border: "none", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700", transition: "background 0.2s" }}>
            {copied ? "COPIAT ✓" : "COPIAZĂ TEXT"}
          </button>
          <button onClick={onClose} style={{ padding: "10px 14px", background: "none", border: `1px solid ${C.border}`, color: C.muted, fontFamily: "'DM Mono', monospace", fontSize: "10px", cursor: "pointer" }}>ÎNCHIDE</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState({});
  const [active, setActive] = useState("meta");
  const [showExport, setShowExport] = useState(false);

  const update = (sid, fid, val) => setData(prev => ({ ...prev, [sid]: { ...(prev[sid] || {}), [fid]: val } }));

  let total = 0, filled = 0;
  SECTIONS.forEach(s => s.fields.forEach(f => { total++; if (data[s.id]?.[f.id]) filled++; }));
  const pct = Math.round((filled / total) * 100);

  const activeSection = SECTIONS.find(s => s.id === active);
  const activeIdx = SECTIONS.findIndex(s => s.id === active);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; }
        input::placeholder, textarea::placeholder { color: #2e2e2e; }
        select option { background: #161616; color: #e0e0e0; }
      `}</style>

      <div style={{ padding: "20px 16px 0", maxWidth: "620px", margin: "0 auto" }}>
        <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#333", marginBottom: "4px" }}>KLARYOFLOW AI — STUDIU DE FEZABILITATE</div>
        <div style={{ fontSize: "21px", fontFamily: "'DM Serif Display', serif" }}>Raport Vizită Teren</div>
        <div style={{ fontSize: "11px", color: C.accent, marginTop: "3px", marginBottom: "18px" }}>Carieră Gips · Edineț, Moldova</div>

        {/* Progress */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <span style={{ fontSize: "9px", letterSpacing: "2px", color: C.muted }}>COMPLETARE</span>
            <span style={{ fontSize: "9px", color: C.accent }}>{filled}/{total} câmpuri — {pct}%</span>
          </div>
          <div style={{ height: "2px", background: "#1e1e1e" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: C.accent, transition: "width 0.3s" }} />
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ overflowX: "auto", display: "flex", gap: "0", padding: "0 16px", maxWidth: "620px", margin: "0 auto 20px", borderBottom: `1px solid ${C.border}` }}>
        {SECTIONS.map(s => {
          const f = s.fields.filter(f => data[s.id]?.[f.id]).length;
          const isA = active === s.id;
          return (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "8px 10px", whiteSpace: "nowrap",
              borderBottom: isA ? `2px solid ${s.color}` : "2px solid transparent",
              color: isA ? s.color : "#444",
              fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "1px",
            }}>
              {s.label.split("—")[0].trim()}{f > 0 && <span style={{ color: s.color }}>·{f}</span>}
            </button>
          );
        })}
      </div>

      {/* Fields */}
      <div style={{ padding: "0 16px 120px", maxWidth: "620px", margin: "0 auto" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: activeSection.color, marginBottom: "18px", textTransform: "uppercase" }}>{activeSection.label}</div>
        {activeSection.fields.map(f => (
          <Field key={f.id} field={f} value={data[activeSection.id]?.[f.id] || ""} onChange={val => update(activeSection.id, f.id, val)} />
        ))}

        <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
          {activeIdx > 0 && (
            <button onClick={() => setActive(SECTIONS[activeIdx - 1].id)} style={{ flex: 1, padding: "11px", background: "none", border: `1px solid ${C.border}`, color: C.muted, fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer" }}>← ÎNAPOI</button>
          )}
          {activeIdx < SECTIONS.length - 1 ? (
            <button onClick={() => setActive(SECTIONS[activeIdx + 1].id)} style={{ flex: 2, padding: "11px", background: activeSection.color, border: "none", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700" }}>CONTINUĂ →</button>
          ) : (
            <button onClick={() => setShowExport(true)} style={{ flex: 2, padding: "11px", background: C.accent, border: "none", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700" }}>EXPORTĂ RAPORT ↗</button>
          )}
        </div>
      </div>

      {/* FAB */}
      <button onClick={() => setShowExport(true)} style={{ position: "fixed", bottom: "20px", right: "20px", background: C.accent, border: "none", color: "#000", padding: "11px 16px", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700", boxShadow: "0 4px 24px #c8a84b33" }}>
        EXPORTĂ ↗
      </button>

      {showExport && <ExportModal data={data} onClose={() => setShowExport(false)} />}
    </div>
  );
}
