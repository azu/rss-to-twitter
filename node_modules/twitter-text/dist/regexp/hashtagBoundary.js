"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _codePoint = _interopRequireDefault(require("./codePoint"));

var _hashtagAlphaNumeric = _interopRequireDefault(require("./hashtagAlphaNumeric"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var hashtagBoundary = (0, _regexSupplant["default"])(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, {
  codePoint: _codePoint["default"],
  hashtagAlphaNumeric: _hashtagAlphaNumeric["default"]
});
var _default = hashtagBoundary;
exports["default"] = _default;
module.exports = exports.default;