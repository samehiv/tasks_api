'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    fromLocation: DataTypes.STRING,
    toLocation: DataTypes.STRING,
    deliveryDate: DataTypes.STRING,
    startedAt: DataTypes.STRING,
    finishedAt: DataTypes.STRING,
    driverName: DataTypes.STRING,
    courier: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    driverComment: DataTypes.STRING,
  }, {
    scopes: {
      dateSorted(dir = 'ASC') {
        return {
          order: [
            ['deliveryDate', dir]
          ]
        }
      },
      statusSorted(dir = 'ASC') {
        return {
          order: [
            ['status', dir.toUpperCase()]
          ]
        }
      }
    }
  });
  return Task;
};