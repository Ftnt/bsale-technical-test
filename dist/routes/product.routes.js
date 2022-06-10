"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productController = require("../controllers/product.controller.js");

var routes = (0, _express.Router)();
routes.get("/:id", _productController.getProductById);
var _default = routes;
exports["default"] = _default;