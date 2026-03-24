// Seleciona o formulário e a div de resultado
const form = document.getElementById('overtimeForm');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    // Impede o recarregamento da página ao enviar o formulário
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    const salarioBruto = parseFloat(document.getElementById('salario').value);
    const horasUteis = parseFloat(document.getElementById('diassemana').value);
    const horasFimSemana = parseFloat(document.getElementById('finaisdesemana').value);

    // 1. Calcular o valor da hora trabalhada (base 200h)
    const valorHora = salarioBruto / 200;

    // 2. Calcular o valor das horas extras em dias úteis
    // Nota: O enunciado não especificou acréscimo para dias úteis, 
    // apenas para finais de semana.
    const valorTotalUteis = horasUteis * valorHora;

    // 3. Calcular o valor das horas extras nos fins de semana (com 50% de acréscimo)
    const valorHoraFimSemana = valorHora * 1.5;
    const valorTotalFimSemana = horasFimSemana * valorHoraFimSemana;

    // 4. Somar os valores
    const totalReceber = valorTotalUteis + valorTotalFimSemana;

    // 5. Exibir o resultado formatado em Moeda Real (R$)
    resultadoDiv.innerHTML = `
        <div class="p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
            <p>Valor da Hora Base: R$ ${valorHora.toFixed(2)}</p>
            <p class="text-xl mt-2">Total a receber: <span class="font-bold">R$ ${totalReceber.toFixed(2)}</span></p>
        </div>
    `;
});

// Adiciona funcionalidade ao botão de limpar formulário
const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', function() {
    form.reset();
    resultadoDiv.innerHTML = '';
});
    
