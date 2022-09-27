const body = document.getElementById("body");

const menuBtn = document.getElementById("menu-btn");
const firstSlice = document.querySelector("#menu-btn div:first-child");
const lastSlice = document.querySelector("#menu-btn div:last-child");
const burgerMenu = document.getElementById("burger-menu");

menuBtn.addEventListener("click", () => {
  firstSlice.classList.toggle("rotate-45");
  firstSlice.classList.toggle("translate-y-[5px]");
  lastSlice.classList.toggle("-rotate-45");
  lastSlice.classList.toggle("-translate-y-[5px]");
  burgerMenu.classList.toggle("sm:block");
  body.classList.toggle("overflow-hidden");
});
