function gravarCookie(nome, value, days){
	var expires = "";
	if(days){
		var date = new Date();// criamos a var que irá receber a data atual
		var dateMls = date.setTime(date.getTime() + (days*24*60*60*1000));// redefinimos a data atual somando os lilisegundos correspondes ao numero de dias passado como argumento
		expires ="; expires=" + date.toUTCString();// validamos a nova data criada e atribuimos o seu valor na var expires
	}
	if(value != null && value != "null"){
		document.cookie = nome + "=" + value + expires+ "; path=/";
		//name + "=" + value + expires; -> desta forma a cookieserá criada na pasta onde estamos a trabalhar
	}
}

function lerCookie(name){
	alert(name);
	var searchName = name + "=";// var que irá receber o valor das cookies guardadas, por forma a podermos comparar com o valor passado no argumento
	var cookies = document.cookie.split(';');// quebra o array ficando apenas com o nome=valor_cookie
	for(var i =0; i< cookies.length; i++){
		var c = cookies[i];// guarda na var c o valor da cookie atual
		alert(c);
		while(c.charAt(0) == ' ')//retorna o carater na pos 0 é verifica se é um espaço
			c = c.substring(1, c.length);
		if(c.indexOf(searchName) == 0)// procura o indice do nosso cookie
		alert(c.substring(searchName.length, c.length));
	}
	return null;
}

/*
Procedimento de eliminação:
1- recebemos o nome da cookie atraves do argumento name
2- gravamos novamente a cookie, fazendo uso da função de gravação, no entanto, indicamos uma data invalida(-1), desta forma o ragumento expires da cookies fica com data invalida eliminando-se.
*/
function elimiarCookie(name){
	gravarCookie(name,'',-1);
	alert("COOKIE: "+name+"\nElimado com Sucesso!!!");
}







