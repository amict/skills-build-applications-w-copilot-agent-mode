# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey amict!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/amict/skills-build-applications-w-copilot-agent-mode/issues/1)

## OctoFit Tracker API

The Node.js API runs on port `8000`. Start MongoDB with the `octofit_db` database available at `mongodb://localhost:27017/octofit_db`, then start the backend from the repository root:

```bash
npm --prefix octofit-tracker/backend run dev
```

In Codespaces, the API base URL is `https://${CODESPACE_NAME}-8000.app.github.dev`. Outside Codespaces, use `http://localhost:8000`. Ensure port `8000` is forwarded in Codespaces.

Choose the API base URL and verify the users and activities endpoints with `curl`:

```bash
if [ -n "${CODESPACE_NAME:-}" ]; then
  API_BASE_URL="https://${CODESPACE_NAME}-8000.app.github.dev"
else
  API_BASE_URL="http://localhost:8000"
fi

curl --fail-with-body "$API_BASE_URL/api/users"
curl --fail-with-body "$API_BASE_URL/api/activities"
```
