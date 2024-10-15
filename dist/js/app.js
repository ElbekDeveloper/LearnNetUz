const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const cards = document.querySelectorAll(".card");
const body = document.querySelector("body");
if (tham) {
  tham.addEventListener("click", () => {
    nav.classList.toggle("open");
    tham.classList.toggle("tham-active");
    body.classList.toggle("body");
  });
}

cards.forEach((cardItem) => {
  const taskBtn = cardItem.querySelector(".task");
  const extraBtn = cardItem.querySelector(".extra");
  const task = cardItem.querySelector(".task-block");
  const extra = cardItem.querySelector(".extra-block");

  if (taskBtn) {
    taskBtn.addEventListener("click", () => {
      task.classList.toggle("open-task");
      const collapseBtn = taskBtn.querySelector(".collapse-btn");
      if (collapseBtn) {
        collapseBtn.classList.toggle("rotate");
      }
    });
  }

  if (extraBtn) {
    extraBtn.addEventListener("click", () => {
      extra.classList.toggle("open-task");
      const collapseBtn = extraBtn.querySelector(".collapse-btn");
      if (collapseBtn) {
        collapseBtn.classList.toggle("rotate");
      }
    });
  }
});
