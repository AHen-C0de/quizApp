import createCard from "./card.js";

console.log(createCard);

console.log("addCard_form.js loaded!");

const form = document.querySelector('[js-data="form"]');
const questionInput = document.querySelector('[js-data="question"]');
const placeholder = document.querySelector('[js-data="placeholder"]');

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
});

/* to do */
// - add div with animation after submission
