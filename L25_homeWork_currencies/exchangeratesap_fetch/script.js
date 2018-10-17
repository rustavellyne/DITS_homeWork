let period = 14;
let storage = [];

function getAPI(date="latest"){
	return fetch (`https://api.exchangeratesapi.io/${date}?base=USD&symbols=GBP,RUB,EUR,PLN,SEK,TRY`,
		{
			method: 'GET'
		}
	)
}
///getDateFromAPI/////
function getLastDateFromAPI(date){
	return getAPI(date)
		.then(function(res){
			return res.json()
		})
		.then(function(res){
			return res.date
		})
}
////function with generation data/////////////////////////////
function changeDate(date,iterate = 0){
	var d = new Date(date);
   d.setDate(d.getDate()-iterate);
 	var str = (d.getFullYear()+'-'+formatDate((d.getMonth()+1))+'-'+formatDate((d.getDate())));
	return str
}
//////////format date////
function formatDate(date){
	return (+date < 10) ? '0' + date : date
}
////////////get data from API///////////////
function getDataFromAPI(){
	getLastDateFromAPI('latest')
			.then(function(lastDate){
			 for(var i = 0; i < period; i++){
			 	let date = changeDate(lastDate,i);
			 	getAPI(date).then(function(res){return res.json()})
			 							.then(res=>storage.push(res));
			 }
		})
}
////render of receiving data///////
function render(material){
	let div = document.querySelector('.root')
	let table = document.createElement('table');
	let caption = document.createElement('caption');
	caption.innerText = `currency of ${storage[0].base}`;
	table.appendChild(caption);
	//////////generation of table////
	let outCounter = 0;
	for (let c of storage){
		
		let date = c.date;
		let rates = c.rates;

		if(outCounter === 0) {
			let headTable = Object.keys(rates).length;
			let tr = document.createElement('tr');
			for(let i = 0; i < headTable; i++){
				if(i === 0){ 
					let th = document.createElement('th');
					th.innerText = '';
					tr.appendChild(th);
				}

				let th = document.createElement('th');
				th.innerText = Object.keys(rates)[i];
				tr.appendChild(th);
			} table.appendChild(tr);
		}

		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.innerText = date;
		tr.appendChild(td);
		outCounter++;
		for(let k in rates){
			let td = document.createElement('td');
			td.innerText = /*`${k}:*/`${rates[k]}`
			tr.appendChild(td)
		} 
		table.appendChild(tr)
	}
	div.appendChild(table);
}

window.onload = function(){
	getDataFromAPI();

	setTimeout(() => {
		storage.sort((a,b)=>{
			if (a.date > b.date) return -1;
  		if (a.date < b.date) return 1;
		})
		render(storage); 
	}, 700)
}