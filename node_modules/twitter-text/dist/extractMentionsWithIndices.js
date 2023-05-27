"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractMentionsOrListsWithIndices = _interopRequireDefault(require("./extractMentionsOrListsWithIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  var mentions = [];
  var mentionOrList;
  var mentionsOrLists = (0, _extractMentionsOrListsWithIndices["default"])(text);

  for (var i = 0; i < mentionsOrLists.length; i++) {
    mentionOrList = mentionsOrLists[i];

    if (mentionOrList.listSlug === '') {
      mentions.push({
        screenName: mentionOrList.screenName,
        indices: mentionOrList.indices
      });
    }
  }

  return mentions;
}

module.exports = exports.default;