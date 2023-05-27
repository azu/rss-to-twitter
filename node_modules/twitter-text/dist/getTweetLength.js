"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configs = _interopRequireDefault(require("./configs"));

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

var _getCharacterWeight = _interopRequireDefault(require("./lib/getCharacterWeight"));

var _modifyIndicesFromUTF16ToUnicode = _interopRequireDefault(require("./modifyIndicesFromUTF16ToUnicode"));

var _nonBmpCodePairs = _interopRequireDefault(require("./regexp/nonBmpCodePairs"));

var _parseTweet = _interopRequireDefault(require("./parseTweet"));

var _urlHasHttps = _interopRequireDefault(require("./regexp/urlHasHttps"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var getTweetLength = function getTweetLength(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _configs["default"].defaults;
  return (0, _parseTweet["default"])(text, options).weightedLength;
};

var _default = getTweetLength;
exports["default"] = _default;
module.exports = exports.default;