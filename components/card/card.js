export default function createCard(question, answer, tagsArray) {
  const card = document.createElement("li");
  card.classList.add("card");

  // const bookmark = document.createElement("input");
  // bookmark.src = "../../assets/bookmark_outline.svg";
  // bookmark.type = "image";
  // bookmark.alt = "bookmark-icon";
  // bookmark.classList.add("card__bookmark-icon");

  const bookmark = document.createElement("button");
  bookmark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>`;
  const svg = bookmark.querySelector("svg");
  bookmark.classList.add("card__bookmark-icon");
  svg.classList.add("bookmark-icon");
  bookmark.style.height = "200px";
  // console.log(bookmark);
  // console.log(svg)

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

  card.append(bookmark, questionBox, answerButton, answerBox, tags_list);

  return card;
}

function bookmark_fun(bookmark) {
  bookmark.addEventListener("click", () => {
    const source = bookmark.src;

    if (source.endsWith("outline.svg")) {
      bookmark.src = "../../assets/bookmark_filled.svg";
    } else if (source.endsWith("filled.svg")) {
      bookmark.src = "../../assets/bookmark_outline.svg";
    }
  });
}

function answerButton_fun(button, answerBox) {
  button.addEventListener("click", () => {
    answerBox.toggleAttribute("hidden");
    if (answerBox.hidden) {
      button.textContent = "Show Answer";
      setTimeout(
        () => answerBox.classList.remove("card__answer-text--enter"),
        0 // doesnt work, because field hidden before class is removed
      );
    } else {
      button.textContent = "Hide Answer";
      setTimeout(() => answerBox.classList.add("card__answer-text--enter"), 0);
    }
  });
}
