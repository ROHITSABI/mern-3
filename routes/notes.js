const express = require("express");
const router = express.Router();
const db = require("../db");
const { body, validationResult } = require("express-validator");

router.post("/", (req, res) => {
  //   console.log(req.body); //use in Thunder client--> req.body --> {"name":"Rohit"}

  let name = req.body.name;
  let email = req.body.email;
  let pwd = req.body.password;
  let tag = req.body.tag;
  let desc = req.body.description;

  //   let sql = `INSERT INTO users (name,email,password,tag,description) VALUES(?,?,?,?,?);`;
  //   db.query(sql, [name, email, pwd, tag, desc], (err, result) => {
  //     if (err) {
  //       console.log("Invalid Query", err);
  //       res.send(err);
  //     } else {
  //       console.log(result);
  //       res.send(result);
  //     }
  //   });

  let sql = `INSERT INTO users (name,email,password,tag,description) VALUES(?,?,?,?,?);`;
  db.query(
    sql,
    [
      body("name", "Enter a valid Name").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail(),
      body("pwd", "Enter a valid password").isLength({ min: 5 }),
      tag,
      desc,
    ],
    (err, result) => {
      const error = validationResult(err);
      if (!error.isEmpty()) {
        return res.send(`Hello, ${req.body.name}!`);
      }
    }
  );
});

module.exports = router;
