var pin1 = require("pi-pins").connect(121),
    pin2 = require("pi-pins").connect(122),
    pin3 = require("pi-pins").connect(123),
    pin4 = require("pi-pins").connect(124),
    button1 = require("pi-pins").connect(125),
    button2 = require("pi-pins").connect(126),
    button3 = require("pi-pins").connect(127),
    button4 = require("pi-pins").connect(129);

pin1.mode('out')
pin2.mode('out')
pin3.mode('out')
pin4.mode('out')
button1.mode('in')
button2.mode('in')
button3.mode('in')
button4.mode('in')

exports.init = function(server){
    button1.on('fall', function(){
        pin1.value(!pin1.value())
        console.log("pin1 pochit")
    
    })
    button2.on('fall', function(){
        pin2.value(!pin2.value())
        console.log("pin2 pochit")
    })
    button3.on('fall', function(){
        pin3.value(!pin3.value())
        console.log("pin3 pochit")
    })
    button4.on('fall', function(){
        pin3.value(!pin3.value())
        console.log("pin4 pochit")
    })
    server.get('/', function (req, res) {
        msg = `${button1.value(),button2.value(),button3.value(),button4.value()}`
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