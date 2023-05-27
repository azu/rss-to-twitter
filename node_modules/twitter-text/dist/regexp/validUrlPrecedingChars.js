"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _directionalMarkersGroup = _interopRequireDefault(require("./directionalMarkersGroup"));

var _invalidCharsGroup = _interopRequireDefault(require("./invalidCharsGroup"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validUrlPrecedingChars = (0, _regexSupplant["default"])(/(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|[#{directionalMarkersGroup}]|^)/, {
  invalidCharsGroup: _invalidCharsGroup["default"],
  directionalMarkersGroup: _directionalMarkersGroup["default"]
});
var _default = validUrlPrecedingChars;
exports["default"] = _default;
module.exports = exports.default;