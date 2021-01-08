(e => {
    // NAVIGATION
    document.querySelectorAll(".exercise-nav").forEach(element => {
        element.addEventListener('click', event => {
            document.querySelectorAll('[id^="exercise"]').forEach(e => {
                e.classList.add("d-none");
            });
            document.querySelector("#exercise" + event.target.innerText).classList.toggle("d-none");
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
})();