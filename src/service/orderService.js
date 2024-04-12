import db from "../models";

const createOrder = async (order) => {
  try {
    const newOrder = await db.Order.create(order);
    if (newOrder) {
      return {
        EM: "Create order successfully",
        EC: "0",
        DT: newOrder,
      };
    }
    return {
      EM: "Create order failed",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      EM: "Create order failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readAllOrder = async () => {
  try {
    const list = await db.Order.findAll();
    return {
      EM: "Get all order successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.error("Error reading all order:", error);
    return {
      EM: "Get all order failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readOrderById = async (orderId) => {
  try {
    const order = await db.Order.findOne({ where: { id: orderId } });
    if (order) {
      return {
        EM: "Get order by id successfully",
        EC: "0",
        DT: order,
      };
    }
    return {
      EM: "Order does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error reading order by id:", error);
    return {
      EM: "Get order by id failed",
      EC: "-1",
      DT: error,
    };
  }
};
const updateOrder = async (orderId, order) => {
  try {
    const updatedOrder = await db.Order.update(order, {
      where: { id: orderId },
    });
    if (updatedOrder) {
      return {
        EM: "Update order successfully",
        EC: "0",
        DT: updatedOrder,
      };
    }
    return {
      EM: "Update order failed",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error updating order:", error);
    return {
      EM: "Update order failed",
      EC: "-1",
      DT: error,
    };
  }
};
const deleteOrder = async (orderId) => {
  try {
    const order = await db.Order.findOne({ where: { id: orderId } });
    if (!order) {
      return {
        EM: "Order does not exist",
        EC: "1",
        DT: "",
      };
    }
    await order.destroy();
    return {
      EM: "Delete order successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.error("Error deleting order:", error);
    return {
      EM: "Delete order failed",
      EC: "-1",
      DT: error,
    };
  }
};
module.exports = {
  createOrder,
  readAllOrder,
  readOrderById,
  updateOrder,
  deleteOrder,
};
