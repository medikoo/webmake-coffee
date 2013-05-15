'use strict';

var webmake = require('webmake')

  , runInNewContext = require('vm').runInNewContext
  , path = require('path').resolve(__dirname, '__playground/program.coffee');

module.exports = function (t, a, d) {
	webmake(path, { ext: 'coffee' })(function (result) {
		var program = runInNewContext(result, {});
		a.deep(program.cs1, { solipsism: true, speed: 15, footprints: 'bear' },
			"#1");
		a.deep(program.cs2, [1, 2, 3], "#2");
	}).end(d, d);
};
