//dependencies for server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//dotenv local config file for mongo Atlas db
require("dotenv").config();

//dynamic PORT variable
const PORT = process.env.PORT || 17943;

//creating a variable for the express function
const app = express();

//using the morgan to log events on server
app.use(logger("dev"));

//middleware for how to parse information from the body and for JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware telling the server where to get static information to use in the application
app.use(express.static("public"));

//dynamically creating the mongo connection for mongoose with variables to avoid deprecation warnings
mongoose.connect(process.env.MONGODB_URI || process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//pulling in the html and api routes from the Routes folder
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//turning on the server
app.listen(PORT, () => {
  console.log(`App is active at http://localhost:${PORT}`);
});
