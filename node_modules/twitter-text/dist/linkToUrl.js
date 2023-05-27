"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("core-js/modules/es6.regexp.match");

var _clone = _interopRequireDefault(require("./lib/clone"));

var _htmlEscape = _interopRequireDefault(require("./htmlEscape"));

var _linkToText = _interopRequireDefault(require("./linkToText"));

var _linkTextWithEntity = _interopRequireDefault(require("./linkTextWithEntity"));

var _urlHasProtocol = _interopRequireDefault(require("./regexp/urlHasProtocol"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
function _default(entity, text, options) {
  var url = entity.url;
  var displayUrl = url;
  var linkText = (0, _htmlEscape["default"])(displayUrl); // If the caller passed a urlEntities object (provided by a Twitter API
  // response with include_entities=true), we use that to render the display_url
  // for each URL instead of it's underlying t.co URL.

  var urlEntity = options.urlEntities && options.urlEntities[url] || entity;

  if (urlEntity.display_url) {
    linkText = (0, _linkTextWithEntity["default"])(urlEntity, options);
  }

  var attrs = (0, _clone["default"])(options.htmlAttrs || {});

  if (!url.match(_urlHasProtocol["default"])) {
    url = "http://".concat(url);
  }

  attrs.href = url;

  if (options.targetBlank) {
    attrs.target = '_blank';
  } // set class only if urlClass is specified.


  if (options.urlClass) {
    attrs['class'] = options.urlClass;
  } // set target only if urlTarget is specified.


  if (options.urlTarget) {
    attrs.target = options.urlTarget;
  }

  if (!options.title && urlEntity.display_url) {
    attrs.title = urlEntity.expanded_url;
  }

  return (0, _linkToText["default"])(entity, linkText, attrs, options);
}

module.exports = exports.default;