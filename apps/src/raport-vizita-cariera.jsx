import { useState } from "react";

const SECTIONS = [
  {
    id: "meta", label: "00 — Informații Vizită Volodeni + Ocnița", color: "#d0a74e",
    fields: [
      { id: "data", label: "Data vizitei", type: "text", placeholder: "ex: 15 aprilie 2026" },
      { id: "participanti", label: "Participanți prezenți", type: "textarea", placeholder: "Nume, rol, companie, telefon / email" },
      { id: "durata", label: "Durata vizitei", type: "text", placeholder: "ex: 3 ore" },
      { id: "locatie", label: "Locație exactă / GPS", type: "text", placeholder: "Volodeni + Ocnița, coordonate GPS, puncte vizitate, rampa feroviară" },
      { id: "scop", label: "Scopul vizitei", type: "textarea", placeholder: "Confirmare calcar alb Volodeni, calcar/bentonită Ocnița, fabrică la Ocnița, transport Volodeni -> Ocnița" },
    ],
  },
  {
    id: "deposit", label: "01 — Zăcăminte & Rezerve", color: "#9dbb68",
    fields: [
      { id: "sector", label: "Sectoare vizitate", type: "text", placeholder: "Volodeni — calcar alb | Ocnița — calcar + bentonită | nod feroviar / rampă" },
      { id: "rezerve", label: "Rezerve confirmate", type: "textarea", placeholder: "Volodeni m3/tone; Ocnița calcar m3/tone; Ocnița bentonită m3/tone; categorie A/B/C1" },
      { id: "status", label: "Status exploatare", type: "select", options: ["Activ", "Parțial activ", "Conservat", "Neclar"] },
      { id: "zone_calitate", label: "Zone cu calitate diferită?", type: "textarea", placeholder: "Unde este calcarul cel mai alb? Există variații pe fronturi / adâncime?" },
      { id: "mostre_zone", label: "Mostre necesare pe zone", type: "textarea", placeholder: "V1-Volodeni alb | V2-Volodeni alt strat | O1-Ocnița calcar | O2-bentonită | O3-făină/reziduu" },
    ],
  },
  {
    id: "quality", label: "02 — Calitate Calcar & Bentonită", color: "#7eb8c9",
    fields: [
      { id: "caco3", label: "CaCO3 exact (%)", type: "text", placeholder: "ex: 94.2-94.7% — cere analiză laborator" },
      { id: "alb", label: "Grad de alb / culoare", type: "textarea", placeholder: "Valoare L*a*b* dacă există; observații vizuale; comparație cu produse premium" },
      { id: "impuritati", label: "Impurități principale", type: "textarea", placeholder: "SiO2, MgCO3, MgO, Al2O3, Fe2O3, argilă, materie organică" },
      { id: "granulometrie", label: "Granulometrie existentă", type: "textarea", placeholder: "0-3mm, 0-5mm, micronizare, % sub 100 microni, % sub 63 microni" },
      { id: "umiditate", label: "Umiditate / uscare", type: "text", placeholder: "Umiditate naturală, necesar uscare, stabilitate la depozitare" },
      { id: "analize", label: "Analize laborator văzute?", type: "select", options: ["Da — copie obținută", "Da — văzut dar fără copie", "Nu", "Există dar trebuie cerute"] },
      { id: "bentonita", label: "Bentonită Ocnița", type: "textarea", placeholder: "Este activă? Test umflare / tixotropie? Cost extracție + activare? Rol în glet/adeziv?" },
    ],
  },
  {
    id: "current_ops", label: "03 — Operațiuni Curente", color: "#a87ec9",
    fields: [
      { id: "produse_curente", label: "Produse curente din Volodeni", type: "textarea", placeholder: "Blocuri, făină calcaroasă, piatră, deșeuri calcaroase, alte produse" },
      { id: "produse_ocnita", label: "Produse curente din Ocnița", type: "textarea", placeholder: "Calcar, făină/reziduu, argilă bentonitică, blocuri, agregate, alte produse" },
      { id: "capacitate", label: "Capacitate actuală", type: "textarea", placeholder: "m3/lună, tone/lună, făină calcaroasă/lună, sezonalitate" },
      { id: "costuri", label: "Costuri reale actuale", type: "textarea", placeholder: "Cost extracție, măcinare, energie, manoperă, întreținere, cost total MDL/t sau EUR/t" },
      { id: "echipamente", label: "Echipamente existente", type: "textarea", placeholder: "Concasor, moară, site, încărcător, cântar, silozuri, ambalare — stare și capacitate" },
      { id: "bottleneck", label: "Blocaje operaționale", type: "textarea", placeholder: "Ce limitează azi volumul / calitatea / costul?" },
    ],
  },
  {
    id: "product", label: "04 — Materiale de Finisaj", color: "#68b88a",
    fields: [
      { id: "glet", label: "Glet extra-alb 20kg", type: "textarea", placeholder: "Produs top: materie primă principală Volodeni. Confirmă alb, volum, finete, cost, mostre." },
      { id: "decor", label: "Tencuială decorativă minerală 25kg", type: "textarea", placeholder: "Granule necesare, texturi, alb, liant, produs comparabil, standard țintă" },
      { id: "adeziv", label: "Adeziv / mortar var-calcar 25kg", type: "textarea", placeholder: "Retetă, ciment/var, aditivi, performanță, standard EN 12004 dacă e adeziv plăci" },
      { id: "retete", label: "Cine poate formula / testa rețetele?", type: "textarea", placeholder: "Laborator, tehnolog, consultant, furnizor aditivi" },
      { id: "mostre_produs", label: "Mostre produs finit existente?", type: "select", options: ["Da — testate", "Da — netestate", "Nu", "În lucru"] },
    ],
  },
  {
    id: "infrastructure", label: "05 — Infrastructură & Logistică", color: "#d0a74e",
    fields: [
      { id: "electric", label: "Curent electric Ocnița", type: "textarea", placeholder: "kW / kVA, trifazat, stabilitate, posibilitate extindere pentru fabrică" },
      { id: "spatiu", label: "Spațiu fabrică Ocnița", type: "textarea", placeholder: "Hală, teren, depozit materie primă, depozit saci, paletizare, acces camioane" },
      { id: "feroviar", label: "Nod feroviar / rampă Ocnița", type: "textarea", placeholder: "Distanță, stare cale ferată, ultima utilizare, vagoane simultane, cost încărcare" },
      { id: "drumuri", label: "Drumuri și camioane", type: "textarea", placeholder: "Acces tot anul, cost transport Volodeni -> Ocnița, cost Chișinău/Bălți, flotă proprie" },
      { id: "praf", label: "Praf / filtre / mediu", type: "textarea", placeholder: "Filtre existente, autorizații, risc praf la micronizare și mixare" },
    ],
  },
  {
    id: "capex", label: "06 — Echipamente & CAPEX", color: "#df9850",
    fields: [
      { id: "micronizare", label: "Micronizare / moară fină", type: "textarea", placeholder: "Există? Capacitate? Finete? Necesită achiziție nouă/refurbished?" },
      { id: "sortare", label: "Sortare granulometrică", type: "textarea", placeholder: "Site, separatoare, fracții pentru decorativă" },
      { id: "mixer", label: "Mixer + dozare aditivi", type: "textarea", placeholder: "Mixer existent? Dozatoare mici pentru polimeri/celuloză?" },
      { id: "ambalare", label: "Linie ambalare 20/25kg", type: "textarea", placeholder: "Există? Viteză saci/oră? Cusător/valvă/paletizare?" },
      { id: "oferte", label: "Oferte echipamente existente", type: "textarea", placeholder: "Furnizor, preț, termen, garanție, instalare, training" },
    ],
  },
  {
    id: "commercial", label: "07 — Comercial & Prețuri", color: "#7eb8c9",
    fields: [
      { id: "pret_faina", label: "Preț actual făină calcaroasă / vrac", type: "textarea", placeholder: "MDL/t sau EUR/t, clienți, volume, termene plată" },
      { id: "transport_volodeni_ocnita", label: "Cost transport Volodeni -> Ocnița", type: "textarea", placeholder: "EUR/t sau MDL/t, distanță, camion, cost cursă, tone/zi, pierderi, sezonalitate" },
      { id: "pret_glet", label: "Preț angro validat glet", type: "textarea", placeholder: "Distribuitor, preț, volum, condiții, produs comparabil" },
      { id: "pret_decor", label: "Preț angro validat tencuială decorativă", type: "textarea", placeholder: "Distribuitor, preț, volum, condiții, produs comparabil" },
      { id: "pret_adeziv", label: "Preț angro validat adeziv / mortar", type: "textarea", placeholder: "Distribuitor, preț, volum, condiții, produs comparabil" },
      { id: "canale", label: "Canale potențiale", type: "textarea", placeholder: "DIY, depozite materiale, echipe finisaje, proiecte B2B, export" },
    ],
  },
  {
    id: "legal", label: "08 — Documente & Legal", color: "#df6b5b",
    fields: [
      { id: "licente", label: "Licențe / contracte subsol", type: "textarea", placeholder: "Număr, titular, valabilitate pentru Volodeni și Ocnița" },
      { id: "teren", label: "Teren / drepturi acces", type: "textarea", placeholder: "Proprietate, arendă, servituți, drumuri" },
      { id: "mediu", label: "Avize mediu / tehnice", type: "textarea", placeholder: "Expertiză ecologică, tehnică, plan dezvoltare, termene expirare" },
      { id: "certificari", label: "Certificate produs existente", type: "textarea", placeholder: "Făină calcaroasă, piatră, plăci, alte certificate / rapoarte test" },
    ],
  },
  {
    id: "people", label: "09 — Oameni & Control", color: "#a87ec9",
    fields: [
      { id: "decision", label: "Cine ia decizia finală?", type: "textarea", placeholder: "Acționari, director, board, comitet investiții" },
      { id: "operator", label: "Cine conduce operațional linia?", type: "textarea", placeholder: "Nume, experiență, disponibilitate" },
      { id: "technolog", label: "Există tehnolog / laborator intern?", type: "textarea", placeholder: "Cine răspunde de rețete și calitate?" },
      { id: "partner", label: "Așteptări parteneriat", type: "textarea", placeholder: "Rol, equity, management fee, KPI, decizii" },
    ],
  },
  {
    id: "evidence", label: "10 — Dovezi, Mostre, Fotografii", color: "#68b88a",
    fields: [
      { id: "docs", label: "Documente obținute", type: "textarea", placeholder: "Analize, rezerve, certificate, costuri, oferte, acte" },
      { id: "missing", label: "Documente lipsă", type: "textarea", placeholder: "Ce trebuie cerut în 48h" },
      { id: "samples", label: "Mostre luate", type: "textarea", placeholder: "Cod mostră, zona, kg, persoana responsabilă, laborator țintă" },
      { id: "photos", label: "Fotografii / video", type: "textarea", placeholder: "Ce ai fotografiat: front, făină, utilaje, hale, drumuri, documente" },
    ],
  },
  {
    id: "conclusion", label: "11 — Concluzii & Next Steps", color: "#d0a74e",
    fields: [
      { id: "verdict", label: "Verdict după vizită", type: "select", options: ["GO — continuă fezabilitatea", "GO CONDIȚIONAT — clarificări critice", "INCERT — date insuficiente", "NO-GO — red flags majore"] },
      { id: "positive", label: "Top 3 lucruri pozitive", type: "textarea", placeholder: "Resursă, calitate, infrastructură, echipă, piață" },
      { id: "risks", label: "Top 3 riscuri", type: "textarea", placeholder: "Preț, calitate, CAPEX, standarde, parteneriat, distribuție" },
      { id: "actions", label: "Next steps cu deadline", type: "textarea", placeholder: "1. Analize laborator\n2. Prețuri angro\n3. Oferte echipamente\n4. Actualizare calculator" },
    ],
  },
];

