"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _invalidDomainChars = _interopRequireDefault(require("./invalidDomainChars"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validDomainChars = (0, _regexSupplant["default"])(/[^#{invalidDomainChars}]/, {
  invalidDomainChars: _invalidDomainChars["default"]
});
var _default = validDomainChars;
exports["default"] = _default;
module.exports = exports.default;