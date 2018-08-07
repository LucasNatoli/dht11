const SerialPort = require('serialport')
const port = new SerialPort('/dev/ttyACM0', () => {
  console.log('Port Opened');
});
