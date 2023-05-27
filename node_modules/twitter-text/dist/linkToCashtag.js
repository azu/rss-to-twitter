"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _clone = _interopRequireDefault(require("./lib/clone"));

var _htmlEscape = _interopRequireDefault(require("./htmlEscape"));

var _linkToTextWithSymbol = _interopRequireDefault(require("./linkToTextWithSymbol"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(entity, text, options) {
  var cashtag = (0, _htmlEscape["default"])(entity.cashtag);
  var attrs = (0, _clone["default"])(options.htmlAttrs || {});
  attrs.href = options.cashtagUrlBase + cashtag;
  attrs.title = "$".concat(cashtag);
  attrs['class'] = options.cashtagClass;

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return (0, _linkToTextWithSymbol["default"])(entity, '$', cashtag, attrs, options);
}

module.exports = exports.default;