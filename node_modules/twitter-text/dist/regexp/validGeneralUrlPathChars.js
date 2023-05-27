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

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validGeneralUrlPathChars = (0, _regexSupplant["default"])(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, {
  cyrillicLettersAndMarks: _cyrillicLettersAndMarks["default"],
  latinAccentChars: _latinAccentChars["default"]
});
var _default = validGeneralUrlPathChars;
exports["default"] = _default;
module.exports = exports.default;