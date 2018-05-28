exports.init = (server)=>{
    server.get('/', function (req, res) {
        res.send("Hello World!");
    });
    return server
}