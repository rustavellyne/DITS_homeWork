
/*Реализовать функцию partial(fn, a1, a2, ....), 
//которая позволяет зафиксировать один или несколько аргументов функции.*/

function add (a, b){
	return a + b;
}


function partial(fn, a){
	return function(b){
		var arg = [].reduce.call(arguments, function(pre, curr){
			return pre + curr
		})
		return fn(a, arg)
	}
}

	
//partial(add, 5)(1);
var add5 = partial(add, 5);

console.log(add5(1)); //6
console.log(add5(1, 1)); //7
console.log(add5(8));//13
console.log(add5(8,1,3));//17

