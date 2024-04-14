const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodereact",
  port: "3307",
});

connection.connect((err) => {
  if (err) {
    console.log("Error Occured", err);
  } else {
    console.log("Connection Established");
  }
});

module.exports = connection;
