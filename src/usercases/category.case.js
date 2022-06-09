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
      return reject(new Error("Not found"));
    });
  });
};

export default Category;
