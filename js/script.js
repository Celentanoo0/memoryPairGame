const cards = Array.from(document.querySelectorAll(".flipper"));
const cardsImg = Array.from(document.querySelectorAll('.card__front img'));
for (const elem of cards) {
    elem.addEventListener("click", function slider() {
        elem.classList.toggle("flip");
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
for(const elem of cardsImg){
    elem.src = images[i];
    i++;
}