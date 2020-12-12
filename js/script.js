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


// EXERCISE 3
let htmlIcon2 = document.querySelector("#second-ico");

let spalvotas = document.querySelector("#spalvotas");
let nespalvotas = document.querySelector("#nespalvotas");

// MAKE ICON COLORFULL
spalvotas.addEventListener('click', function() {
    htmlIcon2.classList.remove("icon-dark");
    htmlIcon2.classList.add("icon-color");
})

// MAKE ICON DARK
nespalvotas.addEventListener('click', function() {
    htmlIcon2.classList.remove("icon-color");
    htmlIcon2.classList.add("icon-dark");
})

// RESET ICON COLOR
htmlIcon2.addEventListener('click', function() {
    this.classList.remove("icon-color", "icon-dark");
})


// EXERCISE 4
let btn_ok = document.querySelector('#ok');
let pavadinimas = document.querySelector('#pavadinimas');

btn_ok.addEventListener('click', function() {
    pavadinimas.classList.toggle('pavadinimas');
})


// EXERCISE 5
let pateikti = document.querySelector('#pateikti');
let komentaras = document.querySelector('#komentaras');
let formaKomentarui = document.querySelector('#formaKomentarui');
formaKomentarui.style.display = 'none';

pateikti.addEventListener('click', function() {
    swal({
        title: "Šaunu!",
        text: "Jūsų komentaras pateiktas",
        icon: "success",
        button: "Tęsti",
      }).then( function() {
        formaKomentarui.style.display = 'none';
      });

    

})

komentaras.addEventListener('click', function() {
    formaKomentarui.style.display = 'block';   
})


// EXERCISE 6
let kaireje = document.querySelector('#kaireje');
let desineje = document.querySelector('#desineje');
let paslepti = document.querySelector('#paslepti');
let apacioje = document.querySelector('#apacioje');
let atstatyti = document.querySelector('#atstatyti');

let flexContainer = document.querySelector('#flex-container');
let codeImage = document.querySelector('#code-image');

kaireje.addEventListener('click', function() {
    flexContainer.setAttribute('class', 'd-flex flex-row');
})

desineje.addEventListener('click', function() {
    flexContainer.setAttribute('class', 'd-flex flex-row-reverse');
})

paslepti.addEventListener('click', function() {
    codeImage.classList.toggle('d-none');
    if (this.innerHTML === "Paslėpti" || this.innerHTML === "Ir vėl Paslėpti!") {
        this.innerHTML = "Rodyti";
      } else {
        this.innerHTML = "Ir vėl Paslėpti!";
      }
})

apacioje.addEventListener('click', function() {
    flexContainer.setAttribute('class', 'd-flex flex-column-reverse');
})

atstatyti.addEventListener('click', function() {
    flexContainer.setAttribute('class', 'd-flex flex-column');
    codeImage.classList.remove('d-none');
    paslepti.innerHTML = "Paslėpti";
})