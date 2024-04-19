import db from "../models";

let readAllProduct = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      attributes: ["id", "name", "price", "image", "description"],
      nest: true,
      raw: true,
    });
    return {
      EM: "Get all product success",
      EC: "0",
      DT: products,
    };
  } catch (error) {
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};
let readProductPaginate = async (req, res) => {
  try {
    console.log(req.query);
    const limit = req.query.limit;
    const offset = req.query.offset;
    const totalItems = await db.Product.count();
    const products = await db.Product.findAll({
      attributes: ["id", "productName", "price", "image", "description","stockQuantity","categoryId"],
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    const currentPage = parseInt(offset) / parseInt(limit) + 1;
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
        currentPage: currentPage,
        totalPage: totalPages,
        data: products,
    }
    return {
      EM: "Get all product success",
      EC: "0",
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};



module.exports =  { readAllProduct, readProductPaginate };