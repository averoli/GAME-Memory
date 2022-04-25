const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");
// let player = {name: "", totalScore: 0,};
// let userName = "";
// let score = 0;
// let players;
// let i = 0;
let playerList= [];
let up1 = new Object();


btnLogIn.addEventListener("click", function BtnLogIn() {
  up1 = {
    name: inputUser.value,
    totalScorore: 0,
  };
  

  playerList.push(up1);


  localStorage.setItem("all_users", JSON.stringify(playerList));

  playerList = JSON.parse(localStorage.getItem("all_users"));



  localStorage.setItem("all_users", JSON.stringify(playerList));
  
   for (let i = 0; i < playerList.length; i++) {

    let player =document.createElement("li");

    document.getElementById("userList").appendChild(player);


   player.textContent = playerList.name;
   }
});

