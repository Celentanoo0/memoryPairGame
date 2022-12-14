const cards = Array.from(document.querySelectorAll('.flipper'));
for(const elem of cards){
    elem.addEventListener('click', function slider(){
        elem.classList.toggle('flip');
    });
}