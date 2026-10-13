import cors from 'cors';
import express, { type ErrorRequestHandler } from 'express';
import type { Model } from 'mongoose';

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

const getResourceData = <T>(model: Model<T>) => model.find({}).lean().exec();

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

const handleError: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error('API request failed:', error);
  response.status(500).json({ error: 'Internal server error' });
};

app.use(handleError);

export function startServer() {
  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit API listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
  });

  return app;
}

export { app, baseUrl, port };
export default app;
