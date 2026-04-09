# RENOVIT - Gips Edinet

Acest repository combina doua lucruri:

1. Un calculator browser-ready pentru unit economics.
2. Un project second brain pentru research, due diligence, decizii si executie.

## Structura

- `index.html` - versiunea statica, gata pentru browser si Cloudflare Pages.
- `gips-unit-economics.jsx` - sursa React a calculatorului.
- `brain/` - knowledge base-ul proiectului.
- `data/` - fisiere de lucru pentru costuri, competitie, preturi si scenarii.
- `deployment/` - note pentru GitHub + Cloudflare Pages.

## Cum folosesti proiectul local

### Browser direct

Deschide `index.html` in browser.

### Server local recomandat

Din folderul proiectului ruleaza:

```bash
python3 -m http.server 8000
```

Apoi deschide:

`http://localhost:8000`

## Cum folosesti second brain-ul

Porneste cu:

- `brain/00-project-map.md`
- `brain/01-context/overview.md`
- `brain/03-finance/unit-economics.md`

Completeaza in paralel:

- `data/finance/operating-costs.csv`
- `data/finance/capex-offers.csv`
- `data/market/distributor-benchmarks.csv`
- `data/market/competitor-scan.csv`

## Deploy recomandat

Pentru share public si iteratii rapide:

- GitHub pentru versioning
- Cloudflare Pages pentru hosting static

Detalii:

- `deployment/github-cloudflare-pages.md`

