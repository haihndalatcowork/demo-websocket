const mysql = require('mysql');
const con = mysql.createConnection({
    host: "remotemysql.com",
    user: "hc0NRaldjW",
    password: "AAlJkn6mFf",
    database: "hc0NRaldjW"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con