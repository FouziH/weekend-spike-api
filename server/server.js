require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* Route includes */

/* Body parser middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




/* Routes */
const openDataMinneapolis = require("./routes/api-router");
app.use("open/api/data", openDataMinneapolis);


/* Serve static files */
app.use(express.static("build"));

/* POR SET */
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
