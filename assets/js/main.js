const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const totalImages = 7;
const imagesToShow = 3;
let currentIndex = 0;

function updateSlider() {
  const slideWidth = 200; // samme som billedets bredde
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex + imagesToShow < totalImages) {
    currentIndex += imagesToShow;
  } else {
    currentIndex = totalImages - imagesToShow;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex - imagesToShow >= 0) {
    currentIndex -= imagesToShow;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});
