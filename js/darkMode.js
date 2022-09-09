console.log("darkMode.js loaded");

let darkMode;
let storage = window.sessionStorage;

const sliderDarkMode = document.querySelector('[js-data="dark-mode"]');

const body = document.querySelector("body");
const settingsBox = document.querySelector('[js-data="settingsBox"]');
const borders_dark = document.getElementsByClassName("border--dark");
const cards = document.getElementsByClassName("card");
const bookmark_icons = document.getElementsByClassName("card__bookmark-icon");
const answers = document.getElementsByClassName("card__answer-text");
const tags = document.getElementsByClassName("card__tag");
const form2 = document.querySelector('[js-data="form"]');
// const r = document.querySelector(":root");

/* event listener for darkMode on slider */
if (document.URL.endsWith("profile.html")) {
  sliderDarkMode.addEventListener("click", () => {
    darkMode = sliderDarkMode.checked;
    toggleDarkMode(darkMode);
    storage.setItem("darkMode", darkMode);
  });
}

/* toggle darkMode when on other html page then profile */
if (storage.getItem("darkMode") !== null) {
  /* darkMode slider in profile page was already checked by user */
  const darkMode_str = storage.getItem("darkMode");
  darkMode = darkMode_str === "true";
  if (document.URL.endsWith("profile.html")) {
    sliderDarkMode.checked = darkMode;
  }
  toggleDarkMode(darkMode);
}

/* --- functions --- */
function toggleDarkMode(darkModeOn) {
  if (darkMode) {
    body.classList.add("darkMode__body");

    /* dark grid borders */
    if (borders_dark !== null) {
      for (let i = 0; i < borders_dark.length; i++) {
        borders_dark[i].style["border-color"] = "var(--color-background)";
      }
    }
    // r.style.setProperty("--color-card", "rgba(170, 223, 193, 0.457)");
    // r.style.setProperty("--color-card-shaddow", "rgb(14, 18, 16)");

    /* cards */
    if (cards !== null) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("card--darkMode");
      }
      for (let i = 0; i < bookmark_icons.length; i++) {
        bookmark_icons[i].classList.add("card__bookmark-icon--darkMode");
      }
      for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("card__answer-text--darkMode");
      }
      for (let i = 0; i < tags.length; i++) {
        tags[i].classList.add("card__tag--darkMode");
      }
    }

    /* profile page */
    if (settingsBox !== null) {
      settingsBox.classList.add("settings__container--darkMode");
    }

    /* addCard page */
    if (form2 !== null) {
      form2.classList.add("form__wrapper--darkMode");
    }
  } else {
    body.classList.remove("darkMode__body");
    for (let i = 0; i < borders_dark.length; i++) {
      borders_dark[i].style["border-color"] =
        "var(--color-background-darkMode)";
    }
    // r.style.setProperty("--color-card", "rgb(170, 223, 193)");
    // r.style.setProperty("--color-card-shaddow", "rgba(92, 119, 104, 0.634)");

    /* profile page */
    if (settingsBox !== null) {
      settingsBox.classList.remove("settings__container--darkMode");
    }
    /* addCard page */
    if (form2 !== null) {
      form2.classList.remove("form__wrapper--darkMode");
    }
  }
}
