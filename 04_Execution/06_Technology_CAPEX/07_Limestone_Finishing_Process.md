---
title: Limestone Finishing Materials Process
type: technology-note
status: draft
owner: Yuri
updated: 2026-04-11
tags:
  - renovit
  - technology
  - limestone
  - finishing-materials
source_documents:
  - /Users/yuritimofte/Downloads/NOTĂ DE FUNDAMENTARE_ LANSAREA DIVIZIEI DE MATERIALE DE FINISAJ PREMIUM.docx
linked_decisions:
  - strategic-pivot-cupcini-limestone
open_questions:
  - Exista deja moara pentru faina de calcar sau trebuie inclusa in CAPEX?
  - Ce finete este necesara pentru fiecare produs?
  - Ce capacitate minima are sens pentru mixare / ambalare?
next_action: Cerem oferte pentru micronizare, sortare, mixer, dozare aditivi si ambalare 20/25kg.
---

# Limestone Finishing Materials Process

## Verdict rapid dupa review

Procesul propus este corect doar la nivel de arhitectura generala:

- selectie materie prima
- transport la fabrica
- pregatire mecanica
- formulare dry-mix
- control calitate
- ambalare si expediere

Corectiile obligatorii sunt:

1. scoatem complet logica de `calcinare` din harta canonica
2. nu tratam tencuiala decorativa ca produs obtinut din aceeasi pulbere ultrafina folosita la glet
3. nu tratam faza 1 ca `3 linii dedicate`; modelul realist este productie pe campanii cu `1-2 mixere` si o `linie flexibila 20kg / 25kg`
4. nu tratam fillerul de calcar drept binder suficient pentru glet / tencuiala / adeziv
5. nu modelam randament de `75%` ca baseline pentru dry-mix pe calcar daca materiile prime sunt deja relativ uscate

## Flux tehnologic tinta - varianta corectata

1. Selectie calcar alb Volodeni pentru linia premium.
2. Selectie calcar / faina / bentonita Ocnița pentru volum si functionalitate.
3. Transport Volodeni -> Ocnița, daca fabrica ramane la Ocnița.
4. Pre-zdrobire, separare metalica si aspiratie.
5. Conditionare umiditate doar daca materia prima iese din spec.
6. Ruta A: micronizare / clasificare fina pentru glet si filler fin.
7. Ruta B: zdrobire / cernere pentru fractii decorative, separate de ruta ultrafina.
8. Dozare binderi si aditivi in functie de SKU.
9. Mixare uscata pe campanii.
10. Control calitate lot, specific produsului.
11. Ambalare flexibila 20kg / 25kg.
12. Paletizare, depozit uscat, distributie rutiera / feroviara.

## Ce NU este corect in propunerea initiala

### 1. Decorativa nu trebuie modelata ca pulbere complet micronizata

Pentru tencuiala decorativa minerala ai nevoie de fractii controlate de agregat. Asta inseamna o ruta separata de:

- zdrobire
- cernere
- clasificare pe granule

nu doar filler ultrafin.

### 2. Retetele sunt prea incomplete

Propunerile de tip:

- `85% filler + 8% polimer + 2% HPMC`
- `70% F2 + 20% F1 + 5% granule`
- `60% F3 + 30% var + 5% fibre`

nu sunt suficiente ca retete de executie industriala. Lipsesc sistemele reale de binder si aditivi pentru fiecare familie de produs.

### 3. Faza 1 nu cere 3 linii dedicate

La volumele de inceput, configuratia mai credibila este:

- 1 backbone de pregatire materie prima
- 1 ruta ultrafina
- 1 ruta pentru fractii decorative
- 1-2 mixere
- 1 linie de ambalare flexibila 20kg / 25kg

### 4. Randamentul de 75% este prea sever pentru baseline

Pentru dry-mix pe baza de calcar, fara calcinare si cu recuperare buna de praf, baseline-ul de modelare ar trebui sa fie mai aproape de:

- `92-98%` masa recuperata

Poti cobori sub asta daca ai:

- umiditate mare
- reject semnificativ la cernere
- contaminare
- pierderi mari la manipulare

## Diferenta fata de gips

Nu mai modelam calcinare `CaSO4·2H2O -> CaSO4·0.5H2O`.

Pentru calcar, focusul este:

- finete
- grad de alb
- sortare
- absorbtie
- reteta de aditivi
- stabilitatea loturilor

## Familii de produs - logica corecta

### Glet premium 20kg

Limestone functioneaza ca filler fin, dar produsul are nevoie de un sistem real de binder alb. In practica, asta inseamna o combinatie validata din:

- filler ultrafin
- var hidratat si / sau ciment alb
- celuloza
- pulbere polimerica redispersabila
- alte aditii de lucrabilitate

Daca dorim un glet pasta, asta inseamna o alta fabrica, cu flux umed.

### Tencuiala decorativa minerala 25kg

Tencuiala decorativa minerala are nevoie de:

- binder mineral
- fractii granulometrice decorative
- aditivi de lucrabilitate / aderenta / retentie apa

Ruta de referinta pentru mortar de tencuire ramane `EN 998-1`.

### Adeziv 25kg

Un adeziv uscat nu trebuie tratat ca formula fixa pana nu definim familia exacta de produs. Canonicul este:

- daca este `adeziv pentru placi`: mortar cimentic cu ciment, filler / nisip selectat, celuloza, pulbere polimerica si aditii minore
- daca este `mortar adeziv / masa de spaclu ETICS`: reteta si traseul de conformitate se schimba, chiar daca ingredientele de baza pot semana partial

Pentru performanta, `EN 12004` este referinta doar pentru adezivii de placi. Pentru restul familiilor nu fortam incadrarea pana nu inchidem intended use-ul.

Bentonita poate ramane tema de laborator, nu dogma de reteta.

## CAPEX candidate

- moara de micronizare
- statie sortare granulometrica
- transportor surub / transfer inchis pentru pulberi
- dozatoare aditivi
- mixer industrial pentru amestecuri uscate
- linie ambalare 20/25kg
- silozuri / buncare materie prima
- filtru praf
- laborator minim

## Configuratie tinta 10kt/an

- moara micronizare: `5 t/h` pentru filler fin
- ruta separata de cernere / agregat decorativ
- mixer: `2 t/ciclu`, aprox. `10 t/h`
- ambalare: `500-800 saci/h`, reglabil `15-30kg`, folosit pentru `20kg` si `25kg`
- laborator: control granulometrie, umiditate, alb, aderenta / rezistenta dupa standardul produsului
- disciplina linie alba: curatare / schimbare lot pentru produsul premium

## Decizie used vs new

Echipamentul uzat poate ramane relevant pentru manipulare, silozuri, paletizare si unele componente de sortare.

Pentru micronizare si control granulometric, riscul calitatii poate justifica echipament nou sau refurbished verificat de specialist.

Pentru linia 10kt/an, recomandarea actuala este hibrid: core process nou / verificat, auxiliar uzat sau local unde riscul este mic.
