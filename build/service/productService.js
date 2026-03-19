"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _models = _interopRequireDefault(require("../models"));
var _imageService = _interopRequireDefault(require("./imageService"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var readAllProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var products;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models["default"].Product.findAll({
            attributes: ["id", "productName", "price", "stockQuantity"]
          });
        case 3:
          products = _context.sent;
          return _context.abrupt("return", {
            EM: "Get all product success",
            EC: "0",
            DT: products
          });
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", {
            EM: "Get all product failed",
            EC: "-1",
            DT: _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function readAllProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var readProductPaginate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var limit, currentPage, sort, order, totalItems, offset, products, totalPages, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          limit = req.query.limit;
          currentPage = req.query.currentPage;
          sort = req.query.sort ? req.query.sort.split(",") : ["id"];
          order = req.query.order ? req.query.order.split(",") : ["ASC"];
          _context2.next = 7;
          return _models["default"].Product.count();
        case 7:
          totalItems = _context2.sent;
          offset = (currentPage - 1) * limit;
          _context2.next = 11;
          return _models["default"].Product.findAll({
            include: {
              model: _models["default"].Category,
              attributes: ["id", "categoryName"]
            },
            nest: true,
            raw: true,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: sort.map(function (sortField, index) {
              return [sortField, order[index] || "ASC"];
            })
          });
        case 11:
          products = _context2.sent;
          totalPages = Math.ceil(totalItems / limit);
          data = {
            currentPage: currentPage,
            totalPage: totalPages,
            data: products,
            totalItems: totalItems
          };
          return _context2.abrupt("return", {
            EM: "Get all product success",
            EC: "0",
            DT: data
          });
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            EM: "Get all product failed",
            EC: "-1",
            DT: _context2.t0
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function readProductPaginate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, productName, price, mainImage, description, stockQuantity, categoryId, screenBrand, screenSize, resolution, panelType, pcBrand, cpuSeries, ramSize, laptopBrand, color, audioBrand, microphoneType, fileList, laptopCpuSeries, product, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, productName = _req$body.productName, price = _req$body.price, mainImage = _req$body.mainImage, description = _req$body.description, stockQuantity = _req$body.stockQuantity, categoryId = _req$body.categoryId, screenBrand = _req$body.screenBrand, screenSize = _req$body.screenSize, resolution = _req$body.resolution, panelType = _req$body.panelType, pcBrand = _req$body.pcBrand, cpuSeries = _req$body.cpuSeries, ramSize = _req$body.ramSize, laptopBrand = _req$body.laptopBrand, color = _req$body.color, audioBrand = _req$body.audioBrand, microphoneType = _req$body.microphoneType, fileList = _req$body.fileList, laptopCpuSeries = _req$body.laptopCpuSeries;
          if (!(!productName || !price || !description || !stockQuantity || !categoryId)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Missing required fields 1",
            EC: "-1",
            DT: null
          });
        case 4:
          price = price * 1;
          if (!(isNaN(price) || isNaN(stockQuantity))) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Invalid fields 2",
            EC: "-1",
            DT: null
          });
        case 7:
          if (!(+categoryId === 1)) {
            _context3.next = 10;
            break;
          }
          if (!(!screenBrand || !screenSize || !resolution || !panelType)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Missing required fields 3",
            EC: "-1",
            DT: null
          });
        case 10:
          if (!(+categoryId === 3)) {
            _context3.next = 13;
            break;
          }
          if (!(!pcBrand || !cpuSeries || !ramSize)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Missing required fields 4",
            EC: "-1",
            DT: null
          });
        case 13:
          if (!(+categoryId === 2)) {
            _context3.next = 17;
            break;
          }
          console.log(laptopBrand, color, laptopCpuSeries);
          if (!(!laptopBrand || !color || !laptopCpuSeries)) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Missing required fields 5",
            EC: "-1",
            DT: null
          });
        case 17:
          if (!(categoryId === 4)) {
            _context3.next = 20;
            break;
          }
          if (!(!audioBrand || !microphoneType)) {
            _context3.next = 20;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Missing required fields 6",
            EC: "-1",
            DT: null
          });
        case 20:
          if (!(categoryId > 4 || categoryId < 1)) {
            _context3.next = 22;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Invalid category 7",
            EC: "-1",
            DT: null
          });
        case 22:
          _context3.next = 24;
          return _models["default"].Product.create({
            productName: productName,
            price: price,
            mainImage: mainImage,
            description: description,
            stockQuantity: stockQuantity,
            categoryId: categoryId,
            screenBrand: screenBrand,
            screenSize: screenSize,
            resolution: resolution,
            panelType: panelType,
            pcBrand: pcBrand,
            cpuSeries: cpuSeries,
            ramSize: ramSize,
            laptopBrand: laptopBrand,
            color: color,
            audioBrand: audioBrand,
            microphoneType: microphoneType
          });
        case 24:
          product = _context3.sent;
          if (!(Array.isArray(fileList) && fileList.length > 0)) {
            _context3.next = 31;
            break;
          }
          _context3.next = 28;
          return _imageService["default"].createSubImageProduct(product.id, fileList);
        case 28:
          data = _context3.sent;
          if (!(data.EC !== "0")) {
            _context3.next = 31;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Create product failed 9",
            EC: "-1",
            DT: null
          });
        case 31:
          return _context3.abrupt("return", {
            EM: "Create product success",
            EC: "0",
            DT: product
          });
        case 34:
          _context3.prev = 34;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", {
            EM: "Create product failed 8",
            EC: "-1",
            DT: _context3.t0
          });
        case 38:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 34]]);
  }));
  return function createProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getCategoryById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var category;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _models["default"].Product.findOne({
            attributes: ["categoryId"],
            where: {
              id: id
            }
          });
        case 3:
          category = _context4.sent;
          if (category) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", null);
        case 6:
          return _context4.abrupt("return", category.categoryId);
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", {
            EM: "Get category failed",
            EC: "-1",
            DT: _context4.t0
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function getCategoryById(_x7) {
    return _ref4.apply(this, arguments);
  };
}();
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, productName, price, mainImage, description, stockQuantity, categoryId, screenBrand, screenSize, resolution, panelType, pcBrand, cpuSeries, ramSize, laptopBrand, color, laptopCpuSeries, audioBrand, microphoneType, fileList, id, data, product;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, productName = _req$body2.productName, price = _req$body2.price, mainImage = _req$body2.mainImage, description = _req$body2.description, stockQuantity = _req$body2.stockQuantity, categoryId = _req$body2.categoryId, screenBrand = _req$body2.screenBrand, screenSize = _req$body2.screenSize, resolution = _req$body2.resolution, panelType = _req$body2.panelType, pcBrand = _req$body2.pcBrand, cpuSeries = _req$body2.cpuSeries, ramSize = _req$body2.ramSize, laptopBrand = _req$body2.laptopBrand, color = _req$body2.color, laptopCpuSeries = _req$body2.laptopCpuSeries, audioBrand = _req$body2.audioBrand, microphoneType = _req$body2.microphoneType, fileList = _req$body2.fileList;
          price = price * 1;
          id = req.params.id;
          if (id) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", {
            EM: "Missing required fields",
            EC: "-1",
            DT: null
          });
        case 6:
          if (!(fileList && Array.isArray(fileList) && fileList.length > 0)) {
            _context5.next = 12;
            break;
          }
          _context5.next = 9;
          return _imageService["default"].updateSubImageProduct(id, fileList);
        case 9:
          data = _context5.sent;
          if (!(data.EC !== "0")) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", {
            EM: "Update product failed",
            EC: "-1",
            DT: null
          });
        case 12:
          _context5.next = 14;
          return _models["default"].Product.update({
            productName: productName,
            price: price,
            mainImage: mainImage,
            description: description,
            stockQuantity: stockQuantity,
            screenBrand: screenBrand,
            screenSize: screenSize,
            resolution: resolution,
            panelType: panelType,
            pcBrand: pcBrand,
            cpuSeries: cpuSeries,
            ramSize: ramSize,
            laptopBrand: laptopBrand,
            color: color,
            laptopCpuSeries: laptopCpuSeries,
            audioBrand: audioBrand,
            microphoneType: microphoneType
          }, {
            where: {
              id: id
            }
          });
        case 14:
          product = _context5.sent;
          console.log(laptopCpuSeries);
          return _context5.abrupt("return", {
            EM: "Update product success",
            EC: "0",
            DT: product
          });
        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", {
            EM: "Update product failed",
            EC: "-1",
            DT: _context5.t0
          });
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 19]]);
  }));
  return function updateProduct(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, product;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          if (id) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", {
            EM: "Missing required fields",
            EC: "-1",
            DT: null
          });
        case 4:
          _context6.next = 6;
          return _models["default"].Product.destroy({
            where: {
              id: id
            }
          });
        case 6:
          product = _context6.sent;
          return _context6.abrupt("return", {
            EM: "Delete product success",
            EC: "0",
            DT: product
          });
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", {
            EM: "Delete product failed",
            EC: "-1",
            DT: _context6.t0
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function deleteProduct(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
var readProductById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, product;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          if (id) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", {
            EM: "Missing required fields",
            EC: "-1",
            DT: null
          });
        case 4:
          _context7.next = 6;
          return _models["default"].Product.findOne({
            where: {
              id: id
            },
            include: {
              model: _models["default"].Image,
              attributes: ["imageUrl"]
            },
            nest: true
          });
        case 6:
          product = _context7.sent;
          return _context7.abrupt("return", {
            EM: "Get product by id success",
            EC: "0",
            DT: product
          });
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", {
            EM: "Get product by id failed",
            EC: "-1",
            DT: _context7.t0
          });
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function readProductById(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();
var readProductPaginateByCategory = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var limit, currentPage, categoryId, sort, order, totalItems, offset, products, totalPages, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          limit = req.query.limit;
          currentPage = req.query.currentPage;
          categoryId = req.query.id;
          sort = req.query.sort ? req.query.sort.split(",") : ["id"];
          order = req.query.order ? req.query.order.split(",") : ["ASC"];
          _context8.next = 8;
          return _models["default"].Product.count({
            where: {
              categoryId: categoryId
            }
          });
        case 8:
          totalItems = _context8.sent;
          offset = (currentPage - 1) * limit;
          _context8.next = 12;
          return _models["default"].Product.findAll({
            include: {
              model: _models["default"].Category,
              attributes: ["id", "categoryName"]
            },
            nest: true,
            raw: true,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: sort.map(function (sortField, index) {
              return [sortField, order[index] || "ASC"];
            }),
            where: {
              categoryId: categoryId
            }
          });
        case 12:
          products = _context8.sent;
          totalPages = Math.ceil(totalItems / limit);
          data = {
            currentPage: currentPage,
            totalPage: totalPages,
            data: products,
            totalItems: totalItems
          };
          return _context8.abrupt("return", {
            EM: "Get all product success",
            EC: "0",
            DT: data
          });
        case 18:
          _context8.prev = 18;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", {
            EM: "Get all product failed",
            EC: "-1",
            DT: _context8.t0
          });
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 18]]);
  }));
  return function readProductPaginateByCategory(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
var filterProduct = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var sort, order, _req$query, minPrice, maxPrice, screenBrand, screenSize, resolution, panelType, pcBrand, cpuSeries, ramSize, laptopBrand, color, laptopCpuSeries, audioBrand, microphoneType, id, limit, currentPage, categoryId, whereCondition, offset, totalItems, products, totalPages, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          sort = req.query.sort ? req.query.sort.split(",") : ["id"];
          order = req.query.order ? req.query.order.split(",") : ["ASC"];
          _req$query = req.query, minPrice = _req$query.minPrice, maxPrice = _req$query.maxPrice, screenBrand = _req$query.screenBrand, screenSize = _req$query.screenSize, resolution = _req$query.resolution, panelType = _req$query.panelType, pcBrand = _req$query.pcBrand, cpuSeries = _req$query.cpuSeries, ramSize = _req$query.ramSize, laptopBrand = _req$query.laptopBrand, color = _req$query.color, laptopCpuSeries = _req$query.laptopCpuSeries, audioBrand = _req$query.audioBrand, microphoneType = _req$query.microphoneType, id = _req$query.id, limit = _req$query.limit, currentPage = _req$query.currentPage;
          categoryId = id;
          whereCondition = {
            price: _defineProperty({}, _sequelize.Op.between, [minPrice, maxPrice]),
            categoryId: categoryId
          };
          if (screenBrand) whereCondition.screenBrand = screenBrand;
          if (screenSize) whereCondition.screenSize = screenSize;
          if (resolution) whereCondition.resolution = resolution;
          if (panelType) whereCondition.panelType = panelType;
          if (pcBrand) whereCondition.pcBrand = pcBrand;
          if (cpuSeries) whereCondition.cpuSeries = cpuSeries;
          if (ramSize) whereCondition.ramSize = ramSize;
          if (laptopBrand) whereCondition.laptopBrand = laptopBrand;
          if (color) whereCondition.color = color;
          if (laptopCpuSeries) whereCondition.laptopCpuSeries = laptopCpuSeries;
          if (audioBrand) whereCondition.audioBrand = audioBrand;
          if (microphoneType) whereCondition.microphoneType = microphoneType;
          offset = (currentPage - 1) * limit;
          _context9.next = 21;
          return _models["default"].Product.count({
            where: whereCondition
          });
        case 21:
          totalItems = _context9.sent;
          _context9.next = 24;
          return _models["default"].Product.findAll({
            include: {
              model: _models["default"].Category,
              attributes: ["id", "categoryName"]
            },
            nest: true,
            raw: true,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: sort.map(function (sortField, index) {
              return [sortField, order[index] || "ASC"];
            }),
            where: whereCondition
          });
        case 24:
          products = _context9.sent;
          totalPages = Math.ceil(totalItems / limit);
          data = {
            currentPage: currentPage,
            totalPage: totalPages,
            data: products,
            totalItems: totalItems
          };
          return _context9.abrupt("return", {
            EM: "Filter product success",
            EC: "0",
            DT: data
          });
        case 30:
          _context9.prev = 30;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          return _context9.abrupt("return", {
            EM: "Filter product failed",
            EC: "-1",
            DT: _context9.t0
          });
        case 34:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 30]]);
  }));
  return function filterProduct(_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();
var searchProduct = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var search, products;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          console.log(1);
          search = req.query.search;
          console.log(search);
          _context10.next = 6;
          return _models["default"].Product.findAll({
            where: {
              productName: _defineProperty({}, _sequelize.Op.like, "%".concat(search, "%"))
            }
          });
        case 6:
          products = _context10.sent;
          return _context10.abrupt("return", {
            EM: "Search product success",
            EC: "0",
            DT: products
          });
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", {
            EM: "Search product failed",
            EC: "-1",
            DT: _context10.t0
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function searchProduct(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();
var getStatistic = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var totalProduct, totalCategory, totalOrder, totalUser;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _models["default"].Product.count();
        case 3:
          totalProduct = _context11.sent;
          _context11.next = 6;
          return _models["default"].Category.count();
        case 6:
          totalCategory = _context11.sent;
          _context11.next = 9;
          return _models["default"].Order.count();
        case 9:
          totalOrder = _context11.sent;
          _context11.next = 12;
          return _models["default"].User.count();
        case 12:
          totalUser = _context11.sent;
          return _context11.abrupt("return", {
            EM: "Get statistic success",
            EC: "0",
            DT: {
              totalProduct: totalProduct,
              totalCategory: totalCategory,
              totalOrder: totalOrder,
              totalUser: totalUser
            }
          });
        case 16:
          _context11.prev = 16;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", {
            EM: "Get statistic failed",
            EC: "-1",
            DT: _context11.t0
          });
        case 19:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 16]]);
  }));
  return function getStatistic(_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}();
module.exports = {
  readAllProduct: readAllProduct,
  readProductPaginate: readProductPaginate,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  readProductById: readProductById,
  filterProduct: filterProduct,
  readProductPaginateByCategory: readProductPaginateByCategory,
  searchProduct: searchProduct,
  getStatistic: getStatistic
};