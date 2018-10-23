//get HEAD
//first variant
var head1 = document.firstElementChild.firstElementChild;
var head2 = document.body.previousElementSibling;
console.log(head1, head2);

//get UL
 var ul1 = document.body.firstElementChild.lastElementChild.previousElementSibling;
 console.log(ul1)
//get all child p

var childP = Array.from(document.body.children);
console.log('=============================================================')
for(var i = 0; i < childP.length; i++){

	for(var j = 0; j < childP[i].children.length; j++){
		if(childP[i].children[j] === childP[i].children[2]) continue;
		console.log(childP[i].children[j])
	}

}
	

console.log('==============================================================')
//get siblings of commentaries
//get commentaries
var commentary =  document.body.firstElementChild.firstElementChild.nextElementSibling.nextSibling.nextSibling;
console.log(commentary)
//previous Subling
console.log(commentary.previousElementSibling)
// next sibling
// 
console.log(commentary.nextElementSibling)


