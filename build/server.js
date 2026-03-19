"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _api = _interopRequireDefault(require("./routers/api"));
var _cors = _interopRequireDefault(require("./config/cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var app = (0, _express["default"])();
(0, _viewEngine["default"])(app);
(0, _cors["default"])(app);
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
(0, _connectDB["default"])();
(0, _api["default"])(app);
var port = process.env.PORT || 8081;
app.get('/', function (req, res) {
  return res.send('home');
});
app.listen(port, function () {
  return console.log('Example app is listening on port ' + port + '!');
});