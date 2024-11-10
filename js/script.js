"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  const close = document.querySelector("#close");

  if (burger) {
    burger.addEventListener("click", () => {
      document.body.classList.toggle("open-nav");
      menu.classList.toggle("menu-open");
      document.querySelector(".page").classList.toggle("menu__blur");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      document.body.classList.toggle("open-nav");
      menu.classList.toggle("menu-open");
      document.querySelector(".page").classList.toggle("menu__blur");
    });
  }
});
