"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _atSigns = _interopRequireDefault(require("./atSigns"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _spaces = _interopRequireDefault(require("./spaces"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validReply = (0, _regexSupplant["default"])(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/, {
  atSigns: _atSigns["default"],
  spaces: _spaces["default"]
});
var _default = validReply;
exports["default"] = _default;
module.exports = exports.default;