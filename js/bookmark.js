console.log("bookmark.js loaded!");

const bookmarks = document.getElementsByClassName("card__bookmark-icon");

for (let i = 0; i < bookmarks.length; i++) {
  let bookmark = bookmarks[i];

  bookmarks[i].addEventListener("click", () => {
    let source = bookmark.src;

    if (source.endsWith("outline.svg")) {
      bookmark.src = "../assets/bookmark_filled.svg";
    } else if (source.endsWith("filled.svg")) {
      bookmark.src = "../assets/bookmark_outline.svg";
    }
  });
}
