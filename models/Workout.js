const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "You must enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "You must enter an exercise name",
      },
      duration: {
        type: Number,
        required: "You must enter the duration (in minutes) of the exercise",
      },
      weight: { type: Number },
      distance: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
    },
  ],
});

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
     total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
