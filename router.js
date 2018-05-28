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
        console.log("btn1 pressed")
        if(pin1.value()){ // true = high
            pin1.mode('low');
            console.log('pin1 low');
        } else{
            pin1.mode('high');
            console.log('pin1 high');
        }
    })
    button2.on('fall', function(){
        console.log("btn2 pressed")
        if(pin2.value()){ // true = high
            pin2.mode('low');
            console.log('pin2 low');
        } else{
            pin2.mode('high');
            console.log('pin2 high');
        }
    })
    button3.on('fall', function(){
        console.log("btn3 pressed")
        if(pin3.value()){ // true = high
            pin3.mode('low');
            console.log('pin3 low');
        } else{
            pin3.mode('high');
            console.log('pin3 high');
        }
    })
    button4.on('fall', function(){
        console.log("btn4 pressed")
        if(pin4.value()){ // true = high
            pin4.mode('low');
            console.log('pin4 low');
        } else{
            pin4.mode('high');
            console.log('pin4 high');
        }
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