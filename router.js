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

function check_event(){
    if(button1.value()){
        pin1.value(!pin1.value())
        console.log("pin1 pochit")
    }
        if(button2.value()){
        pin2.value(!pin2.value())
        console.log("pin2 pochit")
    }
    if(button3.value()){
        pin3.value(!pin3.value())
        console.log("pin3 pochit")
    }
    if(button4.value()){
        pin4.value(!pin4.value())
        console.log("pin4 pochit")
    }
}

exports.init = function(server){
    button1.on('fall', check_event)
    button2.on('fall', check_event)
    button3.on('fall', check_event)
    button4.on('fall', check_event)
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