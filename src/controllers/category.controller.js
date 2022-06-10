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
    return res.status(error.code).json({
      status: "error",
      ...error,
    });
  }
};

export const getProductbyCategory = async (req, res) => {
  try {
    const idCategory = req.params.id;
    const productbyCategory = await Category.caseGetProductbyCategory(
      idCategory
    );
    return res.status(200).json({
      status: "success",
      message: `Product by Category`,
      data: productbyCategory,
    });
  } catch (error) {
    return res.status(error.code).json({
      status: "error",
      ...error,
    });
  }
};
