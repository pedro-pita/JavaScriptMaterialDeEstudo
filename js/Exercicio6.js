window.onload = function(){
	var r = document.forms[0].elements[0].innerHTML;
	document.forms[0].elements[0].setAttribute("value","Carregas te aqui seu malandro!");
	document.getElementById("textArea").onClick = function(){
		document.forms[0].elements[0].setAttribute("value","Carregas te aqui seu malandro!");
	}
}
