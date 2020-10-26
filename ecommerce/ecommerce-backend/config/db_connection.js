var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ecommerce"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "select * from users"
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  // con.end(function(err) {
  //   if(err) {
  //     return console.log(err);
  //   }
  //   console.log("Database closing");
  // });