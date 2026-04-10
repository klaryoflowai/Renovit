---
title: EN13279 Master Framework
type: canonical-note
status: canonical
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - quality
  - en13279
  - master-brief
source_documents:
  - /Users/yuritimofte/Downloads/Cadru_complet_calitate_gips_EN13279.md
  - /Users/yuritimofte/Downloads/Cadru_complet_calitate_gips_EN13279 (1).md
  - Regulation (EU) 2024/3110
  - European Commission CPR harmonised standards page
  - Official Journal reference to EN 13279-1:2008
linked_decisions: []
open_questions:
  - Ce elemente din cadrul atasat trebuie validate in textul licentiat al standardului?
next_action: Foloseste aceasta nota ca single-doc briefing pentru due diligence de calitate, dar valideaza separat elementele marcate ca working interpretation.
---

# EN13279 Master Framework

Aceasta este nota unica de sinteza pentru `Quality` atunci cand vrem tot contextul intr-un singur loc.

Nota: fisierul `/Users/yuritimofte/Downloads/Cadru_complet_calitate_gips_EN13279 (1).md` este identic cu fisierul importat anterior `/Users/yuritimofte/Downloads/Cadru_complet_calitate_gips_EN13279.md`, deci pastram un singur master framework pentru a evita duplicatele in Obsidian.

Rolul ei nu este sa inlocuiasca toate notele suport, ci sa ofere un singur document de lucru pentru:

- first-pass due diligence
- discutii cu partenerii
- pregatirea meetingurilor
- legatura dintre cariera, produs final si traseul UE / CE

## Confidence legend

- `Official`: ancorat in surse primare oficiale deja verificate in vault
- `Working interpretation`: util pentru analiza si design de sistem, dar nu inca validat complet din textul licentiat al standardului
- `Open validation`: punct care trebuie confirmat cu laborator, consultant sau standardul complet

## 1. Official regulatory anchors

### Current EU legal frame

`Official`

- cadrul legal UE actual pentru produse de constructii este `Regulation (EU) 2024/3110`
- acesta abroga `Regulation (EU) No 305/2011`
- pentru RENOVIT asta inseamna ca trebuie sa tratam orice plan de export si conformitate prin logica noului CPR, cu atentie la aplicarea etapizata

### What the EU regulates directly

`Official`

UE reglementeaza produsul final pus pe piata, nu puritatea gipsului brut ca atare.

Asta inseamna:

- chimia materiei prime este un `internal gate`
- conformitatea UE se joaca la nivel de produs final
- declaratia de performanta, standardul armonizat si testele produsului final raman centrale

### Relevant harmonised-standard references already anchored in vault

`Official`

- `EN 13279-1:2008` pentru `Gypsum binders and gypsum plasters`
- `EN 520:2004+A1:2009` pentru `Gypsum plasterboards`

Pentru RENOVIT faza 1, ruta prioritara ramane `tencuiala / glet`, deci focusul principal ramane pe familia `EN 13279`.

## 2. RENOVIT Stage 1 internal gate

`Working threshold`

Pana la validarea completa a standardului licentiat si a produsului final, regula interna de screening ramane:

- `CaSO4·2H2O >= 90%` = zona buna pentru a continua analiza
- `85-89%` = zona conditionata
- `< 85%` = red flag pentru teza actuala
- `Fe2O3 <= 0.5%` = working target pentru culoare / vandabilitate
- `SiO2 <= 3%` = working target pentru ruta standard

Aceasta regula este buna pentru `Go / No-Go` preliminar, nu pentru concluzie de conformitate UE.

## 3. Working interpretation from the attached EN13279 framework

Urmatoarele puncte sunt suficient de utile incat merita pastrate intr-un singur document, dar trebuie tratate ca `working interpretation` pana la validare oficiala.

### EN 13279 series structure

`Working interpretation`

Fisierul atasat descrie:

- `EN 13279-1:2008` ca document de definitii, specificatii si clasificare
- `EN 13279-2:2014` ca document de metode de testare

Pentru RENOVIT, directia este corecta conceptual si merita pastrata in sistem.

Totusi, formularea exacta a rolurilor, versiunilor si relatiei lor in traseul actual de conformitate trebuie validata in standardul licentiat sau cu laboratorul.

### Proposed class logic for the plaster route

`Working interpretation`

Fisierul atasat propune:

