//task_1
function butEnable(f) {
	if ((f.value).length > 3) {
        document.getElementById("enButton").removeAttribute('disabled');
    }
}
// task_2
var modal = document.getElementById("modal");
var span = document.getElementById("close");

function openWin(){
	modal.style.display = "block";
}

function closeWin(){
	modal.style.display = "none";

}
window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}


//task_3
function task3(){
	let choose = prompt('какую операцию желаете выполнить? 1)add 2)substract 3)divide 4)multiply ', 'add');
	let result =operations[choose](...getData());
	alert (result)
}

function getData(){
	let a = +prompt("введите число А = ", "");
	let b = +prompt("введите число B = ", "");
	return [a, b]
}

let operations = {
		add: function(a,b){
			return a + b
		},
		substract: function(a,b){
			return a - b 
		},
		divide: function(a,b){
			return a / b 
		},
		multiply: function(a,b){
			return a * b 
		}
	};
