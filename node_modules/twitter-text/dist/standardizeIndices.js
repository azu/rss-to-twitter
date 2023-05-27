"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = standardizeIndices;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _getUnicodeTextLength = _interopRequireDefault(require("./getUnicodeTextLength"));

function standardizeIndices(text, startIndex, endIndex) {
  var totalUnicodeTextLength = (0, _getUnicodeTextLength["default"])(text);
  var encodingDiff = text.length - totalUnicodeTextLength;

  if (encodingDiff > 0) {
    // split the string into codepoints which will map to the API's indices
    var byCodePair = Array.from(text);
    var beforeText = startIndex === 0 ? '' : byCodePair.slice(0, startIndex).join('');
    var actualText = byCodePair.slice(startIndex, endIndex).join('');
    return [beforeText.length, beforeText.length + actualText.length];
  }

  return [startIndex, endIndex];
}

module.exports = exports.default;