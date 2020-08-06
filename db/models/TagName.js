const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class TagName extends Model {}

TagName.init({}, { sequelize: db });

module.exports = TagName;
