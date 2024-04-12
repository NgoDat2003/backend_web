'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category', [
      { categoryName: 'Electronics' },
      { categoryName: 'Clothing' },
      { categoryName: 'Books' },
      { categoryName: 'Furniture' },
      // Thêm các giá trị demo khác nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
