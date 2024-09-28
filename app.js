const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const taskTitle = document.querySelector('.task-title')
const cardTask = document.querySelector('.card-task')
tham.addEventListener("click", () => {
  nav.classList.toggle("open");
  tham.classList.toggle("tham-active");
});
taskTitle.addEventListener('click',()=>{
  
})