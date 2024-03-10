const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(3000);
