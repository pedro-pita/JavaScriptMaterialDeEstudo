window.onload = function(){
	//alert("sdsdd");
	// Retornar uma lista de todas as tags h3, apenas quero capturar a primeira
	var h3 = document.getElementsByTagName("h3").item(0);
	//alert(h3);
	//alert(h3.parentNode);
	//alert(h3.childNodes);// retorna os elementos filho
	var filhosh3 = h3.childNodes.item(0);	
	//alert(filhosh3);// retrorna o Nó de texto, visto que h3 apenas tem um filho com o texto contido no elemento
	// ATRIBUTOS DOS NÓS
	// retornar o nome do nó
	//alert(filhosh3.nodeName);
	
	/*tipos de Nós
	Retorna um tipo numerico :
	1 - Elemento
	2 - Atributo
	3 - Texto
	*/
	//alert(filhosh3.nodeType);
	
	// retornar a quantidade de filhos do elemento
	//alert(filhosh3.childNodes.length);
	
	// Trabalhar nos nós da lista
	var div = document.getElementsByTagName("div").item(0);
	//alert(div);
	
	var ul = div.childNodes.item(1);
	/*alert(ul);
	alert(ul.nodeName);
	alert(ul.nodeType);
	alert(ul.childNodes.length);
	alert(ul.childNodes.item(0));
	alert(ul.firstChild);// 1 filho 
	alert(ul.lastChild);*/
	// Recuperar todos os filhos
	for(var i=0; i < ul.childNodes.length; i++){
		//alert(ul.childNodes.item(i));
	}
	
	// Capturar o 1 elemento tipo texto da 1 li e so seu valor
	//alert(ul.firstChild.nodeValue);
	
	//Capturar o 1 filho do 1 li
	//alert(ul.childNodes.item(1).childNodes.item(0).nodeValue);
	
	//IMPORTANTE: nodeValue apenas pode ser aplicado a nós do tipo texto, caso contrario devolve null.
	
	
	//aceder ao li
	// Nesta caso vamos aceder ao 5 li
	var li = ul.childNodes.item(5);
	//alert(li.firstChild.nodeValue);
	
	// Aceder ao 2 elemento da li ,que será a ul
	var liul = li.childNodes.item(1).childNodes[1];
	//alert(liul.firstChild.nodeValue);// item31
	
	// Aceder aos irmãos dos elementos
	/*<ul>Antes
		  <li id="item31">item 31</li>
		  Depois
		  <li id="item32">item 32</li>
	</ul>*/
	// Aceder ao irmão anterior ao elemento
	//alert(liul.previousSibling.nodeValue);
	// Aceder ao irmão seguinte ao elemento
	//alert(liul.nextSibling.nodeValue);
	
	
	// Acesso desde o lemento DIV
/*alert(div.childNodes[1]);// ul
alert(div.childNodes[1].childNodes[5]);// 3 li
alert(div.childNodes[1].childNodes[5].childNodes[1]);// ul
alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3]);// 2 li
alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3].childNodes[0]);// objeto Texto
alert(div.childNodes[1].childNodes[5].childNodes[1].childNodes[3].childNodes[0].nodeValue);// item 32
*/
//OU
//alert(div.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstChild.nodeValue);// item 31

// Devolve o numero de elementos do ttipo 'Element'
var ulLength = div.firstElementChild.childElementCount;
//alert(ulLength);// 3 elementos

//*******************************************************
/* ********Manipulação e criação de nós*************** */
//******************************************************

// Criação de elementos
// Usamos o método createElement
var div = document.getElementsByTagName("div").item(0);
// Criar um h3
var h3 = document.createElement("h3");
// add um elemento tipo texto ao h3 criado
h3.appendChild(document.createTextNode("Cabeçalho h3 via JS"));
// add no div o elemento criado h3
div.appendChild(h3);

var li = document.createElement("li");
li.appendChild(document.createTextNode("Li via JS"));
div.firstElementChild.appendChild(li);

//-------------------------------
//Nós do tipo Atributo
var atrib = document.createAttribute("style");
	// add regras ao atrbuto
	atrib.value = "color:#0000ff";
	// aplicar ao elemento
	h3.setAttributeNode(atrib);
	
	// OU
	h3.setAttribute("style","color:#00ff00");
	
//----------------------------------
// Add um elemento do tipo select
var selecao = document.createElement("select");
	selecao.setAttribute("id","estado_civil");
var opt = document.createElement("option");
	opt.setAttribute("value","Solteiro");
	opt.appendChild(document.createTextNode("Solteiro"));
	
var opt1 = document.createElement("option");
	opt1.setAttribute("value","Casado");
	opt1.appendChild(document.createTextNode("Casado"));
	
	selecao.appendChild(opt);
	selecao.appendChild(opt1);
	div.appendChild(selecao);
//----------------------------------
//Remover elementos
// remover a lista
var eliminar = div.childNodes[1];
div.removeChild(eliminar);

// remover h3 criado
var eliminar = div.childNodes[2];
div.removeChild(eliminar);

// remover h3 existente no document
var h3document = document.getElementsByTagName("h3").item(0);
document.body.removeChild(h3document);
// remover p existente no document
var pdocument = document.getElementById("intro");
document.body.removeChild(pdocument);
}




















