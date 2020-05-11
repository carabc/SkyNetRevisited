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
    nav.style.boxShadow = "0px 0px 10px 0px black";
  } else {
    nav.style.padding = "10px";
    nav.style.backgroundColor = "rgb(71, 108, 151, 0.308)";
    nav.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
  }
}

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

//Parallax
const landingTitles = document.querySelector("#showcase .title-container");
const showcaseHeight = document.querySelector("#showcase-nav").offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY < showcaseHeight) {
    console.log(
      `scrolling, Pixels From Top: ${window.scrollY}, Height of Showcase: ${showcaseHeight}`
    );
    landingTitles.style.transform = `translate(0, ${window.scrollY / 2}%)`;
    document.querySelector("#showcase-nav").style.backgroundPositionY = `${
      window.scrollY / 1.5
    }%`;
  }
});

// Activate Smooth Scroll With jQuery
$("#main-nav a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
