const { Note } = require("../db/models");

exports.noteList = (req, res) => {
  res.json(note);
};
