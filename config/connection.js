var mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.PORT || 3030,
    host: "localhost",
    user: "root",
    password: "1208Dawn!",
    database: "burgers"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;