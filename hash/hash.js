var jsSHA = require('jssha');
var string = "This is the string to hash."
var debug = process.argv.indexOf('debug') >=0;

if (debug) {
	var tessel = require('tessel');
	tessel.led[0].output(0);
	var num = 0;
}

function main() {
	while(true){
		var shaObj = new jsSHA(string, 'TEXT');
		var a = shaObj.getHash('SHA-256', 'HEX');
		if (debug) {
			console.log(num++);
		  tessel.led[0].toggle();
		}
	}
}


main();