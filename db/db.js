const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "PUT PASSWORD HERE",
  database: "mpnotebookdb",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
