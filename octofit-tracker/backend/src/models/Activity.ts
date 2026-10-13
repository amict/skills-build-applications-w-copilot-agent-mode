import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    caloriesBurned: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Activity = model('Activity', activitySchema);

export default Activity;
