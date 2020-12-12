// EXERCISE 1
let btn_yellow = document.querySelector("#geltona");
let btn_green = document.querySelector("#zalia");
let btn_red = document.querySelector("#raudona");

let text = document.querySelector("p");

function setClass(element, className) {
    element.setAttribute('class', className);
}

btn_yellow.addEventListener('click', function() {
    setClass(text, 'alert-warning');
});

btn_green.addEventListener('click', function() {
    setClass(text, 'alert-success');
});

btn_red.addEventListener('click', function() {
    setClass(text, 'alert-danger');
});
