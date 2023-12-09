import "./style.css";
import "./media.css";

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
