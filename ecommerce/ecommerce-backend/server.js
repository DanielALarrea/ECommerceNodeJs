const express = require('express');
const bodyParser = require("body-parser");
const port = 3080;
const cors = require('cors');
const con = require('./connection');

const app = express()
      .use(cors())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users', (req, res) => {
  con.query("SELECT * FROM users", function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.get('/api/users/authenticate', (req, res) => {
  const email    = req.query.email;
  const password = req.query.password;
  con.query("SELECT id FROM users WHERE email = ? AND password = ?", 
           [email, password], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  con.query("SELECT * FROM users WHERE id = ?", id, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/api/users', (req, res) => {
  var user = {
    email     : req.body.email,
    password  : req.body.password,
    role      : req.body.role
  }
  con.query("INSERT INTO users SET ?", user, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  var user = {
    email     : req.body.email,
    password  : req.body.password,
    role      : req.body.role
  }
  con.query("UPDATE users SET ? WHERE id = ?", 
            [user, id], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  con.query("DELETE FROM users WHERE id = ?", id, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});