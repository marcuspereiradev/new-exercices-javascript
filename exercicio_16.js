

// Aprovado ou reprovado


    var nome = prompt("Informe o nome do aluno");
    var nota1 = parseFloat(prompt("Informe a primeira nota"));
    var nota2 = parseFloat(prompt("Informe a segunda nota"));
    var nota3 = parseFloat(prompt("Informe a terceira nota"));
    var media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 7) {
        alert (nome + " sua média foi: " + media + ". Você está aprovado!")
    }
    
    if (media <= 5) {
        alert (nome + " sua média foi: " + media + ". Você está reprovado!")
    }
    
    if (media >= 5.1 && media <= 6.9) {
        alert (nome + " sua média foi: " + media + ". Você está de recupeção!")
    }
