import orderDetailsService from "../service/orderDetailsService.js";
const handleGetOrderDetailsByOrderId = async (req, res) => {
  try {
    let data = await orderDetailsService.getOrderDetails(req, res);
    return res.status(200).json({
      EM: "Get order details by order id successfully",
      EC: "0",
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error reading order details by order id:", error);
    return res.status(500).json({
      EM: "Get order details by order id failed",
      EC: "-1",
      DT: error,
    });
  }
};
module.exports = { handleGetOrderDetailsByOrderId };