let activeSlideIndex = 1;

/*
 * Form submission for user selected options
 * */

function submitForm(event) {
  event.preventDefault();
  const formElement = document.forms["student-data-form"];
  const formData = new FormData(formElement);

  switch (activeSlideIndex) {
    case 1:
      activeSlideIndex++;
      changeSlide(activeSlideIndex);
      break;
    case 2:
      postUserData(prepareRequestData(formData));
      break;
    default:
      break;
  }
}

/*
 * Updates slide and its correspondence bullet point
 * */

function changeSlide(slideIndex) {
  if (!slideIndex) return;
  const slides = document.querySelectorAll(".slide");
  const bullets = document.querySelectorAll(".bullet");
  const slideElementToHide = document.getElementsByClassName("show");
  const bulletElementToUnfill = document.getElementsByClassName("fill");
  slideElementToHide[0].classList.remove("show");
  bulletElementToUnfill[0].classList.remove("fill");

  slides[activeSlideIndex - 1].classList.add("show");
  bullets[activeSlideIndex - 1].classList.add("fill");
}

/*
 * Prepare request body for API call
 * */

function prepareRequestData(formData) {
  const requestBody = {
    school: formData.get("school"),
    college: formData.get("college"),
    university: formData.get("university"),
    company: formData.get("company"),
  };
  return requestBody;
}

/*
 * Fetch API Post call for user data
 * */

function postUserData(data) {
  fetch("http://localhost:3000/submit-user-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
