function myFunction(x) {
  x.classList.toggle("change");
}
const header = document.querySelector("header");
const menuBtn = document.querySelector(".container");
const menuOptions = document.querySelector(".media__menu--options");
menuBtn.addEventListener("click", function () {
  menuOptions.classList.toggle("hidden");
});

const offerBtn = document.querySelector(".nav__offer");
const offer = document.querySelector(".offer");

const scrollArr = document.querySelector(".scroll__to__top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollArr.style.display = "block";
  } else {
    scrollArr.style.display = "none";
  }
}
scrollArr.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
});
