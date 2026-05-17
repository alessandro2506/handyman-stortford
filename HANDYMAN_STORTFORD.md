# HANDYMAN_STORTFORD.md — Pasquale Rocchida

> Creato: Maggio 2026

---

## DATI CLIENTE

| Campo | Valore |
|---|---|
| Nome | Pasquale Rocchida — brand: **QuickFix Property Maintenance** |
| Settore | Handyman / Home Maintenance |
| Località | Bishop's Stortford, Hertfordshire, UK |
| WhatsApp | +44 7746 187685 (UK) → https://wa.me/447746187685 |
| Email | da definire |
| Telefono | da definire |
| Stato contratto | Nessuno — preventivo da effettuare in seconda fase |

---

## PROGETTO

| Campo | Valore |
|---|---|
| Tipo | Sito vetrina Next.js 16 |
| Stack | Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion |
| Remote origin | https://github.com/alessandro2506/handyman-stortford (account personale, collegato a Vercel) |
| Remote alvenco | https://github.com/AlvencoLtd/handyman-stortford (org, archivio sincronizzato) |
| Deploy demo | https://handyman-stortford.vercel.app |
| Dominio finale | da acquistare (incluso nel preventivo) — candidato: handymanstortford.co.uk |
| Benchmark design | alvenco-demo.vercel.app |

---

## SITEMAP

1. Home
2. Services
3. Areas Covered
4. About
5. Gallery
6. Reviews
7. Contact

---

## FEATURE SET

- Hero con CTA doppia (Get a Quote + WhatsApp)
- Floating WhatsApp button fisso (wa.me/393209708536)
- Scroll-to-top con effetto ring (REGOLA GLOBALE Alvenco)
- Sezione servizi con card (6 servizi)
- Sezione aree servite
- Sezione About
- Sezione recensioni (placeholder)
- Galleria lavori (placeholder Unsplash handyman)
- Form contatto
- SEO locale on-page (meta title/description per ogni pagina)
- Schema markup LocalBusiness (JSON-LD)

---

## SEO TARGET

- handyman Bishop's Stortford
- local handyman Bishop's Stortford
- home maintenance Bishop's Stortford
- property maintenance Bishop's Stortford
- small repairs Bishop's Stortford
- furniture assembly Bishop's Stortford

---

## SERVIZI DA RAPPRESENTARE

1. Small Repairs
2. Furniture Assembly
3. Wall Fixing & Shelving
4. Painting & Decorating
5. Plumbing
6. Electrical
7. Garden Maintenance
8. Laminated Flooring
9. Property Maintenance

---

## GIT & DEPLOY

### Struttura remote
- **`origin`**: `github.com/alessandro2506/handyman-stortford` — repo personale, collegata a Vercel (Hobby plan compatibile)
- **`alvenco`**: `github.com/AlvencoLtd/handyman-stortford` — org, archivio sincronizzato manualmente
- **Push standard**: `git push origin main && git push alvenco main`

### STEP 1 — Repo personale (Cursor)
```bash
# Prima crea repo su https://github.com/new
# Account: alessandro2506 | Nome: handyman-stortford | Visibilità: public
git init
git add .
git commit -m "feat: initial handyman site"
git remote add origin https://github.com/alessandro2506/handyman-stortford.git
git push -u origin main
```

### STEP 2 — Mirror org AlvencoLtd (Cursor)
```bash
# Prima crea repo su https://github.com/orgs/AlvencoLtd/repositories
# Nome: handyman-stortford | Visibilità: public
git remote add alvenco https://github.com/AlvencoLtd/handyman-stortford.git
git push alvenco main
```

### STEP 3 — Vercel (Alex)
- Vai su https://vercel.com/new
- Importa `alessandro2506/handyman-stortford` (account personale — NON l'org)
- Framework: Next.js — Root directory: vuota
- Project name: `handyman-stortford`
- Deploy e verifica 200 su https://handyman-stortford.vercel.app

### STEP 4 — Aggiorna HANDYMAN_STORTFORD.md (Cursor)
- **Completato (2026-05-16)**: URL Vercel documentato sopra; changelog aggiornato in fondo al file.

> **Nessuna GitHub Action, nessun PAT, nessun Secret.** Pattern standard Alvenco: doppio remote manuale.

---

## STATO AVANZAMENTO

- [x] Brief analizzato
- [x] File .md creato
- [x] CLAUDE.md aggiornato
- [x] Prompt Cursor generato
- [x] Repo personale `alessandro2506/handyman-stortford` creata e pushata (`origin`)
- [x] Repo org `AlvencoLtd/handyman-stortford` disponibile come mirror (`alvenco`)
- [x] Sviluppo Next.js avviato
- [ ] Deploy Vercel (collegato a repo personale)
- [ ] Revisione con cliente
- [ ] Contratto e preventivo

---

## CONTENUTI

- **Immagini**: placeholder Unsplash via URL diretto (tema handyman/home maintenance)
- **Foto cliente**: nessuna disponibile — da richiedere in fase definitiva
- **Testi**: in inglese, tone of voice professionale/locale/diretto

---

## NOTE OPERATIVE

- Numero WhatsApp attuale è italiano (+39) — da sostituire con UK definitivo prima del go-live
- Dominio da acquistare in seconda fase, incluso nel preventivo
- Nessun modello di pricing da implementare sul sito
- Brand ufficiale: **QuickFix Property Maintenance** (non "Pasquale Rocchida Handyman")
- Logo: immagine PNG fornita da Facebook — da salvare in `/public/logo-quickfix.png`
- Palette brand estratta dal logo:
  - `--primary: #1A3A6B` (blu navy)
  - `--primary-mid: #1B75BC` (blu medio)
  - `--accent: #6DBE45` (verde lime)
  - `--accent-dark: #2E7D32` (verde scuro)
  - `--text-secondary: #4A4A4A`
- Facebook: https://www.facebook.com/profile.php?id=61587750327501
- Dati servizi centralizzati in `src/lib/services.ts` (HOME_PREVIEW_SERVICES + SERVICES) — non duplicati nei componenti
- Dati gallery centralizzati in `src/lib/gallery.ts` (GALLERY_ITEMS)
- `allowFullScreen` con S maiuscola in JSX/TSX — `allowFullscreen` lowercase causa build error (ERR React/TS)
- Ultimo commit push: `74695bc` — fix images, gallery captions, areas map embed

---

## Changelog

| Data | Modifica |
|---|---|
| Maggio 2026 | File creato — progetto avviato, brief analizzato |
| Maggio 2026 | Sezione GIT & DEPLOY corretta: doppio remote manuale (origin + alvenco), nessuna GitHub Action — pattern standard Alvenco da TUZZOLINO |
| 16 Maggio 2026 | Fix immagini non pertinenti (Small Repairs, Wall Fixing, General Handyman Jobs) via src/lib/services.ts; gallery 9 slot con didascalie via src/lib/gallery.ts; mappa Areas SVG sostituita con iframe Google Maps reale. Commit: 74695bc |
