'use strict';

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: './homebox.db'
})

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dht11 = require('./dht11')(sequelize, Sequelize)

module.exports = db
