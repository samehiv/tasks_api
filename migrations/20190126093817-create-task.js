'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fromLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      toLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startedAt: {
        type: Sequelize.STRING,
      },
      finishedAt: {
        type: Sequelize.STRING,
      },
      driverName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      courier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      driverComment: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};