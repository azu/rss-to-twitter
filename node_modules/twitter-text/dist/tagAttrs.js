"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _htmlEscape = _interopRequireDefault(require("./htmlEscape"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var BOOLEAN_ATTRIBUTES = {
  disabled: true,
  readonly: true,
  multiple: true,
  checked: true
};

function _default(attributes) {
  var htmlAttrs = '';

  for (var k in attributes) {
    var v = attributes[k];

    if (BOOLEAN_ATTRIBUTES[k]) {
      v = v ? k : null;
    }

    if (v == null) {
      continue;
    }

    htmlAttrs += " ".concat((0, _htmlEscape["default"])(k), "=\"").concat((0, _htmlEscape["default"])(v.toString()), "\"");
  }

  return htmlAttrs;
}

module.exports = exports.default;