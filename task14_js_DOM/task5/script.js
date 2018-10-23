// Сделать функции hasClass(node, klass),
// которые позволяют проверить,
// есть ли у элемента заданный CSS-класс
var div = document.querySelector('div');
function hasClass(node, klass) {
	return node.classList.contains(klass);
}
//добавить к нему класс (если его еще нет)
//
function addClass(node, klass) {
	if(hasClass(node, klass)){
		return false;
	}
	node.classList.add(klass)
	return true
}

//удалить класс

function removeClass(node, klass) {
	return node.classList.remove(klass)
}

console.log(addClass(div, "className"))
console.log(addClass(div, "className"))
console.log(removeClass(div, "className"))