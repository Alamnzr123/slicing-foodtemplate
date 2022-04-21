const {Pool} = require('pg')
const {
    PGHOST,
    PGUSER,
    PGPASSWORD,
    PGDATABASE,
    PGPORT
} = require('../helper/env')

const db = new Pool({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: PGPORT
});

db.connect((err) => {
    if (err) {
        console.log(err);
    }
});

module.exports = db;