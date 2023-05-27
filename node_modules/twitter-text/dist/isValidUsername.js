"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractMentions = _interopRequireDefault(require("./extractMentions"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(username) {
  if (!username) {
    return false;
  }

  var extracted = (0, _extractMentions["default"])(username); // Should extract the username minus the @ sign, hence the .slice(1)

  return extracted.length === 1 && extracted[0] === username.slice(1);
}

module.exports = exports.default;