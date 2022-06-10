"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../libs/db"));

var _productModel = _interopRequireDefault(require("../models/product.model.js"));

_productModel["default"].caseGetProduct = function (idProduct) {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM product WHERE id = '".concat(idProduct, "'");

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

var _default = _productModel["default"];
exports["default"] = _default;