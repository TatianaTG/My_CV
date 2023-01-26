// Letter
// Open letter
const letter = document.querySelector(".letter__wrapper");
letter.addEventListener("mouseover", () => {
  letter.classList.add("flap");
});

letter.addEventListener("mouseleave", () => {
  letter.classList.remove("flap");
});
// Popup open
document.querySelector(".letter__wrapper").addEventListener("click", () => {
  document.querySelector(".letter__overlay").classList.add("active");
});

document.querySelector(".letter__popup-close").addEventListener("click", () => {
  document.querySelector(".letter__overlay").classList.remove("active");
});

// Clock
const updateClock = () => {
  var date = new Date();
  // conditia daca numarul din ora sau minuta e mai mic ca 9 sai adaugam un zerou in fata
  var time =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    " : " +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());

  document.querySelector(".footer__content-clock").innerHTML = time;
  // Recursie
  setTimeout(updateClock, 1000);
};
updateClock();

// Carousel

let position = 0; // Pozitia initiala
const slidesToShow = 3;
const slidesToScroll = 1;

const container = document.querySelector(".diploma__content-wrapper");
const track = document.querySelector(".diploma__content-slider");
const items = document.querySelectorAll(".diploma__content-slide");
const prev = document.querySelector(".diploma__slider-prev");
const next = document.querySelector(".diploma__slider-next");

const itemsCount = items?.length; // Numarul de sliduri = 9
const itemWidth = container.clientWidth / slidesToShow; // Marimea unui element
const movePosition = slidesToScroll * itemWidth; // Miscarea sludirlor cu un slide

// Setarea in stiluri la fiecare element marimea sa min-width = 
items?.forEach((item) => {
  item.style.minWidth = `calc(${itemWidth}px - 19px)`;
});


// Set btns functionality

// functia pentru calcularea mutarii slidului inainte
next.addEventListener("click", () => {
  // Miscarea elementelor in dreapta cu un slide
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  // Setarea pozitiei a elementelor
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

// functia pentru calcularea mutarii slidului inpoi
prev.addEventListener("click", () => {
  // Miscarea elementelor in stanga cu un slide
  const itemsLeft = Math.abs(position) / itemWidth;
  // Setarea pozitiei a elementelor
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

// functia de setare a pozitiei slidului in conformitate cu "position"
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

// Functia pentru disabled a butoanelor
const checkBtns = () => {
  prev.disabled = position === 0;
  next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
