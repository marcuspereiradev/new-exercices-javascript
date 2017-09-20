
// 1 a 5

	while(opcao != "n"){
		var num = parseInt(prompt("Informe um número"));
		
		switch(num){
			case 1: 
				alert("Um");
				break;
			case 2: 
				alert("Dois");
				break;
			case 3: 
				alert("Três");
				break;
			case 4: 
				alert("Quatro");
				break;
			case 5: 
				alert("Cinco");
				break;
			default:
				alert("Número inválido!")
				  }
		
		var opcao = prompt("Deseja continuar? (s / n)");
	}
