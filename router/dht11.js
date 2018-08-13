'use strict';

module.exports = (app, db) => {
  app.get('/dht11', (req, res) => {
    db.dht11.findAll({
      limit: 1,
      order: [ [ 'createdAt', 'DESC' ]]
    }).then(function(dht11){
      res.json(dht11)
    })
  })
}
