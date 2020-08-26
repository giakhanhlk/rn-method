"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchApi = void 0;
var url = "https://5f1ec7a557e3290016863b20.mockapi.io/api/v1/rn-learn";

var fetchApi = function fetchApi() {
  var res, data;
  return regeneratorRuntime.async(function fetchApi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.fetchApi = fetchApi;