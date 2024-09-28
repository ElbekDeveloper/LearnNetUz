const tham = document.querySelector(".tham");
const nav = document.querySelector("nav");
const taskTitle = document.querySelector('.task-title')
const cardTask = document.querySelector('.card-task')
tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  nav.classList.toggle("open");
});
taskTitle.addEventListener('click',()=>{
  
})