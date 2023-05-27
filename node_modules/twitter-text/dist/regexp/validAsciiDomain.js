"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _latinAccentChars = _interopRequireDefault(require("./latinAccentChars"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validCCTLD = _interopRequireDefault(require("./validCCTLD"));

var _validGTLD = _interopRequireDefault(require("./validGTLD"));

var _validPunycode = _interopRequireDefault(require("./validPunycode"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validAsciiDomain = (0, _regexSupplant["default"])(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi, {
  latinAccentChars: _latinAccentChars["default"],
  validGTLD: _validGTLD["default"],
  validCCTLD: _validCCTLD["default"],
  validPunycode: _validPunycode["default"]
});
var _default = validAsciiDomain;
exports["default"] = _default;
module.exports = exports.default;