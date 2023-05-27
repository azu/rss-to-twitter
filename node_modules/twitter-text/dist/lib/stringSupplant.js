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
// simple string interpolation
function _default(str, map) {
  return str.replace(/#\{(\w+)\}/g, function (match, name) {
    return map[name] || '';
  });
}

module.exports = exports.default;