import Category from "../usercases/category.case.js";

export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.caseGetAllCategory();
    return res.status(200).json({
      status: "success",
      message: `All Category`,
      data: allCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error,
    });
  }
};
