import { cardData } from "./utilites.js";
const cardItem = document.querySelectorAll(".card-box");
const gameSection = document.getElementById("cardWrapper");
let i = 0;
let clickCounter = 0;
let cardNames = [];
let matches = 8;

document.addEventListener("DOMContentLoaded", (e) => {
  getCardData(cardData, cardItem);
});

const getCardData = (cardData, cardItem) => {
  cardData.sort(() => Math.random() - 0.5);

  cardItem.forEach((cardContainer) => {
    //add id and name to image container
    cardContainer.id = cardData[i].id;
    cardContainer.setAttribute("name", cardData[i].name);
    //creat an image inside div container
    const cardImage = document.createElement("img");
    cardImage.src = cardData[i].imgSrc;
    cardImage.classList = "front";

    //creat the reverse image
    const cardReverse = document.createElement("img");
    cardReverse.src = "./assets/reverse.png";
    cardReverse.classList = "reverse";

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardReverse);
    i++;

    cardContainer.addEventListener("click", (e) => {
      cardImage.classList.toggle("toggle");
      cardContainer.classList.toggle("toggle");
      checkCards(cardContainer);
    });
  });
};

function checkCards(card) {
  clickCounter++;
  cardNames.push(card);
  card.style.pointerEvents = "none";

  if (clickCounter == 2) {
    gameSection.style.pointerEvents = "none";
    const firstCardName = document.getElementById(`${cardNames[0].id}`);
    const secondCardName = document.getElementById(`${cardNames[1].id}`);

    console.log(firstCardName.name);

    if (
      firstCardName.getAttribute("name") === secondCardName.getAttribute("name")
    ) {
      firstCardName.style.pointerEvents = "none";
      secondCardName.style.pointerEvents = "none";
      gameSection.style.pointerEvents = "auto";
      matches--;
      cardNames = [];
      clickCounter = 0;
      if (matches == 0) {
        console.log("copion");
      }
    } else {
      firstCardName.style.pointerEvents = "auto";
      secondCardName.style.pointerEvents = "auto";
      setTimeout(() => {
        firstCardName.classList.toggle("toggle");
        secondCardName.classList.toggle("toggle");
        firstCardName.firstChild.classList.toggle("toggle");
        secondCardName.firstChild.classList.toggle("toggle");
        gameSection.style.pointerEvents = "auto";
        cardNames = [];
        clickCounter = 0;
      }, 1000);
    }
  }
}
