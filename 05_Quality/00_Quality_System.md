---
title: Quality System
type: moc
status: canonical
owner: Yuri
updated: 2026-04-11
tags:
  - renovit
  - quality
  - moc
source_documents: []
linked_decisions: []
open_questions:
  - Care sunt standardele si testele exacte pentru fiecare produs de finisaj pe baza de calcar?
next_action: Foloseste aceasta nota ca home pentru toate subiectele de calitate si conformitate tehnica.
---

# Quality System

## Purpose

Pilonul `Quality` separa clar:

1. pragurile tehnice de lucru pentru screening intern
2. cerintele oficiale UE pentru produsul final si marcaj CE
3. documentele si testele care trebuie obtinute de la laborator

## Core quality stack

- [[05_Quality/06_Limestone_Finishing_Materials_Standards]]
- [[05_Quality/07_Process_Validation_Memo_Limestone_Finishes]]
- [[05_Quality/08_ETICS_Mortar_Working_Formula_And_Test_Pack]]
- [[05_Quality/03_Lab_Tests_And_Document_Checklist]]
- [[05_Quality/04_Product_Quality_Targets]]
- [[07_Meetings/2026-04-10_Volodeni_First_Visit/02_Question_Pack_Volodeni]]

## Legacy reference set

- [[05_Quality/05_EN13279_Master_Framework]]
- [[05_Quality/01_Raw_Gypsum_Working_Thresholds]]
- [[05_Quality/02_EU_Standards_And_CE_Path]]

Nota: documentele EN13279 / gips sunt legacy dupa pivotul spre Cupcini / calcar. Pentru deciziile noi foloseste mai intai documentul de standarde pentru materiale de finisaj pe baza de calcar.

## Operating order

1. Cerem analiza de laborator pentru calcar si detaliile de prelevare.
2. Verificam `CaCO3`, alb, granulometrie, umiditate si impuritati.
3. Alegem produsul initial tinta pe baza retetei si a pretului angro validat.
4. Mapam produsul final la standardul relevant si la traseul de conformitate.
5. Mutam doar valorile validate in:
   - [[03_Finance/01_Economic_Engine/01_Assumption_Register]]
   - [[04_Execution/01_Industrial_Operations/05_Quality_And_Product_Readiness]]
   - [[07_Meetings/2026-04-10_Volodeni_First_Visit/02_Question_Pack_Volodeni]]

## Quality architecture

- `Raw material screening`: ne spune daca merita sa continuam.
- `Lab evidence`: ne spune daca datele sunt reale sau doar declarative.
- `Product route`: glet, tencuiala decorativa minerala, mortar ETICS sau alta ruta.
- `EU / CE path`: ne spune ce trebuie sa demonstreze produsul final, nu doar cariera.
- `Go / No-Go gate`: leaga chimia, tehnologia, economia si piata.

## Rule

Nicio concluzie despre viabilitatea produsului nu este canonica pana nu exista:

- analiza de laborator
- interpretare tehnica
- mapping clar la produsul final tinta
