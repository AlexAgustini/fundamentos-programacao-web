function sum() {
    const productPrice = document.getElementById("productPrice").value;
    const valuePayed = document.getElementById("valuePayed").value;
    const exchange = document.getElementById("exchange");   

    if (valuePayed > productPrice) {
        exchange.textContent = valuePayed - productPrice;
    } else {
        exchange.textContent = `Faltam ${productPrice - valuePayed} reais`
    }

}