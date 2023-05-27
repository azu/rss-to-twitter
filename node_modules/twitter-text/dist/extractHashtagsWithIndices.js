"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.match");

var _endHashtagMatch = _interopRequireDefault(require("./regexp/endHashtagMatch"));

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

var _hashSigns = _interopRequireDefault(require("./regexp/hashSigns"));

var _removeOverlappingEntities = _interopRequireDefault(require("./removeOverlappingEntities"));

var _validHashtag = _interopRequireDefault(require("./regexp/validHashtag"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var extractHashtagsWithIndices = function extractHashtagsWithIndices(text, options) {
  if (!options) {
    options = {
      checkUrlOverlap: true
    };
  }

  if (!text || !text.match(_hashSigns["default"])) {
    return [];
  }

  var tags = [];
  text.replace(_validHashtag["default"], function (match, before, hash, hashText, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (after.match(_endHashtagMatch["default"])) {
      return;
    }

    var startPosition = offset + before.length;
    var endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition]
    });
  });

  if (options.checkUrlOverlap) {
    // also extract URL entities
    var urls = (0, _extractUrlsWithIndices["default"])(text);

    if (urls.length > 0) {
      var entities = tags.concat(urls); // remove overlap

      (0, _removeOverlappingEntities["default"])(entities); // only push back hashtags

      tags = [];

      for (var i = 0; i < entities.length; i++) {
        if (entities[i].hashtag) {
          tags.push(entities[i]);
        }
      }
    }
  }

  return tags;
};

var _default = extractHashtagsWithIndices;
exports["default"] = _default;
module.exports = exports.default;