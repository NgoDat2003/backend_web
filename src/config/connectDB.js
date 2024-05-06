import Sequelize from "sequelize";

const sequelize = new Sequelize("shop_be", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
});
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default connect;
