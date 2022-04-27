import { cardData } from "./utilites.js";
import { getCardData } from "./functions.js";
const cardItem = document.querySelectorAll(".card-box");
const btnLogIn = document.getElementById("btnLogIn");
const loginPage = document.getElementById("loginPage");
const gamePage = document.getElementById("gamePage");

btnLogIn.addEventListener("click", (e) => {
  loginPage.classList.toggle("hideElement");
  gamePage.classList.toggle("hideElement");
  getCardData(cardData, cardItem);
});






