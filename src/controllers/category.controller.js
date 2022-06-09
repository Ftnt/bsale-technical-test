import Category from "../usercases/category.case.js";

exports.getAllCategory = async (req, res) => {
  const allCategory = await Category.caseGetAllCategory();
  return res.status(200).json({
    status: "success",
    message: `All Category`,
    data: allCategory,
  });
};
