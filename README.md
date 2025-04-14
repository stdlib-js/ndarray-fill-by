<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fillBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill an input [`ndarray`][@stdlib/ndarray/ctor] according to a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-fill-by
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var fillBy = require( '@stdlib/ndarray-fill-by' );
```

#### fillBy( x, fcn\[, thisArg] )

Fills an input [`ndarray`][@stdlib/ndarray/ctor] according to a callback function.

```javascript
var zeros = require( '@stdlib/ndarray-zeros' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function fcn( value ) {
    return value + 10.0;
}

var x = zeros( [ 3, 1, 2 ], {
    'dtype': 'float64'
});

var y = fillBy( x, fcn );
// returns <ndarray>

var bool = ( y === x );
// returns true

var arr = ndarray2array( y );
// returns [ [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ] ]
```

The function accepts the following arguments:

-   **x**: array-like object containing an input [`ndarray`][@stdlib/ndarray/ctor].
-   **fcn**: callback function.
-   **thisArg**: callback function execution context (_optional_).

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var zeros = require( '@stdlib/ndarray-zeros' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function fcn( value ) {
    return value + this.factor;
}

var x = zeros( [ 3, 1, 2 ], {
    'dtype': 'float64'
});

var ctx = {
    'factor': 10.0
};
var y = fillBy( x, fcn, ctx );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ], [ [ 10.0, 10.0 ] ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An input [`ndarray`][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function throws an error.
-   The function **mutates** the input [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var zeros = require( '@stdlib/ndarray-zeros' );
var fillBy = require( '@stdlib/ndarray-fill-by' );

// Create a zero-filled ndarray:
var x = zeros( [ 5, 2 ], {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Fill the ndarray with random values:
fillBy( x, discreteUniform( -100, 100 ) );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-fill`][@stdlib/ndarray/fill]</span><span class="delimiter">: </span><span class="description">fill an input ndarray with a specified value.</span>
-   <span class="package-name">[`@stdlib/ndarray-map`][@stdlib/ndarray/map]</span><span class="delimiter">: </span><span class="description">apply a callback to elements in an input ndarray and assign results to elements in a new output ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray-zeros`][@stdlib/ndarray/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-fill-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-fill-by

[test-image]: https://github.com/stdlib-js/ndarray-fill-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-fill-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-fill-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-fill-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-fill-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-fill-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-fill-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-fill-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-fill-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-fill-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-fill-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-fill-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-fill-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-fill-by/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

<!-- <related-links> -->

[@stdlib/ndarray/fill]: https://github.com/stdlib-js/ndarray-fill

[@stdlib/ndarray/map]: https://github.com/stdlib-js/ndarray-map

[@stdlib/ndarray/zeros]: https://github.com/stdlib-js/ndarray-zeros

<!-- </related-links> -->

</section>

<!-- /.links -->
