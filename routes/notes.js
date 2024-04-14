const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    a: "Marry",
    number: 30,
  });
});

module.exports = router;
