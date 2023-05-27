"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extractHashtagsWithIndices = _interopRequireDefault(require("./extractHashtagsWithIndices"));

var _autoLinkEntities = _interopRequireDefault(require("./autoLinkEntities"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(text, options) {
  var entities = (0, _extractHashtagsWithIndices["default"])(text);
  return (0, _autoLinkEntities["default"])(text, entities, options);
}

module.exports = exports.default;