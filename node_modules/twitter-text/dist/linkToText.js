"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _stringSupplant = _interopRequireDefault(require("./lib/stringSupplant"));

var _tagAttrs = _interopRequireDefault(require("./tagAttrs"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(entity, text, attributes, options) {
  if (!options.suppressNoFollow) {
    attributes.rel = 'nofollow';
  } // if linkAttributeBlock is specified, call it to modify the attributes


  if (options.linkAttributeBlock) {
    options.linkAttributeBlock(entity, attributes);
  } // if linkTextBlock is specified, call it to get a new/modified link text


  if (options.linkTextBlock) {
    text = options.linkTextBlock(entity, text);
  }

  var d = {
    text: text,
    attr: (0, _tagAttrs["default"])(attributes)
  };
  return (0, _stringSupplant["default"])('<a#{attr}>#{text}</a>', d);
}

module.exports = exports.default;