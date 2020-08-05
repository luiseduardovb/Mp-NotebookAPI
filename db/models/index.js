const Note = require("./Note");
const Notebook = require("./Notebook");

Notebook.hasMany(Note, {
  foreignKey: { fieldName: "notebookId", allowNull: false },
});

module.exports = {
  Note,
  Notebook,
};
