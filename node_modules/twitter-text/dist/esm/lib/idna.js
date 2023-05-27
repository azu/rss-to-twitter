import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.regexp.match";
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import punycode from 'punycode';
import validAsciiDomain from '../regexp/validAsciiDomain';
var MAX_DOMAIN_LABEL_LENGTH = 63;
var PUNYCODE_ENCODED_DOMAIN_PREFIX = 'xn--'; // This is an extremely lightweight implementation of domain name validation according to RFC 3490
// Our regexes handle most of the cases well enough
// See https://tools.ietf.org/html/rfc3490#section-4.1 for details

var idna = {
  toAscii: function toAscii(domain) {
    if (domain.substring(0, 4) === PUNYCODE_ENCODED_DOMAIN_PREFIX && !domain.match(validAsciiDomain)) {
      // Punycode encoded url cannot contain non ASCII characters
      return;
    }

    var labels = domain.split('.');

    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      var punycodeEncodedLabel = punycode.toASCII(label);

      if (punycodeEncodedLabel.length < 1 || punycodeEncodedLabel.length > MAX_DOMAIN_LABEL_LENGTH) {
        // DNS label has invalid length
        return;
      }
    }

    return labels.join('.');
  }
};
export default idna;