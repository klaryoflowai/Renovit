# Technology Data Model

Acest folder tine tabelele sursa pentru analiza tehnologica si CAPEX.

Principiu:

- CSV-urile sunt sursa versionabila in GitHub
- Excel / Google Sheets poate importa aceste CSV-uri pentru scenarii
- valorile sunt `working assumptions` pana cand avem oferte reale, audit tehnic si date de la partener

## Files

- `process-flow.csv` - proces tehnologic de la cariera la sac finit
- `equipment-capex.csv` - registru echipamente si CAPEX nou vs uzat
- `capacity-scenarios.csv` - scenarii 3kt / 5kt / 10kt / 20kt
- `implementation-phases.csv` - fazare de implementare si scalare
- `used-vs-new-decision.csv` - criterii pentru decizia echipament uzat vs nou
- `additives-lab-requirements.csv` - aditivi si laborator minim
- `RENOVIT_Technology_CAPEX_Model.xlsx` - workbook Excel generat din CSV-uri pentru lucru rapid

## Excel rule

Workbook-ul `.xlsx` este pentru lucru practic.

CSV-urile raman sursa canonica pentru GitHub.
