---
title: Economic Simulation Hub
type: model-hub
status: canonical
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - finance
  - simulation
  - capex
  - scenarios
source_documents:
  - data/finance/simulation/assumptions.csv
  - data/finance/simulation/capacity-phases.csv
  - data/finance/simulation/equipment-strategy-costs.csv
  - data/finance/simulation/equipment-strategy-rates.csv
  - data/finance/simulation/scenario-matrix.csv
linked_decisions:
  - D-001
open_questions:
  - Care sunt costurile reale de extractie si transport cariera-fabrica?
  - Cat costa transportul Volodeni -> Ocnița daca fabrica este amplasata la Ocnița?
  - Care sunt primele oferte reale pentru echipament uzat, hibrid si nou?
  - Ce procent de utilizare a capacitatii este realist in primele 12 luni?
next_action: Inlocuieste ipotezele default cu date reale dupa discutii cu partenerul si furnizorii.
---

# Economic Simulation Hub

Acesta este hub-ul central pentru simularea economica RENOVIT.

## Scope

Modelul acopera:

- produs initial: portofoliu materiale de finisaj pe baza de calcar Cupcini
- capacitati canonice: `3k`, `5k`, `10k`, `20k tone/an`, cu `10k` ca baseline actual pentru RFQ
- strategii echipament: `used`, `hybrid`, `new`
- cost materie prima: Volodeni pentru produsul premium, Ocnița pentru volum / bentonita, transport Volodeni -> Ocnița, randament
- costuri procesare: micronizare, sortare, mixare, aditivi, manopera, ambalaj, distributie
- CAPEX: echipament, instalare, repair reserve, contingency si scalare capacitate
- capital de lucru
- finantare optionala: procent finantat, dobanda, termen credit
- output: cost/t, cost/sac, marja, EBITDA, break-even, payback, ROI 3 ani, cash dupa debt service

## Browser cockpit

- https://renovit.klaryoflowai.workers.dev/date-initiale.html
- https://renovit.klaryoflowai.workers.dev/simulare-economica.html

Foloseste-l pentru:

- introducerea datelor initiale intr-un singur tabel, apoi propagarea lor in calculatoare
- comparatii rapide cu partenerii
- discutii de Go / No-Go
- sensibilitate pe pret, capacitate, randament si CAPEX
- prima lectura a scenariilor `used vs hybrid vs new`

## Excel workbook

- `data/finance/RENOVIT_Economic_Simulation_Model.xlsx`

Workbook-ul contine:

1. `How_To`
2. `Inputs`
3. `Capacity_Phases`
4. `Equipment_Costs`
5. `Strategy_Rates`
6. `Scenario_Matrix`
7. `Sensitivity`
8. `Decision_Summary`

Foloseste Excel pentru:

- editari de ipoteze
- verificari detaliate pe randuri
- scenarii custom
- export catre parteneri / finantatori

## Canonical data

- `data/finance/simulation/assumptions.csv`
- `data/finance/simulation/capacity-phases.csv`
- `data/finance/simulation/equipment-strategy-costs.csv`
- `data/finance/simulation/equipment-strategy-rates.csv`
- `data/finance/simulation/scenario-matrix.csv`
- `data/finance/simulation/sensitivity.csv`

## Decision rule

Un scenariu devine candidat `GO` doar daca:

- marja bruta este peste `35%`
- EBITDA lunar este pozitiv
- payback-ul este sub `3.5 ani`
- break-even-ul lunar este sub utilizarea realista a capacitatii
- nu necesita CAPEX care depaseste apetitul de risc al partenerilor

## Important

Nu introduce TVA si taxe in acest model inainte de validarea operationala.

Acest cockpit raspunde la intrebarea: `poate fabrica sa functioneze economic?`

Taxele, structura juridica si distributia profitului vin dupa aceasta decizie.
