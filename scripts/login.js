

const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

let playerList = [];
let userData = new Object();

if (localStorage.length > 0) {
  console.log(localStorage.length);
  const users = JSON.parse(localStorage.getItem("all_users"));
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      let listElement = document.createElement("li");
      listElement.textContent = users[i].name;
      let scoreElement = document.createElement("li");
      scoreElement.textContent = users[i].totalScore;
      document.getElementById("usersTable").appendChild(listElement);
      document.getElementById("scoreTable").appendChild(scoreElement);
    }
  }
}

btnLogIn.addEventListener("click", play);

function play() {

  if (inputUser.value !== "") {
    userData = {
      name: inputUser.value,
      score: 0,
    };
    playerList.push(userData);
  }

  localStorage.setItem("all_users", JSON.stringify(playerList));
  let data = localStorage.getItem("all_users");
  playerList = JSON.parse(data);

  if (playerList.length > 0) {
    let actualPlayer = playerList.length - 1;
    let listElement = document.createElement("li");
    let scoreElement = document.createElement("li");
    listElement.textContent = playerList[actualPlayer].name;
    scoreElement.textContent=playerList[actualPlayer].score;
    document.getElementById("usersTable").appendChild(listElement);
    document.getElementById("scoreTable").appendChild(scoreElement);
  }
  inputUser.value = "";
}
