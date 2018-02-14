// Função construtora
function Carro(velMax,cavalos){
	this.cavalos = cavalos + "cv";
	this.velocidadeMax = velMax;
	this.ligado = false;
}
var carro = new Carro(230,150);
/*document.write(carro.velocidadeMax + "<br />");
document.write(carro.cavalos + "<br />");
carro.cor = "azul"; //atributo em tempo de execução
carro.lugares = 5; //atributo em tempo de execução
document.write(carro.lugares + "<br />")
document.write(carro.cor+"<br />");*/
//--------------------------------
//Pelo prototype
/*function liga(){
		this.ligado = true;
}
Carro.prototype.ligar = liga;
document.write(carro.ligado+"<br />");
carro.ligar();
document.write(carro.ligado+"<br />");
// Pelo metodo no objeto
var carro2 = new Carro(1200);
carro2.ligar = liga;
document.write(carro2.ligado+"<br />");
carro2.ligar();
document.write(carro2.ligado+"<br />");
//------------------
// Na estrutura da classe
function liga(){
	this.ligado = true;
}
function Mota(velMax){
	this.velocidadeMax = velMax;
	this.ligado = false;
	this.ligar = liga;
}

var mota = new Mota(2300);
document.write(mota.ligado+"<br />");
mota.ligar();
document.write(mota.ligado+"<br />");*/
// Literal do objeto
/*var Familia = {
				nomeFamilia:"Pitas",
				qtAgregado:6,
				vencimentoAgregado:1200,
				filhos1:{
						nomeFilho:"Pedro",
						idadeFilho:23
				},
				filhos2:{
						nomeFilho:"Joana",
						idadeFilho:43
				}
			  };*/
//document.write("<br />"+Familia.nomeFamilia + " tem no agregado " + Familia.qtAgregado + " elementos, vivem com " + Familia.vencimentoAgregado + "€, o primeiro filho chama-se " + Familia.filhos1.nomeFilho + " e tem "+ Familia.filhos1.idadeFilho + " anos");

// *******************************
// Composição dos objetos
/*
function Familia(n,v){
	this.nome = n;
	this.vencimento = v;
}
function Filho(n,i){
	this.nome = n;
	this.idade = i;
}
var familia = new Familia("Pitas",121223);
var f1 = new Filho("Pedro",23);
var f2 = new Filho("Ana",34);
familia.filhos1 = f1;
familia.filhos2 = f2;
document.write("<br />"+familia.nome+" vivem com"+familia.vencimento+"€, o 1 filho é o "+ familia.filhos1.nome+" e tem "+familia.filhos1.idade+" anos");
*/
//----------------------------------
// Encapsulamento
/*function Aquecedor(temp){
	var temperaturaMaxPermitida = 40;
	var temperaturaMedia = 25;
	this.temperaturaMaxPermitida = temperaturaMaxPermitida;
	this.temperaturaMedia= temperaturaMedia;
	if(temp > 0 && temp <= temperaturaMaxPermitida){
		this.temperatura = temp;
	}else{
		this.temperatura = temperaturaMedia;
	}
	this.ligado = false;
	this.ligar = function(){
			this.ligado = true;
	}
}

var a = new Aquecedor(32);
document.write("<br />"+ a.temperatura);
document.write("<br />"+ a.temperaturaMaxPermitida);*/
//------------------------------
//Herança
/*document.write("<br /><br />Herança");
function Pessoa(){
	this.nome = "Sem nome";
	this.temFilhos = false;
	this.criarFilhos = function(){
		this.temFilhos = true;
	}
	this.retirarFilhos = function(){
		this.temFilhos = false;
	}
}

function Aluno(nota){
	var notaMaxExame = 20;
	this.notaMaxExame = notaMaxExame;
	this.notaMinExame = 7;
	var vaiExame = false;
	if(nota > 7 && nota <= notaMaxExame){
		this.notaFinal = nota;
		this.vaiExame = vaiExame;
	}else{
		this.notaFinal = nota;
		this.vaiExame = true;
	}
}

Aluno.prototype = new Pessoa();
var aluno = new Aluno(9);
document.write("<br />O aluno vai a exame? "+aluno.vaiExame);
document.write("<br />Nota minima exame: "+aluno.notaMinExame);
document.write("<br />Nota maxima no exame: "+aluno.notaMaxExame);
document.write("<br />Nota final do aluno: "+aluno.notaFinal);
document.write("<br />O aluno tem filhos? "+aluno.temFilhos);
aluno.criarFilhos();
document.write("<br />O aluno agora tem filhos? "+aluno.temFilhos);*/

//**************************************
/* Exemplo 2*/
document.write("<br />Exemplo 2<br />");
// Função construtora
/*var Pessoa = function(n,c){
	/*this.nome = n;
	if(c){
		this.contato = c;
	}
};*/
// Adicionar metodos o objeto Pessoa*var Pessoa = function(n,c){
/*	this.nome = n;
	if(c){
		this.contato = c;
	}else{
		this.contato = "não foi inserido";
	}
	this._toString() = function(){
		document.write("Nome:"+this.nome+" contato: "+this.contato);
					   }
};*/
// Sobrescrevendo o prototype
/*var Pessoa = function(n,c){
	this.nome = n;
	if(c){
		this.contato = c;
	}else{
		this.contato = "não foi inserido";
	}
};

Pessoa.prototype = {
	constructor: Pessoa,_toString:function(){
		document.write("_toString->Nome:"+this.nome+" contato: "+this.contato);
		},
	imprimeNome:function(){
		document.write("IN->Nome: "+this.nome);	
	}
};

var p1 = new Pessoa("Pedro Pita");
var p2 = new Pessoa ("Henrique Mendes",98242424);
p1._toString();
p2._toString();*/
//--------------------------------
// Retorna o objeto literal, não é necessario o operador 'new'.

var Pessoa = function(nome,contato){
	return{
		nome: nome,
		contato:contato,
		imprimeNome: function(){
			document.write("<br />imprimeNome->Nome: "+ this.nome);
		},
		imprimeContato : function(){
			document.write("<br />Contato: "+ this.contato);
		}
	};
};
var p1 = Pessoa("Pedro Pita",9128391283);
p1.imprimeNome();
p1.imprimeContato();
//alert(p1.nome);
















