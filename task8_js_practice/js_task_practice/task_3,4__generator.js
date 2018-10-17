/**
 * напиши функцию генератора 
 * @sequence(start, step)
 * она при вызове даст другую функцию - генератор, 
 * которая при каждом вызове дает на 1 больше, и так до бесконечности.
 * начальное число с которого начинается отсчет,  шаг, задается при создании генератора.
 * шаг можно не указывать, тогда он будет равен одному.
 * начальное значение по умолчанию равно 0. генераторов можно созать сколько угодно  
 */

function createCounter(start = 0, step = 1){
	var value = start;
	//console.log("значение внешней функции  "+value);
	return function(){
		var result = value
		value += step;
		//console.log("значение в внутренней функции  "+value);
		return result;
	}
}

/**
 * вызов функции 
 *
 * и проверка 
 */
var generator1 = createCounter(10, 3);



 var generator2 = createCounter(7, 1);

//без указания шага
 var generator3 = createCounter(2)

console.log(generator1()); // 10
console.log(generator1()); // 13

 console.log(generator2()); // 7

console.log(generator1()); // 16

 console.log(generator2()); // 8


/**
 * также нужна функция take(gen, x) которая вызывает функцию 
 * gen  заданное число 
 * @(x)  раз 
 * @return массив с результатаи вызовов 
 */
function pick(func, x){
  var result = [];
  for (var i = 0; i < x; i++){
    result.push(func())
	} 
	return result;
}
// results
var gen2 = createCounter(0, 2);
console.log(pick(gen2, 5)); // [0, 2, 4, 6, 8]

