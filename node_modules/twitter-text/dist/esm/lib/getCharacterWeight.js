import "core-js/modules/es6.array.is-array";

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

export default getCharacterWeight;