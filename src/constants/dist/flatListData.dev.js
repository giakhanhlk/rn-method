"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var randomId = _faker["default"].random.uuid;
var randomProduct = _faker["default"].commerce.productMaterial;
var randomDescription = _faker["default"].commerce.product;
var randomImage = _faker["default"].image.food;
var _default = [{
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}, {
  id: randomId(),
  name: randomProduct(),
  image: randomImage(),
  description: randomDescription()
}];
exports["default"] = _default;