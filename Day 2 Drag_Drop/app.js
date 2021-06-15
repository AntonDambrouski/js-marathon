const items = document.querySelectorAll(".item");
const placeHolders = document.querySelectorAll(".placeholder");
let currentItem;

items.forEach((item) => {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
});

placeHolders.forEach((placeHolder) => {
  placeHolder.addEventListener("dragover", dragover);
  placeHolder.addEventListener("dragenter", dragenter);
  placeHolder.addEventListener("dragleave", dragleave);
  placeHolder.addEventListener("drop", dragdrop);
});

function dragstart(event) {
  event.target.classList.add("hold");
  currentItem = event.target;
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  if (
    event.target.childElementCount === 0 &&
    event.target.tagName.toUpperCase() == "DIV"
  ) {
    event.target.append(currentItem);
  }

  event.target.classList.remove("hovered");
}
