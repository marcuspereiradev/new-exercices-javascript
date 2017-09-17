

// Rendimentos por mês 


    var deposito = parseFloat(prompt("Digite o valor que deseja depositar."));
    
    var jurosPoupanca = 0.70;
    
    var calcRendimento = deposito * jurosPoupanca / 100;
    
    var rendimento = deposito + calcRendimento;
    
    alert ("Seu rendimento por mês é R$ " + rendimento);
    
