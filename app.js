const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

// Routes
const tagRoutes = require("./routes/tags");
const noteRoutes = require("./routes/notes");
const notebookRoutes = require("./routes/notebooks");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Routers
app.use("/notebooks", notebookRoutes);
app.use("/notes", noteRoutes);
app.use("/tags", tagRoutes);

// Non Existing Path Middleware
app.use((req, res, next) => {
  // res.status(404).json({ message: "Path Not Found" });
  const err = new Error("Path not Found");
  err.status = 404;
  next(error);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message || "Internal Server Error");
});

const run = async () => {
  try {
    await db.sync({});
  } catch (error) {
    console.log("run", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
