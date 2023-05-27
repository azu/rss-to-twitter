"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlIpv = _interopRequireDefault(require("./validateUrlIpv4"));

var _validateUrlIpv2 = _interopRequireDefault(require("./validateUrlIpv6"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Punting on IPvFuture for now
var validateUrlIp = (0, _regexSupplant["default"])('(?:' + '#{validateUrlIpv4}|' + '#{validateUrlIpv6}' + ')', {
  validateUrlIpv4: _validateUrlIpv["default"],
  validateUrlIpv6: _validateUrlIpv2["default"]
}, 'i');
var _default = validateUrlIp;
exports["default"] = _default;
module.exports = exports.default;