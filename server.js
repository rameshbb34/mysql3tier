const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/getUsers", (req, res) => {
  connection.query("select * from users", (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(2222, () => {
  console.log("listening to port 2222");
});

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "ramesh",
});

connection.connect((err) => {
  if (err) {
    console.log("unable to connect to db");
  } else {
    console.log("successfully connected to db");
    getDataFromDB();
  }
});

let getDataFromDB = () => {
  connection.query("select * from users", (err, results) => {
    if (err) {
      console.log("unable to retrieve data from db");
    } else {
      console.log(results);
    }
  });
};
