const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const cardTask = document.querySelector(".card-task");
const taskTitle = document.querySelector(".task-title");
const cardWrap = document.querySelector(".card-wrap");
tham.addEventListener("click", () => {
  nav.classList.toggle("open");
  tham.classList.toggle("tham-active");
});
taskTitle.addEventListener("click", () => {
  cardTask.classList.toggle("open-card");
});
