"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(w,i){"use strict";var o=require("@stdlib/assert-is-ndarray-like"),s=require("@stdlib/ndarray-base-assert-is-read-only"),l=require("@stdlib/assert-is-function"),m=require("@stdlib/ndarray-base-fill-by"),a=require("@stdlib/string-format");function v(e,r,n){if(!o(e))throw new TypeError(a("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",e));if(s(e))throw new Error("invalid argument. Cannot write to a read-only array.");if(!l(r))throw new TypeError(a("invalid argument. Second argument must be a function. Value: `%s`.",r));return m(e,r,n),e}i.exports=v});var d=t();module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
