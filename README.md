# Rohit's portfolio

A standalone, dependency-free HTML/CSS/JavaScript portfolio. The existing portfolio in the parent folder is unchanged.

## Preview

Open `index.html` directly in a browser, or serve this folder locally:

```powershell
Set-Location "c:\Users\rrajvaid\Music\Portfolio\new-portfolio"
python -m http.server 8080 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8080`. Stop the server with Ctrl+C.

## Content

- `index.html`: introduction, expandable project case studies, experience, skills, and contact.
- `portrait.jpg`: local copy of the existing portfolio portrait.
- `style.css`: charcoal navigation, warm neutral surfaces, one coral accent, consistent sans-serif headings, and an unadorned portrait. Includes mobile layouts and reduced-motion support.
- `script.js`: progressively enhanced mobile navigation and email copying. Content, links, and project disclosures work without JavaScript.

Blog and Journal have been removed for now, including their pages and homepage links. They can be added later using the original learning and career notes, which remain unchanged in the parent folder.

## Before publishing

- Confirm the displayed email address and name, sourced from the existing portfolio.
- Update experience after May 2026; the source notes do not describe that period.
- Review the career and project copy in your own voice.
- Numerical speedup claims have been removed because benchmark methodology is not available. Publish repeatable measurements before adding performance figures.
- Add repository, live demo, professional profile, or resume links only when real URLs/files are available. None are fabricated here.
- Client-specific names and confidential work details have been omitted.

The featured project's implementation details are expanded by default. The diagram is labeled as a conceptual workflow, not a screenshot or live demo. Project email links are explicitly labeled as email links; repository and API demo evidence is not yet provided.

## Hosting

Upload the contents of this folder to any static host. No build, package installation, database, backend, CMS, analytics, or third-party font service is required. Publishing edits requires uploading or redeploying the updated files.

## Validation

With Node.js installed, run `npm run check` and `npm test`. No installation is required; tests use Node's built-in test runner and cover local links, page structure, navigation behavior, and clipboard success/failure paths. `package.json` is only a convenience for those commands, not a runtime requirement.

The replayable health-check plan is in `.tsupgrader/runtime-validation/eval-plan.json`. This is a static site, classified as `other` rather than a framework webapp. Its plan checks JavaScript syntax, nine focused tests (including Blog/Journal removal and factual portfolio presentation), and the homepage HTTP response. It starts and stops a local Python server automatically. Browser layout and interaction checks are separate from this plan, not recorded Playwright specs.

The `.tsupgrader` directory and `package.json` need not be uploaded to your static host.
