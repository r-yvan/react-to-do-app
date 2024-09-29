import mongoose from "mongoose";

const ActivitiesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
});

const Activities = new mongoose.model("activity_db", ActivitiesSchema, "activities");
export default Activities;