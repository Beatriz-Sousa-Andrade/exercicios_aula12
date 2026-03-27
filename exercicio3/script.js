const form = document.getElementById('transportForm');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // CORREÇÃO: O ID correto é 'funcionarios', conforme está no seu HTML
    const quantidadeFuncionarios = parseInt(document.getElementById('funcionarios').value);
    const diasUteis = parseInt(document.getElementById('dias').value);
    
    let valorPorPessoa = 0;

    if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
        valorPorPessoa = 4.50;
    } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
        valorPorPessoa = 4.10;
    } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
        valorPorPessoa = 3.80;
    } else if (quantidadeFuncionarios >= 150) {
        valorPorPessoa = 3.60;
    } else {   // Adiciona uma mensagem de erro para casos onde a quantidade de funcionários é inválida (0 ou negativo)       
        resultadoDiv.innerHTML = `
            <div class="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p>Por favor, insira um número válido de funcionários (1 ou mais).</p>  
            </div>
        `;
        return;
    }


    const custoTotal = quantidadeFuncionarios * valorPorPessoa * diasUteis;
    
    // Exibe o resultado formatado em Moeda Real (R$) e substitui o ponto por vírgula para o formato brasileiro
    resultadoDiv.innerHTML = `
    <div class="p-5 bg-[#111117] border-l-4 rounded-xl shadow-2xl border border-[#2a2a33] transition-all duration-300">
    <p class="text-[#6f6f80] text-sm mb-1">Valor por Pessoa: R$ ${valorPorPessoa.toFixed(2).replace('.', ',')}</p>
    <div class="mt-3 pt-3 border-t border-[#2a2a33]">
        <p class="text-xl text-[#cbd5e6]">Custo Mensal Total: <span class="font-bold text-[#cbd5e6]">R$ ${custoTotal.toFixed(2).replace('.', ',')}</span></p>
    </div>
</div>
    `;
});

// Adiciona funcionalidade ao botão de limpar
const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', function() {
    form.reset(); // Limpa os campos do formulário
    resultadoDiv.innerHTML = ''; // Limpa a mensagem de resultado
});