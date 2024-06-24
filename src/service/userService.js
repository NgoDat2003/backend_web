import db from "../models/index";
import bcrypt from "bcryptjs";
import jwtMiddleware from "../middleware/jwtMiddleware";
import { Op } from "sequelize";

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/upload/"); // thay './uploads/' bằng thư mục bạn muốn lưu file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};
const checkPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
const isEmail = async (email) => {
  const project = await db.User.findOne({ where: { email: email } });
  if (project) {
    return true;
  }
  return false;
};

let readAllUser = async (req, res) => {
  try {
    let list = await db.User.findAll({attributes: ["id"]});
    return {
      EM: "Get all user successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.log("error read all user: ", error);
    return {
      EM: "Get all user failed",
      EC: "-1",
      DT: error,
    };
  }
};
let createNewUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
      roleId,
      image,
    } = req.body;

    const checkEmail = await isEmail(email);
    if (checkEmail) {
      return {
        EM: "Email already exists",
        EC: "1",
        DT: "",
      };
    }

    const newUser = {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
      address: address || "",
      password: hashPassword(password) || "", // Bạn cần hash mật khẩu trước khi lưu vào cơ sở dữ liệu
      roleId: roleId || 2, // ID của vai trò của người dùng, bạn cần điền thông tin này phù hợp với cơ sở dữ liệu của bạn
      image: image || "", // Đường dẫn đến hình ảnh của người dùng, nếu có
    };

    // Tạo người dùng mới trong cơ sở dữ liệu
    await db.User.create(newUser);

    return {
      EM: "Register successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.log("error create new user: ", error);
    return {
      EM: "Register failed",
      EC: "-1",
      DT: error,
    };
  }
};
let updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, address, roleId, image } =
      req.body;

    // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
    const user = await db.User.findOne({ where: { id: id } });
    if (!user) {
      return {
        EM: "User does not exist",
        EC: "1",
        DT: "",
      };
    }

    // Cập nhật thông tin người dùng
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.address = address || user.address;
    user.roleId = roleId || user.roleId;
    user.image = image || user.image;

    // Lưu thông tin người dùng đã cập nhật vào cơ sở dữ liệu
    await user.save();

    return {
      EM: "Update user successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.log("error update user: ", error);
    return {
      EM: "Update user failed",
      EC: "-1",
      DT: error,
    };
  }
};
let deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
    const user = await db.User.findOne({ where: { id: id } });
    if (!user) {
      return {
        EM: "User does not exist",
        EC: "1",
        DT: "",
      };
    }
    if (user.roleId === 1) {
      return {
        EM: "Can not delete admin",
        EC: "1",
        DT: "",
      };
    }

    // Xóa người dùng khỏi cơ sở dữ liệu
    await user.destroy();

    return {
      EM: "Delete user successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.log("error delete user: ", error);
    return {
      EM: "Delete user failed",
      EC: "-1",
      DT: error,
    };
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: {
        email: email,
      },
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "roleId",
        "image",
        "password",
        "address",
        "phoneNumber",
      ],
      nest: true,
      raw: true,
    });
    if (!user) {
      return {
        EM: "Login failed",
        EC: "1",
        DT: "",
      };
    }
    const checkPass = checkPassword(password, user.password);
    if (user && checkPass) {
      console.log("user: ", user);
      let payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId,
        image: user.image,
        address: user.address,
        phoneNumber: user.phoneNumber,
      };
      let dataToken = jwtMiddleware.createToken(user);
      return {
        EM: "Login success",
        EC: "0",
        // DT: dataToken,
        DT: {
          user: payload,
          token: dataToken,
        },
      };
    } else {
      return {
        EM: "Login failed",
        EC: "1",
        DT: "",
      };
    }
  } catch (error) {
    console.log("Error: ", error);
    return {
      EM: "ERROR SYSTEM",
      EC: "1",
      DT: "",
    };
  }
};
let readUserPaginate = async (req, res) => {
  try {
    const limit = req.query.limit;
    const currentPage = req.query.currentPage
    const sort = req.query.sort ? req.query.sort.split(',') : ['id']; ;
    const order = req.query.order ? req.query.order.split(',') : ['ASC'];
    const totalItems = await db.User.count();
    const offset = (currentPage - 1) * limit;
    const users = await db.User.findAll({
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "roleId",
        "image",
        "address",
        "phoneNumber",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: db.Role,
          attributes: ["id", "roleName"],
        },
      ],
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || 'ASC']),

    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: users,
      totalItems: totalItems,
    };
    return {
      EM: "Get all product success",
      EC: "0",
      DT: data,
    };
  } catch (error) {
    console.log("error read all user: ", error);
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};

module.exports = {
  readAllUser,
  createNewUser,
  updateUser,
  deleteUser,
  login,
  readUserPaginate,
};