- `Class A` pentru zona premium
- `Class B` pentru `tencuiala / glet standard`
- `Class C` pentru zona economica

Pentru teza RENOVIT, intentia strategica ramane foarte buna:

- daca vrem produsul initial comparabil cu tencuiala standard comerciala, tinta interna este o `ruta echivalenta cu zona Class B`

Dar:

- maparea exacta `Class A/B/C` la praguri de puritate si ferestre de performanta trebuie validata din textul standardului

### Proposed technical windows to retain for working use

`Working interpretation`

Merita sa pastram in memorie operationala urmatoarele tinte din documentul atasat:

- pentru ruta standard de tencuiala:
  - inceput de intarire intr-o fereastra controlata
  - rezistenta minima la compresiune
  - finete rezonabila
- ideea centrala: produsul nu este judecat doar dupa chimie, ci dupa performanta

Asta este foarte valoros pentru business, chiar daca valorile exacte trebuie revalidate.

### Proposed EN 13279-2 test pack

`Working interpretation`

Fisierul atasat propune un pachet de teste care acopera:

- timp de intarire
- compozitie chimica
- rezistenta la compresiune
- finete
- umiditate
- densitate si alti parametri de control

Ca principiu, aceasta structura trebuie retinuta.

Ca detaliu oficial, trebuie validat:

- daca lista exacta de teste
- numerotarea capitolelor
- valorile tinta
- si rolul fiecarui test in traseul CE

sunt reproduse fidel.

## 4. What is useful from the attached file and should stay

Aceste idei merita clar pastrate in vault:

1. Nu pornim business-ul doar de la rezerve, ci de la `quality + process + product + market`.
2. Pentru ruta de tencuiala, `>= 90% CaSO4·2H2O` ramane un prag intern foarte util.
3. Culoarea si impuritatile sunt critice comercial, nu doar tehnic.
4. Fara laborator si teste reale, discutiile despre UE / CE sunt premature.
5. Daca vrem o poveste de export, trebuie gandit din prima traseul de testare si documentatie.

## 5. What must not be treated as canon yet

Punctele de mai jos sunt valoroase, dar nu trebuie puse in sistem ca adevar final pana la validare:

- tabela exacta `Class A / B / C` cu praguri fixe de puritate
- lista exacta a celor `8 teste obligatorii` in forma actuala din fisier
- formula de calcul si pragurile exprimate pentru compozitia chimica
- limitele de impuritati tratate ca si cum ar fi standard legal explicit
- `AVCP Sistem 3` ca verdict final fara verificare pe familia exacta de produs
- orice afirmatie de tip `marcaj CE valabil 10 ani` fara baza oficiala confirmata

## 6. Single-doc operating conclusion for RENOVIT

Daca vrem un singur document de lucru, acesta este verdictul practic:

1. Cerem imediat analiza de laborator si metoda de prelevare.
2. Comparam materia prima cu pragurile interne:
   - `CaSO4·2H2O`
   - `Fe2O3`
   - `SiO2`
   - consistenta intre probe
3. Alegem produsul initial:
   - cel mai probabil `tencuiala / glet standard`
4. Discutam cu laborator / consultant:
   - ce standarde licentiate sunt necesare
   - ce teste pe produs final trebuie facute
   - ce traseu de conformitate se aplica efectiv
5. Abia dupa asta legam:
   - unit economics
   - CAPEX
   - comercial
   - export

## 7. Meeting-ready checklist

Pentru primul meeting, acest document trebuie sa ne fixeze disciplina:

- cerem analiza chimica, nu descrieri generale
- cerem valoarea minima dintre probe, nu doar cea mai buna
- cerem clarificarea prelevarii
- cerem orice test pe produs finit sau lot pilot
- cerem dovezi pentru orice afirmatie despre export, CE sau standard UE

## 8. Linked notes

- [[05_Quality/00_Quality_System]]
- [[05_Quality/01_Raw_Gypsum_Working_Thresholds]]
- [[05_Quality/02_EU_Standards_And_CE_Path]]
- [[05_Quality/03_Lab_Tests_And_Document_Checklist]]
- [[05_Quality/04_Product_Quality_Targets]]
- [[07_Meetings/2026-04-09_First_Quarry_Meeting/02_Question_Pack]]
- [[99_Archive/Raw_Documents/Cadru_complet_calitate_gips_EN13279_source]]
