/**
     * Module dependencies.
     */

    var express = require('express');
    var routes = require('./routes');
    var user = require('./routes/user');
    var http = require('http');
    var path = require('path');
    var fs = require('fs');
    var mail = require("nodemailer").mail;

/*List of variables*/

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/main', function(req, res) {

    fs.readFile('./home.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });

});