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
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				alert("cheguei, estou completo e com sucesso");
				try{
					var xml = ajax.responseXML;
					// devolve o valor do primeiro elemento do xml
					while(resposta_conteudo.hasChildNodes()){
						resposta_conteudo.removeChild(resposta_conteudo.lastChild);
					}
					var lformando = xml.getElementsByTagName("formando");
					var i=0;
					while(i < lformando.length){
						var formando = lformando[i].firstChild.nodeValue;
						resposta_conteudo.appendChild(document.createTextNode(formando));
						resposta_conteudo.appendChild(document.createElement("br"));
						i++;
					}
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
			ajax.open("POST","./Aula 10 -Material/file.xml");
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