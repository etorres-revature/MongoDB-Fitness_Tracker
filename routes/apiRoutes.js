var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((workout) => {
      res.json(workout);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((newWorkout) => {
      res.json(newWorkOut);
    });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { upsert: true },
      (updatedWorkout) => {
        res.json(updatedWorkout);
      }
    );
  });
};
