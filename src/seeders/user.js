"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("user", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "123456789",
        address: "123 Main St",
        password: "hashedpassword", // Thay bằng mật khẩu đã được băm
        roleId: 1, // Thay bằng roleId tương ứng
        image: "user_image.jpg",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        phoneNumber: "987654321",
        address: "456 Oak St",
        password: "hashedpassword", // Thay bằng mật khẩu đã được băm
        roleId: 2, // Thay bằng roleId tương ứng
        image: "user_image.jpg",
      },
      // Thêm các bản ghi khác nếu cần
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user", null, {});
  },
};
