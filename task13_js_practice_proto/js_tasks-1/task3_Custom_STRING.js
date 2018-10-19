/*

Реализуйте класс CustomString, который будет иметь следующие методы:
 метод makeReverse(), который параметром принимает строку, 
 а возвращает ее в перевернутом виде, 
 метод capitaliseFirst(), который параметром принимает строку,
  а возвращает эту же строку, сделав ее первую букву заглавной 
  и метод capitaliseAllFirst, который принимает строку и делает 
  заглавной первую букву каждого слова этой строки.

*/


function CustomString(){

}

CustomString.prototype.makeReverse = function(text){
	return text.split("").reverse().join("");
}

CustomString.prototype.capitaliseFirst = function(text){
	return text[0].toUpperCase() + text.slice(1);
}

CustomString.prototype.capitaliseAllFirst = function(text){
	var newText = "";
	for(i = 0; i < text.length; i++){
		if(text[i-1]==" " || i === 0){
			newText += text[i].toUpperCase()
		} else {newText += text[i]}
	}
	return newText;
}

var n1 = new CustomString();
console.log(n1.makeReverse("test"))
////////////////////////////////////

console.log(n1.capitaliseFirst("test"))

console.log(n1.capitaliseAllFirst("test mf test php javascript"))