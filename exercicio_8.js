

// Conversor de Dólar


    var dolar = parseFloat(prompt("Digite o valor em dólar"));
    var cotacao = parseFloat(prompt("Digite o valor da cotação do dólar"));
    var reais = cotacao * dolar;
    
    alert("$ " + dolar + " dólares vale R$ " + reais + " reais.");
