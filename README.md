# Founding Documents — A Study

A small interactive study app for the Declaration of Independence, the Constitution, and the Bill of Rights.

**What's in it:**
- **The core three** — Declaration, Constitution, Bill of Rights — each broken into short sections, with click-to-reveal terms and phrasing, and a quick one-question check per section.
- **Context & debate** — four supporting documents in the same interactive format: the Federalist Papers, the Anti-Federalist Papers, the Articles of Confederation, and the Northwest Ordinance. Useful for the 250th anniversary of the Declaration (July 4, 2026), since these explain *why* the core three look the way they do.
- **Key People** — a short reference page on the people behind all of this (Jefferson, Madison, Hamilton, Mason, Patrick Henry, and others), including which side of the ratification debate they were actually on.
- **Sort It Out** — a tap-to-match game mixing facts and phrases from all seven documents.
- **Still in Force** — which amendments do most of the work in courts and the news today.
- **Your Record** — tracks progress across all seven documents and keeps a running list of missed questions with corrections, until you get them right.
- **Ask the Tutor** — a chat panel (bottom right, on every page) for asking questions and getting answered like a real tutoring conversation, grounded in all of the above.

Progress and chat history are stored in the browser's `localStorage` only — nothing leaves your device except the tutor's questions/answers, which go to Anthropic's API via your own key (see below).

## Deploy to Vercel

**Easiest path (no terminal):**
1. Go to https://vercel.com/new
2. Drag-and-drop this folder, or push it to a GitHub repo first and "Import Project" from there.
3. Leave build settings blank — no framework, no build command. The `api/tutor.js` file is automatically picked up as a serverless function.
4. Before or after the first deploy, go to **Project Settings → Environment Variables** and add:
   - `ANTHROPIC_API_KEY` = your Anthropic API key (get one at console.anthropic.com → API Keys)
5. Redeploy if you added the key after the first deploy (env vars require a redeploy to take effect).

**Via CLI**, from inside this folder:
```
npm i -g vercel
vercel
vercel env add ANTHROPIC_API_KEY
vercel --prod
```

Without the API key set, every other part of the app works fine — only the "Ask the Tutor" chat will show a setup message instead of a real answer.

## Files
- `index.html` — page shell, navigation, and the tutor chat widget markup
- `style.css` — design system (parchment/engrossed-document theme) plus interactive-element styling
- `content.js` — all document text, key terms, phrases, mini-checks, and the sort-game data (edit this to change content)
- `app.js` — router, click-to-reveal logic, mini-check engine, sort game, dashboard, and the tutor chat frontend
- `api/tutor.js` — Vercel serverless function that calls the Anthropic API server-side, using your `ANTHROPIC_API_KEY`. The key never reaches the browser.
- `vercel.json` — minimal static config

## Notes
- Texts and summaries are based on the official National Archives transcriptions of these documents (public domain U.S. government works).
- Progress and chat history reset if you clear browser storage or switch browsers/devices — there's no account system, by design.
- The tutor chat sends your recent conversation (last ~16 messages) and which document you're currently viewing to Claude via the Anthropic API for context — nothing else about you.

