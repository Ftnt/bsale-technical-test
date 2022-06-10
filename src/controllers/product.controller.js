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
