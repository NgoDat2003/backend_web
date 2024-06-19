import Sequelize from "sequelize";
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  null,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false,
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },
  }
);
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default connect;
