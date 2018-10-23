// Все элементы label внутри таблицы. Должно быть 3 элемента.
// 
var table = document.querySelector('table');
var labels = table.getElementsByTagName('label')
console.log(labels)

//Первую ячейку таблицы (со словом "Возраст").
var firstCell = table.querySelector('td')
console.log(firstCell)

//Вторую форму в документе.
var secondForm = document.getElementsByTagName('form')[1];
console.log(secondForm)

//Форму с именем search, без использования её позиции в документе.
var formByName = document.querySelector('form[name="search"]');
console.log(formByName)

//Элемент input в форме с именем search. Если их несколько, то нужен первый.
 var firstInput = formByName.querySelector('input[name="search"]');
 console.log(firstInput)

//Элемент с именем info[0], без точного знания его позиции в документе.
//
var info0 = document.getElementsByName('info[0]')[0];
console.log(info0)

//Элемент с именем info[0], внутри формы с именем search-person.
var info1 = document.querySelector('form[name="search-person"] [name="info[0]"]');

console.log(info1);
