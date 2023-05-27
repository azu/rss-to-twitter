import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import getUnicodeTextLength from './getUnicodeTextLength';
export default function standardizeIndices(text, startIndex, endIndex) {
  var totalUnicodeTextLength = getUnicodeTextLength(text);
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