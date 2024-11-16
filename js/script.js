"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const close = document.querySelector("#close");

  if (burger) {
    burger.addEventListener("click", () => {
      document.body.classList.toggle("open-nav");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      document.body.classList.toggle("open-nav");
    });
  }
});
