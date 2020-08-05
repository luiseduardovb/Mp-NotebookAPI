const { Note } = require("../db/models");
const { Notebook } = require("../db/models");

exports.noteList = (req, res) => {
  const notes = Note.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: {
      model: Notebook,
      as: "notebook",
      attributes: ["name"],
    },
  });

  res.json(notes);
};
