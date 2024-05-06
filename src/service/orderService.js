import db from "../models";
import orderDetailService from "./orderDetailsService";
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      orderStatus,
      orderPayment,
      orderTotal,
      orderAddress,
      orderPaymentStatus,
      productList,
    } = req.body;

    const newOrder = await db.Order.create({
      userId: userId,
      orderStatus: orderStatus,
      orderPayment: orderPayment,
      orderTotal: orderTotal,
      orderAddress: orderAddress,
      orderPaymentStatus: orderPaymentStatus,
    });

    if (newOrder) {
      let orderDetails = productList.map((product) => {
        return {
          orderId: newOrder.id,
          productId: product.productId,
          quantity: product.quantity,
          unitPrice: product.unitPrice,
          totalPrice: product.totalPrice,
        };
      });
      let newOrderDetails = await orderDetailService.createOrderDetails(
        orderDetails
      );
      if (+orderDetails.EC !== 0) {
        return {
          EM: "Create order failed",
          EC: "1",
          DT: newOrderDetails.DT,
        };
      }
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
const readAllOrderPagination = async (req, res) => {
  try {
    const limit = req.query.limit ||10;
    const currentPage = req.query.currentPage || 1;
    const sort = req.query.sort ? req.query.sort.split(",") : ["id"];
    const order = req.query.order ? req.query.order.split(",") : ["ASC"];
    const totalItems = await db.Order.count();
    const offset = (currentPage - 1) * limit;
    const list = await db.Order.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "firstName", "lastName", "email"],
        },
      ],
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || "ASC"]),
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: list,
      totalItems: totalItems,
    };
    return {
      EM: "Get all order successfully",
      EC: "0",
      DT: data,
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
const readOrderById = async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const currentPage = req.query.currentPage || 1;
    const sort = req.query.sort ? req.query.sort.split(",") : ["id"];
    const order = req.query.order ? req.query.order.split(",") : ["ASC"];
    const idUser = req.query.id;
    const orderStatus = req.query.orderStatus;
    if (!idUser && !orderStatus) {
      return {
        EM: "Get all order failed",
        EC: "1",
        DT: "Missing required parameter",
      };
    }
    console.log("idUser", idUser, "orderStatus", orderStatus);
    const totalItems = await db.Order.count({
      where: {
        userId: idUser,
        orderStatus: orderStatus,
      },
    });
    const offset = (currentPage - 1) * limit;
    const list = await db.Order.findAll({
      where: {
        userId: idUser,
        orderStatus: orderStatus,
      },
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || "ASC"]),
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: list,
      totalItems: totalItems,
    };
    return {
      EM: "Get all order successfully",
      EC: "0",
      DT: data,
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
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = req.body;
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
  readAllOrderPagination,
  readOrderById,
  updateOrder,
  deleteOrder,
};
