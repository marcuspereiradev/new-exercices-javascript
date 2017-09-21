
// Cálculadora simples

while(opcao != "n"){
	var A = parseFloat(prompt("Digite o primeiro número"));
	var C = prompt("Digite um operador aritimético. (+ - / *)");
	var B = parseFloat(prompt("Digite o segundo valor"));
	
	if(C == "+"){
		alert("Soma: " + (A+B));
	}
	if(C == "-"){
		alert("Subtração: " + (A-B));
	}
	if(C == "*"){
		alert("Multiplicação: " + (A*B));
	}
	if(C == "/"){
		alert("Divisão: " + (A/B));
	}
	if(C == "/" && A==0){
		alert("Inválido! Um número não pode ser dividido por zero (0)");
	
	}else if(C == "/" && B==0){
		alert("Inválido! Um número não pode ser dividido por zero (0)");

	}
	
	
	var opcao = prompt("Precione ENTER para continuar ou (n) para sair")
	
}
