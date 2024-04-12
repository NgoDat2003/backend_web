'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phoneNumber: '123456789', address: '123 Main St', password: 'password', roleId: 1, image: 'user.jpg' },
      { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phoneNumber: '987654321', address: '456 Elm St', password: 'password', roleId: 2, image: 'user.jpg' },
      { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', phoneNumber: '555555555', address: '789 Oak St', password: 'password', roleId: 2, image: 'user.jpg' },
      // Thêm các giá trị demo khác nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  }
};
