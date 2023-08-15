document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount')

    const newAmountstringstring = depositAmount.value;

    const newAmount = parseFloat(newAmountstringstring);

    const totalDepositElement = document.getElementById('total-deposit')

    const previousAmountstring = totalDepositElement.innerText;

    const perviousAmount = parseFloat(previousAmountstring);

    const totaldeposit = perviousAmount + newAmount

    totalDepositElement.innerText = totaldeposit;

    const totalBalanceElement = document.getElementById('total-balance')

    const previousBalanceAmount = totalBalanceElement.innerText;

    const previousBalance = parseFloat(previousBalanceAmount);

    const totalBalance = newAmount + previousBalance;

    totalBalanceElement.innerText = totalBalance;

    depositAmount.value = '';
})