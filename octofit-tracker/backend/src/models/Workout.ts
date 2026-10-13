import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    difficulty: { type: String, default: 'beginner', trim: true },
    durationMinutes: { type: Number, default: 30 },
    focus: { type: String, trim: true },
  },
  { timestamps: true },
);

const Workout = model('Workout', workoutSchema);

export default Workout;
