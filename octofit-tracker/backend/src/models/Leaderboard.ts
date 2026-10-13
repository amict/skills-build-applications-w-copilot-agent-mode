import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
  },
  { timestamps: true },
);

const Leaderboard = model('Leaderboard', leaderboardSchema);

export default Leaderboard;
