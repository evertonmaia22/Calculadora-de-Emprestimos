
// Funcionalidade para incrementar caracteres especiais durante a digitação do CNPJ

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
    // Condicionais (if) adicionadas para que o usuário digite algum valor no input

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
    
    // Valor do juros / 100
    const interest = rate/100

    // Calculando juros compostos
    // O valor do juros está fixo em 3% no código html.
    // Utilizando o método Math.pow() eu consigo retornar um número que representa a base fornecida.
    // (1 + Valor do juros) * Quantidade de meses.
  
    const total = amount * Math.pow((1 + interest), months);

    // Calculando o valor total
    // Valor total dividido pela quantidade de meses.

    const valueMonth = ((total / months));

    // Manipulando o DOM 
    // Utilizando querySelector para retornar o primeiro elemento dentro do documento.
    // Retornando o conteúdo através do método innerHtml.
    // Extraindo o valor mensal e valor total.
    
    document.querySelector("#total").innerHTML = "O valor do empréstimo para este CNPJ ficará por mês: R$" + valueMonth.toFixed(2);

    document.querySelector("#valueTotal").innerHTML = "E o valor total ficará em: R$" + total.toFixed(2);

}

 