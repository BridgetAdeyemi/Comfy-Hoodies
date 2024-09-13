function navToggle() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

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

// Accordion functionality start
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
