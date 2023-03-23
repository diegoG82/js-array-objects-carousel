// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Input

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

const imagesArray = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman M. Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// inserisco immagini nel DOM con queryselector nel div slider-items
const item = document.querySelector(".slider-items");

// Creo un ciclo per far scorrere le immagini
for (let i = 0; i < imagesArray.length; i++) {
  const currentImg = imagesArray[i];
  console.log(currentImg);

  // Creo una variabile per aggiungere il div con classe item tramite template literal
  const sliderItems = `<div class="item"><img src="${currentImg.image}"> <h2 class="title-text">${currentImg.title}</h2>
  <p class="p-text">${currentImg.text}</p></div> `;
  item.innerHTML += sliderItems;
}

// Creo una variabile con la quale prelevo il contenitore
const cardContainer = document.getElementsByClassName("item");

// console.log(img, p, h2);

// Assegno al primo Elemento dell'array la variabile firstimage
let indexImage = 0;

// AL primo elemento dell'array vado ad aggiungere la classe active
cardContainer[indexImage].classList.add("active");

const upBtn = document.querySelector(".arrowup");
const downBtn = document.querySelector(".arrowdown");

// IMPLEMENTO IL DELAY

delayinterval = setInterval(arrowDownDelay, 3000);

downBtn.addEventListener("click", function () {
  arrowDownDelay();
  clearInterval(delayinterval);
  delayinterval = setInterval(arrowDownDelay, 3000);
});

upBtn.addEventListener("click", function () {
  arrowUpDelay();
  clearInterval(delayinterval);
  delayinterval = setInterval(arrowDownDelay, 3000);
});

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// CICLO INFINITO

function arrowDownDelay() {
  cardContainer[indexImage].classList.remove("active");

  if (indexImage < cardContainer.length - 1) {
    indexImage++;
  } else {
    indexImage = 0;
  }

  cardContainer[indexImage].classList.add("active");
}

function arrowUpDelay() {
  imagesArray[indexImage].classList.remove("active");

  if (indexImage > 0) {
    indexImage--;
  } else {
    indexImage = 4;
  }

  imagesArray[indexImage].classList.add("active");
}
