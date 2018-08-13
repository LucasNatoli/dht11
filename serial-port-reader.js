
const db = require('./db')
const SerialPort = require('serialport')
const parsers = SerialPort.parsers

const parser = new parsers.Readline({
  delimiter: '\n'
})

function ReadSerialData(data){
  console.log(data)
/*   var record = Db.dht11.build({
    temp: 20.02,
    hum: 14.00
  })
  record.save(); */
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

