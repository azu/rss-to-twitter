"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _configs = _interopRequireDefault(require("./configs"));

var _getTweetLength = _interopRequireDefault(require("./getTweetLength"));

var _hasInvalidCharacters = _interopRequireDefault(require("./hasInvalidCharacters"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _default(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _configs["default"].defaults;

  if (!text) {
    return 'empty';
  }

  var mergedOptions = _objectSpread({}, _configs["default"].defaults, {}, options);

  var maxLength = mergedOptions.maxWeightedTweetLength; // Determine max length independent of URL length

  if ((0, _getTweetLength["default"])(text, mergedOptions) > maxLength) {
    return 'too_long';
  }

  if ((0, _hasInvalidCharacters["default"])(text)) {
    return 'invalid_characters';
  }

  return false;
}

module.exports = exports.default;