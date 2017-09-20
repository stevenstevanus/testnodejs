var fs = require('fs');
var check = require('syntax-error');
var shell = require('shelljs')
var appdir = '/Users/indosystem/member.id/'

shell.find('.').filter(function(file) {
	var result = file.match(/\.js$/);
	var status = 0;
	if (result) { 
		// var fileCheck = result.input;
		var fileCheck = __dirname + '/hello.js';
		if (fs.lstatSync(fileCheck).isFile()) {
			var src = fs.readFileSync(fileCheck);
			var err = check(src, fileCheck);
			if (err) {
				status = 1;
				console.error('ERROR DETECTED' + Array(62).join('!'));
				console.error(err);
				console.error(Array(76).join('-'));
			}
			
		}
	}
	if (status) { process.exit(-1); }
});


/*
var fileCheck = __dirname + '/hello.js';
var src = fs.readFileSync(fileCheck);

var err = check(src, file);
if (err) {
	console.error('ERROR DETECTED' + Array(62).join('!'));
	console.error(err);
	console.error(Array(76).join('-'));
}
*/
