"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductbyCategory = exports.getAllCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _categoryCase = _interopRequireDefault(require("../usercases/category.case.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var imgCategory = [{
  id: "1",
  img: "https://i.ibb.co/6NN6N5Z/1.png"
}, {
  id: "2",
  img: "https://i.ibb.co/JjLBfr1/2.png"
}, {
  id: "3",
  img: "https://i.ibb.co/7np4TZs/3.png"
}, {
  id: "4",
  img: "https://i.ibb.co/nDfSNgC/4.png"
}, {
  id: "5",
  img: "https://i.ibb.co/2qjptr9/5.png"
}, {
  id: "6",
  img: "https://i.ibb.co/HDmkwXp/6.png"
}, {
  id: "7",
  img: "https://i.ibb.co/HKW9mcZ/7.png"
}];

var getAllCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var allCategory, datas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _categoryCase["default"].caseGetAllCategory();

          case 3:
            allCategory = _context.sent;
            datas = allCategory === null || allCategory === void 0 ? void 0 : allCategory.map(function (dato) {
              return _objectSpread(_objectSpread({}, dato), {}, {
                img: imgCategory.find(function (img) {
                  return img.id === String(dato.id);
                }).img
              });
            });
            return _context.abrupt("return", res.status(200).json({
              status: "success",
              message: "All Category",
              data: datas
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

  return function getAllCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllCategory = getAllCategory;

var getProductbyCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idCategory, productbyCategory;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idCategory = req.params.id;
            _context2.next = 4;
            return _categoryCase["default"].caseGetProductbyCategory(idCategory);

          case 4:
            productbyCategory = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              status: "success",
              message: "Product by Category",
              data: productbyCategory
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(_context2.t0.code).json(_objectSpread({
              status: "error"
            }, _context2.t0)));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getProductbyCategory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductbyCategory = getProductbyCategory;