const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Note extends Model {}

Note.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db }
);

module.exports = Note;
