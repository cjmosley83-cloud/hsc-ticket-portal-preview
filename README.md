# HSC Ticket Management Portal — Development Preview

This is a standalone, static HTML demonstration for Heritage Signature Chorale.

## Included pages
- `index.html` — overview dashboard
- `door-sales.html` — interactive sample ticket selection and seating/pricing
- `check-in.html` — interactive sample arrival check-in
- `styles.css`, `app.js`, `door.js`, `checkin.js` — styling and browser-side interactions

## Safety
- Uses sample data only (ticket numbers 78–100).
- Does not connect to Google Sheets, Apps Script, or any external database.
- Does not process payments or save transactions.
- Check-in and selections are temporary browser demonstrations.
- The site is intended to be a public concept preview. Do not add real member names, emails, payment records, credentials, or operational data.

## Publish with GitHub Pages
1. Create a new GitHub repository named `hsc-ticket-portal-preview`.
2. For GitHub Pages on GitHub Free, set the repository to **Public**. The published site will be public too.
3. Upload all files in this folder to the repository root (not the ZIP file itself).
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then Save.
7. Wait for GitHub Pages to publish. The site address will appear in Settings → Pages.
8. Test the three pages on desktop and mobile before emailing the link.

## Updating
Edit the HTML/CSS/JS files and commit the changes to the `main` branch. GitHub Pages republishes the static site.
