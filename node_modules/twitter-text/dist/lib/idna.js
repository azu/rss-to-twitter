"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.match");

var _punycode = _interopRequireDefault(require("punycode"));

var _validAsciiDomain = _interopRequireDefault(require("../regexp/validAsciiDomain"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var MAX_DOMAIN_LABEL_LENGTH = 63;
var PUNYCODE_ENCODED_DOMAIN_PREFIX = 'xn--'; // This is an extremely lightweight implementation of domain name validation according to RFC 3490
// Our regexes handle most of the cases well enough
// See https://tools.ietf.org/html/rfc3490#section-4.1 for details

var idna = {
  toAscii: function toAscii(domain) {
    if (domain.substring(0, 4) === PUNYCODE_ENCODED_DOMAIN_PREFIX && !domain.match(_validAsciiDomain["default"])) {
      // Punycode encoded url cannot contain non ASCII characters
      return;
    }

    var labels = domain.split('.');

    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];

      var punycodeEncodedLabel = _punycode["default"].toASCII(label);

      if (punycodeEncodedLabel.length < 1 || punycodeEncodedLabel.length > MAX_DOMAIN_LABEL_LENGTH) {
        // DNS label has invalid length
        return;
      }
    }

    return labels.join('.');
  }
};
var _default = idna;
exports["default"] = _default;
module.exports = exports.default;