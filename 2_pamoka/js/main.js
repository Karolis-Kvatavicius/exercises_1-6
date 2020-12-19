// 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let form = document.querySelector('[name=form]');
let result = document.querySelector('#resultText');
let resultCount = document.querySelector('#resultCount');
let count = 0;

console.log("1 uzduotis, skaicius kuri reikia atspeti: " + randomNumber);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let guess = e.target.elements.input.value;
    if (guess == randomNumber) {
        result.innerHTML = "Atspėjote";
    } else if (guess > randomNumber) {
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

form1.addEventListener('submit', function (e) {
    e.preventDefault();
    let number1 = e.target.elements.firstNumber.value;
    let number2 = e.target.elements.secondNumber.value;
    sum.innerHTML = Number(number1) + Number(number2);
})

//3
let form2 = document.querySelector('#form2');
let kmi = document.querySelector('#kmi');

form2.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = e.target.elements.height.value;
    let weight = e.target.elements.weight.value;
    let actualKmi = Number(weight) / Math.pow(Number(height / 100), 2);
    kmi.innerHTML = `Jūsų KMI yra: ${actualKmi.toFixed(2)}`;
})

//4
let prideti = document.querySelector('#add');
let sarasas = document.querySelector('#list');
let task = document.querySelector('#task');

let inputValue = "";

task.addEventListener('change', function (e) {
    inputValue = e.target.value;
})

prideti.addEventListener('click', function (e) {
    if (inputValue != "") {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        let taskText = document.createTextNode(inputValue);
        listItem.append(taskText);
        sarasas.append(listItem);

        let uzduotys = document.querySelectorAll('.list-group-item');
        uzduotys.forEach(i => {
            i.addEventListener('click', e => {
                e.target.remove();
            })
        })
    }
})

//5
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

input1.addEventListener('focus', event => {
    event.target.classList.add('bg-warning', 'text-light');
})

input2.addEventListener('focus', event => {
    event.target.classList.add('bg-danger', 'text-light');
})

input1.addEventListener('blur', event => {
    event.target.classList.remove('bg-warning', 'text-light');
})

input2.addEventListener('blur', event => {
    event.target.classList.remove('bg-danger', 'text-light');
})

//6
let paveikslelis = document.querySelector('#paveikslelis');
let pasirinkimas = document.querySelector('#id_of_select');

pasirinkimas.addEventListener('change', e => {
    switch (e.target.value) {
        case '0':
            console.log('1');
            paveikslelis.style.backgroundImage = "none";
            break;
        case '1':
            paveikslelis.style.backgroundImage = "url(https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80)";
            break;
        case '2':
            paveikslelis.style.backgroundImage = "url(https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)";
            break;
        case '3':
            paveikslelis.style.backgroundImage = "url(https://images.unsplash.com/photo-1517468832098-4843428b6d38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)";
            break;
        case '4':
            paveikslelis.style.backgroundImage = "url(https://images.unsplash.com/photo-1484313544071-4d67c88b99be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)";
            break;
    }
})