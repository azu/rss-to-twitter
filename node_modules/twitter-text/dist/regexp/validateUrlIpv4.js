"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlDecOctet = _interopRequireDefault(require("./validateUrlDecOctet"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlIpv4 = (0, _regexSupplant["default"])(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
  validateUrlDecOctet: _validateUrlDecOctet["default"]
});
var _default = validateUrlIpv4;
exports["default"] = _default;
module.exports = exports.default;