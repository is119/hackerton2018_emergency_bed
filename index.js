let express = require('express');
let https = require('https');
let fs = require('fs');
let sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

let app = express();

let router = require('./router.js')

let server = router.init(app);

https.createServer(sslOptions, server).listen(8443);