const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");

const DATA = localStorage.setItem("players", '[{name: "Volha", totalScore: 0}]')

const data = JSON.parse(DATA)
const allPlayers = document.querySelector(".players-list");

let userName = "";

btnLogIn.addEventListener("click", function BtnLog() {
userName = inputUser.value;

localStorage.setItem("players", userName)
    // data.forEach(element => {
    //     let player = document.createElement("li");
    //     player.textContent = element.name;
    //     allPlayers.appendChild(player)
    // }
    //    );
   

});

// userName = inputUser.value;
//     (player.name = userName), (player.totalScore = 0);
  
//     players = JSON.stringify(player);
//     localStorage.setItem("name", players);
//     inputUser.value = "";