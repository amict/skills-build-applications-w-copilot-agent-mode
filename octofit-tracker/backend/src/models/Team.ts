import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    coach: { type: String, trim: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    score: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Team = model('Team', teamSchema);

export default Team;
