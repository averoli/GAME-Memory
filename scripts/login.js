const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");
// let player = {name: "", totalScore: 0,};
// let userName = "";
// let score = 0;
// let players;
// let i = 0;

btnLogIn.addEventListener("click", function BtnLogIn() {
  let a = [];
 let up1 = new Object();
 let up2 = new Object();

  up1 = {
    name: inputUser.value,
    totalScorore: 0,
  };
  up2 = {
      name: inputUser.value,
      totalScore: 0}

  a.push(up1);
    a.push(up2);

    // sessionStorage.setItem(“currentloggedin”,username);
  localStorage.setItem("all_users", JSON.stringify(a));

  a = JSON.parse(localStorage.getItem("all_users"));

  a.push({ name: inputUser.value, totalScore: 0 });
  localStorage.setItem("name", JSON.stringify(a));

//   for (var i = 0; i < a.length; i++) {
//     var li = document.createElement("li");
//     li.innerHTML = a[i]["name"];
//     document.getElementById("asas").appendChild(li);
//   }
});

//     if (localStorage.name == "") {
//         userName = inputUser.value;
//         player[0].name = userName;
//         player[0].totalScore = 0;
//         players = JSON.stringify(player);

//         localStorage.setItem("user 1", players);
//     } else if (player[1].name == "") {
//         userName = inputUser.value;
//         player[1].name = userName;
//         player[1].totalScore = 0;
//         players = JSON.stringify(player);
//         localStorage.setItem("user 1", players);

//     } else if (player[2].name == "") {
//         userName = inputUser.value;
//         player[2].name = userName;
//         player[2].totalScore = 0;
//         players = JSON.stringify(player);
//         localStorage.setItem("user 1", players);
//     } else if (player[3].name == "") {
//         userName = inputUser.value;
//         player[3].name = userName;
//         player[3].totalScore = 0;
//         players = JSON.stringify(player);
//         localStorage.setItem("user 1", players);
//     } else if (player[4].name == "") {
//         userName = inputUser.value;
//         player[4].name = userName;
//         player[4].totalScore = 0;
//         players = JSON.stringify(player);
//         localStorage.setItem("user 1", players);
//     } else if (player[5].name == "") {
//         userName = inputUser.value;
//         player[5].name = userName;
//         player[5].totalScore = 0;
//         players = JSON.stringify(player);
//         localStorage.setItem("user 1", players);
//     }
//     inputUser.value = "";
