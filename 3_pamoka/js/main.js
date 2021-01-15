(e => {

    // NAVIGATION
    document.querySelectorAll(".exercise-nav").forEach(element => {
        element.addEventListener('click', event => {
            document.querySelectorAll('[id^="exercise"]').forEach(e => {
                e.classList.add("d-none");
            });
            document.querySelector("#exercise" + event.target.innerText).classList.toggle("d-none");
            //EXERCISE 3
            if (event.target.innerText == '3') {
                removeForm('#id-forma ');
                buildForm();
                onFormSubmit();
            }
        })
    })

    // 1
    let friends = ["Mike", "Stacy", "Andy", "Rick"];
    let friends_list = document.querySelector('#friends_list');
    let colors = ['warning', 'danger', 'primary', 'secondary', 'info', 'success', 'dark'];

    let exercise1 = document.querySelector('#exercise1');
    let heading1 = document.createElement("h2");
    heading1.classList.add("mb-5");
    let text1 = document.createTextNode("1 užduotis");
    heading1.append(text1);
    heading1.classList.add("col-12");
    exercise1.insertBefore(heading1, exercise1.firstChild);

    friends.forEach((friend, index) => {
        let outputLine = `${index + 1}. ${friend}`;
        console.log(outputLine);
        let friends_list_item = document.createElement("li");
        friends_list_item.style = "list-style: none;";
        let rand = colors[Math.floor(Math.random() * colors.length)];
        friends_list_item.classList.add(`alert-${rand}`);
        friends_list_item.classList.add(`mb-2`);
        let friend_info = document.createTextNode(outputLine);
        friends_list_item.append(friend_info);
        friends_list.append(friends_list_item);
    })

    //2
    function checkProgressBarState(value) {
        if (value >= 0 && value <= 39) {
            return 'bg-danger';
        } else if (value >= 40 && value <= 69) {
            return 'bg-info';
        } else if (value >= 70 && value <= 100) {
            return 'bg-success';
        } else {
            return false;
        }
    }

    function checkInputNumber(progress_number, progress_bar, progress_number_label) {
        let bar_class = checkProgressBarState(Number(progress_number));
        if (bar_class !== false) {
            progress_number_label.innerText = '';
            progress_bar.className = "progress-bar";
            progress_bar.classList.add(bar_class);
            progress_bar.attributes['aria-valuenow'].value = progress_number;
            progress_bar.attributes['style'].value = `width: ${progress_number}%`;
            progress_bar.innerText = `${progress_number}%`;
        } else {
            progress_number_label.innerText = "Number must be between 0 and 100";
            progress_bar.attributes['aria-valuenow'].value = 0;
            progress_bar.attributes['style'].value = `width: ${0}%`;
            progress_bar.innerText = '';
        }
    }

    document.querySelector("#progress-bar-form").addEventListener('submit', e => {
        e.preventDefault();
        let progress_number_label = document.querySelector('#progress-number-label');
        let progress_bar = document.querySelector('#progress-bar');
        let progress_number = e.target.elements['progress-number'].value;
        checkInputNumber(progress_number, progress_bar, progress_number_label);
    })

    document.addEventListener('keydown', e => {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }

        if (e.target.value != "" && e.keyCode == 13) {
            let progress_number_label = document.querySelector('#progress-number-label');
            let progress_bar = document.querySelector('#progress-bar');
            let progress_number = document.querySelector('#progress-number').value;
            checkInputNumber(progress_number, progress_bar, progress_number_label);
        }
    })

    //3
    function buildForm() {
        let form = document.createElement('form');
        form.setAttribute('id', 'id-forma');
        let textInput = document.createElement('input');
        textInput.classList.add('form-control');
        textInput.setAttribute('type', "text");
        textInput.setAttribute('placeholder', "Įveskite savo asmens kodą");
        textInput.setAttribute('required', "");
        form.appendChild(textInput);

        let submitInput = document.createElement('input');
        submitInput.classList.add('btn', 'btn-success', 'mt-3');
        submitInput.setAttribute('type', "submit");
        submitInput.setAttribute('value', "Check");
        form.appendChild(submitInput);
        let message = document.createElement('p');
        message.setAttribute('id', 'id-check-answer');
        message.classList.add('mt-3');
        form.appendChild(message);
        document.querySelector('#exercise3 div').appendChild(form);
    }

    function removeForm(form_id) {
        let formToDelete = document.querySelector(form_id);
        if (formToDelete) {
            formToDelete.parentNode.removeChild(formToDelete);
        }
    }

    function onFormSubmit() {
        document.querySelector('#id-forma').addEventListener('submit', event => {
            event.preventDefault();
            check_if_input_is_id(event.target.elements['0'].value);
        })
    }

    function check_if_input_is_id(param) {
        let result = document.querySelector('#id-check-answer');

        //CHECK IF INPUT IS A 11 DIGITS STRING
        if (param.match(/^\d{11}$/g) !== null) {
            let sum1 = +param[0] + +param[1] * 2 + +param[2] * 3 + +param[3] * 4 + +param[4] * 5 +
                +param[5] * 6 + +param[6] * 7 + +param[7] * 8 + +param[8] * 9 + +param[9];

            let sum2 = (+param[0] * 3) + (+param[1] * 4) + (+param[2] * 5) + (+param[3] * 6) +
                (+param[4] * 7) + (+param[5] * 8) + (+param[6] * 9) + (+param[7]) + (+param[8] * 2) + (+param[9] * 3);
            let liekana1 = sum1 % 11;
            let liekana2 = sum2 % 11;
            let k = +param[10];
            console.log(liekana1);
            console.log(liekana2);

            //ASMENS KODO TIKRINIMAS
            if (liekana1 != 10 && liekana1 == k) {
                result.classList.add('text-success');
                result.innerText = `Asmens kodas: K=${k}, sugeneruotas 1 kartu`;
            } else if (liekana1 == 10 && liekana2 != 10 && liekana2 == k) {
                result.classList.add('text-success');
                result.innerText = `Asmens kodas: K=${k}, sugeneruotas 2 kartu`;
            } else if (liekana2 == 10 && k == 0) {
                result.classList.add('text-success');
                result.innerText = `Asmens kodas: K=${k}, sugeneruotas 3 kartu`;
            } else {
                result.classList.add('text-danger');
                result.innerText = "Ne asmens kodas";
            }

        } else {
            result.classList.add('text-danger');
            result.innerText = "Ne asmens kodas";
        }
    }
})();