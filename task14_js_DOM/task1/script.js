var body = document.querySelector('body');
var script = document.querySelector('script');

//creating of DOM elements
var div = document.createElement('div');
var p = document.createElement('p');
var ul = document.createElement('ul');

for(var i = 0; i < 4; i++) {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode("пункт номер "+ (i+1)));
	ul.appendChild(li);
}
//inserting of DOM elements
div.appendChild(ul);
//insert inner text
p.innerHTML = "text commentaries";
div.insertBefore(p, ul);

var div2 = div.cloneNode(true);
var div3 = div2.cloneNode(true);
//use insertBefore instead of appendChild because it move script - tag to top
body.insertBefore(div, script)

div.parentNode.insertBefore(div2, div.nextSibling);

body.insertBefore(div3, script);

console.log(body)