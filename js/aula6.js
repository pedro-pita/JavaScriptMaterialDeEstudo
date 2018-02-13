/*alert("appName:" + navigator.platform); //nome do browser
alert("appVersion:" + navigator.appVersion); //versão do browser
alert("appAgent:" + navigator.userAgent); //browser agente

//objeto de localização de informação relativa a localização do documento
alert(location.href); //localização do ficheiro
alert(location.protocol);
var plugins = navigator.plugins; //capturar plugins
	var p = "";
	for(var i = 0; i < plugins.length; i++){
		p += plugins[i].name + "\n";
	}
alert(p);*/
/*function fsemRetorno(){ //função sem retorno
	document.write("Função sem retorno<br />");
}
function calculaSoma(){ // funcção com retorno
	return 10+3;
}
function imprime(txt){ //função sem retorno mas com parametro
	document.write(txt+"<br />");
}
function multiplica(x,y){ // função com retorno e com parametros
	return x*y;
}*/
// Chamadas dos métodos : Sintaxe: nomeFuncao()
/*
fsemRetorno();
var soma = calculaSoma();
var mul  = multiplica(4,5);
imprime(soma);
imprime("Quebra");
imprime("Nova Quebra");
imprime(mul);*/
/*
var mult1 = new Function("v1","v2","return v1*v2;"); //Função atraves da forma literal
var resM1 = mult1(4,4); 

var mult2 = function(v1,v2){
	return v1*v2;
}
mult2(5,89);
imprime(resM1);
imprime(mult2(5,89));*/

//---------------------------------------------
//**** Forma correta *****************************
/*window.onload = function(){
	document.getElementById("refJS").onclick = function(){
		alert("Fui referenciado de forma correta");
	}
}*/

//***************************BOM**************
// Click no elemento da lista Evento onClick()
window.onload = function(){
	/*alert("Ola");
	confirm("tem a certeza?"); //confirmar
	prompt("Indique o seu nome:");
	open("aula5.html","Titulo da nova pagina","width=100,height=100,toobar=no,location=no"); //abrir um janela*/
	document.getElementById("refJS").innerHTML = "Ola fui inserido via JS";
	document.getElementById("refJS").onclick = function(){
		alert("Fui referenciado de forma correta");
	}
	//alert(screen.width + " : " + screen.height); //mostrar tamanho do ecra
	document.getElementById("tempo").onclick= function(){
		inicioPedido();
	}
	document.getElementById("tempof").onclick= function(){
		paraContagem();
	}
	/* setInterval -  definimos um intervalo de tempo entre requisições*/
	//setInterval(relogio,1000);
	var atualiza = 3;// mudar de 1 em 1 segundos a imagem
	var intervalControl  = setInterval(rodarImagens,atualiza*1000); //começar o carregamento das imagens e atualizar as imagens
}
function onClick(){
	alert("Evento de clique, atraves de atributo(onclick) da tag html 'li'");
}
function atualizarPagina(){
	window.location.reload(); //atualizar pagina
}
function retroceder(){
	window.history.back(); //retroceder para a ultima pagina
}

function avancar(){
	window.history.forward(); //avançar
}
function irPara(){
	window.history.go(1); //avançar 1 pagina
}
function voltar2N(){
	window.history.go(-2); //retroceder 2 paginas
}
//*************************************
//contadores
var c = 10;
var t;
function iContador(){
	document.getElementById('txt').innerHTML = c;
	c =c-1;
	t = setTimeout("iContador()",1000);
}

var t ;
var a;
function iniciar(){
	a = prompt("Iniciar em s?");
	contador();
}

function contador(){
	if(a > 0){
		document.getElementById('txt').innerHTML = a;
		a= a-1;
		t = setTimeout("contador()",1000);
	}else{
		alert("Fim!!!");
	}
}

function cancelar(){
	clearTimeout(t);
	alert("Cancelado!!!");
}

//---------------------------
function redirecionar(){
	location.replace('http://www.google.pt');
}
var y = 5;
var t1;
function iniciaRedirecionamento(){
	contadorRed();
}

function contadorRed(){
	document.getElementById('txt').innerHTML = y;
	y=y-1;
	t1 = setTimeout("contadorRed()",1000);
	if(y==0){
		redirecionar();
	}
}
function cancelaRedirecionamento(){
	if(t1 !== null){
		clearTimeout(t1);
		y = 5;//limpar a var, caso contrario ao pressionar novamnete 'iniciar Redirecionamento', continuava do ponto onde parou
		alert("Cancelado!!!");
	}
}
//******************************
var w;
var count;

function inicioPedido(){
	tp = prompt("Iniciar a contagem em (S) ou (M) ");
	switch(tp){
		case 'S':
		case 's':
			tps = prompt("Inicar em qt segundos");
			contagem(tps);
			break;
		case 'M':
		case 'm':
			tpm = prompt("Inicar em qt minutos");
			contagem(tpm);
			break;
		default:break;	
	}
}
function contagem(w){
	if(w > 0){
		document.getElementById('txt').innerHTML = w;
		w--;
		count = setTimeout(function(){contagem(w)},1000);
	}else{
		clearTimeout(count);
		delete w;
		alert("Acabou a contagem!!!");
	}
}

function paraContagem(){
	if(count !== null){
		alert("Parou a contagem");
		clearTimeout(count);
	}
}

//--------------------------
function verificarTime(j){
	if(j < 10){
		j="0"+ j;
	}
	return j;
}
function relogio(){
	var now = new Date;
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	m = verificarTime(m);
	s = verificarTime(s);
	
	var time = h + ":" + m + ":" + s;//12:12:12
	document.getElementById("relogio").innerHTML = time;
}
//-------------------------------
/* passagem das imagens*/
var posImagem = 0;// variavel que armazena e controla a referenciado
var imagens = [];// atraves do literal
/*imagens[0] = "./Imagens/1.jpg";
imagens[1] = "./Imagens/2.jpg";
imagens[2] = "./Imagens/3.jpg";
imagens[3] = "./Imagens/4.jpg";
imagens[4] = "./Imagens/5.jpg";*/

// Array associativo
imagens[0] = {src: "./Imagens/1.jpg", alt: "imagens 1"};
imagens[1] = {src: "./Imagens/2.jpg", alt: "imagens 2"};
imagens[2] = {src: "./Imagens/3.jpg", alt: "imagens 3"};
imagens[3] = {src: "./Imagens/4.jpg", alt: "imagens 4"};
imagens[4] = {src: "./Imagens/5.jpg", alt: "imagens 5"};
 function rodarImagens(){
	 document.images["rodar"].style.width = "200px";
	 document.images["rodar"].style.height = "200px";
	 document.images["rodar"].src = imagens[posImagem]["src"];
	 document.images["rodar"].title = imagens[posImagem++]["alt"];
	 //posImagem++;
	 /* Quando a variavel contador for igual ao superior à dimensão do array, voltamos ao ponto inicial. */
	 if(posImagem >= imagens.length){
		 posImagem = 0;
	 }
 }












