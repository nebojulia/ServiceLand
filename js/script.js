"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const close = document.querySelector("#close");
  const menu = document.querySelector("#menu");

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

  if (document.body.classList === "open-nav") {
    document.onclick = function (event) {
      let target = event.target;

      if (event.target.classList !== "page__menu") {
        closeMenu();
      }

      function closeMenu() {
        document.body.classList.toggle("open-nav");
      }
    };
  }
});
