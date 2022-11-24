const hamburger = document.querySelector(".hamburger"),
      navbar = document.querySelector(".navbar__wrapper"),
      cross = document.querySelector(".hamburger.close");




hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("close")
});