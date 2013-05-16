# webmake-coffee

## Develop [CoffeeScript](http://coffeescript.org/) applications with [Webmake](https://github.com/medikoo/modules-webmake)

If you build browser applications, want to organize your code with NodeJS (CommonJS) style modules and you prefer to write them in CoffeeScript, pick [Webmake](https://github.com/medikoo/modules-webmake) and use this extension.

__[Full support for Source Maps](#source-maps)__

### Installation

Install it aside of Webmake:

    $ npm install webmake-coffee

If you use global installation of Webmake then extension also needs to be installed globally:

    $ npm install -g webmake-coffee


### Usage

When running Webmake ask to use _webmake-coffee_:

    $ webmake --ext=coffee program.coffee bundle.js

Same way when Webmake is run programmatically:

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

Turn _sourcemap_ option on if you want to benefit from source maps:

    $ webmake --ext=coffee --sourcemap program.coffee bundle.js

Programmatically:

```javascript
webmake(inputPath, { ext: 'coffee', sourceMap: true }, cb);
```

### Caching

When running [Webmake that's bound to server](https://github.com/medikoo/modules-webmake#development-with-webmake) make sure to have [caching](https://github.com/medikoo/modules-webmake#cache-boolean-programmatical-usage-only) turned on, then recompilation will be done to changed files only.

### Tests [![Build Status](https://api.travis-ci.org/medikoo/webmake-coffee.png?branch=master)](https://travis-ci.org/medikoo/webmake-coffee)

    $ npm test
