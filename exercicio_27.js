// Venda de carros CARANGO

	var	totalDescontos = 0;
	var totalPago = 0;
	
	while(valorCarro != 0){
		var valorCarro = parseFloat(prompt("Digite o valor do carro ou 0(zero) para encerrar"));
		if(valorCarro == 0){break;}
		
		var combustivel = prompt("Informe o combustível. (a para álcool / g para gasolina / d para diesel)");
		
		if(combustivel == "a"){
			var desconto = valorCarro * 25 / 100;
		}
		if(combustivel == "g"){
			var desconto = valorCarro * 21 / 100;
		}
		if(combustivel == "d"){
			var desconto = valorCarro * 14 / 100;
		}
		
		var valorAPagar = valorCarro - desconto;
		totalPago = totalPago + valorAPagar;
		totalDescontos = totalDescontos + desconto;
		
		alert("Desconto: R$ " + desconto + "\nValor a pagar: R$ " + valorAPagar);
	}
	
	alert("Total de descontos: R$ " + totalDescontos + "\nTotal pago: R$ " + totalPago);
