//еализовать сортировку пузырьком
var array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(array.length)
function sortBubble (arr){
	for(var i = 0; i < array.length-1; i++){			//ставим внешний цикл для обхода каждого елемента, длинна -1 потому как 
		console.log("                     ")
		for(var j = 0; j < array.length-i-1; j++){		//пройдет внутренний цикл максимальный елемент уже будет вконце и нет смысла делать еще один обход
		if(arr[j] > arr[j+1]){							// array.length-1-i нужно чтобы скоратить количество не нужных итераций так 
			temp = arr[j];								//как после каждой проходки елемент побольше будет перемещатся в конец и не нужно перепроверять
			arr[j] = arr[j+1];							// тут мы сверяем текущий елемент со следующим и если он больше, то меняем местами
			arr[j+1] = temp;
		}console.log(arr);
	}
}
	return arr
}
console.log(sortBubble(array));



