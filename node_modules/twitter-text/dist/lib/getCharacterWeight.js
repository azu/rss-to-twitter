"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.is-array");

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var getCharacterWeight = function getCharacterWeight(ch, options) {
  var defaultWeight = options.defaultWeight,
      ranges = options.ranges;
  var weight = defaultWeight;
  var chCodePoint = ch.charCodeAt(0);

  if (Array.isArray(ranges)) {
    for (var i = 0, length = ranges.length; i < length; i++) {
      var currRange = ranges[i];

      if (chCodePoint >= currRange.start && chCodePoint <= currRange.end) {
        weight = currRange.weight;
        break;
      }
    }
  }

  return weight;
};

var _default = getCharacterWeight;
exports["default"] = _default;
module.exports = exports.default;