const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  nav.classList.toggle("open");
});
