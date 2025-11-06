let imgs=["images/camera-deluxe.jpg","images/suita-premium.jpg","images/Executive-Suite.jpg"];
let i=0;

const slide=document.getElementById("sliderImg");

document.getElementById("next").onclick=()=>{
i++;
if(i>3) i=0;
slide.src=imgs[i];
};


document.getElementById("prev").onclick=()=>{
i--;
if(i<0) i=3;
slide.src=imgs[i];
};


const preturiBtn=document.getElementById('preturiBtn');
const preturiBox=document.getElementById('preturiBox');
preturiBtn.onclick=()=>{
preturiBox.style.display= preturiBox.style.display=="block"?"none":"block";
};