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


// EXERCISE 2
let larger = document.querySelector("#padidinti");
let smaller = document.querySelector("#sumazinti");

let htmlIcon = document.querySelector("#first-ico");

// MAKE ICON BIGGER
larger.addEventListener('click', function() {
    htmlIcon.classList.toggle("fa-10x");
    // htmlIcon.classList.add('fa-10x');
})

// MAKE ICON SMALLER
smaller.addEventListener('click', function() {
    htmlIcon.classList.remove("fa-5x", "fa-10x");
})

// RESET ICON SIZE
htmlIcon.addEventListener('click', function() {
    this.classList.remove("fa-10x");
    this.classList.add('fa-5x');
})