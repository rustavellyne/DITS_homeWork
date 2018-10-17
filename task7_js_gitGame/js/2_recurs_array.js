// задача рекурсивно решить задачу
// реализовать функцию flatten

var array = [34, [32, [3,[ 'aada']], 2334], [3]]  //  [34, 32, 3, 2334, 3]



function flatten(someArr) {
    var answer = [];                                           //создаем масив который вернется, сейчас он пустой
    for(var i = 0; i < someArr.length; i++) {					// запуск цикла итерации по длинне входяшего масива
        if(Array.isArray(someArr[i])) {							// проверка масива является ли он масивом, запихиваем текущий елемент
            answer = answer.concat(flatten(someArr[i]));	// если в нем есть вложенность то обьеденить масив answer c тем что вернет рекурсия
        } else {											// иначе если это окащался елемент масива push в наш масив который вернет функция				
            answer.push(someArr[i]);
        }
    }

    return answer;
}

console.log(flatten(array));