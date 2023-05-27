"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validUrlQueryChars = _interopRequireDefault(require("./validUrlQueryChars"));

var _validUrlQueryEndingChars = _interopRequireDefault(require("./validUrlQueryEndingChars"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validTcoUrl = (0, _regexSupplant["default"])(/^https?:\/\/t\.co\/([a-z0-9]+)(?:\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?/, {
  validUrlQueryChars: _validUrlQueryChars["default"],
  validUrlQueryEndingChars: _validUrlQueryEndingChars["default"]
}, 'i');
var _default = validTcoUrl;
exports["default"] = _default;
module.exports = exports.default;