"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoryController = require("../controllers/category.controller.js");

var routes = (0, _express.Router)();
routes.get("/", _categoryController.getAllCategory);
var _default = routes;
exports["default"] = _default;