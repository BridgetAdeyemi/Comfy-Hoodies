/***  navbar starts ***/
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("visible");
  shoppingCart.classList.remove("visible");
  formLogin.classList.remove("visible");
  navLink.classList.remove("visible");
});

let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");
cartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("visible");
  searchForm.classList.remove("visible");
  formLogin.classList.remove("visible");
  navLink.classList.remove("visible");
});

let formLogin = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", function () {
  formLogin.classList.toggle("visible");
  searchForm.classList.remove("visible");
  shoppingCart.classList.remove("visible");
  navLink.classList.remove("visible");
});

let navLink = document.querySelector(".nav-links");
let menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
  navLink.classList.toggle("visible");
  searchForm.classList.remove("visible");
  shoppingCart.classList.remove("visible");
  formLogin.classList.remove("visible");
});

window.addEventListener("scroll", function () {
  searchForm.classList.remove("visible");
  shoppingCart.classList.remove("visible");
  formLogin.classList.remove("visible");
  navLink.classList.remove("visible");
});
/*** navbar ends ***/

/****Scrolling text start *****/
const scrollingText = document.querySelector(".scrolling-sales-text");
const container = scrollingText.parentElement;

let textWidth = scrollingText.scrollWidth; // this is the full width of the text content
let containerWidth = container.offsetWidth; // width of the container
let position = containerWidth; // start position from the right edge of the container

function scrollText() {
  position--; // this move the text to the left by 1px
  if (position < -textWidth) {
    position = containerWidth; //reset to start from the right
  }
  scrollingText.style.transform = `translateX(${position}px)`; // Animation control
  requestAnimationFrame(scrollText); // this keep looping for smooth animation
}
scrollText(); // this start the scroll animation
/****Scrolling text stop *****/

/****Carousel functionality start *****/
let currentIndex = 0;
const autoSlideInterval = 3000;

// function to show current slide
function slideShow(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const totalSlides = slides.length;

  // this ensure indes stays within bounds
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  // move carousel to the correct slides
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// function to the nextSlide button
function nextSlide() {
  slideShow(currentIndex + 1);
}
function prevSlide() {
  slideShow(currentIndex - 1);
}

//auto slide change
function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, autoSlideInterval);
}
document.addEventListener("DOMContentLoaded", () => {
  slideShow(0);
  setTimeout(autoSlide, autoSlideInterval);
});
/****Carousel functionality stop *****/

/*** Accordion functionality start ***/
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the display of the associated content
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // this Move the content to be before the button when displayed
    if (content.style.display === "block") {
      this.parentNode.insertBefore(content, this);
    } else {
      this.parentNode.insertBefore(this, content);
    }

    // Toggle the active class for the button
    this.classList.toggle("active");
  });
});
/*** Accordion functionality ends ***/

/*** review slider section ***/
let swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
/*** review slider section ends ***/
