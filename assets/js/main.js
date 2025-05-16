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
const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    firstnameInput.addEventListener('input', validateFirstName);
    emailInput.addEventListener('input', validateEmail);
    commentInput.addEventListener('input', validateComment);

    function showError(id, show) {
        const element = document.getElementById(id);
        element.style.display = show ? 'block' : 'none';
    }

    function validateFirstName() {
        const firstName = firstnameInput.value.trim();
        if (firstName.length < 2) {
            showError('firstname-error', true);
            return false;
        } else {
            showError('firstname-error', false);
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = pattern.test(email);
        showError('email-error', !isValid);
        return isValid;
    }

    function validateComment() {
        const comment = commentInput.value.trim();
        const isValid = comment.length > 0;
        showError('comment-error', !isValid);
        return isValid;
    }

    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Forhindrer almindelig indsendelse

        const isNameValid = validateFirstName();
        const isEmailValid = validateEmail();
        const isCommentValid = validateComment();

        if (isNameValid && isEmailValid && isCommentValid) {
            const firstName = firstnameInput.value.trim();
            const email = emailInput.value.trim();
            const comment = commentInput.value.trim();

            const subject = encodeURIComponent('Kommentar fra ' + firstName);
            const body = encodeURIComponent(`Navn: ${firstName}\nEmail: ${email}\nKommentar: ${comment}`);
            const mailtoLink = `mailto:sebastianlarsen21@outlook.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
        }
    });



// const character = "!";
// const count = 10;
// const rows = [];
// let inverted = false;

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);