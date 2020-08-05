const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const { Note } = require("./db/models");

// Routes
const noteRoutes = require("./routes/notes");
const notebookRoutes = require("./routes/notebooks");

const app = express();

const run = async () => {
  try {
    await db.sync({
      /*alter: true*/
    });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/notebooks", notebookRoutes);
  app.use("/notes", noteRoutes);

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
