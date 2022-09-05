console.clear();
console.log("Js is read!");

const sliderDarkMode = document.querySelector('[js-data="dark-mode"]');
const body = document.querySelector("body");
const settingsBox = document.querySelector('[js-data="settingsBox"]');

sliderDarkMode.addEventListener("click", () => {
  body.classList.toggle("darkModeBody");
  settingsBox.classList.toggle("darkModeCard");
});
