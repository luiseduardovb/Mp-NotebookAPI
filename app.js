const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const slugify = require("slugify");

//Data
const notebooks = require("./notebooks");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/notebooks", (req, res) => {
  res.json(notebooks);
});

app.post("/notebooks", (req, res) => {
  const id = notebooks[notebooks.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newNotebook = { id, slug, ...req.body };
  notebooks.push(newNotebook);
  res.status(201).json(newNotebook);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
