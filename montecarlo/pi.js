var debug = process.argv.indexOf('debug') >=0;
if(debug) {
	var tessel = require('tessel');
}

var inCircle = 0;
var inSquare = 0;
var radius = 100;

function isInCircle(point) {
	return Math.sqrt(Math.pow(radius+1-point.x, 2) + Math.pow(radius+1-point.y, 2)) <= radius;
}

function getRandomPoint(){
	return {x: Math.floor(Math.random() * ((radius * 2)+1) ),
					y: Math.floor(Math.random() * ((radius * 2)+1) )
				 }
}

var result = 0;
while(true) {
	inSquare++;
	if(isInCircle(getRandomPoint())){
		inCircle++;
	}
	var temp = 4*inCircle/inSquare;
	if(debug)
		tessel.led[0].toggle();
		console.log(inSquare + ' ' + temp);
}