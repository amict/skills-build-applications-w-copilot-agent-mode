# OctoFit Tracker frontend

The React 19 and Vite presentation tier reads activities, leaderboard entries,
teams, users, and workouts from the API on port `8000`.

## Configure the API URL

When running the frontend in Codespaces, `VITE_CODESPACE_NAME` must be defined
so the frontend can reach the forwarded API port. Add the Codespace name to
`.env.local` in this directory:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite uses this value to form
`https://<VITE_CODESPACE_NAME>-8000.app.github.dev`. Restart Vite after
changing `.env.local`. Do not include the protocol or the `-8000.app.github.dev`
suffix in the value.

For local development outside Codespaces, the variable can be omitted; the
frontend safely falls back to `http://localhost:8000`.

## Run the frontend

From the repository root, start the development server with:

```bash
npm run dev --prefix octofit-tracker/frontend
```

Ensure the backend is running and port `8000` is forwarded when working in
Codespaces.
