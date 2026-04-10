# RENOVIT Economic Simulation Data

Acest folder tine sursele versionabile pentru modelul economic complet.

## Principiu

- CSV-urile sunt sursa transparenta pentru GitHub.
- Workbook-ul Excel este generat din aceste CSV-uri pentru lucru practic.
- Browser hub-ul foloseste aceleasi ipoteze de baza pentru simulare rapida.

## Files

- `assumptions.csv` - ipoteze globale de pret, cost, randament, capital de lucru si finantare.
- `capacity-phases.csv` - scenarii canonice de capacitate `3k`, `5k`, `10k`, `20k tone/an`, cu `10k` ca baseline actual.
- `equipment-strategy-costs.csv` - costuri echipament pentru variantele `used`, `hybrid`, `new`.
- `equipment-strategy-rates.csv` - rezerve, contingency, scalare si mentenanta pe strategie.
- `scenario-matrix.csv` - combinatii capacitate x strategie.
- `sensitivity.csv` - drivere pentru analiza de sensibilitate.

## Output

Workbook generat:

- `data/finance/RENOVIT_Economic_Simulation_Model.xlsx`

Browser hub public:

- `simulare-economica.html`
