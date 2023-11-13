const { Pool } = require('pg');

require('dotenv').config()

// Datos de conexión
const pool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD
})

module.exports = pool;