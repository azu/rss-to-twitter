"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _directionalMarkersGroup = _interopRequireDefault(require("./directionalMarkersGroup"));

var _invalidCharsGroup = _interopRequireDefault(require("./invalidCharsGroup"));

var _punct = _interopRequireDefault(require("./punct"));

var _spacesGroup = _interopRequireDefault(require("./spacesGroup"));

var _stringSupplant = _interopRequireDefault(require("../lib/stringSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var invalidDomainChars = (0, _stringSupplant["default"])('#{punct}#{spacesGroup}#{invalidCharsGroup}#{directionalMarkersGroup}', {
  punct: _punct["default"],
  spacesGroup: _spacesGroup["default"],
  invalidCharsGroup: _invalidCharsGroup["default"],
  directionalMarkersGroup: _directionalMarkersGroup["default"]
});
var _default = invalidDomainChars;
exports["default"] = _default;
module.exports = exports.default;