let navbarToggle = document.querySelector(".toggle i");
let closeSideMenu = document.querySelector(".close i");
let sideMenu = document.querySelector(".links");
let overlay = document.querySelector(".overlay");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    sideMenu.style.left = "0";
    overlay.style.display = "block";
  });
}
if (closeSideMenu) {
  closeSideMenu.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
  });
}
if (overlay) {
  overlay.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
  });
}
// nav Scroll
let myNav = document.querySelector("#nav");
console.log(myNav)
window.onscroll = function () {
  if (document.body.scrollTop >= 97|| document.documentElement.scrollTop > 97) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
