import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import atSigns from './regexp/atSigns';
import endMentionMatch from './regexp/endMentionMatch';
import validMentionOrList from './regexp/validMentionOrList';
export default function (text) {
  if (!text || !text.match(atSigns)) {
    return [];
  }

  var possibleNames = [];
  text.replace(validMentionOrList, function (match, before, atSign, screenName, slashListname, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (!after.match(endMentionMatch)) {
      slashListname = slashListname || '';
      var startPosition = offset + before.length;
      var endPosition = startPosition + screenName.length + slashListname.length + 1;
      possibleNames.push({
        screenName: screenName,
        listSlug: slashListname,
        indices: [startPosition, endPosition]
      });
    }
  });
  return possibleNames;
}