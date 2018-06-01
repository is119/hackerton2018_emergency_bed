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

let moment = require('moment')
let cardName = "admin@hackerton-network"

let composer = require('composer-client');
let BusinessNetworkConnection = composer.BusinessNetworkConnection;

let connection = new BusinessNetworkConnection();
let definition = "";
let factory = definition.getFactory();
//TODO : BedID에 LED 할당 (1,2,3,4)
let bed1 = '0';
let bed2 = '1';
let bed3 = '2';
let bed4 = '3';
businessNetworkConnection.on('event', (event) => {
    // event: { "$class": "org.namespace.BasicEvent", "eventId": "0000-0000-0000-000000#0" }
    if(event.$class = "org.hackerton.EmergencyBedOccupied"){ // ID를 확인해 pin 점등
        if(event.bed == bed1) {}
        if(event.bed == bed2) {}
        if(event.bed == bed3) {}
        if(event.bed == bed4) {}
    }
    else if(event.$class = "EmergencyBedOccupiedComplete"){ // Button 트랜잭션 완료되면 pin 소등
        if(event.bed == bed1) {pin1.value(false)} // off
        if(event.bed == bed2) {pin2.value(false)}
        if(event.bed == bed3) {pin3.value(false)}
        if(event.bed == bed4) {pin4.value(false)}
    }
    console.log(event);
    
});


function btn1_on(){
    pin1.value(!pin1.value())
    console.log("pin1 pochit")
    //BedID에 해당하는 bedOccupiedComplete 트랜잭션 보냄
    connection.submitTransaction()// org.hackerton.bedOccupiedComplete
}
function btn2_on(){
    pin2.value(!pin2.value())
    console.log("pin2 pochit")
    connection.submitTransaction()// org.hackerton.bedOccupiedComplete
}
function btn3_on(){
    pin3.value(!pin3.value())
    console.log("pin3 pochit")
    connection.submitTransaction()// org.hackerton.bedOccupiedComplete
}
function btn4_on(){
    pin4.value(!pin4.value())
    console.log("pin4 pochit")
    connection.submitTransaction()// org.hackerton.bedOccupiedComplete
}

exports.init = function(server){
    button1.on('fall', btn1_on)
    button2.on('fall', btn2_on)
    button3.on('fall', btn3_on)
    button4.on('fall', btn4_on)
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