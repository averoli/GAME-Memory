const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

let playerList = [];
let up1 = new Object();

btnLogIn.addEventListener("click", function BtnLogIn() {
  up1 = {
    name: inputUser.value,
    totalScore: 0,
  };

  //   localStorage.setItem(up1.name, JSON.stringify(up1));
  //   let data = JSON.parse(localStorage.getItem(up1.name))

  //     let player = document.createElement("li");
  //     player.textContent = data.name;
  //     document.getElementById("userList").appendChild(player);

  playerList.push(up1);

  localStorage.setItem("all_users", JSON.stringify(playerList));

  playerList = JSON.parse(localStorage.getItem("all_users"));

  localStorage.setItem("all_users", JSON.stringify(playerList));

  for (let i = 0; i < playerList.length; i++) {
    if (playerList[i] !== up1) {
        console.log(playerList[i]);
        console.log(up1.name);
      let player = document.createElement("li");
      player.textContent = playerList[i].name;
      document.getElementById("userList").appendChild(player);
    } else {
        console.log("kuku");
    }

  
  }

  // IVAN
  // ========================
  // let listString= "";
  // for (const player of playerList) {

  //     let listElement = document.createElement("li");
  //     listElement.textContent = player.name;
  //     listString += listElement;
  // }
  // console.log(listString);
  // document.getElementById("userList").innerHTML = listString;
  //   inputUser.value = "";
});
