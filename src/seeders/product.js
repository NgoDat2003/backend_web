'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      { productName: 'Laptop', categoryId: 1, price: 1000, stockQuantity: 50, description: 'High-performance laptop', image: 'laptop.jpg' },
      { productName: 'T-shirt', categoryId: 2, price: 20, stockQuantity: 100, description: 'Cotton T-shirt', image: 'tshirt.jpg' },
      { productName: 'JavaScript Book', categoryId: 3, price: 30, stockQuantity: 30, description: 'Introduction to JavaScript', image: 'javascript_book.jpg' },
      { productName: 'Sofa', categoryId: 4, price: 500, stockQuantity: 10, description: 'Comfortable sofa for living room', image: 'sofa.jpg' },
      // Thêm các giá trị demo khác nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};
