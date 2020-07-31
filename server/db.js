const Pool = require("pg").Pool;

const pool = new Pool({
    
    // LOCALHOST

    user : "postgres",
    password: "Mann@2108",
    host: "localhost",
    port: 5432,
    database: "demoapp"

    // AWS HOST

    /*user : "postgres",
    password: "postgres",
    host: "database-1.ccngzppkz0b9.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "demoapp"*/
})

module.exports = pool;