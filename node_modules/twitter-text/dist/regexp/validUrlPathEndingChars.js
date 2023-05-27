"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cyrillicLettersAndMarks = _interopRequireDefault(require("./cyrillicLettersAndMarks"));

var _latinAccentChars = _interopRequireDefault(require("./latinAccentChars"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validUrlBalancedParens = _interopRequireDefault(require("./validUrlBalancedParens"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Valid end-of-path chracters (so /foo. does not gobble the period).
// 1. Allow =&# for empty URL parameters and other URL-join artifacts
var validUrlPathEndingChars = (0, _regexSupplant["default"])(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i, {
  cyrillicLettersAndMarks: _cyrillicLettersAndMarks["default"],
  latinAccentChars: _latinAccentChars["default"],
  validUrlBalancedParens: _validUrlBalancedParens["default"]
});
var _default = validUrlPathEndingChars;
exports["default"] = _default;
module.exports = exports.default;