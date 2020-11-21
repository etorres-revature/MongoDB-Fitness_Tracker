//requiring mongoose library
const mongoose = require("mongoose");

//creating schema variable that uses the mongoose schema object
const Schema = mongoose.Schema;

//creating a workout schema that uses the mongoose schema object
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

// WorkoutSchema.virtual("totalDuration").get(function () {
//   return this.exercises.reduce((total, exercises) => {
//     total + exercises.duration;
//   }, 0);
// });

//adding the mongoose schema for Workout collections to use the workoutSchema
const Workout = mongoose.model("workout", WorkoutSchema);

//exporting the module for use in the application
module.exports = Workout;
