const tanya = document.querySelector(".first");
const john = document.querySelector(".second");
const nextEl = document.querySelectorAll(".next");
const previewEl = document.querySelectorAll(".prev");

nextEl.forEach(nextEl => {
   nextEl.addEventListener("click", () => {
john.style.display = "flex"
tanya.style.display = "none"
})})

previewEl.forEach(previewEl => {
  previewEl.addEventListener("click", () => {
  tanya.style.display = "flex"
  john.style.display = "none"
  })})