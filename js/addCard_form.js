import createCard from "./card.js";

console.log("addCard_form.js loaded!");

/* --- html elements --- */
const form = document.querySelector('[js-data="form"]');
const questionInput = document.querySelector('[js-data="question"]');
const answerInput = document.querySelector('[js-data="answer"]');
const charsQuest = document.querySelector('[js-data="chars-question"]');
const charsAnswer = document.querySelector('[js-data="chars-answer"]');
const successMsg = document.querySelector('[js-data="submit-sucess"]');

const placeholder = document.querySelector('[js-data="placeholder"]');

/* --- event listener --- */
questionInput.addEventListener("input", () => {
  change_charCounter(questionInput, charsQuest);
});
answerInput.addEventListener("input", () => {
  change_charCounter(answerInput, charsAnswer);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const question = data.question;
  const answer = data.answer;
  const tag = data.tags;

  createCard(question, answer, [tag], placeholder);

  form.reset();

  questionInput.focus();
  successMsg.classList.add("form__submit-success--enter");
  setTimeout(() => {
    successMsg.classList.remove("form__submit-success--enter");
  }, 1500);
});

/* --- functions --- */
function change_charCounter(charInput, charOutput) {
  console.log("shit");

  const char_number = charInput.value.length;
  charOutput.textContent = `${char_number}/150`;
  if (char_number === 150) {
    charOutput.classList.add("form__show-chars--max");
  } else {
    charOutput.classList.remove("form__show-chars--max");
  }
}
