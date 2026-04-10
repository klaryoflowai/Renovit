---
title: Process Technology Map
type: working-note
status: working
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - technology
  - process
source_documents:
  - user-provided technology notes
  - data/technology/process-flow.csv
linked_decisions: []
open_questions:
  - Care etapa devine bottleneck real la 5kt/an?
next_action: Valideaza procesul cu un tehnolog / furnizor de echipamente.
---

# Process Technology Map

## Working process

Procesul tinta pentru tencuiala gipsata ambalata 30kg este:

1. extractie
2. transport cariera -> fabrica
3. zdrobire
4. calcinare
5. macinare fina
6. dozare aditivi
7. amestecare
8. racire
9. silo / stocare liant
10. umplere saci 30kg
11. cusut / print / etichetare
12. paletizare
13. depozitare produs finit si incarcare

## Critical bottlenecks

- `calcinare`: cea mai importanta etapa pentru calitate, energie si capacitate
- `macinare`: afecteaza finetea si performanta produsului
- `dozare aditivi`: afecteaza timp de intarire, culoare si stabilitate
- `ambalare 30kg`: afecteaza ritmul comercial si retail-readiness
- `depozitare`: afecteaza umiditatea si reclamatiile

## Data source

Tabelul sursa este:

- `data/technology/process-flow.csv`

## Rule

Nu validam CAPEX-ul doar din pretul echipamentelor.

Validam fluxul complet:

`input -> bottleneck -> output -> calitate -> cost / tona -> produs vandabil`
