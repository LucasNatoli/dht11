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
    console.log('Port Opened')
  }
)

const parser = new parsers.Readline({
  delimiter: '\n'
})

port.pipe(parser)
parser.on('data', ReadSerialData)

app.listen(1280, () => {
  console.log('Raz0r listening on port:', 1280)
})