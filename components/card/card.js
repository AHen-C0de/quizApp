export default function createCard(question, answer, tagsArray) {
  const card = document.createElement("li");
  card.classList.add("card");

  const svg_bookmark_inactive = `<svg js-data="bookmark-ic" class="bookmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>`;
  const svg_bookmark_active = `<svg js-data="bookmark-ac" class="bookmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`;

  const bookmark = document.createElement("button");
  bookmark.innerHTML = svg_bookmark_inactive;
  bookmark.classList.add("card__bookmark-icon");
  bookmark_fun(bookmark, svg_bookmark_inactive, svg_bookmark_active); // add event listener

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

function bookmark_fun(bookmark, icon_inactive, icon_active) {
  bookmark.addEventListener("click", () => {
    const svg = bookmark.querySelector("svg");
    const state = svg.getAttribute("js-data");

    if (state === "bookmark-ic") {
      bookmark.innerHTML = icon_active;
    } else if (state === "bookmark-ac") {
      bookmark.innerHTML = icon_inactive;
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
