"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlDomainSegment = _interopRequireDefault(require("./validateUrlDomainSegment"));

var _validateUrlDomainTld = _interopRequireDefault(require("./validateUrlDomainTld"));

var _validateUrlSubDomainSegment = _interopRequireDefault(require("./validateUrlSubDomainSegment"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlDomain = (0, _regexSupplant["default"])(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i, {
  validateUrlSubDomainSegment: _validateUrlSubDomainSegment["default"],
  validateUrlDomainSegment: _validateUrlDomainSegment["default"],
  validateUrlDomainTld: _validateUrlDomainTld["default"]
});
var _default = validateUrlDomain;
exports["default"] = _default;
module.exports = exports.default;