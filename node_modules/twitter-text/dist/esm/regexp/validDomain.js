// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
import regexSupplant from '../lib/regexSupplant';
import validCCTLD from './validCCTLD';
import validDomainName from './validDomainName';
import validGTLD from './validGTLD';
import validPunycode from './validPunycode';
import validSubdomain from './validSubdomain';
var validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, {
  validDomainName: validDomainName,
  validSubdomain: validSubdomain,
  validGTLD: validGTLD,
  validCCTLD: validCCTLD,
  validPunycode: validPunycode
});
export default validDomain;