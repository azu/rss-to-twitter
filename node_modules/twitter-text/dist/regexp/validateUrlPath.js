"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlPchar = _interopRequireDefault(require("./validateUrlPchar"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlPath = (0, _regexSupplant["default"])(/(\/#{validateUrlPchar}*)*/i, {
  validateUrlPchar: _validateUrlPchar["default"]
});
var _default = validateUrlPath;
exports["default"] = _default;
module.exports = exports.default;