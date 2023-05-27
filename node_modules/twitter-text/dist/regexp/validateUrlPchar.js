"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlUnreserved = _interopRequireDefault(require("./validateUrlUnreserved"));

var _validateUrlPctEncoded = _interopRequireDefault(require("./validateUrlPctEncoded"));

var _validateUrlSubDelims = _interopRequireDefault(require("./validateUrlSubDelims"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// These URL validation pattern strings are based on the ABNF from RFC 3986
var validateUrlPchar = (0, _regexSupplant["default"])('(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + '[:|@]' + ')', {
  validateUrlUnreserved: _validateUrlUnreserved["default"],
  validateUrlPctEncoded: _validateUrlPctEncoded["default"],
  validateUrlSubDelims: _validateUrlSubDelims["default"]
}, 'i');
var _default = validateUrlPchar;
exports["default"] = _default;
module.exports = exports.default;