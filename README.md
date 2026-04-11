# RENOVIT

Acest repository este organizat ca un vault de business in stilul `BioStream`, direct la radacina folderului.

Nota 2026-04-10: proiectul a pivotat de la `gips / ipsos Edinet` la `S.A. Mina din Cupcini / calcar / materiale de finisaj`.

Sistemul adoptat este:

- `Scaling Up` pentru arhitectura business-ului
- `Traction` ca layer de simplificare pentru Stage 1
- `4DX` ca layer de follow-through pentru obiectivul critic

## Ce exista in repo

- `Welcome.md` - intrarea principala pentru Obsidian
- `00_HQ` - directie, index, charter, KPI, assumptions, frameworks
- `01_People` - structura companiei, roluri, drepturi de decizie, parteneriat
- `02_Strategy` - model de business, fazare, GTM, thesis, research
- `03_Finance` - assumptions, unit economics, pricing, scenarii, model financiar
- `04_Execution` - model operational, tehnologie si CAPEX, ritm de executie, decizii, riscuri, SOP-uri
- `05_Quality` - knowledge base de calitate, cerinte de laborator, screening tehnic si traseu UE / CE
- `06_Sales_Marketing` - ICP, lead list, buyer list, outreach, canale
- `07_Meetings` - meetinguri si template-uri
- `99_Archive` - structura veche si materiale arhivate

## Fisiere tehnice

- `index.html` - calculator browser-ready pentru portofoliu materiale de finisaj pe baza de calcar
- `unit-economics-sac-25kg.html` - calculator legacy / auxiliar pentru unit economics per sac 25kg
- `simulare-economica.html` - hub browser-ready pentru simulare economica completa
- `dashboard-financiar.html` - dashboard browser-ready pentru cash-flow, fonduri, P&L operativ si balance sheet
- `gips-unit-economics.jsx` - sursa React legacy a calculatorului vechi
- `instrumente.html` - hub public pentru instrumentele online
- `proces-tehnologic-gips.html` - pagina actualizata pentru procesul tehnologic al finisajelor minerale
- `raport-vizita-cariera.html` - formular browser pentru raportul primei vizite Volodeni
- `assets/proces_tehnologic_gips_renovit.svg` - diagrama SVG statica legacy pentru ruta veche pe gips
- `apps/src/` - sursele JSX pentru instrumentele publicate
- `data/` - layer de date brute si CSV-uri, inclusiv modelul tehnologic / CAPEX
- `data/finance/RENOVIT_Economic_Simulation_Model.xlsx` - workbook Excel pentru simulare economica completa
- `deployment/` - note pentru GitHub + Cloudflare Pages

## Instrumente publice

- https://renovit.klaryoflowai.workers.dev/ - calculator materiale de finisaj pe baza de calcar
- https://renovit.klaryoflowai.workers.dev/simulare-economica.html - hub simulare economica
- https://renovit.klaryoflowai.workers.dev/dashboard-financiar.html - dashboard financiar operational
- https://renovit.klaryoflowai.workers.dev/unit-economics-sac-25kg.html - legacy / auxiliar per sac 25kg
- https://renovit.klaryoflowai.workers.dev/instrumente.html - hub instrumente
- https://renovit.klaryoflowai.workers.dev/raport-vizita-cariera.html - raport vizita Volodeni / calcar / materiale de finisaj
- https://renovit.klaryoflowai.workers.dev/proces-tehnologic-gips.html - proces tehnologic actualizat pentru finisaje minerale
- https://renovit.klaryoflowai.workers.dev/assets/proces_tehnologic_gips_renovit.svg - diagrama SVG legacy

## Cum folosesti vault-ul in Obsidian

1. Deschide acest folder ca vault.
2. Porneste din `Welcome.md`.
3. Apoi mergi in `00_HQ/00_Master_Index.md`.
4. Pentru fezabilitate, intra in:
   - `00_HQ/01_Project_Charter.md`
   - `03_Finance/01_Economic_Engine/01_Assumption_Register.md`
   - `03_Finance/01_Economic_Engine/02_Unit_Economics.md`
   - `03_Finance/02_Planning_And_Control/03_Economic_Simulation_Hub.md`
   - `03_Finance/02_Planning_And_Control/04_Financial_Control_Dashboard.md`
   - `04_Execution/06_Technology_CAPEX/00_Technology_CAPEX_Lab.md`
   - `00_HQ/10_Strategic_Pivot_Cupcini_Limestone.md`
   - `02_Strategy/10_Finishing_Materials_Thesis_Cupcini.md`
   - `03_Finance/01_Economic_Engine/05_Limestone_Finishing_Materials_Unit_Economics.md`
   - `03_Finance/01_Economic_Engine/06_Price_Benchmark_Check_Limestone_Finishes.md`
   - `05_Quality/06_Limestone_Finishing_Materials_Standards.md`
   - `07_Meetings/2026-04-10_Volodeni_First_Visit/02_Question_Pack_Volodeni.md`
   - `04_Execution/03_Decision_Control/02_Risk_Register.md`
5. Pentru plan de afaceri, continua cu:
   - `02_Strategy/01_Business_Model.md`
   - `02_Strategy/02_Phased_Strategy.md`
   - `02_Strategy/09_One_Page_Strategic_Plan.md`
   - `04_Execution/06_Technology_CAPEX/04_Phased_Implementation_Scaling.md`
   - `06_Sales_Marketing/01_ICP_And_Segments.md`

## Cum folosesti modelul Technology / CAPEX

1. Porneste din `04_Execution/06_Technology_CAPEX/00_Technology_CAPEX_Lab.md`.
2. Completeaza datele reale in CSV-urile din `data/technology/`.
3. Foloseste `data/technology/RENOVIT_Technology_CAPEX_Model.xlsx` sau importa CSV-urile in Excel / Google Sheets pentru scenarii.
4. Pastreaza deciziile si rationale-ul in Obsidian / Notion, nu doar in spreadsheet.

## Cum folosesti modelul Economic Simulation

1. Porneste din `03_Finance/02_Planning_And_Control/03_Economic_Simulation_Hub.md`.
2. Pentru simulare rapida, deschide `simulare-economica.html`.
3. Pentru lucru profund, deschide `data/finance/RENOVIT_Economic_Simulation_Model.xlsx`.
4. Actualizeaza sursa versionabila in `data/finance/simulation/`.

## Cum folosesti calculatorul local

Deschide `index.html`, `simulare-economica.html` sau `dashboard-financiar.html` in browser sau ruleaza:

```bash
python3 -m http.server 8000
```

apoi acceseaza `http://localhost:8000`.
