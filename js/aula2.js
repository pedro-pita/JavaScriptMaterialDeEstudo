var str = "Programador";
	//alert("o valor da var: "+str);
	var num = 4;
	var opTer = ((num == 6) ? "Igual a 6" : "Diferente de 6");
	var opTer2 = ((num == 4) ? "Igual a 4" : "Diferente de 4");
	//alert(opTer);
	//alert(opTer2);
	document.write("Pedro");
	document.write("<br />" + opTer);
	document.write("<p>Paragrafo inserido via JS.</p>");
	var x = 10; // x = 10
	var a = ++x; // a = 11; x = 11
	var y = 1.84; // y = 1.84
		y += x;// y = y + x; // y = 11 + 1.84 = 12.84
	document.write("a:" + a + " x:" + x + " y:" + y);
	//alert("X:"+x+"-a:"+a+"-y"+y);
	//alert("RESULTADO : " + (2 == 2));
	var x1 = 1;
	var testOr = ((x1>=3)||(x1<=1));
	var testAnd = ((x1<=3)&&(x1<=1));
	//alert(testOr);
	//alert(testAnd);
	var str_C = "Curso";
	var str_T = "Programador";
	var strCT = str_C + " " + str_T;
	var str_E = "Escola:" + strCT;
	document.write("<p>"+strCT+"</p>");
	document.write("<br />"+str_E);
	/*var receptor = prompt("Minha Mensagem");
	verificarMensagem(receptor);
	receptor = verificarMensagem();*/
	// Imprimir em consola de sistema
	console.log("Texto via log de sistema");
	
	receberMensagem();
	function receberMensagem(){
		var receptor = prompt("Minha Mensagem");
		verificarMensagem(receptor);
	}
	function verificarMensagem(mensagem){
		(mensagem == "") ? receberMensagem() : mostrarMensagem(mensagem);
	}
	function mostrarMensagem(mensagem){
		if (mensagem !== null){
			alert("O texto digitado foi: " + mensagem);
			document.write("<p>O texto digitado foi:<b>" + mensagem + "</b></p>");
		}else{
			document.write("<p><b>Vocé cancelou o alert para inserir a mensagem.</b></p>");
		}
	}