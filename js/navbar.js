export default function createNavbar() {
  const footer = document.querySelector("footer");

  const nav_content = [
    {
      file_name: "index.html",
      href: "./index.html",
      aria_label: "go to home page",
      icon: {
        src: "../assets/home.png",
        alt: "home-icon",
      },
    },
    {
      file_name: "bookmarks.html",
      href: "./bookmarks.html",
      aria_label: "go to bookmarks page",
      icon: {
        src: "../assets/bookmarks.png",
        alt: "bookmarks-icon",
      },
    },
    {
      file_name: "addCards.html",
      href: "./addCards.html",
      aria_label: "go to add-cards page",
      icon: {
        src: "../assets/add.svg",
        alt: "add-icon",
      },
    },
    {
      file_name: "profile.html",
      href: "./profile.html",
      aria_label: "go to profile page",
      icon: {
        src: "../assets/profile.png",
        alt: "profile-icon",
      },
    },
  ];

  const nav = document.createElement("nav");
  const nav_list = document.createElement("ul");
  nav_list.classList.add("navbar");

  nav.append(nav_list);
  footer.append(nav);

  nav_content.forEach((item) => {
    const listItem = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.classList.add("grow");
    anchor.href = item.href;
    anchor.ariaLabel = item.aria_label;

    const icon = document.createElement("img");
    icon.classList.add("navbar__icon");
    icon.src = item.icon.src;
    icon.alt = item.icon.alt;

    addUnderlineCurrPage(item.file_name, anchor);

    anchor.append(icon);
    listItem.append(anchor);
    nav_list.append(listItem);
  });
}

function addUnderlineCurrPage(fileName, anchor) {
  const currURL = window.location.href;
  const currFileName = currURL.substring(currURL.lastIndexOf("/") + 1);
  console.log(currFileName);
  console.log(fileName);
  if (fileName === currFileName) {
    anchor.classList.add("current");
  }
}
