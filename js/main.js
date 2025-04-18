// Katalog menu hamburger ##############################################################

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
});
