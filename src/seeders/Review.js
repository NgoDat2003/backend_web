'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Review', [
      { rating: 5, comment: 'Great product', userId: 1, productId: 1 },
      { rating: 4, comment: 'Nice quality', userId: 2, productId: 2 },
      { rating: 3, comment: 'Interesting book', userId: 3, productId: 3 },
      { rating: 5, comment: 'Very comfortable', userId: 2, productId: 4 },
      // Thêm các giá trị demo khác nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Review', null, {});
  }
};
