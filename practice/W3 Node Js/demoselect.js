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
    var sql = "SELECT * FROM user WHERE role='user'";
    con.query(sql, function (err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});