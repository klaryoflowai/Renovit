# Unit Economics

## Purpose

Documentul oficial care raspunde daca modelul fazei 1 are sens economic sau nu.

Nota 2026-04-10: modelul fazei 1 a fost pivotat de la gips / tencuiala gipsata la calcar Cupcini / materiale de finisaj. Pentru noul model foloseste [[03_Finance/01_Economic_Engine/05_Limestone_Finishing_Materials_Unit_Economics]].

## KPI-uri centrale

- cost operational / tona produs finit
- amortizare / tona
- cost total / tona cu CAPEX
- cost total / sac 20kg / 25kg, dupa produs
- marja bruta / sac, dupa produs
- saci vanduti / luna si paleti / luna
- marja bruta
- cash flow operational lunar
- payback CAPEX
- ROI la 3 ani

## Rule of thumb

- peste 40% marja: GO
- intre 25% si 39%: GO conditionat
- intre 10% si 24%: risc ridicat
- sub 10%: NO-GO

## Local tools

- browser calculator portofoliu materiale de finisaj: `../../index.html`
- browser calculator per sac 25kg: `../../unit-economics-sac-25kg.html` - legacy / auxiliar
- React source vechi: `../../gips-unit-economics.jsx` - legacy
- raw tables: `../../data/finance/`

## Cum se folosesc impreuna

Calculatorul principal `index.html` devine baza deciziei pentru portofoliul de materiale de finisaj pe baza de calcar.

Calculatorul per sac 25kg ramane auxiliar doar pentru scenarii de produs singular; nu este sursa principala dupa pivot.
