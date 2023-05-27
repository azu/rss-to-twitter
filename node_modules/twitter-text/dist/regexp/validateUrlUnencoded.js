"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Modified version of RFC 3986 Appendix B
var validateUrlUnencoded = (0, _regexSupplant["default"])('^' + // Full URL
'(?:' + '([^:/?#]+):\\/\\/' + // $1 Scheme
')?' + '([^/?#]*)' + // $2 Authority
'([^?#]*)' + // $3 Path
'(?:' + '\\?([^#]*)' + // $4 Query
')?' + '(?:' + '#(.*)' + // $5 Fragment
')?$', 'i');
var _default = validateUrlUnencoded;
exports["default"] = _default;
module.exports = exports.default;