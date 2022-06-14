import Product from "../usercases/product.case.js";

export const getProductById = async (req, res) => {
  try {
    const idProduct = req.params.id;
    const product = await Product.caseGetProduct(idProduct);
    return res.status(200).json({
      status: "success",
      message: `Product`,
      data: product,
    });
  } catch (error) {
    return res.status(error.code).json({
      status: "error",
      ...error,
    });
  }
};

export const getSearchProduct = async (req, res) => {
  try {
    let name = req.query.name;
    name = name.replace(/[^a-zA-Z0-9ñÑ]/g, "");
    if (name){
      const allProduct = await Product.caseGetSearchProduct(name);
      return res.status(200).json({
        status: "success",
        message: `All Product`,
        data : allProduct
      });
    }
  } catch (error) {
    return res.status(error.code).json({
      status: "error",
      ...error,
    });
  }
}
