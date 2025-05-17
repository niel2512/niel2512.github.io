//navbar fixed
// window.addEventListener =
//   ("scroll",
//   function () {
//     const header = document.querySelector("header");
//     const fixedNav = header.offsetTop;

//     if (window.pageYOffset > fixedNav) {
//       header.classList.add("navbar-fixed");
//     } else {
//       header.classList.remove("navbar-fixed");
//     }
//   });
//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// agar bisa close nav menu jika di kllik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
