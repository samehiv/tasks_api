'use strict';

const tasks = [
  {
    "fromLocation": "25.204849,55.270783",
    "toLocation": "25.125386, 55.227821",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 01:36:08",
    "finishedAt": "2019-05-10 01:56:09",
    "driverName": "Marko Pandres",
    "courier": "FastWay",
    "description": "Deliver a credit card, user must sign",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.191099, 55.283402",
    "toLocation": "25.127795, 55.226619",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 04:26:08",
    "finishedAt": "2019-05-10 04:56:00",
    "driverName": "Anmol Dares",
    "courier": "Wimo",
    "description": "Deliver a bank statement",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.194594, 55.274034",
    "toLocation": "25.138623, 55.231355",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 09:21:18",
    "finishedAt": "2019-05-10 09:43:00",
    "driverName": "Marko Pandres",
    "courier": "FastWay",
    "description": "Deliver souq.com order",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.166517, 55.278027",
    "toLocation": "25.089483, 55.189321",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 09:16:38",
    "finishedAt": "2019-05-10 04:33:10",
    "driverName": "Adam Aldo",
    "courier": "Wimo",
    "description": "Grocery Delivery",
    "status": "failed",
    "driverComment": "Can't reach the customer, customer not answering calls"
  },
  {
    "fromLocation": "25.166517, 55.278027",
    "toLocation": "25.074626, 55.193905",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 11:23:03",
    "finishedAt": "2019-05-10 04:44:40",
    "driverName": "Marko Pandres",
    "courier": "FastWay",
    "description": "Deliver a credit card, user must sign",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.166051, 55.271847",
    "toLocation": "25.074626, 55.193905",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 11:26:08",
    "finishedAt": "2019-05-10 11:56:00",
    "driverName": "Adam Aldo",
    "courier": "Wimo",
    "description": "Deliver noon.com shipping",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.194594, 55.274034",
    "toLocation": "25.089483, 55.189321",
    "deliveryDate": "2019-05-10",
    "startedAt": "2019-05-10 15:56:28",
    "finishedAt": "2019-05-10 16:32:40",
    "driverName": "Anmol Dares",
    "courier": "Wimo",
    "description": "Deliver a document shipping",
    "status": "completed",
    "driverComment": ""
  },
  {
    "fromLocation": "25.089240, 55.211242",
    "toLocation": "25.138623, 55.231355",
    "deliveryDate": "2019-05-22",
    "startedAt": "",
    "finishedAt": "",
    "driverName": "Nazih Omar",
    "courier": "FastWay",
    "description": "Deliver emirates ID",
    "status": "pending",
    "driverComment": ""
  },
  {
    "fromLocation": "25.166051, 55.271847",
    "toLocation": "25.127795, 55.226619",
    "deliveryDate": "2019-05-12",
    "startedAt": "2019-05-12 13:06:08",
    "finishedAt": "",
    "driverName": "Marko Pandres",
    "courier": "FastWay",
    "description": "Deliver emirates ID",
    "status": "started",
    "driverComment": ""
  },
  {
    "fromLocation": "25.194594, 55.274034",
    "toLocation": "25.125386, 55.227821",
    "deliveryDate": "2019-05-25",
    "startedAt": "",
    "finishedAt": "",
    "driverName": "Adam Aldo",
    "courier": "Wimo",
    "description": "Deliver a souq.com shipping",
    "status": "pending",
    "driverComment": ""
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
