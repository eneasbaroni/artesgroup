import { Schema, models, model } from "mongoose";

const eventSchema = new Schema(
  {
    artist: { type: String, required: true },
    date: { type: Date, required: true },
    venue: { type: String, required: true },
    plaza: { type: String, required: true },
    adEnable: { type: Boolean, default: false, required: true },
    media: { type: String },
    description: { type: String, required: true },
    salesLink: { type: String },
    imgUrl: { type: String, required: true },
    releaseDate: { type: Date },
  },
  { timestamps: true },
);

const Event = models.Event || model("Event", eventSchema);

export default Event;
