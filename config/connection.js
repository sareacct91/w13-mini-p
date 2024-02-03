const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_PASSWORD, DB_USER } = process.env;

const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
)

module.exports = sequelize;