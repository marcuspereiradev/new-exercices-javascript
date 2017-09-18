

// Intervalo entre 10 e 150


    var cont = 0;
    
    for(var i = 1; i <= 80; i++) {
        
        var valor = parseInt(prompt("digite um número"));
        
        if (valor >= 10 && valor <= 150){
            
            cont++;
        }
    }
    
    alert ("Valores digitados no intervalo entre 10 e 150 foram: " + cont);
