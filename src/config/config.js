require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": null,
    "database": process.env.DB_DATABASE || "shop_be",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || 3306,
    "dialect": process.env.DB_DIALECT || "mysql",
    "define":{
      "freezeTableName": true
    }
  },
  "test": {
    "username": process.env.DB_USER || "root",
    "password": null,
    "database": process.env.DB_DATABASE || "database_test",
    "host": "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "mysql",
  },
  "production": {
    "username": process.env.DB_USER || "root",
    "password": null,
    "database": process.env.DB_DATABASE || "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "mysql",
  }
};
