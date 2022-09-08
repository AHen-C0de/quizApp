console.log("card.js loaded!");

const cardList = document.querySelector('[js-data="card-list"]');

function createCard(question, answer, tags) {
  const container = document.createElement("li");
  container.classList.add("card");

  const bookmark = document.createElement("input");
  bookmark.src = "../assets/bookmark_outline.svg";
  bookmark.type = "image";
  bookmark.alt = "bookmark-icon";
  bookmark.classList.add("card__bookmark-icon");

  const questionBox = document.createElement("p");
  questionBox.textContent = question;

  const button = document.createElement("button");
  button.textContent = "Show Answer";

  const answerBox = document.createElement("p");
  answerBox.textContent = answer;

  container.append(bookmark, questionBox, answerBox);
  cardList.append(container);
}

createCard("frage", "antwort", "tag");
