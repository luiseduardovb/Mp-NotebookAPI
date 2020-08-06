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
  as: "notes",
});

Tag.belongsToMany(Note, {
  through: "TagName",
  as: "tags",
});

module.exports = {
  Note,
  Notebook,
  Tag,
  TagName,
};
