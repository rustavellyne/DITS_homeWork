/**
 * написать функцию getField
 *  которая берет массив обьектов и возвращает
 *  массив значений определеного поля
 * 
 * 
 */

var characters = [
	{ 'name': 'barney', 'age': 36 },
	{ 'name': 'fred', 'age': 40 }
]

function getField(arr, key){
	return arr.map(function(item){
		return item[key]
	})
}

console.log(getField(characters, 'name'))