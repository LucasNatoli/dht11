'use strict';

const env = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'cultibox',
    'cultibox',
    'cultibox',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        define: {
            underscored: true
        },
        logging: false
    }
);

var db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.dht11 = require('./dht11')(sequelize, Sequelize)

module.exports = db
