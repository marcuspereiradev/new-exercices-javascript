
// Concessionário Carango Velho

var totalGeralVeiculos = 0;
var totalMenor2000 = 0;

while("S" != "N"){
	var valorVeiculo = parseInt(prompt("Informe o valor do veículo"));
	var anoVeiculo = parseInt(prompt("Informe o ano do carro"));
	
	if(anoVeiculo <= 2000){
		var desconto = valorVeiculo *12 /100;
		var valorTotalCarro = valorVeiculo - desconto;
		alert("Desconto de R$: " + desconto + "." + "\nValor a pagar com desconto é R$ " + valorTotalCarro + ".");
		totalMenor2000++
	}else{
		var desconto = valorVeiculo * 7 / 100;
		var valorTotalCarro = valorVeiculo - desconto;
		alert("Desconto de R$: " + desconto + "." + "\nValor a pagar com desconto é R$ " + valorTotalCarro + ".");
	}
	
	totalGeralVeiculos++
	var opcao = prompt("Deseja continuar calculando? ( S / N)");
	
	if(opcao == "N"){
		break;
	}

}

alert("Total de carros com o ano até 2000: " + totalMenor2000 + "." + "\nTotal de carros no geral: " + totalGeralVeiculos + ".");
