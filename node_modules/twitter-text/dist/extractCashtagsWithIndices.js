"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.array.index-of");

var _validCashtag = _interopRequireDefault(require("./regexp/validCashtag"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text) {
  if (!text || text.indexOf('$') === -1) {
    return [];
  }

  var tags = [];
  text.replace(_validCashtag["default"], function (match, before, dollar, cashtag, offset, chunk) {
    var startPosition = offset + before.length;
    var endPosition = startPosition + cashtag.length + 1;
    tags.push({
      cashtag: cashtag,
      indices: [startPosition, endPosition]
    });
  });
  return tags;
}

module.exports = exports.default;