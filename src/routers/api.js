import express from "express";
import userController from "../controller/userController";
import jwtMiddleware from "../middleware/jwtMiddleware";
import productController from "../controller/productController";
const router = express.Router();
const initWebRoute = (app) => {
  router.all("*", jwtMiddleware.checkUserToken);
  router.get("/user", userController.readAllUser);
  router.post("/login",userController.handleLogin);
  router.post("/logout", userController.handleLogout);
  router.post("/register",userController.handleRegister);
  router.get("/account", userController.handleGetAccount);

  router.get("/product/read", productController.readProductPaginate);
  return app.use("/api/v1/", router);
};
export default initWebRoute;
