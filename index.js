require('./src/Connections/ConnectionDb');
const port = require('./src/Connections/ConnectionSerial');
const TempModel = require('./src/models/Temp');
const moment = require('moment');

port.on("open",()=>{
    console.log("Comunicando...");
});
    
port.on("data",(data) => {
    const temperature = data;
    const date_received = moment().format();
    if(temperature!=0){
        const teste = TempModel.create({
            temperature,
            date_received,
        });
        console.log(temperature.toString());
        return(teste);
    };
});
