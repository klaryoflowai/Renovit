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
  - /Users/yuritimofte/Downloads/NOTĂ DE FUNDAMENTARE_ LANSAREA DIVIZIEI DE MATERIALE DE FINISAJ PREMIUM.docx
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
- [[04_Execution/06_Technology_CAPEX/07_Limestone_Finishing_Process]]

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

- https://renovit.klaryoflowai.workers.dev/ - calculator portofoliu materiale de finisaj pe baza de calcar
- https://renovit.klaryoflowai.workers.dev/simulare-economica.html - hub simulare economica pentru CAPEX si capacitate
- https://renovit.klaryoflowai.workers.dev/dashboard-financiar.html - dashboard financiar pentru cash-flow si fonduri
- https://renovit.klaryoflowai.workers.dev/unit-economics-sac-25kg.html - legacy / auxiliar per sac 25kg
- https://renovit.klaryoflowai.workers.dev/proces-tehnologic-gips.html - harta actualizata pentru finisaje minerale Volodeni + Ocnița
- https://renovit.klaryoflowai.workers.dev/assets/proces_tehnologic_gips_renovit.svg - SVG actualizat pentru fluxul canonic

## Working thesis

Pentru faza 1, ipoteza de lucru este:

- start cu linie hibrida de `10kt/an` pentru micronizare / sortare / mixare / ambalare
- investitie controlata, dar suficienta pentru calitate stabila
- validare retete + calitate + cerere + unit economics
- upgrade modular spre `20kt/an`
- echipament nou doar dupa ce riscul comercial, calitativ si operational scade

Working range curent:

- UZAT: `271-416k EUR` cu auxiliar inclus, inainte de rezerve
- HIBRID: `445-643k EUR` cu auxiliar inclus, inainte de rezerve
- NOU: `750-1,078k EUR` cu auxiliar inclus, inainte de rezerve

Tinta `~450k EUR` este un baseline agresiv de negociere pentru scenariul hibrid, nu buget final confirmat.

## Decision gate

Nu cumparam echipament doar pentru ca este disponibil.

Cumparam doar daca avem:

1. analiza calitate suficient de buna
2. configuratie tehnica validata de specialist
3. oferte comparabile
4. CAPEX total cu instalare, reparatii si contingency
5. scenariu de break-even acceptabil
6. plan de scalare fara blocaje majore
