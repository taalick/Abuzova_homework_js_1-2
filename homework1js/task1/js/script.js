// first task
function pow(){
	var a = prompt("Введите число", "7");
	var b = prompt("Введите степень", "2");
	var multiply=1;

	for(var i=0; i<b; i++){
		multiply *= a;
	}
	console.log(multiply);
}


pow();





