# Achraf Maalaoui — Portfolio

Personal professional portfolio for **Achraf Maalaoui**, DevOps & Platform Engineer (AWS · Kubernetes · Terraform), hosted on **GitHub Pages**.

🔗 Live site: **https://achrafmaalaoui.github.io**

Available in **English 🇬🇧** and **French 🇫🇷** via the language switch in the top navigation (persisted with `localStorage`, auto-detected from browser language on first visit).

## ✨ Features

- Pure static site — **HTML5 / CSS3 / vanilla JavaScript**, no build step, no framework, no backend.
- Full **EN / FR bilingual** content (nav, hero, about, skills, experience, certifications, education, contact) driven by a single translations file: [`assets/js/i18n.js`](assets/js/i18n.js).
- Sections: Hero, Impact stats (animated counters), About / value props, Technical skills, Professional experience timeline, Certifications, Education & languages, Contact.
- Responsive layout (mobile drawer nav, fluid grids) + scroll-reveal animations + scroll-spy active nav + back-to-top button.
- Downloadable CV (EN/FR PDF) that follows the selected language.
- SEO-ready: meta description/keywords, Open Graph tags, `robots.txt`, `sitemap.xml`, canonical URL.

## 🗂 Project structure

```
.
├── index.html                 # Single-page markup (structure only, no hardcoded copy)
├── assets/
│   ├── css/style.css          # All styling (light corporate theme)
│   ├── js/i18n.js             # EN + FR content dictionary (edit text here)
│   ├── js/main.js             # Rendering, language switch, animations, nav behaviour
│   ├── img/                   # Profile photo + favicon
│   └── cv/                    # Downloadable CV PDFs (EN/FR)
├── robots.txt
├── sitemap.xml
├── .nojekyll                  # Disable Jekyll processing on GitHub Pages
└── LICENSE
```

## ✏️ Updating content

All visible text lives in **[`assets/js/i18n.js`](assets/js/i18n.js)**, split into an `en` and `fr` object with the same shape. To update anything (job bullets, skills, stats labels, contact info, etc.), edit the matching key in **both** languages.

- Simple text fields (nav, hero, about…) are mapped to elements via `data-i18n="section.key"` attributes in `index.html`.
- Structured lists (Skills groups, Experience timeline, Certifications) are rendered dynamically by [`assets/js/main.js`](assets/js/main.js) from arrays in `i18n.js` — add/remove array entries and the layout updates automatically.

To replace the CV files, drop new PDFs into `assets/cv/` keeping the same file names (`Achraf-Maalaoui-CV-EN.pdf` / `Achraf-Maalaoui-CV-FR.pdf`), or update the paths in `assets/js/main.js` (`CV_PATHS`).

## 🖥 Run locally

No build tools needed — just serve the folder statically, e.g.:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## 🚀 Deploy on GitHub Pages (user site)

This repo is meant to be named **`achrafmaalaoui.github.io`** so GitHub Pages publishes it automatically at the root domain, with no extra configuration:

1. Create an **empty** GitHub repository named exactly `achrafmaalaoui.github.io`.
2. From this folder:
   ```bash
   git remote add origin https://github.com/achrafmaalaoui/achrafmaalaoui.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Wait ~1 minute, then visit **https://achrafmaalaoui.github.io** 🎉

> If you'd rather keep this as a project page instead of a user site, push it to any repo and enable *Settings → Pages → Deploy from branch (main / root)* — the site will then be served at `https://achrafmaalaoui.github.io/<repo-name>/` (all links here use relative paths, so it works either way).

## 📄 License

MIT — see [LICENSE](LICENSE).
