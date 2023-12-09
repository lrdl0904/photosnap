import "./style.css";
import "./media.css";

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
