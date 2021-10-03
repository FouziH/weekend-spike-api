const express = require('express')
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

const port = 5000

/* ---------- MIDDLEWARE --------*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/* ---------- EXPRESS ROUTER --------*/


app.listen(port, () => {
    console.log("live on port", port)
})

