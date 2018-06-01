let moment = require('moment')
let cardName = "admin@hackerton-network"

let composer = require('composer-client');
let BusinessNetworkConnection = composer.BusinessNetworkConnection;

let connection = new BusinessNetworkConnection();
let definition = "";

main();

async function main(){
    definition = await connection.connect(cardName);

    var before = moment().unix()
    await removeAll('org.hackerton.Hospital');
    var after = moment().unix()
    console.log(after-before)

    var before = moment().unix()
    await addHospital("A병원");
    await addHospital("B병원");
    await addHospital("C병원");
    await addHospital("D병원");
    await addHospital("E병원");
    var after = moment().unix()
    console.log(after-before)

    var before = moment().unix()
    let HospitalList = await getAll('org.hackerton.Hospital');
    for(let i=0; i < HospitalList.length; i++){
        console.log(`${HospitalList[i].HospitalID}: ${HospitalList[i].name}`);
    }
    var after = moment().unix()
    console.log(after-before)
}

function login(){}
function session(){}

async function request(requester, x, y){
    let serializer = definition.getSerializer();

    let registry = connection.getAssetRegistry('org.hackerton.Patient');
    let factory = definition.getFactory();
    let currentTime = moment().unix();

    patient = factory.newResource('org.hackerton', 'Patient', currentTime)
    patient.requester = requester
    patient.x = x
    patient.y = y

    await this.registry.addAll([request]);

    let request = serializer.fromJSON({
        "$class" : 'org.hackerton.requestEmergencyCar',
        'patient' : patient,
        'requester' : requester,
        'x' : x,
        'y' : y
    })

    await connection.submitTransaction(request)
}

async function addHospital(name){
    let registry = await connection.getParticipantRegistry('org.hackerton.Hospital');
    let factory = definition.getFactory();

    let currentTime = moment().unix();
    hospital = factory.newResource('org.hackerton','Hospital', currentTime.toString());
    hospital.name = name;
    await registry.add(hospital);;
}

async function getAll(FDQN){
    let registry = await connection.getParticipantRegistry(FDQN);
    let list = await registry.getAll();
    
    return list;
}
async function removeAll(FDQN){
    let registry = await connection.getParticipantRegistry(FDQN);
    let list = await registry.getAll();
    await registry.removeAll(list)
}
function removeAllHospital(){

}

function addDoctor(){

}
function getSchedule(){}
function setSchedule(){}
function deleteSchedule(){}


function addCar(){}
function modifyCar(){}