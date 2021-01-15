let operacija = document.querySelector("#operacija");
let likutis = document.querySelector("#likutis");
let operaciju_logas;

if (localStorage.getItem('operaciju_logas') === null) {
    operaciju_logas = [];
    likutis.innerText = `Likutis: 0`;

} else {
    operaciju_logas = JSON.parse(localStorage.getItem('operaciju_logas'));
    likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
    showHistory();
}

document.querySelector("#operacijos-tipas").addEventListener("change", e => {
    let operacijos_tipas = e.target.value;
    if (operacijos_tipas == "rikiuoti-daugiau") {
        showHistory(operacijos_tipas);
    } else if (operacijos_tipas == "rikiuoti-maziau") {
        showHistory(operacijos_tipas);
    } 
});

operacija.addEventListener("submit", e => {
    e.preventDefault();
    let operacijos_tipas = e.target.elements["operacijos-tipas"].value;
    let pinigu_suma = +e.target.elements["suma"].value;

    if (operacijos_tipas == "isimti") {
        if (operaciju_logas.reduce((a, b) => a + b, 0) >= pinigu_suma) {
            operaciju_logas.push(pinigu_suma * -1);
            localStorage.setItem("operaciju_logas", JSON.stringify(operaciju_logas));
            likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
            showHistory();
        } else {
            alert("Per mažas pinigų likutis");
        }
    }else if (operacijos_tipas == "filtruoti-daugiau") {
        showHistory(operacijos_tipas);
    } else if (operacijos_tipas == "filtruoti-maziau") {
        showHistory(operacijos_tipas);
    } else if(operacijos_tipas == "ideti") {
        operaciju_logas.push(pinigu_suma);
        localStorage.setItem("operaciju_logas", JSON.stringify(operaciju_logas));
        likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
        showHistory();
    }
    e.target.elements["suma"].value = "";
});

function showHistory(sort_order = false) {
    let history = document.querySelector("#history");
    history.innerHTML = "";
    let operaciju_logas = JSON.parse(localStorage.getItem("operaciju_logas"));
    if (sort_order === false) {
        operaciju_logas.forEach(e => {
            let line = document.createElement("p");
            if (e > 0) {
                line.setAttribute("class", "alert-success");
                line.innerText = "Įdėta: " + e;
            } else {
                line.setAttribute("class", "alert-danger");
                line.innerText = "Išimta: " + (e * -1);
            }
            history.appendChild(line);
        });
    } else if (sort_order == "filtruoti-daugiau") {
        operaciju_logas.forEach(e => {
            if (Math.abs(e) > +document.querySelector("#suma").value) {
                let line = document.createElement("p");
                if (e > 0) {
                    line.setAttribute("class", "alert-success");
                    line.innerText = "Įdėta: " + e;
                } else {
                    line.setAttribute("class", "alert-danger");
                    line.innerText = "Išimta: " + (e * -1);
                }
                history.appendChild(line);
            }
        });
    } else if (sort_order == "filtruoti-maziau") {
        operaciju_logas.forEach(e => {
            if (Math.abs(e) < +document.querySelector("#suma").value) {
                let line = document.createElement("p");
                if (e > 0) {
                    line.setAttribute("class", "alert-success");
                    line.innerText = "Įdėta: " + e;
                } else {
                    line.setAttribute("class", "alert-danger");
                    line.innerText = "Išimta: " + (e * -1);
                }
                history.appendChild(line);
            }
        });
    } else if (sort_order == "rikiuoti-daugiau") {
        let operacijos_filtered = operaciju_logas.sort((suma1, suma2) => Math.abs(suma2) - Math.abs(suma1));
        operacijos_filtered.forEach(e => {
                let line = document.createElement("p");
                if (e > 0) {
                    line.setAttribute("class", "alert-success");
                    line.innerText = "Įdėta: " + e;
                } else {
                    line.setAttribute("class", "alert-danger");
                    line.innerText = "Išimta: " + (e * -1);
                }
                history.appendChild(line);
        });
    } else if (sort_order == "rikiuoti-maziau") {
        let operacijos_filtered = operaciju_logas.sort((suma1, suma2) => Math.abs(suma1) - Math.abs(suma2));
        operacijos_filtered.forEach(e => {
                let line = document.createElement("p");
                if (e > 0) {
                    line.setAttribute("class", "alert-success");
                    line.innerText = "Įdėta: " + e;
                } else {
                    line.setAttribute("class", "alert-danger");
                    line.innerText = "Išimta: " + (e * -1);
                }
                history.appendChild(line);
        });
    }
}