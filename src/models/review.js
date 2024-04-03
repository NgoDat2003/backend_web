'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  
  Review.init({
    rating: DataTypes.INTEGER, // Điểm đánh giá (1-5, ví dụ)
    comment: DataTypes.TEXT, // Bình luận đánh giá
    userId: DataTypes.INTEGER, // Khóa ngoại liên kết với User
    productId: DataTypes.INTEGER, // Khóa ngoại liên kết với Product
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};