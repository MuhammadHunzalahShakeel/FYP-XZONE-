const MYSQL = require('mysql2/promise');
require('dotenv').config();

const connection = MYSQL.createPool({
  host: 'localhost',
  user: 'root',
  password: 'hunzalah',
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
  database: 'xzone'
});

module.exports.connection = connection;
