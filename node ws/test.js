var express = require('express');
var app = express();
const mysql = require('mysql');
const dbconfig = require('./connect.js');
var bodyParser = require('body-parser');
 const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
const dbConn = mysql.createConnection({

   host: dbconfig.host,
   
   port: dbconfig.port,
   
   database: dbconfig.database,

   user: dbconfig.user,

   password: dbconfig.password

 });
 
 // default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
// connect to database
dbConn.connect(); 
// Retrieve all users 
app.get('/sites', function (req, res) {
    dbConn.query('SELECT * FROM tt_bts_file', function (error, results, fields) {
        if (error) throw error;
        return res.json(results);
    });
});
// Retrieve all users 
app.get('/dg', function (req, res) {
    dbConn.query('SELECT * FROM view_2g_monthly_stat', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        return res.json(results);
    });
});

// Retrieve all users 
app.get('/tg', function (req, res) {
    dbConn.query('SELECT * FROM view_3g_monthly_stat', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        return res.json(results);
    });
});
 
 app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;