document.addEventListener('DOMContentLoaded', function() {
    const preturiBtn = document.getElementById('preturiBtn');
    const preturiBox = document.getElementById('preturiBox');


    preturiBtn.addEventListener('click', function() {
// comuta vizibilitatea
    const shown = preturiBox.style.display === 'block';
    preturiBox.style.display = shown ? 'none' : 'block';
    if(!shown) preturiBox.scrollIntoView({
        behavior:'smooth', block:'center'
    });
});


// În galerie poți adăuga imaginile tale în folderul /images.
// Modifică lista "myImages" cu numele fișierelor tale (ex: 'camera1.jpg').
// Dacă preferi, pur și simplu inserezi <img> direct în index.html — am lăsat comentarii acolo.


const myImages = [
// "images/poza1.jpg",
// "images/poza2.jpg",
// "images/poza3.jpg"
];


const galerie = document.querySelector('.galerie');


function loadGallery(list){
galerie.innerHTML = '';
if(list.length === 0) {
    const hint = document.createElement('p');
    hint.className = 'note';
    hint.textContent = 'https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_640.jpg';
    galerie.appendChild(hint);
return;
}


list.forEach((src, i) =>{
const card = document.createElement('div');
card.className = 'card';
const img = document.createElement('img');
img.src = src; // asigură-te că fișierul există la acest path
img.alt = `poza-${i+1}`;
// fallback simplu la eroare imagine
img.addEventListener('error', ()=>{
img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="%23071f3a"/><text x="50%" y="50%" fill="%23cfd6ff" font-size="16" text-anchor="middle" dy=".3em">Imagine lipsă</text></svg>';
});
const cap = document.createElement('div');
cap.className = 'caption';
cap.textContent = `Poza ${i+1}`;
card.appendChild(img);
card.appendChild(cap);
galerie.appendChild(card);
})
}


loadGallery(myImages);


});