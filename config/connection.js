var mysql = require("mysql");


//mysql://b4f3f4acf31113:e549cc1f@us-cdbr-iron-east-05.cleardb.net/heroku_4f175b3477c2071?reconnect=true
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b4f3f4acf31113',
    password: 'e549cc1f',
    database: 'heroku_4f175b3477c2071'
});

/*var connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "127.0.0.1",
    user: "root",
    password: "1208Dawn!",
    database: "burgers_db"
});*/

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;