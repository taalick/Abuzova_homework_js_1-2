var array = [];

for(var i=0; i<5; i++){
	array[i] = prompt("Введите имя", "Вася"+i);
}
//document.writeln(array);  

var name = prompt("Введите Ваше имя", "Петя");

//document.writeln(name);  

var userResource;

for(var i=0; i<5; i++){
	if(array[i] === name){
		userResource = name;
	} 
}

if(userResource != undefined)
	{
	alert(userResource + ", Вы успешно вошли");
}else{ 
		alert("Ошибка! Данный пользователь не зарегистрирован");
	}