//Вывести поэлементно arguments через forEach
//
//
function argArray(){
	var arr = [];

	[].forEach.call(arguments, function(value,index){   //так как аргументы -  обьект а не массив,
		/*console.log(value);*/						// поэтому просто так методы массива не выйдет использовать
		 arr.push(value);							//одалживаем у массива(пустого) метод и подменяем контекст этого масива 
	});	
	return arr									//нашими аргументами
}													

 

console.log(argArray(1, 2, 3, " asdasd"))


