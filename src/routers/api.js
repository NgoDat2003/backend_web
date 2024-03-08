import express from "express";
import userController from "../controller/userController";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/user", userController.readAllUser);
  return app.use("/api/v1/", router);
};
export default initWebRoute;
