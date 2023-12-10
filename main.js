let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
const mainElement = document.querySelector("main");
const bodyElement = document.body;
let lineOne = document.querySelector(".burger-line__one");
let lineTwo = document.querySelector(".burger-line__two");
let cross = false;

burger.addEventListener("click", function () {
  if (cross === false) {
    menu.classList.remove("hidden");
    mainElement.classList.add("blur");
    bodyElement.classList.add("no-scroll");
    lineOne.classList.add("cross__line__one");
    lineTwo.classList.add("cross__line__two");
    cross = true;
  } else {
    menu.classList.add("hidden");
    mainElement.classList.remove("blur");
    bodyElement.classList.remove("no-scroll");
    lineOne.classList.remove("cross__line__one");
    lineTwo.classList.remove("cross__line__two");
    cross = false;
  }
});

let basicAmount = document.querySelector(".basic__amount");
let proAmount = document.querySelector(".pro__amount");
let businessAmount = document.querySelector(".business__amount");
let perMonthOrYear = document.querySelectorAll(".per__month__or__year");
let toggled = false;

document.getElementById("toggle__box").addEventListener("click", function () {
  if (toggled === true) {
    basicAmount.textContent = "$19.00";
    proAmount.textContent = "$39.00";
    businessAmount.textContent = "$99.00";
    perMonthOrYear.forEach(function (element) {
      element.textContent = "per month";
    });
    toggled = false;
    console.log("clicked");
  } else {
    basicAmount.textContent = "$190.00";
    proAmount.textContent = "$390.00";
    businessAmount.textContent = "$990.00";
    perMonthOrYear.forEach(function (element) {
      element.textContent = "per year";
    });
    toggled = true;
  }
});
