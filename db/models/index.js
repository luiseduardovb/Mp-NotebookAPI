const Note = require("./Note");
const Notebook = require("./Notebook");
const Tag = require("./Tags");

Notebook.hasMany(Note, {
  as: "notes",
  foreignKey: { fieldName: "notebookId", allowNull: false },
});

Note.belongsTo(Notebook, { as: "notebook" });

Note.hasMany(Tag);

Note.belongsToMany(Tag, {
  through: "TagName",
  as: "notes",
  foreignKey: "tagId",
  otherKey: "noteId",
});

Tag.belongsToMany(Note, {
  through: "TagName",
  as: "tags",
  foreignKey: "noteId",
  otherKey: "tagId",
});

module.exports = {
  Note,
  Notebook,
  Tag,
};
