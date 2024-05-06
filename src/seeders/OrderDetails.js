'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderDetail', [
      { orderId: 1, productId: 1, quantity: 2, unitPrice: 50.00, totalPrice: 100.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 1, productId: 2, quantity: 1, unitPrice: 100.00, totalPrice: 100.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 2, productId: 3, quantity: 1, unitPrice: 200.00, totalPrice: 200.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 2, productId: 4, quantity: 1, unitPrice: 100.00, totalPrice: 100.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 3, productId: 5, quantity: 1, unitPrice: 150.00, totalPrice: 150.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 3, productId: 6, quantity: 2, unitPrice: 75.00, totalPrice: 150.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 4, productId: 7, quantity: 3, unitPrice: 100.00, totalPrice: 300.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 5, productId: 8, quantity: 5, unitPrice: 50.00, totalPrice: 250.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 6, productId: 9, quantity: 7, unitPrice: 50.00, totalPrice: 350.00, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 6, productId: 10, quantity: 2, unitPrice: 100.00, totalPrice: 200.00, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderDetail', null, {});
  }
};