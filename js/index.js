import createCard from "./card.js";

console.log("index.js loaded!");

const cardList = document.querySelector('[js-data="card-list"]');

/* - delete - */
const question = "Lorem ipsum dolor sit, amet consectetur adipisicing elit?";
const answer =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis possimus, dignissimos voluptates cupiditate doloremque voluptatum consectetur velit magnam eaque eius amet molestias, ea eveniet laborum veritatis perspiciatis quod nisi.";
const tagsList = ["html", "CSS", "flexbox"];
/* - delete - */

createCard(question, answer, tagsList, cardList);
createCard(question, answer, tagsList, cardList);
createCard(question, answer, tagsList, cardList);
createCard(question, answer, tagsList, cardList);
