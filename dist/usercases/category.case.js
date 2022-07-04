"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../libs/db"));

var _category = _interopRequireDefault(require("../models/category.model"));

_category["default"].caseGetAllCategory = function () {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM category";

    _db["default"].query(sql, function (err, res) {
      if (err) {
        return reject(err);
      }

      if (res.length) {
        return resolve(res);
      }

      return reject({
        code: 404,
        error: "Not found"
      });
    });
  });
};

_category["default"].caseGetProductbyCategory = function (idCategory) {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM product WHERE category = '".concat(idCategory, "'");

    _db["default"].query(sql, function (err, res) {
      if (err) {
        return reject(err);
      }

      if (res.length) {
        return resolve(res);
      }

      return reject({
        code: 404,
        error: "Not found"
      });
    });
  });
};

var _default = _category["default"];
exports["default"] = _default;