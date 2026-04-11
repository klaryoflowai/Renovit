---
title: Process Validation Memo - Limestone Finishing Materials
type: validation-note
status: canonical
owner: Yuri
updated: 2026-04-11
tags:
  - renovit
  - quality
  - process-validation
  - limestone
  - finishing-materials
source_documents:
  - /Users/yuritimofte/Downloads/Proces tehnologic.docx
  - /Users/yuritimofte/Downloads/mina DIN cUPCINI- prezentarea INTREPRINDERII.pdf
  - https://cdnmedia.mapei.com/docs/librariesprovider2/products-documents/1_00477_mapetherm-ar1-gg_en_44968289c1974f9cb477859874f6f4c1.pdf?sfvrsn=5ac0c9e2_0
  - https://www.wacker.com/h/en-us/medias/VINNACEL-871-en-2024.06.16.pdf
  - https://www.dow.com/en-us/pdp.walocel-mks-10000-pf60-cellulose-ether.112030z.html
  - https://standards.iteh.ai/catalog/standards/cen/48998e72-43b4-4ab9-9385-a9399c2c4689/en-12004-1-2017
  - https://standards.iteh.ai/catalog/standards/cen/af3b76ed-2a1c-4e92-9130-a8759424fa43/en-15824-2017
linked_decisions:
  - strategic-pivot-cupcini-limestone
open_questions:
  - Care este familia exacta pentru SKU-ul numit acum "adeziv 25kg": tile adhesive sau mortar adeziv / masa de spaclu ETICS?
  - Cine valideaza retetele de laborator pentru loturile pilot faza 1?
  - Ce laborator poate testa rapid conformitatea pe EN 998-1 si EN 12004?
next_action: Foloseste acest memo ca filtru obligatoriu pentru orice scenariu CAPEX, reteta, model financiar sau pitch comercial.
---

# Process Validation Memo - Limestone Finishing Materials

## Verdict executiv

Procesul nou pe calcar este viabil ca directie industriala, dar numai daca il tratam ca sistem de produse diferite, nu ca o singura pulbere care devine orice.

Concluziile canonice sunt:

1. Nu exista calcinare in ruta actuala.
2. Gletul, decorativa si adezivul nu au aceeasi logica de binder.
3. Decorativa are nevoie de fractii granulometrice dedicate, nu doar de filler ultrafin.
4. In faza 1, configuratia realista este productie pe campanii cu `1-2 mixere` si o `linie flexibila 20kg / 25kg`, nu `3 linii dedicate`.
5. "Adeziv 25kg" trebuie definit exact, pentru ca traseul de conformitate difera intre `adeziv pentru placi` si `mortar adeziv / masa de spaclu pentru ETICS`.

## Ce era gresit sau prea agresiv in propunerea initiala

- trata `67.000 saci / luna` ca rezultat aproape garantat, fara validare de reteta, timp de schimbare lot, pierderi si constrangeri reale de ambalare
- trata `75% randament` ca baseline general, ceea ce nu este canonic pentru dry-mix pe calcar relativ uscat
- trata fillerul de calcar ca binder suficient pentru produse care in practica au nevoie de ciment alb, var hidratat, polimeri si celuloza
- trata decorativa ca derivat direct din aceeasi pulbere ultrafina ca gletul
- presupunea retete fixe inainte de alegerea standardului si a intended use-ului

## Matrice canonica produs cu produs

