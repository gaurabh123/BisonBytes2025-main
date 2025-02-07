document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target.href;

      document.body.classList.add("page-transition-exit-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });

  window.addEventListener("load", () => {
    document.body.classList.add("page-transition-enter-active");
  });
});
