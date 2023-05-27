import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import endHashtagMatch from './regexp/endHashtagMatch';
import extractUrlsWithIndices from './extractUrlsWithIndices';
import hashSigns from './regexp/hashSigns';
import removeOverlappingEntities from './removeOverlappingEntities';
import validHashtag from './regexp/validHashtag';

var extractHashtagsWithIndices = function extractHashtagsWithIndices(text, options) {
  if (!options) {
    options = {
      checkUrlOverlap: true
    };
  }

  if (!text || !text.match(hashSigns)) {
    return [];
  }

  var tags = [];
  text.replace(validHashtag, function (match, before, hash, hashText, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (after.match(endHashtagMatch)) {
      return;
    }

    var startPosition = offset + before.length;
    var endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition]
    });
  });

  if (options.checkUrlOverlap) {
    // also extract URL entities
    var urls = extractUrlsWithIndices(text);

    if (urls.length > 0) {
      var entities = tags.concat(urls); // remove overlap

      removeOverlappingEntities(entities); // only push back hashtags

      tags = [];

      for (var i = 0; i < entities.length; i++) {
        if (entities[i].hashtag) {
          tags.push(entities[i]);
        }
      }
    }
  }

  return tags;
};

export default extractHashtagsWithIndices;