"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jwtMiddleware = _interopRequireDefault(require("../middleware/jwtMiddleware"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "src/public/upload/"); // thay './uploads/' bằng thư mục bạn muốn lưu file
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var hashPassword = function hashPassword(password) {
  var salt = _bcryptjs["default"].genSaltSync(10);
  var hashedPassword = _bcryptjs["default"].hashSync(password, salt);
  return hashedPassword;
};
var checkPassword = function checkPassword(password, hashPassword) {
  return _bcryptjs["default"].compareSync(password, hashPassword);
};
var isEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(email) {
    var project;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _index["default"].User.findOne({
            where: {
              email: email
            }
          });
        case 2:
          project = _context.sent;
          if (!project) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", true);
        case 5:
          return _context.abrupt("return", false);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function isEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();
var readAllUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var list;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _index["default"].User.findAll({
            attributes: ["id"]
          });
        case 3:
          list = _context2.sent;
          return _context2.abrupt("return", {
            EM: "Get all user successfully",
            EC: "0",
            DT: list
          });
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log("error read all user: ", _context2.t0);
          return _context2.abrupt("return", {
            EM: "Get all user failed",
            EC: "-1",
            DT: _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function readAllUser(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var createNewUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, firstName, lastName, email, phoneNumber, address, password, roleId, image, checkEmail, newUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, phoneNumber = _req$body.phoneNumber, address = _req$body.address, password = _req$body.password, roleId = _req$body.roleId, image = _req$body.image;
          _context3.next = 4;
          return isEmail(email);
        case 4:
          checkEmail = _context3.sent;
          if (!checkEmail) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", {
            EM: "Email already exists",
            EC: "1",
            DT: ""
          });
        case 7:
          newUser = {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            phoneNumber: phoneNumber || "",
            address: address || "",
            password: hashPassword(password) || "",
            // Bạn cần hash mật khẩu trước khi lưu vào cơ sở dữ liệu
            roleId: roleId || 2,
            // ID của vai trò của người dùng, bạn cần điền thông tin này phù hợp với cơ sở dữ liệu của bạn
            image: image || "" // Đường dẫn đến hình ảnh của người dùng, nếu có
          }; // Tạo người dùng mới trong cơ sở dữ liệu
          _context3.next = 10;
          return _index["default"].User.create(newUser);
        case 10:
          return _context3.abrupt("return", {
            EM: "Register successfully",
            EC: "0",
            DT: ""
          });
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log("error create new user: ", _context3.t0);
          return _context3.abrupt("return", {
            EM: "Register failed",
            EC: "-1",
            DT: _context3.t0
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function createNewUser(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body2, firstName, lastName, email, phoneNumber, address, roleId, image, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, phoneNumber = _req$body2.phoneNumber, address = _req$body2.address, roleId = _req$body2.roleId, image = _req$body2.image; // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
          _context4.next = 5;
          return _index["default"].User.findOne({
            where: {
              id: id
            }
          });
        case 5:
          user = _context4.sent;
          if (user) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", {
            EM: "User does not exist",
            EC: "1",
            DT: ""
          });
        case 8:
          // Cập nhật thông tin người dùng
          user.firstName = firstName || user.firstName;
          user.lastName = lastName || user.lastName;
          user.email = email || user.email;
          user.phoneNumber = phoneNumber || user.phoneNumber;
          user.address = address || user.address;
          user.roleId = roleId || user.roleId;
          user.image = image || user.image;

          // Lưu thông tin người dùng đã cập nhật vào cơ sở dữ liệu
          _context4.next = 17;
          return user.save();
        case 17:
          return _context4.abrupt("return", {
            EM: "Update user successfully",
            EC: "0",
            DT: ""
          });
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          console.log("error update user: ", _context4.t0);
          return _context4.abrupt("return", {
            EM: "Update user failed",
            EC: "-1",
            DT: _context4.t0
          });
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return function updateUser(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id; // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
          _context5.next = 4;
          return _index["default"].User.findOne({
            where: {
              id: id
            }
          });
        case 4:
          user = _context5.sent;
          if (user) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", {
            EM: "User does not exist",
            EC: "1",
            DT: ""
          });
        case 7:
          if (!(user.roleId === 1)) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", {
            EM: "Can not delete admin",
            EC: "1",
            DT: ""
          });
        case 9:
          _context5.next = 11;
          return user.destroy();
        case 11:
          return _context5.abrupt("return", {
            EM: "Delete user successfully",
            EC: "0",
            DT: ""
          });
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          console.log("error delete user: ", _context5.t0);
          return _context5.abrupt("return", {
            EM: "Delete user failed",
            EC: "-1",
            DT: _context5.t0
          });
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return function deleteUser(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var login = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, email, password, user, checkPass, payload, dataToken;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
          _context6.next = 4;
          return _index["default"].User.findOne({
            where: {
              email: email
            },
            attributes: ["id", "email", "firstName", "lastName", "roleId", "image", "password", "address", "phoneNumber"],
            nest: true,
            raw: true
          });
        case 4:
          user = _context6.sent;
          if (user) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", {
            EM: "Login failed",
            EC: "1",
            DT: ""
          });
        case 7:
          checkPass = checkPassword(password, user.password);
          if (!(user && checkPass)) {
            _context6.next = 15;
            break;
          }
          console.log("user: ", user);
          payload = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            roleId: user.roleId,
            image: user.image,
            address: user.address,
            phoneNumber: user.phoneNumber
          };
          dataToken = _jwtMiddleware["default"].createToken(user);
          return _context6.abrupt("return", {
            EM: "Login success",
            EC: "0",
            // DT: dataToken,
            DT: {
              user: payload,
              token: dataToken
            }
          });
        case 15:
          return _context6.abrupt("return", {
            EM: "Login failed",
            EC: "1",
            DT: ""
          });
        case 16:
          _context6.next = 22;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          console.log("Error: ", _context6.t0);
          return _context6.abrupt("return", {
            EM: "ERROR SYSTEM",
            EC: "1",
            DT: ""
          });
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function login(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
var readUserPaginate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var limit, currentPage, sort, order, totalItems, offset, users, totalPages, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          limit = req.query.limit;
          currentPage = req.query.currentPage;
          sort = req.query.sort ? req.query.sort.split(',') : ['id'];
          ;
          order = req.query.order ? req.query.order.split(',') : ['ASC'];
          _context7.next = 8;
          return _index["default"].User.count();
        case 8:
          totalItems = _context7.sent;
          offset = (currentPage - 1) * limit;
          _context7.next = 12;
          return _index["default"].User.findAll({
            attributes: ["id", "email", "firstName", "lastName", "roleId", "image", "address", "phoneNumber", "createdAt", "updatedAt"],
            include: [{
              model: _index["default"].Role,
              attributes: ["id", "roleName"]
            }],
            nest: true,
            raw: true,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: sort.map(function (sortField, index) {
              return [sortField, order[index] || 'ASC'];
            })
          });
        case 12:
          users = _context7.sent;
          totalPages = Math.ceil(totalItems / limit);
          data = {
            currentPage: currentPage,
            totalPage: totalPages,
            data: users,
            totalItems: totalItems
          };
          return _context7.abrupt("return", {
            EM: "Get all product success",
            EC: "0",
            DT: data
          });
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](0);
          console.log("error read all user: ", _context7.t0);
          return _context7.abrupt("return", {
            EM: "Get all product failed",
            EC: "-1",
            DT: _context7.t0
          });
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 18]]);
  }));
  return function readUserPaginate(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  readAllUser: readAllUser,
  createNewUser: createNewUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  login: login,
  readUserPaginate: readUserPaginate
};