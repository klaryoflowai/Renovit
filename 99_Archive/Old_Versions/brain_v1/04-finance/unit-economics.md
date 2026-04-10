# Unit Economics

## Purpose

Transforma datele din cariera si din piata intr-un verdict economic clar.

## KPI-uri centrale

- cost operational / tona produs finit
- amortizare / tona
- cost total / tona cu CAPEX
- marja bruta
- cash flow operational lunar
- payback CAPEX
- ROI la 3 ani

## Rule of thumb

- peste 40% marja: GO
- intre 25% si 39%: GO conditionat
- intre 10% si 24%: risc ridicat
- sub 10%: NO-GO

## Files

- calculator browser: `../../index.html`
- sursa React: `../../gips-unit-economics.jsx`
- costuri: `../../data/finance/operating-costs.csv`
- CAPEX: `../../data/finance/capex-offers.csv`
- scenarii: `../../data/finance/scenarios.csv`

## Modeling notes

- Payback si ROI trebuie evaluate pe cash flow operational, nu pe profit deja amortizat.
- Volumul de vanzari trebuie limitat la capacitatea reala disponibila.
- Scenariile trebuie rulate in 3 variante: conservator, baza, agresiv.

## Related notes

- [[../03-feasibility/feasibility-assessment]]
- [[../03-feasibility/assumption-log]]
- [[../05-business-plan/financial-plan]]
