const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "3982",
  database: "mpnotebookdb",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
