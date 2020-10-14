var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce'
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = "INSERT INTO user (name, password, role) VALUES ('email.com', 'securepass', 'user')";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("Record inserted");
    });
});