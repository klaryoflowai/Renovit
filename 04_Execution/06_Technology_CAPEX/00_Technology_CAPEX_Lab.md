---
title: Technology And CAPEX Lab
type: moc
status: canonical
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - technology
  - capex
  - equipment
source_documents:
  - user-provided technology notes
linked_decisions: []
open_questions:
  - Care este configuratia minima viabila pentru faza 1?
  - Cand are sens sa trecem de la echipament uzat la echipament nou?
next_action: Completeaza tabelele CSV cu oferte reale si valideaza bottleneck-urile tehnice.
---

# Technology And CAPEX Lab

Aceasta este zona de analiza tehnico-economica pentru:

- proces tehnologic
- echipamente
- CAPEX
- capacitate
- fazare de implementare
- decizia `uzat acum / nou la scalare`

## De ce sta separat

Nu este doar `Execution`, pentru ca nu executam inca fabrica.

Nu este doar `Finance`, pentru ca scenariile financiare depind de arhitectura tehnologica.

Nu este doar `Quality`, pentru ca tehnologia trebuie sa transforme materia prima in produs vandabil.

De aceea, zona aceasta functioneaza ca punte:

`Quality -> Technology -> CAPEX -> Unit Economics -> Implementation`

## Core docs

- [[04_Execution/06_Technology_CAPEX/01_Process_Technology_Map]]
- [[04_Execution/06_Technology_CAPEX/02_Equipment_Analysis]]
- [[04_Execution/06_Technology_CAPEX/03_Used_vs_New_Decision]]
- [[04_Execution/06_Technology_CAPEX/04_Phased_Implementation_Scaling]]
- [[04_Execution/06_Technology_CAPEX/05_Scenario_Model_Spec]]
- [[04_Execution/06_Technology_CAPEX/06_Supplier_Questions]]

## Data model

- `data/technology/process-flow.csv`
- `data/technology/equipment-capex.csv`
- `data/technology/capacity-scenarios.csv`
- `data/technology/implementation-phases.csv`
- `data/technology/used-vs-new-decision.csv`
- `data/technology/additives-lab-requirements.csv`
- `data/technology/RENOVIT_Technology_CAPEX_Model.xlsx`

## Notion mirror

- https://www.notion.so/33ef80c6023b8165a379de351fb6ccfe

## Public tools

- https://renovit.klaryoflowai.workers.dev/ - calculator unit economics pe tona
- https://renovit.klaryoflowai.workers.dev/simulare-economica.html - hub simulare economica pentru CAPEX si capacitate
- https://renovit.klaryoflowai.workers.dev/unit-economics-sac-25kg.html - calculator unit economics per sac 25kg
- https://renovit.klaryoflowai.workers.dev/proces-tehnologic-gips.html
- https://renovit.klaryoflowai.workers.dev/assets/proces_tehnologic_gips_renovit.svg

## Working thesis

Pentru faza 1, ipoteza de lucru este:

- start cu linie uzata / refurbished la `5kt/an`
- investitie controlata
- validare calitate + cerere + unit economics
- upgrade modular spre `10-15kt/an`
- echipament nou doar dupa ce riscul comercial si operational scade

## Decision gate

Nu cumparam echipament doar pentru ca este disponibil.

Cumparam doar daca avem:

1. analiza calitate suficient de buna
2. configuratie tehnica validata de specialist
3. oferte comparabile
4. CAPEX total cu instalare, reparatii si contingency
5. scenariu de break-even acceptabil
6. plan de scalare fara blocaje majore
