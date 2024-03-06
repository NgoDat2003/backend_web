import sequelize from "sequelize";

const sequelize = new sequelize("database", "username", "password", {
  host: "localhost",
  dialect: mysql,
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
