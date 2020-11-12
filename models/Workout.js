const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now() },
  exercises: [
    {
     type: Schema.Types.ObjectId,
     ref: "Exercise"
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
    required: "You must enter a duration(in minutes)."
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
