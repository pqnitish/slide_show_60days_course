let slides = document.querySelectorAll(".slide");
let isSlider = false;
let currentImage = 0;
let slideInterval;
function diplaySide(index) {
  for (let i = 0; i < slides.length; i++) {
    if (i == index) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}
function nextSlide() {
  stopSlide();
  currentImage = (currentImage + 1) % slides.length;
  //console.log(currentImage);
  diplaySide(currentImage);
}
function prevSlide() {
  stopSlide();
  currentImage = (currentImage - 1 + slides.length) % slides.length;
  // console.log(currentImage);
  diplaySide(currentImage);
}

function toggleSlide() {
  if (isSlider == true) {
    stopSlide();
  } else {
    startSlide();
  }
}
function startSlide() {
  slideInterval = setInterval(function () {
    currentImage = (currentImage + 1) % slides.length;
    diplaySide(currentImage);
  }, 2000);
  isSlider = true;
}
function stopSlide() {
  clearInterval(slideInterval);
  isSlider = false;
}
diplaySide(currentImage);