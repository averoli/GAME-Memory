import setTime from "./timer.js"

const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

let playerList = [];
let userData = new Object();

if (localStorage.length > 0) {
  const users = JSON.parse(localStorage.getItem("all_users"));
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      let listElement = document.createElement("li");
      listElement.textContent = users[i].name;
      document.getElementById("usersTable").appendChild(listElement);
    }
  }
}

btnLogIn.addEventListener("click", btnLogIn());

function btnLogIn() {
  if (inputUser.value !== "") {
    userData = {
      name: inputUser.value,
      totalScore: 0,
    };
    playerList.push(userData);
  }

  localStorage.setItem("all_users", JSON.stringify(playerList));
  let data = localStorage.getItem("all_users");
  playerList = JSON.parse(data);

  if (playerList.length > 0) {
    let actualPlayer = playerList.length - 1;
    let listElement = document.createElement("li");
    listElement.textContent = playerList[actualPlayer].name;
    document.getElementById("usersTable").appendChild(listElement);
  }
  // setInterval(setTime, 1000);
  inputUser.value = "";
}
