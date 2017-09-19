
// Preço de custo e preço d venda

	var somaPrecoCusto = 0;
	var somaPrecoVenda = 0;
	
	for(var venda = 1; venda <= 40; venda++){
		var precoCusto = parseInt(prompt("Informe o preço de custo"));
		somaPrecoCusto = somaPrecoCusto + precoCusto;
		
		var precoVenda = parseInt(prompt("Informe o preço de venda"));
		somaPrecoVenda = somaPrecoVenda + precoVenda;
		
		if(precoVenda > precoCusto){
			alert("Houve lucro!");
		}
		if(precoVenda < precoCusto){
			alert("Houve Prejuízo!");
		}
		if(precoCusto == precoVenda){
			alert("Houve empate!");
		}
		
	}
var mediaPrecoCusto = somaPrecoCusto / 40;
var mediaPrecoVenda = somaPrecoVenda / 40;
	
alert("Média do preço de custo: " + mediaPrecoCusto + "\nMédia do preço de venda: " + mediaPrecoVenda);
