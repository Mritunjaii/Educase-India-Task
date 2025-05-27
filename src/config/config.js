const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  BACKEND_PORT: process.env.BACKEND_PORT || 3001,
  development: {
    username: 'root',
    password: '12345678',
    database: 'educasetask',
    host: '127.0.0.1',
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