"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hashSigns = _interopRequireDefault(require("./hashSigns"));

var _hashtagAlpha = _interopRequireDefault(require("./hashtagAlpha"));

var _hashtagAlphaNumeric = _interopRequireDefault(require("./hashtagAlphaNumeric"));

var _hashtagBoundary = _interopRequireDefault(require("./hashtagBoundary"));

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validHashtag = (0, _regexSupplant["default"])(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi, {
  hashtagBoundary: _hashtagBoundary["default"],
  hashSigns: _hashSigns["default"],
  hashtagAlphaNumeric: _hashtagAlphaNumeric["default"],
  hashtagAlpha: _hashtagAlpha["default"]
});
var _default = validHashtag;
exports["default"] = _default;
module.exports = exports.default;