import orderService from "../service/orderService.js";
const handleGetOrderPagination = async (req, res) => {
  try {
    let data = await orderService.readAllOrderPagination(req, res);
    return res.status(200).json({
      EM: "Get all order successfully",
      EC: "0",
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error reading all order:", error);
    return res.status(500).json({
      EM: "Get all order failed",
      EC: "-1",
      DT: error,
    });
  }
};
const handleCreateOrder = async (req, res) => {
  try {
    let data = await orderService.createOrder(req, res);
    return res.status(200).json({
      EM: "Create order successfully",
      EC: "0",
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      EM: "Create order failed",
      EC: "-1",
      DT: error,
    });
  }
};
const handleUpdateOrder = async (req, res) => {
  try {
    let data = await orderService.updateOrder(req, res);
    return res.status(200).json({
      EM: "Update order successfully",
      EC: "0",
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({
      EM: "Update order failed",
      EC: "-1",
      DT: error,
    });
  }
};
const handleGetOrderById = async (req, res) => {
  try {
    let data = await orderService.readOrderById(req, res);
    return res.status(200).json({
      EM: "Get order by id successfully",
      EC: "0",
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error reading order by id:", error);
    return res.status(500).json({
      EM: "Get order by id failed",
      EC: "-1",
      DT: error,
    });
  }
}
module.exports = {
  handleGetOrderPagination,
  handleCreateOrder,
  handleUpdateOrder,
  handleGetOrderById
};
