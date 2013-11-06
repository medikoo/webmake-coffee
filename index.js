'use strict';

var parse = require('coffee-script').compile;

exports.extension = 'coffee';
exports.type = 'js';
exports.compile = function (src, options) {
	var opts = { bare: true }, code, data, map;
	if (!options.sourceMap) return { code: parse(src, opts) };
	opts.sourceMap = true;
	data = parse(src, opts);

	map = JSON.parse(data.v3SourceMap);
	// Adjust map data
	map.file = options.generatedFilename;
	map.sources[0] = options.localFilename;
	map.sourcesContent = [src];
	map = JSON.stringify(map);

	code = data.js;
	if (code[code.length - 1] !== '\n') code += '\n';
	return { code: code, sourceMap: map };
};
