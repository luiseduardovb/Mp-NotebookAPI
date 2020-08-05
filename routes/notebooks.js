const express = require("express");
const router = express.Router();

const {
  noteCreate,
  notebookCreate,
  notebookDelete,
  notebookUpdate,
  notebookList,
  fetchNotebook,
} = require("../controllers/notebookController");

router.param("notebookId", async (req, res, next, notebookId) => {
  const notebook = await fetchNotebook(notebookId, next);
  if (notebook) {
    req.notebook = notebook;
    next();
  } else {
    const err = new Error("Notebook Not Found");
    err.status = 404;
    next(err);
  }
});

//Note Create
router.post("/:notebookId/notes", noteCreate);

//Notebook List
router.get("/", notebookList);

//Notebook Create
router.post("/", notebookCreate);

//Notebook Update
router.put("/:notebookId", notebookUpdate);

//Vendor Delete
router.delete("/:notebookId", notebookDelete);

module.exports = router;
