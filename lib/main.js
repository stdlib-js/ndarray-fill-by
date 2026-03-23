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

'use strict';

// MODULES //

var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var isFunction = require( '@stdlib/assert-is-function' );
var base = require( '@stdlib/ndarray-base-fill-by' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Fills an input ndarray according to a callback function.
*
* @param {ndarray} x - input ndarray
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback function execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be a function
* @throws {Error} cannot write to a read-only ndarray
* @returns {ndarray} updated ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray-zeros' );
* var getData = require( '@stdlib/ndarray-data-buffer' );
*
* function fcn() {
*     return 10.0;
* }
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'float64'
* });
*
* fillBy( x, fcn );
*
* console.log( getData( x ) );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
function fillBy( x, fcn, thisArg ) {
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'null5t', x ) );
	}
	if ( isReadOnly( x ) ) {
		throw new Error( format('nullEs') );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'null2H', fcn ) );
	}
	base( x, fcn, thisArg );
	return x;
}


// EXPORTS //

module.exports = fillBy;
