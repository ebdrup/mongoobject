var mongoObject = require('../index.js');
describe('mongoObject', function () {

		var tests = [
			{
				input: {a: 1},
				output: {a: 1}
			},
			{
				input: {$a: 1},
				output: {'\uff04a': 1}
			},
			{
				input: {$a: {$b: 1, $c: 2}},
				output: {'\uff04a': {'\uff04b': 1, '\uff04c': 2}}
			},
			{
				input: {$a: [
					{$b: 1, $c: 2}
				]},
				output: {'\uff04a': [
					{'\uff04b': 1, '\uff04c': 2}
				]}
			},
			{
				input: {$a: [
					{$b: 1, $c: [{'.1': true, '.2':'test'},{'.3': true, '.4':'test'}]}
				]},
				output: {'\uff04a': [
					{'\uff04b': 1, '\uff04c': [{'\uff0e1': true, '\uff0e2':'test'}, {'\uff0e3': true, '\uff0e4':'test'}]}
				]}
			}
		];

		tests.forEach(function (test) {
			it('escape should turn ' + JSON.stringify(test.input) + ' into ' + JSON.stringify(test.output), function () {
				expect(mongoObject.escape(test.input)).to.eql(test.output);
			});
		});
		tests.forEach(function (test) {
			it('unescape should turn ' + JSON.stringify(test.output) + ' into ' + JSON.stringify(test.input), function () {
				expect(mongoObject.unescape(test.output)).to.eql(test.input);
			});
	});
});