# The Fish Hockey Club

A simple, mobile-first website for The Fish rec league hockey team: next game, our schedule, the full league schedule, and the team photo. Plain HTML, CSS and JavaScript, with no build step.

## Files

```
index.html          the page
css/style.css       styles (team colours are at the top)
js/schedule.js      the schedule. Edit this file to update games and scores.
js/app.js           renders the schedule, next game, record and calendar downloads
assets/             web-sized logo, icons, team photo, league PDF
source/             original full-size logo and photo
```

## Updating the schedule

Open `js/schedule.js`. Each game is one line:

```js
["2026-11-05", "20:00", "The Fish", "Lions Head Northstars"],
```

- **Add a score:** add a 5th value as "team A goals-team B goals" (team A is the first team listed):
  `["2026-11-05", "20:00", "The Fish", "Lions Head Northstars", "5-2"],`
  The site works out W/L/T and shows the season record.
- **Playoffs:** replace `"TBD"` with team names once seeds are known. Any game with "The Fish" in it shows up under **Our games** automatically.
- **New season:** change `season` and replace the `rounds` list.

Our games are shown by default. The **All league** tab shows every game. Games that are already played are hidden behind a "Show earlier games" button.

## Preview locally

Open `index.html` in a browser, or run a tiny server from this folder:

```bash
npx http-server -p 8080
```

## Hosting (free, with HTTPS): GitHub Pages

1. Push this folder to a **public** GitHub repo (for example `fish-hockey`).
2. In the repo, go to **Settings → Pages**, set **Source: Deploy from a branch**, **Branch: `main` / root**, then save.
3. After about a minute the site is live at `https://<your-username>.github.io/fish-hockey/` with HTTPS.
4. Optional: to use a custom domain (for example `fishhockey.ca`), add it under Settings → Pages and tick **Enforce HTTPS**.

To update the site, edit `js/schedule.js` (you can do this right on github.com with the pencil icon) and commit. The site redeploys automatically.
