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

Procesul propus este corect doar la nivel de arhitectura generala si mai degraba ca scenariu de scalare:

- selectie materie prima
- transport la fabrica
- pregatire mecanica
- formulare dry-mix
- control calitate
- ambalare si expediere

Corectiile obligatorii sunt:

1. scoatem complet logica de `calcinare` din harta canonica
2. nu tratam granulele decorative ca produs obtinut din aceeasi pulbere ultrafina folosita la glet si filler
3. nu tratam faza 1 ca `3 linii dedicate`; modelul realist este productie pe campanii cu `1-2 mixere` si o `linie flexibila 20kg / 25kg`
4. nu tratam fillerul de calcar drept binder suficient pentru glet
5. nu modelam randament de `75%` ca baseline pentru dry-mix pe calcar daca materiile prime sunt deja relativ uscate
6. nu mai facem din `ETICS` produs canonic; portofoliul faza 1 urmeaza logica `resource-first`
7. nu adaugam apa in fabrica pentru `gletul uscat`; apa intra la utilizator, pe santier
8. nu ascundem sub acelasi yield un scenariu de `2.500 t/luna brut` si doar `1.500 t/luna finit` fara sa explicam rejectele, surplusul sau alte vanzari

## Flux tehnologic tinta - varianta corectata

1. Selectie calcar alb Volodeni pentru linia premium.
2. Selectie calcar / faina / bentonita Ocnița pentru volum si functionalitate.
3. Transport Volodeni -> Ocnița, daca fabrica ramane la Ocnița.
4. Receptie segregata la hubul Ocnița: linie alba, volum industrial, bentonita separata.
5. Pre-zdrobire, separare metalica si aspiratie.
6. Conditionare umiditate doar daca materia prima iese din spec.
7. Ruta A: micronizare / clasificare fina pentru glet si filler fin.
8. Ruta B: zdrobire / cernere / dedusting pentru fractii decorative, separate de ruta ultrafina.
9. Ruta C: uscare / micronizare bentonita si microdozare doar pentru glet, daca laboratorul confirma utilitatea.
10. Dozare minima de binderi si aditivi doar unde SKU-ul chiar o cere.
11. Mixare uscata pe campanii, mai ales pentru glet.
12. Control calitate lot, specific produsului.
13. Ambalare flexibila 20kg / 25kg si iesire filler la vrac.
14. Paletizare, depozit uscat, distributie rutiera / feroviara.

## Ce pastram din scenariul `1.500 t/luna`

Scenariul primit de la tine contine idei utile, dar trebuie repozitionat corect:

- `Ocnița` ramane hub-ul industrial si logistic.
- `Volodeni` ramane sursa premium pentru alb si granule decorative.
- exista sens pentru trei iesiri comerciale paralele: `glet`, `granule`, `filler`.
- fillerul trebuie tratat explicit pe doua canale: `la sac` si `vrac`.

Dar `1.500 t/luna produs finit` inseamna aproximativ:

- `18 kt/an` run-rate
- aproximativ `1.580 t/luna` feed calificat la un yield de `95%`

Deci nu putem lasa simultan in model si:

- `2.500 t/luna brut`
- `1.500 t/luna finit`
- `95% yield`

fara sa explicam diferenta ca:

- reject / off-spec
- alte produse vandute separat
- surplus neprocesat
- pierderi reale de proces mult peste baseline

Pentru lansare, baseline-ul canonic ramane `10 kt/an`, iar `1.500 t/luna` este scenariu de scalare, nu ipoteza implicita de ziua 1.

## Ce NU este corect in propunerea initiala

### 1. Granulele decorative nu trebuie modelate ca pulbere complet micronizata

Pentru granule decorative selectate ai nevoie de fractii controlate de agregat. Asta inseamna o ruta separata de:

- zdrobire
- cernere
- clasificare pe granule

nu doar filler ultrafin.

### 2. Gletul este singurul SKU de faza 1 care cere mix functional mai serios

Propunerile de tip:

- `85% filler + 8% polimer + 2% HPMC`
- `70% F2 + 20% F1 + 5% granule`
- `60% F3 + 30% var + 5% fibre`

