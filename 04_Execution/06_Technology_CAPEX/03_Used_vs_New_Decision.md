---
title: Used vs New Equipment Decision
type: decision-framework
status: working
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - equipment
  - decision
source_documents:
  - user-provided technology notes
  - data/technology/used-vs-new-decision.csv
linked_decisions: []
open_questions:
  - Ce nivel de risc tehnic acceptam in faza 1?
next_action: Foloseste framework-ul pe primele oferte reale.
---

# Used vs New Equipment Decision

## Working thesis

Pentru RENOVIT, strategia logica este:

- `Phase 1`: echipament uzat / refurbished, daca auditul tehnic este acceptabil
- `Phase 2`: upgrade modular acolo unde apar bottleneck-uri
- `Phase 3`: echipament nou pentru linia industriala, dupa validarea pietei si a procesului

## Why used equipment makes sense in phase 1

- capital la risc mai mic
- timp mai scurt pana la test comercial
- payback mai rapid daca linia functioneaza
- flexibilitate pentru pivotare

## Why used equipment can be dangerous

- reparatii subestimate
- consum energetic mai mare
- lipsa documentatie tehnica
- piese greu de gasit
- calitate instabila la calcinare / macinare
- downtime exact cand trebuie validata piata

## Decision rule

Echipamentul uzat este acceptabil doar daca:

1. exista inspectie tehnica
2. avem video / test run / referinte
3. avem lista de piese critice
4. stim costul de demontare, transport, instalare si pornire
5. includem rezerva de reparatii in scenarii
6. capacitatea se potriveste cu fluxul complet, nu doar cu un singur utilaj

## Data source

- `data/technology/used-vs-new-decision.csv`
