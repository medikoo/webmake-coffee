# webmake-coffee

## Develop [CoffeeScript](http://coffeescript.org/) applications for browser with [Webmake](https://github.com/medikoo/modules-webmake)

__[Full support for Source Maps](#sourcemaps)__

To use this extension, install it aside of Webmake:

    $ npm install webmake-coffee

If you use global installation of Webmake, then extension also needs to be installed globally:

    $ npm install -g webmake-coffee

When running Webmake, ask webmake to use it:

    $ webmake --ext=coffee program.coffee bundle.js

Same way when Webmake is used programmatically:

```javascript
webmake(inputPath, { ext: 'coffee' }, cb);
```

_webmake-coffee_ can be used with any other Webmake extension, e.g.:

    $ webmake --ext=coffee --ext=otherext program.coffee bundle.js

Programmatically:

```javascript
webmake(inputPath, { ext: ['coffee', 'otherext'] }, cb);
```

### Source Maps

To benefit from sourcemaps, just run webmake with turned on _sourcemap_ option:

    $ webmake --ext=coffee --sourcemap program.coffee bundle.js

Programmatically:

```javascript
webmake(inputPath, { ext: 'coffee', sourceMap: true }, cb);
```

### Cache

When using with [Webmake binded to server](https://github.com/medikoo/modules-webmake#development-with-webmake), make sure to rely on [caching](https://github.com/medikoo/modules-webmake#cache-boolean-programmatical-usage-only), then only changed files will be recompiled on request.

## Tests [![Build Status](https://api.travis-ci.org/medikoo/webmake-coffee.png?branch=master)](https://travis-ci.org/medikoo/webmake-coffee)

    $ npm test
