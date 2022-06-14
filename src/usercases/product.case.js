import pool from "../libs/db";
import Product from "../models/product.model.js";

Product.caseGetProduct = (idProduct) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM product WHERE id = '${idProduct}'`;
    pool.query(sql, (err, res) => {
      if (err) {
        return reject(err);
      }
      if (res.length) {
        return resolve(res);
      }
      return reject({ code: 404, error: "Not found" });
    });
  });
};

Product.caseGetAllProduct = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM product`;
    pool.query(sql, (err, res) => {
      if (err) {
        return reject(err);
      }
      if (res.length) {
        return resolve(res);
      }
      return reject({ code: 404, error: "Not found" });
    });
  });
}

export default Product;
