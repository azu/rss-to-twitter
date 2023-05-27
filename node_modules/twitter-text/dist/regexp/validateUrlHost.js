"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlDomain = _interopRequireDefault(require("./validateUrlDomain"));

var _validateUrlIp = _interopRequireDefault(require("./validateUrlIp"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlHost = (0, _regexSupplant["default"])('(?:' + '#{validateUrlIp}|' + '#{validateUrlDomain}' + ')', {
  validateUrlIp: _validateUrlIp["default"],
  validateUrlDomain: _validateUrlDomain["default"]
}, 'i');
var _default = validateUrlHost;
exports["default"] = _default;
module.exports = exports.default;