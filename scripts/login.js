const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

let userName = "";

const player = { name: "", totalScore: 0 };
let players = [];

btnLogIn.addEventListener("click", function BtnLog() {
  userName = inputUser.value;
  (player.name = userName), (player.totalScore = 0);

  players = JSON.stringify(player);
  localStorage.setItem("name", players);
  inputUser.value = "";

  //   let inter = localStorage.getItem("1");
  //   let array = JSON.parse(inter);
  //   userName = inputUser.value;
  //   (player.name = userName), (player.totalScore = 0);
  //   array.push(player)
  //   console.log(array);
  //   let stringData = JSON.stringify(array);
  //   localStorage.setItem("1", stringData);
});
