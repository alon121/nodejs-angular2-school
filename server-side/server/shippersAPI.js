var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');

// ctrls
var shipperCtrl = require('./shipperCtrl.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../client'));
app.use(express.static('../node_modules'));

// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('../client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data) 
    });
   
});

// Listen to '/product' in GET Verb methods
app.get('/shippers', function (req, res) {
    shipperCtrl.Read(function(err, shippers) {
        if (err) {
            res.end('error!');
        }

        res.end(JSON.stringify(shippers));
    })
   
});

// Listen to '/product' in POST Verb methods
 app.post('/product', function (req, res) {
     console.log(req.body); // get the body data of post
     res.end();
 })


// Start the server
var server = app.listen(770, function () {
    console.log('listening to 770')
})