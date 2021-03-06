"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchProduct = exports.getProductById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _productCase = _interopRequireDefault(require("../usercases/product.case.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getProductById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var idProduct, product;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idProduct = req.params.id;
            _context.next = 4;
            return _productCase["default"].caseGetProduct(idProduct);

          case 4:
            product = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              status: "success",
              message: "Product",
              data: product
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(_context.t0.code).json(_objectSpread({
              status: "error"
            }, _context.t0)));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getProductById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var getSearchProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var name, allProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            name = req.query.name;
            name = name.replace(/[^a-zA-Z0-9????]/g, "");

            if (!name) {
              _context2.next = 8;
              break;
            }

            _context2.next = 6;
            return _productCase["default"].caseGetSearchProduct(name);

          case 6:
            allProduct = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              status: "success",
              message: "All Product",
              data: allProduct
            }));

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(_context2.t0.code).json(_objectSpread({
              status: "error"
            }, _context2.t0)));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getSearchProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSearchProduct = getSearchProduct;