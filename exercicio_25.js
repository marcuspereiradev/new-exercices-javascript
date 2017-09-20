
// Números iguais e diferentes

	while (opcao != "n"){
		var num1 = prompt("Informe o primeiro número");
		var num2 = prompt("Informe o segundo número");
		
		if (num1 == num2){
			alert(num1 + " e " + num2 + " são iguais.");
		}
		if (num1 != num2 && num1 > num2){
			alert(num1 + " e " + num2 + " são diferentes e o " + num1 + " é maior.");
		}
		if (num1 != num2 && num1 < num2){
			alert(num1 + " e " + num2 + " são diferentes e o " + num2 + " é maior.");
		}
		
		
		var opcao = prompt("Deseja continuar fazendo a comparação? (s / n)");
		
	}
