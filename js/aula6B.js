var str = "Pedro é o meu nome";
var regex = new RegExp("Pedro"); //Se tiver a palavra Pedro com maiuscla
//alert(regex.test(str));

// Atraves do literal
var str = "Pedro é o meu nome";
var regex = /Pedro/; //Se tiver a palavra Pedro com maiuscla
//alert(regex.test(str));

//Ignorar case Sen.
var str = "Pedro é o meu nome";
var regex = /Pedro/i; //Se tiver a palavra Pedro, i ignora case sensetive
//alert(regex.test(str));

var str = "pedro é o meu nome";
var regex = new RegExp("Pedro","i"); //Se tiver a palavra Pedro, i ignora case sensetive
alert(regex.test(str));

// Aninhar a expressão
var redex = /Pedro/i.test("Pedro é o meu nome");

//------------------------------------
var str = "Pedro é o meu nome";
document.write(/Pedro/i.exec(str)+"<br />");
/* Explicação: O método irá procurar a palavra 'Pedro'
, quando encontra para a pesquisa e retorna a palavra */

//-------------------------------------
var str = "Pedro é o meu nome, e tambem é o primeiro nome Pedro";
document.write(/Pedro/i.exec(str)+"<br />");
document.write(str.match(/Pedro/ig)+"<br />");
// pesquisa global(g) ignora case sen.(i) e retorna todas as ocorencias
//-----------------------------------
document.write("<b>Classe de Chars</b><br />");
// Classe de carateres
//.->encontra a ocorrencia de qlq carater(exceto novas linhas)
document.write(/./.test("Programador")+"<br />");
//\w->encontra a ocorrencia de qlq carater(alfanumerico: a-z;A-Z:0-9;_)
document.write(/\w/.test("Programador")+"<br />");
document.write(/\w/.test("*-*-*-**-")+"<br />");
//\s->encontra a ocorrencia de qlq carater(espaço: \t\r\n\v\f)
document.write(/\s/.test("Programador")+"<br />");
//\d->encontra a ocorrencia de qlq carater-digito-(numerico: 0-9)
document.write(/\d/.test("Programador12")+"<br />");
//^->encontra a ocorrencia de qlq carater no inicio da pesquisa
document.write(/^f/.test("Programador12")+"<br />");
document.write(/^p/.test("Programador12")+"<br />");
document.write(/^p/i.test("Programador12")+"<br />");
//$->encontra a ocorrencia de qlq carater no final da pesquisa
document.write(/r12$/.test("Programador12")+"<br />");
// verifica se existem digitos no final
document.write(/\d$/.test("Programador12")+"<br />");
document.write(/\d\d$/.test("Programador12")+"<br />");
document.write(/\d\d\d$/.test("Programador120")+"<br />");
//verificar um numero tel. Ex: 291-112233
document.write(/^\d\d\d-\d\d\d\d\d\d$/.test("291-112233")+"<br />");
//******************************************
//Quantificadores de repetição
// ? - Encontra zero ou uma ocorencia, equivalente a {0,1}
document.write(/\d?/.test("291-112233")+"<br />");
// * - Encontra zero ou mais ocorencia, equivalente a {0,}
document.write(/\d*/.test("291-112233")+"<br />");
// + - Encontra uma ou mais ocorencia, equivalente a {1,}
document.write(/\d+/.test("291-112233")+"<br />");
// '{x}' - Encontra x ocorencia.
document.write(/\d{6}/.test("291-112233")+"<br />");
document.write(/\d{6}$/.test("291-112233")+"<br />");
document.write(/^\d{6}/.test("291-112233")+"<br />");
// Refinar
document.write(/^\d{3}-\d{6}$/.test("291-112233")+"<br />");
// (291)121-2423
document.write(/\(?\d{3}\)?\d{3}-\d{4}/.test("(291)121-2423")+"<br />");
//**************************************
//Datas
document.write(/^\d{2}-\d{2}-\d{4}$/.test("12-12-2009")+"<br />");
document.write(/^\d{2}:\d{2}:\d{4}$/.test("12:12:2009")+"<br />");
// variação no final da data: poderemos ter 2 ou 4 digitos : 09 ou 2009
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/12/09")+"<br />");
document.write(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/12/2009")+"<br />");
//*********************************
//Validação de email
/*
	Etapas:
	1 - Todo o email começa com carateres: \w+
	2 - localizar a existencia de @: +@\w
	3 - Localizar o ponto(.) Nota: não podemos colocar diretamente o ponto na expressão(padrão), uma vez que é uma classe de carateres, de modo a contornar esta limitação usamos a barra invertida(carater de saída(escape))
*/

document.write(/\w+@\w+\.\w{2,3}$/.test("PedrofmPita@gmail.pt")+"<br />");
//***********************************
// Agrupar carateres
//[xyz]- Encontra qlq carater que pertença ao grupo.
// Usamos o hifen para definir um intervalo, por exemplo qlq carater de a a z ->/[a-z]/ ou /[0-9]/

document.write(/[er]/.test("Abertamente")+"<br />");
document.write(/[er]t/.test("Abertamente")+"<br />");
document.write(/[er]t/.test("Pedro")+"<br />");

var str = "Pedro é o meu nome, e tambem é o primeiro nome Pedro";

//alert(str.match(/Pedro/ig));
//alert(str.replace(/Pedro/ig,"filipe"));


var str = "Perto de braga, o porto é a maior cidade de portugal.";
//alert(str.match(/p[f-z]/ig));
//alert(str.replace(/p[f-z]/ig,"GRANDE"));
//****************************************
// Começa e p tem um ou mais carateres e termina em o
//alert(str.match(/p[f-z]+\wo/ig));
//alert(str.replace(/p[f-z]+\wo/ig,"GRANDE PORTO"));
// ***************************************
var str_URL = "www.epcc.pt/index.php/formacao-de-formadores.html";
var regex = /www.epcc.pt\/\w{5,}\.\w{3}\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,}/;
document.write(regex.test(str_URL));

// '()' - Agrupar carateres numa determinada cláusula, aceder à clausula criada atraves da expressão '$' valor da expressão
var regex = /(www.epcc.pt\/\w{5,}\.\w{3})(\/\w{4,}[-]*\w{2}[-]*\w{2,}\.\w{3,})/;
document.write(str_URL.replace(regex,"http://$1:index.php"));







