"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var _require = require("sequelize"),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var Product = /*#__PURE__*/function (_Model) {
    _inherits(Product, _Model);
    function Product() {
      _classCallCheck(this, Product);
      return _callSuper(this, Product, arguments);
    }
    _createClass(Product, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        this.hasMany(models.OrderDetail, {
          foreignKey: "productId"
        });
        this.belongsTo(models.Category, {
          foreignKey: "categoryId"
        });
        this.hasMany(models.Review, {
          foreignKey: "productId"
        });
        this.hasMany(models.Image, {
          foreignKey: "productId"
        });
      }
    }]);
    return Product;
  }(Model);
  Product.init({
    productName: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    stockQuantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    mainImage: DataTypes.STRING,
    // Thêm các trường mới cho mỗi loại sản phẩm
    // Màn hình máy tính
    screenBrand: DataTypes.STRING,
    screenSize: DataTypes.STRING,
    resolution: DataTypes.STRING,
    panelType: DataTypes.STRING,
    // PC bộ
    pcBrand: DataTypes.STRING,
    cpuSeries: DataTypes.STRING,
    ramSize: DataTypes.STRING,
    // Laptop
    laptopBrand: DataTypes.STRING,
    color: DataTypes.STRING,
    laptopCpuSeries: DataTypes.STRING,
    // Thiết bị âm thanh
    audioBrand: DataTypes.STRING,
    microphoneType: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: "Product"
  });
  return Product;
};