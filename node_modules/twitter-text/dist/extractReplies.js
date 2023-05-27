"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.regexp.match");

var _endMentionMatch = _interopRequireDefault(require("./regexp/endMentionMatch"));

var _validReply = _interopRequireDefault(require("./regexp/validReply"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  if (!text) {
    return null;
  }

  var possibleScreenName = text.match(_validReply["default"]);

  if (!possibleScreenName || RegExp.rightContext.match(_endMentionMatch["default"])) {
    return null;
  }

  return possibleScreenName[1];
}

module.exports = exports.default;