"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractHashtags = _interopRequireDefault(require("./extractHashtags"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(hashtag) {
  if (!hashtag) {
    return false;
  }

  var extracted = (0, _extractHashtags["default"])(hashtag); // Should extract the hashtag minus the # sign, hence the .slice(1)

  return extracted.length === 1 && extracted[0] === hashtag.slice(1);
}

module.exports = exports.default;