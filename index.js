'use strict';

var parse = require('coffee-script').compile;

exports.extension = 'coffee';
exports.compile = function (src, options) {
	var opts = { bare: true }, code, data, map;
	if (!options.sourceMap) return { code: parse(src, opts) };
	opts.sourceMap = true;
	data = parse(src, opts);

	// Include original coffee file in the map.
	map = JSON.parse(data.v3SourceMap);
	map.sourcesContent = [src];
	map = JSON.stringify(map);

	code = data.js;
	if (code[code.length - 1] !== '\n') code += '\n';
	code += '//# sourceMappingURL=data:application/json;base64,' +
		new Buffer(map).toString('base64') + '\n';
	return { code: code };
};
