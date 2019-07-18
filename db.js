'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'mydbadmin',
    password: '8JOhzskPN2pABnhb',
    database: 'scrapky_dealer'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;