const express = require("express");
const router = express.Router();

const {
  noteCreate,
  notebookCreate,
  notebookList,
} = require("../controllers/notebookController");

//Note Create
router.post("/:notebookId/notes", noteCreate);

//Notebook Fetch
router.get("/", notebookList);

//Notebook Create
router.post("/", notebookCreate);

module.exports = router;
