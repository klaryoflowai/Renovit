---
title: Financial Control Dashboard
type: tool-hub
status: canonical
owner: Yuri
updated: 2026-04-10
tags:
  - renovit
  - finance
  - cash-flow
  - funds
  - balance-sheet
source_documents:
  - /Users/yuritimofte/Downloads/Гденьги.pdf
linked_decisions:
  - D-001
open_questions:
  - Ce procente de fonduri vor fi validate dupa primele luni de incasari reale?
  - Ce conturi bancare / subconturi vor fi folosite fizic pentru separarea fondurilor?
  - Cine este owner-ul procedurii saptamanale de distribuire a banilor?
next_action: Foloseste dashboard-ul dupa fiecare runda de incasari reale si ajusteaza procentele pe baza datelor contabile.
---

# Financial Control Dashboard

Acesta este dashboard-ul operational pentru controlul banilor RENOVIT.

## Browser tool

- https://renovit.klaryoflowai.workers.dev/dashboard-financiar.html

## Framework adaptat din carte

Cartea propune o disciplina simpla: lucram cu banii incasati efectiv, nu cu venituri estimate, si ii distribuim pe fonduri inainte de a aproba plati.

Pentru RENOVIT, adaptarea pentru productie este:

1. `Venit incasat` -> fonduri directe: materie prima, procesare, aditivi, ambalaj 25kg, manopera directa, logistica.
2. `Marja` -> fonduri de profit si control: taxe, fondator / ROI, rezerve long-term, CAPEX / proiecte noi, comisioane, obligatii, reactie rapida.
3. `Venit ajustat` -> fonduri operationale: UPR, promovare, training + calitate, client delivery, corporate / buffer.

## Ce calculeaza dashboard-ul

- cash-flow saptamanal
- bani disponibili pentru distribuire
- alocare pe fonduri
- venit necesar pentru acoperirea fondurilor
- gap fata de incasarile curente
- balance sheet simplificat
- P&L operativ / profit bridge
- working capital
- current ratio
- debt / equity
- runway cash
- risc de leakage intre fonduri

## Coșuri / conturi recomandate

- cont venituri
- cont plati operationale
- cont fonduri rezervate
- cont rezerve long-term
- cont avansuri / escrow
- cont comisioane, daca apar canale de vanzare externe

## Regula de operare

Nicio plata nu se aproba doar pentru ca exista cash in cont.

Plata se aproba doar daca exista bani in fondul tinta.

## Procedura saptamanala

1. Colecteaza incasarile reale.
2. Colecteaza cererile de plata.
3. Actualizeaza solduri, creante, datorii si fonduri reportate.
4. Distribuie banii pe fonduri.
5. Aproba sau respinge fiecare cerere de plata.
6. Muta banii in conturile potrivite.
7. Verifica platile executate si neexecutate la final de saptamana.

## Important

Acest dashboard nu inlocuieste contabilitatea legala.

Este un instrument managerial de disciplina cash, prioritate si decizie.
