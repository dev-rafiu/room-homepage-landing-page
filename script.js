const hero = document.querySelector(".hero");
const menuBtn = document.querySelector("[data-menu-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const nav = document.querySelector("[data-nav]");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");
const shopItems = document.querySelectorAll(".shop-item");
// console.log(shopItems);
const Images = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];
let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  shopItems[0].style.display = "block";
  hero.style.backgroundImage = `url("${Images[currentItem]}")`;
});

function updateContent() {
  hero.style.backgroundImage = imgSrc;
  introTitle.innerText = title;
  introBody.innerText = body;
}

menuBtn.addEventListener("click", () => {
  nav.classList.add("show-nav");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("show-nav");
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = Images.length - 1;
  }
  clearContent();
  shopItems[currentItem].style.display = "block";
  hero.style.backgroundImage = `url("${Images[currentItem]}")`;
});

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > Images.length - 1) {
    currentItem = 0;
  }
  clearContent();
  shopItems[currentItem].style.display = "block";
  hero.style.backgroundImage = `url("${Images[currentItem]}")`;
});

function clearContent() {
  shopItems.forEach((item) => {
    item.style.display = "none";
  });
}
