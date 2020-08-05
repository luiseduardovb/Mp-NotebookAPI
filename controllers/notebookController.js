//Data
let notebooks = require("../notebooks");

const slugify = require("slugify");
const { Notebook } = require("../db/models");
const { Note } = require("../db/models");

exports.noteCreate = async (req, res) => {
  try {
    req.body.notebookId = req.notebook.id;
    const newNote = await Note.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.notebookCreate = (req, res) => {
  const id = notebooks[notebooks.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newNotebook = { id, slug, ...req.body };
  notebooks.push(newNotebook);
  res.status(201).json(newNotebook);
};

exports.notebookList = (req, res) => {
  const _notebooks = Notebook.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: Note,
        as: "notes",
        attributes: ["id"],
      },
    ],
  });

  res.json(_notebooks);
};
