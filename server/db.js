const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password: "Mann@2108",
    host: "localhost",
    port: 5432,
    database: "demoapp"
})

module.exports = pool;