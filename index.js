var express = require('express');
const app = express()
app.use(express.static('pwa'));

function ReadSerialData(data){
  console.log(data)
  //do stuff here
}
const SerialPort = require('serialport')
const parsers = SerialPort.parsers
const port = new SerialPort(
  '/dev/ttyACM0', 
  () => {
    console.log('Escuchando DHT11 en /dev/ttyACM0')
  }
)
  

const parser = new parsers.Readline({
  delimiter: '\n'
})

port.pipe(parser)
parser.on('data', ReadSerialData)

/* app.listen(3000, () => {
  console.log('Cultibox wer service running')
  
}) */