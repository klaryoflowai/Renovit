import { useState, useMemo } from "react";

const CURRENCY = "€";
const clamp = (value, min = 0, max = Number.POSITIVE_INFINITY) => Math.min(max, Math.max(min, value));
const formatFixed = (value, digits = 2) => (Number.isFinite(value) ? value.toFixed(digits) : "N/A");
const formatInteger = value => (Number.isFinite(value) ? value.toFixed(0) : "N/A");
const formatCurrency = value => (Number.isFinite(value) ? `${CURRENCY}${Math.round(value).toLocaleString("ro-RO")}` : "N/A");

const Section = ({ title, children, accent }) => (
  <div style={{
    border: `1px solid ${accent || "#2a2a2a"}`,
    borderLeft: `3px solid ${accent || "#c8a84b"}`,
    background: "#111",
    padding: "20px",
    marginBottom: "16px",
  }}>
    <div style={{
      fontSize: "10px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: accent || "#c8a84b",
      marginBottom: "16px",
      fontFamily: "'DM Mono', monospace",
    }}>{title}</div>
    {children}
  </div>
);

const Row = ({ label, sublabel, value, onChange, unit = "€", readOnly = false, highlight = false, min = 0, max, step = "any" }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #1e1e1e",
    gap: "12px",
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: "13px", color: highlight ? "#fff" : "#aaa", fontFamily: "'DM Mono', monospace" }}>{label}</div>
      {sublabel && <div style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>{sublabel}</div>}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {readOnly ? (
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "14px",
          color: highlight ? "#c8a84b" : "#fff",
          fontWeight: highlight ? "700" : "400",
          minWidth: "80px",
          textAlign: "right",
        }}>{value}</div>
      ) : (
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => {
            const nextValue = Number.parseFloat(e.target.value);
            if (!Number.isFinite(nextValue)) {
              onChange(min);
              return;
            }

            onChange(clamp(nextValue, min, max));
          }}
          style={{
            background: "#1a1a1a",
            border: "1px solid #333",
            color: "#fff",
            padding: "6px 10px",
            width: "90px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            textAlign: "right",
            outline: "none",
          }}
        />
      )}
      <span style={{ fontSize: "11px", color: "#555", width: "40px" }}>{unit}</span>
    </div>
  </div>
);

const Warnings = ({ items }) => {
  if (!items.length) return null;

  return (
    <div style={{
      marginTop: "20px",
      padding: "14px",
      background: "#1a120b",
      borderLeft: "3px solid #e07b4a",
      fontSize: "11px",
      color: "#f2c7a8",
      lineHeight: 1.7,
    }}>
      {items.map(item => (
        <div key={item}>• {item}</div>
      ))}
    </div>
  );
};

const Verdict = ({ margin }) => {
  if (margin === null || !Number.isFinite(margin)) return null;
  let color, label, desc;
  if (margin >= 40) { color = "#4caf7d"; label = "GO ✓"; desc = "Marjă excelentă. Merită implicarea."; }
  else if (margin >= 25) { color = "#c8a84b"; label = "GO CONDIȚIONAT"; desc = "Marjă acceptabilă. Optimizează costurile."; }
  else if (margin >= 10) { color = "#e07b4a"; label = "RISC RIDICAT"; desc = "Marjă slabă. Revizuiește prețul sau costurile."; }
  else { color = "#e04a4a"; label = "NO-GO ✗"; desc = "Afacerea nu e viabilă la acești parametri."; }

  return (
    <div style={{
      border: `2px solid ${color}`,
      padding: "20px",
      textAlign: "center",
      marginTop: "20px",
      background: `${color}11`,
    }}>
      <div style={{ fontSize: "11px", letterSpacing: "3px", color, fontFamily: "'DM Mono', monospace", marginBottom: "8px" }}>VERDICT</div>
      <div style={{ fontSize: "28px", fontWeight: "900", color, fontFamily: "'DM Serif Display', serif", marginBottom: "6px" }}>{label}</div>
      <div style={{ fontSize: "12px", color: "#aaa", fontFamily: "'DM Mono', monospace" }}>{desc}</div>
    </div>
  );
};

