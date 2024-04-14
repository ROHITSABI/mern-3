const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body); //use in Thunder client--> req.body --> {"name":"Rohit"}
  res.send("Harry");
});

module.exports = router;
