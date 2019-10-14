var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Wqw84vcs',
    database: "users"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("UPDATE users SET birthday = '15-9' WHERE name = 'Norspang'", function (err, result){
        if (err) throw err;
        console.log("inserted");
    })
})