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
  var at = text.substring(entity.indices[0], entity.indices[0] + 1);
  var user = (0, _htmlEscape["default"])(entity.screenName);
  var slashListname = (0, _htmlEscape["default"])(entity.listSlug);
  var isList = entity.listSlug && !options.suppressLists;
  var attrs = (0, _clone["default"])(options.htmlAttrs || {});
  attrs['class'] = isList ? options.listClass : options.usernameClass;
  attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;

  if (!isList && !options.suppressDataScreenName) {
    attrs['data-screen-name'] = user;
  }

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return (0, _linkToTextWithSymbol["default"])(entity, at, isList ? user + slashListname : user, attrs, options);
}

module.exports = exports.default;