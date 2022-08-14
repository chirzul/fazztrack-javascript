const { Pool } = require('pg');

const pool = new Pool({
  user: 'chirzul',
  host: 'localhost',
  database: 'tickitz_db',
  password: 'password',
});

module.exports = pool;
