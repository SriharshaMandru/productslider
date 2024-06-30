let thumbnails = document.querySelectorAll("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click",() =>{
    slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if(slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= maxScrollLeft;
    }
    else {
        slider.scrollLeft += 1;
    }
} 

let play = setInterval(autoPlay, 50);

for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener("mouseover",() => {
        return play = setInterval(autoPlay, 50);
    })
}