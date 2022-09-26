const body = document.getElementById("body");

const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const burgerMenu = document.getElementById("burger-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  burgerMenu.classList.add("sm:block");
  body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  burgerMenu.classList.remove("sm:block");
  body.classList.remove("overflow-hidden");
});
