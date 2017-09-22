<!-- Professor Nível 1 R$12,00 por hora/aula
Professor Nível 2 R$17,00 por hora/aula
Professor Nível 3 R$25,00 por hora/aula
-->

//Escola Aprender - Pagamento por hora
var opcao = "s"
	while(opcao != "n"){
	var nivelProfessor = parseInt(prompt("Informe o nível do professor. (1 / 2 / 3)"));
	var horaTrabalhada = parseFloat(prompt("Informe as horas trabalhadas."));
	
	switch(nivelProfessor){
		case 1:
			alert("O salário por hora trabalhada é: R$ " + (horaTrabalhada*12));
			break;
		case 2:
			alert("O salário por hora trabalhada é: R$ " + (horaTrabalhada*17));
			break;
		case 3:
			alert("O salário por hora trabalhada é: R$ " + (horaTrabalhada*25));
			break;
						 }
		opcao = prompt("Precione ENTER para continuar ou (n) para sair.");
	}
