// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import extractMentionsWithIndices from './extractMentionsWithIndices';
export default function (text) {
  var screenNamesOnly = [],
      screenNamesWithIndices = extractMentionsWithIndices(text);

  for (var i = 0; i < screenNamesWithIndices.length; i++) {
    var screenName = screenNamesWithIndices[i].screenName;
    screenNamesOnly.push(screenName);
  }

  return screenNamesOnly;
}