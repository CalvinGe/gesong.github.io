# Ge Song Personal Website

This is the GitHub Pages version of Ge Song's personal academic website.

## Edit locally

Install Node.js 22, then run:

```bash
npm ci
npm run dev
```

Main files:

- `app/page.tsx`: home page content
- `app/posts/ai4md/page.tsx`: blog post
- `app/globals.css`: visual styling
- `public/`: CV, favicon, and gallery images

Test the GitHub Pages build:

```bash
npm run build:github
```

## Deploy

The workflow in `.github/workflows/deploy-pages.yml` automatically builds and
deploys the site whenever the `main` or `master` branch is updated.

In the GitHub repository, open **Settings → Pages** and set **Source** to
**GitHub Actions**.

Then push changes:

```bash
git add .
git commit -m "Update personal website"
git push origin main
```

The published address is:

`https://calvinge.github.io/gesong.github.io/`
