import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.define-properties";
import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import configs from './configs';
import getTweetLength from './getTweetLength';
import hasInvalidCharacters from './hasInvalidCharacters';
export default function (text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : configs.defaults;

  if (!text) {
    return 'empty';
  }

  var mergedOptions = _objectSpread({}, configs.defaults, {}, options);

  var maxLength = mergedOptions.maxWeightedTweetLength; // Determine max length independent of URL length

  if (getTweetLength(text, mergedOptions) > maxLength) {
    return 'too_long';
  }

  if (hasInvalidCharacters(text)) {
    return 'invalid_characters';
  }

  return false;
}