---
title: Phased Implementation And Scaling
type: working-note
status: working
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - scaling
  - implementation
source_documents:
  - user-provided technology notes
  - data/technology/implementation-phases.csv
linked_decisions: []
open_questions:
  - Care este faza minima care produce invatare reala fara CAPEX excesiv?
next_action: Leaga fazele de modelul financiar si de intalnirea cu partenerii.
---

# Phased Implementation And Scaling

## Stage logic

### Phase 0 - Due diligence

Nu cumparam echipament.

Validam:

- calitate calcar Volodeni pentru finisaje
- cost extractie
- energie / gaz / utilitati
- pret piata
- oferte echipamente
- parteneriat

### Phase 1 - Recommended 10kt/year hybrid launch line

Ipoteza de lucru:

- linie hibrida
- capacitate tinta: `10kt/an`
- output lunar nominal: aproximativ `833 t/luna`
- utilizare an 1 de lucru: `70-75%`
- break-even de lucru initial: aproximativ `150-180 t/luna`, de validat in calculator
- CAPEX working range: `445-643k EUR` inainte de rezerve de reparatii / contingency, daca auxiliarul trebuie inclus

Scop:

- validare produs
- validare distributie
- validare operare
- validare marja

### Phase 1 optional - 5kt/year starter line

Folosim `5kt/an` doar daca partenerii nu accepta CAPEX-ul liniei 10kt sau daca piata nu confirma suficient volum.

Riscul la 5kt este ca fixed opex-ul si echipa minima pot apasa prea mult unit economics.

### Phase 2 - 20kt/year modular scale

Adaugam capacitate doar dupa ce Phase 1 arata:

- calitate stabila
- cerere peste capacitate
- distributie repetabila
- cash flow operational suficient

### Phase 3 - New industrial line

Echipamentul nou are sens cand:

- uptime-ul devine critic
- volumul justifica amortizarea
- piata este validata
- finantarea este disponibila
- avem echipa tehnica

## Data source

- `data/technology/implementation-phases.csv`
