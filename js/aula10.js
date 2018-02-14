window.onload = function(){
	document.getElementById("ajax").onclick = function(){
		var ajax;// nova instancia de um objeto responsavel pela requisição ao servidor
		// codigo critico
		try{
			//  Opera, Firefox, Safari, Chome
			ajax = new XMLHttpRequest();
			alert("Opera, Firefox, Safari, Chome");
		}catch(e){
			try{
				// IE Browsers
				ajax = new ActiveXObject("Msxml2.XMLHTTP");
				alert("IE Browsers");
			}catch(e){
				try{
					// Outros browsers
					ajax = new ActiveXObject("Microsoft.XMLHTTP");
					alert("Outro microsoft");
				}catch(e){
					alert("Outro");
					return false;
				}
			}
		}
		var resposta_conteudo = document.getElementById("conteudo");
		/*
		Etapas no processamento da resposta ao pedido HTTP, atraves da função criada.
		RESPOSTAS ao pedido do servidor:
		Valores para o parametro readyState:
		0 - não iniciado
		1 - em carregamento
		2 - carregado
		3 - em processo iterativo
		4 - completo
		---------------------------------
		Código de estado na resposta http
		200 - OK
		*/
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				alert("cheguei, estou completo e com sucesso");
				// Acesso aos dados da resposta:
				// http_request.responseText - devolve a resposta como texto puro
				//http_request.responseXML - devolve a resposta como um objeto XML
				try{
					//resposta_conteudo.appendChild(document.createTextNode(ajax.responseText));
					//---------------------------------------------
					// Para o html seria:
					resposta_conteudo.innerHTML = this.responseText; 
					//----------------------------------------------
				}catch(e){
					alert(e.toString());
				}
			}// end if
		}// end onreadystatechange
		try{
			// Iniciar o pedido com o metodo open(metodo de request(POST,GET,etc),URL de requisição, por defeito executa em modo assincrono(true));
			//ajax.open("POST","./Aula 10 -Material/file.txt",true);
			
			
			/* -------------------------------------- */
			//Para o html seria:
			ajax.open("POST","./Aula 10 -Material/Aula1.html",true);
			/* ---------------------------------------*/
			
		}catch(e){
			alert(e.toString());
		}
		try{
			// O método send(), podemos indicar alterações em servidor, enviando dados na requisição.
			// Ex: name=Pedro&idade=23
			// ou null se não pretendermos alterar 
			ajax.send(null);
		}catch(e){
			alert(e.toString());
		}
		return false;
	}// end onclick
}













