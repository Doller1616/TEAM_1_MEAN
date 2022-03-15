// https://node-postgres.com/features/connecting

const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "dolphin"
  });

module.exports = pool;