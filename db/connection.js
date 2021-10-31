const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "@Springsidelane10",
        database: "business"
    },
    console.log("Connected to the business database.")
);

module.exports = db;


// ** Need to hide crednetials via dotenv **