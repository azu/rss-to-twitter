"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.reduce");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _configs = _interopRequireDefault(require("./configs"));

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

var _getCharacterWeight = _interopRequireDefault(require("./lib/getCharacterWeight"));

var _hasInvalidCharacters = _interopRequireDefault(require("./hasInvalidCharacters"));

var _modifyIndicesFromUTF16ToUnicode = _interopRequireDefault(require("./modifyIndicesFromUTF16ToUnicode"));

var _twemojiParser = require("twemoji-parser");

var _urlHasHttps = _interopRequireDefault(require("./regexp/urlHasHttps"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// TODO: WEB-19861 Replace with public package after it is open sourced

/**
 * [parseTweet description]
 * @param  {string} text tweet text to parse
 * @param  {Object} options config options to pass
 * @return {Object} Fields in response described below:
 *
 * Response fields:
 * weightedLength {int} the weighted length of tweet based on weights specified in the config
 * valid {bool} If tweet is valid
 * permillage {float} permillage of the tweet over the max length specified in config
 * validRangeStart {int} beginning of valid text
 * validRangeEnd {int} End index of valid part of the tweet text (inclusive) in utf16
 * displayRangeStart {int} beginning index of display text
 * displayRangeEnd {int} end index of display text (inclusive) in utf16
 */
var parseTweet = function parseTweet() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _configs["default"].defaults;
  var mergedOptions = Object.keys(options).length ? options : _configs["default"].defaults;
  var defaultWeight = mergedOptions.defaultWeight,
      emojiParsingEnabled = mergedOptions.emojiParsingEnabled,
      scale = mergedOptions.scale,
      maxWeightedTweetLength = mergedOptions.maxWeightedTweetLength,
      transformedURLLength = mergedOptions.transformedURLLength;
  var normalizedText = typeof String.prototype.normalize === 'function' ? text.normalize() : text; // Hash all entities by their startIndex for fast lookup

  var urlEntitiesMap = transformEntitiesToHash((0, _extractUrlsWithIndices["default"])(normalizedText));
  var emojiEntitiesMap = emojiParsingEnabled ? transformEntitiesToHash((0, _twemojiParser.parse)(normalizedText)) : [];
  var tweetLength = normalizedText.length;
  var weightedLength = 0;
  var validDisplayIndex = 0;
  var valid = true; // Go through every character and calculate weight

  for (var charIndex = 0; charIndex < tweetLength; charIndex++) {
    // If a url begins at the specified index handle, add constant length
    if (urlEntitiesMap[charIndex]) {
      var _urlEntitiesMap$charI = urlEntitiesMap[charIndex],
          url = _urlEntitiesMap$charI.url,
          indices = _urlEntitiesMap$charI.indices;
      weightedLength += transformedURLLength * scale;
      charIndex += url.length - 1;
    } else if (emojiParsingEnabled && emojiEntitiesMap[charIndex]) {
      var _emojiEntitiesMap$cha = emojiEntitiesMap[charIndex],
          emoji = _emojiEntitiesMap$cha.text,
          _indices = _emojiEntitiesMap$cha.indices;
      weightedLength += defaultWeight;
      charIndex += emoji.length - 1;
    } else {
      charIndex += isSurrogatePair(normalizedText, charIndex) ? 1 : 0;
      weightedLength += (0, _getCharacterWeight["default"])(normalizedText.charAt(charIndex), mergedOptions);
    } // Only test for validity of character if it is still valid


    if (valid) {
      valid = !(0, _hasInvalidCharacters["default"])(normalizedText.substring(charIndex, charIndex + 1));
    }

    if (valid && weightedLength <= maxWeightedTweetLength * scale) {
      validDisplayIndex = charIndex;
    }
  }

  weightedLength = weightedLength / scale;
  valid = valid && weightedLength > 0 && weightedLength <= maxWeightedTweetLength;
  var permillage = Math.floor(weightedLength / maxWeightedTweetLength * 1000);
  var normalizationOffset = text.length - normalizedText.length;
  validDisplayIndex += normalizationOffset;
  return {
    weightedLength: weightedLength,
    valid: valid,
    permillage: permillage,
    validRangeStart: 0,
    validRangeEnd: validDisplayIndex,
    displayRangeStart: 0,
    displayRangeEnd: text.length > 0 ? text.length - 1 : 0
  };
};

var transformEntitiesToHash = function transformEntitiesToHash(entities) {
  return entities.reduce(function (map, entity) {
    map[entity.indices[0]] = entity;
    return map;
  }, {});
};

var isSurrogatePair = function isSurrogatePair(text, cIndex) {
  // Test if a character is the beginning of a surrogate pair
  if (cIndex < text.length - 1) {
    var c = text.charCodeAt(cIndex);
    var cNext = text.charCodeAt(cIndex + 1);
    return 0xd800 <= c && c <= 0xdbff && 0xdc00 <= cNext && cNext <= 0xdfff;
  }

  return false;
};

var _default = parseTweet;
exports["default"] = _default;
module.exports = exports.default;