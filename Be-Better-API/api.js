const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 999;
var path = require("path");
var mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bebetter",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./endpoints/auth")(app);
require("./endpoints/friends")(app);
require("./endpoints/user")(app);
require("./endpoints/health")(app);
require("./endpoints/journals")(app);
require("./endpoints/challenges")(app);
require("./endpoints/goals")(app);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:8100",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.engine("html", require("ejs").renderFile);
app.listen(port, () =>
  console.log(`Smart Home app listening on port ${port}!`)
);
