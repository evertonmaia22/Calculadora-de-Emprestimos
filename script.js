// Função para validar CNPJ

const span = document.querySelector('#span-required');
const input = document.querySelector("#input");

function CnpjValidade() {

    if (input.value != '11.111.111/1111-11') {
        span.innerHTML = 'CNPJ não aprovado para empréstimo';
        span.style.color = 'red';

    }
    else {
        document.querySelector('#span-required').innerHTML = 'Empréstimo aprovado para este CNPJ';
        span.style.color = 'green';
    }
    if (input.value < 14) {
        span.innerHTML = 'Digite no minímo 14 números';
        span.style.color = 'red'
    }
}

// Funcionalidade para incrementar caracteres especiais durante a digitação do CNPJ

// Se o tamanho do input for igual a 2 ou a 6 irá adicionar '.' 
// Senao se o tamanho do input for igual a 10 irá adicionar '/'
// Senao se o tamanho do input for igual a 15 irá adicionar '-'

input.addEventListener('keypress', () => {

    let inputLength = input.value.length

    if (inputLength === 2 || inputLength === 6) {
        input.value += '.';
    } else if (inputLength === 10) {
        input.value += '/';
    } else if (inputLength === 15) {
        input.value += '-';
    }
})

// Função para calcular
// Manipulando o DOM 
// Utilizando querySelector para retornar o primeiro elemento dentro do documento
// Condicionais (if) adicionadas para que o usuário digite algum valor no input

function Calculate() {

    const amount = document.querySelector("#amount").value;

    if (amount === '') {
        return alert('Digite o valor do Empréstimo')
    };

    const rate = document.querySelector("#interest").value;

    if (rate === '') {
        return alert('Digite os juros ao mês')
    };

    const months = document.querySelector("#months").value;

    if (months === '') {
        return alert('Digite a quantidade de meses')
    };

    // Calculando juros compostos
    // Valor do juros / 100
    // O valor do juros está fixo em 3% no código html.
    // Utilizando o método Math.pow() retorna um número que representa a base fornecida.

    const interest = rate / 100

    const total = amount * Math.pow((1 + interest), months);

    // Calculando o valor total

    const valueMonth = ((total / months));

    // Manipulando o DOM 
    // Utilizando querySelector para retornar o primeiro elemento dentro do documento.
    // Retornando o conteúdo através do método innerHtml.
    // Extraindo o valor mensal e valor total.


    document.querySelector("#total").innerHTML = "Valor da Mensalidade: R$" + valueMonth.toFixed(2);

    document.querySelector("#valueTotal").innerHTML = "Valor Total: R$" + total.toFixed(2);

}


