// make more nice look look

// BUTTON FUNCTIONS

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

// function setLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

// function getLocalStorage(key) {
//   return localStorage.getItem(key);
// }

// open menu
function settingToggle() {
  let x = document.getElementById("setting-card");
  
  if (x.style.display == "flex") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "flex";
  }
}


// close the menu for mobile
function menuCloseToggle() {
  let x = document.getElementById("menu-close-mobile-id");
  
  if (x.style.display == "flex") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "flex";
  }
}


window.onclick = function(e) {
  let x = document.getElementById("setting-card");

  if (e.target == x) {
    x.style.display = "none";
  }
}



window.addEventListener("keydown", function (event) {
  let x = document.getElementById("setting-card");
  if (event.key === "Escape") {
    x.style.display = "none";
  }
})

window.addEventListener("DOMContentLoaded", function () {
  const x = getLocalStorage("themeMode") || "light";
  console.log(getLocalStorage("themeMode"), x);

  let element = document.getElementById("theme-toggle"); 
  if (x === "dark") {
    element.classList.remove("theme-light");
  }
  else {
    element.classList.add("theme-light");
  }

  console.log(element.classList);
})


// slideshow script (straight stolen from w3)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-images");
  let dots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideshow-dot-active";
} 