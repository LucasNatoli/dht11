
const db = require('./db')
const SerialPort = require('serialport')
const parsers = SerialPort.parsers

const parser = new parsers.Readline({
  delimiter: '\n'
})

function ReadSerialData(data){
  console.log(data)
  try {
    var newRead = JSON.parse(data)
    var record = Db.dht11.build({
      temp: data.temperature,
      hum: data.humidity
    })
  record.save();
  } catch (e) {
    console.log(e)
  }
}

db.sequelize.sync().then(() => {
  console.log('db sync ok')
  var port = new SerialPort(
    '/dev/ttyACM0', 
    () => {
      console.log('Port Opened')
      port.pipe(parser)
      parser.on('data', ReadSerialData)
    }
  )
})

