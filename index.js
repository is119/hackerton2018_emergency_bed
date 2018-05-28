let express = require('express');
let http = require('http');
let https = require('https');
let fs = require('fs');

let server = express();
server.get('/', function (req, res) {
    res.send("Hello World!");
});
http.createServer(server).listen(8000);