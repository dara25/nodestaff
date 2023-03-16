const Sequelize = require("sequelize");

// read the .env file
require("dotenv").config();

const { NODE_ENV, HOST, DATABASE, USER, PASSWORD } = process.env;

const db = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
  host: HOST, // default is localhost
  pool: {
    min: 0,
    max: 5,
  },
});

module.exports = db;
