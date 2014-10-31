var log = true;

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
	if(log)
		console.log(4*inCircle/inSquare);
}