const MYSQL = require('mysql2/promise');
require('dotenv').config();

const connection = MYSQL.createPool({
  host: 'xzone.c42n0gvopz1r.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
  database: 'xzone'
});

module.exports.connection = connection;
