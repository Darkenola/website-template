# Skyzon Template Vault

Turkish README: [README.tr.md](README.tr.md)

This repository contains a static showcase website and 25 personal website templates built with HTML, CSS, and in some cases JavaScript.

![Showcase preview](previews/showcase-home.png)

## Overview

- Root showcase homepage with live preview cards
- 25 standalone multi-page templates
- Pages included in each template:
  - `index.html`
  - `hakkimda.html`
  - `fotograflar.html`
  - `hobilerim.html`
  - `iletisim.html`
- Dedicated `style.css` for every template
- Extra `script.js` effects in hacker-themed templates `template-21` to `template-25`
- Generated preview images inside `previews/`

## Root Showcase

The root files power the preview system:

- `index.html`: main gallery homepage
- `style.css`: showcase styling
- `script.js`: search, filter, and live iframe preview logic

Users can browse templates, filter them by style, search by name, and open any template directly from the gallery.

## Project Structure

```text
.
|-- .github/
|-- index.html
|-- previews/
|-- style.css
|-- script.js
|-- template-1
|-- template-2
|-- ...
|-- template-25
|-- CHANGELOG.md
|-- release-notes-v1.0.0.md
`-- README.tr.md
```

## GitHub Ready Files

- `.gitignore` for local cache, logs, and archive outputs
- `.github/workflows/deploy-pages.yml` for GitHub Pages deployment
- `.github/workflows/release-package.yml` for automatic zip releases on `v*` tags
- `previews/` for repository preview images
- `CHANGELOG.md` and `release-notes-v1.0.0.md` for release documentation

## How to Use

1. Open the root `index.html` to view the showcase homepage.
2. Browse the template cards and click `Ac` or `Yeni Sekme`.
3. Open any template folder directly if you want to work on a specific design.

For the best preview experience, run the project through a local server instead of opening files only with `file://`.

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Deployment

This project is fully static and already includes a GitHub Pages workflow.

1. Push the repository to GitHub.
2. Keep your default branch as `main` or `master`.
3. Open `Settings > Pages` and choose `GitHub Actions` if GitHub asks for a source.
4. Push changes to the default branch.
5. Wait for the `Deploy GitHub Pages` workflow to finish.

The root `index.html` will work as the homepage of the project.

## Preview Assets

- `previews/showcase-home.png` contains the root gallery screenshot.
- `previews/overview-grid.png` contains a combined 25-template overview image.
- `previews/template-1-home.png` through `previews/template-25-home.png` contain per-template screenshots.

## First Release

- Local release bundle: `release-assets/skyzon-template-vault-v1.0.0.zip`
- SHA256 checksum: `release-assets/SHA256SUMS.txt`
- Release notes: `release-notes-v1.0.0.md`

For future GitHub releases, create and push a tag such as `v1.0.0`. The `Build Release Package` workflow will generate and attach the zip automatically.

## Notes

- Templates are independent from each other.
- Hacker templates include animated JavaScript effects.
- Multiple files contain `SKYZON DEVELOPMENT` comments as requested.
