let operacija = document.querySelector("#operacija");
let likutis = document.querySelector("#likutis");
operaciju_logas = [];
likutis.innerText = `Likutis: 0`;

// TIKRINA AR LOGAS YRA LOCAL STORAGE
if (localStorage.getItem('operaciju_logas') !== null) {
    operaciju_logas = JSON.parse(localStorage.getItem('operaciju_logas'));
    likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
    showHistory();
}

// RIKIUOJA IRASUS
document.querySelector("#operacijos-tipas").addEventListener("change", e => {
    let operacijos_tipas = e.target.value;
    (operacijos_tipas == "rikiuoti-daugiau") ? showHistory(operacijos_tipas): false;
    (operacijos_tipas == "rikiuoti-maziau") ? showHistory(operacijos_tipas): false;
});

// FILTRUOJA IRASUS, IDEJIMO / ISEMIMO OPERACIJOS
operacija.addEventListener("submit", e => {
    e.preventDefault();
    let operacijos_tipas = e.target.elements["operacijos-tipas"].value;
    let pinigu_suma = +e.target.elements["suma"].value;

    (operacijos_tipas == "isimti") ? takeMoneyOut(pinigu_suma): false;
    (operacijos_tipas == "filtruoti-daugiau") ? showHistory(operacijos_tipas): false;
    (operacijos_tipas == "filtruoti-maziau") ? showHistory(operacijos_tipas): false;
    (operacijos_tipas == "ideti") ? depositMoney(pinigu_suma): false;
    e.target.elements["suma"].value = "";
});

// SUKURIA OPERACIJU ISTORIJOS IRASUS
function createHistoryLog(array) {
    let history = document.querySelector("#history");
    history.innerHTML = "";
    array.forEach(e => {
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

function takeMoneyOut(money) {
    if (operaciju_logas.reduce((a, b) => a + b, 0) >= money) {
        operaciju_logas.push(money * -1);
        localStorage.setItem("operaciju_logas", JSON.stringify(operaciju_logas));
        likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
        showHistory();
    } else {
        alert("Per mažas pinigų likutis");
    }
}

function depositMoney(money) {
    operaciju_logas.push(money);
    localStorage.setItem("operaciju_logas", JSON.stringify(operaciju_logas));
    likutis.innerText = `Likutis: ${operaciju_logas.reduce((a, b) => a + b, 0)}`;
    showHistory();
}

function showHistory(sort_order = false) {
    let operaciju_logas = JSON.parse(localStorage.getItem("operaciju_logas"));
    let input_sum = +document.querySelector("#suma").value;
    (sort_order === false) ? createHistoryLog(operaciju_logas): false;
    (sort_order == "filtruoti-daugiau") ? createHistoryLog(operaciju_logas.filter(operacija => Math.abs(operacija) > input_sum)): false;
    (sort_order == "filtruoti-maziau") ? createHistoryLog(operaciju_logas.filter(operacija => Math.abs(operacija) < input_sum)): false;
    (sort_order == "rikiuoti-daugiau") ? createHistoryLog(operaciju_logas.sort((suma1, suma2) => Math.abs(suma2) - Math.abs(suma1))): false;
    (sort_order == "rikiuoti-maziau") ? createHistoryLog(operaciju_logas.sort((suma1, suma2) => Math.abs(suma1) - Math.abs(suma2))): false;
}