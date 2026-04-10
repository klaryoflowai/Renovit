---
title: Equipment Analysis
type: working-note
status: working
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - equipment
  - capex
source_documents:
  - user-provided technology notes
  - data/technology/equipment-capex.csv
linked_decisions: []
open_questions:
  - Care echipamente pot fi uzate fara risc major si care trebuie cumparate noi?
next_action: Aduna minimum 3 oferte comparabile pentru linia de 5kt/an.
---

# Equipment Analysis

## Equipment groups

Analiza echipamentelor trebuie impartita in patru grupuri:

1. `Core process`: calcinare, macinare, mixer
2. `Commercial readiness`: linie ambalare 30kg, cusut, printer, paletizare
3. `Infrastructure`: silozuri, praf / filtre, electric, gaz / combustibil, warehouse
4. `Quality control`: laborator minim si teste externalizate

## Why this matters

Echipamentul ieftin poate arata bine in CAPEX, dar poate distruge business-ul prin:

- downtime
- consum energetic mare
- calitate instabila
- costuri ascunse de instalare
- lipsa piese
- imposibilitate de scalare

## CAPEX table

Tabelul sursa este:

- `data/technology/equipment-capex.csv`

## Minimum supplier comparison

Pentru fiecare oferta, completam:

- pret echipament
- an fabricatie / ore de lucru
- stare tehnica
- capacitate reala
- consum energie / combustibil
- include sau nu instalare
- include sau nu transport
- necesar reparatii
- disponibilitate piese
- garantie
- referinte / linii instalate

## Rule

Decizia de cumparare nu se ia pe `pret`.

Se ia pe:

`CAPEX real + cost operare + risc tehnic + impact calitate + scalabilitate`
