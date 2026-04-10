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

- `Phase 1`: scenariu hibrid pentru linie de `10kt/an`, daca preturile si calitatea se valideaza
- `Phase 1 optional`: linie `5kt/an` doar daca apetitul de CAPEX nu permite 10kt
- `Phase 2`: upgrade modular spre `20kt/an` acolo unde apar bottleneck-uri
- `Phase 3`: echipament nou pentru linia industriala, dupa validarea pietei si a procesului

Recomandarea actuala este `hibrid`, nu `uzat pur`.

## Why used equipment still makes sense pe auxiliar

- capital la risc mai mic
- timp mai scurt pana la test comercial
- payback mai rapid daca linia functioneaza
- flexibilitate pentru pivotare

## Why used equipment can be dangerous

- reparatii subestimate
- consum energetic mai mare
- lipsa documentatie tehnica
- piese greu de gasit
- calitate instabila la micronizare / mixare
- downtime exact cand trebuie validata piata

## De ce hibridul castiga acum

Pentru materiale de finisaj, cele mai riscante zone sunt:

- micronizare / finete
- dozare aditivi
- mixare omogena
- ambalare exacta 20/25kg

Aici echipamentul ieftin poate crea retururi, reclamatii si produs instabil. De aceea hibridul este mai bun: protejam punctele critice si folosim uzat/local pentru auxiliar.

## Decision rule

Echipamentul uzat este acceptabil doar daca:

1. exista inspectie tehnica
2. avem video / test run / referinte
3. avem lista de piese critice
4. stim costul de demontare, transport, instalare si pornire
5. includem rezerva de reparatii in scenarii
6. capacitatea se potriveste cu fluxul complet, nu doar cu un singur utilaj

## Nuante de decizie

- `UZAT`: acceptabil pentru paletizare, silozuri, transportoare si unele site, daca starea tehnica e buna.
- `HIBRID`: baseline recomandat pentru linia de 10kt/an.
- `NOU`: justificat mai ales cand mergem spre 20kt/an sau cand furnizorul ofera garantie, instalare si service solide.

## Data source

- `data/technology/used-vs-new-decision.csv`
