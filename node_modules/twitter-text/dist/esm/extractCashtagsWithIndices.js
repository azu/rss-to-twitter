import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.array.index-of";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import validCashtag from './regexp/validCashtag';
export default function (text) {
  if (!text || text.indexOf('$') === -1) {
    return [];
  }

  var tags = [];
  text.replace(validCashtag, function (match, before, dollar, cashtag, offset, chunk) {
    var startPosition = offset + before.length;
    var endPosition = startPosition + cashtag.length + 1;
    tags.push({
      cashtag: cashtag,
      indices: [startPosition, endPosition]
    });
  });
  return tags;
}