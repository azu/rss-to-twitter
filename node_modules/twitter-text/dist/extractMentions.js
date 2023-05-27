"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractMentionsWithIndices = _interopRequireDefault(require("./extractMentionsWithIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  var screenNamesOnly = [],
      screenNamesWithIndices = (0, _extractMentionsWithIndices["default"])(text);

  for (var i = 0; i < screenNamesWithIndices.length; i++) {
    var screenName = screenNamesWithIndices[i].screenName;
    screenNamesOnly.push(screenName);
  }

  return screenNamesOnly;
}

module.exports = exports.default;