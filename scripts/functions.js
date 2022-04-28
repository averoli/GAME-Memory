// import { setTime } from "./timer.js";
const gameWrapper = document.getElementById("cardWrapper");
const seconds = document.getElementById("seconds");
let i = 0;
let clickCounter = 0;
let score = 0;
let cardNames = [];
let matches = 8;
let timerStart = false;

//Game page
/* Get image data */
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
      timer();
      console.log(matches);
    });
  });
};

const timer = () => {
  if (!timerStart) {
    const playerScore = setInterval(() => {
      seconds.textContent = ++score;

      if (matches == 0) {
        nextSection();
      }
    }, 1000);
    timerStart = true;
  }
};

const checkCards = (card) => {
  clickCounter++;
  cardNames.push(card);
  card.style.pointerEvents = "none";

  if (clickCounter == 2) {
    gameWrapper.style.pointerEvents = "none";
    const firstCardName = document.getElementById(`${cardNames[0].id}`);
    const secondCardName = document.getElementById(`${cardNames[1].id}`);

    if (
      firstCardName.getAttribute("name") === secondCardName.getAttribute("name")
    ) {
      firstCardName.style.pointerEvents = "none";
      secondCardName.style.pointerEvents = "none";
      gameWrapper.style.pointerEvents = "auto";
      matches--;
      cardNames = [];
      clickCounter = 0;
      if (matches == 0) {
        timerStart = false;
      }
    } else {
      firstCardName.style.pointerEvents = "auto";
      secondCardName.style.pointerEvents = "auto";
      setTimeout(() => {
        firstCardName.classList.toggle("toggle");
        secondCardName.classList.toggle("toggle");
        firstCardName.firstChild.classList.toggle("toggle");
        secondCardName.firstChild.classList.toggle("toggle");
        gameWrapper.style.pointerEvents = "auto";
        cardNames = [];
        clickCounter = 0;
      }, 1000);
    }
  }
};

function nextSection() {
  const activeSection = document.querySelector("[active-section]");

  activeSection.classList.toggle("hideElement");
  activeSection.nextElementSibling.classList.toggle("hideElement");
  activeSection.removeAttribute("active-section");
  activeSection.nextElementSibling.setAttribute("active-section", "");
}

// function reset(){

//   let data = localStorage.getItem("all_users");
//   playerList = JSON.parse(data);

//   if (playerList.length > 0) {
//     let actualPlayer = playerList.length - 1;
//     let listElement = document.createElement("li");
//     let scoreElement = document.createElement("li");
//     listElement.textContent = playerList[actualPlayer].name;
//     scoreElement.textContent=seconds.value;
//     document.getElementById("usersTable").appendChild(listElement);
//     document.getElementById("scoreTable").appendChild(scoreElement);
//   }
//   inputUser.value = "";
// }

export { getCardData, nextSection };
