document.getElementById('discount-btn').addEventListener('click', function(){
    let Price = document.getElementById('price').value;
    let price = parseFloat(Price)
    let Discount = document.getElementById('discount').innerText;
    let discount = parseFloat(Discount) /100;

    let total = price - (price * discount);
    document.getElementById('total').value = total.toFixed(0)
})