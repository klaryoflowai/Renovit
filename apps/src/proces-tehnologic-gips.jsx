export default function App() {
  const phases = [
    {
      id: "01",
      name: "materie prima",
      color: "#B86B15",
      bg: "#FAEBD9",
      text: "#5D3304",
      steps: [
        {
          title: "Volodeni - calcar alb premium",
          sub: "extractie selectiva, mostre codificate, stoc separat pentru granule decorative si upgrade de alb",
          note: "alb + constanta",
        },
        {
          title: "Ocnița - calcar volum + bentonita",
          sub: "calcar de volum, faina / reziduu utilizabil, bentonita pe ruta separata numai dupa validare",
        },
        {
          title: "Hub Ocnița + logistica Volodeni -> Ocnița",
          sub: "transport rutier validat pe EUR/t, recepție segregata si disciplina pe linia alba",
          note: "cost critic",
        },
      ],
    },
    {
      id: "02",
      name: "pregatire",
      color: "#0F7561",
      bg: "#E0F4EE",
      text: "#07382F",
      steps: [
        {
          title: "Recepție, pre-zdrobire si protectie echipament",
          sub: "receptie pe sursa, concasare, separator metalic, aspiratie si alimentare controlata",
        },
        {
          title: "Conditionare umiditate - doar daca este necesar",
          sub: "uscarea nu este automata in flux; se activeaza doar cand umiditatea depaseste limita de proces",
          note: "etapa conditionala",
        },
        {
          title: "Silozuri / buncare separate pe sursa si culoare",
          sub: "linia alba protejata de contaminare cu material de volum, praf sau loturi mai inchise",
        },
      ],
    },
    {
      id: "03",
      name: "granulometrie",
      color: "#5A54BA",
      bg: "#ECEAFE",
      text: "#26215E",
      steps: [
        {
          title: "Ruta A - ultrafin pentru filler / glet",
          sub: "mori + clasificator de aer pentru GCC foarte fin, cu control strict pe alb, PSD si eliberare la sac sau vrac",
          note: "nu calcina",
        },
        {
          title: "Ruta B - fractii decorative",
          sub: "zdrobire / cernere / dedusting pentru 0.5-3.0 mm; granulele decorative nu trebuie modelate ca produs complet micronizat",
        },
        {
          title: "Ruta C - bentonita fina + pachet functional minim",
          sub: "uscarea / micronizarea bentonitei este separata; doar gletul cere microdozare si validare de laborator",
          note: "glet only",
        },
      ],
    },
    {
      id: "04",
      name: "formulare",
      color: "#1A66A8",
      bg: "#E6F0FA",
      text: "#0B355C",
      steps: [
        {
          title: "Mixare pe campanii, nu 3 fabrici separate",
          sub: "faza 1 poate functiona cu 1-2 mixere si o linie flexibila de ambalare; la ~60k saci/lună nu sunt necesare 3 linii dedicate",
          note: "mai realist",
        },
        {
          title: "Glet mineral de baza 20kg",
          sub: "mix Ocnita + Volodeni + bentonita, ca dry mix; apa se adauga pe santier, nu in fabrica",
        },
        {
          title: "Granule decorative selectate 25kg",
          sub: "fractii controlate, alb si lot consistency; produs mineral selectat, nu mortar final canonic",
        },
        {
          title: "Filler micronizat alb 25kg / vrac",
          sub: "aceeasi ruta GCC poate iesi la sac sau vrac; baza Ocnita, upgrade de alb din Volodeni doar unde clientul il cere",
          note: "cash-cow",
        },
      ],
    },
    {
      id: "05",
      name: "qc si bagging",
      color: "#3A6F16",
      bg: "#E7F1DE",
      text: "#1A3707",
      steps: [
        {
          title: "Control calitate specific produsului",
          sub: "alb, umiditate, PSD, lucrabilitate si consistenta lotului - in functie de familie si de ruta",
        },
        {
          title: "O singura linie flexibila 20kg / 25kg in faza 1",
          sub: "de regula suficienta pentru portofoliul initial si chiar pentru o rampa superioara spre 1.500 t/lună; a doua linie vine la scalare",
          note: "scale later",
        },
        {
          title: "Paletizare, depozit uscat, schimbari curate",
          sub: "FIFO, protectie umiditate si curatare intre lotul alb premium si celelalte produse",
        },
        {
          title: "Expediere rutiera, feroviar optional",
          sub: "Ocnița ramane interesanta mai ales pentru logistica industriala, nu pentru ca schimba chimia procesului",
        },
      ],
    },
  ];

  const reviewPoints = [
    {
      title: "Fara calcinare",
      text: "Fluxul din calcar este mecanic si de formulare. Calcinarea din vechiul model pe gips trebuie scoasa complet din harta canonică.",
    },
    {
      title: "Granule decorative separat",
      text: "Granulele decorative au nevoie de fractii controlate, nu de aceeasi pulbere ultrafina folosita la glet si filler.",
    },
    {
      title: "Dry mix inseamna fara apa in fabrica",
      text: "La gletul uscat, apa intra la utilizator pe santier. Daca vrem produs pasta, inseamna alt flux, alta utilitate si alta fabrica.",
    },
    {
      title: "1.500 t/luna este scenariu de scalare",
      text: "1.500 t/luna produs finit inseamna aproximativ 18 kt/an si cere doar ~1.580 t/luna feed calificat la yield 95%. Nu trebuie confundat cu baseline-ul de lansare la 10 kt/an.",
    },
    {
      title: "Chimia minima, nu maxima",
      text: "Limestone este baza economica. Gletul cere doar o zona functionala minima validata in laborator; granulele si fillerul trebuie sa ramana cat mai aproape de resursa proprie.",
    },
  ];

  const styles = {
    wrap: {
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "transparent",
      padding: "16px 8px 32px",
      maxWidth: 720,
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: 24,
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: "#231d14",
      letterSpacing: "0.02em",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 11,
      color: "#6e6252",
      letterSpacing: "0.05em",
      lineHeight: 1.7,
    },
    phaseTag: (phase) => ({
      background: phase.bg,
      border: `1px solid ${phase.color}`,
      borderRadius: 20,
      padding: "3px 8px",
      fontSize: 10,
      fontWeight: 700,
      color: phase.text,
      letterSpacing: "0.1em",
      whiteSpace: "nowrap",
      marginBottom: 4,
    }),
    box: (phase) => ({
      background: phase.bg,
      border: `1px solid ${phase.color}`,
      borderRadius: 8,
      padding: "10px 12px",
      position: "relative",
    }),
    note: (phase) => ({
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
      opacity: 0.95,
    }),
    reviewGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 12,
      marginTop: 26,
    },
    reviewCard: {
      background: "rgba(255, 250, 242, 0.9)",
      border: "1px solid #d9ccb3",
      padding: "14px",
      minHeight: 150,
    },
  };

  const totalSteps = phases.reduce((sum, phase) => sum + phase.steps.length, 0);
  let stepCounter = 0;

  return (
    <div style={{ fontFamily: "'DM Mono', monospace" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div style={styles.wrap}>
        <div style={styles.header}>
          <div style={styles.title}>Flux tehnologic corectat - faza 1</div>
          <div style={styles.subtitle}>
            VOLODENI + OCNITA -> HUB SI FABRICA LA OCNITA -> GLET 20KG / GRANULE 25KG / FILLER 25KG SAU VRAC
          </div>
        </div>

        {phases.map((phase, phaseIndex) => (
          <div key={phase.id}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 64, flexShrink: 0 }}>
                <div style={styles.phaseTag(phase)}>{phase.id}</div>
                <div
                  style={{
                    fontSize: 9,
                    color: phase.color,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: 4,
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {phase.name}
                </div>
                <div style={{ width: 2, flexGrow: 1, background: phase.color, opacity: 0.5, borderRadius: 2 }} />
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {phase.steps.map((step, stepIndex) => {
                  stepCounter += 1;
                  const hasNote = Boolean(step.note);
                  return (
                    <div key={`${phase.id}-${stepIndex}`}>
                      <div style={{ position: "relative", paddingRight: hasNote ? 98 : 0 }}>
                        <div style={styles.box(phase)}>
                          <div style={{ fontSize: 11, color: phase.color, marginBottom: 2, opacity: 0.8 }}>
                            {String(stepCounter).padStart(2, "0")}
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: phase.text, marginBottom: 3 }}>
                            {step.title}
                          </div>
                          <div style={{ fontSize: 11, color: phase.text, lineHeight: 1.7, opacity: 0.9 }}>
                            {step.sub}
                          </div>
                        </div>
                        {hasNote ? <div style={styles.note(phase)}>{step.note}</div> : null}
                      </div>
                      {stepIndex < phase.steps.length - 1 ? (
                        <div style={{ display: "flex", justifyContent: "center", height: 18, alignItems: "center" }}>
                          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                            <line x1="6" y1="0" x2="6" y2="10" stroke={phase.color} strokeWidth="1.5" opacity="0.6" />
                            <path d="M2 7L6 12L10 7" stroke={phase.color} strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            {phaseIndex < phases.length - 1 ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 36, paddingLeft: 74 }}>
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                  <line x1="10" y1="0" x2="10" y2="22" stroke="#a69b8d" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M4 18L10 26L16 18" stroke="#a69b8d" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ) : null}
          </div>
        ))}

        <div style={{ marginTop: 24, padding: "16px 18px", border: "1px dashed #cbb99a", background: "rgba(255, 250, 242, 0.68)" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#a86411", textTransform: "uppercase", marginBottom: 8 }}>
            Verdict tehnologic
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.9, color: "#514534" }}>
            Procesul propus este corect ca arhitectura generala doar daca il tratam ca dry-mix mineral pe baza de calcar, cu rute
            separate pentru ultrafin si fractii decorative, cu formulare pe campanii si cu sisteme reale de binder pentru fiecare familie
            de produs. In forma initiala, documentul supra-promite la yield, la numarul de linii si la simplitatea retetelor.
          </div>
        </div>

        <div style={styles.reviewGrid}>
          {reviewPoints.map(point => (
            <div key={point.title} style={styles.reviewCard}>
              <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#a86411", textTransform: "uppercase", marginBottom: 8 }}>
                {point.title}
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.8, color: "#514534" }}>{point.text}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            paddingTop: 16,
            borderTop: "1px dashed #d9ccb3",
            fontSize: 10,
            color: "#8d816f",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          {totalSteps} ETAPE · FLUX CANONIC FAZA 1 · HARTA ACTUALIZATA PENTRU CALCAR / FINISAJE MINERALE
        </div>
      </div>
    </div>
  );
}
