const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    a: "Harry",
    number: 30,
  });
});

module.exports = router;
