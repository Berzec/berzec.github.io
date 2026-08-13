// make more nice look look

// BUTTON FUNCTIONS
// LocalStorage helpers
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

function updateThemeIcons(isLight) {
  const lightIcons = document.querySelectorAll(".lighticon");
  const darkIcons = document.querySelectorAll(".darkicon");

  lightIcons.forEach(icon => {
    icon.style.display = isLight ? "block" : "none";
  });

  darkIcons.forEach(icon => {
    icon.style.display = isLight ? "none" : "block";
  });
}

// Toggle light/dark theme
function themeToggle() {
  const isLight = document.body.classList.toggle("light-theme");
  setLocalStorage("themeMode", isLight ? "light" : "dark");
  updateThemeIcons(isLight);
}

// Apply stored theme on startup without transition flickering
function applyStoredTheme() {
  // Prevent transition animation on initial load
  document.documentElement.classList.add("no-transition");

  const storedTheme = getLocalStorage("themeMode");
  const isLight = storedTheme === "light";
  
  if (storedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
  updateThemeIcons(isLight);

  // Re-enable transitions after initial render
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("no-transition");
  });
}

// Run immediately on script load
applyStoredTheme();


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


// expanding cards script (collapsibles)
var coll = document.getElementsByClassName("expanding-card-single-title");
var i;
var chevron = document.getElementsByClassName("chevron-rotate-image");

const buttons = document.querySelectorAll(".expanding-card-single-title");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const chevron = this.querySelector(".chevron-rotate-image") || 
                    this.parentElement.querySelector(".chevron-rotate-image");

    if (chevron) {
      const isRotated = chevron.style.transform === "rotate(90deg)";
      chevron.style.transform = isRotated ? "rotate(0deg)" : "rotate(90deg)";
    }
  });
});

const titles = document.querySelectorAll(".expanding-card-single-title");

titles.forEach((title) => {
  title.addEventListener("click", function () {
    // 1. Toggle title active class
    this.classList.toggle("expanding-card-single-title-active");

    // 2. Toggle content grid state
    const content = this.nextElementSibling;
    if (content) {
      content.classList.toggle("is-open");
    }

    // 3. Toggle chevron rotation
    const chevron = this.querySelector(".chevron-rotate-image");
    if (chevron) {
      chevron.classList.toggle("chevron-active");
    }
  });
});



// slideshow script (original code swiped from w3schools, but error if no slideshow on page, so gemini fixed it, this is ai code)
let slideIndex = 1;

// Only initialize if slides exist on the page
if (document.getElementsByClassName("slideshow-images").length > 0) {
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-images");
  let dots = document.getElementsByClassName("slideshow-dot");

  // Guard clause: stop if no slides are found on the current page
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-dot-active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  // Safely set active class only if dots exist
  if (dots.length > 0 && dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " slideshow-dot-active";
  }
}