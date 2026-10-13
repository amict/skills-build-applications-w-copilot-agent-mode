import cors from 'cors';
import express from 'express';

import Activity from './models/Activity.js';
import Leaderboard from './models/Leaderboard.js';
import Team from './models/Team.js';
import User from './models/User.js';
import Workout from './models/Workout.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const baseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

const getResourceData = async (Model: any) => {
  try {
    return await Model.find({}).lean();
  } catch (error) {
    console.error(`Error fetching ${Model.modelName}:`, error);
    return [];
  }
};

app.get('/api/users/', async (_request, response) => {
  response.json({ baseUrl, users: await getResourceData(User) });
});

app.get('/api/teams/', async (_request, response) => {
  response.json({ baseUrl, teams: await getResourceData(Team) });
});

app.get('/api/activities/', async (_request, response) => {
  response.json({ baseUrl, activities: await getResourceData(Activity) });
});

app.get('/api/leaderboard/', async (_request, response) => {
  response.json({ baseUrl, leaderboard: await getResourceData(Leaderboard) });
});

app.get('/api/workouts/', async (_request, response) => {
  response.json({ baseUrl, workouts: await getResourceData(Workout) });
});

export function startServer() {
  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit API listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
  });

  return app;
}

export { app, baseUrl, port };
export default app;
