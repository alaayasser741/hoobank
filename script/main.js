const navbarToggle = document.querySelector(".toggle i");
const closeSideMenu = document.querySelector(".close i");
const sideMenu = document.querySelector(".links");
const overlay = document.querySelector(".overlay");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    sideMenu.style.left = "0";
    overlay.style.display = "block";
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  });
}
if (closeSideMenu) {
  closeSideMenu.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  });
}
if (overlay) {
  overlay.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
  });
}
// nav Scroll
const myNav = document.querySelector("#nav");
window.onscroll = function () {
  if (document.body.scrollTop >= 97|| document.documentElement.scrollTop > 97) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
