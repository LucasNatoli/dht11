'use strict';

module.exports = (app, db) => {
  app.get('/dht11', (req, res) => {
    db.dht11.findAll({
      limit: 1,
      order: [ [ 'created_at', 'DESC' ]]
    }).then(function(dht11){
      res.json(dht11)
    })
  })
}