| Produs faza 1 | Rolul calcarului | Sistem de binder canonic | Familie standard de lucru | Teste QC obligatorii | Ce ramane de validat in laborator |
|---|---|---|---|---|---|
| Glet mineral extra-alb `20kg` | filler ultrafin alb, control culoare si finete | calcar micronizat + var hidratat si / sau ciment alb + eter de celuloza + polimer redispersabil + aditivi de lucrabilitate | `EN 998-1` daca ramane mortar mineral de finisare; alt standard doar daca schimbam intended use-ul | granulometrie fina, grad de alb, umiditate, densitate aparenta, consum apa, lucrabilitate, aderenta pe suport, rezistenta la compresiune / incovoiere daca se cere de reteta, aspect dupa uscare | daca Volodeni da alb suficient pentru promisiunea `extra-alb`; ce combinatie reala de var / ciment alb functioneaza; daca produsul ramane cu adevarat dry-mix mineral |
| Tencuiala decorativa minerala `25kg` | filler + fractii decorative controlate | binder mineral daca ramane mortar uscat mineral; ruta organica se analizeaza separat | `EN 998-1` pentru mortar mineral; `EN 15824` doar daca produsul devine render / plaster pe baza de lianti organici sau sistem tip pasta / organic powder | distributie granulometrica pe fractii, umiditate, grad de alb / culoare, aderenta, absorbtie apa, permeabilitate la vapori, lucrabilitate pe suport, aspect final textura | daca produsul va fi mineral sau organic; ce fractii decorative pot fi tinute stabil din Volodeni / Ocnita; ce culoare si textura sunt vandabile fara pigmentare scumpa |
| Adeziv `25kg` | filler functional, ajustare reologie si cost | doua rute posibile: `A.` adeziv pentru placi cu ciment + filler / nisip selectat + celuloza + polimer; `B.` mortar adeziv / masa de spaclu ETICS cu ciment + filler + fibre / polimer + aditivi, in functie de sistem | `EN 12004` daca SKU-ul este adeziv pentru placi; daca SKU-ul este mortar adeziv / spaclu pentru ETICS, familia de conformitate se schimba si nu trebuie fortata in aceeasi caseta | aderenta initiala, aderenta dupa apa / caldura / inghet daca se urmareste clasa respectiva, open time, slip, lucrabilitate, retentie apa, granulometrie, umiditate | ce familie de produs vrem de fapt sa lansam; daca bentonita are un rol real sau doar experimental; ce clasa de performanta urmarim si ce pret o sustine |

## Reguli procesuale care raman adevarate pentru toate SKU-urile

### 1. Linia alba trebuie protejata

Pentru gletul premium si orice SKU cu promisiune de alb ridicat, disciplina de contaminare devine critica:

- curatare intre campanii
- separare flux fractii decorative vs flux ultrafin
- control praf, rugina si particule inchise la culoare

### 2. Productia faza 1 trebuie gandita pe campanii

Modelul realist este:

- backbone comun de pregatire materie prima
- o ruta ultrafina pentru glet / filler fin
- o ruta separata de cernere pentru decorative
- `1-2 mixere`
- `1 linie de ambalare flexibila 20kg / 25kg`

### 3. Randamentul de modelare trebuie corectat

Pentru dry-mix pe calcar, fara calcinare si cu manipulare buna, intervalul de lucru mai credibil este:

- `92-98%` recuperare de masa

Cobori sub acest nivel numai daca apar:

- umiditate ridicata
- multe rebuturi la clasificare
- contaminare
- pierderi semnificative la transfer si ambalare

### 4. Bentonita nu devine automat ingredient canonic

Bentonita poate fi:

- aditiv functional in unele retete
- tema de laborator
- avantaj secundar al ecosistemului Cupcini

Nu trebuie insa tratata ca schelet obligatoriu al fiecarui produs.

## Ghid rapid de decizie pentru "adeziv 25kg"

Inainte sa continuam cu costare, CAPEX sau preturi, trebuie inchisa o singura intrebare:

`Ce inseamna exact SKU-ul "adeziv 25kg"?`

Scenariile sunt:

1. `Adeziv pentru placi ceramice` -> mergem pe logica `EN 12004`, cu sistem cimentic si polimeri.
2. `Mortar adeziv / masa de spaclu pentru ETICS` -> alta familie tehnica si alta mapa de testare.
3. `Mortar de uz general` -> nu are voie sa fie costuit sau vandut sub eticheta de adeziv premium daca performanta nu sustine promisiunea.

## Gate-uri obligatorii inainte de CAPEX final

- lot pilot pentru fiecare familie de produs
- laborator pe calcar Volodeni si pe fluxul Ocnita
- reteta preliminara aprobata de tehnolog
- intended use clar pe fiecare SKU
- mapare la standardul corect
- pret angro validat pe SKU-ul real, nu pe o denumire generica

## Cum folosim memo-ul in vault

Acest document trebuie citit impreuna cu:

- [[04_Execution/06_Technology_CAPEX/07_Limestone_Finishing_Process]]
- [[05_Quality/06_Limestone_Finishing_Materials_Standards]]
- [[05_Quality/03_Lab_Tests_And_Document_Checklist]]
- [[07_Meetings/2026-04-10_Volodeni_First_Visit/02_Question_Pack_Volodeni]]

Regula de lucru este simpla:

orice ipoteza din finante, echipamente sau meetinguri care contrazice acest memo trebuie revizuita inainte sa devina canonica.
