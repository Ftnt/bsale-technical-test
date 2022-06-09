"use strict";

var mysql = require("mysql");

require("dotenv").config();

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB
});
pool.getConnection(function (err, connection) {
  if (err) throw err;
  console.log("Successfully connected to the database.");
  connection.release();
});
module.exports = pool;