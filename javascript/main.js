// Activating Responsive Navigation Button
// Variables:
const navList = document.querySelector(".responsive-nav");
const navBrand = document.querySelector(".responsive-brand");
const menuBtn = document.querySelector(".fa-bars");
let showMenu = false;

menuBtn.addEventListener("click", revealMenu);

function revealMenu() {
  if (!showMenu) {
    navList.classList.add("reveal");
    navBrand.classList.add("addBorder");
    menuBtn.classList.add("rotate");
    showMenu = true;
  } else {
    navList.classList.remove("reveal");
    navBrand.classList.remove("addBorder");
    menuBtn.classList.remove("rotate");
    showMenu = false;
  }
}

// Activate Nav Resize On Window Scroll
// Variables:
const nav = document.querySelector("#main-nav");
const navHeight = nav.offsetHeight;
const brand = document.querySelector(".nav-brand");
const navItems = document.querySelectorAll(".nav-link");

window.onscroll = function () {
  this.stickyNav();
};

function stickyNav() {
  if (window.scrollY > navHeight) {
    nav.style.padding = "0px";
    nav.style.backgroundColor = "rgb(71, 108, 151)";
  } else {
    nav.style.padding = "10px";
    nav.style.backgroundColor = "rgb(71, 108, 151, 0.308)";
  }
}
