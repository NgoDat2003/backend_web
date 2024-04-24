import express from "express";
import userController from "../controller/userController";
import jwtMiddleware from "../middleware/jwtMiddleware";
import productController from "../controller/productController";
const router = express.Router();
const initWebRoute = (app) => {
  // router.all("*", jwtMiddleware.checkUserToken);
// 
  router.get("/user", userController.readAllUser);
  router.post("/login",userController.handleLogin);
  router.post("/logout", userController.handleLogout);
  router.post("/register",userController.handleRegister);
  router.get("/account",jwtMiddleware.checkUserToken, userController.handleGetAccount);

  router.put("/user/update",jwtMiddleware.checkUserToken, userController.handleUpdateUser);
  router.get("/user/read", userController.handleReadUserPaginate);

  router.get("/product/read", productController.readProductPaginate);
  router.post("/product/create",jwtMiddleware.checkUserToken, productController.createProduct);
  router.put("/product/update",jwtMiddleware.checkUserToken, productController.updateProduct);
  router.delete("/product/delete",jwtMiddleware.checkUserToken, productController.deleteProduct);
  router.get("/product/:id", productController.readProductById);
  return app.use("/api/v1/", router);
};
export default initWebRoute;
