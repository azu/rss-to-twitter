import "core-js/modules/es6.array.index-of";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.constructor";
import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import extractUrl from './regexp/extractUrl';
import invalidUrlWithoutProtocolPrecedingChars from './regexp/invalidUrlWithoutProtocolPrecedingChars';
import idna from './lib/idna';
import validAsciiDomain from './regexp/validAsciiDomain';
import validTcoUrl from './regexp/validTcoUrl';
var DEFAULT_PROTOCOL = 'https://';
var DEFAULT_PROTOCOL_OPTIONS = {
  extractUrlsWithoutProtocol: true
};
var MAX_URL_LENGTH = 4096;
var MAX_TCO_SLUG_LENGTH = 40;

var extractUrlsWithIndices = function extractUrlsWithIndices(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PROTOCOL_OPTIONS;

  if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
    return [];
  }

  var urls = [];

  var _loop = function _loop() {
    var before = RegExp.$2;
    var url = RegExp.$3;
    var protocol = RegExp.$4;
    var domain = RegExp.$5;
    var path = RegExp.$7;
    var endPosition = extractUrl.lastIndex;
    var startPosition = endPosition - url.length;

    if (!isValidUrl(url, protocol || DEFAULT_PROTOCOL, domain)) {
      return "continue";
    } // extract ASCII-only domains.


    if (!protocol) {
      if (!options.extractUrlsWithoutProtocol || before.match(invalidUrlWithoutProtocolPrecedingChars)) {
        return "continue";
      }

      var lastUrl = null;
      var asciiEndPosition = 0;
      domain.replace(validAsciiDomain, function (asciiDomain) {
        var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
        asciiEndPosition = asciiStartPosition + asciiDomain.length;
        lastUrl = {
          url: asciiDomain,
          indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
        };
        urls.push(lastUrl);
      }); // no ASCII-only domain found. Skip the entire URL.

      if (lastUrl == null) {
        return "continue";
      } // lastUrl only contains domain. Need to add path and query if they exist.


      if (path) {
        lastUrl.url = url.replace(domain, lastUrl.url);
        lastUrl.indices[1] = endPosition;
      }
    } else {
      // In the case of t.co URLs, don't allow additional path characters.
      if (url.match(validTcoUrl)) {
        var tcoUrlSlug = RegExp.$1;

        if (tcoUrlSlug && tcoUrlSlug.length > MAX_TCO_SLUG_LENGTH) {
          return "continue";
        } else {
          url = RegExp.lastMatch;
          endPosition = startPosition + url.length;
        }
      }

      urls.push({
        url: url,
        indices: [startPosition, endPosition]
      });
    }
  };

  while (extractUrl.exec(text)) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }

  return urls;
};

var isValidUrl = function isValidUrl(url, protocol, domain) {
  var urlLength = url.length;
  var punycodeEncodedDomain = idna.toAscii(domain);

  if (!punycodeEncodedDomain || !punycodeEncodedDomain.length) {
    return false;
  }

  urlLength = urlLength + punycodeEncodedDomain.length - domain.length;
  return protocol.length + urlLength <= MAX_URL_LENGTH;
};

export default extractUrlsWithIndices;