window.onload = function(){
	// aceder ao elemento intro
	var introP = document.getElementById("intro");// retorna apenas um nó
	//alert(introP);
	var intro2=  document.getElementsByClassName("intro2");// coleção de nós
	//alert(intro2);
	var h3 = document.getElementsByTagName("h3");// coleção de nós do tipo h3
	//alert(h3);
	
	// Manipulação do valor de um objeto
	introP.innerHTML = "Alterado via API DOM";
	introP.style.color = "#ffddcc";// DOM HTML
	// OU
	introP.setAttribute("style","color:#0000FF");//DOM CORE
	
	var img = document.getElementsByTagName("img")[0];// DOM html
		img.border="2px solid #ff0000";
		img.style.width="120px";
	var img2 = document.getElementsByTagName("img")[2];
		// OU DOM CORE
		img2.setAttribute("border","4px solid #ffdd00");
		img2.setAttribute("style","width:200px");
		
// DOM HTML
// Coleção de dados na API  DOM HTML
// Aceder a tag img no nosso site
// Qt imgs
//alert(document.images.length);
var imgs = document.images;
/*for(var i=0; i <imgs.length; i++){
	alert(imgs[i].alt);//aceder ao atributo alt
	alert(imgs[i].src);//aceder ao atributo src
}*/
// Formas de acesso ao elemento
/*alert(imgs[0].alt);
alert(imgs.item(0).alt);*/

// Links(tag a 'a')
//alert(document.links.length);
//alert(document.links[0].text);// aceder ao link 0
//alert(document.links[0].href);// aceder ao link 0

var links = document.links;
/*for(var i=0; i< links.length; i++){
	alert(links[i].href);// aceder ao atributo alt
	alert(links[i].name = "Titulo "+i);// acrecentar o parametro name e o atributo um valor
}*/

// Formulários
/*alert(document.forms);
alert(document.forms[0]);// 1 formulário
alert(document.forms.length);//qt form na apps
*/
var forms = document.forms;
/*for(var i=0; i < forms.length; i++){
	alert(document.forms[i].method);
	alert(document.forms[i].action);
}*/

// aceder aos elementos do form
var formElem = document.forms[0];
//alert(formElem.elements.length);
for(var i=0;i < formElem.elements.length; i++){
	/*alert(formElem.elements[i]);// tipo de elemento
	alert(formElem.elements[i].value);
	alert(formElem.elements[i].id);// valor de atrib id
	*/
}

// ALTERAR ELEMENTOS(MANIPULAÇÃO)
var t = document.forms[0].elements.irmaos[0].value;
//alert(t);

var elemIrmaos = document.forms[0].elements.irmaos;
//alert(elemIrmaos.length);
for(var j =0; j < elemIrmaos.length ; j++){
	elemItem = document.forms[0].elements.irmaos[j];
	for(var i=0; i < elemItem.attributes.length; i++){
		// se algum elemento tiver um selected por default
		if(elemItem.attributes[i].name == "selected"){
			//alert(elemItem.attributes[i].name+": "+ elemItem.attributes[i].value);
			var t2 = document.forms[0].elements.irmaos[3];
			t2.setAttribute("selected","selected");
			var t3 = document.forms[0].elements.irmaos[2];
			t3.removeAttribute("selected");
		}
	}
}

// Dados tabela
var tabela = document.getElementById("tabela");
var linha = tabela.insertRow(-1);//inserir linha num determinada tabela: 0 na 1 pos; -1 na ultima pos

var cel1 = linha.insertCell(0);// inserir dado na celula
var cel2 = linha.insertCell(1);// inserir dado na celula

// Add conteudo à celula criada
cel1.innerHTML= "Criado via JS";// diretamente na celula
//cel2.innerHTML= "Criado via JS";
// Add atraves do metodo XML do DOM CORE
cel2.appendChild(document.createTextNode("Criado via JS DOm CORE"));

// Inserir linhas de acordo com a necessidade
function novaLinha(contl1,contl2, nivel){
	var tabela = document.getElementById("tabela");
	var linha = tabela.insertRow(nivel);
	var cel1 = linha.insertCell(0);
	var cel2 = linha.insertCell(1);
	cel1.innerHTML= contl1;
	cel2.appendChild(document.createTextNode(contl2));
}// FIM novaLinha
/*novaLinha("JS1","JS2", 0);
novaLinha("JS3","JS4", -1);*/

/*var btn_Insert = document.getElementById("btn_new").onclick = function(){
}*/
var btn_Insert = document.getElementById("btn_new");
btn_Insert.onclick = function(){
	novaLinha("JS1","JS2", 0);
}

var btn_Delete= document.getElementById("btn_del");
btn_Delete.onclick = function(){
	tabela.deleteRow(-1);// elimina pelo index -1, ultima pos da tabela
}

// Todas as listas não ordenadas
var listaNaoOrdenas = document.getElementsByTagName('ul');

// Aceder à primeira lista não ordenada
var listaNaoOrdenas1 = document.getElementsByTagName('ul')[0];

var listsItens = listaNaoOrdenas1.getElementsByTagName('li');

for(var i=0, length = listsItens.length; i < length ; i++ ){
	alert(listsItens[i].firstChild.data);
}

}// FIM onload











