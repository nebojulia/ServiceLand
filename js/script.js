"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const navTriggers = document.querySelectorAll("[data-nav-trigger]");

  if (navTriggers) {
    navTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        document.body.classList.toggle("open-nav");
      });
    });
  }
});

document.addEventListener("click", (e) => {
  if (document.body.classList.contains("open-nav")) {
    const target = e.target;
    if (!target.closest(".page__menu") && !target.hasAttribute("data-nav-trigger")) {
      document.body.classList.toggle("open-nav");
    }
  }
});
