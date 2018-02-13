var idade = "20";
//alert(idade.length); //Desta forma represetnamos o bojeto Number, como tal, temos acesso aos atributos e metodos da classe(objeto).
//alert(new String(idade).length); // è o JS que executa esta rotina
var nome =  new String("Pedro");
//console.log(nome);
//alert(nome.valueOf()); //retorna o valor contido no objeto como valor primitivo.

var num1 = new Number(1.120);
//alert(typeof(num1));
var n = new Number();
//document.write("<br />Valor de n " + n); //Valor é 0
var n1 = new Number("Teste");
//document.write("<br />Valor de n1 " + n1); //Não é um numero
var n2 = new Number("123");
//document.write("<br />Valor de n2 " + n2); //apresenta o valor caso seja possivel converter
var n3 = new Number(123434);
//document.write("<br />Valor de n3 " + n3); 
var n4 = new Number(false);
//document.write("<br />Valor de n4 " + n4); //false = 0
var n5 = new Number(true);
//document.write("<br />Valor de n5 " + n5); //true = 1
var n6 = new Number(1234);
var n7 = new Number(n6); //é possivel adicionar o valor de uma variavel
//document.write("<br />Valor de n6 "+n6);
//document.write("<br />Valor de n7 "+n7);

/*document.write("<br />Valor de NaN: "+Number.NaN);
document.write("<br />Valor de MIN_VALUE "+Number.MIN_VALUE);
document.write("<br />Valor de MAX_VALUE "+Number.MAX_VALUE);
document.write("<br />Valor de NEGATIVE_INFINITY "+Number.NEGATIVE_INFINITY);
document.write("<br />Valor de POSITIVE_INFINITY "+Number.POSITIVE_INFINITY);
var numero = new Number("10.12345");
document.write("<br />Valor de numero: "+numero.toFixed()); //mostrar o numero fixo
document.write("<br />Valor de numero: "+numero.toFixed(3)); //mostrar 3 casas decimais
document.write("<br />Valor de numero: "+numero.toPrecision()); //mostrar numero complero
document.write("<br />Valor de numero: "+numero.toPrecision(1));
document.write("<br />Valor de numero: "+numero.toString()); //valor representado pela variavel*/

//***************String*****************
//Modificar as Strings
var exemplo = "JavaScript";
document.write("Texto método big->"+exemplo.big() + "<br />");
document.write("Texto método bold->"+exemplo.bold() + "<br />");
document.write("Texto método italics->"+exemplo.italics()+ "<br />");
document.write("Texto método small->"+exemplo.small()+ "<br />");
document.write("Texto método strike->"+exemplo.strike()+ "<br />");
document.write("Texto método sup->"+exemplo.sup()+ "<br />");
document.write("Texto método sub->"+exemplo.sub()+ "<br />");
document.write("Texto método toLowerCase->"+exemplo.toLowerCase()+ "<br />");
document.write("Texto método toUpperCase->"+exemplo.toUpperCase()+ "<br />");
document.write("Texto método substring(0,4)->"+exemplo.substring(0,4)+ "<br />");
document.write("Texto método substring(4)->"+exemplo.substring(4)+ "<br />");
document.write("Texto método substring(4,2)->"+exemplo.substring(4,2)+ "<br />");
document.write("Texto método substring(2,4)->"+exemplo.substring(2,4)+ "<br />");
var str = "Pedro";
document.write("Texto método charAt(str.length - 1)->"+str.charAt(str.length - 1)+ "<br />");
document.write("Texto método charAt(3)->"+str.charAt(3)+ "<br />");
// codigo  da tabela AscII
document.write("Texto método charCodeAt(3)->"+str.charCodeAt(3)+ "<br />");

//********************* Array ***************
/*var numeros = new Array();//construção simples sem dimensionamento
var nivel = new Array("baixo","media","alto");//construção com atribuição de parametros
var exemplo = new Array(5);// construção simples com dimensionamento
exemplo[0]= "ex1";
exemplo[1]= "ex2";
exemplo[2]= "ex3";
exemplo[3]= "ex4";
exemplo[4]= "ex5";
var nivel = ["baixo","medio","alto"];// forma literal
//console.log(nivel);
//  JOIN
str_1 = nivel.join();//baixo,medio,alto
str_2 = nivel.join(", ");//baixo, medio, alto
str_3 = nivel.join("*");//baixo*medio*alto
str_4 = nivel.join("<br />");
/*
baixo
medio
alto
*/
//alert(str_3);
/*document.write(str_1);
document.write("<br />"+str_2);
document.write("<br />"+str_3);
document.write("<br />"+str_4);
// Tamanho
nivel = new Array("baixo","medio","alto","muito alto");
nivel.length = 3; //dimensionar para 2 elementos
//console.log(nivel);

//POP
nivel = new Array("baixo","medio","alto","muito alto");
var eliminado = nivel.pop();//a var eliminado contem "muito alto"
//alert(eliminado);
//console.log(nivel);
//PUSH
nivel = new Array("baixo","medio");
var novo = nivel.push("alto","muito alto");
console.log(nivel);
// REVERSE
nivel = new Array("baixo","medio","alto","muito alto");
nivel.reverse();// inverter o array
console.log(nivel);
console.log(nivel[0]);
//--------------------------------
var removido = nivel.shift();//consome o primeiro elemento
//alert(removido);
//------------------------------
var num = new Array("Valor1","Valor 2","Valor 3","Valor 4");
str = num.toString();// str contem "Valor1,Valor 2,Valor 3,Valor 4"
console.log(str);
//-------------------------------
var v = new Array(4);
v[1] = 234;
v[3] = 12345;
/*document.write("<p>");
document.write("Indice 0 :"+v[0]);
document.write("<br />Indice 1 :"+v[1]);
document.write("<br />Indice 2 :"+v[2]);
document.write("<br />Indice 3 :"+v[3]);
document.write("</p>");
v[2] = "Pedro"; 
document.write("<p>");
document.write("Indice 0 :"+v[0]);
document.write("<br />Indice 1 :"+v[1]);
document.write("<br />Indice 2 :"+v[2]);
document.write("<br />Indice 3 :"+v[3]);
document.write("</p>");*/
//---------------------------
/*var lp = new Array("XHTML","PHP","JAVA","C","MySQL");
document.write("<p> Este vetor possui" + lp.length + " elementos, sendo eles: </p>");
document.write("<ul>");
for(var i =0; i < lp.length ; i++){
	document.write("<li>" + lp[i] + "</li>");
}
document.write("</ul>");*/
//------------------------
// Inverter atraves de ciclos
/*var nv = new Array(lp.length);
document.write("<ul>");
var count = 0;
for(var i = lp.length; i > 0 ; i--){
	nv[count++] = lp[i-1];
	//document.write("<li>" + lp[i] + "</li>");
}
for(var i =0; i < nv.length ; i++){
	document.write("<li>" + nv[i] + "</li>");
}
document.write("</ul>");*/
//---------------------------------
// Inverter uma string
/*var nome = "http://www.epcc.pt/?polo=funchal";
var copy = new Array(nome.length);
var cnt = 0;
for(var i = nome.length; i > 0; i--){
		copy[cnt++] = nome[i-1];
}
copy = copy.join("");
document.write("Exemplo de string invertida: <br />Antes->"+
				nome+"<br />Depois->"+copy);*/
