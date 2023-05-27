"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlIp = _interopRequireDefault(require("./validateUrlIp"));

var _validateUrlUnicodeDomain = _interopRequireDefault(require("./validateUrlUnicodeDomain"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlUnicodeHost = (0, _regexSupplant["default"])('(?:' + '#{validateUrlIp}|' + '#{validateUrlUnicodeDomain}' + ')', {
  validateUrlIp: _validateUrlIp["default"],
  validateUrlUnicodeDomain: _validateUrlUnicodeDomain["default"]
}, 'i');
var _default = validateUrlUnicodeHost;
exports["default"] = _default;
module.exports = exports.default;