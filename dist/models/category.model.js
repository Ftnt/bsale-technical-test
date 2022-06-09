"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Category = /*#__PURE__*/(0, _createClass2["default"])(function Category(product) {
  (0, _classCallCheck2["default"])(this, Category);
  this.id = product.id;
  this.name = product.name;
});
var _default = Category;
exports["default"] = _default;