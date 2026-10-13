import { connectDatabase } from './config/database.js';
import app, { startServer } from './server.js';

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

async function bootstrap() {
  await connectDatabase();
  startServer();
}

bootstrap().catch((error) => {
  console.error('Failed to start OctoFit API:', error);
  process.exit(1);
});