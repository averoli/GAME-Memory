const btnLogIn = document.getElementById("btnLogIn");
const inputUser = document.getElementById("userNameImput");
const player = [{
        name: "",
        totalScore: 0
    },
    {
        name: "",
        totalScore: 0
    },
    {
        name: "",
        totalScore: 0
    },
    {
        name: "",
        totalScore: 0
    },
    {
        name: "",
        totalScore: 0
    },
    {
        name: "",
        totalScore: 0
    }
];
let userName = "";
let score = 0;
let players;

btnLogIn.addEventListener("click", function BtnLogIn() {
  if (player[0].name == ""){
    userName = inputUser.value;
    player[0].name = userName;
    player[0].totalScore = 0;
    players = JSON.stringify(player);

    localStorage.setItem("user 1", players);
  } else if (player[1].name == "") {
    userName = inputUser.value;
    player[1].name = userName;
    player[1].totalScore = 0;
    players = JSON.stringify(player);
    localStorage.setItem("user 1", players);

  }else if (player[2].name == "") {
    userName = inputUser.value;
    player[2].name = userName;
    player[2].totalScore = 0;
    players = JSON.stringify(player);
    localStorage.setItem("user 1", players);}
    else if (player[3].name == "") {
        userName = inputUser.value;
        player[3].name = userName;
        player[3].totalScore = 0;
        players = JSON.stringify(player);
        localStorage.setItem("user 1", players);}
        else if (player[4].name == "") {
            userName = inputUser.value;
            player[4].name = userName;
            player[4].totalScore = 0;
            players = JSON.stringify(player);
            localStorage.setItem("user 1", players);}
            else if (player[5].name == "") {
                userName = inputUser.value;
                player[5].name = userName;
                player[5].totalScore = 0;
                players = JSON.stringify(player);
                localStorage.setItem("user 1", players);}
})