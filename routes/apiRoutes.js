var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((workout) => {
      res.json(workout);
    });
  });

  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      console.log("This error occurred creating a workout: ", err);
    }
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    const workoutID = params.id;
    let savedExercises = [];
    db.Workout.find({ _id: workoutID }).then((dbWorkout) => {
      savedExercises = dbWorkout[0].exercises;
      res.json(dbWorkout[0].exercises);
      let allExercises = [...savedExercises, body];
      console.log(allExercises);
      updateWorkout(workoutID, allExercises);
    });
  });

  function updateWorkout(workoutID, exercises) {
    db.Workout.findByIdAndUpdate(
      workoutID,
      { exercises: exercises },
      (err, data) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((workout) => {
      res.json(workout);
    });
  });
};
