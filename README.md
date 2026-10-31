# Rohit Rajvaidya's portfolio

A standalone, dependency-free portfolio built with HTML, CSS, and JavaScript.

## Preview

Live site: [https://rohitrajvaidya.vercel.app/](https://rohitrajvaidya.vercel.app/)

From the project directory, start Python's local web server:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080) in a browser. Stop the server with Ctrl+C.

## Project files

- `index.html`: introduction, projects, experience, skills, and contact sections.
- `style.css`: responsive layout, visual styling, and reduced-motion support.
- `script.js`: mobile navigation, active section highlighting, current year, and email-copy interaction.
- `portrait.jpg` and `favicon.svg`: local portfolio imagery and site icon.

The Overview, Projects, About & experience, and Contact navigation links highlight the selected section. The active link also updates as the visitor scrolls through the page. Project details use native disclosure elements and remain available without JavaScript.

## Validation

With Node.js installed, run:

```powershell
npm run check
```

This checks the JavaScript syntax. No dependency installation or build step is required to preview the site.

## Hosting

Deploy the contents of this directory to any static host. No backend or build process is required; upload or redeploy after publishing changes.
