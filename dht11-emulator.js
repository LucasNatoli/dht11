var SerialPort = require("serialport")

var port = new SerialPort(
  '/dev/ttyACM0', 
  () => {
    console.log('Port Opened')
    port.write("{temperature: 20.04, humidity: 14.00}")
  }
)

