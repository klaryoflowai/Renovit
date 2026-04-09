# GitHub And Cloudflare Pages

## Recommendation

Pentru acest proiect, GitHub + Cloudflare Pages este cea mai buna combinatie daca vrei:

- URL public shareable
- versioning curat
- deploy automat la fiecare schimbare
- preview-uri pe modificari ulterioare

## De ce se potriveste aici

Aplicatia este un static site simplu, iar `index.html` exista deja la radacina proiectului.

## Setup recomandat

1. Creezi repository pe GitHub.
2. Urca acest folder in repo.
3. Conectezi repo-ul in Cloudflare Pages.
4. Setezi:
   - production branch: `main`
   - build command: `exit 0`
   - build output directory: radacina proiectului, adica folderul in care sta `index.html`

## Note importante

- Daca folosesti Git integration in Pages, proiectul nu poate fi convertit ulterior la Direct Upload.
- Daca folosesti Direct Upload, nu il poti converti ulterior la Git integration; trebuie creat un proiect nou.
- Pentru un site static, Cloudflare recomanda o comanda de build de tip `exit 0` daca nu ai nevoie de build real.
- Pentru a evita erori `404`, trebuie sa existe un `index.html` la radacina output-ului.

## Custom domain

- pentru un subdomain, il poti lega la proiectul Pages
- pentru un apex domain, zona trebuie gestionata in Cloudflare

## Operational advice

Faza 1:

- pune proiectul pe GitHub
- conecteaza-l la Cloudflare Pages
- foloseste `*.pages.dev`

Faza 2:

- adauga custom domain doar dupa ce continutul si calculatorul sunt stabile