nu sunt suficiente ca retete de executie industriala. Pentru `granule` si `filler`, cheia este mai ales PSD, alb si lot consistency. Pentru `glet`, lipsesc sistemele reale de binder si aditivi.

In plus, daca produsul ramane `glet uscat`, nu adaugam apa in fabrica. Apa se adauga la aplicare. Daca vrem produs gata preparat, intram intr-o alta familie de utilaje, utilitati, shelf-life si ambalare.

### 3. Faza 1 nu cere 3 linii dedicate

La volumele de inceput, configuratia mai credibila este:

- 1 backbone de pregatire materie prima
- 1 ruta ultrafina
- 1 ruta pentru fractii decorative
- 1-2 mixere
- 1 linie de ambalare flexibila 20kg / 25kg

Chiar si un scenariu superior de aproximativ `60.000 saci/luna` poate fi sustinut de o singura linie buna de `500 saci/h`, daca organizarea schimburilor, schimbarea SKU si uptime-ul sunt sanatoase. A doua linie devine logica la scalare, nu automat la start.

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

### Glet mineral de baza 20kg

Limestone functioneaza ca filler fin, dar produsul are nevoie de un sistem functional minim. In practica, asta inseamna o combinatie validata din:

- filler ultrafin
- var hidratat si / sau ciment alb in dozaj minim eficient
- celuloza in dozaj minim validat
- eventual pulbere polimerica redispersabila, doar daca produsul nu atinge performanta tinta fara ea
- alte aditii de lucrabilitate

Daca dorim un glet pasta, asta inseamna o alta fabrica, cu flux umed.

Ipoteza `resource-first` pentru glet este:

- `60-70%` calcar Ocnița
- `25-30%` corectie de alb din Volodeni
- `5-10%` bentonita doar dupa validare
- `0-5%` pachet functional extern, pornind conservator si reducand doar dupa teste

### Granule decorative selectate 25kg

Granulele decorative selectate au nevoie de:

- fractii granulometrice decorative
- alb si culoare stabile
- umiditate controlata
- ambalare curata si clasificare repetabila
- optional dedusting / spalare, in functie de specificatia clientului

Nu tratam acest SKU ca mortar final canonic. In faza 1 este mai sanatos sa-l tratam ca produs mineral selectat, cu specificatie contractuala si compatibilitate cu aplicatiile clientilor.

### Filler micronizat alb 25kg / vrac

Produsul 3 este produsul strategic. Canonicul este:

- calcar Ocnita ca baza de volum si cost
- adaos Volodeni doar daca tinta de alb o cere
- fara sistem de aditivi ca baseline canonic
- focus pe micronizare, PSD, alb, umiditate si cost logistic mic
- aceeasi ruta trebuie sa poata elibera atat `la sac`, cat si `vrac`

Fillerul este tratat initial ca intermediar mineral / GCC, nu ca produs dry-mix cu chimie externa dominanta.

## CAPEX candidate

- moara de micronizare
- statie sortare granulometrica
- transportor surub / transfer inchis pentru pulberi
- dozatoare aditivi pentru glet
- mixer industrial pentru glet si amestecuri pilot
- linie ambalare 20/25kg
- silozuri / buncare materie prima
- filtru praf
- laborator minim

## Configuratie tinta 10kt/an

- moara micronizare: `5 t/h` pentru filler fin
- ruta separata de cernere / agregat decorativ
- ruta separata sau fereastra separata pentru bentonita fina
- mixer: `2 t/ciclu`, aprox. `10 t/h`, folosit mai ales pentru glet
- ambalare: `500-800 saci/h`, reglabil `15-30kg`, folosit pentru `20kg` si `25kg`
- laborator: control granulometrie, umiditate, alb, aderenta / rezistenta dupa standardul produsului
- disciplina linie alba: curatare / schimbare lot pentru produsul premium
- incarcare vrac pentru filler: punct de descarcare dedicat sau big-bag, in functie de clientul industrial

## Decizie used vs new

Echipamentul uzat poate ramane relevant pentru manipulare, silozuri, paletizare si unele componente de sortare.

Pentru micronizare si control granulometric, riscul calitatii poate justifica echipament nou sau refurbished verificat de specialist.

Pentru linia 10kt/an, recomandarea actuala este hibrid: core process nou / verificat, auxiliar uzat sau local unde riscul este mic.
