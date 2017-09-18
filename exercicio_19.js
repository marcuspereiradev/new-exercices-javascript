
// Homem-Mulher

var totalHomem = 0
var totalMulher = 0

for (var x = 1; x <= 6; x++){
	var nome = prompt("Informe o nome");
	var sexo = prompt("Informe o sexo. ( M / F )");
	
	if (sexo == "M"){
		alert(nome + " é homem.");
		totalHomem++
	}else{
		alert(nome + " é mulher.");
		totalMulher++
	}
}
alert("Total de homens é " + totalHomem + ". Total de mulheres é " + totalMulher + ".");