export default function App() {
  // EXTRACTIE
  const [costExtractie, setCostExtractie] = useState(8);
  const [tonePerLuna, setTonePerLuna] = useState(500);

  // PROCESARE
  const [costCalcinare, setCostCalcinare] = useState(15);
  const [costMacinare, setCostMacinare] = useState(8);
  const [costAmbalare, setCostAmbalare] = useState(5);
  const [costManopera, setCostManopera] = useState(7);
  const [costLogistica, setCostLogistica] = useState(6);

  // CAPEX
  const [capex, setCapex] = useState(200000);
  const [aniAmortizare, setAniAmortizare] = useState(5);

  // VANZARI
  const [pretVanzare, setPretVanzare] = useState(120);
  const [volum, setVolum] = useState(400);

  // RANDAMENT (tone brut → tone produs finit)
  const [randament, setRandament] = useState(75);

  const calc = useMemo(() => {
    const safeTonePerLuna = clamp(tonePerLuna);
    const safeRandament = clamp(randament, 0, 100);
    const safeAniAmortizare = clamp(aniAmortizare);
    const randamentRatio = safeRandament / 100;
    const toneProdusLuna = safeTonePerLuna * randamentRatio;
    const volumUtilizat = Math.min(clamp(volum), toneProdusLuna);
    const costExtractieAloc = randamentRatio > 0 ? costExtractie / randamentRatio : 0;
    const costOperational = costExtractieAloc + costCalcinare + costMacinare + costAmbalare + costManopera + costLogistica;
    const amortizareLuna = safeAniAmortizare > 0 ? capex / (safeAniAmortizare * 12) : 0;
    const amortizareTona = toneProdusLuna > 0 ? amortizareLuna / toneProdusLuna : 0;
    const costTotalCuCapex = costOperational + amortizareTona;
    const marja = pretVanzare > 0 ? ((pretVanzare - costTotalCuCapex) / pretVanzare) * 100 : null;
    const profitLunar = (pretVanzare - costTotalCuCapex) * volumUtilizat;
    const cashFlowLunar = (pretVanzare - costOperational) * volumUtilizat;
    const breakEven = cashFlowLunar > 0 ? capex / (cashFlowLunar * 12) : null;
    const roi3ani = capex > 0 ? ((cashFlowLunar * 36 - capex) / capex) * 100 : 0;
    const warnings = [];

    if (safeRandament <= 0) {
      warnings.push("Randamentul de procesare trebuie să fie peste 0% pentru ca modelul să fie valid.");
    }

    if (safeAniAmortizare <= 0 && capex > 0) {
      warnings.push("Anii de amortizare trebuie să fie mai mari decât 0.");
    }

    if (volum > toneProdusLuna) {
      warnings.push(`Volumul de vânzări introdus depășește capacitatea. Calculele folosesc maximum ${formatInteger(toneProdusLuna)} t/lună.`);
    }

    return {
      toneProdusLuna,
      volumUtilizat,
      costOperational,
      amortizareTona,
      costTotalCuCapex,
      marja,
      profitLunar,
      cashFlowLunar,
      breakEven,
      roi3ani,
      warnings,
    };
  }, [costExtractie, tonePerLuna, costCalcinare, costMacinare, costAmbalare, costManopera, costLogistica, capex, aniAmortizare, pretVanzare, volum, randament]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#fff",
      fontFamily: "'DM Mono', monospace",
      padding: "24px 16px",
      maxWidth: "600px",
      margin: "0 auto",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Serif+Display&display=swap');`}</style>

      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#555", marginBottom: "6px" }}>KLARYOFLOW AI — INSTRUMENT ANALIZĂ</div>
        <div style={{ fontSize: "22px", fontFamily: "'DM Serif Display', serif", color: "#fff", lineHeight: 1.2 }}>Unit Economics</div>
        <div style={{ fontSize: "12px", color: "#c8a84b", marginTop: "4px" }}>Carieră Gips — Edineț, Moldova</div>
      </div>

      <Section title="01 — Extracție & Capacitate">
        <Row label="Cost extracție / tonă brută" value={costExtractie} onChange={setCostExtractie} unit="€/t" min={0} />
        <Row label="Capacitate extracție" sublabel="tone brute pe lună" value={tonePerLuna} onChange={setTonePerLuna} unit="t/lună" min={0} />
        <Row label="Randament procesare" sublabel="% gips brut → produs finit" value={randament} onChange={setRandament} unit="%" min={1} max={100} step="0.1" />
        <Row label="Tone produs finit / lună" readOnly value={formatInteger(calc.toneProdusLuna)} unit="t/lună" />
      </Section>

      <Section title="02 — Costuri de Procesare / Tonă Produs Finit">
        <Row label="Calcinare (furnale)" value={costCalcinare} onChange={setCostCalcinare} unit="€/t" min={0} />
        <Row label="Măcinare" value={costMacinare} onChange={setCostMacinare} unit="€/t" min={0} />
        <Row label="Ambalare (saci 25–30kg)" value={costAmbalare} onChange={setCostAmbalare} unit="€/t" min={0} />
        <Row label="Manoperă directă" value={costManopera} onChange={setCostManopera} unit="€/t" min={0} />
        <Row label="Logistică / distribuție" value={costLogistica} onChange={setCostLogistica} unit="€/t" min={0} />
        <Row label="COST TOTAL fără CAPEX" readOnly highlight value={`${CURRENCY}${formatFixed(calc.costOperational)}`} unit="/t" />
      </Section>

      <Section title="03 — Investiție (CAPEX)">
        <Row label="Investiție totală linie procesare" value={capex} onChange={setCapex} unit="€" min={0} />
        <Row label="Ani amortizare" value={aniAmortizare} onChange={setAniAmortizare} unit="ani" min={1} step="1" />
        <Row label="Amortizare / tonă" readOnly value={`${CURRENCY}${formatFixed(calc.amortizareTona)}`} unit="/t" />
      </Section>

      <Section title="04 — Vânzări">
        <Row label="Preț vânzare en-gros" sublabel="tencuială gipsovă ambalată" value={pretVanzare} onChange={setPretVanzare} unit="€/t" min={0} />
        <Row label="Volum vânzări lunar estimat" value={volum} onChange={setVolum} unit="t/lună" min={0} />
        <Row label="Volum utilizat în calcule" sublabel="limitat la capacitatea lunară disponibilă" readOnly value={formatInteger(calc.volumUtilizat)} unit="t/lună" />
      </Section>

      <Section title="05 — Rezultate" accent="#4caf7d">
        <Row label="Cost total / tonă (cu CAPEX)" readOnly highlight value={`${CURRENCY}${formatFixed(calc.costTotalCuCapex)}`} unit="/t" />
        <Row label="Marjă brută" readOnly highlight value={calc.marja === null ? "N/A" : `${formatFixed(calc.marja, 1)}%`} unit="" />
        <Row label="Profit operațional lunar" sublabel="după amortizare contabilă" readOnly highlight value={formatCurrency(calc.profitLunar)} unit="/lună" />
        <Row label="Cash flow operațional lunar" sublabel="folosit pentru payback și ROI" readOnly value={formatCurrency(calc.cashFlowLunar)} unit="/lună" />
        <Row label="Break-even CAPEX" readOnly value={calc.breakEven !== null ? `${formatFixed(calc.breakEven, 1)} ani` : "N/A"} unit="" />
        <Row label="ROI la 3 ani" sublabel="bazat pe cash flow operațional" readOnly value={`${formatInteger(calc.roi3ani)}%`} unit="" />
      </Section>

      <Warnings items={calc.warnings} />
      <Verdict margin={calc.marja} />

      <div style={{ marginTop: "20px", padding: "12px", background: "#111", borderLeft: "2px solid #333", fontSize: "10px", color: "#555", lineHeight: 1.8 }}>
        * Valorile implicite sunt estimări orientative pentru piața MD/RO.<br/>
        * Înlocuiește cu datele reale pe măsură ce le obții.<br/>
        * Validează benchmarkul de preț cu 3–5 distribuitori locali înainte de orice decizie.
      </div>
    </div>
  );
}
