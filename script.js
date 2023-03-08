// functions for toggling Dropdowns
function showDropdown(targetDropdown) {
  document.getElementById(targetDropdown).classList.toggle("show");
  document
    .getElementById(targetDropdown + "arrow")
    .classList.toggle("rotate");
}

// functions for Selecting dropdown value and closing dropdown 
function selectDropdownValue(targetDropdown, event) {
  var targetValue = event.target || event.srcElement;
  document.querySelector(
    "[data-target=" + targetDropdown + "]"
  ).innerHTML = targetValue.innerHTML;
  document.getElementById(targetDropdown).classList.remove("show");
  document
    .getElementById(targetDropdown + "arrow")
    .classList.remove("rotate");
}


// functions for slider
let slideIndex = 1;
moveSlide(slideIndex);

function currentSlide(n) {
  moveSlide((slideIndex = n));
}

function plusSlides(n) {
  moveSlide((slideIndex += n));
}

function moveSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const bullets = document.getElementsByClassName("bullet");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" fill", "");
  }
  slides[slideIndex - 1].style.display = "block";
  bullets[slideIndex - 1].className += " fill";
}