console.log("card.js loaded!");

const cardList = document.querySelector('[js-data="card-list"]');

const question = "Lorem ipsum dolor sit, amet consectetur adipisicing elit?";
const answer =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis possimus, dignissimos voluptates cupiditate doloremque voluptatum consectetur velit magnam eaque eius amet molestias, ea eveniet laborum veritatis perspiciatis quod nisi.";
const tagsList = ["html", "CSS", "flexbox"];

createCard(question, answer, tagsList);
createCard(question, answer, tagsList);
createCard(question, answer, tagsList);
createCard(question, answer, tagsList);

/* --- functions --- */
function createCard(question, answer, tagsArray) {
  const container = document.createElement("li");
  container.classList.add("card");

  const bookmark = document.createElement("input");
  bookmark.src = "../assets/bookmark_outline.svg";
  bookmark.type = "image";
  bookmark.alt = "bookmark-icon";
  bookmark.classList.add("card__bookmark-icon");
  bookmark_fun(bookmark); // add event listener

  const questionBox = document.createElement("p");
  questionBox.textContent = question;
  questionBox.classList.add("card__question");

  const answerButton = document.createElement("button");
  answerButton.textContent = "Show Answer";
  answerButton.classList.add("card__answer-button");

  const answerBox = document.createElement("p");
  answerBox.textContent = answer;
  answerBox.classList.add("card__answer-text");
  answerBox.setAttribute("hidden", "");

  answerButton_fun(answerButton, answerBox);

  const tags_list = document.createElement("ul");
  tags_list.classList.add("card__tags-list");
  for (let i = 0; i < tagsArray.length; i++) {
    const tag = document.createElement("li");
    tag.classList.add("card__tag");
    tag.textContent = "#" + tagsArray[i];
    tags_list.append(tag);
  }

  container.append(bookmark, questionBox, answerButton, answerBox, tags_list);
  cardList.append(container);
}

function bookmark_fun(bookmark) {
  bookmark.addEventListener("click", () => {
    const source = bookmark.src;

    if (source.endsWith("outline.svg")) {
      bookmark.src = "../assets/bookmark_filled.svg";
    } else if (source.endsWith("filled.svg")) {
      bookmark.src = "../assets/bookmark_outline.svg";
    }
  });
}

function answerButton_fun(button, answer) {
  button.addEventListener("click", () => {
    answer.toggleAttribute("hidden");
    if (answer.hidden) {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
  });
}
