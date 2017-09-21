
// reajuste salarial

//50% para aqueles que ganham menos do que três salários mínimos;
//20% para aqueles que ganham entre três até dez salários mínimos;
//15% para aqueles que ganham acima de dez até vinte salários mínimos;
//10% para os demais funcionários.

var folhaPagamento = 0;
var folhaPagamentoAtual = 0;
var aumentoFolha = 0;

for(var x = 1; x <= 584; x++){
	var nome = prompt("Informe o nome do funcionário");
	var salarioFuncionario = parseFloat(prompt("Informe o salário do funcionário"));
	var salarioMinimo = parseFloat(prompt("Informe o salário mínimo vigente"));
	
	var ate3Salarios = salarioMinimo * 3;
	var ate10Salarios = salarioMinimo * 10;
	var ate20Salarios= salarioMinimo * 20;
	
	
	if(salarioFuncionario <= ate3Salarios){
		var salarioAtual = salarioFuncionario + (salarioFuncionario * 50 / 100);
		var reajuste = salarioAtual - salarioFuncionario;
		alert("Funcionário: " + nome + "\nNovo salário: R$ " + salarioAtual + "\nReajuste de 50%: R$" + reajuste);
	}
	if(salarioFuncionario > ate3Salarios && salarioFuncionario <= ate10Salarios){
		var salarioAtual = salarioFuncionario + (salarioFuncionario * 20 / 100);
		var reajuste = salarioAtual - salarioFuncionario;
		alert("Funcionário: " + nome + "\nNovo salário: R$ " + salarioAtual + "\nReajuste de 20%: R$" + reajuste);
	}
	if(salarioFuncionario > ate10Salarios && salarioFuncionario <= ate20Salarios){
		var salarioAtual = salarioFuncionario + (salarioFuncionario * 15 / 100);
		var reajuste = salarioAtual - salarioFuncionario;
		alert("Funcionário: " + nome + "\nNovo salário: R$ " + salarioAtual + "\nReajuste de 15%: R$" + reajuste);
	}
	if(salarioFuncionario > ate20Salarios){
		var salarioAtual = salarioFuncionario + (salarioFuncionario * 10 / 100);
		var reajuste = salarioAtual - salarioFuncionario;
		alert("Funcionário: " + nome + "\nNovo salário: R$ " + salarioAtual + "\nReajuste de 10%: R$" + reajuste);
	}
	
	folhaPagamento = folhaPagamento + salarioFuncionario;
	folhaPagamentoAtual = folhaPagamentoAtual + salarioAtual;
	aumentoFolha = aumentoFolha + reajuste;
}
	
	alert("Folha de pagamento antiga: R$ " + folhaPagamento + "\nFolha de pagamento atual: R$ " + folhaPagamentoAtual + "\nAumento na folha de pagamento foi: R$ " + aumentoFolha);

