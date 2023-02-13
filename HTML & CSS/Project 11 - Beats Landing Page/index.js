const togglebar = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist");

togglebar.addEventListener("click", () => {
  togglebar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

