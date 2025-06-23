import "./index.css";

const dropdown = {
  dropdown: document.querySelector(".dropdown"),
  items: document.querySelector(".dropdown-items"),
  open: false,

  toggleState() {
    this.open = !this.open;
  },
};

dropdown.dropdown.addEventListener("click", () => {
  dropdown.toggleState();

  if (dropdown.open) {
    dropdown.items.classList.remove("is-hidden");
  } else {
    dropdown.items.classList.add("is-hidden");
  }
});

let selectedImg = 0;

const forwBtn = document.querySelector(".forw-btn");
const backBtn = document.querySelector(".back-btn");
const carrouselImages = Array.from(
  document.querySelector(".carrousel-images").querySelectorAll("img"),
);
const indicators = Array.from(
  document.querySelector(".carrousel-indicators").querySelectorAll("span"),
);

forwBtn.addEventListener("click", () => {
  if (selectedImg < 2) {
    selectedImg++;
  } else {
    selectedImg = 0;
  }

  carrouselImages.map((i) => (i.className = ""));
  carrouselImages[selectedImg].classList.add("is-selected");
  indicators.map((i) => (i.className = ""));
  indicators[selectedImg].classList.add("is-active");
});

backBtn.addEventListener("click", () => {
  if (selectedImg > 0) {
    selectedImg--;
  } else {
    selectedImg = 2;
  }

  carrouselImages.map((i) => (i.className = ""));
  carrouselImages[selectedImg].classList.add("is-selected");
  indicators.map((i) => (i.className = ""));
  indicators[selectedImg].classList.add("is-active");
});
