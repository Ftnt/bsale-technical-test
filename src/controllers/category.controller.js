import Category from "../usercases/category.case.js";

const imgCategory = [
  {id: "1", img:"https://i.ibb.co/6NN6N5Z/1.png"},
  {id: "2", img:"https://i.ibb.co/JjLBfr1/2.png"},
  {id: "3", img:"https://i.ibb.co/7np4TZs/3.png"},
  {id: "4", img:"https://i.ibb.co/nDfSNgC/4.png"},
  {id: "5", img:"https://i.ibb.co/2qjptr9/5.png"},
  {id: "6", img:"https://i.ibb.co/HDmkwXp/6.png"},
  {id: "7", img:"https://i.ibb.co/HKW9mcZ/7.png"},
]

export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.caseGetAllCategory();

    let datas = allCategory?.map(dato => ({...dato , img : imgCategory.find(img => img.id === String(dato.id)).img}))
    return res.status(200).json({
      status: "success",
      message: `All Category`,
      data: datas,
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
