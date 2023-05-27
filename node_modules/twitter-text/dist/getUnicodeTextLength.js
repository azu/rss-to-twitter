"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.replace");

var _nonBmpCodePairs = _interopRequireDefault(require("./regexp/nonBmpCodePairs"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/**
 * Copied from https://github.com/twitter/twitter-text/blob/master/js/twitter-text.js
 */
function _default(text) {
  return text.replace(_nonBmpCodePairs["default"], ' ').length;
}

module.exports = exports.default;