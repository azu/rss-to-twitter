// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import atSigns from './atSigns';
import latinAccentChars from './latinAccentChars';
import regexSupplant from '../lib/regexSupplant';
var endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, {
  atSigns: atSigns,
  latinAccentChars: latinAccentChars
});
export default endMentionMatch;