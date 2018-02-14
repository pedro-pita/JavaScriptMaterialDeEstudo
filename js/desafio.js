// GRUPO I
v1 = new Array ("XHTML", "CSS", "JAVASCRIPT","JQUERY","MYSQL","PHP");
document.write ("<p>Este vetor possui " + v1.length + " elementos. Que são:</p>");
document.write ("<ul>");
for (var i=0;i < v1.length;i++){
	document.write ("<li>" + v1[i] + "</li>");
}
document.write ("</ul>");


document.write ("<ul>");
var nv = new Array();
var cont = 0;
var indice = 0;
for (var i=v1.length;i > 0;i--){
	if(indice++ % 2)
		nv[cont++] = v1[i-1];
}
for (var j=0;j < nv.length;j++){
	document.write ("<li>" + nv[j] + "</li>");
}
document.write ("</ul>");


// ERRO TIPICO
/*var array = new Array(6);
array = ["XHTML","CSS","JAVASCRIPT","JQUERY","MYSQL","PHP"];
var copy = new Array(array.length);
var count = 0;
for(var i = array.length;i > 0; i--){
	if(i%2){
        copy[count++] = array[i-1];
    }
}

for (var j=0;j < copy.length;j++){
	document.write (copy[j]+"<br />");
}
*/
//*********************************
//GRUPO II
var a = [
			"www.atola.pt/index.pt",
			"www.atola.pt/index.php",
			"www.atola.pt/noticias.php",
			"www.atola.pt/home.php",
			"www.atla.pt/home.php",
			"www.atla.pt/hom.php",
			"www.atola.com/hom.php"
		];
regex = /(\w{3}\.\w{5}\.\w{2,})\/(\w{4,}\.\w{2,})/;

function valida(str){
	//alert("TESTE:"+str+" |  Res:"+regex.test(str));
	//ou
	return regex.test(str);
}
/*imprime("teste",valida("www.atola.pt/home.php"));
imprime("teste",valida("www.atola.com/home.php"));
imprime("teste",valida("www.atola.p/home.php"));*/
 
function imprime(strControl,strValue){
	document.write("TESTE: "+strControl+"->RES: "+strValue+"<br />");
}
 
for (var i=0; i < a.length; i++){
	var res = valida(a[i]);
	imprime(a[i],res);
	//ou 
	//imprime(a[i],valida(a[i]));
}

regex1 = /(\w{3}\.\w{5}\.\w{2,})/;
str1 = "www.atola.pt";
//alert(str1.replace(regex1,"http://$1/epcc.pt"));

regex2 = /(\w{3}\.\w{5}\.\w{2,})\/(\w{4,}\.\w{2,})/;
str2 = "www.atola.pt/index.pt";
//alert(str2.replace(regex2,"http://$1/epcc.pt/$2"));


//ou alterar todos os links para a terminação epcc.pt
document.write("<br /> Troca Usando Clausulas!!!");
var a1 = a;
for (var i=0; i<a1.length; i++) {
	document.write("<li>" + a1[i].replace(regex2,"http://$1/epcc.pt/$2")+"</li>");
}

//****************************
// GRUPO III
window.onload = function(){
	//Usando um dos metodos leccionados
	var elem = document.getElementsByTagName("h2");
	alert(elem[0].innerHTML);
	
	var h2 = document.getElementsByTagName("h2")[0];
	var conteudo_h2 = h2.childNodes[0].nodeValue;
	//alert(conteudo_h2);
	//Usando API DOM Core
	var div = document.getElementsByTagName("div").item(1);// segundo div
	var h2_ = div.childNodes[3];// h2 terceiro filho de Div
	//alert(h2_.childNodes[0].nodeValue);

var btn = document.getElementById("clik");
	btn.onclick = function(){
	h2.innerHTML = "Consegui aplicar o efeito inserir texto corretamente!";
	h2.setAttribute("style","color:#ddccdd");
	}
}