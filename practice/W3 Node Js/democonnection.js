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
})