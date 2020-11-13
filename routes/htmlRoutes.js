//pulling in the path library
const path = require("path");

//exporting the html routes as a function using arrow function
module.exports = (app) => {

  //setting up the route for home page
  //not specifically necessary for this, since middleware will start with index.html
  //did it anyway
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //html to display for the "exercise" route for entering exercises (cardio/resistance) into the appropriate form
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //html to display for the "stats" route to see workout dashboard
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
