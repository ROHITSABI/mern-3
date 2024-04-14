const mysql = require("./db");
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Rohit");
// });
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.listen(3001);
