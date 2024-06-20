require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DB_USER ,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST ,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT ,
    "define":{
      "freezeTableName": true
    }
  },
  "test": {
    "username": process.env.DB_USER || "root",
    "password": null,
    "database": process.env.DB_DATABASE || "database_test",
    "host": "127.0.0.1",
    "dialect": process.env.DB_DIALECT ,
  },
  "production": {
    "username": process.env.DB_USER || "root",
    "password": null,
    "database": process.env.DB_DATABASE || "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT ,
  }
};
