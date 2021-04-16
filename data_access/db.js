const config = require("../config");
const mysql = require("mysql2/promise");

async function performQuery(query, params) {
    const connection =  await mysql.createConnection(config.db);
    const [results, ] = await connection.query(query, params);
    return results;
}

module.exports = {performQuery};