const PAR = "o valor par"; //criar uma constante
//alert(PAR);
/*var num = 1;
if( num  > 1){
	//alert("maior que 1");
}else{
	document.write("menor que 1");
}*/

// verifcar par
/*var num1 = 40;
if((num1 % 2) == 0){
	document.write("<br />O valor "+num1+" é par");
}else{
	document.write("Impar");
}*/
//---------------------------
// teste de verdade
/*var verdade = true;
if(verdade){
	document.write("<br /> o teste foi verdadeiro");
}else{
	document.write("<br />Não passou na verificação do if, significa que a condição de teste é falsa");
}*/
//---------------------------
/*var num2 = 2;
if(num2 == 0){
	//alert("O valor é 0");
}else if(num2 == 1){
	//alert("O valor é 1");
}else if(num2 == 2){
	//alert("O valor é 2");
}else{
	//alert("O valor é <> de 0,1,2");
}*/
//---------------------------
/*var idade = prompt("Idade?","Insira a sua idade.");
if(idade <= 10){
	document.write("<br /><span> Menor que 10 anos</span>");
}else if(idade > 10 && idade <= 20){
	document.write("<br /><span> Entre(11 e 20)anos</span>");
}else if(idade > 20 && idade <= 30){
	if(idade > 23 && idade <= 29){
		document.write("<br /><span> Entre(24 e 29)anos</span>");
	}else if( idade == 21){
		document.write("<br /><span>Parabens tens 21 anos.</span></span>");
	}
}else{
	if(idade > 65){
		document.write("<br /><span>Parabens entraste na reforma que não vais ter porque o sistema está falido.</span>");
	}else{
		document.write("<br /><span> Entre(31 e 66)anos</span></span>");
	}
}*/
//----------------------------------------------
//Switch
/*var num3 = 2;
switch(num3){
	case 1:
		alert("1");
		break;
	case 2: alert("2"); break;
	case 3: alert("3"); break;
	default: alert("Outro valor");
}*/
// 
/*var estado="Casado0filho";
switch(estado){
	case "Casado0filho":alert("Estado: Casado 0 filhos");break;
	case "Casado1filho":alert("Estado: Casado 1 filho");break;
	case "Casado2filho":alert("Estado: Casado 2 filhos");break;
	case "Solteiro0filho":alert("Estado: Solteiro 0 filhos");break;
	case "Solteiro1filho":alert("Estado: Solteiro 1 filho");break;
	case "Solteiro2filho":alert("Estado: Solteiro 2 filhos");break;
	default: alert("Estado não indicado!!!");
}*/
// multicase
/*var estado="Casado0filho";
switch(estado){
	case "Casado0filho":
	case "Casado1filho":
	case "Casado2filho":alert("Estado: Casado 2 filhos");break;
	case "Solteiro0filho":
	case "Solteiro1filho":
	case "Solteiro2filho":alert("Estado: Solteiro");break;
	default: alert("Estado não indicado!!!");
}*/
//********Estruturas de repetição************
/*for(var i = 0; i < 4 ; i++){
	//alert(i);
	document.write("<br />"+i);
}*/
//------------------------
/*var par = "Par:";
var impar = "Impar:";
for(var i = 0; i <= 40 ; i++){
	if(i%2 == 0){
		if(i == 40){
			par += i;
		}else{
			par += i + "->";
		}//end else do if dos pares	
	}else{
		impar += i;
	}//end else do if dos pares
}//end for*/
/*alert(par);
alert(impar);*/
//document.write("<br />"+par);
//document.write("<br />"+impar);
//---------------------------------
/*var contagem = "Contagem:";
for(var i = 0 ; i < 10; i++){
	contagem += i; //incrementar variaveis, incrementa variaveis
}
alert(contagem);*/
//--------------------------------
var Pessoa = {
				nome: "Pedro",
				idade: "23",
				morada:"funchal"
			};
for(var atributos in Pessoa){ // atributos captura "nome", "idade", "morada", Pessoa[atributos] guarda os valores
	document.write(atributos + ": " + Pessoa[atributos] + "<br/>"); //mostrar valores de um objeto
}
document.write(typeof(1) + "<br />"); //verificar o tipo de variavel, numero, letra etc
document.write(typeof(Pessoa) + "<br />"); //objeto	
document.write(typeof(Pessoa.nome)); //String
	 





	
	
	
	
	
	
	

