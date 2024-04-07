//Client to stablish the connection with postgres database
const { Pool } = require('pg');
// read virtual environment variables
require('dotenv').config();

const pool  = new Pool
({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
});

try {
  
    pool.connect();
    console.log('Postgres connection created');
} catch (error) {
    console.log('Error creating Postgres connection');
    console.log(error);
}


module.exports = pool;