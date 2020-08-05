const express = require("express");
const router = express.Router();

const {
  fetchNote,
  noteList,
  noteUpdate,
  noteDelete,
} = require("../controllers/noteController");

router.param("noteId", async (req, res, next, noteId) => {
  const note = await fetchNote(noteId, next);
  if (note) {
    req.note = note;
    next();
  } else {
    const err = new Error("Note Not Found");
    err.status = 404;
    next(err);
  }
});

//Note List
router.get("/", noteList);

//Note Update
router.put("/:noteId", noteUpdate);

//Note Delete
router.delete("/:noteId", noteDelete);

module.exports = router;
