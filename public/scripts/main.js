const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.toggle(expandClass);
});
window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !menuToggle.contains(e.target)) {
    menuHeader.classList.remove(expandClass);
  }
});