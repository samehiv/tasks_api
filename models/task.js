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
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: ['completed', 'failed', 'pending', 'started']
      }
    }
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