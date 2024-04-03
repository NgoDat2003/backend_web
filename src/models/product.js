'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderDetail, { foreignKey: 'productId' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.hasMany(models.Review, { foreignKey: 'productId' });
    }
  };
  Product.init({
    productName: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    stockQuantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};