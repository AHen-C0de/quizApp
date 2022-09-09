import createCard from "./card.js";

console.log("addCard_form.js loaded!");
console.log(createCard);

const form = document.querySelector('[js-data="form"]');
const questionInput = document.querySelector('[js-data="question"]');
const answerInput = document.querySelector('[js-data="answer"]');
const charsQuest = document.querySelector('[js-data="chars-question"]');
const charsAnswer = document.querySelector('[js-data="chars-answer"]');
const successMsg = document.querySelector('[js-data="submit-sucess"]');

const placeholder = document.querySelector('[js-data="placeholder"]');

questionInput.addEventListener("input", change_charCounter_quest);
answerInput.addEventListener("input", change_charCounter_answer);

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
  const rollBack = () => {
    successMsg.classList.remove("form__submit-success--enter");
  };
  setTimeout(rollBack, 2000);
});

function change_charCounter_quest() {
  const char_number = questionInput.value.length;
  charsQuest.textContent = `${char_number}/150`;
  if (char_number === 150) {
    charsQuest.classList.add("form__show-chars--max");
  } else {
    charsQuest.classList.remove("form__show-chars--max");
  }
}

function change_charCounter_answer() {
  const char_number = answerInput.value.length;
  charsAnswer.textContent = `${char_number}/150`;
  if (char_number === 150) {
    charsAnswer.classList.add("form__show-chars--max");
  } else {
    charsAnswer.classList.remove("form__show-chars--max");
  }
}

/* to do */
// - add div with animation after submission
