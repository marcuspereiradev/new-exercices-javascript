

    // Vendedor //
    

    var nome = prompt("Informe o nome do funcionário: ");

    var salarioFixo = parseInt(prompt("Informe o sálario fixo do funcionário: "));

    var totalVendas = parseInt(prompt("Informe o total de vendas por ele no mês:"));

    var comissao = 15;

    var salarioTotal = (totalVendas * comissao / 100) + salarioFixo


    alert ("Nome do funcionário: " + nome)
    alert ("Salário fixo do funcionário: R$" + salarioFixo)
    alert ("Salário total no final do mês: R$" + salarioTotal)

