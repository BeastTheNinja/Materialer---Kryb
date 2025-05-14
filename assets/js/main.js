const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const totalImages = 6;
const imagesToShow = 3;
let currentIndex = 0;

function updateSlider() {
  const slideWidth = 280; // samme som billedets bredde
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
// -----------------------------------------------------------------------------------------------------------
document.getElementById('firstname').addEventListener('input', validateFirstName);
document.getElementById('email').addEventListener('input', validateEmail);

function validateFirstName() {
    const firstName = document.getElementById('firstname').value;
    if (firstName.length < 2) {
        // alert('Fornavn skal være mindst 2 karakterer');
    }
}


function validateEmail() {
    const email = document.getElementById('email').value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
        // alert('Indtast en gyldig emailadresse');
    }
}

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop formularet fra at blive sendt, før validering
    validateForm();
});
    

function validateForm() {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    if (firstName.length >= 2 && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Formularen er valideret korrekt');
        // Eventuelt sende formularen eller noget andet
    } else {
        alert('Udfyld venligst alle felter korrekt');
    }
}