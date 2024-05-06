import db from "../models";


const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderDetails = await db.OrderDetail.findAll({
      include: [ { model: db.Product, attributes: ["mainImage","productName"],  } ],
      where: { orderId },
    });
    if (orderDetails) {
      return {
        EM: "Get order details successfully",
        EC: "0",
        DT: orderDetails,
      };
    }
    return {
      EM: "Order details does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error reading order details:", error);
    return {
      EM: "Get order details failed",
      EC: "-1",
      DT: error,
    };
  }
};
const createOrderDetails = async (orderList) => {
  try {
    const orderDetails = await db.OrderDetail.bulkCreate(orderList);
    if (orderDetails) {
      return {
        EM: "Create order details successfully",
        EC: "0",
        DT: orderDetails,
      };
    }
    return {
      EM: "Create order details failed",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error creating order details:", error);
    return {
      EM: "Create order details failed",
      EC: "-1",
      DT: error,
    };
  }
}

module.exports = { getOrderDetails,createOrderDetails };