"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validCCTLD = _interopRequireDefault(require("./validCCTLD"));

var _validDomainName = _interopRequireDefault(require("./validDomainName"));

var _validGTLD = _interopRequireDefault(require("./validGTLD"));

var _validPunycode = _interopRequireDefault(require("./validPunycode"));

var _validSubdomain = _interopRequireDefault(require("./validSubdomain"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validDomain = (0, _regexSupplant["default"])(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, {
  validDomainName: _validDomainName["default"],
  validSubdomain: _validSubdomain["default"],
  validGTLD: _validGTLD["default"],
  validCCTLD: _validCCTLD["default"],
  validPunycode: _validPunycode["default"]
});
var _default = validDomain;
exports["default"] = _default;
module.exports = exports.default;