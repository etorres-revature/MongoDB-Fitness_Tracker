const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 17943;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App is active at http://localhost:${PORT}`);
});
