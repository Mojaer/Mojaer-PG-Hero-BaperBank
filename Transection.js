function total(balance, amount) {
    return parseFloat(balance.innerText) + parseFloat(amount.value)
}

document.getElementById("deposit-btn").addEventListener("click", function () {
    let depositInput = document.getElementById("deposit");

    if (depositInput.value != /[^0-9]/) {
        alert("Please enter a number");
        depositInput.value = '';
    }
    else {
        let depositAmount = document.getElementById("depositAmount");

        let balanceAmount = document.getElementById("balanceAmount");
        balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(depositInput.value)

        depositAmount.innerText = total(depositAmount, depositInput);
        depositInput.value = '';
    }



})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    let withdrawInput = document.getElementById("withdraw");
    if (withdrawInput.value != /[^0-9]/) {
        alert("Please enter a number");
        withdrawInput.value = '';
    }
    else {
        let withdrawAmount = document.getElementById("withdrawAmount");


        let balanceAmount = document.getElementById("balanceAmount");
        balanceAmount.innerText = parseFloat(balanceAmount.innerText) - parseFloat(withdrawInput.value);

        withdrawAmount.innerText = total(withdrawAmount, withdrawInput);
        withdrawInput.value = '';
    }

})