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
const thumbsnailsContainer = document.getElementById('thumbnails-container');

//dichiaro la slide attiva
let activeSlide = 0;

//Aggiungo dinamicamente le slide al container
images.forEach((slide, index) => {
  
  //GENERO SLIDE
  //Aggiungo un nodo HTML e lo formatto
  const slideElement = document.createElement('div'); //creo un nodo per sfruttare l'aggiunta dell'attrbuto
  slideElement.classList.add('slide');
  
  //Se l'indice è = alla activeSlide aggiungi la classe active
  if (index == activeSlide) slideElement.classList.add('active');
  
  //stampo nel dom
  slideElement.innerHTML = `
    <img src='assets/${slide.image}'>
    <div class="info"> 
      <h5>${slide.title} </h5>
      <p>${slide.text} </p>   
    </div>`;

  //aggiungo il nodo all'array di oggetti
  slide.HTMLnode = slideElement;

  //aggiungo il nodo al container
  slidesContainer.append(slideElement);


  //GENERO THUMBNAILS 
  //creo un nodo e appendo nel dom
  const thumbnailsElement = document.createElement('div');
  thumbnailsElement.classList.add('thumb');
  thumbnailsElement.innerHTML = `<img src="assets/${slide.image}">`;

  //set un attributo indice per sapere su quale immagine sto cliccando
  thumbnailsElement.setAttribute('data-index', index);

  //click sulle immagini, stampa in console il suo indice
  thumbnailsElement.addEventListener('click', function () {
    // const index = this.getAttribute('data-index');
    // console.log(index);

    //cambia le immagini al click
    goToSlide(this.getAttribute('data-index'));

    })

  thumbsnailsContainer.append(thumbnailsElement);

});

//Reupero i buttons
const nextButton = document.getElementById('go-next');

nextButton.addEventListener('click', goNext);

function goNext() {
  //rimuovere  la classe active
  const oldSlide = images[activeSlide].HTMLnode;
  oldSlide.classList.remove('active');
  
  //incremento
  activeSlide++;

  //se activeSlide sfora, devo resettarlo
  if (activeSlide >= images.length) activeSlide = 0;
  
  //aggiungere la classe active
  const newSlide = images[activeSlide].HTMLnode;
  newSlide.classList.add('active');
  
}
goNext();

const prevButton = document.getElementById('go-prev');
prevButton.addEventListener('click', goPrev);

//Funzione per tornare in dietro
function goPrev()  {

  //rimuovere la classe active
  const oldSlide = images[activeSlide].HTMLnode;
  oldSlide.classList.remove('active');

  //decremento
  activeSlide--;
  
  //se activeSlide sfora, devo resettarlo
  if (activeSlide < 0) activeSlide = images.length - 1;


  //aggiungere la classe active
  const newSlide = images[activeSlide].HTMLnode;
  newSlide.classList.add('active');

}
goPrev();

let index = 0;
//Funzione
function goToSlide(index) {
  const oldSlide = images[activeSlide].HTMLnode;
  oldSlide.classList.remove('active');

  activeSlide = index;

  const newSlide = images[activeSlide].HTMLnode;
  newSlide.classList.add('active');
}
goToSlide(index);