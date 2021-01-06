// 1

let friends = ["Mike", "Stacy", "Andy", "Rick"];
let friends_list = document.querySelector('#friends_list');
let colors = ['warning', 'danger', 'primary', 'secondary', 'info', 'success', 'dark'];

let exercise1 = document.querySelector('#e1');
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