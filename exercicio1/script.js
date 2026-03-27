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
       <div class="p-5 bg-[#111117] border-l-4 rounded-xl shadow-2xl border border-[#2a2a33] transition-all duration-300">
    <p class="text-[#6f6f80] text-sm mb-1">Valor da Hora Base: R$ ${valorHora.toFixed(2)}</p>
    <div class="mt-3 pt-3 border-t border-[#2a2a33]">
        <p class="text-xl text-[#cbd5e6]">Total a receber: <span class="font-bold text-[#cbd5e6]">R$ ${totalReceber.toFixed(2)}</span></p>
    </div>
</div>
    `;
});

// Adiciona funcionalidade ao botão de limpar formulário
const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', function() {
    form.reset();
    resultadoDiv.innerHTML = '';
});
    
