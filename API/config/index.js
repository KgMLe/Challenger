require("dotenv").config()
const { createPool } = require("mysql")
const connection = createPool({
    host:process.env.dbHost,
    database:process.env.dbName,
    user:process.env.dbUsername,
    password:process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30
})
// exporting this variable so we can use it anywhere else
module.exports = connection

// create connection, in the config file