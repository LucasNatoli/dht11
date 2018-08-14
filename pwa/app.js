(function() {
  'use strict';

  var app = {
    baseUrl: 'http://localhost:3000',
    config: {
      accesories: [
        {
          name: 'Sensor dht11',
          type: 'dht11'
        },
        {
          name: 'Sensor dhg',
          type: 'dhg'
        }
      ]
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(app.config);
  });

})();
