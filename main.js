document.addEventListener("DOMContentLoaded", () => {
  const presents = document.querySelectorAll(".present");
  presents.forEach(present => {
    present.onmouseover = () => {
      if (!present.classList.contains("is-open")) {
        present.classList.add("is-open");
      }
    };
    present.onmouseout = () => {
      if (present.classList.contains("is-open")) {
        present.classList.remove("is-open");
      }
    };
  });
});
