//Реализовать функцию копирования объекта

var original = {					//создаем какоейто обьект
	id: 1,
	name: "Sasha",
	age: 30,
	inObj: {
		weight: 82,
		height: 180
	}
};

function cloneObj(obj){				
	let newObj = {}				
	for (var key in obj) {
		if((obj[key] !== null) && (typeof obj[key] === "object")){
			newObj[key] = cloneObj(obj[key])  //deep clone
		} else {
			newObj[key] = obj[key]
		} 	
	}
	return newObj					
}


 var clone = cloneObj(original);	// вызываем функцию клонирования

clone.name =" New User";			//  проверяем
clone.inObj.weight = 0;
original.id = 2;					// если функция не скопирует обьект, то сделав изминения в одном обьекте они отобразятся при вызове новой переменной

 console.log(original);
 console.log(clone);

