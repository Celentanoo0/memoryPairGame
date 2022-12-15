"use strict";

const cards = Array.from(document.querySelectorAll(".flipper"));
const cardsImg = Array.from(document.querySelectorAll(".card__front img"));
const selectedCards = [];

const images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
];

for (const elem of cards) {
    elem.addEventListener("click", slider);
}

function slider(e) {
    if (selectedCards.length < 2) {
        e.target.closest(".flipper").classList.toggle("flip");
        selectedCards.push(e.target);
        e.target.closest(".flipper").removeEventListener("click", slider);
    }
    if (selectedCards.length >= 2) {
        checkout();
    }
}

function checkout() {
    if (
        selectedCards[0].querySelector("img").src ===
        selectedCards[1].querySelector("img").src
    ) {
        selectedCards.forEach((item) => item.classList.toggle("solved"));
        images.length -= 2;
        selectedCards.length = 0;
        if (images.length <= 0) {
            winnerFunc();
        }
    } else
        setTimeout(() => {
            selectedCards.forEach((item) => {
                item.closest(".flipper").classList.toggle("flip");
                item.closest(".flipper").addEventListener("click", slider);
            });
            selectedCards.length = 0;
        }, 1000);
}

function winnerFunc() {
    const winner = document.createElement("div");
    winner.classList.add("winner");
    const winnerText = document.createElement("p");
    winnerText.innerHTML = "Congratulations, You Win!";
    const tryAgainBtn = document.createElement("div");
    tryAgainBtn.classList.add("winner__btn");
    tryAgainBtn.innerHTML = "Try again";
    tryAgainBtn.addEventListener("click", function refresh() {
        document.location.reload(true);
    });
    winner.append(winnerText);
    winner.append(tryAgainBtn);
    setTimeout(() => {
        document.querySelector(".header").remove();
        document.querySelector(".wrapper").append(winner);
    }, 1000);
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
shuffleArray(images);

let i = 0;
for (const elem of cardsImg) {
    elem.src = images[i];
    i++;
}
