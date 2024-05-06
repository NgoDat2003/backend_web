'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.OrderDetail, { foreignKey: 'orderId' });
    }
  };
  Order.init({
    userId: DataTypes.INTEGER,
    orderStatus: DataTypes.STRING,//đã đặt hàng, đang giao hàng, đã giao hàng, đã hủy,đang đặt hàng
    orderPayment: DataTypes.STRING,//tiền mặt, chuyển khoản
    orderTotal: DataTypes.DECIMAL,
    orderAddress: DataTypes.STRING,
    orderPaymentStatus: DataTypes.STRING,//đã thanh toán, chưa thanh toán
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};