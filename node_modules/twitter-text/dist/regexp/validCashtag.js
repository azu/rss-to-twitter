"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cashtag = _interopRequireDefault(require("./cashtag"));

var _punct = _interopRequireDefault(require("./punct"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _spaces = _interopRequireDefault(require("./spaces"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validCashtag = (0, _regexSupplant["default"])('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', {
  cashtag: _cashtag["default"],
  spaces: _spaces["default"],
  punct: _punct["default"]
}, 'gi');
var _default = validCashtag;
exports["default"] = _default;
module.exports = exports.default;