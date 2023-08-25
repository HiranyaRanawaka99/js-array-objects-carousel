//Array di oggetti

const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];

//Recupero gli elementi di interesse
const slidesContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('go-prev');
const nextButton = document.getElementById('go-next');

//Aggiungo dinamicamente le slide al container

images.forEach((oneSlide, i) => {
  //console.log(`${oneSlide.image}${oneSlide.title}${oneSlide.text}`);

  //Dichiaro la classe attiva
  let currentImg = 0;
    //se è la prima slide sarà active = si vedrà solo la prima slide
  if (oneSlide == 0 ) {
    currentImg = 'active';
  }

  //stampo nel dom
  slidesContainer.innerHTML += `
    <div class="slides ${currentImg}">
      <img src='./${oneSlide.image}'>
      <div class="info"> 
        <h5>${oneSlide.title} </h5>
        <p>${oneSlide.text} </p>    
    </div>
  `
});



