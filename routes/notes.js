const express = require("express");
const router = express.Router();
const db = require("../db");
// const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

router.post("/createUser", async (req, res) => {
  //   console.log(req.body); //use in Thunder client--> req.body --> {"name":"Rohit"}

  const salt = await bcrypt.genSalt(10);
  const secPwd = await bcrypt.hash(req.body.password, salt);

  let name = req.body.name;
  let email = req.body.email;
  let pwd = secPwd;
  let tag = req.body.tag;
  let desc = req.body.description;

  let sql = `INSERT INTO users (name,email,password,tag,description) VALUES(?,?,?,?,?);`;
  db.query(sql, [name, email, pwd, tag, desc], (err, result) => {
    if (err) {
      console.log("Invalid Query", err);
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

router.post("/createUser/:id", (req, res) => {});

module.exports = router;
