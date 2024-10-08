const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const cards = document.querySelectorAll(".card");
const task = document.querySelector(".task-block");
const extra = document.querySelector(".extra-block");
const taskBtn = document.querySelector(".task");
const extraBtn = document.querySelector(".extra");
const collapseBtn = document.querySelectorAll(".collapse-btn");
tham.addEventListener("click", () => {
  nav.classList.toggle("open");
  tham.classList.toggle("tham-active");
});

for (let card = 0; card < cards.length; card++) {
  let cardItem = cards[card];
} // taskBtn.addEventListener("click", () => {
//   task.classList.toggle("open-card");
//   collapseBtn.classList.toggle("rotate");
// });
// extraBtn.addEventListener("click", () => {
//   extra.classList.toggle("open-card");
//   collapseBtn.classList.toggle("rotate");
// });
