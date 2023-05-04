function somar() {
    const num1 = document.getElementById("input1").value;
    const num2 = document.getElementById("input2").value;
    const resultText = document.getElementById("result");


    resultText.textContent = Number(num1) + Number(num2);

}