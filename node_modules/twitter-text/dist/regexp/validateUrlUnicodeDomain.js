"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlUnicodeSubDomainSegment = _interopRequireDefault(require("./validateUrlUnicodeSubDomainSegment"));

var _validateUrlUnicodeDomainSegment = _interopRequireDefault(require("./validateUrlUnicodeDomainSegment"));

var _validateUrlUnicodeDomainTld = _interopRequireDefault(require("./validateUrlUnicodeDomainTld"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences
var validateUrlUnicodeDomain = (0, _regexSupplant["default"])(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i, {
  validateUrlUnicodeSubDomainSegment: _validateUrlUnicodeSubDomainSegment["default"],
  validateUrlUnicodeDomainSegment: _validateUrlUnicodeDomainSegment["default"],
  validateUrlUnicodeDomainTld: _validateUrlUnicodeDomainTld["default"]
});
var _default = validateUrlUnicodeDomain;
exports["default"] = _default;
module.exports = exports.default;