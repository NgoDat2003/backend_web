import express from "express";
import userController from "../controller/userController";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/user", userController.readAllUser);
  router.post("/login",userController.handleLogin);
  router.post("/register",userController.handleRegister);
  return app.use("/api/v1/", router);
};
export default initWebRoute;
