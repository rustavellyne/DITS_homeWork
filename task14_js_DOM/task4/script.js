
var options = {
	'top': '200px',
	'right': '500px',
	'color': 'red',
	'className': 'bg',
	'html': 'text will show'
}


function showNotification(option) {
	var div = document.querySelector('div');
	div.innerHTML = options.html;
	div.style.position = 'absolute';
	div.style.top = option.top;
	div.style.right = option.right;
	div.style.color = option.color;
	div.classList.add(option.className);


	setTimeout(() => {
	  div.setAttribute('hidden', true)
	}, 2000)

}

window.onload = function(){
	showNotification(options)
}