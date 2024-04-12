import db from "../models";
const createOrderProduct = async (orderProduct) => {
  try {
    const newOrderProduct = await db.OrderProduct.create(orderProduct);
    if (newOrderProduct) {
      return {
        EM: "Create order product successfully",
        EC: "0",
        DT: newOrderProduct,
      };
    }
    return {
      EM: "Create order product failed",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error creating order product:", error);
    return {
      EM: "Create order product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readAllOrderProduct = async () => {
  try {
    const list = await db.OrderProduct.findAll();
    return {
      EM: "Get all order product successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.error("Error reading all order product:", error);
    return {
      EM: "Get all order product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readOrderProductById = async (orderProductId) => {
  try {
    const orderProduct = await db.OrderProduct.findOne({ where: { id: orderProductId } });
    if (orderProduct) {
      return {
        EM: "Get order product by id successfully",
        EC: "0",
        DT: orderProduct,
      };
    }
    return {
      EM: "Order product does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error reading order product by id:", error);
    return {
      EM: "Get order product by id failed",
      EC: "-1",
      DT: error,
    };
  }
};
module.exports = { createOrderProduct, readAllOrderProduct, readOrderProductById };