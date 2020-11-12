const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
  duration: { type: Number, required: "You must enter the duration (in minutes) of the exercise" },
  weight: { type: Number },
  distance: { type: Number },
  reps: { type: Number },
  sets: { type: Number },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
