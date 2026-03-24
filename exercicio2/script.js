
//O gestor deverá informar o salário de um funcionário e o software calcular o valor do
//aumento conforme regra abaixo:
//
//• Salários até R$ 1.200,00: aumento de 16%.
//• Salários de R$ 1.200,01 até R$ 2.100,00: aumento de 13%.
//• Salários de R$ 2.100,01 até R$ 3.000,00: aumento de 10%.
//• Salários acima de R$ 3.000,00: aumento de 5%.

//Exiba o novo salário após o aumento.

//seleciona o formulário e a div de resultado
const form = document.getElementById('salaryForm');
const resultadoDiv = document.getElementById('resultado');  

//adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const salarioAtual = parseFloat(document.getElementById('salario').value);// Calcula o percentual de aumento com base no salário atual
    let aumentoPercentual = 0;// Aplica as regras de aumento conforme o salário atual
    if (salarioAtual <= 1200) {
        aumentoPercentual = 0.16;
    } else if (salarioAtual <= 2100) {
        aumentoPercentual = 0.13;
    } else if (salarioAtual <= 3000) {
        aumentoPercentual = 0.10;
    }       else {  
        aumentoPercentual = 0.05;
    }
    const aumentoValor = salarioAtual * aumentoPercentual;// Calcula o novo salário após o aumento
    const novoSalario = salarioAtual + aumentoValor;// Exibe o resultado formatado em Moeda Real (R$)
    // Exibe o resultado formatado em Moeda Real (R$)
    resultadoDiv.innerHTML = `  
        <div class="p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p>Salário Atual: R$ ${salarioAtual.toFixed(2)}</p>
            <p>Aumento: ${ (aumentoPercentual * 100).toFixed(0) }% (R$ ${aumentoValor.toFixed(2)})</p>  
            <p class="text-xl mt-2">Novo Salário: <span class="font-bold">R$ ${novoSalario.toFixed(2)}</span></p>
        </div>
    `;// Limpa o campo de entrada após o cálculo
    document.getElementById('salario').value = '';
    // Remove o foco do campo de entrada após o envio do formulário
    document.getElementById('salario').blur();
    // Opcional: Adiciona um efeito de destaque ao resultado
});

// Adiciona funcionalidade ao botão de limpar formulário
const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', function() {
    form.reset();
    resultadoDiv.innerHTML = '';
});
