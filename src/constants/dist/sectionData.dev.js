"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sectionListData = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var randomId = _faker["default"].random.uuid;
var randomProduct = _faker["default"].commerce.productMaterial;
var randomDescription = _faker["default"].lorem.lines;
var randomImage = _faker["default"].image.food;
var sectionListData = [{
  data: [{
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }],
  title: "Server Side"
}, {
  data: [{
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }],
  title: "Client Side"
}, {
  data: [{
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }, {
    name: randomProduct(),
    description: randomDescription()
  }],
  title: "Artificial"
}];
exports.sectionListData = sectionListData;