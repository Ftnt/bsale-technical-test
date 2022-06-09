"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./src/libs/app"));

_app["default"].set("port", process.env.PORT || 5000);

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("Server is running on port ", _app["default"].get("port"));
});