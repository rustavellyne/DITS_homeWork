var button = document.querySelector('button');
var forTable = document.querySelector('.for-table');

console.log(forTable)

button.addEventListener('click', createTable);

function createTable () {
	forTable.innerHTML = '';
	var rows = document.getElementById('rows').value;
	var columns = document.getElementById('columns').value;
	var table = document.createElement('table');

	for(var i = 0; i < rows; i++) {
		var row = document.createElement('tr');
		for(var j = 0; j < columns; j++){
			if (!i) {
				var cell = document.createElement('th');
				cell.innerHTML = 'row = ' + (i + 1) + ' column = ' + (j + 1);
				row.appendChild(cell); 
			} else {
				var cell = document.createElement('td');
				cell.innerHTML = 'row = ' + (i + 1) + ' column = ' + (j + 1);
				row.appendChild(cell); 
			}
			
		}
		table.appendChild(row);
	}
	
	forTable.appendChild(table)	

}
