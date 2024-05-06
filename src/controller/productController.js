import productService from "../service/productService";

let readAllProduct = async (req, res) => {
    try {
        let data = await productService.readAllProduct();
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
    }

let readProductPaginate = async (req, res) => {
    try {
        let data = await productService.readProductPaginate(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
let createProduct = async (req, res) => {
    try {
        let data = await productService.createProduct(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
let updateProduct = async (req, res) => {
    try {
        let data = await productService.updateProduct(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
let deleteProduct = async (req, res) => {
    try {
        let data = await productService.deleteProduct(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
let readProductById = async (req, res) => {
    try {
        let data = await productService.readProductById(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
let readProductPaginateByCategoryId = async (req, res) => {
    try {
        let data = await productService.readProductPaginateByCategory(req, res);
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
        });
    }
}
module.exports = { readAllProduct, readProductPaginate ,createProduct,updateProduct,deleteProduct,readProductById,readProductPaginateByCategoryId};