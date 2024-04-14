const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  //   console.log(req.body); //use in Thunder client--> req.body --> {"name":"Rohit"}

  let name = req.body.name;
  let email = req.body.email;
  let pwd = req.body.password;
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
  //   res.json(req.body);
});

module.exports = router;
