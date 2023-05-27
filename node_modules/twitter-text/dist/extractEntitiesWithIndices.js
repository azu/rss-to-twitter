"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractCashtagsWithIndices = _interopRequireDefault(require("./extractCashtagsWithIndices"));

var _extractHashtagsWithIndices = _interopRequireDefault(require("./extractHashtagsWithIndices"));

var _extractMentionsOrListsWithIndices = _interopRequireDefault(require("./extractMentionsOrListsWithIndices"));

var _extractUrlsWithIndices = _interopRequireDefault(require("./extractUrlsWithIndices"));

var _removeOverlappingEntities = _interopRequireDefault(require("./removeOverlappingEntities"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, options) {
  var entities = (0, _extractUrlsWithIndices["default"])(text, options).concat((0, _extractMentionsOrListsWithIndices["default"])(text)).concat((0, _extractHashtagsWithIndices["default"])(text, {
    checkUrlOverlap: false
  })).concat((0, _extractCashtagsWithIndices["default"])(text));

  if (entities.length == 0) {
    return [];
  }

  (0, _removeOverlappingEntities["default"])(entities);
  return entities;
}

module.exports = exports.default;