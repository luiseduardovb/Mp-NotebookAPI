const express = require("express");
const cors = require("cors");

//Data
const notebooks = require("./notebooks");

const app = express();
app.use(cors());

app.get("/notebooks", (req, res) => {
  res.json(notebooks);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
