import express from "express";
import userController from "../controller/userController";
import jwtMiddleware from "../middleware/jwtMiddleware";
import productController from "../controller/productController";
import roleController from "../controller/roleController";
import categoryController from "../controller/categoryController";  
import imageController from "../controller/imageController";
import orderController from "../controller/orderController";
import orderDetailController from "../controller/orderDetailsController";
const router = express.Router();
const multer = require("multer");
require('dotenv').config()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;
    if (req.path === '/upload/user') {
      uploadPath = 'src/public/user/';
    } else if (req.path==='/upload/product') {
      uploadPath = 'src/public/product/';
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const initWebRoute = (app) => {
  // router.all("*", jwtMiddleware.checkUserToken);
  router.post("/upload/user",upload.single('image'), jwtMiddleware.handleUpload)
  router.post("/upload/product",upload.single('image'), jwtMiddleware.handleUpload)
  // 
  router.get("/user", userController.readAllUser);
  router.post("/login",userController.handleLogin);
  router.post("/logout", userController.handleLogout);
  router.post("/register",userController.handleRegister);
  router.get("/account",jwtMiddleware.checkUserToken, userController.handleGetAccount);

  router.put("/user/update/:id",jwtMiddleware.checkUserToken, userController.handleUpdateUser);
  router.get("/user/read", userController.handleReadUserPaginate);
  router.post("/user/create",jwtMiddleware.checkUserToken,userController.handleCreateUser);
  router.delete("/user/delete/:id",jwtMiddleware.checkUserToken,userController.handleDeleteUser);

  router.get("/product/read", productController.readProductPaginate);
  router.get("/product/readAll", productController.readAllProduct);
  router.post("/product/create",jwtMiddleware.checkUserToken, productController.createProduct);
  router.get("/product/search", productController.searchProduct);
  router.get("/product/readByCategory", productController.readProductPaginateByCategoryId);
  router.put("/product/update/:id",jwtMiddleware.checkUserToken, productController.updateProduct);
  router.delete("/product/delete/:id",jwtMiddleware.checkUserToken, productController.deleteProduct);
  router.get("/product/:id", productController.readProductById);
  
  router.get("/order/read", orderController.handleGetOrderPagination);
  router.post("/order/create", orderController.handleCreateOrder);
  router.put("/order/update/:id", orderController.handleUpdateOrder);
  router.get("/order/readbyid", orderController.handleGetOrderById);
  
  router.get("/orderDetail/read/:id", orderDetailController.handleGetOrderDetailsByOrderId);
  
  
  router.get("/category/read", categoryController.readAllCategory);
  router.get("/category/filter", productController.readFilterProduct);
  router.get("/role/read", roleController.handleReallAllRoles);
  router.get("/image/:id", imageController.handleGetSubImageByProductId);

  router.get("/statistic", productController.handleGetStatistic);

  router.get("/payment/config",(req,res)=>{
    return res.status(200).json({
      EM: "OK",
      EC: "0",
      DT: process.env.CLIENT_ID
    })
  
  });
  return app.use("/api/v1/", router);
};
export default initWebRoute;
