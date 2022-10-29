
// Funcionalidade para incrementar caracteres especiais durante a digitação

const input = document.querySelector("#input");

input.addEventListener('keypress', () => {

    // Se o tamanho do input for igual a 2 ou a 6 irá adicionar '.' 
    // Senao se o tamanho do input for igual a 10 irá adicionar '/'
    // Senao se o tamanho do input for igual a 15 irá adicionar '-'

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

function Calculate() {

    // Manipulando o DOM 
    // Utilizando querySelector para retornar o primeiro elemento dentro do documento
    // Condicionais (if) adicionadas para que o input obtenha algum valor
    // Se o campo do input não for preenchido retorne um alerta

    const amount = document.querySelector("#amount").value;

    if(amount === ''){
        return alert('Digite o valor do Empréstimo')
    };

    const rate = document.querySelector("#interest").value;

    if(rate === ''){
        return alert('Digite os juros ao mês')
    };
    
    const months = document.querySelector("#months").value;

    if(months === ''){
        return alert('Digite a quantidade de meses')
    };

    // Calculando o juros por mês
    // Valor do empréstimo x Juros / Pela quantidade de meses

    const interest = (amount * (rate * 0.01)) / months;


    // Calculando o total
    // Valor do empréstimo / Pela quantidade de meses + juros

    const total = ((amount / months) + interest);
  
    // Calculando o valor total
    // Total * Quantidade de meses

    const valueTotal = ((total * months));

    // Manipulando o DOM 
    // Utilizando querySelector para retornar o primeiro elemento dentro do documento
    // Retornando o conteúdo através do método innerHtml
    // Extraindo o valor de total e valor total
    
    document.querySelector("#total").innerHTML = "O valor do empréstimo para este CNPJ ficará por mês: R$" + total.toFixed(2);

    document.querySelector("#valueTotal").innerHTML = "E o valor total ficará em: R$" + valueTotal.toFixed(2);

}

