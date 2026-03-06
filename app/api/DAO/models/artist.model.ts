import { Schema, models, model } from "mongoose";

const artistSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    bannerUrl: { type: String, required: true },
    imgUrl: { type: String, required: true },
    socialMedia: {
      spotify: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      tiktok: { type: String },
    },
    videos: { type: [String], default: [] },
    public: {
      age: {
        "13-17": { type: Number, default: 0 },
        "18-24": { type: Number, default: 0 },
        "25-34": { type: Number, default: 0 },
        "35-44": { type: Number, default: 0 },
        "44+": { type: Number, default: 0 },
      },
      sex: {
        male: { type: Number, default: 0 },
        female: { type: Number, default: 0 },
      },
    },
  },
  { timestamps: true },
);

const Artist = models.Artist || model("Artist", artistSchema);

export default Artist;
