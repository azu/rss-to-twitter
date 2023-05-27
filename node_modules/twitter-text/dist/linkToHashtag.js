"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.match");

var _clone = _interopRequireDefault(require("./lib/clone"));

var _htmlEscape = _interopRequireDefault(require("./htmlEscape"));

var _rtlChars = _interopRequireDefault(require("./regexp/rtlChars"));

var _linkToTextWithSymbol = _interopRequireDefault(require("./linkToTextWithSymbol"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(entity, text, options) {
  var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
  var hashtag = (0, _htmlEscape["default"])(entity.hashtag);
  var attrs = (0, _clone["default"])(options.htmlAttrs || {});
  attrs.href = options.hashtagUrlBase + hashtag;
  attrs.title = "#".concat(hashtag);
  attrs['class'] = options.hashtagClass;

  if (hashtag.charAt(0).match(_rtlChars["default"])) {
    attrs['class'] += ' rtl';
  }

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return (0, _linkToTextWithSymbol["default"])(entity, hash, hashtag, attrs, options);
}

module.exports = exports.default;