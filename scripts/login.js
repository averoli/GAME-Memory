const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

let playerList = [];
let userData = new Object();

btnLogIn.addEventListener("click", function BtnLogIn() {
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
    document.getElementById("userList").appendChild(listElement);
  }
});


