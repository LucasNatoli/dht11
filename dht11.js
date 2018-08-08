'user strict'

module.exports = (sequelize, DataTypes) => {
  const Dht11 = sequelize.define('Dht11', {
    
    temp: {
      type: DataTypes.DECIMAL(5.2)
    },
    hum: {
      type: DataTypes.DECIMAL(5.2)
    }
  }, {
    paranoid: true
  });
  return Dht11;
};