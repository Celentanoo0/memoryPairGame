"use strict";

const cards = Array.from(document.querySelectorAll(".flipper"));
const cardsImg = Array.from(document.querySelectorAll(".card__front img"));
const selectedCards = [];
const selectedFlippers = [];
for (const elem of cards) {
    elem.addEventListener("click", function slider(e) {
        if (selectedCards.length < 2) {
            elem.classList.toggle("flip");
            selectedCards.push(e.target);
        }
        if(selectedCards.length >= 2){
            if(selectedCards[0].querySelector('img').src === selectedCards[1].querySelector('img').src){
                selectedCards.forEach(item => item.classList.toggle('solved'))
                selectedCards.length = 0;
            }
            else setTimeout(() => {
                selectedCards.forEach(item => item.closest('.flipper').classList.toggle("flip"))
                selectedCards.length = 0;
            }, 1000);
        }
    });
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

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

shuffleArray(images);

let i = 0;
for (const elem of cardsImg) {
    elem.src = images[i];
    i++;
}
