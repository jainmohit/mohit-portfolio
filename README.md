# Mohit Jain — Portfolio & Blog

Modern React + Vite portfolio with a built-in Markdown blog, auto-deployed to
GitHub Pages on every push — the same architecture as mihikalicious-portfolio
(Vite build → GitHub Action → `gh-pages` branch → custom domain).

## Stack

- **React 18 + Vite 5** — fast SPA with code-split vendor chunks
- **Dark/light theme** with a toggle (persisted)
- **Markdown blog with tags** — posts are files in `src/posts/`, compiled at build time
- **GitHub Actions CI/CD** — push to `main`, live in ~2 minutes
- No backend, no database, nothing to maintain

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy to GitHub Pages (one-time)

1. Create a GitHub repository and push this folder:
   ```bash
   git init && git add -A && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/portfolio.git
   git push -u origin main
   ```
2. The included workflow (`.github/workflows/deploy.yml`) builds the site and
   publishes it to a `gh-pages` branch automatically.
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / (root)**.
4. Update `github` and (if you like) other details in `src/data/profile.js`.

## Point your custom domain

1. In `.github/workflows/deploy.yml`, uncomment the `cname:` line and set your
   domain (e.g. `cname: mohitjain.dev`). Commit — the next deploy writes the
   CNAME file for you.
2. At your DNS provider:
   - **Apex** (`mohitjain.dev`): four `A` records →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www**: `CNAME` record → `<your-username>.github.io`
3. In **Settings → Pages**, enter the custom domain and tick **Enforce HTTPS**
   once the DNS check passes.

## Publishing a blog post (only you can)

Posts are Markdown files in `src/posts/`. Publishing = committing to this repo,
so **only accounts with write access — you — can post.**

1. On github.com: `src/posts/` → **Add file → Create new file**
2. Name it `2026-09-20-my-post.md`
3. Front matter + Markdown (see `src/posts/POST_TEMPLATE.txt`):
   ```markdown
   ---
   title: "My post title"
   description: "One-line summary for the blog cards."
   tags: [aws, terraform]
   ---

   Content in plain Markdown...
   ```
4. Commit to `main`. The Action rebuilds and deploys; the post appears on
   `/#/blog`, on its tag pages, with reading time computed automatically.

## Editing content

Everything about you lives in one file: `src/data/profile.js` — roles for the
typewriter, services, skills, experience timeline, projects, links. Edit and push.
