document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newAmountstringstring = withdrawAmount.value;
    const newAmount = parseFloat(newAmountstringstring);

    const totalWithdrawElement = document.getElementById('total-withdraw')
    const previousAmountstring = totalWithdrawElement.innerText;
    const previousAmount = parseFloat(previousAmountstring);
    

    const totalBalanceElement = document.getElementById('total-balance');
    const previousBalanceAmount = totalBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceAmount);

    if(newAmount > previousBalance){
        alert('tumar baap ar bank a ato taka nai')
        return;
    }

    const totalwithdraw = previousAmount + newAmount;
    totalWithdrawElement.innerText = totalwithdraw;

    const totalBalance = previousBalance - newAmount;
    totalBalanceElement.innerText = totalBalance;

    

    withdrawAmount.value = '';

})