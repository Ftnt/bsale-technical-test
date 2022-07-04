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
    name ? (name = name.replace(/[^a-zA-Z0-9ñÑ]/g, "")) : (name = "");
    const allProduct = await Product.caseGetSearchProduct(name);
    const countProduct = allProduct.length;
    return res.status(200).json({
      status: "success",
      message: "Product list",
      description: {
        quantity: countProduct,
        product: name ? name : `All product`,
      },
      data: allProduct,
    });
  } catch (error) {
    return res.status(error.code).json({
      status: "error",
      ...error,
    });
  }
};
