import createNavbar from "../../components/navbar/navbar.js";
import createCard from "../../components/card/card.js";

/* --- navbar --- */
createNavbar();

/* --- cards --- */
const cardList = document.querySelector('[js-data="card-list"]');

const cards_storage = [
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis possimus, dignissimos voluptates cupiditate doloremque voluptatum consectetur velit magnam eaque eius amet molestias, ea eveniet laborum veritatis perspiciatis quod nisi.",
    tagsList: ["html", "CSS", "flexbox", "more", "more"],
  },
  {
    question: "This is another question just for testing bla bla bla?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis possimus, dignissimos voluptates cupiditate doloremque voluptatum consectetur velit magnam eaque eius amet molestias, ea eveniet laborum veritatis perspiciatis quod nisi.",
    tagsList: ["html", "CSS", "flexbox"],
  },
  {
    question: "This is YET another question, again just for testing?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis possimus, dignissimos voluptates cupiditate doloremque voluptatum consectetur velit magnam eaque eius amet molestias, ea eveniet laborum veritatis perspiciatis quod nisi.",
    tagsList: ["html", "CSS", "flexbox", "more", "more"],
  },
];

cards_storage.forEach((card) => {
  const cardCreated = createCard(card.question, card.answer, card.tagsList);
  cardList.append(cardCreated);
});
