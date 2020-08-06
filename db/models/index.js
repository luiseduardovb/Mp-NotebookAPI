const Note = require("./Note");
const Notebook = require("./Notebook");
const Tag = require("./Tags");
const TagName = require("./TagName");

Notebook.hasMany(Note, {
  as: "notes",
  foreignKey: { fieldName: "notebookId", allowNull: false },
});

Note.belongsTo(Notebook, { as: "notebook" });

Note.belongsToMany(Tag, {
  through: "TagName",
  as: "tags",
});

Tag.belongsToMany(Note, {
  through: "TagName",
  as: "notes",
});

module.exports = {
  Note,
  Notebook,
  Tag,
  TagName,
};
