"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.horizontalStatus = exports.horizontalData = void 0;
var horizontalStatus = {
  rainy: {
    ios: "ios-rainy",
    android: "md-rainy"
  },
  cloud: {
    ios: "ios-cloud",
    android: "md-cloud"
  },
  thunderstorm: {
    ios: "ios-thunderstorm",
    android: "md-thunderstorm"
  },
  sunny: {
    ios: "ios-sunny",
    android: "md-sunny"
  }
};
exports.horizontalStatus = horizontalStatus;
var horizontalData = [{
  hour: "1 AM",
  status: horizontalStatus.cloud,
  degrees: 57
}, {
  hour: "2 AM",
  status: horizontalStatus.rainy,
  degrees: 37
}, {
  hour: "3 AM",
  status: horizontalStatus.sunny,
  degrees: 15
}, {
  hour: "4 AM",
  status: horizontalStatus.thunderstorm,
  degrees: 11
}, {
  hour: "5 AM",
  status: horizontalStatus.sunny,
  degrees: 13
}, {
  hour: "6 AM",
  status: horizontalStatus.thunderstorm,
  degrees: 66
}, {
  hour: "7 AM",
  status: horizontalStatus.rainy,
  degrees: 14
}];
exports.horizontalData = horizontalData;