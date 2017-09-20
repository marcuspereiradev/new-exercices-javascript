
// Positivo, negativo e zero

	while (opcao != "n"){
		var valor = prompt("Digite um valor");
		
		if (valor < 0){
			alert (valor + " é negativo!");
		}
		if (valor > 0){
			alert (valor + " é positivo!");
		}
		if (valor == 0){
			alert(valor + " é igual a zero!");
		}
		var opcao = prompt ("Deseja continuar? (s / n)");
	}
