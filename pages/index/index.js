import createNavbar from "../../components/navbar/navbar.js";
import { loadCards, saveCards } from "../../utilities/localstorage.js";
import createCard from "../../components/card/card.js";

/* --- navbar --- */
createNavbar();

/* --- cards --- */
const cards = loadCards(); // load cards obj from local storage
const cardList = document.querySelector('[js-data="card-list"]');

cards.forEach((card) => {
  const cardCreated = createCard(card.question, card.answer, card.tagsList);
  cardList.append(cardCreated);
});
