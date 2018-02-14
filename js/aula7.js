window.onload = function(){
	var nome = "Pedro";
	gravarCookie("Cookiezinha",nome,15);
	lerCookie("Cookiezinha");
	var n = lerCookie("Cookiezinha");
	alert(n);
	//elimiarCookie("Cookiezinha");
}