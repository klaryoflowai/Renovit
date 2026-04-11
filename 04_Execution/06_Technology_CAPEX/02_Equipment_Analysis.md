---
title: Equipment Analysis
type: working-note
status: working
owner: Yuri
updated: 2026-04-11
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
next_action: Aduna minimum 3 oferte comparabile pentru linia recomandata de 10kt/an.
---

# Equipment Analysis

## Equipment groups

Analiza echipamentelor trebuie impartita in patru grupuri:

1. `Core process`: micronizare, sortare granulometrica, mixer, dozare aditivi
2. `Commercial readiness`: linie ambalare 20/25kg, cusut, printer, paletizare
3. `Infrastructure`: silozuri, praf / filtre, electric, aer comprimat / utilitati, warehouse
4. `Quality control`: laborator minim si teste externalizate

## Baseline actual - 10kt/an

Contextul curent pentru RFQ:

- capacitate tinta: `10.000 t/an` produs finit
- produse: glet mineral de baza 20kg, granule decorative selectate 25kg, filler micronizat alb 25kg / vrac
- ambalare: linie reglabila `15-30kg`, cu lucru real pe `20kg` si `25kg`
- strategie recomandata: `hibrid`, cu echipamente noi / puternic verificate pe punctele critice si uzat pe auxiliar

## Faza 1 - Micronizare + sortare

| Echipament | Capacitate | UZAT | HIBRID | NOU | Observatie |
|---|---:|---:|---:|---:|---|
| Moara micronizare | 5 t/h sub 100 microni | 60-90k EUR | 100-140k EUR | 180-250k EUR | Bottleneck de calitate pentru glet |
| Sita vibratii / classifier | 5 t/h, 0.1-2 mm | 15-25k EUR | 30-40k EUR | 50-70k EUR | Critic pentru granule decorative si sortare filler |
| Transportor surub | 10 t/h | 8-12k EUR | 15-20k EUR | 25-35k EUR | Atentie la praf si etansare |

Subtotal orientativ: `83-127k EUR` uzat, `145-200k EUR` hibrid, `255-355k EUR` nou.

## Faza 2 - Mixare + dozare

| Echipament | Capacitate | UZAT | HIBRID | NOU | Observatie |
|---|---:|---:|---:|---:|---|
| Mixer industrial | 2 t ciclu / aprox. 10 t/h | 25-40k EUR | 50-70k EUR | 90-130k EUR | Recomandat hibrid |
| Dozatoare aditivi | 4 componente | 10-15k EUR | 20-30k EUR | 40-60k EUR | Precizie tintita +/-0.5% |
| Balanta dozare | 2 t | 5-8k EUR | 10-15k EUR | 20-25k EUR | Necesita calibrare |

Subtotal orientativ: `40-63k EUR` uzat, `80-115k EUR` hibrid, `150-215k EUR` nou.

## Faza 3 - Ambalare hibrida 20/25kg

| Echipament | Capacitate | UZAT | HIBRID | NOU | Observatie |
|---|---:|---:|---:|---:|---|
| Linie umplere reglabila | 600 saci/h, 15-30kg | 40-60k EUR | 80-120k EUR | 150-220k EUR | Esential pentru 20kg + 25kg |
| Cusator / sealer saci | 600 saci/h | 5-8k EUR | 12-18k EUR | 25-35k EUR | Depinde de tip sac |
| Etichetator / printer | 600 saci/h | 3-5k EUR | 8-12k EUR | 15-25k EUR | Trasabilitate si conformitate |
| Paletizator semi-auto | 1 palet / 5 min | 15-25k EUR | 35-50k EUR | 70-100k EUR | UZAT poate fi OK la start |

Subtotal orientativ: `63-98k EUR` uzat, `135-200k EUR` hibrid, `260-380k EUR` nou.

## Infrastructura auxiliara obligatorie

| Componenta | Cost orientativ | Observatie |
|---|---:|---|
| Silo calcar brut | 20-30k EUR | 200 t |
| Silo produs finit | 15-25k EUR | 100 t |
| Racordare electrica | 10-15k EUR | 315 kW trifazat, de verificat prin audit |
| Racordare apa | 5-8k EUR | 10 m3/zi |
| Laborator calitate | 25-35k EUR | PSD, alb, umiditate, granulometrie si lot consistency; testele functionale pe glet se pot externaliza la inceput |
| Birou + vestiar | 10-15k EUR | daca infrastructura existenta nu ajunge |

Subtotal auxiliar: `85-128k EUR`.

## Total CAPEX inainte de rezerve

| Scenariu | Core echipament | Auxiliar | Total orientativ inainte de reparatii / contingency | Verdict |
|---|---:|---:|---:|---|
| UZAT | 186-288k EUR | 85-128k EUR | 271-416k EUR | Start rapid, risc tehnic ridicat |
| HIBRID | 360-515k EUR | 85-128k EUR | 445-643k EUR | Baseline recomandat pentru RFQ |
| NOU | 665-950k EUR | 85-128k EUR | 750-1,078k EUR | Mai logic pentru scalare / 20kt+ |

Nota: cifra `450k EUR` este utila ca tinta de negociere pentru scenariul hibrid, dar nu trebuie tratata ca buget complet final pana nu stim ce infrastructura exista deja la Volodeni / Cupcini.

## Configuratie hibrida recomandata

Core nou / foarte bine verificat:

- linie umplere reglabila 20/25kg
- moara de micronizare sub 100 microni
- mixer industrial 2 t cu dozare controlata

Auxiliar uzat / local, daca trece inspectia:

- sita vibratii / classifier
- transportoare / silozuri
- paletizator semi-auto
- birou / vestiar daca exista infrastructura disponibila

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
- `data/finance/simulation/equipment-strategy-costs.csv`

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

Nu folosim in pitch expresia `profit confirmat` pana nu avem:

- RFQ-uri ferme de la furnizori
- preturi angro confirmate
- retete testate
- randament real si cost real de operare
