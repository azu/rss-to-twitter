"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validGeneralUrlPathChars = _interopRequireDefault(require("./validGeneralUrlPathChars"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Allow URL paths to contain up to two nested levels of balanced parens
//  1. Used in Wikipedia URLs like /Primer_(film)
//  2. Used in IIS sessions like /S(dfd346)/
//  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/
var validUrlBalancedParens = (0, _regexSupplant["default"])('\\(' + '(?:' + '#{validGeneralUrlPathChars}+' + '|' + // allow one nested level of balanced parentheses
'(?:' + '#{validGeneralUrlPathChars}*' + '\\(' + '#{validGeneralUrlPathChars}+' + '\\)' + '#{validGeneralUrlPathChars}*' + ')' + ')' + '\\)', {
  validGeneralUrlPathChars: _validGeneralUrlPathChars["default"]
}, 'i');
var _default = validUrlBalancedParens;
exports["default"] = _default;
module.exports = exports.default;