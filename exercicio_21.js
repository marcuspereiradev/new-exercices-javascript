
// Serviço militar obrigatório

var totalPessoas = 0;
var totalApto = 0;
var opcao = "s";
	
while(opcao != "n"){
	var nome = prompt("Informe o nome");
	var idade = parseInt(prompt("Informe a idade"));
	var sexo = prompt("Informe o sexo. (f para feminino / m para masculino)");
	var saude = prompt("Informe sua saúde. (b para boa / r para ruim.)");
	
	if(idade < 18 && saude == "r"){
		alert(nome + ", você é menor de idade e sua saúde está ruim. Não está apto!");
	}
	
	if(idade < 18 && saude == "b"){
		alert(nome + ", sua saúde está boa mas você é menor de idade. Não está apto!");
	}
	
	if(idade > 18 && saude == "r"){
		alert(nome + ", você é maior de idade mas sua saúde está ruim. Não está apto!");	
	}
	
	if(idade > 18 && saude == "b"){
		alert(nome + ", você é maior de idade e sua saúde está boa. Está apto!");
		totalApto++
	}
	
	totalPessoas++
	
	var opcao = prompt("Deseja continuar lendo os dados? (s / n)");
}

alert("Total de pessoas aptas: "+ totalApto + "\nTotal de pessoas no geral: " + totalPessoas);

