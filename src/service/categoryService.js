import db from "../models";

const createCategory = async (category) => {
  try {
    const newCategory = await db.Category.create(category);
    if (newCategory) {
      return {
        EM: "Create category successfully",
        EC: "0",
        DT: newCategory,
      };
    }
    return {
      EM: "Create category failed",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      EM: "Create category failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readAllCategory = async () => {
  try {
    const list = await db.Category.findAll();
    return {
      EM: "Get all category successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.error("Error reading all category:", error);
    return {
      EM: "Get all category failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readCategoryById = async (categoryId) => {
  try {
    const category = await db.Category.findOne({ where: { id: categoryId } });
    if (category) {
      return {
        EM: "Get category by id successfully",
        EC: "0",
        DT: category,
      };
    }
    return {
      EM: "Category does not exist",
      EC: "1",
      DT: "",
    };
  } catch (error) {
    console.error("Error reading category by id:", error);
    return {
      EM: "Get category by id failed",
      EC: "-1",
      DT: error,
    };
  }
};
const updateCategory = async (category) => {
  try {
    const categoryExist = await db.Category.findOne({
      where: { id: category.id },
    });
    if (!categoryExist) {
      return {
        EM: "Category does not exist",
        EC: "1",
        DT: "",
      };
    }
    await db.Category.update(category, { where: { id: category.id } });
    return {
      EM: "Update category successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.error("Error updating category:", error);
    return {
      EM: "Update category failed",
      EC: "-1",
      DT: error,
    };
  }
};
const deleteCategory = async (categoryId) => {
  try {
    const category = await db.Category.findOne({ where: { id: categoryId } });
    if (!category) {
      return {
        EM: "Category does not exist",
        EC: "1",
        DT: "",
      };
    }
    await category.destroy();
    return {
      EM: "Delete category successfully",
      EC: "0",
      DT: "",
    };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      EM: "Delete category failed",
      EC: "-1",
      DT: error,
    };
  }
};
module.exports = {
  createCategory,
  readAllCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
};
