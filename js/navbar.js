console.clear();
console.log("navbar.js loaded");

const footer = document.querySelector("footer");

const nav_content = [
  {
    href: "../index.html",
    aria_label: "go to home page",
    img_src: "../assets/home.png",
    img_alt: "home-icon",
  },
  {
    href: "../bookmarks.html",
    aria_label: "go to bookmarks page",
    img_src: "../assets/bookmarks.png",
    img_alt: "bookmarks-icon",
  },
  {
    href: "../addCards.html",
    aria_label: "go to add-cards page",
    img_src: "../assets/add.svg",
    img_alt: "add-icon",
  },
  {
    href: "../profile.html",
    aria_label: "go to profile page",
    img_src: "../assets/profile.png",
    img_alt: "profile-icon",
  },
];

const nav = document.createElement("nav");
const nav_list = document.createElement("ul");
nav_list.classList.add("navbar");
nav.append(nav_list);

document.body.append(nav);

nav_content.forEach((item) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.classList.add("grow");
  anchor.href = item.href;
  anchor.ariaLabel = item.aria_label;
});
