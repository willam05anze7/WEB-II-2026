// const sql = require('mssql');
// require('dotenv').config();

// const config = {
//     server:   process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     port:     parseInt(process.env.DB_PORT),
//     user:     process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     options: {
//         encrypt: false,
//         trustServerCertificate: true,
//         enableArithAbort: true
//     }
// };

// const pool = new sql.ConnectionPool(config);
// const poolConnect = pool.connect();

// poolConnect.then(() => console.log('Conectado a SQL Server'))
//         .catch(err => console.error('Error de conexión:', err.message));

// module.exports = { pool, poolConnect, sql };








//-----trabajando con Express
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:     process.env.DB_PORT
});

export default pool;