var express = require('express');
var https = require('https');
var fs = require('fs');
var sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

var app = express();

var router = require('./router.js')

var server = router.init(app);

https.createServer(sslOptions, server).listen(8443);