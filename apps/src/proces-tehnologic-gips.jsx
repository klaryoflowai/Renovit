export default function App() {
  const phases = [
    {
      id: "01", name: "extracție", color: "#EF9F27", bg: "#FAEEDA", border: "#EF9F27",
      text800: "#633806",
      steps: [
        { title: "Zăcământ gips confirmat", sub: "Rezerve confirmate · Edineț, R. Moldova", note: "CaSO₄·2H₂O" },
        { title: "Extracție & excavare", sub: "Foraj · detonare · excavator · buldozer" },
        { title: "Transport intern & concasare", sub: "Concasor cu fălci · bucăți ≤ 50 mm" },
        { title: "Depozit materie primă brută", sub: "Siloz acoperit · control umiditate" },
      ]
    },
    {
      id: "02", name: "calcinare", color: "#D85A30", bg: "#FAECE7", border: "#D85A30",
      text800: "#4A1B0C",
      steps: [
        { title: "Calcinare termică", sub: "Cuptor rotativ · 150–180°C · 1–2 ore", note: "150–180°C" },
        { title: "Răcire gips calcinat (beta)", sub: "Răcitor cu aer · CaSO₄·0.5H₂O rezultat" },
      ]
    },
    {
      id: "03", name: "măcinare", color: "#1D9E75", bg: "#E1F5EE", border: "#1D9E75",
      text800: "#04342C",
      steps: [
        { title: "Măcinare fină", sub: "Moară cu bile sau pendule · D50 < 80 μm", note: "D50 < 80 μm" },
        { title: "Cernere & clasificare", sub: "Separator aer · fracții fine → produs" },
        { title: "Aditivare & amestecare omogenă", sub: "Întârzietori · plastifianți · malaxor" },
      ]
    },
    {
      id: "04", name: "ambalare", color: "#7F77DD", bg: "#EEEDFE", border: "#7F77DD",
      text800: "#26215C",
      steps: [
        { title: "Siloz produs finit", sub: "Depozitare intermediară înaintea ambalării" },
        { title: "Dozare gravimetrică automată", sub: "30.0 ± 0.1 kg / sac · balanță automată", note: "30 ± 0.1 kg" },
        { title: "Umplere & sigilare sac", sub: "Saci kraft multistrat · sigilare automată" },
        { title: "Etichetare & marcare lot", sub: "Data · lot · specificații · cod bare" },
        { title: "Paletizare & folie stretch", sub: "40–48 saci / palet · ~1.44 t / palet", note: "48 saci = 1.44 t" },
      ]
    },
    {
      id: "05", name: "vânzare", color: "#3B6D11", bg: "#EAF3DE", border: "#3B6D11",
      text800: "#173404",
      steps: [
        { title: "Depozit expediere & gestiune stoc", sub: "FIFO · umiditate < 65% · depozit uscat" },
        { title: "Transport & distribuție", sub: "Camion acoperit · distribuitor regional" },
        { title: "Distribuitor / retailer materiale", sub: "Magazin specializat · depozit en-gros" },
        { title: "Client final — sac 25 kg", sub: "Constructor · finisator · tencuială B3", note: "EN 13279" },
      ]
    },
  ];

  const styles = {
    wrap: {
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "transparent",
      padding: "16px 8px 32px",
      maxWidth: 640,
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: 24,
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--color-text-primary, #1a1a1a)",
      letterSpacing: "0.02em",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 11,
      color: "var(--color-text-secondary, #666)",
      letterSpacing: "0.05em",
    },
    phaseWrap: {
      display: "flex",
      gap: 12,
      marginBottom: 4,
    },
    phaseSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 52,
      flexShrink: 0,
    },
    phaseTag: (color, bg, text) => ({
      background: bg,
      border: `1px solid ${color}`,
      borderRadius: 20,
      padding: "3px 8px",
      fontSize: 10,
      fontWeight: 700,
      color: text,
      letterSpacing: "0.1em",
      whiteSpace: "nowrap",
      marginBottom: 4,
    }),
    phaseLine: (color, height) => ({
      width: 2,
      height,
      background: color,
      opacity: 0.6,
      borderRadius: 2,
      flexGrow: 1,
      minHeight: height,
    }),
    stepsCol: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    box: (bg, border, text) => ({
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: "8px 12px",
      position: "relative",
    }),
    boxTitle: (color) => ({
      fontSize: 13,
      fontWeight: 600,
      color,
      marginBottom: 2,
    }),
    boxSub: (color) => ({
      fontSize: 11,
      color,
      opacity: 0.85,
    }),
    note: (color) => ({
      position: "absolute",
      right: -80,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 10,
      color,
      whiteSpace: "nowrap",
      borderLeft: `2px dashed ${color}`,
      paddingLeft: 6,
      opacity: 0.8,
    }),
    arrow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 20,
      color: "var(--color-text-tertiary, #aaa)",
      fontSize: 16,
    },
    transArrow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 32,
      color: "var(--color-text-tertiary, #aaa)",
      fontSize: 20,
    },
  };

  const totalSteps = phases.reduce((s, p) => s + p.steps.length, 0);
  let stepCounter = 0;

  return (
    <div style={{ fontFamily: "'DM Mono', monospace" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div style={styles.wrap}>
        <div style={styles.header}>
          <div style={styles.title}>Procesul tehnologic de producție</div>
          <div style={styles.subtitle}>CARIERĂ GIPS → TENCUIALĂ SAC 30 KG · EDINEȚ, MOLDOVA</div>
        </div>

        {phases.map((phase, pi) => {
          const phaseStepCount = phase.steps.length;
          return (
            <div key={phase.id}>
              <div style={{ display: "flex", gap: 12 }}>
                {/* Side col */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 60, flexShrink: 0 }}>
                  <div style={styles.phaseTag(phase.color, phase.bg, phase.text800)}>
                    {phase.id}
                  </div>
                  <div style={{ fontSize: 9, color: phase.color, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 4, textTransform: "uppercase" }}>
                    {phase.name}
                  </div>
                  <div style={{ width: 2, flexGrow: 1, background: phase.color, opacity: 0.5, borderRadius: 2 }} />
                </div>

                {/* Steps */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  {phase.steps.map((step, si) => {
                    stepCounter++;
                    const n = stepCounter;
                    return (
                      <div key={si}>
                        <div style={{ position: "relative", paddingRight: step.note ? 88 : 0 }}>
                          <div style={styles.box(phase.bg, phase.border, phase.text800)}>
                            <div style={{ fontSize: 11, color: phase.color, marginBottom: 2, opacity: 0.7 }}>
                              {String(n).padStart(2, "0")}
                            </div>
                            <div style={styles.boxTitle(phase.text800)}>{step.title}</div>
                            <div style={styles.boxSub(phase.text800)}>{step.sub}</div>
                          </div>
                          {step.note && (
                            <div style={{
                              position: "absolute",
                              right: 0,
                              top: "50%",
                              transform: "translateY(-50%)",
                              fontSize: 10,
                              color: phase.color,
                              whiteSpace: "nowrap",
                              paddingLeft: 8,
                              borderLeft: `2px dashed ${phase.color}`,
                              fontWeight: 700,
                              opacity: 0.9,
                            }}>
                              {step.note}
                            </div>
                          )}
                        </div>
                        {si < phase.steps.length - 1 && (
                          <div style={{ display: "flex", justifyContent: "center", height: 18, alignItems: "center" }}>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                              <line x1="6" y1="0" x2="6" y2="10" stroke={phase.color} strokeWidth="1.5" opacity="0.6"/>
                              <path d="M2 7L6 12L10 7" stroke={phase.color} strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Transition between phases */}
              {pi < phases.length - 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 36, paddingLeft: 72 }}>
                  <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                    <line x1="10" y1="0" x2="10" y2="22" stroke="#aaa" strokeWidth="1.5" strokeDasharray="3 2"/>
                    <path d="M4 18L10 26L16 18" stroke="#aaa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px dashed var(--color-border-tertiary, #e0e0e0)", fontSize: 10, color: "var(--color-text-tertiary, #aaa)", textAlign: "center", letterSpacing: "0.05em" }}>
          {totalSteps} ETAPE · 5 FAZE · KLARYOFLOW AI — INSTRUMENT ANALIZĂ FEZABILITATE
        </div>
      </div>
    </div>
  );
}
