// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import extractHashtagsWithIndices from './extractHashtagsWithIndices';
export default function (text) {
  var hashtagsOnly = [];
  var hashtagsWithIndices = extractHashtagsWithIndices(text);

  for (var i = 0; i < hashtagsWithIndices.length; i++) {
    hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
  }

  return hashtagsOnly;
}