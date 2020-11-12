var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => res.json(err));
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => res.json(err));
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } }
    )
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => res.json(err));
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.json(err));
  });

  app.post("/api/workouts/range", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });
};
