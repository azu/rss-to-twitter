"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _autoLinkEntities = _interopRequireDefault(require("./autoLinkEntities"));

var _modifyIndicesFromUnicodeToUTF = _interopRequireDefault(require("./modifyIndicesFromUnicodeToUTF16"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, json, options) {
  // map JSON entity to twitter-text entity
  if (json.user_mentions) {
    for (var i = 0; i < json.user_mentions.length; i++) {
      // this is a @mention
      json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
    }
  }

  if (json.hashtags) {
    for (var i = 0; i < json.hashtags.length; i++) {
      // this is a #hashtag
      json.hashtags[i].hashtag = json.hashtags[i].text;
    }
  }

  if (json.symbols) {
    for (var i = 0; i < json.symbols.length; i++) {
      // this is a $CASH tag
      json.symbols[i].cashtag = json.symbols[i].text;
    }
  } // concatenate all entities


  var entities = [];

  for (var key in json) {
    entities = entities.concat(json[key]);
  } // modify indices to UTF-16


  (0, _modifyIndicesFromUnicodeToUTF["default"])(text, entities);
  return (0, _autoLinkEntities["default"])(text, entities, options);
}

module.exports = exports.default;