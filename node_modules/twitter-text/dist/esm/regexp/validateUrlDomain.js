// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import regexSupplant from '../lib/regexSupplant';
import validateUrlDomainSegment from './validateUrlDomainSegment';
import validateUrlDomainTld from './validateUrlDomainTld';
import validateUrlSubDomainSegment from './validateUrlSubDomainSegment';
var validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i, {
  validateUrlSubDomainSegment: validateUrlSubDomainSegment,
  validateUrlDomainSegment: validateUrlDomainSegment,
  validateUrlDomainTld: validateUrlDomainTld
});
export default validateUrlDomain;