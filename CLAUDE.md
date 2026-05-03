# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
# Start dev server (Docker — always use this)
docker compose pull && docker compose up
# Site at http://localhost:8080

# Rebuild after dependency/config changes
docker compose up --build

# Stop
docker compose down

# Format all files (run before every commit)
npx prettier . --write
```

## Pre-Commit Checklist

1. `npx prettier . --write` — format everything
2. `docker compose up --build` — verify site builds without errors
3. Visit `http://localhost:8080` — check navigation, pages, images, dark mode

## Project Architecture

This is a **Jekyll** static site using the **al-folio** academic theme. Content is organized into **collections**:

| Directory | Purpose | Frontmatter Key Fields |
|-----------|---------|----------------------|
| `_posts/` | Blog posts (YYYY-MM-DD-title.md) | `layout: post`, `title`, `date`, `categories` |
| `_projects/` | Project showcase | `layout: page`, `title`, `importance`, `img`, `description` |
| `_news/` | News/announcements | `layout: post`, `title`, `date` |
| `_pages/` | Static pages | `layout: page`, `title`, `permalink` |
| `_bibliography/papers.bib` | Publications (BibTeX) | — |
| `_books/` | Book reviews | `layout: book-review`, `title`, `author`, `rating` |
| `_teachings/` | Course info | `layout: page`, `title`, `description` |

### Key Config Files

- **`_config.yml`** — Site-wide settings (title, URL, theme, feature flags, plugins, scholar config). When editing `url` + `baseurl`, always update both together.
- **`_data/socials.yml`** — Social media links (email, scholar, GitHub, etc.)
- **`_data/cv.yml`** — CV in RenderCV format
- **`_data/coauthors.yml`** — Author name → profile/affiliation mapping
- **`_data/repositories.yml`** — GitHub repos to display
- **`Gemfile`** — Ruby/Jekyll dependencies
- **`docker-compose.yml`** — Docker config (uses `amirpourmand/al-folio` image)

### Template Layers

- `_layouts/` — Page layout templates (about, post, bib, distill, cv, etc.)
- `_includes/` — Reusable components (header, footer, head, citation, projects, selected_papers)
- `_scripts/` — JS files (`.liquid.js` files mix Liquid + JS and are excluded from Prettier)
- `_sass/` — SCSS stylesheets
- `_plugins/` — Custom Jekyll plugins (Ruby)

### Feature Flags

Many features toggle via `_config.yml` booleans: `enable_darkmode`, `enable_math`, `enable_masonry`, `enable_medium_zoom`, `enable_progressbar`, `enable_project_categories`, `enable_publication_badges`, `enable_publication_thumbnails`, etc.

### CI/CD (GitHub Actions in `.github/workflows/`)

- **`deploy.yml`** — Builds with JEKYLL_ENV=production, runs purgecss, deploys to gh-pages
- **`prettier.yml`** — Fails PRs if code isn't formatted (runs on all files)
- **`broken-links.yml`** — Link validation via lychee
- **`axe.yml`** — Accessibility testing
- **`codeql.yml`** — Security scanning
- **`render-cv.yml`** — Auto-generates CV PDF from `_data/cv.yml`

## Content Creation Patterns

### Publications (BibTeX in `_bibliography/papers.bib`)

Custom keywords supported: `pdf`, `code`, `preview`, `doi`, `html`, `slides`, `poster`, `abstract`, `award`, `selected`, `blog`, `video`, `supp`

```bibtex
@article{key2023,
  author={Author, A. and Author, B.},
  title={Title with {C}apitalization},
  year={2023},
  pdf={filename.pdf},       # resolves to assets/pdf/
  preview={filename.jpg},   # resolves to assets/img/publication_preview/
  selected={true}
}
```

### Blog Post (`_posts/YYYY-MM-DD-title.md`)

```yaml
---
layout: post
title: Post Title
date: 2024-01-15
categories: category-name
description: Brief description
---
```

### Project (`_projects/project-name.md`)

```yaml
---
layout: page
title: Project Name
description: Description
img: /assets/img/project-image.jpg
importance: 1
---
```

## Include Shortcodes

- `{% include figure.liquid path="..." title="..." %}` — responsive images
- `{% include video.liquid path="..." %}` — video embeds
- `{% include audio.liquid path="..." %}` — audio embeds

## Git Workflow

Commit format: `<type>: <subject>`

Types: `feat`, `fix`, `docs`, `style`, `config`, `chore`
Stage files explicitly (not `git add .`).

## Common Pitfalls

- **YAML errors** — Quote strings with special chars: `title: "My: Title"`
- **CSS not loading** — Check `url` + `baseurl` match (personal vs project site)
- **Related posts error** — "Zero vectors cannot be normalized" means post content has only stop words. Add meaningful content or set `related_posts: false` in frontmatter.
- **Prettier CI fails** — Run `npx prettier . --write` before committing
- **Port in use** — `docker compose down` then try again

## Reference Docs

See `CUSTOMIZE.md` for theming/font customization, `INSTALL.md` for deployment, `TROUBLESHOOTING.md` for detailed solutions.
