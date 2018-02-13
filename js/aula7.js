window.onload = function(){
	var nome = "Pedro";
	gravarCookie("nomeCookie",nome,15);
	lerCookie("nomeCookie");
	/*var n = lerCookie("nomeCookie");
	alert(n);*/
	//elimiarCookie("nomeCookie");
}