const C = { bg: "#0a0a0a", surface: "#111", border: "#222", text: "#e0e0e0", muted: "#555", accent: "#d0a74e" };

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
  const lines = [
    "═══════════════════════════════════════════════════",
    "   RAPORT VIZITĂ VOLODENI + OCNIȚA — FINISAJE",
    "═══════════════════════════════════════════════════",
    "   RENOVIT — Instrument Analiză Fezabilitate",
    "═══════════════════════════════════════════════════\n",
  ];
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
          <button onClick={copy} style={{ flex: 1, padding: "10px", background: copied ? "#68b88a" : C.accent, border: "none", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700", transition: "background 0.2s" }}>
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
        <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#333", marginBottom: "4px" }}>RENOVIT — STUDIU FEZABILITATE</div>
        <div style={{ fontSize: "21px", fontFamily: "'DM Serif Display', serif" }}>Raport Vizită Teren</div>
        <div style={{ fontSize: "11px", color: C.accent, marginTop: "3px", marginBottom: "18px" }}>Volodeni · Ocnița · Fabrică · Finisaje minerale</div>

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

      <button onClick={() => setShowExport(true)} style={{ position: "fixed", bottom: "20px", right: "20px", background: C.accent, border: "none", color: "#000", padding: "11px 16px", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontWeight: "700", boxShadow: "0 4px 24px #d0a74e33" }}>
        EXPORTĂ ↗
      </button>

      {showExport && <ExportModal data={data} onClose={() => setShowExport(false)} />}
    </div>
  );
}
