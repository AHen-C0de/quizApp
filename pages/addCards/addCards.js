import createNavbar from "../../components/navbar/navbar.js";
import createCard from "../../components/card/card.js";
import { loadCards, saveCards } from "../../utilities/localstorage.js";

/* --- navbar --- */
createNavbar();

/* --- html elements --- */
const form = document.querySelector('[js-data="form"]');
const questionInput = document.querySelector('[js-data="question"]');
const answerInput = document.querySelector('[js-data="answer"]');
const charsQuest = document.querySelector('[js-data="chars-question"]');
const charsAnswer = document.querySelector('[js-data="chars-answer"]');
const successMsg = document.querySelector('[js-data="submit-sucess"]');

const placeholder = document.querySelector('[js-data="placeholder"]');

/* --- charCounter --- */
questionInput.addEventListener("input", () => {
  change_charCounter(questionInput, charsQuest);
});
answerInput.addEventListener("input", () => {
  change_charCounter(answerInput, charsAnswer);
});

/* --- form --- */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data.tags);
  const newCard = {
    id: Math.random() + "",
    question: data.question,
    answer: data.answer,
    tags: [data.tags],
    bookmarked: false,
  };

  const cards = loadCards();
  cards.push(newCard);
  saveCards(cards);

  form.reset();
  questionInput.focus();

  /* success msg */
  successMsg.classList.add("form__submit-success--enter");
  setTimeout(() => {
    successMsg.classList.remove("form__submit-success--enter");
  }, 1500);
});

/* --- functions --- */
function change_charCounter(charInput, charOutput) {
  const char_number = charInput.value.length;
  charOutput.textContent = `${char_number}/150`;
  if (char_number === 150) {
    charOutput.classList.add("form__show-chars--max");
  } else {
    charOutput.classList.remove("form__show-chars--max");
  }
}
