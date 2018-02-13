/*var x = prompt("Numero maior que 10.");
try{
	var x = y;
}catch(erro){
	document.write(erro.name + "<br />");
}*/
//-------------2-----------
/*var x = prompt("Numero maior que 20.");

try{
	if(x < 20){
		throw "Numero menor que 20.";
	}
	//var x = y;
	alert("Valor inserido: "+x);
}catch(erro){
	alert(erro.toString());
}*/
//--------------3----------
var x = prompt("Numero maior que 10.");
try{
	if(x < 10 && x >= 5){
		throw "Erro:(5-9)";
	}
	if(x < 5){
		throw "Erro:(<5)";
	}
	//alert("Valor inserido: "+x);
}catch(erro){
	if(erro == "Erro:(<5)"){
		alert("O numero inserido foi inferior a 5.");
	}else if(erro == "Erro:(5-9)"){
		alert("O numero inserido esta entre 5-9");
	}
}
/*
try{
	var x = y; //As declarações a serem executadas.
}catch(erro){ //Um identificador para armazenar um objeto de exceção para a catchcláusula associada .
	document.write(erro.name + "-" + erro.message + "<br />"); //Declarações que são executadas se uma exceção for lançada no trybloco.
}catch (erro){
	document.write(erro.name + "-" + erro.message + "<br />");
}finally{
	document.write("Terminou a verificação de erro." + "<br />");//Declarações que são executadas após a conclusão da trydeclaração. Essas declarações executam independentemente de uma exceção ser ou não captada.
}*/

/*var num = prompt("Insere um numero", "0-9");
try{
	if(num >=0 && num <=5){
		throw "Correto";
	}else{
		throw "Incorreto";
	}
}catch(mensagem){
	if(mensagem == "Correto"){
		document.write("Este numero >=0 e <=5");
	}
	if(mensagem == "Incorreto"){
		document.write("Este numero não ´é >=0 e <=5");
	}
}*/




