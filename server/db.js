const Pool = require("pg").Pool;

const pool = new Pool({
    user: "pgadminfc",
    password: "FlashCard90",
    host: "localhost",
    port: 5432,
    database: "flash_card"
});

module.exports = pool;