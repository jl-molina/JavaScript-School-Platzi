const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const btnCalculate = document.querySelector('#btnCalculate')
const p = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', sum);

function sum(event) {
    //event.preventDefault();
    let result = Number(number1.value) + Number(number2.value);
    p.innerText = result;
}