/**
 * напиши функцию 
 * map (fn, array)
 * которая принимает на вход функцию и массив 
 * и обрабатывает каждый елемент массива этой функцией, возвращая новый массив
 */


function square (x){ 
	return x * x; 
}

function map (func, arr){
	for (var i =0; i < arr.length; i++){
		arr[i] = func(arr[i]);
	} return arr;
}

// results
 var array = [1, 2, 3, 4];
console.log(map(square, array)); // [1, 4, 9, 16]
console.log(map(square, [])); // []