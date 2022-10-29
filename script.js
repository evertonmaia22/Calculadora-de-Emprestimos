// Feature to increment special characters while typing

const input = document.querySelector("#input");

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

function Calculate() {

    // Extracting value in the amount 
    // section in the variable
    const amount = document.querySelector("#amount").value;

    // Extracting value in the interest
    // rate section in the variable
    const rate = document.querySelector("#interest").value;
    

    // Extracting value in the months 
    // section in the variable
    const months = document.querySelector("#months").value;


    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
    console.log(interest)

    // Calculating total payment
    const total = ((amount / months) + interest);
  

    const valueTotal = ((total * months));
    

    document.querySelector("#total").innerHTML = "O valor do seu empréstimo para este CNPJ ficará por mês: R$" + total;

    document.querySelector("#valueTotal").innerHTML = "E o valor total ficará em: R$" + valueTotal;



}

// 16.491.652/0001-06

