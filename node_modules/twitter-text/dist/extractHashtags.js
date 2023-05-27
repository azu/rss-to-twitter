"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractHashtagsWithIndices = _interopRequireDefault(require("./extractHashtagsWithIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  var hashtagsOnly = [];
  var hashtagsWithIndices = (0, _extractHashtagsWithIndices["default"])(text);

  for (var i = 0; i < hashtagsWithIndices.length; i++) {
    hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
  }

  return hashtagsOnly;
}

module.exports = exports.default;