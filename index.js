var traverse = require('traverse');
module.exports.escape = getPatchFunction(escapeKey);
module.exports.unescape = getPatchFunction(unescapeKey);

module.exports.getPatchFunction = getPatchFunction;
module.exports.escapeKey = escapeKey;
module.exports.unescapeKey = unescapeKey;

function getPatchFunction(escapeFunction) {
	return function patch(o) {
		var t = traverse(o);
		var output = {};
		var tOutput = traverse(output);
		t.forEach(function (value) {
			if (Array.isArray(value)) {
				tOutput.set(this.path.map(escapeFunction), []);
			}
			if (this.path.length>0 && this.isLeaf) {
				tOutput.set(this.path.map(escapeFunction), value);
			}
		});
		return output;
	};
}

function escapeKey(key) {
	return key.replace(/\$/g, '\uff04').replace(/\./g, '\uff0e');
}

function unescapeKey(key) {
	return key.replace(/\uff04/g, '$').replace(/\uff0e/g, '.');
}

