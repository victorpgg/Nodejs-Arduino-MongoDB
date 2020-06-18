const SerialPort = require('serialport')   
const Readline = SerialPort.parsers.Readline;

const port = new SerialPort('COM2',{
     baudRate: 9600 
    });

const parser = new Readline();
port.pipe(parser);    

module.exports = port;