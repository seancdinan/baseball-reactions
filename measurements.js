// All Coordinates given in terms of Photoshop canvas rulers
var ball = [13.14, 13.67];
var levelOne = [[6.83,6.95],[19.28,6.75],[19.43,8.14],[8.34,10.91],[8.36,12.32],
							[9.43,13.56],[10.55,13.54],[11.91,13.36],[13.52,11.51],[13.76,13.00],
							[14.88,10.58],[14.9,13.29],[16.33,11.25],[16.11,13.02],[16.33,14.25],
							[17.34,11.11],[17.14,12.49],[17.94,11.95],[21.00,11.97],[20.14,16.52],
							[19.43,12.29],[19.58,13.58],[19.16,15.14],[18.79,16.94]];
function normalize(array, origin){
	var result = [];
	for (var i = 0; i < array.length; i++){
		result[i] = [];
		result[i][0] = (Math.abs((array[i][0] - origin[0])/0.135)).toFixed(2);
		result[i][1] = (Math.abs((array[i][1] - origin[1])/0.135)).toFixed(2);
	}
	return result
}
console.log(normalize(levelOne, ball))

function xyAve(array){
	var xAve, yAve, xSum = 0, ySum = 0;
	for (var i = 0; i < array.length; i++){
		xSum += array[i][0];
		ySum += array[i][1];
	}
	xAve = xSum/array.length;
	yAve = ySum/array.length;
	return [xSum, ySum];
}
console.log(xyAve(normalize(levelOne,ball)))