

// Custo de fábrica


    var custoFabrica = parseFloat(prompt("Informe o valor de fábrica do carro."));
    var lucroGoverno = 45; //Porcento %
    var lucroDistribuidor = 28; // Porcento %
    
    var impostoSobreVeiculo = custoFabrica + (custoFabrica * lucroGoverno / 100);
    var impostoDistribuidor = impostoSobreVeiculo * lucroDistribuidor / 100;
    var valorTotal = impostoSobreVeiculo + impostoDistribuidor;
    
    alert ("Custo ao consumidor: R$ " + valorTotal);
    
