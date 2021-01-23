$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function (data) {
    console.log(data);
    document.querySelector("#profile-pic").src = data.results[0].picture.large;
    document.querySelector("#name").innerText = `${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}`;
    document.querySelector("#email").innerText = data.results[0].email;
    document.querySelector("#phone-number").innerText = data.results[0].phone;
    document.querySelector("#age").innerText = `Age: ${data.results[0].dob.age}`;
    document.querySelector("#username").innerText = data.results[0].login.username;
    document.querySelector("#account-active").innerText = `${data.results[0].registered.age} years`;
  }
});

