"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      orderStatus: {
        type: Sequelize.STRING,
      },
      orderPayment: {
        type: Sequelize.STRING,
      },
      orderTotal: {
        type: Sequelize.DECIMAL,
      },
      orderAddress: {
        type: Sequelize.STRING,
      },
      orderPaymentStatus: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Order");
  },
};
