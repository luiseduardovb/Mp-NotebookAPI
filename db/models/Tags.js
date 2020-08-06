const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  { sequelize: db }
);

module.exports = Tag;
