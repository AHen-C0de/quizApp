console.log("Js is read!");

const sliderDarkMode = document.querySelector("[js-data='dark-mode']");

sliderDarkMode.addEventListener("click", () => {
  sliderDarkMode.classList.add("red");
});
