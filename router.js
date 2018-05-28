var pin1 = require("pi-pins").connect(121),
    pin2 = require("pi-pins").connect(122),
    pin3 = require("pi-pins").connect(123),
    pin4 = require("pi-pins").connect(124),
    pin5 = require("pi-pins").connect(125),
    pin6 = require("pi-pins").connect(126),
    pin7 = require("pi-pins").connect(127),
    pin8 = require("pi-pins").connect(129);

pin1.mode('out')
pin2.mode('out')
pin3.mode('out')
pin4.mode('out')
pin5.mode('in')
pin6.mode('in')
pin7.mode('in')
pin8.mode('in')

exports.init = (server)=>{
    pin5.on('fall', function(){
        pin1.mode(!pin1.value())
    })
    pin6.on('fall', function(){
        pin2.mode(!pin2.value())    
    })
    pin7.on('fall', function(){
        pin3.mode(!pin3.value())    
    })
    pin8.on('fall', function(){
        pin4.mode(!pin4.value())    
    })

    server.get('/', function (req, res) {
        msg = `${pin5.value(),pin6.value(),pin7.value(),pin8.value()}`
        res.send("Hello World!");
    });
    return server
}

function loop_handler(){

}
function loop(){
    loop_handler()
    setTimeout(loop,1000);
}