/*Усовершенствовать partial, чтобы зафиксировать можно было любые аргументы
* undefined заменить на закрепленное число, если нету то добавить в конец
*/

function testFunc(a, b, c){
	return "a=" + a + ",b=" + b + ",c=" + c;
}

function partialDeep(){
	var arr = [];
	for(var i = 0; i < arguments.length; i++){
		if ( typeof arguments[i] === "function"  ) continue;
		arr.push(arguments[i]);
	};
	return function(b){
		for(var i = 0; i < arr.length; i++){
			if(!arr[i]) arr[i] = b;
		}
		return testFunc(...arr)
	}
}

var test1_3 = partialDeep(testFunc, 1, undefined, 3);

console.log(partialDeep(testFunc, null, 1, 3)(5))


console.log(test1_3(5));//1 , 5, 3

