PhantomJS polyfills
=====================

PhantomJS is widely used for testing web-based applications. This lib contains polyfills for the following functions that PhantomJS does not support natively:

* Function.prototype.bind
* Element.prototype.remove

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
