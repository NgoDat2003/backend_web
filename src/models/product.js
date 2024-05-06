"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderDetail, { foreignKey: "productId" });
      this.belongsTo(models.Category, { foreignKey: "categoryId" });
      this.hasMany(models.Review, { foreignKey: "productId" });
      this.hasMany(models.Image, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      stockQuantity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      mainImage: DataTypes.STRING,
      // Thêm các trường mới cho mỗi loại sản phẩm
      // Màn hình máy tính
      screenBrand: DataTypes.STRING,
      screenSize: DataTypes.STRING,
      resolution: DataTypes.STRING,
      panelType: DataTypes.STRING,
      // PC bộ
      pcBrand: DataTypes.STRING,
      cpuSeries: DataTypes.STRING,
      ramSize: DataTypes.STRING,
      // Laptop
      laptopBrand: DataTypes.STRING,
      color: DataTypes.STRING,
      laptopCpuSeries: DataTypes.STRING,
      // Thiết bị âm thanh
      audioBrand: DataTypes.STRING,
      microphoneType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
