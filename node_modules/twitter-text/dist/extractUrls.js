"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, options) {
  var urlsOnly = [];
  var urlsWithIndices = (0, _extractUrlsWithIndices["default"])(text, options);

  for (var i = 0; i < urlsWithIndices.length; i++) {
    urlsOnly.push(urlsWithIndices[i].url);
  }

  return urlsOnly;
}

module.exports = exports.default;