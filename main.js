const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const cardWrap = document.querySelector(".card-wrap");
const cardSlideTask = document.querySelector(".card-slide-task");
const cardSlideExtra = document.querySelector(".card-slide-extra");
const taskBtn = document.querySelector(".task");
const extraBtn = document.querySelector(".extra");

tham.addEventListener("click", () => {
  nav.classList.toggle("open");
  tham.classList.toggle("tham-active");
});

taskBtn.addEventListener("click", () => {
  cardSlideTask.classList.toggle("open-card");
});
extraBtn.addEventListener("click", () => {
  cardSlideExtra.classList.toggle("open-card");
});
