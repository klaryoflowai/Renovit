---
title: Assumption Register
type: register
status: canonical
owner: Yuri
updated: 2026-04-11
tags:
  - renovit
  - finance
  - assumptions
source_documents: []
linked_decisions:
  - strategic-pivot-cupcini-limestone
open_questions:
  - Care sunt valorile reale obtinute dupa primele validari comerciale si tehnice?
next_action: Valideaza in teren si actualizeaza statusul fiecarei ipoteze.
---

# Assumption Register

| Area | Assumption | Value / Range | Unit | Status | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Product architecture | Canonical phase-1 portfolio | glet 20kg / granule 25kg / filler 25kg-vrac | text | active assumption | strategic pivot | `ETICS` ramane analiza parcata, nu produs canonic |
| Raw material | Main mineral system | calcar Cupcini + bentonita Ocnița | text | canonical | 2026 pivot | proiectul nu mai este pe gips / ipsos |
| Plant location | Preferred hub | Ocnița | text | working assumption | logistics thesis | feroviar + volum + bentonita |
| Volume | Baseline installed capacity | 10000 | t/an | active assumption | browser hub / RFQ | baseline actual pentru simulare |
| Volume | Upper-run scaling case | 1500 | t/luna | scenario | process review | aproximativ `18 kt/an`, nu baseline automat |
| Raw material cost | Volodeni extraction cost | 80-100 lei/t | MDL/t | open | partner discussion | trebuie transpus si in EUR/t |
| Raw material cost | Vrac selling benchmark at quarry | 250 | MDL/t | open | partner discussion | folosit doar ca proxy pana la validare |
| Transfer pricing | Internal raw material valuation rule | cost extractie vs transfer price vs opportunity cost | text | critical open | management decision | regula trebuie aprobata in scris |
| Raw material mix | Glet source split | 25-30% Volodeni / 60-70% Ocnița / 5-10% bentonita | % masa | working assumption | resource-first map | aditivi externi tinuti minim |
| Raw material mix | Granule source split | 90-100% Volodeni / 0-10% Ocnița | % masa | working assumption | resource-first map | produsul valorifica albul si fractiile selectate |
| Raw material mix | Filler source split | 0-30% Volodeni / 70-100% Ocnița | % masa | working assumption | resource-first map | Volodeni intra doar cand albul tinta o cere |
| Processing yield | Qualified feed to finished output | 92-98 | % | working baseline | process validation | `95%` este baseline sanatos pentru modelare |
| Product route | Glet plant format | dry mix only | text | canonical | process validation | apa se adauga pe santier, nu in fabrica |
| CAPEX | Phase-1 hybrid line | 500000-700000 | EUR | estimated | simulation hub | include core process, auxiliaries, laborator si contingenta |
| OPEX fixed | Fixed operating overhead for 10kt/an | 12000-18000 | EUR/luna | working baseline | controller view | `15000 EUR/luna` este default conservator in modele |
| Packaging | Canonical bag sizes | 20 / 25 | kg | active assumption | resource-first architecture | glet 20kg; granule si filler 25kg |
| Sales evidence | Minimum price validation | >=5 price points / produs | count | critical open | market work | preturile din documentele vechi nu sunt surse canonice |
| Sales evidence | Minimum named buyer evidence | >=10 leaduri nominale + >=3 discutii pilot | count | critical open | GTM work | fara asta pilonul Sales & Marketing ramane slab |
| Payment terms | Working collection assumption | 30-60 | zile | open | channel validation | trebuie validate pe tip de client |
| Margin rule | Target gross margin | >=35 | % | canonical | decision rule | sub acest prag scenariul intra in zona fragila |
| Go / No-Go rule | EBITDA monthly | pozitiv | text | canonical | decision rule | impreuna cu payback si marja |

## Reconciliation Priorities

1. Inchide regula de `transfer pricing` pentru Volodeni, Ocnița si bentonita.
2. Valideaza costurile fixe reale pentru structura de `10kt/an`.
3. Valideaza preturile angro pe fiecare produs cu clienti numiti si surse datate.
4. Valideaza product mix-ul realist, cu filler dominant in volum.
5. Valideaza randamentul tehnic si costul total de procesare pe fiecare ruta.
