const { Note } = require("../db/models");
const { Notebook } = require("../db/models");

exports.fetchNote = async (noteId, next) => {
  try {
    const note = await Note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: { exclude: ["notebookId", "createdAt", "updatedAt"] },
      include: {
        model: Notebook,
        as: "notebook",
        attributes: ["name"],
      },
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

exports.noteUpdate = async (req, res, next) => {
  try {
    await req.note.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.noteDelete = async (req, res, next) => {
  try {
    await req.note.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
