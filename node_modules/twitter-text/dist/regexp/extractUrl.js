"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validDomain = _interopRequireDefault(require("./validDomain"));

var _validPortNumber = _interopRequireDefault(require("./validPortNumber"));

var _validUrlPath = _interopRequireDefault(require("./validUrlPath"));

var _validUrlPrecedingChars = _interopRequireDefault(require("./validUrlPrecedingChars"));

var _validUrlQueryChars = _interopRequireDefault(require("./validUrlQueryChars"));

var _validUrlQueryEndingChars = _interopRequireDefault(require("./validUrlQueryEndingChars"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var extractUrl = (0, _regexSupplant["default"])('(' + // $1 total match
'(#{validUrlPrecedingChars})' + // $2 Preceeding chracter
'(' + // $3 URL
'(https?:\\/\\/)?' + // $4 Protocol (optional)
'(#{validDomain})' + // $5 Domain(s)
'(?::(#{validPortNumber}))?' + // $6 Port number (optional)
'(\\/#{validUrlPath}*)?' + // $7 URL Path
'(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?' + // $8 Query String
')' + ')', {
  validUrlPrecedingChars: _validUrlPrecedingChars["default"],
  validDomain: _validDomain["default"],
  validPortNumber: _validPortNumber["default"],
  validUrlPath: _validUrlPath["default"],
  validUrlQueryChars: _validUrlQueryChars["default"],
  validUrlQueryEndingChars: _validUrlQueryEndingChars["default"]
}, 'gi');
var _default = extractUrl;
exports["default"] = _default;
module.exports = exports.default;