const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  BACKEND_PORT: process.env.BACKEND_PORT,
  development: {
    username: 'sql12781655',
    password: 'nybcSU9CZu',
    database: 'sql12781655',
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
}