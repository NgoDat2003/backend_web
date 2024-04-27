import express from "express";
import userController from "../controller/userController";
import jwtMiddleware from "../middleware/jwtMiddleware";
import productController from "../controller/productController";
import roleController from "../controller/roleController";
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;
    if (req.path === '/upload/user') {
      uploadPath = 'src/public/user/';
    } else if (req.path==='/upload/product') {
      uploadPath = 'src/public/user/';
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
  router.post("/product/create",jwtMiddleware.checkUserToken, productController.createProduct);
  router.put("/product/update",jwtMiddleware.checkUserToken, productController.updateProduct);
  router.delete("/product/delete",jwtMiddleware.checkUserToken, productController.deleteProduct);
  router.get("/product/:id", productController.readProductById);


  router.get("/role/read", roleController.handleReallAllRoles);
  return app.use("/api/v1/", router);
};
export default initWebRoute;
