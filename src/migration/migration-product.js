"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      mainImage: {
        type: Sequelize.STRING,
      },
            // Thêm các trường mới cho mỗi loại sản phẩm
      // Màn hình máy tính
      screenBrand: {
        type: Sequelize.STRING,
      },
      screenSize: {
        type: Sequelize.STRING,
      },
      resolution: {
        type: Sequelize.STRING,
      },
      panelType: {
        type: Sequelize.STRING,
      },
      // PC bộ
      pcBrand: {
        type: Sequelize.STRING,
      },
      cpuSeries: {
        type: Sequelize.STRING,
      },
      ramSize: {
        type: Sequelize.STRING,
      },
      // Laptop
      laptopBrand: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      laptopCpuSeries: {
        type: Sequelize.STRING,
      },
      // Thiết bị âm thanh
      audioBrand: {
        type: Sequelize.STRING,
      },
      microphoneType: {
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
    await queryInterface.dropTable("Product");
  },
};
