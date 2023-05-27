"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validGeneralUrlPathChars = _interopRequireDefault(require("./validGeneralUrlPathChars"));

var _validUrlBalancedParens = _interopRequireDefault(require("./validUrlBalancedParens"));

var _validUrlPathEndingChars = _interopRequireDefault(require("./validUrlPathEndingChars"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/
var validUrlPath = (0, _regexSupplant["default"])('(?:' + '(?:' + '#{validGeneralUrlPathChars}*' + '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' + '#{validUrlPathEndingChars}' + ')|(?:@#{validGeneralUrlPathChars}+/)' + ')', {
  validGeneralUrlPathChars: _validGeneralUrlPathChars["default"],
  validUrlBalancedParens: _validUrlBalancedParens["default"],
  validUrlPathEndingChars: _validUrlPathEndingChars["default"]
}, 'i');
var _default = validUrlPath;
exports["default"] = _default;
module.exports = exports.default;