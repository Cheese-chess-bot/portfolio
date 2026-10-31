// script.js
// GitHub Pages: place index.html, style.css, and script.js together
// at the root of your publishing branch. No build step is required.

"use strict";

(() => {
  const toolbar = document.querySelector(".work-toolbar");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll("[data-category]")];
  const resultCount = document.querySelector(".result-count");

  if (toolbar && filters.length && projects.length && resultCount) {
    const applyFilter = (category) => {
      let visibleCount = 0;

      for (const project of projects) {
        const visible =
          category === "all" || project.dataset.category === category;

        project.hidden = !visible;

        if (visible) {
          visibleCount += 1;
        }
      }

      for (const button of filters) {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.filter === category)
        );
      }

      const noun = visibleCount === 1 ? "project" : "projects";
      resultCount.textContent =
        `${String(visibleCount).padStart(2, "0")} ${noun}`;
    };

    for (const button of filters) {
      button.addEventListener("click", () => {
        applyFilter(button.dataset.filter);
      });
    }

    applyFilter("all");
    toolbar.hidden = false;
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();