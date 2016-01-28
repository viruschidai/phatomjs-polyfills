PhantomJS polyfills (For phantomJS 1.x)
=====================
[![Build Status](https://travis-ci.org/viruschidai/phatomjs-polyfills.png?branch=master)](https://travis-ci.org/viruschidai/phatomjs-polyfills)
PhantomJS is widely used for testing web-based applications. This lib contains polyfills for the following functions that PhantomJS@1.x does not support natively:

* Function.prototype.bind
* Element.prototype.remove

Note: PhantomJS2.x has supported those method natively.

## Get started

### Installation
`npm install -D phantomjs-polyfills`

### Use with Karma
Add the polyfills in your karma.config.js
```
...
files: [
    {pattern: './node_modules/phantomjs-polyfill/polyfills/*.js', included: true},
    ...
]
```
