// make more nice look look

// BUTTON FUNCTIONS

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}



// set theme upon toggle
function themeToggle() {
  let element = document.getElementById("theme-toggle"); 

  element.classList.toggle("theme-light");

  if (element.classList.contains("theme-light")) {
    setLocalStorage("themeMode", "light");
  }
  else {
    setLocalStorage("themeMode", "dark");
  }

  if (getLocalStorage('themeMode') === "light") {
    element.classList.add("theme-light");
  }
}
// set theme upon startup based on theme last saved
function themeSave() {

}

// function setLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

// function getLocalStorage(key) {
//   return localStorage.getItem(key);
// }

function uploadTheme() {
  let x = getLocalStorage('themeMode');
}

function settingToggle() {
  let x = document.getElementById("setting-card");
  
  if (x.style.display == "flex") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "flex";
  }
}



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