# AGENTS.md — AI agent instructions for this repository

Purpose
- Small static GitHub Pages site (HTML/CSS/JS). Keep edits minimal and content-focused.

Quick facts
- Preview locally: run `python -m http.server 8000` from the repository root and open http://localhost:8000.
- Deploy: GitHub Pages from the `main` branch (no build step present).
- Primary files:
  - HTML: root and subfolders (e.g., `index.html`, `about.html`, `legislative/index.html`).
  - CSS: `style/style.css` (fonts under `style/Red_Hat_Display/`).
  - JS: `script/javascript.js`.
  - Images: `images/` (people under `images/people/`).
- Tests/build: none present.

Agent rules (concise)
- Do not change `LICENSE` or the repository `README.md` without explicit user approval.
- For content changes (text, images, page structure), create a small PR and include a preview URL or screenshot; ask the user before large edits.
- Refactors that rename or move files require confirmation.
- Run a local preview (`python -m http.server`) and manually inspect changed pages before proposing/committing.

Links
- Repo README: [README.md](README.md)
- Main stylesheet: [style/style.css](style/style.css)
- Main script: [script/javascript.js](script/javascript.js)

Next suggested customizations
- Create a small `agent` skill to run a local preview and open a browser snapshot.
- Add a `pull-request` prompt that summarizes user-facing changes for reviewers.

If you want, I can open a PR with this file, or instead create `.github/copilot-instructions.md` with the same guidance.
