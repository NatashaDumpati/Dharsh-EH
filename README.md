# MediVault - IDOR Vulnerability Lab

This is a standalone, static HTML/CSS/JS application designed to demonstrate **Insecure Direct Object Reference (IDOR)** vulnerabilities in a realistic healthcare portal.

## Features
- **10 Realistic Patient Profiles**: IDs 1001-1010.
- **10 User Accounts**: Login as any user with `password123`.
- **Realistic Dashboard**: Includes a health trends chart (Chart.js) and upcoming appointments.
- **Session Persistence**: Uses `localStorage` to keep you logged in across page reloads, making IDOR demonstrations via the address bar seamless.
- **IDOR Demonstration**: Access any patient record or document by manipulating URL parameters (`?id=` or `?doc_id=`).

## How to Host on GitHub Pages
1. Create a new repository on GitHub.
2. Upload `index.html` and `script.js` to the root of the repository.
3. Go to **Settings** > **Pages**.
4. Select the branch (usually `main`) and the folder (`/root`) and click **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Vulnerability Scenarios
1. **Patient Records**: Log in as Alice (`alice@example.com`), then change the URL from `?id=1001` to `?id=1002` to see Bob's private data.
2. **Documents**: Navigate to a document and change `?doc_id=D-1001-01` to `D-1004-01` to see David's clinical notes.
3. **Admin Leak**: Try `?id=1337` to see simulated system logs.
