---
title: Scenario Model Spec
type: model-spec
status: working
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - finance
  - capex
  - scenarios
source_documents:
  - data/technology/capacity-scenarios.csv
  - data/technology/equipment-capex.csv
linked_decisions: []
open_questions:
  - Vrem Excel local, Google Sheets sau doar CSV + calculator web?
next_action: Importa CSV-urile in Excel / Sheets si leaga scenariile de calculatorul web.
---

# Scenario Model Spec

## Recommendation

Pentru etapa actuala, folosim:

- CSV-uri in GitHub ca sursa de date
- workbook local `.xlsx` pentru lucru practic
- Excel / Google Sheets pentru simulare rapida
- calculatorul web pentru unit economics simplificat

Motiv:

- `.xlsx` binar este greu de revizuit in Git
- CSV-urile permit versionare si comparare
- Excel / Sheets ramane foarte bun pentru iteratii vizuale

## Workbook tabs to create

Cand transformam CSV-urile intr-un Excel / Google Sheet, taburile recomandate sunt:

1. `Inputs`
2. `Process Flow`
3. `Equipment CAPEX`
4. `Capacity Scenarios`
5. `Used vs New`
6. `Implementation Phases`
7. `Operating Costs`
8. `Break-even`
9. `Sensitivity`
10. `Decision Summary`

## Core formulas

Modelul trebuie sa calculeze:

- CAPEX total
- CAPEX pe tona capacitate
- reparatii / refurbishment reserve
- cost energie per tona
- cost aditivi per tona
- cost ambalaj per tona
- cost total per tona
- cost total per sac 30kg
- marja bruta per sac 30kg
- saci si paleti pe luna
- marja bruta
- break-even lunar
- payback
- ROI 3 ani

## Source CSVs

- `data/technology/capacity-scenarios.csv`
- `data/technology/equipment-capex.csv`
- `data/technology/process-flow.csv`
- `data/technology/implementation-phases.csv`
- `data/technology/used-vs-new-decision.csv`
- `data/technology/additives-lab-requirements.csv`
- `data/finance/operating-costs.csv`
- `data/finance/scenarios.csv`

## Local workbook

- `data/technology/RENOVIT_Technology_CAPEX_Model.xlsx`

Workbook-ul este generat din CSV-uri si trebuie tratat ca instrument de lucru, nu ca sursa canonica.

## Link to browser calculator

- https://renovit.klaryoflowai.workers.dev/
- https://renovit.klaryoflowai.workers.dev/unit-economics-sac-30kg.html

## Rule

Excel-ul nu trebuie sa devina locul unde se pierd deciziile.

Excel-ul calculeaza.

Obsidian / Notion pastreaza:

- ipotezele
- deciziile
- riscurile
- sursele
- rationale-ul
