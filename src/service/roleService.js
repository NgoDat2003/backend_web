import db from "../models";

const checkRole = async (roleId) => {
  try {
    // Kiểm tra xem roleId có tồn tại trong cơ sở dữ liệu không
    const role = await db.Role.findOne({ where: { id: roleId } });
    return role ? true : false;
  } catch (error) {
    console.error("Error checking role:", error);
    throw error;
  }
};
const createRole = async (role) => {
  try {
    // Kiểm tra xem roleId có tồn tại trong cơ sở dữ liệu không
    if (checkRole(role.id) === true) {
      return {
        EM: "Role already exists",
        EC: "1",
        DT: "",
      };
    }
    const newRole = await db.Role.create(role);
    return {
      EM: "Role created successfully",
      EC: "0",
      DT: newRole,
    };
  } catch (error) {
    console.error("Error creating role:", error);
    return {
      EM: "Create role failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readAllRole = async () => {
  try {
    const list = await db.Role.findAll();
    return {
      EM: "Get all role successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.error("Error reading all role:", error);
    return {
      EM: "Get all role failed",
      EC: "-1",
      DT: [],
    };
  }
};
const readRoleById = async (roleId) => {
  try {
    const role = await db.Role.findOne({ where: { id: roleId } });
    if (role) {
      return {
        EM: "Get role by id successfully",
        EC: "0",
        DT: role,
      };
    }
    return {
      EM: "Role does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error reading role by id:", error);
    return {
      EM: "Get role by id failed",
      EC: "-1",
      DT: error,
    };
  }
};
const updateRole = async (role) => {
  try {
    const updatedRole = await db.Role.update(role, {
      where: { id: role.id },
    });
    if (updatedRole) {
      return {
        EM: "Update role successfully",
        EC: "0",
        DT: updatedRole,
      };
    }
    return {
      EM: "Role does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error updating role:", error);
    return {
      EM: "Update role failed",
      EC: "-1",
      DT: error,
    };
  }
};
const deleteRole = async (roleId) => {
  try {
    const deletedRole = await db.Role.destroy({ where: { id: roleId } });
    if (deletedRole) {
      return {
        EM: "Delete role successfully",
        EC: "0",
        DT: deletedRole,
      };
    }
    return {
      EM: "Role does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error deleting role:", error);
    return {
      EM: "Delete role failed",
      EC: "-1",
      DT: error,
    };
  }
};


export default { checkRole, createRole, readAllRole, readRoleById, updateRole, deleteRole};
