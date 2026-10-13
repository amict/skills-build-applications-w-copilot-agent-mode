import mongoose from 'mongoose';

import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});

    await User.insertMany([
      { name: 'Mona', email: 'mona@octofit.local', points: 120 },
      { name: 'Leo', email: 'leo@octofit.local', points: 100 },
      { name: 'Ava', email: 'ava@octofit.local', points: 95 },
    ]);

    await Team.insertMany([
      { name: 'Octocats', coach: 'Jessica', score: 450 },
      { name: 'Trailblazers', coach: 'Paul', score: 410 },
    ]);

    await Activity.insertMany([
      { name: 'Morning Run', type: 'run', durationMinutes: 30, caloriesBurned: 240 },
      { name: 'Strength Circuit', type: 'strength', durationMinutes: 40, caloriesBurned: 300 },
    ]);

    await Leaderboard.insertMany([
      { name: 'Weekly Leaderboard', user: null, score: 120, rank: 1 },
      { name: 'Weekly Leaderboard', user: null, score: 100, rank: 2 },
    ]);

    await Workout.insertMany([
      { name: 'Intervals', difficulty: 'intermediate', durationMinutes: 25, focus: 'cardio' },
      { name: 'Core Blast', difficulty: 'beginner', durationMinutes: 20, focus: 'core' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
