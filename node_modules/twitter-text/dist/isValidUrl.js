"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.regexp.match");

var _validateUrlAuthority = _interopRequireDefault(require("./regexp/validateUrlAuthority"));

var _validateUrlFragment = _interopRequireDefault(require("./regexp/validateUrlFragment"));

var _validateUrlPath = _interopRequireDefault(require("./regexp/validateUrlPath"));

var _validateUrlQuery = _interopRequireDefault(require("./regexp/validateUrlQuery"));

var _validateUrlScheme = _interopRequireDefault(require("./regexp/validateUrlScheme"));

var _validateUrlUnencoded = _interopRequireDefault(require("./regexp/validateUrlUnencoded"));

var _validateUrlUnicodeAuthority = _interopRequireDefault(require("./regexp/validateUrlUnicodeAuthority"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function isValidMatch(string, regex, optional) {
  if (!optional) {
    // RegExp["$&"] is the text of the last match
    // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
    return typeof string === 'string' && string.match(regex) && RegExp['$&'] === string;
  } // RegExp["$&"] is the text of the last match


  return !string || string.match(regex) && RegExp['$&'] === string;
}

function _default(url, unicodeDomains, requireProtocol) {
  if (unicodeDomains == null) {
    unicodeDomains = true;
  }

  if (requireProtocol == null) {
    requireProtocol = true;
  }

  if (!url) {
    return false;
  }

  var urlParts = url.match(_validateUrlUnencoded["default"]);

  if (!urlParts || urlParts[0] !== url) {
    return false;
  }

  var scheme = urlParts[1],
      authority = urlParts[2],
      path = urlParts[3],
      query = urlParts[4],
      fragment = urlParts[5];

  if (!((!requireProtocol || isValidMatch(scheme, _validateUrlScheme["default"]) && scheme.match(/^https?$/i)) && isValidMatch(path, _validateUrlPath["default"]) && isValidMatch(query, _validateUrlQuery["default"], true) && isValidMatch(fragment, _validateUrlFragment["default"], true))) {
    return false;
  }

  return unicodeDomains && isValidMatch(authority, _validateUrlUnicodeAuthority["default"]) || !unicodeDomains && isValidMatch(authority, _validateUrlAuthority["default"]);
}

module.exports = exports.default;