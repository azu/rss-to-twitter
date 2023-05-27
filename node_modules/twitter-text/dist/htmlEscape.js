"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.replace");

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var HTML_ENTITIES = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#39;'
};

function _default(text) {
  return text && text.replace(/[&"'><]/g, function (character) {
    return HTML_ENTITIES[character];
  });
}

module.exports = exports.default;