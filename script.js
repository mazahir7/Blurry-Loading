"use strict";

const bg = document.querySelector(".bg");
const loadingNum = document.querySelector(".loading-num");

let loading = 0;

let n = setInterval(bluring, 30);


function bluring() {

  loading++;

  if (loading > 99) {
    clearInterval(n);
  }
  loadingNum.innerHTML = `${loading}%`
  loadingNum.style.opacity = scale(loading, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;


}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

