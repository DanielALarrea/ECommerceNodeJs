const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const router = express.Router();

app.use(session({secret: 'ssshhhhh', saveUninitialized: true, resave: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess; // demo purposes only

router.get('/', (req,res) => {
    sess = req.session;
    if(sess.email) {
        return res.redirect('/admin');
    }
    res.send('Ok');
});

router.post('/login', (req,res) => {
    sess = req.session;
    sess.email = req.body.email;
    res.end('done');
});

router.get('/admin', (req, res) => {
    sess = req.session;
    if(sess.email) {
        res.write('<h1>Hello ${sess.email}</h1><br>');
        res.end('<a href ='+'/logout'+'>Logout</a>');
    } else {
        res.write('<h1>Please login first</h1><br>');
        res.end('<a href ='+'/'+'>Login</a>')
    }
});

router.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('App started on Port ${process.env.PORT || 3000}');
});

// console.log("Web server is listening at port " + (process.env.port || 3000));