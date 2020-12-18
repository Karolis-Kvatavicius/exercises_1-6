// 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let form = document.querySelector('[name=form]');
let result = document.querySelector('#resultText');
let resultCount = document.querySelector('#resultCount');
let count = 0;

console.log("1 uzduotis, skaicius kuri reikia atspeti: "+randomNumber);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let guess = e.target.elements.input.value;
    if(guess == randomNumber) {
        result.innerHTML = "Atspėjote";
    } else if(guess > randomNumber) {
        result.innerHTML = "Skaičius per didelis";
    } else {
        result.innerHTML = "Skaičius per mažas";
    }
    count++;
    resultCount.innerHTML = `Spėjimų skaičius: ${count}`;
})

// 2
let form1 = document.querySelector('[name=form1]');
let sum = document.querySelector('#sum');

form1.addEventListener('submit', function(e) {
    e.preventDefault();
    let number1 = e.target.elements.firstNumber.value;
    let number2 = e.target.elements.secondNumber.value;
    sum.innerHTML = Number(number1) + Number(number2);
})

//3
let form2 = document.querySelector('#form2');
let kmi = document.querySelector('#kmi');

form2.addEventListener('submit', function(e) {
    e.preventDefault();
    let height = e.target.elements.height.value;
    let weight = e.target.elements.weight.value;
    let actualKmi = Number(weight) / Math.pow(Number(height/100), 2);
    kmi.innerHTML = `Jūsų KMI yra: ${actualKmi}`;
})