"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _convertUnicodeIndices = _interopRequireDefault(require("./lib/convertUnicodeIndices"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, entities) {
  (0, _convertUnicodeIndices["default"])(text, entities, false);
}

module.exports = exports.default;