"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controller/userController"));
var _jwtMiddleware = _interopRequireDefault(require("../middleware/jwtMiddleware"));
var _productController = _interopRequireDefault(require("../controller/productController"));
var _roleController = _interopRequireDefault(require("../controller/roleController"));
var _categoryController = _interopRequireDefault(require("../controller/categoryController"));
var _imageController = _interopRequireDefault(require("../controller/imageController"));
var _orderController = _interopRequireDefault(require("../controller/orderController"));
var _orderDetailsController = _interopRequireDefault(require("../controller/orderDetailsController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var multer = require("multer");
require('dotenv').config();
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var uploadPath;
    if (req.path === '/upload/user') {
      uploadPath = 'src/public/user/';
    } else if (req.path === '/upload/product') {
      uploadPath = 'src/public/product/';
    }
    cb(null, uploadPath);
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({
  storage: storage
});
var initWebRoute = function initWebRoute(app) {
  // router.all("*", jwtMiddleware.checkUserToken);
  router.post("/upload/user", upload.single('image'), _jwtMiddleware["default"].handleUpload);
  router.post("/upload/product", upload.single('image'), _jwtMiddleware["default"].handleUpload);
  // 
  router.get("/user", _userController["default"].readAllUser);
  router.post("/login", _userController["default"].handleLogin);
  router.post("/logout", _userController["default"].handleLogout);
  router.post("/register", _userController["default"].handleRegister);
  router.get("/account", _jwtMiddleware["default"].checkUserToken, _userController["default"].handleGetAccount);
  router.put("/user/update/:id", _jwtMiddleware["default"].checkUserToken, _userController["default"].handleUpdateUser);
  router.get("/user/read", _userController["default"].handleReadUserPaginate);
  router.post("/user/create", _jwtMiddleware["default"].checkUserToken, _userController["default"].handleCreateUser);
  router["delete"]("/user/delete/:id", _jwtMiddleware["default"].checkUserToken, _userController["default"].handleDeleteUser);
  router.get("/product/read", _productController["default"].readProductPaginate);
  router.get("/product/readAll", _productController["default"].readAllProduct);
  router.post("/product/create", _jwtMiddleware["default"].checkUserToken, _productController["default"].createProduct);
  router.get("/product/search", _productController["default"].searchProduct);
  router.get("/product/readByCategory", _productController["default"].readProductPaginateByCategoryId);
  router.put("/product/update/:id", _jwtMiddleware["default"].checkUserToken, _productController["default"].updateProduct);
  router["delete"]("/product/delete/:id", _jwtMiddleware["default"].checkUserToken, _productController["default"].deleteProduct);
  router.get("/product/:id", _productController["default"].readProductById);
  router.get("/order/read", _orderController["default"].handleGetOrderPagination);
  router.post("/order/create", _orderController["default"].handleCreateOrder);
  router.put("/order/update/:id", _orderController["default"].handleUpdateOrder);
  router.get("/order/readbyid", _orderController["default"].handleGetOrderById);
  router.get("/orderDetail/read/:id", _orderDetailsController["default"].handleGetOrderDetailsByOrderId);
  router.get("/category/read", _categoryController["default"].readAllCategory);
  router.get("/category/filter", _productController["default"].readFilterProduct);
  router.get("/role/read", _roleController["default"].handleReallAllRoles);
  router.get("/image/:id", _imageController["default"].handleGetSubImageByProductId);
  router.get("/statistic", _productController["default"].handleGetStatistic);
  router.get("/payment/config", function (req, res) {
    return res.status(200).json({
      EM: "OK",
      EC: "0",
      DT: process.env.CLIENT_ID
    });
  });
  return app.use("/api/v1/", router);
};
var _default = exports["default"] = initWebRoute;