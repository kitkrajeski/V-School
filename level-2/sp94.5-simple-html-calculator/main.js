const addButton = document.calculator.addButton;
const addCalculator = document.getElementById("add");

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const addition1 = parseInt(document.calculator.addition1.value);
    const addition2 = parseInt(document.calculator.addition2.value);
    const sum1 = document.createElement('input');
    sum1.value = addition1 + addition2;
    addCalculator.appendChild(sum1)
});

const subButton = document.calculator.subButton;
const subCalculator = document.getElementById("subtract");

subButton.addEventListener("click", (event) => {
    event.preventDefault();
    const subtract1 = parseInt(document.calculator.subtract1.value);
    const subtract2 = parseInt(document.calculator.subtract2.value);
    const sum2 = document.createElement('input');
    sum2.value = subtract1 - subtract2;
    subCalculator.appendChild(sum2);
});

const mulButton = document.calculator.mulButton;
const mulCalculator = document.getElementById("multiply");

mulButton.addEventListener("click", event => {
    event.preventDefault();
    const multiply1 = parseInt(document.calculator.multiply1.value);
    const multiply2 = parseInt(document.calculator.multiply2.value);
    const sum3 = document.createElement('input');
    sum3.value = multiply1 * multiply2;
    mulCalculator.appendChild(sum3);
});