'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Role', [
      { roleName: 'Admin', description: 'Administrator role' },
      { roleName: 'Customer', description: 'Customer role' },
      { roleName: 'Supplier', description: 'Supplier role' },
      // Thêm các giá trị demo khác nếu cần
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Role', null, {});
  }
};