//---------------------------------
// Array Avançado - Multidimensional
//Sintaxe : var nomeArray = new Array(new Array,new Array);
//Exemplo:
/*var vN = new Array("Pedro","Pita");
var vI = new Array(18,56);
var vT = new Array(vN,vI);*/
//OU
/*var vT = new Array();
vT[0] = new Array("Pedro","Pita","Novo");
vT[1] = new Array(18,56);
document.write("<br />VT[0]"+vT[0]);
document.write("<br />VT[1]"+vT[1]);
document.write("<br />VT"+vT);
document.write("<br />VT[0][0]"+vT[0][0]);
document.write("<br />VT[1][1]"+vT[1][1]);
//OU - atraves do literal
var vT = [
			["Pedro","Pita"],
			[18,56,67]
		 ];
console.log(vT);
console.log(vT.length); // 2
console.log(vT[0].length); // 2
console.log(vT[1].length); // 3
document.write(vT[1][1]);
//--------------------------------
// Array Associativo '{}'- existe uma associação de dados associa, associar
// ContentValues()- Chave , valor
var vPessoa = {nome:"Pedro", idade:"20", morada:"Funchal"};
document.write("<br />Pessoa->nome: " + vPessoa.nome);
document.write("<br />Pessoa->idade: " + vPessoa.idade);
document.write("<br />Pessoa->morada: " + vPessoa.morada);*/

// date
var data = new Date(); //guarda a data e hora do sistema
//document.write("<br />Data: " + data); // mostrar a data e hora do sistema
var dataM = new Date(1000 * 60 * 60 * 24 * 365);//1 ano em relação a 01/01/1970
//document.write("<br />Data: "+dataM);
var dataE= new Date(2012,01,12,12,12,14,1000); //year,month,day,hours,minutes,seconds,milliseconds
//document.write("<br />Data: "+dataE);
var hoje = new Date();
var h = hoje.getHours();
var m = hoje.getMinutes();
var s = hoje.getSeconds();
//document.write("<br />Data de hoje : "+h+":"+m+":"+s);
//---------------------------------
var dias_semana = ["domingo","segunda","terça","quarta","quinta","sexta","sabado"];
var hoje = new Date();
//document.write("<br />O dia da semana é : " + dias_semana[hoje.getDay()]);
//-----------------------------
//Data no formato DD/MM/AAAA
var hoje = new Date();
//document.write("<br /> Data no formato DD/MM/AAAA: "+hoje.toLocaleString());
/* EXEMPLOS*/
var pi = Math.PI;
var absN  = Math.abs(-5.16); //Retorna o valor absoluto de x -> MAth.abs(-7.25) : R:7
var absP = Math.abs(5.16);
var teto  = Math.ceil(1.4); //Devolve x, arredondando por cima, Math.ceil(1.4);: R:2
var chao   = Math.floor(1.6);//Retorna x, arredonda para o inteiro mais proximo(a baixo) Math.floor(1.6): R:1
var pot   = Math.pow(3,4); //Retorna o valor de x elevado a y, Math.pow(3,4): R: 81
var aleat = Math.random();// numero aleatorio/random que varia entre 0 e 1
var n = aleat.toFixed(2);// Cast para a Objeto Number
var aleat10 = Math.random()*10;// entre 0 e 9
var exemplo = Math.floor(Math.random()*10) + 1;// numero aleatorio/random que varia entre 1 e 10

var arred = Math.round(1.80);
var arred1 = Math.round(1.3);

document.write("PI:" + pi + "<br />");
document.write("absN:" + absN + "<br />");
document.write("absP:" + absP + "<br />");
document.write("teto:" + teto + "<br />");
document.write("chao:" + chao + "<br />");
document.write("pot:" + pot + "<br />");
document.write("aleat:" + aleat + "<br />");
document.write("n:" + n + "<br />");
document.write("aleat10:" + aleat10 + "<br />");
document.write("exemplo:" + exemplo + "<br />");
document.write("arred:" + arred + "<br />");
document.write("arred1:" 
+ arred1 + "<br />");














