const allPlayers = JSON.parse(localStorage.getItem("all_users"));
const winner = allPlayers[allPlayers.length - 1].name;


document.getElementById("winner").textContent = winner + ", you won!"