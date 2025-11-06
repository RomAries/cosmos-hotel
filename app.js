
let imgs = [
    "images/one side.jpg",
    "images/main-hall.jpg",
    "images/lux.jpg",
    "images/THE view.jpg"
];
let i = 0;

const slide = document.getElementById("sliderImg");

document.getElementById("next").onclick = () => {
    i++;
    if (i > imgs.length - 1) i = 0;
    slide.src = imgs[i];
};

document.getElementById("prev").onclick = () => {
    i--;
    if (i < 0) i = imgs.length - 1;
    slide.src = imgs[i];
};
