console.clear();
console.log("Js is read!");

const sliderDarkMode = document.querySelector('[js-data="dark-mode"]');
const body = document.querySelector("body");
const settingsBox = document.querySelector('[js-data="settingsBox"]');
const borderDark = document.querySelector('[js-data="border-dark"]');

sliderDarkMode.addEventListener("click", () => {
  body.classList.toggle("darkMode__body");
  settingsBox.classList.toggle("darkMode__card");
  borderDark.classList.toggle("darkMode__border-dark");

  console.log(borderDark);
});
