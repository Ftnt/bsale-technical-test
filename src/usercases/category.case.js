import pool from "../libs/db";
import Category from "../models/category.model";

Category.caseGetAllCategory = () => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM category";
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

Category.caseGetProductbyCategory = (idCategory) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM product WHERE category = '${idCategory}'`;
    pool.query(sql, (err, res) => {
      console.log(res.length);
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

export default Category;
