
// Categoria dos nadadores

	var opcao = "s";
	
	while(opcao != "n"){
		
		var idade = parseInt(prompt("Informe a idade do aluno."));
		
		if(idade >= 5 && idade <= 7){
			alert("Infantil A");
		}
		if(idade >= 8 && idade <= 10){
			alert("Infantil B");
		}
		if(idade >= 11 && idade <= 13){
			alert("juvenil A");
		}
		if(idade >= 14 && idade <= 17){
			alert("juvenil B");
		}
		if(idade >= 18 && idade <= 25){
			alert("Sênior");
		}
		if(idade > 25 || idade < 5){
			alert("Idade fora da faixa etária!");
		}
		
		opcao = prompt("Precione ENTER para continuar ou (n) para sair.")
	}

