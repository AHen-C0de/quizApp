console.clear();
console.log("Js is read!");

let darkMode;

const sliderDarkMode = document.querySelector('[js-data="dark-mode"]');
const body = document.querySelector("body");
const settingsBox = document.querySelector('[js-data="settingsBox"]');
const borders = document.getElementsByClassName("border--dark");

window.onload = function () {
  sliderDarkMode.checked = false;
};

sliderDarkMode.addEventListener("click", () => {
  darkMode = sliderDarkMode.checked;

  if (darkMode) {
    body.classList.add("darkMode__body");
    settingsBox.classList.add("darkMode__card");
    for (let i = 0; i < borders.length; i++) {
      borders[i].style["border-color"] = "var(--color-background)";
    }
  } else {
    body.classList.remove("darkMode__body");
    settingsBox.classList.remove("darkMode__card");
    for (let i = 0; i < borders.length; i++) {
      borders[i].style["border-color"] = "var(--color-background-darkMode)";
    }
  }
  console.log("Slider checked " + darkMode);
});
