"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.match");

var _atSigns = _interopRequireDefault(require("./regexp/atSigns"));

var _endMentionMatch = _interopRequireDefault(require("./regexp/endMentionMatch"));

var _validMentionOrList = _interopRequireDefault(require("./regexp/validMentionOrList"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  if (!text || !text.match(_atSigns["default"])) {
    return [];
  }

  var possibleNames = [];
  text.replace(_validMentionOrList["default"], function (match, before, atSign, screenName, slashListname, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (!after.match(_endMentionMatch["default"])) {
      slashListname = slashListname || '';
      var startPosition = offset + before.length;
      var endPosition = startPosition + screenName.length + slashListname.length + 1;
      possibleNames.push({
        screenName: screenName,
        listSlug: slashListname,
        indices: [startPosition, endPosition]
      });
    }
  });
  return possibleNames;
}

module.exports = exports.default;