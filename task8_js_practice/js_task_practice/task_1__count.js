/**
 *  функция считающая количесвто 
 *  свойств в обьекте
 * 
 * 
 * 
 */

function getCount(obj) {
	let count = 0
	for(var key in obj){			
		count++			
	}
	return count	
}

function getCount2(obj){
	return Object.keys(obj).length
}

var a = {a: 1, b: 2,};
console.log(count(a));//2

var b = function(){};
console.log(count(b));//0

var c = [1,2,3];
console.log(count(c));//3

var d = [];
d[100] = 1;
console.log(count(d));//1

console.log(count2(d));